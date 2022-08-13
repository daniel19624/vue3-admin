<template>
  <div class="fixed-header">
    <Hamburger class="hamburger-container"/>
    <Breadcrumb class="breadcrumb-container" />
    <div class="right">
      <el-dropdown trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
          ></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item>课程主页</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Router from '@/router/index.js'
import Hamburger from '@/components/hamburger.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
  Router.push('/login')
}
</script>

<style lang="scss" scoped>
.right {
  float: right;
}
::v-deep(.avatar-wrapper) {
    overflow: hidden;
    padding-right: 5px;
    .el-icon-s-tools {
      display: none;
    }
}
.fixed-header {
  .breadcrumb-container {
    float: left;
  }
}

.hamburger-container {
  line-height: 46px;
  height: 100%;
  cursor: pointer;
  float: left;
  transition: background 0.5s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}
</style>
