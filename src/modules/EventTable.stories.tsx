import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EventTable } from './EventTable';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'xxx/EventTable',
  component: EventTable,
} as ComponentMeta<typeof EventTable>;

const Template: ComponentStory<typeof EventTable> = (args) => <EventTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};