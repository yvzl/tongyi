<script setup lang="ts">
import store from "@/stores";
import {Button as AButton} from "ant-design-vue"
import {PlusOutlined} from "@ant-design/icons-vue"
import {onMounted, useTemplateRef} from "vue"
import {storeToRefs} from "pinia";
import {formatterDate} from "@/utils"

const emit = defineEmits(["refs"])
const dialog = useTemplateRef("dialog")
const Store = store()
const {updateDialogData} = Store
const {dialogData} = storeToRefs(Store)

const create = () => {
  updateDialogData({
    id: dialogData.value.length + 1,
    time: formatterDate(new Date("2024-12-1 12:10:01")),
    data: []
  })
}

onMounted(() => emit("refs", dialog.value))
</script>

<template>
  <div ref="dialog" class="create-dialog">
    <AButton @click="create" type="primary" shape="round">
      <PlusOutlined/>
      新建对话
    </AButton>
  </div>
</template>

<style scoped lang="scss">
@use "styles/createDialog.module";
</style>