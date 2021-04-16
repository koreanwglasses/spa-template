const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]_[hash:base64:5]",
                exportLocalsConvention: "camelCase",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
});
