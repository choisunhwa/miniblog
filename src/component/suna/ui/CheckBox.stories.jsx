import React from 'react';

import CheckBox from './CheckBox';

export default {
    title: 'suna component/CheckBox',
    component: CheckBox,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CheckBox {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    subTextValue: null,
    children: '동의합니다'
};

export const SubTextType = Template.bind({});
SubTextType.args = {
    subTextValue: ['check in', 'check out'],
    children: 'check'
};