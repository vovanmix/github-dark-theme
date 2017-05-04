var dev = process.env.NODE_ENV != 'production';
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCSS = new ExtractTextPlugin('app.css');

module.exports = {
  entry: __dirname + "/src/app.less",
  output: {
    path: __dirname + "/dist/app",
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader' ])
      },
      {
       test: /\.less$/,
       use: extractCSS.extract({
         fallback: 'style-loader',
         use: ['css-loader', 'less-loader']
       })
     }
    ]
  },
  resolve: {
    modules: ["node_modules"]
  },
  plugins: [
    extractCSS
  ]
};
