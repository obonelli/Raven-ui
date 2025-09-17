import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Dropzone from './Dropzone';

const meta: Meta<typeof Dropzone> = {
    title: 'UI/Dropzone',
    component: Dropzone,
    args: { accept: 'image/*,.pdf', maxSizeMb: 10 },
};
export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {
    render: (args) => {
        const [file, setFile] = useState<File | null>(null);
        return <Dropzone {...args} file={file} onFileSelect={setFile} />;
    },
};
