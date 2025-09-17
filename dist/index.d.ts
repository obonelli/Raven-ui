import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'link' | 'outlineFill';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style of the button */
    variant?: ButtonVariant;
}

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export type { ButtonProps, InputProps };
