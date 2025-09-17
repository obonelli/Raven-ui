import React, { useEffect, useRef, useState } from 'react';

export interface DropzoneProps {
    file: File | null;
    onFileSelect?: (file: File | null) => void;
    accept?: string;
    maxSizeMb?: number;
    className?: string;
    children?: React.ReactNode;
    iconSrc?: string;
}

export default function Dropzone({
    file,
    onFileSelect,
    accept = '',
    maxSizeMb = 10,
    className = '',
    children,
    iconSrc = '/assets/AttachmentUploaderIcon.svg',
}: DropzoneProps) {
    const boxRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [dragOver, setDragOver] = useState(false);

    // drag & drop listeners
    useEffect(() => {
        const el = boxRef.current;
        if (!el) return;

        const stop = (e: DragEvent) => { e.preventDefault(); e.stopPropagation(); };

        const onDragEnter = (e: DragEvent) => { stop(e); setDragOver(true); };
        const onDragOver = (e: DragEvent) => { stop(e); setDragOver(true); };
        const onDragLeave = (e: DragEvent) => { stop(e); setDragOver(false); };
        const onDrop = (e: DragEvent) => {
            stop(e);
            setDragOver(false);
            const f = e.dataTransfer?.files?.[0] || null;
            onFileSelect?.(f);
        };

        el.addEventListener('dragenter', onDragEnter);
        el.addEventListener('dragover', onDragOver);
        el.addEventListener('dragleave', onDragLeave);
        el.addEventListener('drop', onDrop);

        return () => {
            el.removeEventListener('dragenter', onDragEnter);
            el.removeEventListener('dragover', onDragOver);
            el.removeEventListener('dragleave', onDragLeave);
            el.removeEventListener('drop', onDrop);
        };
    }, [onFileSelect]);

    const openPicker = () => inputRef.current?.click();

    return (
        <>
            <div
                ref={boxRef}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openPicker()}
                onClick={openPicker}
                className={[
                    'relative w-full min-h-40',
                    'flex flex-col items-center justify-center gap-2',
                    'rounded-md border-2 border-dashed text-center cursor-pointer',
                    dragOver ? 'border-sky-400 bg-sky-50/40' : 'border-gray-300 hover:bg-gray-50',
                    'transition-colors',
                    className,
                ].join(' ')}
            >
                {/* input 100% overlay (realmente invisible) */}
                <input
                    ref={inputRef}
                    type="file"
                    accept={accept}
                    onChange={(e) => onFileSelect?.(e.target.files?.[0] || null)}
                    className="absolute inset-0 h-full w-full opacity-0 cursor-pointer"
                    aria-label="Seleccionar archivo"
                />

                {children ?? (
                    <div className="pointer-events-none select-none flex flex-col items-center gap-2 px-4">
                        {/* usa tu SVG del proyecto (colócalo en /public/assets/AttachmentUploaderIcon.svg) */}
                        <img src={iconSrc} alt="" className="h-10 w-10" />
                        <p className="text-sm">
                            Arrastra y suelta el archivo <br />
                            <span className="text-sky-600 underline">o haz clic aquí para explorar</span>
                        </p>
                        <p className="text-xs text-gray-500">
                            Formatos: {accept || '—'}. Máx: {maxSizeMb} mb.
                        </p>
                    </div>
                )}
            </div>

            {file && (
                <div className="mt-4 flex items-center justify-between rounded bg-green-50 px-4 py-2 text-sm">
                    <span className="truncate">{file.name}</span>
                    <button
                        type="button"
                        onClick={() => onFileSelect?.(null)}
                        className="cursor-pointer text-slate-700 hover:text-slate-900"
                        aria-label="Eliminar archivo"
                        title="Eliminar archivo"
                    >
                        🗑
                    </button>
                </div>
            )}
        </>
    );
}
