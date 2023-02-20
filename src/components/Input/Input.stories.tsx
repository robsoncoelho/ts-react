import type { Meta, StoryObj } from '@storybook/react';
import FormProvider from '../../hooks/useForm';
import { emailValidation } from '../../utils/formValidation';

import Input from './index';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: (args) => (
    <FormProvider
      initialValues={{ email: '' }}
      validate={{
        email: (value) => emailValidation(value as string),
      }}
      onSubmit={() => null}
      {...args.formProvider}>
      <Input {...args.component} />
    </FormProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    component: {
      name: 'email',
      label: 'Email',
      placeholder: 'Email here...',
    },
  },
};

export const Error: Story = {
  args: {
    formProvider: { validateOnInit: true },
    component: {
      name: 'email',
      label: 'Email',
      placeholder: 'Email here...',
    },
  },
};
