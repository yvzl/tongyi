<script setup lang="ts">
import Header from 'components/Header.vue'
import Dialog from 'components/Dialog.vue'
import ChatInput from 'components/chatInput.vue'
</script>

<template>
  <div class="content">
    <Header/>
    <Dialog :data="[{
          id: 1,
          type: 'user',
          content: `key

                    The key special attribute is primarily used as a hint for Vue's virtual DOM algorithm to identify VNodes when diffing the new list of nodes against the old list. Without keys, Vue uses an algorithm that minimizes element movement and tries to patch/ reuse elements of the same type in-place as much as possible. With keys, it will reorder elements based on the order change of keys, and elements with keys that are no longer present will always be removed/ destroyed.
                    Children of the same common parent must have unique keys. Duplicate keys will cause render errors.
                    The most common use case is combined with v-for.`,
        }, {
          id: 2,
          type: 'chat',
          content: `您提到的key属性在Vue.js中确实非常重要，特别是在处理列表渲染时。key是一个特殊的属性，主要用于帮助Vue识别哪些元素改变了、添加了或删除了。当Vue更新DOM时，它会使用这个key来决定如何有效地重用和重新排序现有的元素。`,
        }, {
          id: 3,
          type: 'user',
          content: '3',
        }, {
          id: 4,
          type: 'chat',
          content: '4',
        }]"/>
    <ChatInput style="margin-bottom: 25px"/>
  </div>
</template>

<style scoped lang="scss">
@use "styles/content.module";
</style>