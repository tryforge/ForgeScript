const js = require("@eslint/js")
const tsParser = require("@typescript-eslint/parser")
const tsPlugin = require("@typescript-eslint/eslint-plugin")
const globals = require("globals")

module.exports = [
    {
        ignores: ["./.github", "./dist"],
    },

    js.configs.recommended,

    {
        languageOptions: {
            ecmaVersion: 2021,
            globals: {
                ...globals.node,
            },
        },
    },

    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            "no-unused-vars": "off",
            "no-undef": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "no-dupe-class-members": "off",
        },
    },

    {
        rules: {
            indent: ["error", 4, { SwitchCase: 1 }],
            quotes: ["error", "double"],
            semi: ["error", "never"],
        },
    },
]