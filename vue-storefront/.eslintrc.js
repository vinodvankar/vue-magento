const { resolve } = require("path");

module.exports = {
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true,
    commonjs: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: [
      resolve(__dirname, "./tsconfig.json"),
      resolve(__dirname, "./tests/e2e/tsconfig.json")
    ],
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".vue"],
    ecmaVersion: 2021,
    sourceType: "script"
  },
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:vue/base",
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:vue/strongly-recommended",
    "plugin:jest/recommended"
  ],
  globals: {
    "__ENV": "readonly",
    ga: true, // Google Analytics
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true
  },
  rules: {
    // region ESLINT RULES
    "no-console": (process.env.NODE_ENV === "production") ? "error" : "off",
    "no-debugger": (process.env.NODE_ENV === "production") ? "error" : "off",
    "prefer-promise-reject-errors": "off",
    "no-shadow": "off",
    "no-redeclare": "off",
    "no-unused-vars": "off",
    "no-case-declarations": 0,
    quotes: ["warn", "single"],
    "no-unused-expressions": ["warn", {
      allowShortCircuit: true,
      allowTernary: true
    }],
    "max-len": ["error", {
      code: 150,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true
    }],
    "class-methods-use-this": "off",
    "no-new": 0,
    "no-param-reassign": ["error", {
      props: true,
      ignorePropertyModificationsFor: [
        "state", // for vuex state
        "acc", // for reduce accumulators
        "e", // for e.returnvalue
        "options" // for decorators
      ]
    }],
    // endregion
    // region UNICORN RULES
    "unicorn/no-null": 0,
    "unicorn/no-reduce": 0,
    "unicorn/no-array-for-each": 0,
    "unicorn/prevent-abbreviations": 0,
    "unicorn/no-object-as-default-parameter": 0,
    "unicorn/no-abusive-eslint-disable": 0,
    "unicorn/consistent-function-scoping": 0,
    "unicorn/consistent-destructuring": 0,
    "unicorn/filename-case": [
      0,
      {
        cases: {
          kebabCase: false,
          pascalCase: true,
          camelCase: true
        },
        // ignore UPPER_CASE markdown filenames
        ignore: [/^[A-Z](([\dA-Z]+_)*[\dA-Z]+)?\.(mdx|d\.ts)?$/]
      }
    ],
    "unicorn/no-new-array": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prefer-array-some": "off",
    "unicorn/catch-error-name": [
      2,
      {
        name: "error",
        ignore: ["^e(rr)?$"]
      }
    ],
    "unicorn/prefer-logical-operator-over-ternary": 0,
    "unicorn/prefer-node-protocol": 0,
    // endregion
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-redeclare": ["error"],
    "@typescript-eslint/indent": ["warn", 2],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      ignoreRestSiblings: true,
      argsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^ignore"
    }],
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "UPPER_CASE"]
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"]
      },
      {
        selector: "typeLike",
        format: ["PascalCase", "UPPER_CASE"]
      }
    ],
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-unnecessary-type-assertion": 0,
    "@typescript-eslint/unbound-method": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-self-import": "off",
    "import/export": "off",
    "import/no-cycle": "off",
    "import/prefer-default-export": "off", // Allow single Named-export
    "import/extensions": "off",
    "vue/block-lang": ["error",
      {
        script: {
          lang: "ts"
        }
      }
    ],
    "vue/multi-word-component-names": "off",
    "vue/no-setup-props-destructure": 0,
    "vue/no-v-html": 0,
    "vue/no-v-text-v-html-on-component": 0,
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    "jest/no-disabled-tests": "warn",
    "jest/prefer-to-have-length": "warn",
    "@typescript-eslint/no-floating-promises": "off",
    "jest/expect-expect": [
      "error",
      {
        "assertFunctionNames": ["expect", "getByRole", "getByTestId", "getByText"]
      }
    ],
    "no-plusplus": "off"
  },
  overrides: [
    {
      "files": ["tests/e2e/**/*"],
      "rules": {
        "jest/expect-expect": "off",
        "promise/catch-or-return": "off", // conflicts with Cypress.Chainable
        "promise/always-return": "off",
        "vue/no-v-text-v-html-on-component": "warn",
        "vue/no-setup-props-destructure": "warn"
      }
    }
  ],
  plugins: [
    "unicorn",
    "@typescript-eslint",
    "import",
    "vue",
    "jest"
  ],
  settings: {
    "import/extensions": [
      ".js",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue"
    ],
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".mjs",
          ".ts",
          ".tsx",
          ".vue"
        ]
      },
      typescript: {}
    }
  }
};

