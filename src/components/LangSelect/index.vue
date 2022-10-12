<template>
    <el-dropdown trigger="click" @command="handleLanguage">
      <div>
        <el-tooltip content="国际化">
          <svg-icon icon="language" />
        </el-tooltip>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="lang === 'zh'" command="zh">中文</el-dropdown-item>
          <el-dropdown-item :disabled="lang === 'en'" command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>

<script setup>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'

const store = useStore()
const lang = computed(() => store.getters.language)

const i18n = useI18n()
const handleLanguage = (language) => {
  store.commit('app/setLanguage', language)
  i18n.locale.value = language
  ElMessage.success('更新成功')
}
</script>

<style>

</style>
