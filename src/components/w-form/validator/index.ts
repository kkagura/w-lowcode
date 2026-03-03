import Schema, { type Rules, type ValidateError } from "async-validator";

export function validate(value: any, rules: Rules) {
  const validator = new Schema(rules);
  return validator.validate(value).then((result) => {
    return result.reduce(
      (errors: Record<string, ValidateError>, error: ValidateError) => {
        if (error.field) {
          errors[error.field] = error;
        }
        return errors;
      },
      {}
    );
  });
}
