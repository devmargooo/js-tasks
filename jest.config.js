module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ['**/?(*.)+(spec|test).ts'],
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
