module.exports = {
  entry: {
    app: ['./main.js']
  },
  output: {
    filename: 'bundle.js'
  },
  progress: true,
  colors: true,
  inline: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0']
        }
      },
      { test: /\.hbs$/, loader: "handlebars-loader" },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  resolve: {
    alias: {
    }
  }
};