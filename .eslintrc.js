module.exports = {
  env: {
    browser: true,
  },
  extends: ["strict-check/react-max", "./config/eslint/react/"],
  ignorePatterns: ["**/coverage/**", "**/.next/**"],
  overrides: [
    {
      files: ["**/app/**/{layout,page}.tsx"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    "tsdoc/syntax": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      },
    },
  },
}
