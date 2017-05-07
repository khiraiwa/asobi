var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './src/ts/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
	    {
		enforce: 'pre',
		test: /\.js$/,
		loader: "source-map-loader"
	    },
	    {
		enforce: 'pre',
		test: /\.tsx?$/,
		use: "source-map-loader"
	    }
	]
    },
    resolve: {
	extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
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
