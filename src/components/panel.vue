<script setup lang="ts">
import {storeToRefs} from "pinia";
import {modelValue} from "@/utils";
import {dialogStore} from "@/stores";
import {Modal} from "ant-design-vue";
import {ref, useTemplateRef} from "vue"
import DialogHeader from "components/panelHeader.vue";
import DialogContent from "components/panelContent.vue";
import DialogFooter from "components/panelFooter.vue";

const store = dialogStore()
const {dialogData} = storeToRefs(store)

const props = defineProps<{ state: boolean }>()
const emit = defineEmits(["update:state"])
const dialogState = ref(props.state)
const panel = useTemplateRef("panel")

modelValue(props, "state", dialogState, emit, "update:state")
</script>

<template>
  <div ref="panel" class="panel">
    <Modal :closable="false" class="panel-modal" :width="960" :getContainer="panel" :keyboard="false"
           :maskClosable="false"
           v-model:open="dialogState"
           centered>
      <DialogHeader/>
      <DialogContent v-model:data="dialogData"/>
      <template #footer>
        <DialogFooter v-model:close="dialogState"/>
      </template>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
@use "styles/panel.module";
</style>