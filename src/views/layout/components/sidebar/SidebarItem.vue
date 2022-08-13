<template>
  <el-submenu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon"/>
    </template>
    <SidebarItem
    v-for="item in route.children"
    :key="item.path"
    :route="item"/>
  </el-submenu>
  <el-menu-item v-else :index="route.path">
    <MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
  </el-menu-item>
</template>

<script setup>
import MenuItem from './MenuItem.vue'
import { defineProps } from 'vue'

defineProps({
  route: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
</style>
