module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    module: true,
    process: true,
    Promise: true,
  },
  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks', 'sort-imports-es6-autofix'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/all',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  rules: {
    // Base
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': [2, 'as-needed'],
    'max-lines': 2,
    'no-console': 1,
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['.*/'],
            message: 'Relative imports from parent directories are not allowed, use absolute paths instead.',
          },
        ],
      },
    ],
    'no-shadow': 0,
    'no-use-before-define': 0,
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    quotes: [2, 'single', { avoidEscape: true }],
    'sort-keys': 0,
    'sort-vars': [2, { ignoreCase: false }],
    // Import
    'import/extensions': [
      2,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/namespace': [2, { allowComputed: true }],
    'import/no-anonymous-default-export': [2, { allowObject: true }],
    'import/no-unresolved': 2,
    'sort-imports-es6-autofix/sort-imports-es6': [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none'],
      },
    ],
    // A11y
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-onchange': 0,
    // Prettier
    'prettier/prettier': [
      2,
      {
        printWidth: 120,
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
    ],
    // React
    'react/forbid-component-props': 0,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-curly-brace-presence': [2, { props: 'never', children: 'ignore' }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-handler-names': 0,
    'react/jsx-max-depth': [2, { max: 5 }],
    'react/jsx-no-bind': 2,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    'react/no-multi-comp': 0,
    'react/no-set-state': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/require-optimization': 0,
    'react/sort-prop-types': [
      2,
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: false,
      },
    ],
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
  },
  overrides: [
    // TypeScript
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
        },
      },
      globals: {
        React: 'writable',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [2, { allowExpressions: true }],
        '@typescript-eslint/no-shadow': 2,
        '@typescript-eslint/no-use-before-define': 2,
      },
    },
  ],
}
