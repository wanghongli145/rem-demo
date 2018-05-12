var webpack = require('webpack');
var glob = require('glob'); 
const path = require('path');
var autoprefixer = require('autoprefixer'); 
var entries = getEntry('public/js/*.js');
var chunks = Object.keys(entries);
const config = {
  watch: true,
  entry: entries,
  output: {
    filename: '[name].js',
    path: __dirname + '/public/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {test: /\.css$/,loader: 'style-loader!css-loader'},
      {test: /\.scss$/,loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.jpg$/, use: [ "file-loader" ] },
      {test: /\.png$/, loader: 'url-loader?limit=1&name=images/[name].[ext]' },
      {test: /\.svg/, loader: 'svg-url-loader'}
    ]
  },
};

module.exports = config;

function getEntry(globPath, pathDir) {
  var files = glob.sync(globPath); 
  console.log(files) 
  var entries = {},
    entry, dirname, basename, pathname, extname;
    for (var i = 0; i < files.length; i++) {
      entry = files[i];
      extname = path.extname(entry);
      basename = path.basename(entry, extname);
      entries[basename] = ['./' + entry];
    }
  return entries;
}
