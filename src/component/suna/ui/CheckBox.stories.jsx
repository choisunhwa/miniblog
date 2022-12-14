import React from 'react';

import CheckBox from './CheckBox';

export default {
    title: 'suna component/CheckBox',
    component: CheckBox,
};

//π We create a βtemplateβ of how args map to rendering
const Template = (args) => <CheckBox {...args} />;

//π Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    subTextValue: null,
    children: 'λμν©λλ€'
};

export const SubTextType = Template.bind({});
SubTextType.args = {
    subTextValue: ['check in', 'check out'],
    children: 'check'
};