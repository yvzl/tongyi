<script setup lang="ts">
import Upload from 'components/upload.vue'
import Input from 'components/input.vue'
import Submit from 'components/submit.vue'
</script>

<template>
  <div class="chat-input">
    <Upload/>
    <Input style="margin: 0 16px"/>
    <Submit/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/chatInput.module";
</style>