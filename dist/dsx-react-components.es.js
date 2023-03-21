import P from "classnames";
import se, { useState as F, useRef as K, useEffect as J, createElement as gr, useMemo as vr } from "react";
import { debounce as br } from "lodash";
import { Minus as xr, Plus as yr, CaretDown as Er, UploadSimple as wr, X as Cr } from "phosphor-react";
import { twMerge as T } from "tailwind-merge";
import { createPortal as Rr } from "react-dom";
import { useEditor as Nr, mergeAttributes as _r, EditorContent as Tr } from "@tiptap/react";
import kr from "@tiptap/starter-kit";
import Or from "@tiptap/extension-heading";
var X = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Pr() {
  if (De)
    return Y;
  De = 1;
  var t = se, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, c = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(x, p, d) {
    var b, N = {}, k = null, R = null;
    d !== void 0 && (k = "" + d), p.key !== void 0 && (k = "" + p.key), p.ref !== void 0 && (R = p.ref);
    for (b in p)
      l.call(p, b) && !u.hasOwnProperty(b) && (N[b] = p[b]);
    if (x && x.defaultProps)
      for (b in p = x.defaultProps, p)
        N[b] === void 0 && (N[b] = p[b]);
    return { $$typeof: o, type: x, key: k, ref: R, props: N, _owner: c.current };
  }
  return Y.Fragment = n, Y.jsx = g, Y.jsxs = g, Y;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function jr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var t = se, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), x = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), $ = Symbol.iterator, Z = "@@iterator";
    function Q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = $ && e[$] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          a[s - 1] = arguments[s];
        Ie("error", e, a);
      }
    }
    function Ie(e, r, a) {
      {
        var s = D.ReactDebugCurrentFrame, h = s.getStackAddendum();
        h !== "" && (r += "%s", a = a.concat([h]));
        var v = a.map(function(m) {
          return String(m);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Le = !1, We = !1, Me = !1, Be = !1, Ye = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === u || Ye || e === c || e === d || e === b || Be || e === R || Le || We || Me || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === N || e.$$typeof === g || e.$$typeof === x || e.$$typeof === p || e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Ve(e, r, a) {
      var s = e.displayName;
      if (s)
        return s;
      var h = r.displayName || r.name || "";
      return h !== "" ? a + "(" + h + ")" : a;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case d:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return ue(r) + ".Consumer";
          case g:
            var a = e;
            return ue(a._context) + ".Provider";
          case p:
            return Ve(e, e.render, "ForwardRef");
          case N:
            var s = e.displayName || null;
            return s !== null ? s : j(e.type) || "Memo";
          case k: {
            var h = e, v = h._payload, m = h._init;
            try {
              return j(m(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, M = 0, de, fe, pe, me, he, ge, ve;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function He() {
      {
        if (M === 0) {
          de = console.log, fe = console.info, pe = console.warn, me = console.error, he = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        M++;
      }
    }
    function ze() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: de
            }),
            info: S({}, e, {
              value: fe
            }),
            warn: S({}, e, {
              value: pe
            }),
            error: S({}, e, {
              value: me
            }),
            group: S({}, e, {
              value: he
            }),
            groupCollapsed: S({}, e, {
              value: ge
            }),
            groupEnd: S({}, e, {
              value: ve
            })
          });
        }
        M < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = D.ReactCurrentDispatcher, re;
    function V(e, r, a) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (h) {
            var s = h.stack.trim().match(/\n( *(at )?)/);
            re = s && s[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, H;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      H = new qe();
    }
    function xe(e, r) {
      if (!e || te)
        return "";
      {
        var a = H.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      te = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = ee.current, ee.current = null, He();
      try {
        if (r) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (A) {
              s = A;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (A) {
              s = A;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            s = A;
          }
          e();
        }
      } catch (A) {
        if (A && s && typeof A.stack == "string") {
          for (var f = A.stack.split(`
`), _ = s.stack.split(`
`), y = f.length - 1, w = _.length - 1; y >= 1 && w >= 0 && f[y] !== _[w]; )
            w--;
          for (; y >= 1 && w >= 0; y--, w--)
            if (f[y] !== _[w]) {
              if (y !== 1 || w !== 1)
                do
                  if (y--, w--, w < 0 || f[y] !== _[w]) {
                    var O = `
` + f[y].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, O), O;
                  }
                while (y >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = v, ze(), Error.prepareStackTrace = h;
      }
      var L = e ? e.displayName || e.name : "", Ae = L ? V(L) : "";
      return typeof e == "function" && H.set(e, Ae), Ae;
    }
    function Ge(e, r, a) {
      return xe(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Je(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case d:
          return V("Suspense");
        case b:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ge(e.render);
          case N:
            return z(e.type, r, a);
          case k: {
            var s = e, h = s._payload, v = s._init;
            try {
              return z(v(h), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ye = {}, Ee = D.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, a = z(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(a);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Ke(e, r, a, s, h) {
      {
        var v = Function.call.bind(q);
        for (var m in e)
          if (v(e, m)) {
            var f = void 0;
            try {
              if (typeof e[m] != "function") {
                var _ = Error((s || "React class") + ": " + a + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              f = e[m](r, m, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              f = y;
            }
            f && !(f instanceof Error) && (G(h), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, m, typeof f), G(null)), f instanceof Error && !(f.message in ye) && (ye[f.message] = !0, G(h), E("Failed %s type: %s", a, f.message), G(null));
          }
      }
    }
    var Xe = Array.isArray;
    function ne(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Qe(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Ce(e) {
      if (Qe(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), we(e);
    }
    var B = D.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Ne, ae;
    ae = {};
    function rr(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && B.current && r && B.current.stateNode !== r) {
        var a = j(B.current.type);
        ae[a] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(B.current.type), e.ref), ae[a] = !0);
      }
    }
    function ar(e, r) {
      {
        var a = function() {
          Re || (Re = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var a = function() {
          Ne || (Ne = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, a, s, h, v, m) {
      var f = {
        $$typeof: o,
        type: e,
        key: r,
        ref: a,
        props: m,
        _owner: v
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function lr(e, r, a, s, h) {
      {
        var v, m = {}, f = null, _ = null;
        a !== void 0 && (Ce(a), f = "" + a), tr(r) && (Ce(r.key), f = "" + r.key), rr(r) && (_ = r.ref, nr(r, h));
        for (v in r)
          q.call(r, v) && !er.hasOwnProperty(v) && (m[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            m[v] === void 0 && (m[v] = y[v]);
        }
        if (f || _) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && ar(m, w), _ && or(m, w);
        }
        return ir(e, f, _, h, s, B.current, m);
      }
    }
    var oe = D.ReactCurrentOwner, _e = D.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var r = e._owner, a = z(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(a);
      } else
        _e.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Te() {
      {
        if (oe.current) {
          var e = j(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var ke = {};
    function cr(e) {
      {
        var r = Te();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = cr(r);
        if (ke[a])
          return;
        ke[a] = !0;
        var s = "";
        e && e._owner && e._owner !== oe.current && (s = " It was passed a child from " + j(e._owner.type) + "."), I(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), I(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            le(s) && Oe(s, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = Q(e);
          if (typeof h == "function" && h !== e.entries)
            for (var v = h.call(e), m; !(m = v.next()).done; )
              le(m.value) && Oe(m.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || r.$$typeof === N))
          a = r.propTypes;
        else
          return;
        if (a) {
          var s = j(r);
          Ke(a, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var h = j(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var s = r[a];
          if (s !== "children" && s !== "key") {
            I(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function je(e, r, a, s, h, v) {
      {
        var m = Ue(e);
        if (!m) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = sr(h);
          _ ? f += _ : f += Te();
          var y;
          e === null ? y = "null" : ne(e) ? y = "array" : e !== void 0 && e.$$typeof === o ? (y = "<" + (j(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, f);
        }
        var w = lr(e, r, a, h, v);
        if (w == null)
          return w;
        if (m) {
          var O = r.children;
          if (O !== void 0)
            if (s)
              if (ne(O)) {
                for (var L = 0; L < O.length; L++)
                  Pe(O[L], e);
                Object.freeze && Object.freeze(O);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(O, e);
        }
        return e === l ? dr(w) : ur(w), w;
      }
    }
    function fr(e, r, a) {
      return je(e, r, a, !0);
    }
    function pr(e, r, a) {
      return je(e, r, a, !1);
    }
    var mr = pr, hr = fr;
    U.Fragment = l, U.jsx = mr, U.jsxs = hr;
  }()), U;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Pr() : t.exports = jr();
})(X);
const Ar = X.exports.Fragment, i = X.exports.jsx, C = X.exports.jsxs;
function Xr({
  title: t,
  text: o,
  icon: n,
  variant: l = "primary"
}) {
  const c = P("flex w-full rounded py-3 px-[14px]", `bg-${l}-light text-${l}`), u = P("flex items-center justify-center pl-2 pr-5", t ? "text-2xl" : "text-lg");
  return /* @__PURE__ */ C("div", {
    className: c,
    children: [n && /* @__PURE__ */ i("div", {
      className: u,
      children: n
    }), /* @__PURE__ */ C("div", {
      children: [t && /* @__PURE__ */ i("span", {
        className: "block text-base font-semibold",
        children: t
      }), /* @__PURE__ */ i("span", {
        className: "text-sm font-medium",
        children: o
      })]
    })]
  });
}
function Dr({
  labelIcon: t,
  label: o,
  accordionState: n,
  id: l,
  component: c,
  highlight: u,
  handleOpenClose: g,
  mode: x
}) {
  const [p, d] = F(!!(n != null && n[l])), [b, N] = F(0), k = K(null), R = br(() => g(), 450), $ = () => {
    d((E) => !E), n != null && n[l] ? R() : g();
  };
  J(() => {
    var E;
    N((E = k == null ? void 0 : k.current) == null ? void 0 : E.clientHeight);
  }), J(() => {
    x === "single" && p && p !== !!n[l] && d(!1);
  }, [n]);
  const Z = P("border-b border-solid border-lightBorder last:border-b-0 relative", u && p && "bg-grayLight before:absolute before:h-full before:w-[3px] before:bg-primary before:top before:first:rounded-[6px] before:last:rounded-tl-bl-[6px]"), Q = P("flex items-center py-4 px-6 text-sm w-full cursor-pointer", u && p ? "text-primary" : "text-heading"), D = P("font-semibold", t && "ml-3");
  return /* @__PURE__ */ C("div", {
    className: Z,
    style: {
      overflow: "hidden",
      transition: "all 400ms ease",
      maxHeight: p ? b + 54 : "54px"
    },
    children: [/* @__PURE__ */ C("div", {
      className: Q,
      onClick: $,
      children: [t, /* @__PURE__ */ i("span", {
        className: D,
        children: o
      }), n != null && n[l] ? /* @__PURE__ */ i(xr, {
        size: 20,
        className: "ml-auto text-heading"
      }) : /* @__PURE__ */ i(yr, {
        size: 20,
        className: "ml-auto cursor-pointer"
      })]
    }), !!(n != null && n[l]) && /* @__PURE__ */ i("div", {
      className: "w-full px-6 pb-4",
      ref: k,
      children: c
    })]
  });
}
function Zr({
  className: t,
  mode: o = "multiple",
  highlight: n,
  items: l,
  initialState: c
}) {
  const u = P("rounded-[6px] border border-solid border-lightBorder", t && t), [g, x] = F(c || {}), p = (d) => {
    x((b) => o === "multiple" ? {
      ...b,
      [d]: !b[d]
    } : {
      [d]: !b[d]
    });
  };
  return /* @__PURE__ */ i("div", {
    className: u,
    children: l.map((d) => /* @__PURE__ */ i(Dr, {
      label: d.label,
      labelIcon: d.labelIcon,
      id: d.id,
      component: d.component,
      handleOpenClose: () => p(d.id),
      accordionState: g,
      highlight: n,
      mode: o
    }, d.id))
  });
}
function Qr({
  text: t,
  variant: o = "primary",
  version: n = "solid"
}) {
  const c = P("flex w-fit rounded font-bold leading-3", typeof t == "string" ? "px-[10px] py-[5px] text-xs" : "p-[5px] text-sm", n === "solid" ? `bg-${o} text-white` : `bg-${o}-light text-${o}`);
  return /* @__PURE__ */ i("div", {
    className: c,
    children: t
  });
}
function et({
  items: t
}) {
  return /* @__PURE__ */ i("div", {
    className: "flex items-center",
    children: t.map((o, n) => /* @__PURE__ */ C(se.Fragment, {
      children: [/* @__PURE__ */ i("span", {
        className: "text-sm text-primary hover:brightness-125",
        children: o.linkComponent
      }), n !== t.length - 1 && /* @__PURE__ */ i("span", {
        className: "mx-2 text-sm text-heading",
        children: "/"
      })]
    }, n))
  });
}
function rt({
  variant: t = "primary",
  version: o = "solid",
  leftIcon: n,
  rightIcon: l,
  children: c,
  className: u,
  onClick: g
}) {
  const x = P("px-[20px] py-[10px] text-[15px] font-medium rounded shadow-sm flex items-center leading-[1.1rem]", o === "solid" ? ["hover:brightness-[1.13]", "ease-in duration-100", "text-white", `bg-${t}`] : ["hover:brightness-90", `text-${t}`, `bg-${t}-light`], u && u), p = P(n && "ml-3", l && "mr-3");
  return /* @__PURE__ */ C("button", {
    className: x,
    onClick: g,
    children: [n, /* @__PURE__ */ i("span", {
      className: p,
      children: c
    }), l]
  });
}
function tt({
  image: t,
  title: o,
  text: n,
  interaction: l,
  wrapperClasses: c,
  variant: u = "default",
  clamp: g
}) {
  const p = T(["flex rounded bg-white shadow", {
    default: "flex-col w-[356px]",
    small: "w-[271px] flex-col",
    horizontal: "h-[208px] w-[568px]"
  }[u], c]), d = T(u === "default" ? "rounded-t" : "min-w-[200px] h-[208px] rounded-l object-cover"), b = T([!!o && "mt-4", g && "line-clamp-3"]);
  return /* @__PURE__ */ C("div", {
    className: p,
    children: [t && /* @__PURE__ */ i("div", {
      className: d,
      children: /* @__PURE__ */ i("img", {
        className: d,
        src: t
      })
    }), /* @__PURE__ */ C("div", {
      className: "p-6",
      children: [o && /* @__PURE__ */ i(W, {
        variant: "h5",
        children: o
      }), n && /* @__PURE__ */ i(W, {
        className: b,
        children: n
      }), l]
    })]
  });
}
function nt({
  vertical: t
}) {
  const o = T("bg-lightBorder inline-block", t ? "h-full w-[1px]" : "w-full h-[1px]");
  return /* @__PURE__ */ i("div", {
    className: o
  });
}
function $e(t, o, n) {
  J(() => {
    const l = (c) => {
      !t.current || t.current.contains(c.target) || o(c);
    };
    return t.current && n && (document.addEventListener("mousedown", l), document.addEventListener("touchstart", l)), () => {
      document.removeEventListener("mousedown", l), document.removeEventListener("touchstart", l);
    };
  }, [n, o]);
}
const Sr = () => {
  const [t, o] = F(!1), n = document.getElementById("root"), l = document.getElementById("overlay"), c = Rr(/* @__PURE__ */ i("div", {
    id: "overlay",
    className: "absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-60"
  }), n);
  return J(() => {
    !l && o(!t);
  }, []), t ? c : null;
};
function Fr({
  options: t,
  variant: o
}) {
  const n = T(["group cursor-pointer rounded px-4 py-2", `hover:bg-${o}`]);
  return /* @__PURE__ */ i("div", {
    className: T(["absolute top-[42px] z-20 flex w-full flex-col gap-1 rounded bg-white p-1 shadow", "border", `border-${o}`]),
    children: t.map((l) => /* @__PURE__ */ i("div", {
      className: n,
      onClick: (c) => {
        c.stopPropagation(), l.handleClick();
      },
      children: /* @__PURE__ */ i(W, {
        as: "span",
        className: "group-hover:text-white",
        children: l.value
      })
    }, l.id))
  });
}
function at({
  text: t,
  options: o,
  variant: n = "primary",
  outlined: l,
  className: c
}) {
  const [u, g] = F(!1), x = K(null);
  $e(x, () => g(!1), u);
  const p = T(["flex items-center rounded text-[15px] font-medium leading-[17px]", l ? `border border-${n} text-${n}` : `bg-${n} text-white`, c]), d = T(["flex items-center py-[10px] px-5 min-h-[38px]", l ? `border-r border-${n}` : "border-r-2 border-r-opacity-10"]), b = T(["transition-all", u ? "rotate-0" : "-rotate-90"]);
  function N() {
    g(!u);
  }
  return /* @__PURE__ */ C("div", {
    className: "relative w-fit",
    onClick: N,
    ref: x,
    children: [/* @__PURE__ */ C("button", {
      className: p,
      children: [/* @__PURE__ */ i("div", {
        className: d,
        children: t
      }), /* @__PURE__ */ i("div", {
        className: "flex items-center p-[10px]",
        children: /* @__PURE__ */ i(Er, {
          size: 18,
          weight: "bold",
          className: b
        })
      })]
    }), u && /* @__PURE__ */ i(Fr, {
      options: o,
      variant: n
    })]
  });
}
function ot({
  className: t,
  multiple: o,
  files: n,
  setFiles: l
}) {
  const c = K(null), [u, g] = F(!1);
  function x() {
    c.current.click();
  }
  const p = () => {
    const R = [];
    for (const $ of n || [])
      R.push($.name);
    return R.join(", ");
  };
  function d(R) {
    l(R.dataTransfer.files), R.preventDefault(), R.stopPropagation(), g(!1);
  }
  function b(R) {
    R.preventDefault();
  }
  function N() {
    g(!0);
  }
  function k() {
    u && g(!1);
  }
  return /* @__PURE__ */ C("div", {
    className: T(["flex h-full min-h-[280px] w-full flex-col items-center justify-center rounded border border-gray transition-colors hover:bg-[#FFFCFC]", u && "animate-pulse", t]),
    onClick: x,
    onDrop: d,
    onDragOver: b,
    onDragEnter: N,
    onDragEnd: k,
    children: [/* @__PURE__ */ i("input", {
      type: "file",
      className: "hidden",
      onChange: (R) => l(R.target.files),
      accept: "image/*",
      multiple: o,
      ref: c
    }), /* @__PURE__ */ i("div", {
      className: "rounded bg-grayLight p-[10px]",
      children: /* @__PURE__ */ i(wr, {
        size: 32,
        weight: "regular",
        className: "text-defaultText"
      })
    }), /* @__PURE__ */ i(W, {
      className: "mt-8 mb-2 text-defaultText text-center",
      variant: "h2",
      as: "span",
      children: "Click or drag to select your files to upload."
    }), /* @__PURE__ */ i(W, {
      className: "max-w-[70%] text-center",
      children: (n || []).length > 0 ? p() : "No file selected."
    })]
  });
}
function it({
  icon: t,
  number: o,
  variant: n = "primary",
  onClick: l
}) {
  const c = P("absolute rounded-full top-[-10px] right-[-10px] flex h-4 w-4 items-center justify-center p-1 text-[9px] text-white", n && `bg-${n}`);
  return /* @__PURE__ */ C("div", {
    className: "relative flex w-fit cursor-pointer",
    onClick: l,
    children: [t, /* @__PURE__ */ i("div", {
      className: c,
      children: o
    })]
  });
}
function $r({
  id: t,
  label: o,
  selected: n,
  disabled: l,
  onChange: c
}) {
  return /* @__PURE__ */ C("div", {
    className: "flex items-center",
    children: [/* @__PURE__ */ i("input", {
      type: "radio",
      id: t,
      value: t,
      onChange: c,
      checked: n === t,
      disabled: l,
      className: "relative mr-2 flex h-4 w-4 appearance-none items-center justify-center rounded-full border border-lightBorder before:block before:h-2 before:w-2 before:rounded-full checked:before:bg-primary checked:before:content-[''] focus-visible:border-0 disabled:bg-gray"
    }), /* @__PURE__ */ i("label", {
      htmlFor: t,
      className: "text-sm text-defaultText",
      children: o
    })]
  });
}
function Fe(t) {
  return /* @__PURE__ */ i("input", {
    ...t,
    type: "text",
    className: "border border-lightBorder focus:border-primary focus:border focus-visible:border-0 min-w-[200px] w-full h-8 px-3 py-2 placeholder:text-lightText text-defaultText rounded font-normal text-sm leading-6 disabled:bg-gray"
  });
}
function Ir({
  label: t,
  ...o
}) {
  return t ? /* @__PURE__ */ C("label", {
    className: "text-[13px] text-dark",
    children: [/* @__PURE__ */ i("span", {
      className: "mb-1 flex",
      children: t
    }), /* @__PURE__ */ i(Fe, {
      ...o
    })]
  }) : /* @__PURE__ */ i(Fe, {
    ...o
  });
}
const Lr = {
  display1: "font-medium text-[64px] leading-[84px] text-heading",
  display2: "font-medium text-[56px] leading-[78px] text-heading",
  display3: "font-medium text-[48px] leading-[68px] text-heading",
  display4: "font-medium text-[32px] leading-[46px] text-heading",
  h1: "font-semibold text-[2.375rem] leading-[3.25rem] text-heading",
  h2: "font-semibold text-[2rem] leading-[2.75rem] text-heading",
  h3: "font-semibold text-[1.625rem] leading-[2.25rem] text-heading",
  h4: "font-semibold text-[1.375rem] leading-[1.875rem] text-heading",
  h5: "font-semibold text-[1.125rem] leading-[1.5rem] text-heading",
  h6: "font-semibold text-[0.925rem] leading-[1.25rem] text-heading",
  lead: "font-normal text-[1.125rem] leading-[1.75rem] text-defaultText",
  paragraph: "font-normal text-[0.9375rem] leading-[1.375rem] text-defaultText",
  caption: "font-normal text-[0.6875rem] leading-[0.875rem] text-defaultText"
}, Wr = {
  display1: "h1",
  display2: "h1",
  display3: "h2",
  display4: "h2",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  lead: "p",
  paragraph: "p",
  caption: "span"
};
function W({
  variant: t = "paragraph",
  as: o,
  className: n,
  children: l
}) {
  const c = T(Lr[t], n);
  return gr(o || Wr[t], {
    className: c
  }, l);
}
function lt({
  items: t,
  active: o
}) {
  return /* @__PURE__ */ i("div", {
    className: "flex w-full max-w-[240px] flex-col overflow-hidden rounded border border-lightBorder",
    children: t.map((n, l) => /* @__PURE__ */ i("div", {
      onClick: n.onClick,
      className: T(["group cursor-pointer py-[10px] px-[20px] hover:bg-primary", t.length === l + 1 ? "border-b-0" : "border-b border-b-lightBorder", o === n.id && "bg-primary-light"]),
      children: /* @__PURE__ */ i(W, {
        className: T([o === n.id && "text-primary", "group-hover:text-white"]),
        children: n.value
      })
    }, n.id))
  });
}
function Mr({
  children: t,
  className: o,
  handleClose: n,
  closeOnClickOutside: l,
  open: c
}) {
  const u = K(null);
  $e(u, n, !!l && c);
  const g = Sr();
  return /* @__PURE__ */ C(Ar, {
    children: [/* @__PURE__ */ C("div", {
      ref: u,
      className: T(["absolute left-0 right-0 top-[30%] z-50 ml-auto mr-auto flex w-full max-w-[500px] flex-col rounded bg-white px-6 py-5 shadow-md", o]),
      children: [/* @__PURE__ */ i("div", {
        className: "absolute top-[-14px] right-[-14px] cursor-pointer rounded bg-white p-[6px] text-defaultText shadow-md",
        onClick: n,
        children: /* @__PURE__ */ i(Cr, {
          size: 20,
          weight: "bold"
        })
      }), t]
    }), g]
  });
}
function st({
  children: t,
  open: o,
  className: n,
  handleClose: l,
  closeOnClickOutside: c
}) {
  return o ? /* @__PURE__ */ i(Mr, {
    className: n,
    handleClose: l,
    closeOnClickOutside: c,
    open: o,
    children: t
  }) : null;
}
function ct({
  placeholder: t = "",
  options: o,
  selected: n,
  onChange: l,
  emptyResultText: c
}) {
  const [u, g] = F(""), x = (d) => {
    g(d.target.value.toLocaleLowerCase());
  }, p = vr(() => o.filter((d) => d.label.includes(u)), [u]);
  return /* @__PURE__ */ C("div", {
    className: "w-full",
    children: [/* @__PURE__ */ i(Ir, {
      placeholder: t,
      value: u,
      onChange: x
    }), /* @__PURE__ */ i("div", {
      className: "mt-4",
      children: p.length > 0 ? p.map((d) => /* @__PURE__ */ i("div", {
        className: "my-2",
        children: /* @__PURE__ */ i($r, {
          id: d.id,
          label: d.label,
          selected: n,
          onChange: l
        }, d.id)
      })) : /* @__PURE__ */ i("span", {
        className: "text-sm text-defaultText",
        children: c
      })
    })]
  });
}
function ut({
  children: t,
  variant: o = "default",
  className: n
}) {
  const l = T("w-full rounded-md", o === "default" ? "shadow" : "border border-solid border-lightBorder", n);
  return /* @__PURE__ */ i("div", {
    className: l,
    children: t
  });
}
function dt({
  text: t,
  variant: o = "primary",
  rounded: n
}) {
  const l = P("h-[10px] w-[10px] mr-[6px]", n && "rounded-full", `bg-${o}`);
  return /* @__PURE__ */ C("div", {
    className: "flex w-fit items-center font-bold",
    children: [/* @__PURE__ */ i("div", {
      className: l
    }), /* @__PURE__ */ i("span", {
      className: "text-sm font-semibold text-dark",
      children: t
    })]
  });
}
const Br = ({
  editor: t
}) => {
  if (!t)
    return null;
  const o = "px-2 py-1 my-1 text-heading bg-opacity-10 hover:bg-gray rounded mr-1 last:mr-0", n = "px-2 py-1 my-1 p-2 text-heading bg-lightBorder rounded mr-1 last:mr-0";
  return /* @__PURE__ */ C("div", {
    className: "bg-grayLight p-1",
    children: [/* @__PURE__ */ i("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 1
      }).updateAttributes("bold", {
        class: "bold-tag"
      }).run(),
      className: t.isActive("heading", {
        level: 1
      }) ? n : o,
      children: "h1"
    }), /* @__PURE__ */ i("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 2
      }).run(),
      className: t.isActive("heading", {
        level: 2
      }) ? n : o,
      children: "h2"
    }), /* @__PURE__ */ i("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 3
      }).run(),
      className: t.isActive("heading", {
        level: 3
      }) ? n : o,
      children: "h3"
    }), /* @__PURE__ */ i("button", {
      onClick: () => t.chain().focus().setParagraph().run(),
      className: t.isActive("paragraph") ? n : o,
      children: "paragraph"
    }), /* @__PURE__ */ i("button", {
      onClick: () => t.chain().focus().toggleBold().run(),
      className: t.isActive("bold") ? n : o,
      children: "bold"
    }), /* @__PURE__ */ i("button", {
      onClick: () => t.chain().focus().toggleItalic().run(),
      className: t.isActive("italic") ? n : o,
      children: "italic"
    }), /* @__PURE__ */ i("button", {
      onClick: () => t.chain().focus().toggleStrike().run(),
      className: t.isActive("strike") ? n : o,
      children: "strike"
    })]
  });
};
function ft({
  text: t,
  setText: o
}) {
  const n = "min-w-full p-4 outline-none", l = Nr({
    extensions: [kr.configure({
      paragraph: {
        HTMLAttributes: {
          class: "font-normal text-[0.9375rem] leading-[1.375rem] text-defaultText mb-4 last:mb-0"
        }
      },
      heading: !1
    }), Or.configure({
      levels: [1, 2]
    }).extend({
      levels: [1, 2, 3, 4, 5, 6],
      renderHTML({
        node: c,
        HTMLAttributes: u
      }) {
        const g = this.options.levels.includes(c.attrs.level) ? c.attrs.level : this.options.levels[0], x = {
          1: "font-semibold text-[2.375rem] leading-[3.25rem] text-heading mb-4",
          2: "font-semibold text-[2rem] leading-[2.75rem] text-heading mb-4",
          3: "font-semibold text-[1.625rem] leading-[2.25rem] text-heading mb-4",
          4: "font-semibold text-[1.375rem] leading-[1.875rem] text-heading mb-4",
          5: "font-semibold text-[1.125rem] leading-[1.5rem] text-heading mb-4",
          6: "font-semibold text-[0.925rem] leading-[1.25rem] text-heading mb-4"
        };
        return [`h${g}`, _r(this.options.HTMLAttributes, u, {
          class: `${x[g]}`
        }), 0];
      }
    })],
    content: "<p>type something awesome!</p>",
    onUpdate: ({
      editor: c
    }) => {
      const u = c.getHTML();
      o(u);
    },
    editorProps: {
      attributes: {
        class: n
      }
    }
  });
  return /* @__PURE__ */ C("div", {
    className: "rounded border-[3px] border-grayLight",
    children: [/* @__PURE__ */ i(Br, {
      editor: l
    }), /* @__PURE__ */ i(Tr, {
      editor: l
    })]
  });
}
export {
  Dr as Accordion,
  Zr as AccordionWrapper,
  Xr as Alert,
  Qr as Badge,
  et as Breadcrumb,
  rt as Button,
  tt as Card,
  nt as Divider,
  at as Dropdown,
  ot as FileDrop,
  it as IconWithBadge,
  $r as InputRadio,
  Ir as InputText,
  lt as ListGroup,
  st as Modal,
  ct as RadioSearchCombo,
  ut as Surface,
  dt as Tag,
  ft as TextEditor,
  W as Typography
};
//# sourceMappingURL=dsx-react-components.es.js.map
