<template>
  <el-row>
    <el-col :span="23">
      <img src="/src/assets/logo-across.png" class="goto-home" @click="gotoHome" alt="logo" style="max-height: 56px" />
    </el-col>

    <el-col :span="1">
      <el-dropdown>
        <img
          src="/src/assets/images/default-avatar.jpg"
          alt="头像"
          style="object-fit: cover"
          class="el-avatar el-avatar--circle el-tooltip__trigger" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <icons name="icon-user" class-name="icon-navbar" />
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <icons name="icon-change-password" class-name="icon-navbar" />
              <span>修改密码</span>
            </el-dropdown-item>
            <el-dropdown-item @click="handleUserLogout">
              <icons name="icon-logout" class-name="icon-navbar" />
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import icons from "@/components/common/Icons.vue";
import { useRouter } from "vue-router";
import { stopAllRequest } from "@/plugin/request";

const router = useRouter();

function gotoHome() {
  router.push({ path: "/" });
}

function handleUserLogout() {
  stopAllRequest();
}
</script>

<style scoped lang="scss">
.goto-home {
  cursor: pointer;
}

.el-menu.el-menu--horizontal {
  border: 0;
}

:deep(.el-dropdown) {
  width: 100%;
  top: 20%;
  text-align: center;
}

.icon-navbar {
  width: 1.3em;
  height: 1.3em;
  padding-right: 0.5em;
}

.flex-grow {
  flex-grow: 1;
}

:deep(.el-menu) {
  height: 100%;
}
</style>
