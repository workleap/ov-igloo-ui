import { DateTime } from 'luxon';
import React from 'react';

import Hyperlink from '@igloo-ui/hyperlink';
import { Meta, StoryFn } from '@storybook/react';

import ChromaticWrapper from '@components/chromaticWrapper';
import Section from '@components/section';
import readme from '../README.md';

import Popover from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    chromatic: { diffThreshold: 0.792 },
    brand: "workleap"
  },
  argTypes: {
    children: {
      control: { type: 'null' },
    },
    action: {
      control: { type: 'null' },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontSize: '1.6rem',
          paddingTop: 40,
          paddingBottom: 40,
          paddingRight: 50,
          paddingLeft: 60,
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof Popover>;

const dt = DateTime.now();

const data = [
  { tag: '#1053FF', value: '0.0', name: 'Metric name' },
  { tag: '#FABF2C', value: '0.0', name: 'Submetric name' },
];

const overviewContent = (
  <div className="isb-popover__items">
    {data.map((d, i) => (
      <div className="isb-popover__item" key={`popover-item_${d.value}_${i}`}>
        <span
          className="isb-popover__tag"
          style={{ backgroundColor: d.tag }}
        ></span>
        <span className="isb-popover__value">{d.value}</span>
        <span className="isb-popover__name">{d.name}</span>
      </div>
    ))}
  </div>
);

const Template: StoryFn<typeof Popover> = (args) => (
  <ChromaticWrapper>
    <Popover {...args}>{args.children}</Popover>
  </ChromaticWrapper>
);

export const Overview = {
  render: Template,

  args: {
    children: <div className="isb-trigger" />,
    content: 'Popover copy',
    title: 'Date',
    action: (
      <Hyperlink>
        <a href="#">Tell me more</a>
      </Hyperlink>
    ),
    active: true,
    isClosable: true,
  },
};

export const QuantitativeContent = () => (
  <ChromaticWrapper>
    <Section style={{ justifyContent: 'space-between' }}>
      <Popover
        content={overviewContent}
        title={dt.setLocale('fr').toLocaleString(DateTime.DATE_FULL)}
        active
      >
        <div className="isb-trigger" />
      </Popover>

      <Popover content={overviewContent} active>
        <div className="isb-trigger" />
      </Popover>
    </Section>
  </ChromaticWrapper>
);

export const HoverEvent = {
  render: Template,

  args: {
    children: <div className="isb-trigger" />,
    content: 'Popover copy',
    title: 'Date',
    action: (
      <Hyperlink>
        <a href="#">Tell me more</a>
      </Hyperlink>
    ),
    active: true,
    isClosable: true,
    triggerEvent: 'hover',
  },
};
