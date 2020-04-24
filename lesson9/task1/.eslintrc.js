module.exports = {
    extends: "eslint-config-airbnb-base",
    rules: {
        "no-console": 0,
        "import/prefer-default-export": "off"
    },
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'module'
    },
    env: {
        browser: true,
    }

};