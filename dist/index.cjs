'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function mapLegacy(variant) {
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
var TOK = {
  primary: { base: "var(--color-primary)", h: "var(--color-primary-600)", a: "var(--color-primary-700)" },
  secondary: { base: "var(--color-secondary)", h: "var(--color-secondary-600)", a: "var(--color-secondary-700)" },
  success: { base: "var(--color-success)", h: "var(--color-success-600)", a: "var(--color-success-700)" },
  warning: { base: "var(--color-warning)", h: "var(--color-warning-600)", a: "var(--color-warning-700)" },
  danger: { base: "var(--color-danger)", h: "var(--color-danger-600)", a: "var(--color-danger-700)" }
};
function Button(_a) {
  var _b = _a, {
    children,
    appearance,
    color,
    variant,
    className: className = "",
    disabled = false,
    style
  } = _b, props = __objRest(_b, [
    "children",
    "appearance",
    "color",
    "variant",
    // legacy
    "className",
    "disabled",
    "style"
  ]);
  var _a2, _b2;
  const legacy = mapLegacy(variant);
  const _appearance = (_a2 = appearance != null ? appearance : legacy.appearance) != null ? _a2 : "solid";
  const _color = (_b2 = color != null ? color : legacy.color) != null ? _b2 : "primary";
  const base = "inline-flex h-11 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium transition-[background-color,opacity,color,border,box-shadow] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--btn-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--btn-ring-offset)]";
  const clsByAppearance = {
    solid: "text-[var(--btn-fg)] bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] active:bg-[var(--btn-bg-active)] shadow-sm",
    outline: "text-[var(--btn-fg)] border bg-[var(--btn-bg)] border-[var(--btn-border)] hover:border-[var(--btn-border-hover)] hover:text-[var(--btn-text-hover)]",
    ghost: "text-[var(--btn-border)] border border-[var(--btn-border)] bg-transparent hover:bg-[var(--btn-ghost-hover)]",
    link: "h-auto px-0 bg-transparent underline underline-offset-2 text-[var(--btn-border)] hover:text-[var(--btn-border-hover)]"
  };
  const c = TOK[_color];
  const styleVars = _appearance === "solid" ? {
    "--btn-bg": c.base,
    "--btn-bg-hover": c.h,
    "--btn-bg-active": c.a,
    "--btn-fg": "#ffffff",
    "--btn-border": c.base,
    "--btn-border-hover": c.h,
    "--btn-text-hover": "#ffffff",
    "--btn-ghost-hover": "transparent",
    "--btn-ring": c.base,
    "--btn-ring-offset": "var(--color-bg)"
  } : _appearance === "outline" ? {
    "--btn-bg": "var(--color-card)",
    "--btn-fg": "var(--color-ink)",
    "--btn-border": "var(--color-border)",
    "--btn-border-hover": c.base,
    "--btn-text-hover": c.base,
    "--btn-ghost-hover": "transparent",
    "--btn-ring": c.base,
    "--btn-ring-offset": "var(--color-bg)"
  } : _appearance === "ghost" ? {
    "--btn-bg": "transparent",
    "--btn-fg": c.base,
    "--btn-border": c.base,
    "--btn-border-hover": c.h,
    "--btn-text-hover": c.h,
    "--btn-ghost-hover": `color-mix(in_oklab, ${c.base}, transparent 85%)`,
    "--btn-ring": c.base,
    "--btn-ring-offset": "var(--color-bg)"
  } : {
    // link
    "--btn-bg": "transparent",
    "--btn-fg": c.base,
    "--btn-border": c.base,
    "--btn-border-hover": c.h,
    "--btn-text-hover": c.h,
    "--btn-ghost-hover": "transparent",
    "--btn-ring": c.base,
    "--btn-ring-offset": "var(--color-bg)"
  };
  const disabledCls = disabled ? "opacity-50 pointer-events-none select-none" : "cursor-pointer";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadProps(__spreadValues({}, props), {
      disabled,
      style: __spreadValues(__spreadValues({}, styleVars), style),
      "data-appearance": _appearance,
      "data-color": _color,
      className: `${base} ${clsByAppearance[_appearance]} ${disabledCls} ${className}`,
      children
    })
  );
}
function Input(_a) {
  var _b = _a, {
    label = "",
    value = "",
    onChange,
    placeholder = "",
    required = false,
    maxLength,
    className = "",
    disabled = false,
    readOnly = false,
    name,
    type = "text",
    error = false
  } = _b, props = __objRest(_b, [
    "label",
    "value",
    "onChange",
    "placeholder",
    "required",
    "maxLength",
    "className",
    "disabled",
    "readOnly",
    "name",
    "type",
    "error"
  ]);
  const id = react.useId();
  const counterId = `${id}-counter`;
  const strVal = typeof value === "string" ? value : String(value != null ? value : "");
  const hasValue = strVal.length > 0;
  const length = strVal.length;
  const [focused, setFocused] = react.useState(false);
  const [leftPad, setLeftPad] = react.useState(16);
  react.useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const update = () => {
      const cs = window.getComputedStyle(el);
      const pl = parseFloat(cs.paddingLeft || "16");
      setLeftPad(Number.isFinite(pl) ? pl : 16);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [id]);
  const effectivePlaceholder = focused || hasValue ? placeholder : "";
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: `relative w-full ${className}`, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      __spreadValues({
        id,
        name,
        type,
        value,
        onChange,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        placeholder: effectivePlaceholder,
        disabled,
        readOnly,
        maxLength,
        "aria-invalid": !!error,
        "aria-describedby": maxLength ? counterId : void 0,
        className: `
          block w-full bg-transparent outline-none
          text-[15px] leading-6 ${disabled ? "text-slate-400" : "text-slate-900"}
          placeholder-slate-400
          border-0 border-b
          ${error ? "border-rose-500 focus:border-rose-600" : "border-slate-300 focus:border-sky-700"}
          focus:ring-0
          pl-4 pr-4 pt-6 pb-2
          disabled:cursor-not-allowed
          transition-[border-color] duration-150
        `
      }, props)
    ),
    label && /* @__PURE__ */ jsxRuntime.jsxs(
      "label",
      {
        htmlFor: id,
        className: `
            pointer-events-none absolute
            transition-all duration-200
            ${focused || hasValue ? "top-1.5 text-xs" : "top-[15px] translate-y-[-1px] text-sm"}
            ${error ? "text-rose-600" : focused ? "text-sky-700" : "text-slate-600"}
            font-medium leading-5
          `,
        style: { left: `${leftPad}px` },
        children: [
          label,
          required && /* @__PURE__ */ jsxRuntime.jsx("span", { "aria-hidden": "true", children: "*" })
        ]
      }
    ),
    maxLength !== void 0 && /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        id: counterId,
        className: `mt-1 text-right text-[12px] ${error ? "text-rose-600" : "text-slate-500"}`,
        children: [
          length,
          " / ",
          maxLength
        ]
      }
    )
  ] });
}

exports.Button = Button;
exports.Input = Input;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map