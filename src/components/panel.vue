<script setup lang="ts">
import {ref} from "vue"
import {modelValue} from "@/utils";
import {Modal, Button as AButtom} from "ant-design-vue"

const props = defineProps<{ state: boolean }>()
const emit = defineEmits(["update:state"])
const dialogState = ref(props.state)

modelValue(props, "state", dialogState, emit, "update:state")
</script>

<template>
  <div class="panel">
    <Modal wrapClassName="panel-model" title="管理对话记录" :keyboard="false" :maskClosable="false" v-model:open="dialogState"
           centered>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <template #footer>
        <AButtom key="back" @click="">取消</AButtom>
        <AButtom type="primary" @click="" danger>删除所选</AButtom>
      </template>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
@use "styles/panel.module";
</style>