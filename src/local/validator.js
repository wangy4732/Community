import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: filed => '请输入' + filed,
      email: () => '请输入正确的邮箱格式',
      min: () => '密码必须大于6位数字或字母',
      max: () => '密码必须小于12位数字或字母',
      length: () => '验证码长度要求为4'
    },
    attributes: {
      name: '账号',
      email: '邮箱',
      password: '6～12位数字或字母作为密码',
      repassword: '密码',
      captcha: '验证码',
      username: '昵称'
    }
  }
}

Validator.localize(dictionary)
