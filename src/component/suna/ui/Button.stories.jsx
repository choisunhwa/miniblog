import React from 'react';

import Button from './Button';

export default {
  title: 'suna component/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'full'],
      control: {
        type: 'select'
      }
    }
  }
};


const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};
export const Teritiary = Template.bind({});
Teritiary.args = {
  variant: 'Teritiary',
};