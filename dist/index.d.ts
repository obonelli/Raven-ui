import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'link' | 'outlineFill';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style of the button */
    variant?: ButtonVariant;
}
/** Reusable button with 4 visual variants. */
declare function Button({ children, variant, className, disabled, style, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
declare function Input({ label, value, onChange, placeholder, required, maxLength, className, disabled, readOnly, name, type, error, ...props }: InputProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, type ButtonVariant, Input, type InputProps };
