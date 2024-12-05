<script setup lang="ts">
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {dialogStore} from "@/stores";
import {requestCoze} from "utils/requestCoze";
import Upload from 'components/upload.vue'
import Input from 'components/input.vue'
import Submit from 'components/submit.vue'

const store = dialogStore()
const {updateData} = store
const {selectState} = storeToRefs(store)

const {value} = defineProps<{ value: string }>()
const inputValue = ref(value)
const mode = ref(true)

const submit = async () => {
  updateData(selectState.value, key => ({key, content: inputValue.value, type: "user"}))
  inputValue.value = "";
  const result = await requestCoze({
    data: {
      additional_messages: [
        {
          "role": "user",
          "content": "早上好",
          "content_type": "text"
        }
      ]
    }
  })
  for await (const item of result) {
    console.log(item)
  }
}
</script>

<template>
  <div class="chat-input">
    <Upload/>
    <Input v-model:value="inputValue" style="margin: 0 16px"/>
    <Submit @click="submit" :state="/^\s*$/g.test(inputValue)" :mode="mode"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/chatInput.module";
</style>