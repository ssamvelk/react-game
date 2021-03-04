const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const devtool = isProduction ? false : 'eval-cheap-module-source-map';

  const jsLoaders = () => {
    const loaders = [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ];

    if (!isProduction) {
      loaders.push('eslint-loader');
    }
    return loaders;
  };

  const config = {
    mode: isProduction ? 'production' : 'development',
    target: isProduction ? 'browserslist' : 'web',
    devtool,
    watch: !isProduction,
    entry: ['./src/index.tsx'],
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, './dist'),
      filename: 'script.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: jsLoaders(),
        },
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav|mpe?g)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'static/[hash][ext][query]',
          },
        },
        {
          test: /\.tsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript'],
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
            },
            {
              loader: 'ts-loader',
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'static/fonts/',
              },
            },
          ],
        },
      ],
    },

    devServer: {
      port: 8081,
      contentBase: './dist',
    },

    optimization: {
      minimize: isProduction,
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
  };

  return config;
};
