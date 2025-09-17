import { jsx } from 'react/jsx-runtime';

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

// src/lib/cn.ts
function cn(...args) {
  return args.filter(Boolean).join(" ");
}
var base = "inline-flex items-center justify-center rounded-[var(--radius-xl)] font-medium transition-colors active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed";
var variants = {
  primary: "bg-brand-500 text-white hover:bg-brand-600",
  secondary: "bg-white/10 text-white hover:bg-white/20",
  ghost: "bg-transparent text-foreground hover:bg-white/10"
};
var sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base"
};
function Button(_a) {
  var _b = _a, {
    className,
    variant = "primary",
    size = "md",
    loading,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "loading",
    "children"
  ]);
  return /* @__PURE__ */ jsx(
    "button",
    __spreadProps(__spreadValues({}, props), {
      disabled: props.disabled || loading,
      className: cn(base, variants[variant], sizes[size], "shadow-[var(--shadow-card)]", className),
      children: loading ? "Loading\u2026" : children
    })
  );
}
function Input(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx(
    "input",
    __spreadProps(__spreadValues({}, props), {
      className: cn(
        "w-full h-10 px-3 rounded-[var(--radius-xl)]",
        "bg-background text-foreground/90 placeholder:opacity-60",
        "border border-white/10 focus:border-brand-500 outline-none",
        "transition-colors",
        className
      )
    })
  );
}

export { Button, Input };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map