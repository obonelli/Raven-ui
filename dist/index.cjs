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
function Button(_a) {
  var _b = _a, {
    children,
    variant = "primary",
    className = "",
    disabled = false,
    style
  } = _b, props = __objRest(_b, [
    "children",
    "variant",
    "className",
    "disabled",
    "style"
  ]);
  const base = "h-11 px-6 rounded-md text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5aa7ff]";
  const variants = {
    primary: `text-white bg-[#002d4c] hover:bg-[#00243c] ${base}`,
    outline: `border border-gray-400 bg-white hover:bg-gray-50 ${base}`,
    link: `h-auto px-0 bg-transparent text-[#003865] underline underline-offset-2 hover:text-[#002d4c] ${base}`,
    outlineFill: `border border-[#002d4c] text-[#002d4c] bg-transparent hover:bg-[#002d4c] hover:text-white ${base}`
  };
  const disabledCls = disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer";
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    __spreadProps(__spreadValues({}, props), {
      disabled,
      style,
      className: `${variants[variant]} ${disabledCls} ${className}`,
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