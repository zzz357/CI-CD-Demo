const path = require("path");
module.exports = {
  // 设置为开发模式
  mode: "development",
  // 入口文件
  entry: "./app.js",
  // 环境
  target: "node",
  // 设置输出
  output: {
    // 输出目录
    path: path.resolve(__dirname, "dist"),
    // 输出文件名
    filename: "bundle.js",
  },
  resolve: {
    // 解析 .js
    extensions: [".js"],
  },
};