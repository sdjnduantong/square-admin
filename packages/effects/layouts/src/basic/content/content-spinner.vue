<script lang="ts" setup>
import { TniSpinner } from '@tni-core/shadcn-ui';

import { useContentSpinner } from './use-content-spinner';

defineOptions({ name: 'LayoutContentSpinner' });

const { spinning } = useContentSpinner();
</script>
<template>
  <TniSpinner :spinning="spinning" />
</template>
