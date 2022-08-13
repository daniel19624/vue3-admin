<template>
  <div class="app-wrapper" :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']">
        <div>
          <Sidebar
            class="sidebar-container"
            :style="{ backgroundColor: variables.menuBg }"
          />
        </div>
        <div class="main-container">
          <div class="fixed-header">
             <Navbar/>
          </div>
          <AppMain/>
        </div>
  </div>
</template>

<script setup>
import Sidebar from './components/sidebar/index.vue'
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import variables from '@/style/variables.scss'

</script>

<style lang="scss" scoped>
@import '~@/style/mixin.scss';
@import '~@/style/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
