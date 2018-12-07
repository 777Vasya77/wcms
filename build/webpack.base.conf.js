const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * Vue-loader v15 has major breaking changes.
 * If your vue-loader version is 15 and above,
 * you should add VueLoaderPlugin like this in your webpack config.
 * https://github.com/vuejs/vue-loader/tree/next
*/
const { VueLoaderPlugin } = require('vue-loader')

const mainSTYL = new ExtractTextPlugin('css/main.css');
const themeCSS = new ExtractTextPlugin('css/black.css');

module.exports = {
  // Entry main JS
  entry: [
     './src/index.js',
     './src/stylus/theme/black.css',
  ],
  // Output main JS
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, '../static'),
    //! Server fix
    publicPath: 'http://localhost:8080/wcms/wex/static'
    //* To deploy
    // publicPath: '/wcms/wex/static/js'
  },
  // Server
  devServer: {
    overlay: true
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },{
        /* Babel */
        test: /\.js$/,
        loader: 'babel-loader',
        // Prevent node_modules !!!
        exclude: '/node_modules/'
      }, {
        /* Stylus */
        test: /\.styl$/,
        use: mainSTYL.extract({
          use: [{
              //TODO FIX MODULES
              loader: 'css-loader'
            }, {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'src/js/postcss.config.js'
                }
              },
            }, {
              loader: 'stylus-loader',
              options: {
                'include css': true,
                preferPathResolver: 'webpack',
              },
          }]
        })
      }, {
        // For other library
        test: /\.css$/,
        use: themeCSS.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'src/js/postcss.config.js'
              }
            },
          }]
        })
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  // Plugins
  plugins: [
    // Extract css
    // new ExtractTextPlugin('css/[name].css'),
    mainSTYL,
    themeCSS,
    // vue-loader version is 15 and above
    new VueLoaderPlugin(),
    // Fix codemirror
    new webpack.IgnorePlugin(/^codemirror$/)

    // new webpack.DefinePlugin({
      // 'require.specified': 'require.resolve'
    // })
  ]
}