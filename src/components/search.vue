<script setup lang="ts">
import {SearchOutlined} from '@ant-design/icons-vue'
import {onMounted, useTemplateRef} from "vue";

const emit = defineEmits(["refs"])
const search = useTemplateRef("search")

onMounted(() => emit("refs", search.value))
</script>

<template>
  <div ref="search" class="search">
    <div class="icon">
      <SearchOutlined />
    </div>
    <input placeholder="搜索历史记录" type="text">
  </div>
</template>

<style scoped lang="scss">
@use "styles/search.module";
</style>