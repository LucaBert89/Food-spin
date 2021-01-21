const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
  entry: "./src/js/button.js",
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
   assetModuleFilename: 'images/[name].[ext]'
  },
    devServer: {
        contentBase: './dist',
      },
    module: {
        rules: [
            {
            // scss loader
            test: /\.scss$/,
            use: [
                // MINICSSPLUGIN: generate a style.css file inside dist folder with better performance (not through js). I added the public path because of an error
                {
                    loader: MiniCssExtractPlugin.loader,
                    options : {
                        publicPath:"./"
                    },
                },
                {
                    loader: "css-loader",
                },
                {
                    loader: "sass-loader",
                }
            ],
            },
            { 
                // fonts loader
                test: /\.(woff|woff2|eot|ttf)$/,
                type: 'asset/resource',
              },
            // video
          // images asset/resouce: take all the images and put them to destination folder images
          { 
            test: /\.(png|svg|jpg|jpeg|webp)$/i,
            type:"asset/resource",
            generator: {
              filename: 'images/[name].[ext]'
            }
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        favicon: 'src/assets/images/favicon/favicon-logo.svg',
        template: path.resolve(__dirname, "src", "index.html"),
        }),
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, "src", "assets","images", "imagePreview", "image-preview.png"),
              to: "images"
            }
          ],
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
          }),
    ]
};