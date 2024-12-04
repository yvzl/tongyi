<script setup lang="ts">
import {ref} from "vue"
import Header from 'components/Header.vue'
import Dialog from 'components/Dialog.vue'
import ChatInput from 'components/chatInput.vue'
import type {IAnswer} from "@/types"

const value = ref("")

const data: IAnswer[] = [{
  id: 1,
  type: "user",
  content: "",
}, {
  id: 2,
  type: "chat",
  content: "",
}, {
  id: 3,
  type: "user",
  content: "",
}, {
  id: 4,
  type: "chat",
  content: "",
},{
  id: 5,
  type: "user",
  content: "",
}, {
  id: 6,
  type: "chat",
  content: "",
}, {
  id: 7,
  type: "user",
  content: "",
}, {
  id: 8,
  type: "chat",
  content: "",
},{
  id: 9,
  type: "user",
  content: "",
}, {
  id: 10,
  type: "chat",
  content: "",
}, {
  id: 11,
  type: "user",
  content: "",
}, {
  id: 12,
  type: "chat",
  content: "",
}]
</script>

<template>
  <div class="content">
    <Header/>
    <Dialog :data="data"/>
    <ChatInput :value="value" style="margin-bottom: 25px"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/content.module";
</style>