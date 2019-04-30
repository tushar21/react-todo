const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const webpack = require('webpack');

module.exports = env => { 

  return {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
  },
  /* devtool: "source-map", */
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      { 
        test: /\.(ts|tsx)?$/, 
        use: {
          loader: 'ts-loader'
        }              
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      /* { enforce: "pre", test: /\.js$/, loader: "source-map-loader" } */
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),

    // check if the defineplugin working or not. Have not used this variable anywhere in app though 
    new webpack.DefinePlugin({
      __SERVER__: JSON.stringify('https://dev.example.com')
    })
  ]
}
};