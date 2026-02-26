<template>
  <div class="login-page">
    <div class="login-bg">
      <div class="shape shape-1" />
      <div class="shape shape-2" />
      <div class="shape shape-3" />
    </div>
    <div class="login-card">
      <div class="login-header">
        <h1>欢迎回来</h1>
        <p>登录您的账号以继续</p>
      </div>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-item">
          <label>账号</label>
          <input
            v-model="form.account"
            type="text"
            placeholder="请输入账号"
            autocomplete="username"
          />
        </div>
        <div class="form-item">
          <label>密码</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
            autocomplete="current-password"
          />
        </div>
        <button type="submit" class="btn-login">登录</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { login } from "@/api";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const authStore = useAuthStore();

const form = reactive({
  account: "",
  password: "",
});

function handleLogin() {
  if (!form.account || !form.password) {
    return;
  }
  login({
    username: form.account,
    password: form.password,
  }).then((res) => {
    authStore.setToken(res.access_token);
    router.push({ name: "Demo" });
  });
}
</script>

<style scoped lang="less">
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.login-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;

  .shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
  }

  .shape-1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, #e94560, #ff6b6b);
    top: -120px;
    right: -80px;
    animation: float 8s ease-in-out infinite;
  }

  .shape-2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, #0ea5e9, #06b6d4);
    bottom: -60px;
    left: -60px;
    animation: float 10s ease-in-out infinite reverse;
  }

  .shape-3 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #8b5cf6, #a78bfa);
    top: 50%;
    left: 20%;
    animation: float 6s ease-in-out infinite 1s;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -20px);
  }
}

.login-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  padding: 48px 40px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

.login-header {
  margin-bottom: 36px;
  text-align: center;

  h1 {
    margin: 0 0 8px;
    font-size: 28px;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.02em;
  }

  p {
    margin: 0;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.65);
  }
}

.login-form {
  .form-item {
    margin-bottom: 24px;

    label {
      display: block;
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);
      letter-spacing: 0.02em;
    }

    input {
      width: 100%;
      padding: 14px 18px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      font-size: 15px;
      color: #fff;
      background: rgba(255, 255, 255, 0.06);
      box-sizing: border-box;
      transition: border-color 0.2s, box-shadow 0.2s;

      &::placeholder {
        color: rgba(255, 255, 255, 0.35);
      }

      &:hover {
        border-color: rgba(255, 255, 255, 0.25);
      }

      &:focus {
        outline: none;
        border-color: #e94560;
        box-shadow: 0 0 0 3px rgba(233, 69, 96, 0.2);
      }
    }
  }

  .btn-login {
    width: 100%;
    margin-top: 8px;
    padding: 14px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #e94560, #ff6b6b);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 14px rgba(233, 69, 96, 0.4);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(233, 69, 96, 0.5);
    }

    &:active {
      transform: translateY(0);
    }
  }
}
</style>
