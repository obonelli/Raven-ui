import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/nextjs-vite', options: {} },
  addons: ['@storybook/addon-docs'],
  stories: ['../src/components/**/*.stories.@(ts|tsx|mdx)'],
};

export default config;
