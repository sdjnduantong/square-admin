import type { App } from 'vue';

import type { LocaleSetupOptions, SupportedLanguagesType } from '@tni/locales';

import {
  $t,
  setupI18n as coreSetup,
  loadLocalesMapFromDir,
} from '@tni/locales';
import { preferences } from '@tni/preferences';

import dayjs from 'dayjs';

const modules = import.meta.glob('./langs/**/*.json');

const localesMap = loadLocalesMapFromDir(
  /\.\/langs\/([^/]+)\/(.*)\.json$/,
  modules,
);
/**
 * 加载应用特有的语言包
 * 这里也可以改造为从服务端获取翻译数据
 * @param lang
 */
async function loadMessages(lang: SupportedLanguagesType) {
  const [appLocaleMessages] = await Promise.all([
    localesMap[lang]?.(),
    loadThirdPartyMessage(),
  ]);
  return appLocaleMessages?.default;
}

/**
 * 加载第三方组件库的语言包
 * @param lang
 */
async function loadThirdPartyMessage() {
  await loadDayjsLocale();
}

/**
 * 加载dayjs的语言包
 * @param lang
 */
async function loadDayjsLocale() {
  const locale = await import('dayjs/locale/zh-cn');
  dayjs.locale(locale);
}

async function setupI18n(app: App, options: LocaleSetupOptions = {}) {
  await coreSetup(app, {
    defaultLocale: preferences.app.locale,
    loadMessages,
    missingWarn: !import.meta.env.PROD,
    ...options,
  });
}

export { $t, setupI18n };
