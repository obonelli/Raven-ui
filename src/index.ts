// src/index.ts
// Re-export nombrado para consumir desde el front:
// import { Button, Input } from '@obonelli/raven-ui';

export { default as Button } from './components/button/Button';
export type { ButtonProps, ButtonVariant } from './components/button/Button';

export { default as Input } from './components/input/Input';
export type { InputProps } from './components/input/Input';
