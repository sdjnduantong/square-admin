<script setup lang="ts">
import type { SupportedLanguagesType } from '@tni/locales';

import { SUPPORT_LANGUAGES } from '@tni/constants';
import { Languages } from '@tni/icons';
import { loadLocaleMessages } from '@tni/locales';
import { preferences, updatePreferences } from '@tni/preferences';

import { TniDropdownRadioMenu, TniIconButton } from '@tni-core/shadcn-ui';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string | undefined) {
  if (!value) return;
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div v-if="SUPPORT_LANGUAGES.length > 1">
    <TniDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <TniIconButton class="hover:animate-[shrink_0.3s_ease-in-out]">
        <Languages class="size-4 text-foreground" />
      </TniIconButton>
    </TniDropdownRadioMenu>
  </div>
</template>
