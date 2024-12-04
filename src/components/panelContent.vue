<script setup lang="ts">
import {ref} from "vue"
import {modelValue} from "@/utils";
import {DeleteOutlined} from "@ant-design/icons-vue"
import {Checkbox, Table as ATable} from "ant-design-vue"
import type {IColumns, ITableData} from "@/types"
import type {ColumnsType} from "ant-design-vue/es/table";

const props = defineProps<{data: ITableData[]}>()
const emit = defineEmits(["update:data"])

const tableData = ref<ITableData[]>(props.data)

modelValue(props, "data", tableData, emit, "update:data")

const columns: ColumnsType<IColumns> = [{
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
}, {
  title: '发起对话时间',
  dataIndex: 'time',
  key: 'time',
  align: 'center',
  width: 70,
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  align: 'center',
  width: 50,
}];

</script>

<template>
  <div class="panel-content">
    <ATable :scroll="{y: '300px'}" :pagination="false" :columns="columns" :data-source="tableData">
      <template #bodyCell="{ column, record  }">
        <template v-if="column.key === 'select'">
          <Checkbox v-model:checked="record.select"/>
        </template>
        <template v-if="column.key === 'action'">
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