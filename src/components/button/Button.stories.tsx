import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            default: "light",
            values: [
                { name: "light", value: "#ffffff" },
                { name: "card", value: "var(--color-card)" },
                { name: "dark-canvas", value: "#0b1220" },
            ],
        },
        docs: { source: { state: "hidden" } },
    },
    args: {
        children: "Click me",
        appearance: "solid",
        color: "primary",
    },
    argTypes: {
        children: {
            description: "Button label",
            table: { category: "Inputs", type: { summary: "ReactNode" } },
            control: "text",
        },
        appearance: {
            description: "Visual shape",
            options: ["solid", "outline", "ghost", "link"],
            control: { type: "radio" },
            table: {
                category: "Inputs",
                type: { summary: "'solid' | 'outline' | 'ghost' | 'link'" },
                defaultValue: { summary: "solid" },
            },
        },
        color: {
            description: "Color intent",
            options: ["primary", "secondary", "success", "warning", "danger"],
            control: { type: "select" },
            table: {
                category: "Inputs",
                type: {
                    summary:
                        "'primary' | 'secondary' | 'success' | 'warning' | 'danger'",
                },
                defaultValue: { summary: "primary" },
            },
        },
        disabled: {
            description: "Disables the button",
            control: "boolean",
            table: { category: "Inputs", defaultValue: { summary: "false" } },
        },
        className: { table: { disable: true } },
        style: { table: { disable: true } },
        onClick: {
            description: "Click handler",
            action: "clicked",
            table: { category: "Outputs" },
        },
        // legacy (oculto)
        variant: { table: { disable: true } },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

/** ===== API nueva ===== */
export const SolidPrimary: Story = {};
export const OutlinePrimary: Story = { args: { appearance: "outline" } };
export const GhostPrimary: Story = { args: { appearance: "ghost" } };
export const LinkPrimary: Story = { args: { appearance: "link" } };

export const Secondary: Story = { args: { color: "secondary" } };
export const Success: Story = { args: { color: "success" } };
export const Warning: Story = { args: { color: "warning" } };
export const Danger: Story = { args: { color: "danger" } };

export const Disabled: Story = { args: { disabled: true } };

export const Playground: Story = {
    args: { children: "Playground" },
    parameters: { backgrounds: { default: "card" } },
};

/** ===== Alias de compatibilidad (restaura id components-button--primary) ===== */
export const Primary: Story = {
    name: "Primary",
    args: { appearance: "solid", color: "primary" },
};
