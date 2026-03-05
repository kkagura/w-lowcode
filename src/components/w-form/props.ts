import type { ExtractPropTypes } from "vue";

export const formItemProps = {
  labelWidth: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
};

export const formProps = {
  labelWidth: {
    type: String,
    default: "100px",
  },
};

export type FormProps = ExtractPropTypes<typeof formProps>;
