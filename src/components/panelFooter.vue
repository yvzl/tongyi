<script setup lang="ts">
import {nextTick, ref, watch} from "vue"
import {Button as AButtom, Checkbox} from "ant-design-vue"
import {modelValue} from "@/utils";
import type {ITableData} from "@/types";

const props = defineProps<{ close: boolean, data: ITableData[] }>()
const emit = defineEmits(["update:close", "update:data"]);

const state = ref(props.close)
modelValue(props, "close", state, emit, "update:close")

const selectAllState = ref(false)
const watchState = ref(true)

watch(() => props.data, newVal => {
    watchState.value = false
    selectAllState.value = !newVal.find(({select}) => !select)
    nextTick(() => watchState.value = true)
}, {deep: true, immediate: true})

watch(selectAllState, newVal => watchState.value && emit("update:data", props.data.map(item => {
  item.select = newVal
  return item
})))
</script>

<template>
  <div class="panel-footer">
    <Checkbox v-model:checked="selectAllState">全选</Checkbox>
    <div class="button-list">
      <AButtom shape="round" key="back" @click="state = false">取消</AButtom>
      <AButtom shape="round" :disabled="!data.find(item => item.select)" type="primary" @click="" danger>删除所选
      </AButtom>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "styles/panelFooter.module";
</style>