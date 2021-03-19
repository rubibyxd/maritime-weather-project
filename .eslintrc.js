module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        // add more generic rulesets here, such as:
        'eslint:recommended',
        'plugin:vue/recommended',
        '@vue/standard'
    ],
    rules: {
        semi: ['error', 'never'],
        indent: ['error', 4],
        'vue/html-indent': ['error', 4, { baseIndent: 1 }],
        'vue/max-attributes-per-line': ['error', {
            singleline: 1,
            multiline: {
                max: 1,
                allowFirstLine: true
            }
        }],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never'
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
