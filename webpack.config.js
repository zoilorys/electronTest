'use strict';

const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const plugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(NODE_ENV)
		}
	})
];

if (NODE_ENV.toLowerCase() === 'production') {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: true
		})
	);
}

module.exports = {
	entry: {
		entry: './src/entry',
	},

	output: {
		path: __dirname + "/dist",
		filename: 'bundle.js'
	},

	target: 'electron',

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015', 'stage-2']
			}
		},
		{
			test: /node_modules\/username\/.*\.js$/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'stage-2']
			}
		}]
	},

	plugins: plugins
};
