import React from 'react';
import { Meta, Story } from '@storybook/react';

import {TestAnnouncement, IAnnouncement, AnnouncementType} from '../src';

const meta: Meta<{ announcement: IAnnouncement }> = {
  title: 'TestAnnouncement',
  component: TestAnnouncement,
  args: {
    announcement: {
      announcementType: AnnouncementType.Contract,
      id: "1",
      orderTitle: "Order title"
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<{ announcement: IAnnouncement }> = args => <TestAnnouncement {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
