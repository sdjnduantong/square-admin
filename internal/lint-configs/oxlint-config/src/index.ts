import type { OxlintConfig } from 'oxlint';

import { defineConfig as defineOxlintConfig } from 'oxlint';

import { mergeOxlintConfigs, oxlintConfig } from './configs';

type TniOxlintConfig = Omit<OxlintConfig, 'extends'> & {
  extends?: OxlintConfig[];
};

function defineConfig(config: TniOxlintConfig = {}) {
  const { extends: extendedConfigs = [], ...restConfig } = config;

  return defineOxlintConfig(
    mergeOxlintConfigs(oxlintConfig, ...extendedConfigs, restConfig),
  );
}

export { defineConfig, oxlintConfig };
export * from './configs';
export type { OxlintConfig, TniOxlintConfig };
