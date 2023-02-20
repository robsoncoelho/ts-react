import type { Meta, StoryObj } from '@storybook/react';
import FormProvider from '../../hooks/useForm';

import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: (args) => (
    <FormProvider
      initialValues={{ terms: false }}
      validate={{ terms: (value) => !value && 'required' }}
      onSubmit={() => null}
      {...args.formProvider}>
      <Checkbox {...args.component} />
    </FormProvider>
  ),
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    component: {
      name: 'terms',
      label: 'I agree to the Timecale Cloud Terms of Service',
    },
  },
};

export const Error: Story = {
  args: {
    formProvider: { validateOnInit: true },
    component: {
      name: 'terms',
      label: 'I agree to the Timecale Cloud Terms of Service',
    },
  },
};
