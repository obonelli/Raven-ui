// src/components/ui/Modal.tsx
import React from 'react';

type ModalVariant = 'loading' | 'alert';
type Severity = 'success' | 'error' | 'info' | 'warning';

export interface ModalProps {
    visible?: boolean;
    variant?: ModalVariant;

    // loading
    message?: string;

    // alert
    title?: string;
    severity?: Severity;
    buttonText?: string;
    onClose?: () => void; // requerido si variant='alert'
}

export default function Modal({
    visible = false,
    variant = 'loading',
    message = 'Procesando…',
    title = '',
    severity = 'info',
    buttonText = 'Aceptar',
    onClose,
}: ModalProps) {
    if (!visible) return null;

    const palette: Record<
        Severity,
        { bg: string; color: string; Icon: React.FC<React.SVGProps<SVGSVGElement>> }
    > = {
        success: { bg: 'bg-emerald-100', color: 'text-emerald-600', Icon: SuccessIcon },
        error: { bg: 'bg-rose-100', color: 'text-rose-600', Icon: ErrorIcon },
        warning: { bg: 'bg-amber-100', color: 'text-amber-600', Icon: WarnIcon },
        info: { bg: 'bg-sky-100', color: 'text-sky-600', Icon: InfoIcon },
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            {variant === 'loading' ? (
                <div className="flex flex-col items-center gap-4 rounded-lg bg-white px-10 py-8 shadow-xl">
                    <svg
                        className="h-10 w-10 animate-spin text-sky-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <circle className="opacity-25" cx="12" cy="12" r="10" />
                        <path className="opacity-75" d="M22 12a10 10 0 0 1-10 10" strokeLinecap="round" />
                    </svg>
                    <p className="text-sm font-medium text-slate-800">{message}</p>
                </div>
            ) : (
                <div className="w-[90%] max-w-sm rounded-lg bg-white p-8 shadow-xl text-center space-y-6">
                    {/* icono circular */}
                    <div
                        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${palette[severity].bg}`}
                    >
                        {(() => {
                            const Icon = palette[severity].Icon;
                            return <Icon className={`h-8 w-8 ${palette[severity].color}`} />;
                        })()}
                    </div>

                    {title && <h3 className="text-lg font-semibold text-slate-800">{title}</h3>}
                    <p className="text-sm text-slate-700 whitespace-pre-line">{message}</p>

                    <button
                        type="button"
                        onClick={onClose}
                        className="mx-auto mt-2 rounded-md bg-sky-600 px-6 py-2 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none cursor-pointer"
                    >
                        {buttonText}
                    </button>
                </div>
            )}
        </div>
    );
}

/* Icons */
const SuccessIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M9 12.75 11.25 15 15 9.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
    </svg>
);

const ErrorIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
        <path d="M9 9l6 6m0-6l-6 6" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const WarnIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <path d="M12 7v4m0 4h.01" strokeWidth="2" strokeLinecap="round" />
        <polygon points="12 2 22 20 2 20" fill="none" strokeWidth="2" strokeLinejoin="round" />
    </svg>
);

const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
        <circle cx="12" cy="12" r="9" strokeWidth="2" />
        <path d="M12 8h.01M11 12h1v4h1" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
