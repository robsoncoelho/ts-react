import { createContext, useContext, useMemo, useState } from 'react';
import {
  FieldProps,
  FormErrorsProps,
  FormFieldsProps,
  FormPropsContext,
  FormProviderProps,
} from './Types';

const FormContext = createContext<FormPropsContext>({
  resetError: () => null,
  handleChange: () => null,
  onSubmit: () => null,
  fields: {},
  errors: {},
});

const FormProvider = ({
  initialValues,
  validate,
  children,
}: FormProviderProps) => {
  const [fields, setFields] = useState<FormFieldsProps>(initialValues);
  const [errors, setErrors] = useState<FormErrorsProps>();

  const handleChange = ({ value, field }: FieldProps) => {
    setFields((form) => ({
      ...form,
      [field]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = Object.keys(fields).reduce((prev, next) => {
      return {
        ...prev,
        [next]:
          typeof validate[next] === 'function' &&
          validate[next](fields[next] as string),
      };
    }, {});

    setErrors(errors);
  };

  const resetError = (field: string) => {
    const updatedErrors =
      typeof errors === 'object'
        ? Object.keys(errors)
            .filter((item) => item !== field)
            .reduce((prev, next) => {
              return {
                ...prev,
                [next]: errors[next],
              };
            }, {})
        : {};

    setErrors(updatedErrors);
  };

  const memoizedValue = useMemo(
    () => ({
      handleChange,
      onSubmit,
      fields,
      errors,
      resetError,
    }),
    [handleChange, fields]
  );

  return (
    <FormContext.Provider value={memoizedValue}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

export default FormProvider;
