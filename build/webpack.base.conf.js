const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//! autoprefixer ??
const autoprefixer = require('autoprefixer');

/**
 * Vue-loader v15 has major breaking changes.
 * If your vue-loader version is 15 and above,
 * you should add VueLoaderPlugin like this in your webpack config.
 * https://github.com/vuejs/vue-loader/tree/next
*/
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
  // Entry main JS
  entry: {
    app: './src/index.js'
  },
  // Output main JS
  output: {
    //TODO Fix js/
    filename: 'js/main.js',
    path: path.resolve(__dirname, '../wcms/wex/static'),
    //! Server fix
    publicPath: 'http://localhost:8080/wcms/wex/static'
    // To deploy
    // publicPath: '/wcms/wex/static/js'
  },
  // Server
  devServer: {
    // Help message !!!
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
        test: /\.(css|styl)$/,
        // loader: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'postcss-loader', 'stylus-loader?sourceMap'])
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
    //TODO fix css/
    new ExtractTextPlugin('css/main.css'),
    // vue-loader version is 15 and above
    new VueLoaderPlugin()
  ]
}
