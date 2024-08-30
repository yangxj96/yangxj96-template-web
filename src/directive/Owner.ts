import type { Directive, DirectiveBinding } from "vue";
import useUserStore from "@/plugin/store/modules/useUserStore";
import CommonHelper from "@/helper/CommonHelper";

let del: boolean = false;

export default {
  created(el: HTMLElement, binging: DirectiveBinding<string>) {
    const authority = useUserStore().token.authorities;
    if (authority.indexOf(binging.value) == -1) {
      el.hidden = true;
      del = true;
    }
  },
  mounted(el: HTMLElement) {
    if (del) {
      el.id = CommonHelper.UUID();
      document.getElementById(el.id)?.remove();
    }
  }
} as Directive;
