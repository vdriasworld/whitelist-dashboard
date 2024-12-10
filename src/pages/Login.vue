<template>
  <a-row justify="center"
         style="min-height:100vh;
         min-width:100vw;
         flex-direction: column;
         position: relative;
         transform: translateY(-5%)">
    <a-row justify="center" style="margin: 0 30% 2% 30%;">
      <a-col>
        <Avatar />
      </a-col>
    </a-row>
    <a-row justify="center" style="margin: 0 30%;">
      <a-col :span="8">
        <PrefixBox />
      </a-col>
    </a-row>
    <a-row justify="center" style="margin: 0 30%;">
      <a-col :span="8" style="margin-top: 20px;">
        <PasswordBox />
      </a-col>
    </a-row>
    <a-row justify="center" style="margin: 0 30%;">
      <a-col :span="8" style="margin-top: 20px;">
        <SignInButton />
      </a-col>
    </a-row>
  </a-row>
</template>
<script lang="ts" setup>
import Avatar from "@/components/Avatar.vue"
import PrefixBox from "@/components/PrefixBox.vue";
import PasswordBox from '@/components/PasswordBox.vue';
import SignInButton from "@/components/SignInButton.vue";
</script>
