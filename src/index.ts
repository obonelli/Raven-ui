// src/index.ts
// Re-export nombrado para consumir desde el front:
// import { Button, Input } from '@obonelli/raven-ui';

export { default as Button } from './components/button/Button';
export type {
    ButtonProps,
    Appearance,
    Color,
    LegacyVariant,
} from './components/button/Button';

// Alias de compatibilidad (para no romper builds anteriores)
export type { LegacyVariant as ButtonVariant } from './components/button/Button';

export { default as Input } from './components/input/Input';
export type { InputProps } from './components/input/Input';
