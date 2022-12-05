import React from 'react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UI Component/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    // backgroundColor: { control: 'color' },
        type: {
            options: ['primary', 'secondary'],
            control: {type: 'radio'}
        },
        size: {
            options: ['auto', 'small', 'medium'],
            control: {type: 'radio'}
        },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: 'secondary',
};