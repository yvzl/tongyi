<script setup lang="ts">
import {Popover} from "ant-design-vue"
import {UploadOutlined, FileWordOutlined, PictureOutlined} from "@ant-design/icons-vue";
</script>

<template>
  <div class="upload">
    <Popover :overlayStyle="{width: '140px'}" :arrow="false" placement="top" trigger="hover"
             overlayClassName="upload-popover">
      <template #content>
        <ul>
          <li>
            <FileWordOutlined/>
            上传文档
          </li>
          <li>
            <PictureOutlined/>
            上传图片
          </li>
        </ul>
      </template>
      <UploadOutlined/>
    </Popover>
  </div>
</template>

<style scoped lang="scss">
@use "styles/upload.module";
</style>