import type { TniFormSchema as FormSchema, TniFormProps } from '@tni/common-ui';

import type { ComponentType } from './component';

import { setupTniForm, useTniForm as useForm, z } from '@tni/common-ui';
import { $t } from '@tni/locales';

async function initSetupTniForm() {
  setupTniForm<ComponentType>({
    config: {
      modelPropNameMap: {
        Upload: 'fileList',
        CheckboxGroup: 'model-value',
      },
    },
    defineRules: {
      required: (value, _params, ctx) => {
        if (value === undefined || value === null || value.length === 0) {
          return $t('ui.formRules.required', [ctx.label]);
        }
        return true;
      },
      selectRequired: (value, _params, ctx) => {
        if (value === undefined || value === null) {
          return $t('ui.formRules.selectRequired', [ctx.label]);
        }
        return true;
      },
    },
  });
}

const useTniForm = useForm<ComponentType>;

export { initSetupTniForm, useTniForm, z };

export type TniFormSchema = FormSchema<ComponentType>;
export type { TniFormProps };
