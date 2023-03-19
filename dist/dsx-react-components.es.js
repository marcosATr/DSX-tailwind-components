import O from "classnames";
import le, { useState as I, useRef as se, useEffect as G, createElement as vr, useMemo as gr } from "react";
import { debounce as br } from "lodash";
import { Minus as xr, Plus as yr, CaretDown as wr, X as Er } from "phosphor-react";
import { twMerge as _ } from "tailwind-merge";
import { createPortal as Rr } from "react-dom";
import { useEditor as Cr, mergeAttributes as _r, EditorContent as Nr } from "@tiptap/react";
import Tr from "@tiptap/starter-kit";
import kr from "@tiptap/extension-heading";
var K = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Or() {
  if (Se)
    return M;
  Se = 1;
  var t = le, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(x, m, d) {
    var b, N = {}, T = null, $ = null;
    d !== void 0 && (T = "" + d), m.key !== void 0 && (T = "" + m.key), m.ref !== void 0 && ($ = m.ref);
    for (b in m)
      i.call(m, b) && !p.hasOwnProperty(b) && (N[b] = m[b]);
    if (x && x.defaultProps)
      for (b in m = x.defaultProps, m)
        N[b] === void 0 && (N[b] = m[b]);
    return { $$typeof: o, type: x, key: T, ref: $, props: N, _owner: u.current };
  }
  return M.Fragment = n, M.jsx = g, M.jsxs = g, M;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Pr() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var t = le, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), x = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Y = Symbol.iterator, X = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[X];
      return typeof r == "function" ? r : null;
    }
    var A = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          a[s - 1] = arguments[s];
        Ie("error", e, a);
      }
    }
    function Ie(e, r, a) {
      {
        var s = A.ReactDebugCurrentFrame, h = s.getStackAddendum();
        h !== "" && (r += "%s", a = a.concat([h]));
        var v = a.map(function(f) {
          return String(f);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Le = !1, We = !1, Me = !1, Be = !1, Ye = !1, ue;
    ue = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === p || Ye || e === u || e === d || e === b || Be || e === $ || Le || We || Me || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === N || e.$$typeof === g || e.$$typeof === x || e.$$typeof === m || e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Ve(e, r, a) {
      var s = e.displayName;
      if (s)
        return s;
      var h = r.displayName || r.name || "";
      return h !== "" ? a + "(" + h + ")" : a;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case p:
          return "Profiler";
        case u:
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
            return ce(r) + ".Consumer";
          case g:
            var a = e;
            return ce(a._context) + ".Provider";
          case m:
            return Ve(e, e.render, "ForwardRef");
          case N:
            var s = e.displayName || null;
            return s !== null ? s : P(e.type) || "Memo";
          case T: {
            var h = e, v = h._payload, f = h._init;
            try {
              return P(f(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, L = 0, de, fe, pe, me, he, ve, ge;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function He() {
      {
        if (L === 0) {
          de = console.log, fe = console.info, pe = console.warn, me = console.error, he = console.group, ve = console.groupCollapsed, ge = console.groupEnd;
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
        L++;
      }
    }
    function ze() {
      {
        if (L--, L === 0) {
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
              value: ve
            }),
            groupEnd: S({}, e, {
              value: ge
            })
          });
        }
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = A.ReactCurrentDispatcher, ee;
    function U(e, r, a) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (h) {
            var s = h.stack.trim().match(/\n( *(at )?)/);
            ee = s && s[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, V;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new qe();
    }
    function xe(e, r) {
      if (!e || re)
        return "";
      {
        var a = V.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      re = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = Q.current, Q.current = null, He();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (j) {
              s = j;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              s = j;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            s = j;
          }
          e();
        }
      } catch (j) {
        if (j && s && typeof j.stack == "string") {
          for (var c = j.stack.split(`
`), C = s.stack.split(`
`), y = c.length - 1, E = C.length - 1; y >= 1 && E >= 0 && c[y] !== C[E]; )
            E--;
          for (; y >= 1 && E >= 0; y--, E--)
            if (c[y] !== C[E]) {
              if (y !== 1 || E !== 1)
                do
                  if (y--, E--, E < 0 || c[y] !== C[E]) {
                    var k = `
` + c[y].replace(" at new ", " at ");
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, k), k;
                  }
                while (y >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = v, ze(), Error.prepareStackTrace = h;
      }
      var D = e ? e.displayName || e.name : "", Ae = D ? U(D) : "";
      return typeof e == "function" && V.set(e, Ae), Ae;
    }
    function Ge(e, r, a) {
      return xe(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return xe(e, Je(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case d:
          return U("Suspense");
        case b:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Ge(e.render);
          case N:
            return H(e.type, r, a);
          case T: {
            var s = e, h = s._payload, v = s._init;
            try {
              return H(v(h), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, ye = {}, we = A.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, a = H(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(a);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(e, r, a, s, h) {
      {
        var v = Function.call.bind(z);
        for (var f in e)
          if (v(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var C = Error((s || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              c = e[f](r, f, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              c = y;
            }
            c && !(c instanceof Error) && (q(h), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, f, typeof c), q(null)), c instanceof Error && !(c.message in ye) && (ye[c.message] = !0, q(h), w("Failed %s type: %s", a, c.message), q(null));
          }
      }
    }
    var Xe = Array.isArray;
    function te(e) {
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
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (Qe(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Ee(e);
    }
    var W = A.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, _e, ne;
    ne = {};
    function rr(e) {
      if (z.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var a = P(W.current.type);
        ne[a] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(W.current.type), e.ref), ne[a] = !0);
      }
    }
    function ar(e, r) {
      {
        var a = function() {
          Ce || (Ce = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          _e || (_e = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, a, s, h, v, f) {
      var c = {
        $$typeof: o,
        type: e,
        key: r,
        ref: a,
        props: f,
        _owner: v
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function lr(e, r, a, s, h) {
      {
        var v, f = {}, c = null, C = null;
        a !== void 0 && (Re(a), c = "" + a), tr(r) && (Re(r.key), c = "" + r.key), rr(r) && (C = r.ref, nr(r, h));
        for (v in r)
          z.call(r, v) && !er.hasOwnProperty(v) && (f[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            f[v] === void 0 && (f[v] = y[v]);
        }
        if (c || C) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ar(f, E), C && or(f, E);
        }
        return ir(e, c, C, h, s, W.current, f);
      }
    }
    var ae = A.ReactCurrentOwner, Ne = A.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, a = H(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(a);
      } else
        Ne.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Te() {
      {
        if (ae.current) {
          var e = P(ae.current.type);
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
    function ur(e) {
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
        var a = ur(r);
        if (ke[a])
          return;
        ke[a] = !0;
        var s = "";
        e && e._owner && e._owner !== ae.current && (s = " It was passed a child from " + P(e._owner.type) + "."), F(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), F(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            ie(s) && Oe(s, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = Z(e);
          if (typeof h == "function" && h !== e.entries)
            for (var v = h.call(e), f; !(f = v.next()).done; )
              ie(f.value) && Oe(f.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || r.$$typeof === N))
          a = r.propTypes;
        else
          return;
        if (a) {
          var s = P(r);
          Ke(a, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var h = P(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var s = r[a];
          if (s !== "children" && s !== "key") {
            F(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    function je(e, r, a, s, h, v) {
      {
        var f = Ue(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = sr(h);
          C ? c += C : c += Te();
          var y;
          e === null ? y = "null" : te(e) ? y = "array" : e !== void 0 && e.$$typeof === o ? (y = "<" + (P(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, c);
        }
        var E = lr(e, r, a, h, v);
        if (E == null)
          return E;
        if (f) {
          var k = r.children;
          if (k !== void 0)
            if (s)
              if (te(k)) {
                for (var D = 0; D < k.length; D++)
                  Pe(k[D], e);
                Object.freeze && Object.freeze(k);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(k, e);
        }
        return e === i ? dr(E) : cr(E), E;
      }
    }
    function fr(e, r, a) {
      return je(e, r, a, !0);
    }
    function pr(e, r, a) {
      return je(e, r, a, !1);
    }
    var mr = pr, hr = fr;
    B.Fragment = i, B.jsx = mr, B.jsxs = hr;
  }()), B;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = Or() : t.exports = Pr();
})(K);
const jr = K.exports.Fragment, l = K.exports.jsx, R = K.exports.jsxs;
function Kr({
  title: t,
  text: o,
  icon: n,
  variant: i = "primary"
}) {
  const u = O("flex w-full rounded py-3 px-[14px]", `bg-${i}-light text-${i}`), p = O("flex items-center justify-center pl-2 pr-5", t ? "text-2xl" : "text-lg");
  return /* @__PURE__ */ R("div", {
    className: u,
    children: [n && /* @__PURE__ */ l("div", {
      className: p,
      children: n
    }), /* @__PURE__ */ R("div", {
      children: [t && /* @__PURE__ */ l("span", {
        className: "block text-base font-semibold",
        children: t
      }), /* @__PURE__ */ l("span", {
        className: "text-sm font-medium",
        children: o
      })]
    })]
  });
}
function Ar({
  labelIcon: t,
  label: o,
  accordionState: n,
  id: i,
  component: u,
  highlight: p,
  handleOpenClose: g,
  mode: x
}) {
  const [m, d] = I(!!(n != null && n[i])), [b, N] = I(0), T = se(null), $ = br(() => g(), 450), Y = () => {
    d((w) => !w), n != null && n[i] ? $() : g();
  };
  G(() => {
    var w;
    N((w = T == null ? void 0 : T.current) == null ? void 0 : w.clientHeight);
  }), G(() => {
    x === "single" && m && m !== !!n[i] && d(!1);
  }, [n]);
  const X = O("border-b border-solid border-lightBorder last:border-b-0 relative", p && m && "bg-grayLight before:absolute before:h-full before:w-[3px] before:bg-primary before:top before:first:rounded-[6px] before:last:rounded-tl-bl-[6px]"), Z = O("flex items-center py-4 px-6 text-sm w-full cursor-pointer", p && m ? "text-primary" : "text-heading"), A = O("font-semibold", t && "ml-3");
  return /* @__PURE__ */ R("div", {
    className: X,
    style: {
      overflow: "hidden",
      transition: "all 400ms ease",
      maxHeight: m ? b + 54 : "54px"
    },
    children: [/* @__PURE__ */ R("div", {
      className: Z,
      onClick: Y,
      children: [t, /* @__PURE__ */ l("span", {
        className: A,
        children: o
      }), n != null && n[i] ? /* @__PURE__ */ l(xr, {
        size: 20,
        className: "ml-auto text-heading"
      }) : /* @__PURE__ */ l(yr, {
        size: 20,
        className: "ml-auto cursor-pointer"
      })]
    }), !!(n != null && n[i]) && /* @__PURE__ */ l("div", {
      className: "w-full px-6 pb-4",
      ref: T,
      children: u
    })]
  });
}
function Xr({
  className: t,
  mode: o = "multiple",
  highlight: n,
  items: i,
  initialState: u
}) {
  const p = O("rounded-[6px] border border-solid border-lightBorder", t && t), [g, x] = I(u || {}), m = (d) => {
    x((b) => o === "multiple" ? {
      ...b,
      [d]: !b[d]
    } : {
      [d]: !b[d]
    });
  };
  return /* @__PURE__ */ l("div", {
    className: p,
    children: i.map((d) => /* @__PURE__ */ l(Ar, {
      label: d.label,
      labelIcon: d.labelIcon,
      id: d.id,
      component: d.component,
      handleOpenClose: () => m(d.id),
      accordionState: g,
      highlight: n,
      mode: o
    }, d.id))
  });
}
function Zr({
  text: t,
  variant: o = "primary",
  version: n = "solid"
}) {
  const u = O("flex w-fit rounded font-bold leading-3", typeof t == "string" ? "px-[10px] py-[5px] text-xs" : "p-[5px] text-sm", n === "solid" ? `bg-${o} text-white` : `bg-${o}-light text-${o}`);
  return /* @__PURE__ */ l("div", {
    className: u,
    children: t
  });
}
function Qr({
  items: t
}) {
  return /* @__PURE__ */ l("div", {
    className: "flex items-center",
    children: t.map((o, n) => /* @__PURE__ */ R(le.Fragment, {
      children: [/* @__PURE__ */ l("span", {
        className: "text-sm text-primary hover:brightness-125",
        children: o.linkComponent
      }), n !== t.length - 1 && /* @__PURE__ */ l("span", {
        className: "mx-2 text-sm text-heading",
        children: "/"
      })]
    }, n))
  });
}
function et({
  variant: t = "primary",
  version: o = "solid",
  leftIcon: n,
  rightIcon: i,
  children: u,
  className: p,
  onClick: g
}) {
  const x = O("px-[20px] py-[10px] text-[15px] font-medium rounded shadow-sm flex items-center leading-[1.1rem]", o === "solid" ? ["hover:brightness-[1.13]", "ease-in duration-100", "text-white", `bg-${t}`] : ["hover:brightness-90", `text-${t}`, `bg-${t}-light`], p && p), m = O(n && "ml-3", i && "mr-3");
  return /* @__PURE__ */ R("button", {
    className: x,
    onClick: g,
    children: [n, /* @__PURE__ */ l("span", {
      className: m,
      children: u
    }), i]
  });
}
function rt({
  image: t,
  title: o,
  text: n,
  interaction: i,
  wrapperClasses: u,
  variant: p = "default",
  clamp: g
}) {
  const m = _(["flex rounded bg-white shadow", {
    default: "flex-col w-[356px]",
    small: "w-[271px] flex-col",
    horizontal: "h-[208px] w-[568px]"
  }[p], u]), d = _(p === "default" ? "rounded-t" : "min-w-[200px] h-[208px] rounded-l object-cover"), b = _([!!o && "mt-4", g && "line-clamp-3"]);
  return /* @__PURE__ */ R("div", {
    className: m,
    children: [t && /* @__PURE__ */ l("div", {
      className: d,
      children: /* @__PURE__ */ l("img", {
        className: d,
        src: t
      })
    }), /* @__PURE__ */ R("div", {
      className: "p-6",
      children: [o && /* @__PURE__ */ l(J, {
        variant: "h5",
        children: o
      }), n && /* @__PURE__ */ l(J, {
        className: b,
        children: n
      }), i]
    })]
  });
}
function tt({
  vertical: t
}) {
  const o = _("bg-lightBorder inline-block", t ? "h-full w-[1px]" : "w-full h-[1px]");
  return /* @__PURE__ */ l("div", {
    className: o
  });
}
function De(t, o, n) {
  G(() => {
    const i = (u) => {
      !t.current || t.current.contains(u.target) || o(u);
    };
    return t.current && n && (document.addEventListener("mousedown", i), document.addEventListener("touchstart", i)), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("touchstart", i);
    };
  }, [n, o]);
}
const Sr = () => {
  const [t, o] = I(!1), n = document.getElementById("root"), i = document.getElementById("overlay"), u = Rr(/* @__PURE__ */ l("div", {
    id: "overlay",
    className: "absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-60"
  }), n);
  return G(() => {
    !i && o(!t);
  }, []), t ? u : null;
};
function $r({
  options: t,
  variant: o
}) {
  const n = _(["group cursor-pointer rounded px-4 py-2", `hover:bg-${o}`]);
  return /* @__PURE__ */ l("div", {
    className: _(["absolute top-[42px] z-20 flex w-full flex-col gap-1 rounded bg-white p-1 shadow", "border", `border-${o}`]),
    children: t.map((i) => /* @__PURE__ */ l("div", {
      className: n,
      onClick: (u) => {
        u.stopPropagation(), i.handleClick();
      },
      children: /* @__PURE__ */ l(J, {
        as: "span",
        className: "group-hover:text-white",
        children: i.value
      })
    }, i.id))
  });
}
function nt({
  text: t,
  options: o,
  variant: n = "primary",
  outlined: i,
  className: u
}) {
  const [p, g] = I(!1), x = se(null);
  De(x, () => g(!1), p);
  const m = _(["flex items-center rounded text-[15px] font-medium leading-[17px]", i ? `border border-${n} text-${n}` : `bg-${n} text-white`, u]), d = _(["flex items-center py-[10px] px-5 min-h-[38px]", i ? `border-r border-${n}` : "border-r-2 border-r-opacity-10"]), b = _(["transition-all", p ? "rotate-0" : "-rotate-90"]);
  function N() {
    g(!p);
  }
  return /* @__PURE__ */ R("div", {
    className: "relative w-fit",
    onClick: N,
    ref: x,
    children: [/* @__PURE__ */ R("button", {
      className: m,
      children: [/* @__PURE__ */ l("div", {
        className: d,
        children: t
      }), /* @__PURE__ */ l("div", {
        className: "flex items-center p-[10px]",
        children: /* @__PURE__ */ l(wr, {
          size: 18,
          weight: "bold",
          className: b
        })
      })]
    }), p && /* @__PURE__ */ l($r, {
      options: o,
      variant: n
    })]
  });
}
function at({
  icon: t,
  number: o,
  variant: n = "primary",
  onClick: i
}) {
  const u = O("absolute rounded-full top-[-10px] right-[-10px] flex h-4 w-4 items-center justify-center p-1 text-[9px] text-white", n && `bg-${n}`);
  return /* @__PURE__ */ R("div", {
    className: "relative flex w-fit cursor-pointer",
    onClick: i,
    children: [t, /* @__PURE__ */ l("div", {
      className: u,
      children: o
    })]
  });
}
function Fr({
  id: t,
  label: o,
  selected: n,
  disabled: i,
  onChange: u
}) {
  return /* @__PURE__ */ R("div", {
    className: "flex items-center",
    children: [/* @__PURE__ */ l("input", {
      type: "radio",
      id: t,
      value: t,
      onChange: u,
      checked: n === t,
      disabled: i,
      className: "relative mr-2 flex h-4 w-4 appearance-none items-center justify-center rounded-full border border-lightBorder before:block before:h-2 before:w-2 before:rounded-full checked:before:bg-primary checked:before:content-[''] focus-visible:border-0 disabled:bg-gray"
    }), /* @__PURE__ */ l("label", {
      htmlFor: t,
      className: "text-sm text-defaultText",
      children: o
    })]
  });
}
function Fe(t) {
  return /* @__PURE__ */ l("input", {
    ...t,
    type: "text",
    className: "border border-lightBorder focus:border-primary focus:border focus-visible:border-0 min-w-[200px] w-full h-8 px-3 py-2 placeholder:text-lightText text-defaultText rounded font-normal text-sm leading-6 disabled:bg-gray"
  });
}
function Dr({
  label: t,
  ...o
}) {
  return t ? /* @__PURE__ */ R("label", {
    className: "text-[13px] text-dark",
    children: [/* @__PURE__ */ l("span", {
      className: "mb-1 flex",
      children: t
    }), /* @__PURE__ */ l(Fe, {
      ...o
    })]
  }) : /* @__PURE__ */ l(Fe, {
    ...o
  });
}
const Ir = {
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
}, Lr = {
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
function J({
  variant: t = "paragraph",
  as: o,
  className: n,
  children: i
}) {
  const u = _(Ir[t], n);
  return vr(o || Lr[t], {
    className: u
  }, i);
}
function ot({
  items: t,
  active: o
}) {
  return /* @__PURE__ */ l("div", {
    className: "flex w-full max-w-[240px] flex-col overflow-hidden rounded border border-lightBorder",
    children: t.map((n, i) => /* @__PURE__ */ l("div", {
      onClick: n.onClick,
      className: _(["group cursor-pointer py-[10px] px-[20px] hover:bg-primary", t.length === i + 1 ? "border-b-0" : "border-b border-b-lightBorder", o === n.id && "bg-primary-light"]),
      children: /* @__PURE__ */ l(J, {
        className: _([o === n.id && "text-primary", "group-hover:text-white"]),
        children: n.value
      })
    }, n.id))
  });
}
function Wr({
  children: t,
  className: o,
  handleClose: n,
  closeOnClickOutside: i,
  open: u
}) {
  const p = se(null);
  De(p, n, !!i && u);
  const g = Sr();
  return /* @__PURE__ */ R(jr, {
    children: [/* @__PURE__ */ R("div", {
      ref: p,
      className: _(["absolute left-0 right-0 top-[30%] z-50 ml-auto mr-auto flex w-full max-w-[500px] flex-col rounded bg-white px-6 py-5 shadow-md", o]),
      children: [/* @__PURE__ */ l("div", {
        className: "absolute top-[-14px] right-[-14px] cursor-pointer rounded bg-white p-[6px] text-defaultText shadow-md",
        onClick: n,
        children: /* @__PURE__ */ l(Er, {
          size: 20,
          weight: "bold"
        })
      }), t]
    }), g]
  });
}
function it({
  children: t,
  open: o,
  className: n,
  handleClose: i,
  closeOnClickOutside: u
}) {
  return o ? /* @__PURE__ */ l(Wr, {
    className: n,
    handleClose: i,
    closeOnClickOutside: u,
    open: o,
    children: t
  }) : null;
}
function lt({
  placeholder: t = "",
  options: o,
  selected: n,
  onChange: i,
  emptyResultText: u
}) {
  const [p, g] = I(""), x = (d) => {
    g(d.target.value.toLocaleLowerCase());
  }, m = gr(() => o.filter((d) => d.label.includes(p)), [p]);
  return /* @__PURE__ */ R("div", {
    className: "w-full",
    children: [/* @__PURE__ */ l(Dr, {
      placeholder: t,
      value: p,
      onChange: x
    }), /* @__PURE__ */ l("div", {
      className: "mt-4",
      children: m.length > 0 ? m.map((d) => /* @__PURE__ */ l("div", {
        className: "my-2",
        children: /* @__PURE__ */ l(Fr, {
          id: d.id,
          label: d.label,
          selected: n,
          onChange: i
        }, d.id)
      })) : /* @__PURE__ */ l("span", {
        className: "text-sm text-defaultText",
        children: u
      })
    })]
  });
}
function st({
  children: t,
  variant: o = "default",
  className: n
}) {
  const i = _("w-full rounded-md", o === "default" ? "shadow" : "border border-solid border-lightBorder", n);
  return /* @__PURE__ */ l("div", {
    className: i,
    children: t
  });
}
function ut({
  text: t,
  variant: o = "primary",
  rounded: n
}) {
  const i = O("h-[10px] w-[10px] mr-[6px]", n && "rounded-full", `bg-${o}`);
  return /* @__PURE__ */ R("div", {
    className: "flex w-fit items-center font-bold",
    children: [/* @__PURE__ */ l("div", {
      className: i
    }), /* @__PURE__ */ l("span", {
      className: "text-sm font-semibold text-dark",
      children: t
    })]
  });
}
const Mr = ({
  editor: t
}) => {
  if (!t)
    return null;
  const o = "px-2 py-1 my-1 text-heading bg-opacity-10 hover:bg-gray rounded mr-1 last:mr-0", n = "px-2 py-1 my-1 p-2 text-heading bg-lightBorder rounded mr-1 last:mr-0";
  return /* @__PURE__ */ R("div", {
    className: "bg-grayLight p-1",
    children: [/* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 1
      }).updateAttributes("bold", {
        class: "bold-tag"
      }).run(),
      className: t.isActive("heading", {
        level: 1
      }) ? n : o,
      children: "h1"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 2
      }).run(),
      className: t.isActive("heading", {
        level: 2
      }) ? n : o,
      children: "h2"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 3
      }).run(),
      className: t.isActive("heading", {
        level: 3
      }) ? n : o,
      children: "h3"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().setParagraph().run(),
      className: t.isActive("paragraph") ? n : o,
      children: "paragraph"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleBold().run(),
      className: t.isActive("bold") ? n : o,
      children: "bold"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleItalic().run(),
      className: t.isActive("italic") ? n : o,
      children: "italic"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleStrike().run(),
      className: t.isActive("strike") ? n : o,
      children: "strike"
    })]
  });
};
function ct({
  text: t,
  setText: o
}) {
  const n = "min-w-full p-4 outline-none", i = Cr({
    extensions: [Tr.configure({
      paragraph: {
        HTMLAttributes: {
          class: "font-normal text-[0.9375rem] leading-[1.375rem] text-defaultText mb-4 last:mb-0"
        }
      },
      heading: !1
    }), kr.configure({
      levels: [1, 2]
    }).extend({
      levels: [1, 2, 3, 4, 5, 6],
      renderHTML({
        node: u,
        HTMLAttributes: p
      }) {
        const g = this.options.levels.includes(u.attrs.level) ? u.attrs.level : this.options.levels[0], x = {
          1: "font-semibold text-[2.375rem] leading-[3.25rem] text-heading mb-4",
          2: "font-semibold text-[2rem] leading-[2.75rem] text-heading mb-4",
          3: "font-semibold text-[1.625rem] leading-[2.25rem] text-heading mb-4",
          4: "font-semibold text-[1.375rem] leading-[1.875rem] text-heading mb-4",
          5: "font-semibold text-[1.125rem] leading-[1.5rem] text-heading mb-4",
          6: "font-semibold text-[0.925rem] leading-[1.25rem] text-heading mb-4"
        };
        return [`h${g}`, _r(this.options.HTMLAttributes, p, {
          class: `${x[g]}`
        }), 0];
      }
    })],
    content: "<p>type something awesome!</p>",
    onUpdate: ({
      editor: u
    }) => {
      const p = u.getHTML();
      o(p);
    },
    editorProps: {
      attributes: {
        class: n
      }
    }
  });
  return /* @__PURE__ */ R("div", {
    className: "rounded border-[3px] border-grayLight",
    children: [/* @__PURE__ */ l(Mr, {
      editor: i
    }), /* @__PURE__ */ l(Nr, {
      editor: i
    })]
  });
}
export {
  Ar as Accordion,
  Xr as AccordionWrapper,
  Kr as Alert,
  Zr as Badge,
  Qr as Breadcrumb,
  et as Button,
  rt as Card,
  tt as Divider,
  nt as Dropdown,
  at as IconWithBadge,
  Fr as InputRadio,
  Dr as InputText,
  ot as ListGroup,
  it as Modal,
  lt as RadioSearchCombo,
  st as Surface,
  ut as Tag,
  ct as TextEditor,
  J as Typography
};
//# sourceMappingURL=dsx-react-components.es.js.map
