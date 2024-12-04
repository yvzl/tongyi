<script setup lang="ts">
import {nextTick, ref, watch} from "vue"
import type {IList} from "types/list"
import {DeleteOutlined, EditOutlined, EllipsisOutlined, PaperClipOutlined} from "@ant-design/icons-vue";
import {Popover} from "ant-design-vue";

const props = defineProps<{ list: IList[], state: IList["id"] }>()
const emit = defineEmits(["update:state"])

const state = ref<IList["id"]>(props.state)
const changeState = ref<Boolean>(true)

watch(() => props.state, newVal => {
  changeState.value = false
  state.value = newVal
  nextTick(() => changeState.value = true)
})

watch(state, newVal => changeState && emit("update:state", newVal))
</script>

<template>
  <div class="list">
    <ul>
      <li v-for="{id, name, level} in list" :key="id">
        {{ name }}
        <ul>
          <li @click="state = id" :class="{active: state === id}" v-for="{id, name} in level" :key="id">
            <p>{{ name }}</p>
            <Popover :arrow="false" trigger="click" placement="rightTop" overlayClassName="level-popover">
              <template #content>
                <ul>
                  <li>
                    <EditOutlined/>
                    重命名
                  </li>
                  <li>
                    <PaperClipOutlined/>
                    置顶此对话
                  </li>
                  <li class="danger">
                    <DeleteOutlined/>
                    删除此对话
                  </li>
                </ul>
              </template>
              <EllipsisOutlined/>
            </Popover>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "styles/list.module";
</style>