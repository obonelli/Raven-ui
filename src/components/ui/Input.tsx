'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            {...props}
            className={cn(
                'w-full h-10 px-3 rounded-[var(--radius-xl)]',
                'bg-background text-foreground/90 placeholder:opacity-60',
                'border border-white/10 focus:border-brand-500 outline-none',
                'transition-colors',
                className
            )}
        />
    );
}
