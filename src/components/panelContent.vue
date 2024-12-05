<script setup lang="ts">
import {ref} from "vue"
import {dialogStore} from "@/stores";
import {modelValue, getContent, includesName} from "@/utils";
import {DeleteOutlined} from "@ant-design/icons-vue"
import {Checkbox, Table as ATable} from "ant-design-vue"
import type {IDialog} from "@/types"
import type {ColumnsType} from "ant-design-vue/es/table";
import {storeToRefs} from "pinia";

const {tableValue} = storeToRefs(dialogStore())
const props = defineProps<{ data: IDialog[] }>()
const emit = defineEmits(["update:data"])

const data = ref<IDialog[]>(props.data)

modelValue(props, "data", data, emit, "update:data")

const columns: ColumnsType<any> = [{
  title: "是否选择",
  dataIndex: 'select',
  key: 'select',
  align: 'center',
  width: 50,
}, {
  title: '对话名称',
  dataIndex: 'name',
  key: 'name',
  align: 'center',
  width: 100,
  ellipsis: true,
}, {
  title: '发起对话时间',
  dataIndex: 'time',
  key: 'time',
  align: 'center',
  width: 70,
  ellipsis: true,
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  align: 'center',
  width: 50,
}];

const customRowShow = record => ({style: includesName(record, tableValue.value) ? {} : {display: 'none'}})
</script>

<template>
  <div class="panel-content">
    <ATable :scroll="{y: '300px'}" :pagination="false" :columns="columns" :data-source="data"
            :customRow="customRowShow">
      <template #bodyCell="{ column: {key}, record  }">
        <template v-if="key === 'name'">
          {{ record.name || getContent(record.data, "user") }}
        </template>
        <template v-if="key === 'time'">
          {{ record.time }}
        </template>
        <template v-if="key === 'select'">
          <Checkbox v-model:checked="record.select"/>
        </template>
        <template v-if="key === 'action'">
            <span class="delete">
              <DeleteOutlined/>
            </span>
        </template>
      </template>
    </ATable>
  </div>
</template>

<style scoped lang="scss">
@use "styles/panelContent.module";
</style>