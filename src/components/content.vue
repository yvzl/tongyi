<script setup lang="ts">
import {ref} from "vue"
import {storeToRefs} from "pinia";
import Header from 'components/Header.vue'
import Dialog from 'components/Dialog.vue'
import ChatInput from 'components/chatInput.vue'
import store from "@/stores"

const Store = store()
const {dialogData, selectState} = storeToRefs(Store)
const value = ref("")
</script>

<template>
  <div class="content">
    <Header/>
    <Dialog :data="dialogData.find(({id}) => id === selectState).data"/>
    <ChatInput :value="value" style="margin-bottom: 25px"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/content.module";
</style>