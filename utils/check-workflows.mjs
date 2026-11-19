#!/usr/bin/env node
// Guards the GitHub Actions supply-chain hardening (WLUP-7262, WLUP-7263).
// Fails when:
//   - any `uses:` reference is not pinned to a full 40-char commit SHA
//   - the Chromatic workflow grants `contents: write`
//   - the publish workflow (which holds the npm token) restores any Actions cache
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const workflowsDir = join(dirname(fileURLToPath(import.meta.url)), "..", ".github", "workflows");

const files = readdirSync(workflowsDir).filter(f => /\.ya?ml$/.test(f));
const errors = [];

const stripComment = line => line.replace(/\s#.*$/, "");

for (const file of files) {
    const lines = readFileSync(join(workflowsDir, file), "utf8").split(/\r?\n/);

    lines.forEach((raw, i) => {
        const line = stripComment(raw);
        const where = `${file}:${i + 1}`;

        const uses = line.match(/^\s*(?:-\s*)?uses:\s*["']?([^"'\s]+)/);
        if (uses) {
            const ref = uses[1];
            // Local actions (./path) and docker images are out of scope.
            if (!ref.startsWith("./") && !ref.startsWith("docker://") && !/@[0-9a-f]{40}$/.test(ref)) {
                errors.push(`${where}: "${ref}" is not pinned to a full commit SHA`);
            }
        }

        if (file.startsWith("chromatic.") && /^\s*contents:\s*write\b/.test(line)) {
            errors.push(`${where}: Chromatic workflow must not grant "contents: write"`);
        }

        if (file.startsWith("publish.") && (/^\s*cache:/.test(line) || /uses:\s*actions\/cache[@/]/.test(line))) {
            errors.push(`${where}: publish workflow must not restore an Actions cache (cache poisoning)`);
        }
    });
}

if (errors.length > 0) {
    console.error(`Workflow check failed:\n${errors.map(e => `  - ${e}`).join("\n")}`);
    process.exit(1);
}

console.log(`Workflow check passed (${files.length} files).`);
