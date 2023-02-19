import { createContext, useContext, useMemo, useState } from 'react';
import {
  FieldProps,
  FormErrorsProps,
  FormFieldsProps,
  FormContextProps,
  FormProviderProps,
} from './Types';

const FormContext = createContext<FormContextProps>({
  resetError: () => null,
  handleChange: () => null,
  fields: {},
  errors: {},
});

const FormProvider = ({
  initialValues,
  validate,
  children,
  onSubmit,
}: FormProviderProps) => {
  const [fields, setFields] = useState<FormFieldsProps>(initialValues);
  const [errors, setErrors] = useState<FormErrorsProps>();

  const handleChange = ({ value, field }: FieldProps) => {
    setFields((form) => ({
      ...form,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = Object.keys(fields).reduce((prev, next) => {
      return {
        ...prev,
        [next]:
          typeof validate[next] === 'function' &&
          validate[next](fields[next] as string),
      };
    }, {});

    if (Object.values(errors).filter((item) => item).length > 0) {
      setErrors(errors);
    } else {
      onSubmit();
    }
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
      fields,
      errors,
      resetError,
    }),
    [handleChange, fields]
  );

  return (
    <FormContext.Provider value={memoizedValue}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

export default FormProvider;
