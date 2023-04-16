import A from "classnames";
import se, { useState as I, useRef as Z, useEffect as X, createElement as gr, cloneElement as vr, useMemo as xr } from "react";
import { debounce as br } from "lodash";
import { Minus as yr, Plus as wr, CaretDown as Er, UploadSimple as Nr, X as Cr } from "phosphor-react";
import { twMerge as C } from "tailwind-merge";
import { createPortal as Rr } from "react-dom";
import { useEditor as _r, mergeAttributes as Tr, EditorContent as kr } from "@tiptap/react";
import Or from "@tiptap/starter-kit";
import Pr from "@tiptap/extension-heading";
var Q = { exports: {} }, V = {};
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
function jr() {
  if (De)
    return V;
  De = 1;
  var t = se, a = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(x, d, f) {
    var b, R = {}, T = null, D = null;
    f !== void 0 && (T = "" + f), d.key !== void 0 && (T = "" + d.key), d.ref !== void 0 && (D = d.ref);
    for (b in d)
      i.call(d, b) && !u.hasOwnProperty(b) && (R[b] = d[b]);
    if (x && x.defaultProps)
      for (b in d = x.defaultProps, d)
        R[b] === void 0 && (R[b] = d[b]);
    return { $$typeof: a, type: x, key: T, ref: D, props: R, _owner: s.current };
  }
  return V.Fragment = n, V.jsx = g, V.jsxs = g, V;
}
var z = {};
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
function Ar() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var t = se, a = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), x = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), L = Symbol.iterator, k = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[k];
      return typeof r == "function" ? r : null;
    }
    var S = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          o[c - 1] = arguments[c];
        Ie("error", e, o);
      }
    }
    function Ie(e, r, o) {
      {
        var c = S.ReactDebugCurrentFrame, h = c.getStackAddendum();
        h !== "" && (r += "%s", o = o.concat([h]));
        var v = o.map(function(p) {
          return String(p);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Le = !1, We = !1, Me = !1, Be = !1, Ye = !1, ce;
    ce = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || Ye || e === s || e === f || e === b || Be || e === D || Le || We || Me || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === R || e.$$typeof === g || e.$$typeof === x || e.$$typeof === d || e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function Ve(e, r, o) {
      var c = e.displayName;
      if (c)
        return c;
      var h = r.displayName || r.name || "";
      return h !== "" ? o + "(" + h + ")" : o;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case s:
          return "StrictMode";
        case f:
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
            var o = e;
            return ue(o._context) + ".Provider";
          case d:
            return Ve(e, e.render, "ForwardRef");
          case R:
            var c = e.displayName || null;
            return c !== null ? c : P(e.type) || "Memo";
          case T: {
            var h = e, v = h._payload, p = h._init;
            try {
              return P(p(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, Y = 0, de, fe, me, pe, he, ge, ve;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function ze() {
      {
        if (Y === 0) {
          de = console.log, fe = console.info, me = console.warn, pe = console.error, he = console.group, ge = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: xe,
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
        Y++;
      }
    }
    function He() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: de
            }),
            info: $({}, e, {
              value: fe
            }),
            warn: $({}, e, {
              value: me
            }),
            error: $({}, e, {
              value: pe
            }),
            group: $({}, e, {
              value: he
            }),
            groupCollapsed: $({}, e, {
              value: ge
            }),
            groupEnd: $({}, e, {
              value: ve
            })
          });
        }
        Y < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = S.ReactCurrentDispatcher, re;
    function H(e, r, o) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (h) {
            var c = h.stack.trim().match(/\n( *(at )?)/);
            re = c && c[1] || "";
          }
        return `
` + re + e;
      }
    }
    var te = !1, q;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      q = new qe();
    }
    function be(e, r) {
      if (!e || te)
        return "";
      {
        var o = q.get(e);
        if (o !== void 0)
          return o;
      }
      var c;
      te = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = ee.current, ee.current = null, ze();
      try {
        if (r) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (j) {
              c = j;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (j) {
              c = j;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            c = j;
          }
          e();
        }
      } catch (j) {
        if (j && c && typeof j.stack == "string") {
          for (var m = j.stack.split(`
`), _ = c.stack.split(`
`), w = m.length - 1, N = _.length - 1; w >= 1 && N >= 0 && m[w] !== _[N]; )
            N--;
          for (; w >= 1 && N >= 0; w--, N--)
            if (m[w] !== _[N]) {
              if (w !== 1 || N !== 1)
                do
                  if (w--, N--, N < 0 || m[w] !== _[N]) {
                    var O = `
` + m[w].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, O), O;
                  }
                while (w >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = v, He(), Error.prepareStackTrace = h;
      }
      var M = e ? e.displayName || e.name : "", Ae = M ? H(M) : "";
      return typeof e == "function" && q.set(e, Ae), Ae;
    }
    function Ge(e, r, o) {
      return be(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function G(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return be(e, Je(e));
      if (typeof e == "string")
        return H(e);
      switch (e) {
        case f:
          return H("Suspense");
        case b:
          return H("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ge(e.render);
          case R:
            return G(e.type, r, o);
          case T: {
            var c = e, h = c._payload, v = c._init;
            try {
              return G(v(h), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, ye = {}, we = S.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, o = G(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(o);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(e, r, o, c, h) {
      {
        var v = Function.call.bind(J);
        for (var p in e)
          if (v(e, p)) {
            var m = void 0;
            try {
              if (typeof e[p] != "function") {
                var _ = Error((c || "React class") + ": " + o + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              m = e[p](r, p, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              m = w;
            }
            m && !(m instanceof Error) && (K(h), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, p, typeof m), K(null)), m instanceof Error && !(m.message in ye) && (ye[m.message] = !0, K(h), E("Failed %s type: %s", o, m.message), K(null));
          }
      }
    }
    var Xe = Array.isArray;
    function ne(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
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
    function Ne(e) {
      if (Qe(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Ee(e);
    }
    var U = S.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Re, ae;
    ae = {};
    function rr(e) {
      if (J.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tr(e) {
      if (J.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nr(e, r) {
      if (typeof e.ref == "string" && U.current && r && U.current.stateNode !== r) {
        var o = P(U.current.type);
        ae[o] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(U.current.type), e.ref), ae[o] = !0);
      }
    }
    function ar(e, r) {
      {
        var o = function() {
          Ce || (Ce = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var o = function() {
          Re || (Re = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, o, c, h, v, p) {
      var m = {
        $$typeof: a,
        type: e,
        key: r,
        ref: o,
        props: p,
        _owner: v
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function lr(e, r, o, c, h) {
      {
        var v, p = {}, m = null, _ = null;
        o !== void 0 && (Ne(o), m = "" + o), tr(r) && (Ne(r.key), m = "" + r.key), rr(r) && (_ = r.ref, nr(r, h));
        for (v in r)
          J.call(r, v) && !er.hasOwnProperty(v) && (p[v] = r[v]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (v in w)
            p[v] === void 0 && (p[v] = w[v]);
        }
        if (m || _) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && ar(p, N), _ && or(p, N);
        }
        return ir(e, m, _, h, c, U.current, p);
      }
    }
    var oe = S.ReactCurrentOwner, _e = S.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, o = G(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(o);
      } else
        _e.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Te() {
      {
        if (oe.current) {
          var e = P(oe.current.type);
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
          var r = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
        }
        return "";
      }
    }
    var ke = {};
    function cr(e) {
      {
        var r = Te();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = cr(r);
        if (ke[o])
          return;
        ke[o] = !0;
        var c = "";
        e && e._owner && e._owner !== oe.current && (c = " It was passed a child from " + P(e._owner.type) + "."), W(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), W(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var o = 0; o < e.length; o++) {
            var c = e[o];
            le(c) && Oe(c, r);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var h = B(e);
          if (typeof h == "function" && h !== e.entries)
            for (var v = h.call(e), p; !(p = v.next()).done; )
              le(p.value) && Oe(p.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || r.$$typeof === R))
          o = r.propTypes;
        else
          return;
        if (o) {
          var c = P(r);
          Ke(o, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var h = P(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var c = r[o];
          if (c !== "children" && c !== "key") {
            W(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function je(e, r, o, c, h, v) {
      {
        var p = Ue(e);
        if (!p) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = sr(h);
          _ ? m += _ : m += Te();
          var w;
          e === null ? w = "null" : ne(e) ? w = "array" : e !== void 0 && e.$$typeof === a ? (w = "<" + (P(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, m);
        }
        var N = lr(e, r, o, h, v);
        if (N == null)
          return N;
        if (p) {
          var O = r.children;
          if (O !== void 0)
            if (c)
              if (ne(O)) {
                for (var M = 0; M < O.length; M++)
                  Pe(O[M], e);
                Object.freeze && Object.freeze(O);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(O, e);
        }
        return e === i ? dr(N) : ur(N), N;
      }
    }
    function fr(e, r, o) {
      return je(e, r, o, !0);
    }
    function mr(e, r, o) {
      return je(e, r, o, !1);
    }
    var pr = mr, hr = fr;
    z.Fragment = i, z.jsx = pr, z.jsxs = hr;
  }()), z;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = jr() : t.exports = Ar();
})(Q);
const Dr = Q.exports.Fragment, l = Q.exports.jsx, y = Q.exports.jsxs;
function Zr({
  title: t,
  text: a,
  icon: n,
  variant: i = "primary"
}) {
  const s = A("flex w-full rounded py-3 px-[14px]", `bg-${i}-light text-${i}`), u = A("flex items-center justify-center pl-2 pr-5", t ? "text-2xl" : "text-lg");
  return /* @__PURE__ */ y("div", {
    className: s,
    children: [n && /* @__PURE__ */ l("div", {
      className: u,
      children: n
    }), /* @__PURE__ */ y("div", {
      children: [t && /* @__PURE__ */ l("span", {
        className: "block text-base font-semibold",
        children: t
      }), /* @__PURE__ */ l("span", {
        className: "text-sm font-medium",
        children: a
      })]
    })]
  });
}
function Sr({
  labelIcon: t,
  label: a,
  accordionState: n,
  id: i,
  component: s,
  highlight: u,
  handleOpenClose: g,
  mode: x
}) {
  const [d, f] = I(!!(n != null && n[i])), [b, R] = I(0), T = Z(null), D = br(() => g(), 450), L = () => {
    f((E) => !E), n != null && n[i] ? D() : g();
  };
  X(() => {
    var E;
    R((E = T == null ? void 0 : T.current) == null ? void 0 : E.clientHeight);
  }), X(() => {
    x === "single" && d && d !== !!n[i] && f(!1);
  }, [n]);
  const k = A("border-b border-solid border-lightBorder last:border-b-0 relative", u && d && "bg-grayLight before:absolute before:h-full before:w-[3px] before:bg-primary before:top before:first:rounded-[6px] before:last:rounded-tl-bl-[6px]"), B = A("flex items-center py-4 px-6 text-sm w-full cursor-pointer", u && d ? "text-primary" : "text-heading"), S = A("font-semibold", t && "ml-3");
  return /* @__PURE__ */ y("div", {
    className: k,
    style: {
      overflow: "hidden",
      transition: "all 400ms ease",
      maxHeight: d ? b + 54 : "54px"
    },
    children: [/* @__PURE__ */ y("div", {
      className: B,
      onClick: L,
      children: [t, /* @__PURE__ */ l("span", {
        className: S,
        children: a
      }), n != null && n[i] ? /* @__PURE__ */ l(yr, {
        size: 20,
        className: "ml-auto text-heading"
      }) : /* @__PURE__ */ l(wr, {
        size: 20,
        className: "ml-auto cursor-pointer"
      })]
    }), !!(n != null && n[i]) && /* @__PURE__ */ l("div", {
      className: "w-full px-6 pb-4",
      ref: T,
      children: s
    })]
  });
}
function Qr({
  className: t,
  mode: a = "multiple",
  highlight: n,
  items: i,
  initialState: s
}) {
  const u = A("rounded-[6px] border border-solid border-lightBorder", t && t), [g, x] = I(s || {}), d = (f) => {
    x((b) => a === "multiple" ? {
      ...b,
      [f]: !b[f]
    } : {
      [f]: !b[f]
    });
  };
  return /* @__PURE__ */ l("div", {
    className: u,
    children: i.map((f) => /* @__PURE__ */ l(Sr, {
      label: f.label,
      labelIcon: f.labelIcon,
      id: f.id,
      component: f.component,
      handleOpenClose: () => d(f.id),
      accordionState: g,
      highlight: n,
      mode: a
    }, f.id))
  });
}
function et({
  text: t,
  variant: a = "primary",
  version: n = "solid"
}) {
  const s = A("flex w-fit rounded font-bold leading-3", typeof t == "string" ? "px-[10px] py-[5px] text-xs" : "p-[5px] text-sm", n === "solid" ? `bg-${a} text-white` : `bg-${a}-light text-${a}`);
  return /* @__PURE__ */ l("div", {
    className: s,
    children: t
  });
}
function rt({
  items: t
}) {
  return /* @__PURE__ */ l("div", {
    className: "flex items-center",
    children: t.map((a, n) => /* @__PURE__ */ y(se.Fragment, {
      children: [/* @__PURE__ */ l("span", {
        className: "text-sm text-primary hover:brightness-125",
        children: a.linkComponent
      }), n !== t.length - 1 && /* @__PURE__ */ l("span", {
        className: "mx-2 text-sm text-heading",
        children: "/"
      })]
    }, n))
  });
}
function tt({
  variant: t = "primary",
  version: a = "solid",
  leftIcon: n,
  rightIcon: i,
  children: s,
  className: u,
  onClick: g
}) {
  const x = C("px-[20px] py-[10px] text-[15px] font-medium rounded shadow-sm flex items-center leading-[1.1rem]", a === "solid" ? ["hover:brightness-[1.13]", "ease-in duration-100", "text-white", `bg-${t}`] : ["hover:brightness-90", `text-${t}`, `bg-${t}-light`], u && u), d = C(n && "ml-3", i && "mr-3");
  return /* @__PURE__ */ y("button", {
    className: x,
    onClick: g,
    children: [n, /* @__PURE__ */ l("span", {
      className: d,
      children: s
    }), i]
  });
}
function nt({
  image: t,
  title: a,
  text: n,
  interaction: i,
  wrapperClasses: s,
  variant: u = "default",
  clamp: g
}) {
  const d = C(["flex rounded bg-white shadow", {
    default: "flex-col w-[356px]",
    small: "w-[271px] flex-col",
    horizontal: "h-[208px] w-[568px]"
  }[u], s]), f = C(u === "default" ? "rounded-t" : "min-w-[200px] h-[208px] rounded-l object-cover"), b = C([!!a && "mt-4", g && "line-clamp-3"]);
  return /* @__PURE__ */ y("div", {
    className: d,
    children: [t && /* @__PURE__ */ l("div", {
      className: f,
      children: /* @__PURE__ */ l("img", {
        className: f,
        src: t
      })
    }), /* @__PURE__ */ y("div", {
      className: "p-6",
      children: [a && /* @__PURE__ */ l(F, {
        variant: "h5",
        children: a
      }), n && /* @__PURE__ */ l(F, {
        className: b,
        children: n
      }), i]
    })]
  });
}
function at({
  vertical: t
}) {
  const a = C("bg-lightBorder inline-block", t ? "h-full w-[1px]" : "w-full h-[1px]");
  return /* @__PURE__ */ l("div", {
    className: a
  });
}
function $e(t, a, n) {
  X(() => {
    const i = (s) => {
      !t.current || t.current.contains(s.target) || a(s);
    };
    return t.current && n && (document.addEventListener("mousedown", i), document.addEventListener("touchstart", i)), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("touchstart", i);
    };
  }, [n, a]);
}
const Fr = () => {
  const [t, a] = I(!1), n = document.getElementById("root"), i = document.getElementById("overlay"), s = Rr(/* @__PURE__ */ l("div", {
    id: "overlay",
    className: "absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-60"
  }), n);
  return X(() => {
    !i && a(!t);
  }, []), t ? s : null;
};
function $r({
  options: t,
  variant: a
}) {
  const n = C(["group cursor-pointer rounded px-4 py-2", `hover:bg-${a}`]);
  return /* @__PURE__ */ l("div", {
    className: C(["absolute top-[42px] z-20 flex w-full flex-col gap-1 rounded bg-white p-1 shadow", "border", `border-${a}`]),
    children: t.map((i) => /* @__PURE__ */ l("div", {
      className: n,
      onClick: (s) => {
        s.stopPropagation(), i.handleClick();
      },
      children: /* @__PURE__ */ l(F, {
        as: "span",
        className: "group-hover:text-white",
        children: i.value
      })
    }, i.id))
  });
}
function ot({
  text: t,
  options: a,
  variant: n = "primary",
  outlined: i,
  className: s
}) {
  const [u, g] = I(!1), x = Z(null);
  $e(x, () => g(!1), u);
  const d = C(["flex items-center rounded text-[15px] font-medium leading-[17px]", i ? `border border-${n} text-${n}` : `bg-${n} text-white`, s]), f = C(["flex items-center py-[10px] px-5 min-h-[38px]", i ? `border-r border-${n}` : "border-r-2 border-r-opacity-10"]), b = C(["transition-all", u ? "rotate-0" : "-rotate-90"]);
  function R() {
    g(!u);
  }
  return /* @__PURE__ */ y("div", {
    className: "relative w-fit",
    onClick: R,
    ref: x,
    children: [/* @__PURE__ */ y("button", {
      className: d,
      children: [/* @__PURE__ */ l("div", {
        className: f,
        children: t
      }), /* @__PURE__ */ l("div", {
        className: "flex items-center p-[10px]",
        children: /* @__PURE__ */ l(Er, {
          size: 18,
          weight: "bold",
          className: b
        })
      })]
    }), u && /* @__PURE__ */ l($r, {
      options: a,
      variant: n
    })]
  });
}
function it({
  className: t,
  multiple: a,
  files: n,
  setFiles: i,
  variant: s
}) {
  const u = Z(null), [g, x] = I(!1), d = s != null ? s : "default";
  function f() {
    u.current.click();
  }
  const b = () => {
    const k = [];
    for (const B of n || [])
      k.push(B.name);
    return k.join(", ");
  };
  function R(k) {
    i(k.dataTransfer.files), k.preventDefault(), k.stopPropagation(), x(!1);
  }
  function T(k) {
    k.preventDefault();
  }
  function D() {
    x(!0);
  }
  function L() {
    g && x(!1);
  }
  return /* @__PURE__ */ y("div", {
    className: C(["flex flex-col items-center justify-center rounded border border-gray transition-colors hover:bg-[#FFFCFC]", d === "default" && "h-full min-h-[280px] w-full", g && "animate-pulse", d === "small" && "h-[180px] w-full max-w-[180px]", t]),
    onClick: f,
    onDrop: R,
    onDragOver: T,
    onDragEnter: D,
    onDragEnd: L,
    children: [/* @__PURE__ */ l("input", {
      type: "file",
      className: "hidden",
      onChange: (k) => i(k.target.files),
      accept: "image/*",
      multiple: a,
      ref: u
    }), /* @__PURE__ */ l("div", {
      className: "rounded bg-grayLight p-[10px]",
      children: /* @__PURE__ */ l(Nr, {
        size: 32,
        weight: "regular",
        className: "text-defaultText"
      })
    }), /* @__PURE__ */ l(F, {
      className: C(["mt-8 mb-2 text-center text-defaultText", d === "small" && "text-xs mt-4"]),
      variant: "h2",
      as: "span",
      children: "Click or drag to select your files to upload."
    }), s !== "small" && /* @__PURE__ */ l(F, {
      className: "max-w-[70%] text-center",
      children: (n || []).length > 0 ? b() : "No file selected."
    })]
  });
}
function lt({
  icon: t,
  number: a,
  variant: n = "primary",
  onClick: i
}) {
  const s = A("absolute rounded-full top-[-10px] right-[-10px] flex h-4 w-4 items-center justify-center p-1 text-[9px] text-white", n && `bg-${n}`);
  return /* @__PURE__ */ y("div", {
    className: "relative flex w-fit cursor-pointer",
    onClick: i,
    children: [t, /* @__PURE__ */ l("div", {
      className: s,
      children: a
    })]
  });
}
function Ir({
  id: t,
  label: a,
  selected: n,
  disabled: i,
  onChange: s
}) {
  return /* @__PURE__ */ y("div", {
    className: "flex items-center",
    children: [/* @__PURE__ */ l("input", {
      type: "radio",
      id: t,
      value: t,
      onChange: s,
      checked: n === t,
      disabled: i,
      className: "relative mr-2 flex h-4 w-4 appearance-none items-center justify-center rounded-full border border-lightBorder before:block before:h-2 before:w-2 before:rounded-full checked:before:bg-primary checked:before:content-[''] focus-visible:border-0 disabled:bg-gray"
    }), /* @__PURE__ */ l("label", {
      htmlFor: t,
      className: "text-sm text-defaultText",
      children: a
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
function Lr({
  label: t,
  ...a
}) {
  return t ? /* @__PURE__ */ y("label", {
    className: "text-[13px] text-dark",
    children: [/* @__PURE__ */ l("span", {
      className: "mb-1 flex",
      children: t
    }), /* @__PURE__ */ l(Fe, {
      ...a
    })]
  }) : /* @__PURE__ */ l(Fe, {
    ...a
  });
}
const Wr = {
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
}, Mr = {
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
function F({
  variant: t = "paragraph",
  as: a,
  className: n,
  children: i
}) {
  const s = C(Wr[t], n);
  return gr(a || Mr[t], {
    className: s
  }, i);
}
function st({
  items: t,
  active: a
}) {
  return /* @__PURE__ */ l("div", {
    className: "flex w-full max-w-[240px] flex-col overflow-hidden rounded border border-lightBorder",
    children: t.map((n, i) => /* @__PURE__ */ l("div", {
      onClick: n.onClick,
      className: C(["group cursor-pointer py-[10px] px-[20px] hover:bg-primary", t.length === i + 1 ? "border-b-0" : "border-b border-b-lightBorder", a === n.id && "bg-primary-light"]),
      children: /* @__PURE__ */ l(F, {
        className: C([a === n.id && "text-primary", "group-hover:text-white"]),
        children: n.value
      })
    }, n.id))
  });
}
function ct({
  groups: t,
  logoComponent: a
}) {
  return /* @__PURE__ */ y("div", {
    className: "h-full min-h-screen w-[260px] p-3 shadow",
    children: [/* @__PURE__ */ l("div", {
      className: "w-full",
      children: a
    }), t.map((n) => /* @__PURE__ */ y("div", {
      className: "flex w-full flex-col",
      children: [(n == null ? void 0 : n.name) && /* @__PURE__ */ l("div", {
        className: "flex h-[40px] items-center px-4 text-grayLight",
        children: /* @__PURE__ */ l(F, {
          className: "text-[11px] uppercase",
          children: n.name
        })
      }), n.items.map((i) => /* @__PURE__ */ y("div", {
        className: C("group mb-1 flex h-[40px] w-full cursor-pointer items-center rounded-lg px-4 transition-colors hover:bg-gradient-to-r hover:from-primary hover:to-[#9d95f5]", i.active && "bg-grayLight"),
        children: [i.icon && vr(i.icon, {
          size: 20,
          className: "text-defaultText group-hover:text-white"
        }), /* @__PURE__ */ l(F, {
          className: "ml-2 text-sm transition-colors group-hover:text-white",
          children: i.label
        }), i.counter && /* @__PURE__ */ l("div", {
          className: "ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-danger text-[10px] text-white",
          children: i.counter
        })]
      }))]
    }))]
  });
}
function Br({
  children: t,
  className: a,
  handleClose: n,
  closeOnClickOutside: i,
  open: s
}) {
  const u = Z(null);
  $e(u, n, !!i && s);
  const g = Fr();
  return /* @__PURE__ */ y(Dr, {
    children: [/* @__PURE__ */ y("div", {
      ref: u,
      className: C(["absolute left-0 right-0 top-[30%] z-50 ml-auto mr-auto flex w-full max-w-[500px] flex-col rounded bg-white px-6 py-5 shadow-md", a]),
      children: [/* @__PURE__ */ l("div", {
        className: "absolute top-[-14px] right-[-14px] cursor-pointer rounded bg-white p-[6px] text-defaultText shadow-md",
        onClick: n,
        children: /* @__PURE__ */ l(Cr, {
          size: 20,
          weight: "bold"
        })
      }), t]
    }), g]
  });
}
function ut({
  children: t,
  open: a,
  className: n,
  handleClose: i,
  closeOnClickOutside: s
}) {
  return a ? /* @__PURE__ */ l(Br, {
    className: n,
    handleClose: i,
    closeOnClickOutside: s,
    open: a,
    children: t
  }) : null;
}
function dt({
  placeholder: t = "",
  options: a,
  selected: n,
  onChange: i,
  emptyResultText: s
}) {
  const [u, g] = I(""), x = (f) => {
    g(f.target.value.toLocaleLowerCase());
  }, d = xr(() => a.filter((f) => f.label.includes(u)), [u]);
  return /* @__PURE__ */ y("div", {
    className: "w-full",
    children: [/* @__PURE__ */ l(Lr, {
      placeholder: t,
      value: u,
      onChange: x
    }), /* @__PURE__ */ l("div", {
      className: "mt-4",
      children: d.length > 0 ? d.map((f) => /* @__PURE__ */ l("div", {
        className: "my-2",
        children: /* @__PURE__ */ l(Ir, {
          id: f.id,
          label: f.label,
          selected: n,
          onChange: i
        }, f.id)
      })) : /* @__PURE__ */ l("span", {
        className: "text-sm text-defaultText",
        children: s
      })
    })]
  });
}
function ft({
  children: t,
  variant: a = "default",
  className: n
}) {
  const i = C("w-full rounded-md", a === "default" ? "shadow" : "border border-solid border-lightBorder", n);
  return /* @__PURE__ */ l("div", {
    className: i,
    children: t
  });
}
function mt({
  text: t,
  variant: a = "primary",
  rounded: n
}) {
  const i = A("h-[10px] w-[10px] mr-[6px]", n && "rounded-full", `bg-${a}`);
  return /* @__PURE__ */ y("div", {
    className: "flex w-fit items-center font-bold",
    children: [/* @__PURE__ */ l("div", {
      className: i
    }), /* @__PURE__ */ l("span", {
      className: "text-sm font-semibold text-dark",
      children: t
    })]
  });
}
const Yr = ({
  editor: t
}) => {
  if (!t)
    return null;
  const a = "px-2 py-1 my-1 text-heading bg-opacity-10 hover:bg-gray rounded mr-1 last:mr-0", n = "px-2 py-1 my-1 p-2 text-heading bg-lightBorder rounded mr-1 last:mr-0";
  return /* @__PURE__ */ y("div", {
    className: "bg-grayLight p-1",
    children: [/* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 1
      }).updateAttributes("bold", {
        class: "bold-tag"
      }).run(),
      className: t.isActive("heading", {
        level: 1
      }) ? n : a,
      children: "h1"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 2
      }).run(),
      className: t.isActive("heading", {
        level: 2
      }) ? n : a,
      children: "h2"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleHeading({
        level: 3
      }).run(),
      className: t.isActive("heading", {
        level: 3
      }) ? n : a,
      children: "h3"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().setParagraph().run(),
      className: t.isActive("paragraph") ? n : a,
      children: "paragraph"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleBold().run(),
      className: t.isActive("bold") ? n : a,
      children: "bold"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleItalic().run(),
      className: t.isActive("italic") ? n : a,
      children: "italic"
    }), /* @__PURE__ */ l("button", {
      onClick: () => t.chain().focus().toggleStrike().run(),
      className: t.isActive("strike") ? n : a,
      children: "strike"
    })]
  });
};
function pt({
  text: t,
  setText: a
}) {
  const n = "min-w-full p-4 outline-none", i = _r({
    extensions: [Or.configure({
      paragraph: {
        HTMLAttributes: {
          class: "font-normal text-[0.9375rem] leading-[1.375rem] text-defaultText mb-4 last:mb-0"
        }
      },
      heading: !1
    }), Pr.configure({
      levels: [1, 2]
    }).extend({
      levels: [1, 2, 3, 4, 5, 6],
      renderHTML({
        node: s,
        HTMLAttributes: u
      }) {
        const g = this.options.levels.includes(s.attrs.level) ? s.attrs.level : this.options.levels[0], x = {
          1: "font-semibold text-[2.375rem] leading-[3.25rem] text-heading mb-4",
          2: "font-semibold text-[2rem] leading-[2.75rem] text-heading mb-4",
          3: "font-semibold text-[1.625rem] leading-[2.25rem] text-heading mb-4",
          4: "font-semibold text-[1.375rem] leading-[1.875rem] text-heading mb-4",
          5: "font-semibold text-[1.125rem] leading-[1.5rem] text-heading mb-4",
          6: "font-semibold text-[0.925rem] leading-[1.25rem] text-heading mb-4"
        };
        return [`h${g}`, Tr(this.options.HTMLAttributes, u, {
          class: `${x[g]}`
        }), 0];
      }
    })],
    content: "<p>type something awesome!</p>",
    onUpdate: ({
      editor: s
    }) => {
      const u = s.getHTML();
      a(u);
    },
    editorProps: {
      attributes: {
        class: n
      }
    }
  });
  return /* @__PURE__ */ y("div", {
    className: "rounded border-[3px] border-grayLight",
    children: [/* @__PURE__ */ l(Yr, {
      editor: i
    }), /* @__PURE__ */ l(kr, {
      editor: i
    })]
  });
}
export {
  Sr as Accordion,
  Qr as AccordionWrapper,
  Zr as Alert,
  et as Badge,
  rt as Breadcrumb,
  tt as Button,
  nt as Card,
  at as Divider,
  ot as Dropdown,
  it as FileDrop,
  lt as IconWithBadge,
  Ir as InputRadio,
  Lr as InputText,
  st as ListGroup,
  ct as Menu,
  ut as Modal,
  dt as RadioSearchCombo,
  ft as Surface,
  mt as Tag,
  pt as TextEditor,
  F as Typography
};
//# sourceMappingURL=dsx-react-components.es.js.map
