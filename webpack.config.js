const path = require("path");

module.exports = {
  name: "server",
  entry: "./index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
};
