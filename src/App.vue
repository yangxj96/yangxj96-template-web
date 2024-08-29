<template>
  <div id="nav">
    <el-config-provider :locale="locale" :message="message">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import useAppStore from "@/plugin/store/modules/useAppStore";
import { useInterval } from "@vueuse/core";

useInterval(() => {
  console.log("执行");
}, 5000);

const locale = ref(useAppStore().lang);
const message = reactive({
  max: 3
});
</script>

<style lang="scss">
@use "@/assets/css/common.scss";

* {
  padding: 0;
  margin: 0;
}

// cesium版权信息
.cesium-widget-credits {
  display: none !important;
}
</style>
