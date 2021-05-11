import { extend, localize } from 'vee-validate'
import { required, email, length, min, confirmed } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('required', required)
extend('email', email)
extend('length', length)
extend('min', min)
extend('confirmed', confirmed)

localize('zh_CN', {
  messages: {
    ...zh.messages,
    required: '请输入{_field_}'
  },
  names: {
    name: '账号',
    email: '邮箱',
    password: '密码',
    repassword: '密码',
    captcha: '验证码',
    username: '昵称'
  },
  fields: {
    required: filed => '请输入' + filed,
    name: {
      email: '请输入正确的邮箱',
      required: '请输入{_field_}'
    },
    password: {
      min: '密码必须大于6位数字或字母'
    },
    max: () => '密码必须小于12位数字或字母',
    length: {
      captcha: '验证码长度要求为4'
    }
  }
})
