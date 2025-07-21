import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import Color from './Color';

const workleapColors = [
  "var(--hop-decorative-option2-surface)",
  "var(--hop-decorative-option4-surface)",
  "var(--hop-decorative-option5-surface)",
  "var(--hop-decorative-option8-surface)",
  "var(--hop-decorative-option4-text)",
  "var(--hop-decorative-option8-text)"
]

export default {
  title: 'Components/Color',
  component: Color,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    brand: "workleap"
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Color>;

type Story = StoryObj<typeof Color>;

export const Overview: Story = {
  render: (args) => {
    return (
      <Section>
        <Color {...args} color={workleapColors[2]} />
      </Section>
    );
  },
  args: {
    size: 'large',
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <Section>
        <Color color={workleapColors[0]} size="small" />
        <Color color={workleapColors[0]} size="medium" />
        <Color color={workleapColors[0]} size="large" />
        <Color color={workleapColors[0]} size="xlarge" />
      </Section>
    );
  }
};

export const Initials: Story = {
  render: () => {
    return (
      <Section>
        <Color
          color={workleapColors[3]}
          textColor={workleapColors[5]}
          size="xlarge"
          name="Awesome Possum Team"
        />
      </Section>
    );
  }
};

export const CustomText: Story = {
  render: () => {
    return (
      <Section>
        <Color color={workleapColors[1]} textColor={workleapColors[4]} size="xlarge" name="VC" />
      </Section>
    );
  }
};
