import { inject, provide, toRefs, type InjectionKey, type Ref } from "vue";
import type { FormProps } from "../props";
interface UseFormResult {
  labelWidth: Ref<string>;
}

export const FormContextKey: InjectionKey<UseFormResult> =
  Symbol("FormContextKey");

export function createFormContext(props: FormProps) {
  const { labelWidth } = toRefs(props);
  const formContext = {
    labelWidth,
  };
  provide(FormContextKey, formContext);
  return formContext;
}
export function useFormContext(): UseFormResult | undefined {
  return inject(FormContextKey);
}
