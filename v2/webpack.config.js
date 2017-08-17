
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './app/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'app/'),
    compress: true,
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'sass-loader'
        }]
      }
    ]
  },
}
