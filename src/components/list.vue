<script setup lang="ts">
import {Popover} from "ant-design-vue";
import {modelValue} from "@/utils"
import {ref} from "vue"
import {DeleteOutlined, EditOutlined, EllipsisOutlined, PaperClipOutlined} from "@ant-design/icons-vue";
import type {IList} from "@/types"

const props = defineProps<{ list: IList[], state: IList["id"] }>()
const emit = defineEmits(["update:state"])

const selectState = ref(props.state)

modelValue(props, "state", selectState, emit, "update:state")
</script>

<template>
  <div class="list">
    <ul>
      <li v-for="{id, name, level} in list" :key="id">
        {{ name }}
        <ul>
          <li @click="selectState = id" :class="{active: selectState === id}" v-for="{id, name} in level" :key="id">
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