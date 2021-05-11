import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './local/veevalidator'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/**
// vee-validate method1 to zh-cn
// import zhCN from 'vee-validate/dist/locale/zh_CN'
import veeValidate, { Validator } from 'vee-validate'

// vee-validate method2 to zh-cn and costum
import './local/validator'

Vue.use(veeValidate)

// vee-validate method2 to zh-cn and costum
const validator = new Validator()
validator.localize('zh-CN')
*/

// vee-validate method1 to zh-cn
// Validator.localize('zh_CN', zhCN)
/* equal method2
Vue.use(veeValidate, {
  locale: 'zh-CN',
  dictionary: {
    'zh-CN': {
      messages: {
        required: filed => '请输入' + filed,
        email: () => '请输入正确的邮箱格式'
      },
      attributes: {
        name: '账号',
        email: '邮箱',
        password: '密码'
      }
    }
  }
})
*/
