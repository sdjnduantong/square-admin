<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@tni/common-ui';
import { LOGIN_PATH } from '@tni/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
