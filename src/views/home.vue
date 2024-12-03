<script setup lang="ts">
import Aside from "components/aside.vue";
import Content from "components/content.vue";
</script>

<template>
  <div class="home">
    <div class="main">
      <Aside/>
      <Content/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "styles/home.module";
</style>