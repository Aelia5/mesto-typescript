const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const production = env.production;
  return {
    entry: { main: './src/pages/index.js' },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: production
        ? 'scripts/[name].[contenthash].js'
        : 'scripts/[name].js',
    },
    mode: 'development',
    devServer: {
      static: path.resolve(__dirname, './dist'),
      compress: true,
      port: 8080,
      hot: true,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/',
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]',
          },
        },
        {
          test: /\.css$/,
          use: [
            production ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
      }),
    ],
    devtool: production ? false : 'eval-source-map',
  };
};
