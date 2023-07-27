<template>
  <div>
    <div class="text-[24px] text-[#000] leading-[32px] font-medium">
      登录 Arco
    </div>
    <div class="text-[16px] leading-[24px] mb-[40px] text-[#86909c]">
      内部项目管理系统
    </div>
    <a-form
      :model="formState"
      :rules="rules"
      name="normal_login"
      class="login-form"
    >
      <a-form-item label="" name="username" class="leading-[50px] w-[320px]">
        <a-input
          v-model:value="formState.username"
          autocomplete="new-password"
          class="leading-[30px] w-[320px]"
          placeholder="请输入用户名"
          autofocus
        >
          <template #prefix>
            <Icon icon="eva:person-outline" class="text-[#C0C4CC]" />
            <Icon
              icon="iconoir:xbox-x"
              class="absolute right-[10px] z-[20] cursor-pointer text-[#C1C3C6]"
              v-if="formState.username != ''"
              @click="formState.username = ''"
            />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="" name="password" class="leading-[50px] w-[320px]">
        <a-input-password
          v-model:value="formState.password"
          autocomplete="new-password"
          class="w-[320px] leading-[30px]"
          placeholder="请输入密码"
        >
          <template #prefix>
            <Icon icon="ri:lock-line" class="text-[#C0C4CC]" />
            <Icon
              v-if="formState.password != ''"
              icon="iconoir:xbox-x"
              class="absolute right-[35px] z-[20] cursor-pointer text-[#C1C3C6]"
              @click="formState.password = ''"
            />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item class="text-[#409EFF] mb-[10px]">
        <a-form-item name="remember" no-style>
          <a-checkbox
            v-model:checked="formState.remember"
            class="text-[#409EFF] text-[20px]"
            >记住密码</a-checkbox
          >
        </a-form-item>
        <span
          class="login-form-forgot ml-[170px] cursor-pointer"
          @click="updateParentValueS"
          >忘记密码</span
        >
      </a-form-item>

      <div>
        <a-button
          :disabled="disabled"
          type="primary"
          html-type="submit"
          finish
          @click="updateParentValuee"
          class="login-form-button w-[320px] h-[40px] bg-[#409EFF]"
        >
          登录
        </a-button>
        <a-button
          class="w-[320px] h-[40px] bg-[#fff] mt-[10px]"
          @click="updateParentValue"
        >
          注册
        </a-button>
      </div>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import type { Rule } from "ant-design-vue/es/form";
import { isUserExists } from "@/service";

// 登录
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});

// 定义向父组件发送的自定义事件
const emits = defineEmits(["update"]);

// 点击按钮时触发的方法  触发父组件的自定义事件，将新值传递给父组件
const updateParentValue = () => emits("update", "registerView");
const updateParentValueS = () => emits("update", "forgotPasswordView");
const updateParentValuee = () =>
  emits("update", "loginView", true, formState.username, formState.password);

// 验证用户名的异步函数
const validateUser = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("请输入用户名");
  }
  // 使用正则表达式检查用户名长度在2到20个字符之间
  const usernameRegex = /^.{2,20}$/;
  if (!usernameRegex.test(value)) {
    return Promise.reject("用户名长度应在2到20个字符之间");
  }

  // 验证用户名是否已存在
  const res = await isUserExists({ username: value });
  if (res === 404) {
    return Promise.reject("用户名不存在");
  }
  // 请求成功，用户名不存在
  return Promise.resolve();
};
// 验证密码的异步函数
let validatePass = async (_rule: Rule, value: string) => {
  if (value.length <= 6) {
    return Promise.reject("密码不少于6位");
  } else {
    return Promise.resolve();
  }
};
// 定义表单规则，包含每个字段的验证规则
const rules: Record<string, Rule[]> = {
  // 用户名
  username: [{ required: true, validator: validateUser, trigger: "blur" }],
  // 密码
  password: [{ required: true, validator: validatePass, trigger: "blur" }],
};
// console.log(rules);
const disabled = computed(() => {
  // if (formState.username != "" && formState.password != "") {

  // }
  return false;
});
</script>

<style lang="scss" scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>