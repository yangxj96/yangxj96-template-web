import eslint from "@eslint/js";
import globals from "globals";
import tsEslint from "typescript-eslint";
import vueEslint from "eslint-plugin-vue";
import prettierEslint from "eslint-plugin-prettier/recommended";

export default tsEslint.config(
  {
    ignores: ["node_modules", "build", "src/assets/iconfont/*"]
  },
  // js 推荐规则
  eslint.configs.recommended,
  // ts 推荐规则
  ...tsEslint.configs.recommended,
  // vue 推荐规则
  ...vueEslint.configs["flat/recommended"],
  // 全局规则
  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
  },
  // js 规则覆盖
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    rules: {}
  },
  // ts 规则覆盖
  {
    files: ["**/*.{ts,tsx,vue}"],
    rules: {
      "@typescript-eslint/no-empty-object-type": ["off"],
      "@typescript-eslint/no-explicit-any": ["off"]
    }
  },
  // vue 规则覆盖
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        // typescript项目需要用到这个
        parser: tsEslint.parser,
        ecmaVersion: "latest",
        // 许在.vue 文件中使用 JSX
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      "vue/multi-word-component-names": "off"
    }
  },
  // prettier相关规则
  prettierEslint
);
