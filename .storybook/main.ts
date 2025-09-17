import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/nextjs-vite', options: {} },
  addons: ['@storybook/addon-docs'],
  stories: [
    // Solo buscamos stories dentro de src/components/ui
    '../src/components/**/*.stories.@(ts|tsx|mdx)',
  ],
};

export default config;
