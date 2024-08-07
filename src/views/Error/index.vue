<template>
  <el-result icon="error" title="404" :sub-title="`${message},${second}秒后自动后退`">
    <template #extra>
      <el-button type="primary" @click="handleBack">后退</el-button>
    </template>
  </el-result>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, onUnmounted, ref } from "vue";
// code数组对象,根据code获取其他必要属性
const codes = Object.freeze([
  { code: -1, msg: "未知错误" },
  { code: 401, msg: "权限不足" },
  { code: 404, msg: "页面不存在" }
]);

let time = ref(-1);
let second = ref(3);
const router = useRouter();
const route = useRoute();
const code = route.params.code;

let message = computed(() => {
  for (let i = codes.length - 1; i >= 0; i--) {
    let datum = codes[i];
    if (datum.code === parseInt(typeof code === "string" ? code : "-1")) {
      return datum.msg;
    }
  }
  return "未知错误";
});

onMounted(() => {
  time.value = window.setInterval(() => {
    second.value = second.value - 1;
    if (second.value <= 0) {
      router.back();
    }
  }, 1000);
});

onUnmounted(() => {
  clearTimeout(time.value);
});

function handleBack() {
  if (time.value != -1) {
    clearTimeout(time.value);
  }
  router.back();
}
</script>
