<template>
  <div class="error-page">
    <div class="error-bg">
      <div class="shape shape-1" />
      <div class="shape shape-2" />
    </div>
    <div class="error-card">
      <div class="error-code">{{ displayCode }}</div>
      <h1 class="error-title">{{ config.title }}</h1>
      <p class="error-desc">{{ config.description }}</p>
      <div class="error-actions">
        <button
          v-if="displayCode === '401'"
          class="btn-primary"
          @click="goLogin"
        >
          去登录
        </button>
        <button class="btn-secondary" @click="goBack">
          {{ displayCode === "401" ? "返回" : "返回首页" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

type ErrorConfig = { title: string; description: string };

const ERROR_CONFIG: Record<"404" | "401", ErrorConfig> = {
  "404": {
    title: "页面未找到",
    description: "您访问的页面不存在或已被移除，请检查地址或返回首页。",
  },
  "401": {
    title: "未授权访问",
    description: "您尚未登录或登录已过期，请先登录后再访问。",
  },
};

const errorCode = computed<"404" | "401">(() => {
  const code = String(route.params.errorCode ?? "");
  return code === "404" || code === "401" ? code : "404";
});

const displayCode = computed(() => errorCode.value);

const config = computed<ErrorConfig>(
  () => ERROR_CONFIG[errorCode.value] ?? ERROR_CONFIG["404"]
);

function goLogin() {
  router.push({ name: "Login" });
}

function goBack() {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ name: "Login" });
  }
}
</script>

<style scoped lang="less">
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.error-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;

  .shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.35;
  }

  .shape-1 {
    width: 380px;
    height: 380px;
    background: linear-gradient(135deg, #e94560, #ff6b6b);
    top: -100px;
    right: -100px;
    animation: float 8s ease-in-out infinite;
  }

  .shape-2 {
    width: 280px;
    height: 280px;
    background: linear-gradient(135deg, #0ea5e9, #06b6d4);
    bottom: -80px;
    left: -80px;
    animation: float 10s ease-in-out infinite reverse;
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

.error-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  padding: 48px 40px;
  text-align: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
}

.error-code {
  font-size: 72px;
  font-weight: 800;
  line-height: 1;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.04em;
  margin-bottom: 16px;
  text-shadow: 0 0 40px rgba(233, 69, 96, 0.3);
}

.error-title {
  margin: 0 0 12px;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
}

.error-desc {
  margin: 0 0 32px;
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
}

.error-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;

  button {
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn-primary {
    border: none;
    background: linear-gradient(135deg, #e94560, #ff6b6b);
    color: #fff;
    box-shadow: 0 4px 14px rgba(233, 69, 96, 0.4);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(233, 69, 96, 0.5);
    }
  }

  .btn-secondary {
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.9);

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.35);
    }
  }
}
</style>
