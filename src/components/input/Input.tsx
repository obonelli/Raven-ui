'use client';
import React, { useEffect, useId, useState } from 'react';

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
    label = '',
    value = '',
    onChange,
    placeholder = '',
    required = false,
    maxLength,
    className = '',
    disabled = false,
    readOnly = false,
    name,
    type = 'text',
    error = false,
    ...props
}: InputProps) {
    const id = useId();
    const counterId = `${id}-counter`;
    const strVal = typeof value === 'string' ? value : String(value ?? '');
    const hasValue = strVal.length > 0;
    const length = strVal.length;

    const [focused, setFocused] = useState(false);
    const [leftPad, setLeftPad] = useState(16);

    useEffect(() => {
        const el = document.getElementById(id);
        if (!el) return;

        const update = () => {
            const cs = window.getComputedStyle(el);
            const pl = parseFloat(cs.paddingLeft || '16');
            setLeftPad(Number.isFinite(pl) ? pl : 16);
        };

        update();

        const ro = new ResizeObserver(update);
        ro.observe(el);

        window.addEventListener('resize', update);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', update);
        };
    }, [id]);

    const effectivePlaceholder = focused || hasValue ? placeholder : '';

    return (
        <div className={`relative w-full ${className}`}>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={effectivePlaceholder}
                disabled={disabled}
                readOnly={readOnly}
                maxLength={maxLength}
                aria-invalid={!!error}
                aria-describedby={maxLength ? counterId : undefined}
                className={`
          block w-full bg-transparent outline-none
          text-[15px] leading-6 ${disabled ? 'text-slate-400' : 'text-slate-900'}
          placeholder-slate-400
          border-0 border-b
          ${error ? 'border-rose-500 focus:border-rose-600' : 'border-slate-300 focus:border-sky-700'}
          focus:ring-0
          pl-4 pr-4 pt-6 pb-2
          disabled:cursor-not-allowed
          transition-[border-color] duration-150
        `}
                {...props}
            />

            {label && (
                <label
                    htmlFor={id}
                    className={`
            pointer-events-none absolute
            transition-all duration-200
            ${focused || hasValue ? 'top-1.5 text-xs' : 'top-[15px] translate-y-[-1px] text-sm'}
            ${error ? 'text-rose-600' : focused ? 'text-sky-700' : 'text-slate-600'}
            font-medium leading-5
          `}
                    style={{ left: `${leftPad}px` }}
                >
                    {label}
                    {required && <span aria-hidden="true">*</span>}
                </label>
            )}

            {maxLength !== undefined && (
                <div
                    id={counterId}
                    className={`mt-1 text-right text-[12px] ${error ? 'text-rose-600' : 'text-slate-500'}`}
                >
                    {length} / {maxLength}
                </div>
            )}
        </div>
    );
}
