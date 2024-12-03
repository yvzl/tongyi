<script setup lang="ts">
import ListLevel from "components/ListLevel.vue";
import type {IList} from "types/list"

defineProps<{ list: IList[] }>()
</script>

<template>
  <div class="list">
      <ul>
        <li v-for="{id, name, level} in list" :key="id">
          {{ name }}
          <ListLevel :level="level"/>
        </li>
      </ul>
  </div>
</template>

<style scoped lang="scss">
@use "styles/list.module";
</style>