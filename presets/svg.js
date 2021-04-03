module.exports = () => (neutrino) => {
  // neutrino.config.resolve.extensions.add('.svg');

  neutrino.config.merge({
    module: {
      rule: {
        image: {
          test: /\.(ico|png|jpg|jpeg|gif|webp)(\?v=\d+\.\d+\.\d+)?$/,
        },
      },
    },
  });

  // const test = neutrino.config.module
  //   .rule('image')
  //   .get('test')
  //   .toString()
  //   .replace('|svg', '');
  //
  // neutrino.config.module.rule('image').test(test);

  const isProduction = process.env.NODE_ENV === 'production';

  neutrino.config.module
    .rule('svg')
    .test(/\.svg$/)
    .use('webpack')
    .loader('@svgr/webpack')
    .options({
      svgAttributes: { role: 'img' },
      titleProp: true,
    })
    .end()
    .use('file')
    .loader('file-loader')
    .options({
      name: isProduction ? 'assets/[name].[hash:8].[ext]' : 'assets/[name].[ext]',
    });
};
