import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'UI/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'radio', options: ['text', 'email', 'password'] },
        disabled: { control: 'boolean' },
        placeholder: { control: 'text' },
    },
    args: { placeholder: 'Type something…', type: 'text' },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {};
export const Email: Story = { args: { type: 'email', placeholder: 'name@example.com' } };
export const Password: Story = { args: { type: 'password', placeholder: '••••••••' } };
export const Disabled: Story = { args: { disabled: true, value: 'Read-only' } };
