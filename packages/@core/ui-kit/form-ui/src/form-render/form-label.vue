<script setup lang="ts">
import type { CustomRenderType } from '../types';

import {
  FormLabel,
  TniHelpTooltip,
  TniRenderContent,
} from '@tni-core/shadcn-ui';
import { cn } from '@tni-core/shared/utils';

interface Props {
  class?: string;
  colon?: boolean;
  help?: CustomRenderType;
  label?: CustomRenderType;
  required?: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <FormLabel :class="cn('flex items-center', props.class)">
    <span v-if="required" class="mr-0.5 text-destructive">*</span>
    <slot></slot>
    <TniHelpTooltip v-if="help" trigger-class="size-3.5 ml-1">
      <TniRenderContent :content="help" />
    </TniHelpTooltip>
    <span v-if="colon && label" class="ml-0.5">:</span>
  </FormLabel>
</template>
