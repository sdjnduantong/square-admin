export type {
  AlertProps,
  BeforeCloseScope,
  IconType,
  PromptProps,
} from './alert';
export { useAlertContext } from './alert';
export { default as Alert } from './alert.vue';
export {
  tniAlert as alert,
  clearAllAlerts,
  tniConfirm as confirm,
  tniPrompt as prompt,
} from './AlertBuilder';
