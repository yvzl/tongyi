<script setup lang="ts">
import {ref} from "vue"
import {storeToRefs} from "pinia";
import {dialogStore} from "@/stores"
import {getSelectData} from "@/utils"
import Header from 'components/Header.vue'
import Dialog from 'components/Dialog.vue'
import ChatInput from 'components/chatInput.vue'

const {dialogData, selectState} = storeToRefs(dialogStore())
const value = ref(``)
</script>

<template>
  <div class="content">
    <Header/>
    <Dialog :data="getSelectData(dialogData, selectState)"/>
    <ChatInput :value="value" style="margin-bottom: 25px"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/content.module";
</style>