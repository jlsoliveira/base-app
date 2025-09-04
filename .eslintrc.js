module.exports = {
  root: true,
  extends: [
    "@react-native",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  },
  overrides: [
    {
      files: ['metro.config.js', '*.config.js', '*.config.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
