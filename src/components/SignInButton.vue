<template>
  <a-button type="primary" :loading="iconLoading" @click="enterIconLoading" block>
    Sign In
  </a-button>
</template>
<script lang="ts" setup>
import {ref} from "vue";
interface DelayLoading {
  delay: number;
}
const iconLoading = ref<boolean | DelayLoading>(false);
const enterIconLoading = () => {
  iconLoading.value = { delay: 100 };
}
</script>