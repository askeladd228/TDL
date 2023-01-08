const path = require('path');

module.exports = {
  entry: {
    "index": './src/index.js',
    "project": './src/project.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};