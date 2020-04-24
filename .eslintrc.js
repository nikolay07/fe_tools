module.exports = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 0,
        'import/prefer-default-export': 0,
        'no-use-before-define': 0,
        'no-const-assign': 0
    },
    parserOptions: {
        ecmaScript: 10,
        sourceType: 'module'
    },
    env: {
        browser: true,
    }
};