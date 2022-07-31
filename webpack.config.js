const path = require('path')
const webpack = require('webpack')

module.exports = env => {
  return {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.ENV": JSON.stringify(process.env.NODE_ENV)
      })
    ],
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist/public/js'),
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
};
