<template>
  <div id="login">
    <div class="layui-container">
      <form class="layui-form  layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-inline">
            <input type="text"
              name="name"
              required
              v-model="name"
              v-validate="'required|email'"
              lay-verify="required"
              placeholder="请输入用户名"
              autocomplete="off"
              class="layui-input">
          </div>
          <div class=" error layui-form-mid">{{errors.first('name')}}</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password"
              name="password"
              required
              v-validate="'min:6|max:12'"
              v-model="password"
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input">
          </div>
          <div class=" error layui-form-mid">{{errors.first('password')}}</div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text"
              name="captcha"
              required
              v-validate="'length:4'"
              v-model="code"
              lay-verify="required"
              placeholder="请输入密码"
              autocomplete="off"
              class="layui-input">
          </div>
          <div class="layui-form-mid layui-word-aux svg" v-html="svg" @click="getCaptcha()">验证码</div>
          <div class=" error layui-form-mid">{{errors.first('captcha')}}</div>
        </div>
        <button type="button"
          class="layui-btn"
          @click="checkForm()">点击登陆</button>
        <a href="http://www.layui.com" class="find-word">找回密码</a>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: '',
      errorMesssge: []
    }
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3003/publicCaptcha').then((res) => {
        if (res.status === 200) {
          const obj = res.data
          if (obj.code === 200) {
            this.svg = obj.data
          }
        }
      })
    },
    checkForm () {
      this.errorMesssge = []
      if (!this.name) {
        this.errorMesssge.push('请输入登陆名或账号')
      }
      if (!this.password) {
        this.errorMesssge.push('请输入密码')
      }
      if (!this.code) {
        this.errorMesssge.push('请输入验证码')
      }
    }
  },
  mounted () {
    this.getCaptcha()
  }
}
</script>
<style lang="scss" scoped>
#app {
  background: #2c3e50;
}
.layui-container{
  background-color: #fff;
}
input{
  width: 190px;
}
.find-word{
  margin-left: 10px;
  &:hover{
    color: #009688;
  }
}
.svg{
  position: relative;
  top: -10px;
}
.error{
  color: #ff0000;
}
</style>
