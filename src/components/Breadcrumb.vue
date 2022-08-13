<template>
  <el-breadcrumb class="breadcrumb" separator="/">
  <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in breadcrumbData" :key="item.path">
        <a href="#"
          v-if="index !== breadcrumbData.length - 1"
          @click.prevent="onClick(item.path)"
          class="redirect">
          {{item.meta.title}}
        </a>
      <span class="no-redirect" v-else>{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(item => item.meta && item.meta.title)
}
watch(route, () => {
  getBreadcrumbData()
}, {
  immediate: true
})

const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
    &:hover {
      color: v-bind(linkHoverColor);
    }
  }
}
</style>
