const { watch } = require('fs')
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // 💡 추가설정들
  watch: true, // 파일 수정 후 저장시 자동으로 다시 빌드
  experiments: {
    topLevelAwait: true // 모듈 await 가능하도록
  },
  
  target: ['web', 'es5'], // ⭐ ES5 이하로 해야 할 시 필요
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "ie 11" }]
            ]
          }
        }
      }
    ]
  }
}