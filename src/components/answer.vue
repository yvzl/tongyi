<script setup lang="ts">
import {md} from "@/utils"
import {debounce} from "@/utils";
import {message} from 'ant-design-vue';
import {CopyOutlined, LikeOutlined} from "@ant-design/icons-vue"
import Head from "components/head.vue"
import "highlight.js/styles/default.min.css"
import type {IAnswer} from "@/types"

defineProps<Omit<IAnswer, 'key'>>()

const copy = debounce(() => message.success("复制成功"), 300)
const unLike = debounce(() => message.error("谁让你点了"), 300)
const like = debounce(() => message.success("感谢您的支持"), 300)
</script>

<template>
  <div class="answer">
    <div :class="{content: true, [type]: true}">
      <Head style="margin: 10px 12px 0 0" :style="{opacity: +(type === 'chat')}"/>
      <div class="bubble">
        <div class="markdown-body" v-html="md.render(content)"/>
        <ul v-if="type === 'chat'" class="items">
          <li @click="like" class="icon up">
            <LikeOutlined/>
          </li>
          <li @click="unLike" class="icon down">
            <LikeOutlined style="transform: rotateX(-180deg)"/>
          </li>
          <li @click="copy" class="icon copy">
            <CopyOutlined/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "styles/answer.module";
</style>