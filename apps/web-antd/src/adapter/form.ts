import type { TniFormSchema as FormSchema, TniFormProps } from '@tni/common-ui';

import type { ComponentType } from './component';

import { setupTniForm, useTniForm as useForm, z } from '@tni/common-ui';
import { $t } from '@tni/locales';

async function initSetupTniForm() {
  setupTniForm<ComponentType>({
    config: {
      // ant design vue组件库默认都是 v-model:value
      baseModelPropName: 'value',

      // 一些组件是 v-model:checked 或者 v-model:fileList
      modelPropNameMap: {
        Checkbox: 'checked',
        Radio: 'checked',
        Switch: 'checked',
        Upload: 'fileList',
      },
    },
    defineRules: {
      // 输入项目必填国际化适配
      required: (value, _params, ctx) => {
        if (value === undefined || value === null || value.length === 0) {
          return $t('ui.formRules.required', [ctx.label]);
        }
        return true;
      },
      // 选择项目必填国际化适配
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
