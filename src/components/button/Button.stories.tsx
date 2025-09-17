import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'], // genera DocsPage por default; el .mdx lo reemplaza
    parameters: {
        backgrounds: { default: 'white' },
        docs: {
            // no page aquí — la sustituye Button.docs.mdx
            source: { state: 'hidden' }, // toggle “Show code”
        },
    },
    args: { children: 'Click me', variant: 'primary' },
    argTypes: {
        // Inputs
        children: {
            description: 'Button label',
            table: { category: 'Inputs', type: { summary: 'ReactNode' } },
            control: 'text',
        },
        variant: {
            description: 'Visual style',
            options: ['primary', 'outline', 'link', 'outlineFill'],
            control: { type: 'radio' },
            table: {
                category: 'Inputs',
                type: { summary: `'primary' | 'outline' | 'link' | 'outlineFill'` },
                defaultValue: { summary: 'primary' },
            },
        },
        disabled: {
            description: 'Disables the button',
            control: 'boolean',
            table: { category: 'Inputs', defaultValue: { summary: 'false' } },
        },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
        // Outputs
        onClick: {
            description: 'Click handler. React: `onClick`. Vue: `@click`. Angular: `(click)`.',
            action: 'clicked',
            table: { category: 'Outputs' },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Outline: Story = { args: { variant: 'outline' } };
export const Link: Story = { args: { variant: 'link' } };
export const OutlineFill: Story = { args: { variant: 'outlineFill' } };
export const Disabled: Story = { args: { disabled: true } };

// Playground para la Docs Page (lo usa el MDX)
export const Playground: Story = {
    args: { children: 'Playground' },
    parameters: { backgrounds: { default: 'white' } },
};
