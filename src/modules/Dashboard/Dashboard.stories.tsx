import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dashboard } from './Dashboard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Dashboard',
  component: Dashboard,
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => <Dashboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};