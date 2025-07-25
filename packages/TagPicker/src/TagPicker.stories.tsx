import React from 'react';

import { Meta, StoryFn } from '@storybook/react';

import Section from '@components/section';
import readme from '../README.md';

import FormGroup from '@igloo-ui/form-group';
import { memberMockData, mockData } from './data';
import TagPicker, { Keys, TagItem } from './TagPicker';

export default {
  title: 'Components/TagPicker',
  component: TagPicker,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    brand: "workleap",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '35rem',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof TagPicker>;

const Template: StoryFn<typeof TagPicker> = (args) => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);

  const select = (tagText: string): void => {
    setSelected((prevSelected) => [
      ...prevSelected,
      {
        id: Date.now().toString(),
        text: tagText,
      },
    ]);
  };

  const remove = (id: string): void => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      {...args}
      selectedResults={selected}
      onSelection={select}
      onTagRemove={remove}
    />
  );
};

export const Overview = {
  render: Template,

  args: {
    separators: [Keys.Enter, Keys.Comma, Keys.Space],
    placeholder: 'Enter anything then press enter, comma or space',
  },
};

export const DefaultSeparators = {
  render: Template,

  args: {
    placeholder: 'Enter anything then press enter.',
  },
};

const SearchTemplate: StoryFn<typeof TagPicker> = (args) => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);
  const [results, setResults] = React.useState<TagItem[]>([]);

  const onInput = (value: string): void => {
    setResults(
      mockData.filter(
        (d) =>
          d.text.toLowerCase().includes(value.toLowerCase()) &&
          !selected.includes(d)
      )
    );
  };

  const select = (id: string): void => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string): void => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      {...args}
      results={results}
      selectedResults={selected}
      onInput={onInput}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
    />
  );
};

const MemberSearchTemplate: StoryFn<typeof TagPicker> = (args) => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);
  const [results, setResults] = React.useState<TagItem[]>([]);

  const onInput = (value: string): void => {
    setResults(
      memberMockData.filter(
        (d) =>
          d.text.toLowerCase().includes(value.toLowerCase()) &&
          !selected.includes(d)
      )
    );
  };

  const select = (id: string): void => {
    const selectedItem = memberMockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string): void => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      {...args}
      results={results}
      selectedResults={selected}
      onInput={onInput}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
    />
  );
};

export const WithSearching = {
  render: SearchTemplate,

  args: {
    placeholder: 'Enter Team or Bob',
    showSearchIcon: true,
  },
};

export const MemberResults = {
  render: MemberSearchTemplate,

  args: {
    placeholder: 'Search for a name (example: Bob or Allen)',
    showSearchIcon: true,
  },
};

export const SizeMediumResults = {
  render: SearchTemplate,

  args: {
    placeholder: 'Enter Team or Bob',
    showSearchIcon: true,
    listSize: 'medium'
  },
};

export const MaxHeight = {
  render: SearchTemplate,

  args: {
    placeholder: 'Enter multiple tags to see how the max height works.',
    maxHeight: '8rem',
    className: 'isb-tag-picker--small-width',
  },
};

export const MaxTags = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([mockData[0], mockData[1]]);
  const [results, setResults] = React.useState<TagItem[]>([]);
  const [showMessage, setShowMessage] = React.useState(false);

  const onInput = (value: string): void => {
    setResults(
      mockData.filter(
        (d) =>
          d.text.toLowerCase().includes(value.toLowerCase()) &&
          !selected.includes(d)
      )
    );
  };

  const select = (id: string): void => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
    setShowMessage(false);
  };

  const onMaxTags = () => {
    setShowMessage(true);
  };

  const MAX_TAGS = 2;

  return (
    <FormGroup
      messageType="info"
      message={`You’ve reached your ${MAX_TAGS} recipient limit`}
      showMessage={showMessage}
    >
      <TagPicker
        results={results}
        selectedResults={selected}
        onInput={onInput}
        onSelection={select}
        onTagRemove={remove}
        noResultsText="No results"
        placeholder={`Try entering more than ${MAX_TAGS} tags`}
        maxTags={MAX_TAGS}
        onMaxTags={onMaxTags}
        showSearchIcon
      />
    </FormGroup>
  );
};

export const Disabled = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);

  const select = (id: string): void => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      selectedResults={[mockData[0]]}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
      placeholder="Disabled tag picker"
      disabled
    />
  );
};

export const Error = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);
  const [results, setResults] = React.useState<TagItem[]>([]);

  const onInput = (value: string): void => {
    setResults(
      mockData.filter(
        (d) =>
          d.text.toLowerCase().includes(value.toLowerCase()) &&
          !selected.includes(d)
      )
    );
  };

  const select = (id: string): void => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      selectedItem.hasError = true;
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      results={results}
      selectedResults={selected}
      onInput={onInput}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
      placeholder="Disabled tag picker"
      error
    />
  );
};

export const ErrorWithTagErrors = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([mockData[0], {...mockData[1], hasError: true}]);
  const [results, setResults] = React.useState<TagItem[]>([]);

  const onInput = (value: string): void => {
    setResults(
      mockData.filter(
        (d) =>
          d.text.toLowerCase().includes(value.toLowerCase()) &&
          !selected.includes(d)
      )
    );
  };

  const select = (id: string): void => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      results={results}
      selectedResults={selected}
      onInput={onInput}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
      placeholder="Enter more options"
      showSearchIcon
      error
    />
  );
};

export const SelectedOptions = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([mockData[0], mockData[1]]);
  const [results, setResults] = React.useState<TagItem[]>([]);

  const onInput = (value: string): void => {
    setResults(
      mockData.filter(
        (d) =>
          d.text.toLowerCase().includes(value.toLowerCase()) &&
          !selected.includes(d)
      )
    );
  };

  const select = (id: string): void => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <TagPicker
      results={results}
      selectedResults={selected}
      onInput={onInput}
      onSelection={select}
      onTagRemove={remove}
      noResultsText="No results"
      placeholder="Enter more options"
      showSearchIcon
    />
  );
};

export const LoadingOptions = () => {
  const [selected, setSelected] = React.useState<TagItem[]>([]);

  const select = (id: string): void => {
    const selectedItem = mockData.find((d) => d.id === id);
    if (selectedItem) {
      setSelected([...selected, selectedItem]);
    } else {
      setSelected([...selected]);
    }
  };

  const remove = (id: string) => {
    setSelected(selected.filter((s) => s.id !== id));
  };

  return (
    <Section column>
      <TagPicker
        selectedResults={selected}
        onSelection={select}
        onTagRemove={remove}
        noResultsText="No results"
        placeholder="Enter more options"
        showSearchIcon
        loading
      />
      <TagPicker
        selectedResults={selected}
        onSelection={select}
        onTagRemove={remove}
        noResultsText="No results"
        placeholder="Enter more options"
        showSearchIcon
        loading
        listSize='medium'
      />
    </Section>
  );
};
