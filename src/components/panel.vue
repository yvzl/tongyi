<script setup lang="ts">
import {Modal} from "ant-design-vue"
import {modelValue} from "@/utils";
import {ref, useTemplateRef} from "vue"
import {storeToRefs} from "pinia";
import store from "@/stores"
import DialogHeader from "components/panelHeader.vue";
import DialogContent from "components/panelContent.vue";
import DialogFooter from "components/panelFooter.vue";

const Store = store()
const {tableData} = storeToRefs(Store)

const props = defineProps<{ state: boolean }>()
const emit = defineEmits(["update:state"])
const dialogState = ref(props.state)
const panel = useTemplateRef("panel")

modelValue(props, "state", dialogState, emit, "update:state")
</script>

<template>
  <div ref="panel" class="panel">
    <Modal :closable="false" :width="960" :getContainer="panel" :keyboard="false" :maskClosable="false"
           v-model:open="dialogState"
           centered>
      <DialogHeader/>
      <DialogContent v-model:data="tableData"/>
      <template #footer>
        <DialogFooter v-model:data="tableData" v-model:close="dialogState"/>
      </template>
    </Modal>
  </div>
</template>

<style scoped lang="scss">
@use "styles/panel.module";
</style>