import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import PieChart from './PieChart';

export default {
  title: 'Components/PieChart',
  component: PieChart,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    brand: "workleap"
  }
} as Meta<typeof PieChart>;

type Story = StoryObj<typeof PieChart>;

const mockData = [
  { id: 'positive', percentage: 25, color: "var(--hop-status-positive-surface-strong)" },
  { id: 'negative', percentage: 10, color: "var(--hop-status-negative-surface-strong)" },
  { id: 'skipped', percentage: 40, color: "var(--hop-upsell-surface-selected)" },
  { id: 'unanswered', percentage: 25, color: "var(--hop-neutral-surface-disabled)" },
];

export const Overview: Story = {
  render: (args) => {
    return (
      <Section>
        <PieChart
          {...args}
          data={mockData}
        />
      </Section>
    );
  },
  args: {
    label: 'Poll Completion',
    rate: 35
  },
};

export const Empty: Story = {
  args: {
    label: 'Poll Completion',
  },
  render: (args) => {
    return (
      <Section>
          <PieChart
            label={args.label}
            size="regular"
          />
          <PieChart
            label={args.label}
            size="large"
          />
      </Section>
    );
  },
};


export const Sizes: Story = {
  render: () => {
    return (
      <Section>
        <PieChart
          data={mockData}
          label="Poll Completion"
          size="regular"
          rate={35}
        />
        <PieChart
          data={mockData}
          label="Poll Completion"
          size="large"
          rate={35}
        />
      </Section>
    );
  },
};
