<script setup lang="ts">
import {ref} from "vue";
import Upload from 'components/upload.vue'
import Input from 'components/input.vue'
import Submit from 'components/submit.vue'

const {value} = defineProps<{ value: string }>()
const inputValue = ref(value)
const mode = ref(true)
</script>

<template>
  <div class="chat-input">
    <Upload/>
    <Input v-model:value="inputValue" style="margin: 0 16px"/>
    <Submit :state="/^\s*$/g.test(inputValue)" :mode="mode"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/chatInput.module";
</style>