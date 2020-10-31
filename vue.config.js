module.exports = {
  configureWebpack: {
  },
  devServer: {
    host: 'localhost',
    hot: true,
    port: 8080,
    open: 'Chrome',
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      },
      '/*': {
        target: 'http://localhost:8000',
        secure: false,
        ws: false
      },
      '/ws/': {
        target: 'http://localhost:8000',
        secure: false,
        ws: false
      },
      '!/': {
        target: 'http://localhost:8000',
        secure: false,
        ws: false
      }
    }
  }
}