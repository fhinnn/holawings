const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    allowedHosts: 'all', // penting untuk menghindari Invalid Host header
    host: '0.0.0.0',      // biar bisa diakses dari luar container
    port: 8080,           // wajib: Cloud Run pakai port 8080
    hot: true             // opsional: aktifkan hot reloading
  }
});
