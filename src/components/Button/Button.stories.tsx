import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    type: { control: 'select', options: ['primary', 'default', 'dashed', 'text', 'link'] },
    shape: { control: 'select', options: ['default', 'circle', 'round'] },
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
    danger: { control: 'boolean' },
    ghost: { control: 'boolean' },
    gradient: { control: 'boolean' },
    iconPosition: { control: 'select', options: ['start', 'end'] },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Primary Button',
  },
};

export const Default: Story = {
  args: {
    type: 'default',
    label: 'Default Button',
  },
};

export const Dashed: Story = {
  args: {
    type: 'dashed',
    label: 'Dashed Button',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    label: 'Text Button',
  },
};

export const Link: Story = {
  args: {
    type: 'link',
    label: 'Link Button',
    href: 'https://example.com',
    target: '_blank',
  },
};

export const Danger: Story = {
  args: {
    danger: true,
    type: 'primary',
    label: 'Danger Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    label: 'Loading Button',
  },
};

export const Block: Story = {
  args: {
    block: true,
    label: 'Block Button',
  },
};

export const Gradient: Story = {
  args: {
    gradient: true,
    label: 'Gradient Button',
  },
};

export const Icon: Story = {
  args: {
    label: 'Search',
    icon: <MagnifyingGlassIcon />,
    iconPosition: 'start',
  },
};
