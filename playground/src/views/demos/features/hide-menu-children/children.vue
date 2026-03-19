<script lang="ts" setup>
import { Fallback, TniButton } from '@tni/common-ui';
import { useTabs } from '@tni/hooks';
import { X } from '@tni/icons';

const { closeCurrentTab } = useTabs();
</script>

<template>
  <Fallback
    description="当前路由在菜单中不可见"
    status="coming-soon"
    title="被隐藏的子菜单"
    show-back
  >
    <template #action>
      <TniButton size="lg" @click="closeCurrentTab()">
        <X class="mr-2 size-4" />
        关闭当前标签页
      </TniButton>
    </template>
  </Fallback>
</template>
