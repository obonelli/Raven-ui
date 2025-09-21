import type { Preview } from '@storybook/react';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'light', // blanco por defecto
      values: [
        { name: 'canvas-dark', value: '#0b1220' },
        { name: 'light', value: '#ffffff' },
        { name: 'neutral-50', value: '#fafafa' },
      ],
    },
    docs: {
      title: 'Raven UI',
      source: { state: 'hidden' },
    },
    viewport: {
      viewports: {
        xs: { name: 'XS / 360', styles: { width: '360px', height: '640px' } },
        sm: { name: 'SM / 640', styles: { width: '640px', height: '800px' } },
        md: { name: 'MD / 768', styles: { width: '768px', height: '1024px' } },
        lg: { name: 'LG / 1024', styles: { width: '1024px', height: '768px' } },
        xl: { name: 'XL / 1280', styles: { width: '1280px', height: '800px' } },
      },
    },
  },
};

export default preview;
