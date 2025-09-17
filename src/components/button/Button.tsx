import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'link' | 'outlineFill';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style of the button */
    variant?: ButtonVariant;
}

/** Reusable button with 4 visual variants. */
export default function Button({
    children,
    variant = 'primary',
    className = '',
    disabled = false,
    style,
    ...props
}: ButtonProps) {
    const base = 'h-11 px-6 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5aa7ff]';

    const variants: Record<ButtonVariant, string> = {
        primary: `text-white bg-[#002d4c] hover:bg-[#00243c] ${base}`,
        outline: `border border-gray-400 bg-white hover:bg-gray-50 ${base}`,
        link: `h-auto px-0 bg-transparent text-[#003865] underline underline-offset-2 hover:text-[#002d4c] ${base}`,
        outlineFill: `border border-[#002d4c] text-[#002d4c] bg-transparent hover:bg-[#002d4c] hover:text-white ${base}`,
    };

    const disabledCls = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

    return (
        <button
            {...props}
            disabled={disabled}
            style={style}
            className={`${variants[variant]} ${disabledCls} ${className}`}
        >
            {children}
        </button>
    );
}
