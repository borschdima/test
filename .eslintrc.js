module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: ['airbnb-typescript'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', { props: false }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/button-has-type': 'off',
    'no-confusing-arrow': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
    ],
    'quote-props': ['error', 'as-needed'],
    'react/state-in-constructor': ['error', 'never'],
    'react/jsx-props-no-spreading': [0, {
      html: 'ignore' || 'enforce',
      custom: 'ignore' || 'enforce',
      explicitSpread: 'ignore' || 'enforce',
    }],
    'react/no-unescaped-entities': [0],
    'no-console': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id',
        ],
      },
    ],
    'react/no-danger': 0,
    'react/require-default-props': [0, { forbidDefaultForRequired: 0, ignoreFunctionalComponents: 0 }],
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
  },
};
