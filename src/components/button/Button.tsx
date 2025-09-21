import React from "react";

/** Visual “shape” del botón */
export type Appearance = "solid" | "outline" | "ghost" | "link";

/** Paleta alineada a tokens de styles.css */
export type Color = "primary" | "secondary" | "success" | "warning" | "danger";

/** Back-compat con tu API vieja */
export type LegacyVariant = "primary" | "outline" | "link" | "outlineFill";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Nueva API */
    appearance?: Appearance;
    color?: Color;

    /** Prop legada (opcional). Se mapea a la nueva API. */
    variant?: LegacyVariant;
}

function mapLegacy(variant?: LegacyVariant): { appearance: Appearance; color: Color } {
    switch (variant) {
        case "outline":
            return { appearance: "outline", color: "primary" };
        case "link":
            return { appearance: "link", color: "primary" };
        case "outlineFill":
            return { appearance: "ghost", color: "primary" };
        case "primary":
        default:
            return { appearance: "solid", color: "primary" };
    }
}

/** Helper para strings tokenizados */
const TOK = {
    primary: { base: "var(--color-primary)", h: "var(--color-primary-600)", a: "var(--color-primary-700)" },
    secondary: { base: "var(--color-secondary)", h: "var(--color-secondary-600)", a: "var(--color-secondary-700)" },
    success: { base: "var(--color-success)", h: "var(--color-success-600)", a: "var(--color-success-700)" },
    warning: { base: "var(--color-warning)", h: "var(--color-warning-600)", a: "var(--color-warning-700)" },
    danger: { base: "var(--color-danger)", h: "var(--color-danger-600)", a: "var(--color-danger-700)" },
} satisfies Record<Color, { base: string; h: string; a: string }>;

/** Reusable button – sin clases dinámicas de Tailwind */
export default function Button({
    children,
    appearance,
    color,
    variant, // legacy
    className = "",
    disabled = false,
    style,
    ...props
}: ButtonProps) {
    const legacy = mapLegacy(variant);
    const _appearance: Appearance = appearance ?? legacy.appearance ?? "solid";
    const _color: Color = color ?? legacy.color ?? "primary";

    // ===== base classes – TODAS literales para Tailwind v4 =====
    const base =
        "inline-flex h-11 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium " +
        "transition-[background-color,opacity,color,border,box-shadow] duration-150 " +
        "focus:outline-none focus-visible:ring-2 " +
        "focus-visible:ring-[var(--btn-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--btn-ring-offset)]";

    // ===== variant classes – usan variables genéricas (siempre literales) =====
    const clsByAppearance: Record<Appearance, string> = {
        solid:
            "text-[var(--btn-fg)] bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] active:bg-[var(--btn-bg-active)] shadow-sm",
        outline:
            "text-[var(--btn-fg)] border bg-[var(--btn-bg)] border-[var(--btn-border)] hover:border-[var(--btn-border-hover)] hover:text-[var(--btn-text-hover)]",
        ghost:
            "text-[var(--btn-border)] border border-[var(--btn-border)] bg-transparent hover:bg-[var(--btn-ghost-hover)]",
        link:
            "h-auto px-0 bg-transparent underline underline-offset-2 text-[var(--btn-border)] hover:text-[var(--btn-border-hover)]",
    };

    // ===== valores CSS variables por (appearance, color) =====
    const c = TOK[_color];

    const styleVars: React.CSSProperties & Record<string, string> =
        _appearance === "solid"
            ? {
                "--btn-bg": c.base,
                "--btn-bg-hover": c.h,
                "--btn-bg-active": c.a,
                "--btn-fg": "#ffffff",
                "--btn-border": c.base,
                "--btn-border-hover": c.h,
                "--btn-text-hover": "#ffffff",
                "--btn-ghost-hover": "transparent",
                "--btn-ring": c.base,
                "--btn-ring-offset": "var(--color-bg)",
            }
            : _appearance === "outline"
                ? {
                    "--btn-bg": "var(--color-card)",
                    "--btn-fg": "var(--color-ink)",
                    "--btn-border": "var(--color-border)",
                    "--btn-border-hover": c.base,
                    "--btn-text-hover": c.base,
                    "--btn-ghost-hover": "transparent",
                    "--btn-ring": c.base,
                    "--btn-ring-offset": "var(--color-bg)",
                }
                : _appearance === "ghost"
                    ? {
                        "--btn-bg": "transparent",
                        "--btn-fg": c.base,
                        "--btn-border": c.base,
                        "--btn-border-hover": c.h,
                        "--btn-text-hover": c.h,
                        "--btn-ghost-hover": `color-mix(in_oklab, ${c.base}, transparent 85%)`,
                        "--btn-ring": c.base,
                        "--btn-ring-offset": "var(--color-bg)",
                    }
                    : {
                        // link
                        "--btn-bg": "transparent",
                        "--btn-fg": c.base,
                        "--btn-border": c.base,
                        "--btn-border-hover": c.h,
                        "--btn-text-hover": c.h,
                        "--btn-ghost-hover": "transparent",
                        "--btn-ring": c.base,
                        "--btn-ring-offset": "var(--color-bg)",
                    };

    const disabledCls = disabled
        ? "opacity-50 pointer-events-none select-none"
        : "cursor-pointer";

    return (
        <button
            {...props}
            disabled={disabled}
            style={{ ...styleVars, ...style }}
            data-appearance={_appearance}
            data-color={_color}
            className={`${base} ${clsByAppearance[_appearance]} ${disabledCls} ${className}`}
        >
            {children}
        </button>
    );
}
