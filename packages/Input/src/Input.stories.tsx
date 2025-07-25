import React from 'react';

import Percentage from '@igloo-ui/icons/dist/Percentage';
import Search from '@igloo-ui/icons/dist/Search';
import { Meta } from '@storybook/react';

import Input from './Input';

import Section from '@components/section';
import readme from '../README.md';

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        docs: {
            description: {
                component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
            }
        },
        brand: "workleap"
    },
    argTypes: {
        value: {
            control: {
                type: null,
            },
        },
    },
} as Meta<typeof Input>;

const inputPlaceholder = 'ex: Lorem ipsum dolor';

export const Overview = {
    args: {
        placeholder: inputPlaceholder,
    },
};

export const Types = () => (
    <Section column>
        <Input type="text" placeholder="input type text" />
        <Input type="password" value="this is a good password!" />
        <Input type="number" value="0123456789" />
    </Section>
);

export const Sizes = () => (
    <Section column>
        <Input placeholder="Default" />
        <Input isCompact placeholder="Compact" />
    </Section>
);

export const States = () => (
    <Section column>
        <Input disabled placeholder="Disabled" />
        <Input className="active" placeholder="Active" />
        <Input className="focus" placeholder="Focus" />
        <Input error placeholder="Error" />
    </Section>
);

export const WithPrefix = () => (
    <Section column>
        <Input prefixIcon={<Search />} placeholder="Default" />
        <Input
            prefixIcon={<Search size="small" />}
            isCompact
            placeholder="Compact"
        />
    </Section>
);

export const WithSuffix = () => (
    <Section column>
        <Input
            suffixIcon={<Percentage />}
            type="number"
            max="100"
            min="0"
            placeholder="Default"
        />
        <Input
            suffixIcon={<Percentage size="small" />}
            type="number"
            max="100"
            min="0"
            isCompact
            placeholder="Compact"
        />
    </Section>
);

export const WithCharacterLimit = () => (
    <Section column>
        <Input
            placeholder="Default"
            showCharactersIndicator
            maxLength={100}
        />
        <Input
            isCompact
            placeholder="Compact"
            showCharactersIndicator
            maxLength={10}
        />
    </Section>
);

export const WithCharacterLimitAndSuffix = () => (
    <Section column>
        <Input
            suffixIcon={<Percentage />}
            placeholder="Default"
            showCharactersIndicator
            maxLength={100}
        />
        <Input
            suffixIcon={<Percentage size="small" />}
            isCompact
            placeholder="Compact"
            showCharactersIndicator
            maxLength={5}
        />
    </Section>
);
