import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import ColorPicker, { type ColorName } from './ColorPicker';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    brand: "workleap"
  }
} as Meta<typeof ColorPicker>;

type Story = StoryObj<typeof ColorPicker>;

export const Overview: Story = {
  render: (args) => {
    const [selectedColor, setSelectedColor] = React.useState<ColorName>("decorativeOption3");

    return (
      <Section>
        <ColorPicker {...args} onSelect={
          (color) => {
            setSelectedColor(color);
          }
        } selectedColor={selectedColor} />
      </Section>
    );
  },
  args: {
    disabled: false
  }
};
