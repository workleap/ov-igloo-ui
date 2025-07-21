import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import readme from '../README.md';

import BarChart from './BarChart';

export default {
  title: 'Components/BarChart',
  component: BarChart,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    chromatic: { delay: 600 },
    brand: "workleap"
  },
} as Meta<typeof BarChart>;

type Story = StoryObj<typeof BarChart>;

const mockData = [
  {
    id: '1',
    label: 'Good vibes',
    value: 48,
    color: "#C7EBFF",
  },
  {
    id: '2',
    label: 'Excellence',
    value: 46,
    color: "#ECD599",
  },
  {
    id: '3',
    label: 'Radical candor',
    value: 24,
    color: "#D2CDF8",
  },
  {
    id: '4',
    label: 'Custom cards by members',
    value: 0,
    color: "#B6BEAD",
  },
];

export const Overview: Story = {
  render: (args) => (
      <BarChart
        {...args}
        dataSet={mockData}
      />
    ),
};
