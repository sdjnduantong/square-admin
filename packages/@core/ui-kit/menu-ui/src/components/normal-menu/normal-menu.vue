<script setup lang="ts">
import type { MenuRecordRaw } from '@tni-core/typings';

import type { NormalMenuProps } from './normal-menu';

import { useNamespace } from '@tni-core/composables';
import { TniIcon } from '@tni-core/shadcn-ui';

interface Props extends NormalMenuProps {}

defineOptions({
  name: 'NormalMenu',
});

const props = withDefaults(defineProps<Props>(), {
  activePath: '',
  collapse: false,
  menus: () => [],
  theme: 'dark',
});

const emit = defineEmits<{
  enter: [MenuRecordRaw];
  select: [MenuRecordRaw];
}>();

const { b, e, is } = useNamespace('normal-menu');

function menuIcon(menu: MenuRecordRaw) {
  return props.activePath === menu.path
    ? menu.activeIcon || menu.icon
    : menu.icon;
}
</script>

<template>
  <ul
    :class="[
      theme,
      b(),
      is('collapse', collapse),
      is(theme, true),
      is('rounded', rounded),
    ]"
    class="relative"
  >
    <template v-for="menu in menus" :key="menu.path">
      <li
        :class="[e('item'), is('active', activePath === menu.path)]"
        @click="() => emit('select', menu)"
        @mouseenter="() => emit('enter', menu)"
      >
        <TniIcon :class="e('icon')" :icon="menuIcon(menu)" fallback />

        <span :class="e('name')" class="truncate"> {{ menu.name }}</span>
      </li>
    </template>
  </ul>
</template>
<style scoped>
@reference "@tni-core/design/theme";

.tni-normal-menu {
  --menu-item-margin-y: 4px;
  --menu-item-margin-x: 0px;
  --menu-item-padding-y: 9px;
  --menu-item-padding-x: 0px;
  --menu-item-radius: 0px;

  height: calc(100% - 4px);
}

.tni-normal-menu.is-rounded {
  --menu-item-radius: 6px;
  --menu-item-margin-x: 8px;
}

.tni-normal-menu.is-dark .tni-normal-menu__item {
  @apply text-foreground/80;
}

.tni-normal-menu.is-dark .tni-normal-menu__item:not(.is-active):hover {
  @apply text-foreground;
}

.tni-normal-menu.is-dark
  .tni-normal-menu__item.is-active
  .tni-normal-menu__name,
.tni-normal-menu.is-dark
  .tni-normal-menu__item.is-active
  .tni-normal-menu__icon {
  @apply text-foreground;
}

.tni-normal-menu.is-collapse .tni-normal-menu__name {
  width: 0;
  height: 0;
  margin-top: 0;
  overflow: hidden;
  opacity: 0;
}

.tni-normal-menu.is-collapse .tni-normal-menu__icon {
  font-size: calc(var(--font-size-base, 16px) * 1.25);
}

.tni-normal-menu__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* max-width: 64px; */

  /* max-height: 64px; */
  padding: var(--menu-item-padding-y) var(--menu-item-padding-x);
  margin: var(--menu-item-margin-y) var(--menu-item-margin-x);
  color: hsl(var(--foreground) / 90%);
  cursor: pointer;
  border-radius: var(--menu-item-radius);
  transition:
    background 0.15s ease,
    padding 0.15s ease,
    border-color 0.15s ease;
}

.tni-normal-menu__item.is-active {
  @apply bg-primary text-primary dark:bg-accent;
}

.tni-normal-menu__item.is-active .tni-normal-menu__name,
.tni-normal-menu__item.is-active .tni-normal-menu__icon {
  @apply text-primary-foreground font-semibold;
}

.tni-normal-menu__item:not(.is-active):hover {
  @apply bg-heavy text-primary dark:bg-accent dark:text-foreground;
}

.tni-normal-menu__item:hover .tni-normal-menu__icon {
  transform: scale(1.2);
}

.tni-normal-menu__icon {
  @apply max-h-5;

  font-size: calc(var(--font-size-base, 16px) * 1.25);
  transition: all 0.25s ease;
}

.tni-normal-menu__name {
  @apply mt-2;

  width: 100%;
  margin-bottom: 0;
  font-size: calc(var(--font-size-base, 16px) * 0.75);
  font-weight: 400;
  text-align: center;
  transition: all 0.25s ease;
}
</style>
