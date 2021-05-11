# pets

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 登陆模块
1.1图形验证码
1.2表单验证（vuelidate、veeValidate）
veevalidate2.x
method1
import zhCN from 'vee-validate/dist/locale/zh_CN'
import veeValidate, { Validator } from 'vee-validate'

Vue.use(veeValidate)
Validator.localize('zh_CN', zhCN)
method2
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
1.3组件拆分
