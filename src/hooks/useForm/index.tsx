import { createContext, useContext, useEffect, useMemo, useState } from 'react';
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
  validateOnInit,
  validate,
  children,
  onSubmit,
}: FormProviderProps) => {
  const [fields, setFields] = useState<FormFieldsProps>(initialValues);
  const [errors, setErrors] = useState<FormErrorsProps>();

  const onValidate = () => {
    return Object.keys(fields).reduce((prev, next) => {
      return {
        ...prev,
        [next]:
          typeof validate[next] === 'function' &&
          validate[next](fields[next] as string),
      };
    }, {});
  };

  const handleChange = useMemo(
    () =>
      ({ value, field }: FieldProps) => {
        setFields((form) => ({
          ...form,
          [field]: value,
        }));
      },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = onValidate();

    if (Object.values(errors).filter((item) => item).length > 0) {
      setErrors(errors);
    } else {
      onSubmit();
    }
  };

  const resetError = useMemo(
    () => (field: string) => {
      if (typeof errors === 'object') {
        const updatedErrors = Object.keys(errors)
          .filter((item) => item !== field)
          .reduce((prev, next) => {
            return {
              ...prev,
              [next]: errors[next],
            };
          }, {});

        setErrors(updatedErrors);
      } else {
        setErrors({});
      }
    },
    [errors]
  );

  useEffect(() => {
    if (validateOnInit) {
      const errors = onValidate();

      setErrors(errors);
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({
      handleChange,
      fields,
      errors,
      resetError,
    }),
    [handleChange, fields, errors, resetError]
  );

  return (
    <FormContext.Provider value={memoizedValue}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);

export default FormProvider;
