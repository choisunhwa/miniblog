import React from 'react';

import TextInput from './TextInput';

export default {
    title: 'suna component/TextInput',
    component: TextInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TextInput {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
    height: 'auto'
};