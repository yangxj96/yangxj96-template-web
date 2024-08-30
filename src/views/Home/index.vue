<template>
  <el-upload action="#" :http-request="handleUpload" :auto-upload="true">
    <el-button type="primary">点击上传文件</el-button>
    <template #tip>
      <div class="el-upload__tip">文件大小不能超过500KB</div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import type { UploadRequestOptions } from "element-plus";
import FileHelper from "@/helper/FileHelper";

const SHARDING_SIZE = 1024 * 1024 * 5;

/**
 * 自定义文件上传
 * @param options 相关配置
 */
function handleUpload(options: UploadRequestOptions) {
  console.log("上传配置:", options);
  let file = options.file;
  console.log(`文件名称:${file.name},文件大小:${file.size},分页文件大小:${SHARDING_SIZE}`);
  console.log("文件分片", FileHelper.createFileChunks(file));
}
</script>

<style scoped lang="scss">
.box-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
