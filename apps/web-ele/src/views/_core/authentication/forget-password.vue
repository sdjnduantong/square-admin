<script lang="ts" setup>
import type { TniFormSchema } from '@tni/common-ui';
import type { Recordable } from '@tni/types';

import { computed, ref } from 'vue';

import { AuthenticationForgetPassword, z } from '@tni/common-ui';
import { $t } from '@tni/locales';

defineOptions({ name: 'ForgetPassword' });

const loading = ref(false);

const formSchema = computed((): TniFormSchema[] => {
  return [
    {
      component: 'TniInput',
      componentProps: {
        placeholder: 'example@example.com',
      },
      fieldName: 'email',
      label: $t('authentication.email'),
      rules: z
        .string()
        .min(1, { message: $t('authentication.emailTip') })
        .email($t('authentication.emailValidErrorTip')),
    },
  ];
});

function handleSubmit(value: Recordable<any>) {
  void value;
}
</script>

<template>
  <AuthenticationForgetPassword
    :form-schema="formSchema"
    :loading="loading"
    @submit="handleSubmit"
  />
</template>
