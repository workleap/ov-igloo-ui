import path from "path";
import typescript from "rollup-plugin-typescript2";
import cleanup from "rollup-plugin-cleanup";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import postcss from "rollup-plugin-postcss";
import camelcase from "camelcase";
import alias from "@rollup/plugin-alias";

import autoprefixer from "autoprefixer";
import flexbugs from "postcss-flexbugs-fixes";

const SCOPE = "@igloo-ui";
const DIST = "./dist";
const FORMAT = "es";

function capitalize(string) {
    return camelcase(string, { pascalCase: true });
}

function handleName(name) {
    if (!name) {return null;}

    const componentName = name.replace(`${SCOPE}/`, "");

    const component = capitalize(componentName);
    const style = componentName;

    return {
        component,
        style
    };
}

function injectCssImport(file) {
    return {
        name: "plugin-css-import",
        renderChunk(code) {
            return {
                code: `import './${file}';\n${code}`,
                map: { mappings: "" }
            };
        }
    };
}

// Runtime dependencies that must NOT be inlined into each package's dist output.
// These stay in each package's "dependencies" so consumers auto-install them,
// but rollup treats them as external so the consumer's bundler deduplicates them.
const externalPatterns = [
    // React — must be a single instance
    /^react$/,
    /^react-dom(\/.*)?$/,
    // Igloo cross-deps — shared context (same reason as provider, see original comment below)
    /^@igloo-ui\//,
    // Hopper tokens
    /^@hopper-ui\//,
    // Floating UI
    /^@floating-ui\//,
    // Lexical (text-editor)
    /^lexical$/,
    /^@lexical\//,
    // React Aria
    /^react-aria/,
    /^@react-aria\//,
    /^@react-stately\//,
    /^@internationalized\//,
    // Other shared runtime deps
    /^classnames$/,
    /^framer-motion(\/.*)?$/,
    /^recharts(\/.*)?$/,
    /^luxon$/,
    /^graphemer$/,
    /^autosize$/,
    /^use-sync-external-store(\/.*)?$/
];

function isExternal(id) {
    return externalPatterns.some(pattern => pattern.test(id));
}

export function createRollupConfig(packageName) {
    const { component, style } = handleName(packageName);

    return {
        input: path.resolve(__dirname, `./src/${component}.tsx`),
        output: {
            file: path.resolve(DIST, `${component}.js`),
            format: FORMAT,
            name: component,
            sourcemap: true
        },
        external: isExternal,
        plugins: [
            postcss({
                plugins: [autoprefixer(), flexbugs()],
                extract: path.resolve(DIST, `${style}.css`),
                minimize: true
            }),
            alias({
                entries: {
                    find: "@shared/components",
                    replacement: "../../../shared/components"
                }
            }),
            resolve(),
            json(),
            typescript({
                useTsconfigDeclarationDir: true,
                tsconfigOverride: {
                    exclude: ["**/*.stories.*", "**/*.test.*"]
                },
                clean: true,
                tsconfig: path.resolve(__dirname, "./tsconfig.json")
            }),
            commonjs({
                exclude: "node_modules",
                ignoreGlobal: true
            }),
            injectCssImport(`${style}.css`),
            cleanup({
                comments: "none",
                extensions: [".ts"]
            })
        ]
    };
}
