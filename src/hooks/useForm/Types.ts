
export type FieldValueProps = string | number | boolean;

export interface FieldProps {
  value: FieldValueProps;
  field: string;
}

export interface FormProviderProps {
  initialValues: { [arg: string]: FieldValueProps };
  children: React.ReactNode;
  onSubmit: () => void
  validate: { [arg: string]: (arg: string) => string | boolean | undefined };
}

export interface FormFieldsProps {
  [arg: string]: FieldValueProps;
}

export interface FormErrorsProps {
  [arg: string]: string;
}

export interface FormContextProps {
  handleChange: (args: FieldProps) => void;
  fields: FormFieldsProps;
  errors: FormErrorsProps | undefined;
  resetError: (args: string) => void;
}