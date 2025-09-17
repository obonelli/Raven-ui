import type { Preview } from '@storybook/react';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0b0b0c' },
        { name: 'light', value: '#ffffff' },
      ],
    },
    docs: { title: 'Raven UI' },
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
};

export default preview;
