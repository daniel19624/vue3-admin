<template>
    <div class="login-container">
      <!-- 标题 -->
      <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginFormRef">
        <div class="login-title">
          <h2 class="title">用户登录</h2>
        </div>
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon="user" />
          </span>
            <el-input type="text" name="username" placeholder="username"  v-model="loginForm.username"/>
        </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon="password" />
          </span>
          <el-input :type="passwordType" name="password" placeholder="password" v-model="loginForm.password"/>
          <span class="show-pwd" @click="changePasswordType">
            <svg-icon :icon="passwordType === 'password' ? 'eye': 'eye-open'" />
          </span>
        </el-form-item>
        <el-button
        type="primary"
         style="width: 100%; margin-bottom: 30px"
         @click="handleLogin"
         :loading="loading">
         登录
         </el-button>
      </el-form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'
// 定义登录表单的数据
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 定义响应式对象
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名必填'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

// 定义password的初始状态
const passwordType = ref('password')
const changePasswordType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}
// 处理登录逻辑
// 定义登录接口的loading值
const loading = ref(false)
const loginFormRef = ref(null)
const store = useStore()
const handleLogin = () => {
  // 进行表单校验
  loginFormRef.value.validate(valid => {
    if (!valid) return
    loading.value = true
    store.dispatch('user/login', loginForm.value).then(data => {
      console.log('登录成功', data)
      loading.value = false
    }).catch(err => {
      console.log('登录失败', err)
      loading.value = false
    })
  })
}
</script>

<style lang="scss" scoped>
      $bg: #2d3a4b;
      $light_gray: #eee;
      $dark_gray: #889aa4;
      .login-container {
        width: 100%;
        height: 100%;
        background-color: $bg;
      }
      .login-form {
        width: 520px;
        margin: 0 auto;
        padding: 160px 35px 0;
        .login-title {
          width: 100%;
          .title {
            width: 520px;
            margin: 0 auto 40px auto;
            text-align: center;
            font-size: 26px;
            color: #fff;
          }
        }
        ::v-deep .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
            .el-input {
              display: inline-block;
              height: 47px;
              width: 85%;
              input{
                height: 100%;
                // background-color: red;
                border: none;
                border-radius: 0;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                background-color: transparent;
              }
            }
        }
        .svg-container {
          display: inline-block;
          padding: 6px 5px 6px 15px;
          vertical-align: middle;
        }
        .show-pwd {
          position: absolute;
          right: 10px;
          font-size: 16px;
          color: $dark_gray;
          cursor: pointer;
          user-select: none;
        }
      }
</style>
