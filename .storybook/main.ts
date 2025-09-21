import type { StorybookConfig } from '@storybook/nextjs-vite';
import { mergeConfig } from 'vite';
import tailwind from '@tailwindcss/vite';

const config: StorybookConfig = {
  framework: { name: '@storybook/nextjs-vite', options: {} },
  addons: ['@storybook/addon-docs'],
  stories: [
    // Solo buscamos stories dentro de src/components
    '../src/components/**/*.stories.@(ts|tsx|mdx)',
  ],
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      plugins: [tailwind()],
    });
  },
};

export default config;
