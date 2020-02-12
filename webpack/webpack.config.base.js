const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	// Entry points declared for the app
	entry: {
		app: './src/app/index.js',
		admin: './src/admin/index.js'
	},

	output: {
		path: path.join(__dirname, '../build'),
		filename: 'js/[name].bundle.js',
		chunkFilename: 'js/[name].js',
		publicPath: '/'
	},

	optimization: {
		splitChunks: {
			name: 'vendor',
			chunks: 'initial'
		}
	},
	// Loaders
	module: {
		// Babel loaders for JS and JSX files
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						// exclude: '/node_modules/',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react',
								'@babel/preset-flow'
							],
							plugins: ['@babel/plugin-transform-runtime']
						}
					}
				]
			},
			{
				// Url (assets) loader
				test: /\.(png|jpg|jpeg|gif|woff|eot|ttf|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000000,
							fallback: 'file-loader',
							name: '[name].[ext]',
							publicPath: '/build/assets/'
						}
					}
				]
			}
		]
	},

	// Plugins
	plugins: [
		new Dotenv()
	]
};
