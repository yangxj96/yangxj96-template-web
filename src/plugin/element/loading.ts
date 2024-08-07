// ElLoading       : loading组件
// ILoadingInstance: loading对象类型接口
import { ElLoading } from "element-plus";

// 计数器
let count: number = 0;

// loading对象
let loading: any;

function open(): void {
  const els = document.getElementsByClassName("loading-box") as HTMLCollectionOf<HTMLElement>;
  loading = ElLoading.service({
    target: els[els.length - 1],
    lock: true,
    text: "数据加载中...",
    background: "rgba(0,0,0,0.5)"
  });
}

function close(): void {
  loading.close();
}

/**
 * 显示loading层
 */
export function showLoading(): void {
  if (count == 0) {
    open();
  }
  count++;
}

/**
 * 关闭loading层
 */
export function hideLoading(): void {
  if (count <= 0) {
    return;
  }
  count--;
  if (count == 0) {
    close();
  }
}
