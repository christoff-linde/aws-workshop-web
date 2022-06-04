module.exports = {
  plugins: ["@typescript-eslint", "prettier", "react-hooks"],
  rules: {
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
    "prettier/prettier": "error",
    "no-console": [
      "error",
      {
        allow: ["warn", "error"],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: false,
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
      },
    ],
    // note you must disable the base rule as it can report incorrect errors
    camelcase: "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    console: false,
    alert: false,
    require: false,
    setTimeout: false,
    clearTimeout: false,
    setInterval: false,
    clearInterval: false,
    process: false,
    fetch: false,
    localStorage: false,
    Intl: false,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off", //
      },
    },
  ],
}
