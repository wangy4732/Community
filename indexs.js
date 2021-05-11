const axios = require('axios')

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3003/publicCaptcha',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})

console.log(instance)
/* const axios = require('axios')
// 获取远端图片
axios({
  method: 'get',
  url: 'http://127.0.0.1:3003/publicCaptcha',
  responseType: 'stream'
}).then((response) => {
  const res = response.data
  console.log(res)
})
 */

/* //object.assign()
let targetObj1 = { a: 1 }
let sourceObj1 = { b: 1 }
const sourceObj11 = { c: 3 }
const result = Object.assign(targetObj1, sourceObj1, sourceObj11)
console.log(result)
console.log('targetObj1' + JSON.stringify(targetObj1))
console.log('sourceObj1' + JSON.stringify(sourceObj1))
console.log('sourceObj11' + JSON.stringify(sourceObj11))
 */
