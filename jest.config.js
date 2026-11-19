module.exports = {
    roots: ["<rootDir>/packages/"],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        "<rootDir>/setupTests.js"
    ],
    coverageDirectory: "<rootDir>/coverage/",
    collectCoverageFrom: ["<rootDir>/packages/*/src/**/*.{js,jsx,ts,tsx}"],
    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
    },
    preset: "ts-jest/presets/js-with-babel",
    transformIgnorePatterns: [
        // pnpm stores packages under node_modules/.pnpm/<scope>+<name>@<version>/node_modules/<scope>/<name>
        "node_modules/(?!(?:\\.pnpm/)?(?:@igloo-ui|@react-hook|@hopper-ui)[+/])"
    ]
};
