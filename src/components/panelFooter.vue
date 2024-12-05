<script setup lang="ts">
import {storeToRefs} from "pinia";
import {dialogStore} from "@/stores"
import {nextTick, ref, watch} from "vue"
import {Button as AButtom, Checkbox} from "ant-design-vue"
import {modelValue, includesName} from "@/utils";
import UniversalDialog from "components/UniversalDialog.vue";
import type {IDialog} from "@/types";

const store = dialogStore()
const {resetDialog} = store
const {dialogData, tableValue, searchValue} = storeToRefs(store)

const props = defineProps<{ close: boolean }>()
const emit = defineEmits(["update:close"]);

const state = ref(props.close)
const dialogState = ref(false)
modelValue(props, "close", state, emit, "update:close")

const selectAllState = ref(false)
const watchState = ref(true)

watch(dialogData, newVal => {
  watchState.value = false
  selectAllState.value = !newVal.find(item => includesName(item, tableValue.value) && !item.select)
  nextTick(() => watchState.value = true)
}, {deep: true, immediate: true})

watch(selectAllState, newVal => watchState.value && dialogData.value.map(item => {
  includesName(item, tableValue.value) && (item.select = newVal)
  return item
}))

const ok = () => {
  resetDialog(dialogData.value.filter((item: IDialog) => !includesName(item, tableValue.value) || !item.select))
  dialogState.value = false
  state.value = false
}
</script>

<template>
  <div class="panel-footer">
    <Checkbox v-model:checked="selectAllState">全选</Checkbox>
    <div class="button-list">
      <AButtom shape="round" key="back" @click="state = false">取消</AButtom>
      <AButtom shape="round"
               :disabled="!dialogData.filter(item => includesName(item, tableValue)).find(({select}) => select)"
               type="primary"
               @click="dialogState = true"
               danger>
        删除所选
      </AButtom>
    </div>
  </div>
  <UniversalDialog v-model:state="dialogState"
                   :title="`确认删除这 ${dialogData.filter((item: IDialog) => includesName(item, tableValue) && item.select).length} 条对话记录吗？`"
                   content="删除后对话记录无法恢复和找回，请谨慎操作" type="danger"
                   @ok="ok"
                   @cancel="() => dialogState = false"/>
</template>

<style scoped lang="scss">
@use "styles/panelFooter.module";
</style>