<script setup lang="ts">
import {ref} from "vue"
import {modelValue} from "@/utils";
import {Textarea} from "ant-design-vue";

const props = defineProps<{ value: string }>()
const emit = defineEmits(["update:value"])

const inputValue = ref(props.value)
modelValue(props, "value", inputValue, emit, "update:value")
</script>

<template>
  <div class="input">
    <Textarea placeholder="遇事不决问通义" v-model:value="inputValue" :bordered="false"
              :autoSize="{ minRows: 1, maxRows: 4 }"
              :maxlength="5000" resize="none"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/input.module";
</style>