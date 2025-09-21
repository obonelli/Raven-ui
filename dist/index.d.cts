import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

/** Visual “shape” del botón */
type Appearance = "solid" | "outline" | "ghost" | "link";
/** Paleta alineada a tokens de styles.css */
type Color = "primary" | "secondary" | "success" | "warning" | "danger";
/** Back-compat con tu API vieja */
type LegacyVariant = "primary" | "outline" | "link" | "outlineFill";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Nueva API */
    appearance?: Appearance;
    color?: Color;
    /** Prop legada (opcional). Se mapea a la nueva API. */
    variant?: LegacyVariant;
}
/** Reusable button – sin clases dinámicas de Tailwind */
declare function Button({ children, appearance, color, variant, // legacy
className, disabled, style, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
declare function Input({ label, value, onChange, placeholder, required, maxLength, className, disabled, readOnly, name, type, error, ...props }: InputProps): react_jsx_runtime.JSX.Element;

export { type Appearance, Button, type ButtonProps, type LegacyVariant as ButtonVariant, type Color, Input, type InputProps, type LegacyVariant };
