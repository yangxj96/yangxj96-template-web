import http from "@/plugin/request";
import useUserStore from "@/plugin/store/modules/useUserStore";
import type { IResult, Token } from "@/types";

export default {
  /**
   * 用户登录
   * @param username 用户名
   * @param password 密码
   */
  async login(username: string, password: string) {
    const response = await http.post<IResult<Token>>("/api/auth/login", {
      username: username,
      password: password
    });
    return response.data;
  },
  /**
   * 退出登录
   */
  async logout() {
    const resp = await http.post("/api/auth/logoff", {
      token: useUserStore().token.accessToken
    });
    return resp.data;
  }
};
