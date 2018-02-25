const path = require('path');

module.exports = {
  entry: './lib/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    globalObject: 'this',
    library: 'JenkinsCronValidator',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },
};
