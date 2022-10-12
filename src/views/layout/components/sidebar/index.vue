<template>
  <div class="sidebar-container">
    <div class="logo-container">
      <el-avatar
      :size="44"
      shape="square"
      src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png">
      </el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">Daniel-学习系统</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SideBarMenu'

// import { useRouter } from 'vue-router'
// const router = useRouter()
</script>

<style lang="scss" scoped>
.sidebar-container {
  .logo-container {
      height: 44px;
      padding: 10px 0 22px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo-title {
        margin-left: 10px;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 16px;
        white-space: nowrap;
      }
  }
}
</style>
