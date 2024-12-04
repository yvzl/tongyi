<script setup lang="ts">
import {CopyOutlined, LikeOutlined} from "@ant-design/icons-vue"
import Head from "components/head.vue"
import "github-markdown-css/github-markdown-light.css"
import type {IAnswer} from "types/answer"

defineProps<Omit<IAnswer, 'id'>>()
</script>

<template>
  <div class="answer">
    <div :class="{content: true, [type]: true}">
      <Head style="margin: 10px 12px 0 0" :style="{opacity: +(type === 'chat')}"/>
      <div class="bubble">
        <div class="markdown-body" v-html="content"/>
        <ul v-if="type === 'chat'" class="items">
          <li class="icon up">
            <LikeOutlined/>
          </li>
          <li class="icon down">
            <LikeOutlined style="transform: rotateX(-180deg)"/>
          </li>
          <li class="icon copy">
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