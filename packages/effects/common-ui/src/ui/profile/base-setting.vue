<script setup lang="ts">
import type { Recordable } from '@tni/types';

import type { TniFormSchema } from '@tni-core/form-ui';

import { computed, reactive } from 'vue';

import { $t } from '@tni/locales';

import { useTniForm } from '@tni-core/form-ui';
import { TniButton } from '@tni-core/shadcn-ui';

interface Props {
  formSchema?: TniFormSchema[];
}

const props = withDefaults(defineProps<Props>(), {
  formSchema: () => [],
});

const emit = defineEmits<{
  submit: [Recordable<any>];
}>();

const [Form, formApi] = useTniForm(
  reactive({
    commonConfig: {
      // 所有表单项
      componentProps: {
        class: 'w-full',
      },
    },
    layout: 'horizontal',
    schema: computed(() => props.formSchema),
    showDefaultActions: false,
  }),
);

async function handleSubmit() {
  const { valid } = await formApi.validate();
  const values = await formApi.getValues();
  if (valid) {
    emit('submit', values);
  }
}

defineExpose({
  getFormApi: () => formApi,
});
</script>
<template>
  <div @keydown.enter.prevent="handleSubmit">
    <Form />
    <TniButton type="submit" class="mt-4" @click="handleSubmit">
      {{ $t('profile.updateBasicProfile') }}
    </TniButton>
  </div>
</template>
