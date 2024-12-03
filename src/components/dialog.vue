<script setup lang="ts">
import Answer from "components/answer.vue";
import type {IAnswer} from "types/answer";

defineProps<{ data: IAnswer[] }>()
</script>

<template>
  <div class="dialog">
    <ul>
      <li v-for="{id, type, content} in data" :key="id">
        <Answer :type="type" :content="content"/>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "styles/dialog.module";
</style>