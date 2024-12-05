<script setup lang="ts">
import Answer from "components/answer.vue";
import type {IAnswer} from "@/types"

defineProps<{ data: IAnswer[] }>()
</script>

<template>
  <div class="dialog">
    <ul>
      <li v-for="{key, type, content} in data" :key="key">
        <Answer :type="type" :content="content"/>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "styles/dialog.module";
</style>