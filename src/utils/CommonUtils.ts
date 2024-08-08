export default class CommonUtils {
  /**
   * 获取随机数
   * @param min 最小数
   * @param max 最大数
   */
  public static getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * 生成UUID
   * @constructor
   */
  public static UUID() {
    // 方式一 一个很取巧的方式
    // const temp = URL.createObjectURL(new Blob());
    // URL.revokeObjectURL(temp);
    // /[:/]/g 是为了适配IE11
    // return temp.split(/[:/]/g).pop();
    // 方式二
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * 时间格式化
   * @param date 时间
   * @param formatter 格式化字符串
   */
  public static formatDate(date: Date, formatter: "date" | "datetime" | string) {
    const func = this._formatDateNormalize(formatter);
    const dateInfo = {
      yyyy: date.getFullYear(),
      M: date.getMonth() + 1,
      d: date.getDate(),
      H: date.getHours(),
      m: date.getMinutes(),
      s: date.getSeconds(),
      MM: ("" + (date.getMonth() + 101)).substring(1),
      dd: ("" + (date.getDate() + 100)).substring(1),
      HH: ("" + (date.getHours() + 100)).substring(1),
      mm: ("" + (date.getMinutes() + 100)).substring(1),
      ss: ("" + (date.getSeconds() + 100)).substring(1)
    };
    return func(dateInfo);
  }

  /**
   * 格式化时间的参数归一化
   * @param formatter 格式化
   * @private
   */
  private static _formatDateNormalize(formatter: string) {
    if (typeof formatter === "function") {
      return formatter;
    }
    if (formatter === "date") {
      formatter = "yyyy-MM-dd";
    }
    if (formatter === "datetime") {
      formatter = "yyyy-MM-dd HH:mm:ss";
    }
    return (dateInfo: any) => {
      return formatter
        .replaceAll("yyyy", dateInfo.yyyy)
        .replaceAll("MM", dateInfo.MM)
        .replaceAll("dd", dateInfo.dd)
        .replaceAll("HH", dateInfo.HH)
        .replaceAll("mm", dateInfo.mm)
        .replaceAll("ss", dateInfo.ss)
        .replaceAll("ms", dateInfo.ms)
        .replaceAll("M", dateInfo.M)
        .replaceAll("d", dateInfo.d)
        .replaceAll("H", dateInfo.H)
        .replaceAll("m", dateInfo.m)
        .replaceAll("s", dateInfo.s);
    };
  }
}
