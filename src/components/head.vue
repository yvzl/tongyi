<script setup lang="ts">
import head from 'images/head.png'

withDefaults(defineProps<{ imgSrc?: string }>(), {imgSrc: head as string})
</script>

<template>
  <div class="head">
    <img :src="imgSrc" alt="head"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/head.module";
</style>