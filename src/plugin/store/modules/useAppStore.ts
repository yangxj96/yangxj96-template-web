import { defineStore } from "pinia";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const useAppStore = defineStore("app", {
  state: () => ({
    lang: zhCn
  }),
  persist: true
});

export default useAppStore;
