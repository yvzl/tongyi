<script setup lang="ts">
import {modelValue} from "@/utils";
import {SearchOutlined} from '@ant-design/icons-vue'
import {onMounted, useTemplateRef, ref} from "vue";

const props = defineProps<{ value: string }>()
const emit = defineEmits(["refs", "update:value"]);

const search = useTemplateRef("search")
const value = ref(props.value)

onMounted(() => emit("refs", search.value))
modelValue(props, "value", value, emit, "update:value")
</script>

<template>
  <div ref="search" class="search">
    <div class="icon">
      <SearchOutlined/>
    </div>
    <input v-model="value" placeholder="搜索历史记录" type="text">
  </div>
</template>

<style scoped lang="scss">
@use "styles/search.module";
</style>