<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user">
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name: 'login'}">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">邮箱</label>
                  <validation-provider name="name" rules="required|email" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="name"
                        placeholder="请输入账号"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid layui-word-aux">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <validation-provider name="username" rules="required" v-slot="{errors}">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        id="L_username"
                        name="username"
                        required
                        placeholder="请输入昵称"
                        lay-verify="required"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid layui-word-aux">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <validation-provider name="password" rules="required|min" vid="confirmation" v-slot="{errors}">
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        id="L_pass"
                        name="password"
                        required
                        placeholder="请输入密码"
                        lay-verify="required"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid layui-word-aux">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <validation-provider name="password" rules="required" v-slot="{errors}">
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        id="L_repass"
                        name="repassword"
                        required
                        placeholder="请输入密码"
                        lay-verify="required"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid layui-word-aux">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                    <label for="L_vercode" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        id="L_vercode"
                        name="captcha"
                        required
                        lay-verify="required"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="">
                      <span class="svg" style="color: #c00;" v-html="svg" @click="getCaptcha()">验证码</span>
                    </div>
                    <div class="layui-form-mid layui-word-aux"></div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode } from '../api/login'
import { ValidationProvider } from 'vee-validate'

export default {
  name: '',
  data () {
    return {
      svg: ''
    }
  },
  components: {
    ValidationProvider
    // ValidationObserver
  },
  methods: {
    getCaptcha () {
      getCode().then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  },
  mounted () {
    this.getCaptcha()
  }
}
</script>
<style scoped>
.svg{
  position: relative;
  top: -5px;
}
</style>
