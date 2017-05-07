const Path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/ts/index.ts',
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true
      },
      minimize: true
    })
  ]
};
