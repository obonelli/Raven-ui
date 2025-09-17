'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    loading?: boolean;
}

const base =
    'inline-flex items-center justify-center rounded-[var(--radius-xl)] font-medium transition-colors active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<Variant, string> = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600',
    secondary: 'bg-white/10 text-white hover:bg-white/20',
    ghost: 'bg-transparent text-foreground hover:bg-white/10',
};

const sizes: Record<Size, string> = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
};

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    loading,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            disabled={props.disabled || loading}
            className={cn(base, variants[variant], sizes[size], 'shadow-[var(--shadow-card)]', className)}
        >
            {loading ? 'Loading…' : children}
        </button>
    );
}
