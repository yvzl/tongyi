<script setup lang="ts">
import Header from 'components/Header.vue'
import Dialog from 'components/Dialog.vue'
import ChatInput from 'components/chatInput.vue'
</script>

<template>
  <div class="content">
    <Header/>
    <Dialog :data="[]"/>
    <ChatInput style="margin-bottom: 25px"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/content.module";
</style>