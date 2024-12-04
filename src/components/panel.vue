<script setup lang="ts">
import {Modal, Button as AButtom} from "ant-design-vue"
import {nextTick, ref, watch} from "vue"

const props = defineProps<{ state: boolean }>()
const emit = defineEmits(["update:state"])

const state = ref(props.state)
const watchState = ref(true)

watch(() => props.state, newVal => {
  watchState.value = false
  state.value = newVal
  nextTick(() => watchState.value = true)
})

watch(state, newVal => {
  watchState.value && emit("update:state", newVal)
})
</script>

<template>
  <div class="panel">
    <Modal wrapClassName="panel-model" title="管理对话记录" :keyboard="false" :maskClosable="false" v-model:open="state"
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