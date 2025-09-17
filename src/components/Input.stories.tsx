import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Input from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    args: { label: 'Your name', placeholder: 'Write here…' },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    render: (args) => {
        const [v, setV] = useState('');
        return <Input {...args} value={v} onChange={(e) => setV(e.target.value)} />;
    },
};

export const WithMaxLength: Story = {
    render: (args) => {
        const [v, setV] = useState('');
        return (
            <Input
                {...args}
                label="Username"
                maxLength={20}
                value={v}
                onChange={(e) => setV(e.target.value)}
            />
        );
    },
};

export const Error: Story = {
    render: (args) => {
        const [v, setV] = useState('');
        return (
            <Input
                {...args}
                label="Email"
                type="email"
                error
                value={v}
                onChange={(e) => setV(e.target.value)}
            />
        );
    },
};
