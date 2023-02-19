
export type FieldValueProps = string | number | boolean;

export interface FieldProps {
  value: FieldValueProps;
  field: string;
}

export interface FormProviderProps {
  initialValues: { [arg: string]: FieldValueProps };
  children: React.ReactNode;
  validate: { [arg: string]: (arg: string) => string | boolean | undefined };
}

export interface FormFieldsProps {
  [arg: string]: FieldValueProps;
}

export interface FormErrorsProps {
  [arg: string]: string;
}

export interface FormPropsContext {
  handleChange: (args: FieldProps) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  fields: FormFieldsProps;
  errors: FormErrorsProps | undefined;
  resetError: (args: string) => void;
}