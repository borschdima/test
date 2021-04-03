const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');
const eslint = require('@neutrinojs/eslint');
const copy = require('@neutrinojs/copy');
const typescript = require('neutrinojs-typescript');
const svg = require('./presets/svg');

module.exports = {
  options: {
    mains: {
      index: './index.tsx',
    },
    root: __dirname,
  },
  use: [
    typescript({
      tsconfig: {
        compilerOptions: {
          types: ['node'],
          allowJs: true,
          skipLibCheck: true,
          strict: true,
          forceConsistentCasingInFileNames: true,
          noFallthroughCasesInSwitch: true,
          noImplicitAny: false,
        },
        include: ['src'], // sources and tests are included by default
      },
    }),
    (neutrino) => {
      neutrino.use(
        eslint({
          eslint: {
            useEslintrc: true,
          },
        }),
      );
    },
    copy({
      patterns: [
        {
          context: 'src/static',
          from: '**/*',
          to: 'static',
        },
      ],
    }),
    jest(),
    (neutrino) => {
      const isProduction = process.env.NODE_ENV === 'production';

      neutrino.use(react({
        devServer: {
          port: process.env.PORT || 4000,
        },
        html: {
          LOCALE_NAME: isProduction ? '<%= LOCALE_NAME %>' : 'ru',
          PAGE_FAVICON: '/static/favicon.ico',
          PAGE_TITLE: 'Test assignment Minerva',
          template: 'src/index.ejs',
        },
        style: {
          test: /\.(css|sass|scss)$/,
          modulesTest: /\.module\.(css|sass|scss)$/,
          loaders: [
            {
              loader: require.resolve('sass-loader'),
              useId: 'sass',
            },
          ],
        },
        image: {
          limit: 1,
        },
      }));
    },
    svg(),
  ],
};
