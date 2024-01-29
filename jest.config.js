module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.js$': 'babel-jest'
    },
    testMatch: ['**/tests/unit/**/*.spec.[jt]s?(x)'],
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
};