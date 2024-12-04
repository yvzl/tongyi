<script setup lang="ts">
import CreateDialog from 'components/CreateDialog.vue'
import Search from "components/search.vue";
import {ref} from "vue"

const dialog = ref<HTMLElement>(null)
const search = ref<HTMLElement>(null)
const state = ref(false)

const click = (_state: string) => {
  let opacity = "", width = ""
  if (_state === "search" && !state.value) {
    opacity = "0"
    width = "100%"
  }
  if (_state === "window" && state.value) {
    opacity = "1"
    width = "36px"
  }
  if (opacity !== "" && width !== "") {
    dialog.value.style.opacity = opacity
    search.value.style.width = width
    state.value = !state.value
  }
}

window.addEventListener("click", e => !search.value.contains(e.target) && click('window'))

const dialogRefs = value => dialog.value = value
const searchRefs = value => search.value = value
</script>

<template>
  <div class="toolbar">
    <CreateDialog @refs="dialogRefs"/>
    <Search @click="click('search')" @refs="searchRefs"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/toolbar.module";
</style>