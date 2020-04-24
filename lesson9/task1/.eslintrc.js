module.exports = {
    extends: 'eslint-config-airbnb-base',
   rules: {
       'no-console': 1,
       eqeqeq: 2
   },
   parserOptions: {
       ecmaScript: 10,
       sourceType: 'module'
   },
   env: {
       browser:true,
   }
};