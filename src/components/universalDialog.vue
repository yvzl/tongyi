<script setup lang="ts">
import {modelValue} from "@/utils";
import {ref, useTemplateRef} from "vue";
import {Button as AButtom, Modal} from "ant-design-vue"
import {ExclamationCircleOutlined} from "@ant-design/icons-vue"

const props = defineProps<{
  title: string,
  content: string,
  type: "normal" | "success" | "warning" | "danger",
  state: boolean
}>()
const emit = defineEmits(["ok", "cancel", "update:state"])

const state = ref(props.state)
const dialog = useTemplateRef("dialog")

modelValue(props, "state", state, emit, "update:state")
</script>

<template>
  <div ref="dialog" class="delete-dialog">
    <Modal :width="420" :keyboard="false" :maskClosable="false" class="universal-dialog" :getContainer="() => dialog"
           v-model:open="state"
           centered :closable="false">
      <div :class="{header: true, [type]: true }">
        <ExclamationCircleOutlined/>
        <p>{{ title }}</p>
      </div>
      <div class="content">
        <p>{{ content }}</p>
      </div>
      <template #footer>
        <AButtom @click="emit('cancel')" shape="round">取消</AButtom>
        <AButtom @click="emit('ok')" shape="round" type="primary" danger>确定</AButtom>
      </template>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
@use "styles/universalDialog.module";
</style>