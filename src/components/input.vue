<script setup lang="ts">
import {Textarea} from "ant-design-vue";
import {ref} from "vue"

const str = ref<string>("111")
</script>

<template>
  <div class="input">
    <Textarea v-model="str" placeholder="遇事不决问通义" :bordered="false" :autoSize="{ minRows: 1, maxRows: 4 }"
              :maxlength="5000" resize="none"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/input.module";
</style>