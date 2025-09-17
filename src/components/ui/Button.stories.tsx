import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    args: { children: 'Click me', variant: 'primary' },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Link: Story = { args: { variant: 'link' } };
export const OutlineFill: Story = { args: { variant: 'outlineFill' } };
export const Disabled: Story = { args: { disabled: true } };
