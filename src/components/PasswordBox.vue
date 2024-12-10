<template>
  <a-space direction="vertical" size="middle" style="width: 100%">
    <a-input-password v-model:password="password" placeholder="Password">
      <template #prefix>
        <LockOutlined class="site-form-item-icon" />
      </template>
    </a-input-password>
  </a-space>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { LockOutlined } from '@ant-design/icons-vue';
const password = ref<string>('');
</script>

