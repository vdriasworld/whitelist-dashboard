<template>
  <div class="components-input-demo-presuffix">
    <a-input v-model:value="userName" placeholder="Username">
      <template #prefix>
        <user-outlined />
      </template>
    </a-input>
    <br />
  </div>
</template>
<script lang="ts" setup>
import { UserOutlined,} from '@ant-design/icons-vue';
import { ref } from 'vue';
const userName = ref<string>('');
</script>