<script setup lang="ts">
import {Button as AButton} from "ant-design-vue"
import {PlusOutlined} from "@ant-design/icons-vue"
import {onMounted, useTemplateRef} from "vue"

const emit = defineEmits(["refs"])
const dialog = useTemplateRef("dialog")

onMounted(() => emit("refs", dialog.value))
</script>

<template>
  <div ref="dialog" class="create-dialog">
    <AButton type="primary" shape="round">
      <PlusOutlined/>
      新建对话
    </AButton>
  </div>
</template>

<style scoped lang="scss">
@use "styles/createDialog.module";
</style>