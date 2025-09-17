import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Dropzone from './Dropzone';

const meta: Meta<typeof Dropzone> = {
    title: 'UI/Dropzone',
    component: Dropzone,
    args: { accept: 'image/*,.pdf', maxSizeMb: 10, size: 'md' },
    parameters: { layout: 'centered' },
    decorators: [
        (Story) => (
            <div style={{ width: 720, maxWidth: '90vw', minHeight: '50vh', display: 'grid', placeItems: 'center' }}>
                <Story />
            </div>
        ),
    ],
};
export default meta;

type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
    render: (args) => {
        const [file, setFile] = useState<File | null>(null);
        return <Dropzone {...args} file={file} onFileSelect={setFile} />;
    },
};

export const Large: Story = {
    render: (args) => {
        const [file, setFile] = useState<File | null>(null);
        return <Dropzone {...args} size="lg" file={file} onFileSelect={setFile} />;
    },
};

export const FullWidth: Story = {
    render: (args) => {
        const [file, setFile] = useState<File | null>(null);
        return (
            <div style={{ width: 900, maxWidth: '95vw' }}>
                <Dropzone {...args} fullWidth file={file} onFileSelect={setFile} />
            </div>
        );
    },
};
