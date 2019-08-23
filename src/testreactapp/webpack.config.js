var path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'sourcemaps',
	cache: true,
	mode: 'development',
	output: {
		path: __dirname,
		filename: '../main/resources/static/built/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ 'react', 'es2015', 'stage-0' ]
					}
				}
			},
			{ test: /\.svg$/, loader: 'svg-inline-loader' },
			{
				test: path.join(__dirname, '.'),
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ 'react', 'es2015', 'stage-0' ]
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx' ]
	}
};
