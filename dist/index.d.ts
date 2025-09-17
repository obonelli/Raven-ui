import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    loading?: boolean;
}
declare function Button({ className, variant, size, loading, children, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare function Input({ className, ...props }: InputProps): react_jsx_runtime.JSX.Element;

export { Button, type ButtonProps, Input, type InputProps };
