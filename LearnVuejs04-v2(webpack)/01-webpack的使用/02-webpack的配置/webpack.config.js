// 从node包里引入文件
const path = require('path')
// commonjs
module.exports = {
  // 入口
  entry: './src/main.js',
  // 出口
  output: {
    // __dirname是node定义的全局变量，用于获取路径
    // path.resolve用于拼接路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
}