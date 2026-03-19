<script lang="ts" setup>
import type { DropdownMenuProps } from '@tni-core/shadcn-ui';

import { LayoutGrid } from '@tni-core/icons';
import { TniDropdownMenu } from '@tni-core/shadcn-ui';

defineProps<DropdownMenuProps>();
</script>

<template>
  <TniDropdownMenu :menus="menus" :modal="false">
    <div
      class="flex-center h-full cursor-pointer border-l border-border px-2 text-lg font-semibold text-muted-foreground hover:bg-muted hover:text-foreground"
    >
      <LayoutGrid class="size-4" />
    </div>
  </TniDropdownMenu>
</template>
