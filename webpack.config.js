 var webpack = require("webpack");
 let path = require("path");

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "app/assets/scripts/App.js"),
	output: {
		path: path.resolve(__dirname, "app/temp/scripts"),
		filename: "App.js"
	},

	module: {
		rules: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}