const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'assets',
    library: 'react-auth0',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'app')],
        issuer: { test, include },
        enforce: 'pre',
        enforce: 'post',
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        },
      },
    ],
  },
  plugins: [new webpack.EnvironmentPlugin(['DOMAIN', 'CLIENT_ID'])],
}
