const Dotenv = require('dotenv-webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    // Other webpack configuration options...
        module: {
          optimization: {
        minimize: true,
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },
      rules: [
        // Other rules...
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
    };
    