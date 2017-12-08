const testWebpackConfig = require('./webpack.config.test.js');

module.exports = (config) => {
  config.set({
    basePath: '',

    frameworks: ['jasmine', 'jasmine-matchers'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'components/**/*.test.js',
    ],

    exclude: [],

    preprocessors: {
      'components/**/*.test.js': ['webpack', 'sourcemap'],
    },

    webpack: testWebpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true,
    },

    reporters: ['mocha'],

    mochaReporter: {
      ignoreSkipped: true,
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity,

    browserNoActivityTimeout: 60000,
  });
};
