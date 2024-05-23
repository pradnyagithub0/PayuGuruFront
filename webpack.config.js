const Dotenv = require('dotenv-webpack');

module.exports = {
  // Entry point and other configurations
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // JavaScript/JSX Files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Image Files
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/', // Output directory for the images
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
