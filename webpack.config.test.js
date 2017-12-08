module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    modules: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.html$/,
        exclude: /(.+\.template\.html)/,
        loader: 'html-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },
    ],
  },
};
