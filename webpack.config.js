const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8888',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // // bundle the client for hot reloading
    // // only- means to only hot reload for successful updates

    './src/index.tsx',
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/static/',
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.ts', '.tsx'],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new webpack.DefinePlugin({
      'process.env': {
        GRAPHQL_ENDPOINT: JSON.stringify(process.env.GRAPHQL_ENDPOINT),
        AUTH0_CLIENT_ID: JSON.stringify(process.env.AUTH0_CLIENT_ID),
        AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
        AUTH0_AUDIENCE: JSON.stringify(process.env.AUTH0_AUDIENCE),
        WEB_ROOT: JSON.stringify(process.env.WEB_ROOT),
        ENV: JSON.stringify(process.env.ENV),
      },
    }),
  ],

  devServer: {
    // contentBase: require('path').join(__dirname, "./"),
    host: 'localhost',
    port: 8888,
    historyApiFallback: true,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['awesome-typescript-loader'],
      },
      {
        test: /\.js?$/,
        loader: ['babel-loader'],
        exclude: /node_modules/,
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      // https://github.com/gajus/react-css-modules#css-modules
      {
        test: /\.css$/,
        loader: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};
