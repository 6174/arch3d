var webpack = require("webpack");
const glob = require('glob');

var config = {
  watch: true,
  entry: {
    vendor: [
      'antd',
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'isomorphic-fetch',
      'immutable'
    ]
  },
  output: {
    path: __dirname + '/dist/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'stage-0', 'react'] }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'stage-0', 'react' ] }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'] 
  }
};

/**
 * find entries
 */
var files = glob.sync('./src/js/*/index.js');
var newEntries = files.reduce(function(memo, file) {
  var name = /.*\/(.*?)\/index\.js/.exec(file)[1];
  memo[name] = entry(name);
  return memo;
}, {});

config.entry = Object.assign({}, config.entry, newEntries);

/**
 * [entry description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function entry(name) {
  return './src/js/' + name + '/index.js';
}

module.exports = config;