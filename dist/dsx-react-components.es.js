import P from "classnames";
import le, { useState as I, useRef as se, useEffect as H, createElement as vr, useMemo as br } from "react";
import { debounce as xr } from "lodash";
import { Minus as gr, Plus as yr, CaretDown as wr, X as Er } from "phosphor-react";
import { twMerge as C } from "tailwind-merge";
import { createPortal as Rr } from "react-dom";
var K = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function _r() {
  if (Ae)
    return B;
  Ae = 1;
  var a = le, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(E, p, f) {
    var b, N = {}, T = null, F = null;
    f !== void 0 && (T = "" + f), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (F = p.ref);
    for (b in p)
      i.call(p, b) && !h.hasOwnProperty(b) && (N[b] = p[b]);
    if (E && E.defaultProps)
      for (b in p = E.defaultProps, p)
        N[b] === void 0 && (N[b] = p[b]);
    return { $$typeof: o, type: E, key: T, ref: F, props: N, _owner: u.current };
  }
  return B.Fragment = n, B.jsx = x, B.jsxs = x, B;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Cr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = le, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), E = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), Y = Symbol.iterator, X = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Y && e[Y] || e[X];
      return typeof r == "function" ? r : null;
    }
    var S = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          t[s - 1] = arguments[s];
        Ie("error", e, t);
      }
    }
    function Ie(e, r, t) {
      {
        var s = S.ReactDebugCurrentFrame, m = s.getStackAddendum();
        m !== "" && (r += "%s", t = t.concat([m]));
        var v = t.map(function(d) {
          return String(d);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var We = !1, Le = !1, Be = !1, Me = !1, Ye = !1, ue;
    ue = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === h || Ye || e === u || e === f || e === b || Me || e === F || We || Le || Be || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === N || e.$$typeof === x || e.$$typeof === E || e.$$typeof === p || e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var s = e.displayName;
      if (s)
        return s;
      var m = r.displayName || r.name || "";
      return m !== "" ? t + "(" + m + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case h:
          return "Profiler";
        case u:
          return "StrictMode";
        case f:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return ce(r) + ".Consumer";
          case x:
            var t = e;
            return ce(t._context) + ".Provider";
          case p:
            return Ve(e, e.render, "ForwardRef");
          case N:
            var s = e.displayName || null;
            return s !== null ? s : k(e.type) || "Memo";
          case T: {
            var m = e, v = m._payload, d = m._init;
            try {
              return k(d(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, W = 0, fe, de, pe, me, he, ve, be;
    function xe() {
    }
    xe.__reactDisabledLog = !0;
    function ze() {
      {
        if (W === 0) {
          fe = console.log, de = console.info, pe = console.warn, me = console.error, he = console.group, ve = console.groupCollapsed, be = console.groupEnd;
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
        W++;
      }
    }
    function qe() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: fe
            }),
            info: A({}, e, {
              value: de
            }),
            warn: A({}, e, {
              value: pe
            }),
            error: A({}, e, {
              value: me
            }),
            group: A({}, e, {
              value: he
            }),
            groupCollapsed: A({}, e, {
              value: ve
            }),
            groupEnd: A({}, e, {
              value: be
            })
          });
        }
        W < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = S.ReactCurrentDispatcher, ee;
    function U(e, r, t) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (m) {
            var s = m.stack.trim().match(/\n( *(at )?)/);
            ee = s && s[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var re = !1, V;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Ge();
    }
    function ge(e, r) {
      if (!e || re)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var s;
      re = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = Q.current, Q.current = null, ze();
      try {
        if (r) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (j) {
              s = j;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (j) {
              s = j;
            }
            e.call(d.prototype);
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
`), _ = s.stack.split(`
`), g = c.length - 1, w = _.length - 1; g >= 1 && w >= 0 && c[g] !== _[w]; )
            w--;
          for (; g >= 1 && w >= 0; g--, w--)
            if (c[g] !== _[w]) {
              if (g !== 1 || w !== 1)
                do
                  if (g--, w--, w < 0 || c[g] !== _[w]) {
                    var O = `
` + c[g].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, O), O;
                  }
                while (g >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = v, qe(), Error.prepareStackTrace = m;
      }
      var $ = e ? e.displayName || e.name : "", Se = $ ? U($) : "";
      return typeof e == "function" && V.set(e, Se), Se;
    }
    function He(e, r, t) {
      return ge(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, Je(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case f:
          return U("Suspense");
        case b:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return He(e.render);
          case N:
            return z(e.type, r, t);
          case T: {
            var s = e, m = s._payload, v = s._init;
            try {
              return z(v(m), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ye = {}, we = S.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    function Ke(e, r, t, s, m) {
      {
        var v = Function.call.bind(q);
        for (var d in e)
          if (v(e, d)) {
            var c = void 0;
            try {
              if (typeof e[d] != "function") {
                var _ = Error((s || "React class") + ": " + t + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              c = e[d](r, d, s, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              c = g;
            }
            c && !(c instanceof Error) && (G(m), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", t, d, typeof c), G(null)), c instanceof Error && !(c.message in ye) && (ye[c.message] = !0, G(m), y("Failed %s type: %s", t, c.message), G(null));
          }
      }
    }
    var Xe = Array.isArray;
    function te(e) {
      return Xe(e);
    }
    function Ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
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
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ze(e)), Ee(e);
    }
    var L = S.ReactCurrentOwner, er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Ce, ne;
    ne = {};
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
      if (typeof e.ref == "string" && L.current && r && L.current.stateNode !== r) {
        var t = k(L.current.type);
        ne[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(L.current.type), e.ref), ne[t] = !0);
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          _e || (_e = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, s, m, v, d) {
      var c = {
        $$typeof: o,
        type: e,
        key: r,
        ref: t,
        props: d,
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
        value: m
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function lr(e, r, t, s, m) {
      {
        var v, d = {}, c = null, _ = null;
        t !== void 0 && (Re(t), c = "" + t), tr(r) && (Re(r.key), c = "" + r.key), rr(r) && (_ = r.ref, nr(r, m));
        for (v in r)
          q.call(r, v) && !er.hasOwnProperty(v) && (d[v] = r[v]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (v in g)
            d[v] === void 0 && (d[v] = g[v]);
        }
        if (c || _) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ar(d, w), _ && or(d, w);
        }
        return ir(e, c, _, m, s, L.current, d);
      }
    }
    var ae = S.ReactCurrentOwner, Ne = S.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(t);
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
          var e = k(ae.current.type);
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
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Oe = {};
    function ur(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (Oe[t])
          return;
        Oe[t] = !0;
        var s = "";
        e && e._owner && e._owner !== ae.current && (s = " It was passed a child from " + k(e._owner.type) + "."), D(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, s), D(null);
      }
    }
    function ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (te(e))
          for (var t = 0; t < e.length; t++) {
            var s = e[t];
            ie(s) && Pe(s, r);
          }
        else if (ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = Z(e);
          if (typeof m == "function" && m !== e.entries)
            for (var v = m.call(e), d; !(d = v.next()).done; )
              ie(d.value) && Pe(d.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || r.$$typeof === N))
          t = r.propTypes;
        else
          return;
        if (t) {
          var s = k(r);
          Ke(t, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !oe) {
          oe = !0;
          var m = k(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var s = r[t];
          if (s !== "children" && s !== "key") {
            D(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function je(e, r, t, s, m, v) {
      {
        var d = Ue(e);
        if (!d) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = sr(m);
          _ ? c += _ : c += Te();
          var g;
          e === null ? g = "null" : te(e) ? g = "array" : e !== void 0 && e.$$typeof === o ? (g = "<" + (k(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, c);
        }
        var w = lr(e, r, t, m, v);
        if (w == null)
          return w;
        if (d) {
          var O = r.children;
          if (O !== void 0)
            if (s)
              if (te(O)) {
                for (var $ = 0; $ < O.length; $++)
                  ke(O[$], e);
                Object.freeze && Object.freeze(O);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ke(O, e);
        }
        return e === i ? fr(w) : cr(w), w;
      }
    }
    function dr(e, r, t) {
      return je(e, r, t, !0);
    }
    function pr(e, r, t) {
      return je(e, r, t, !1);
    }
    var mr = pr, hr = dr;
    M.Fragment = i, M.jsx = mr, M.jsxs = hr;
  }()), M;
}
(function(a) {
  process.env.NODE_ENV === "production" ? a.exports = _r() : a.exports = Cr();
})(K);
const Nr = K.exports.Fragment, l = K.exports.jsx, R = K.exports.jsxs;
function Mr({
  title: a,
  text: o,
  icon: n,
  variant: i = "primary"
}) {
  const u = P("flex w-full rounded py-3 px-[14px]", `bg-${i}-light text-${i}`), h = P("flex items-center justify-center pl-2 pr-5", a ? "text-2xl" : "text-lg");
  return /* @__PURE__ */ R("div", {
    className: u,
    children: [n && /* @__PURE__ */ l("div", {
      className: h,
      children: n
    }), /* @__PURE__ */ R("div", {
      children: [a && /* @__PURE__ */ l("span", {
        className: "block text-base font-semibold",
        children: a
      }), /* @__PURE__ */ l("span", {
        className: "text-sm font-medium",
        children: o
      })]
    })]
  });
}
function Tr({
  labelIcon: a,
  label: o,
  accordionState: n,
  id: i,
  component: u,
  highlight: h,
  handleOpenClose: x,
  mode: E
}) {
  const [p, f] = I(!!(n != null && n[i])), [b, N] = I(0), T = se(null), F = xr(() => x(), 450), Y = () => {
    f((y) => !y), n != null && n[i] ? F() : x();
  };
  H(() => {
    var y;
    N((y = T == null ? void 0 : T.current) == null ? void 0 : y.clientHeight);
  }), H(() => {
    E === "single" && p && p !== !!n[i] && f(!1);
  }, [n]);
  const X = P("border-b border-solid border-lightBorder last:border-b-0 relative", h && p && "bg-grayLight before:absolute before:h-full before:w-[3px] before:bg-primary before:top before:first:rounded-[6px] before:last:rounded-tl-bl-[6px]"), Z = P("flex items-center py-4 px-6 text-sm w-full cursor-pointer", h && p ? "text-primary" : "text-heading"), S = P("font-semibold", a && "ml-3");
  return /* @__PURE__ */ R("div", {
    className: X,
    style: {
      overflow: "hidden",
      transition: "all 400ms ease",
      maxHeight: p ? b + 54 : "54px"
    },
    children: [/* @__PURE__ */ R("div", {
      className: Z,
      onClick: Y,
      children: [a, /* @__PURE__ */ l("span", {
        className: S,
        children: o
      }), n != null && n[i] ? /* @__PURE__ */ l(gr, {
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
function Yr({
  className: a,
  mode: o = "multiple",
  highlight: n,
  items: i,
  initialState: u
}) {
  const h = P("rounded-[6px] border border-solid border-lightBorder", a && a), [x, E] = I(u || {}), p = (f) => {
    E((b) => o === "multiple" ? {
      ...b,
      [f]: !b[f]
    } : {
      [f]: !b[f]
    });
  };
  return /* @__PURE__ */ l("div", {
    className: h,
    children: i.map((f) => /* @__PURE__ */ l(Tr, {
      label: f.label,
      labelIcon: f.labelIcon,
      id: f.id,
      component: f.component,
      handleOpenClose: () => p(f.id),
      accordionState: x,
      highlight: n,
      mode: o
    }, f.id))
  });
}
function Ur({
  text: a,
  variant: o = "primary",
  version: n = "solid"
}) {
  const u = P("flex w-fit rounded font-bold leading-3", typeof a == "string" ? "px-[10px] py-[5px] text-xs" : "p-[5px] text-sm", n === "solid" ? `bg-${o} text-white` : `bg-${o}-light text-${o}`);
  return /* @__PURE__ */ l("div", {
    className: u,
    children: a
  });
}
function Vr({
  items: a
}) {
  return /* @__PURE__ */ l("div", {
    className: "flex items-center",
    children: a.map((o, n) => /* @__PURE__ */ R(le.Fragment, {
      children: [/* @__PURE__ */ l("span", {
        className: "text-sm text-primary hover:brightness-125",
        children: o.linkComponent
      }), n !== a.length - 1 && /* @__PURE__ */ l("span", {
        className: "mx-2 text-sm text-heading",
        children: "/"
      })]
    }, n))
  });
}
function zr({
  variant: a = "primary",
  version: o = "solid",
  leftIcon: n,
  rightIcon: i,
  children: u,
  className: h,
  onClick: x
}) {
  const E = P("px-[20px] py-[10px] text-[15px] font-medium rounded shadow-sm flex items-center leading-[1.1rem]", o === "solid" ? ["hover:brightness-[1.13]", "ease-in duration-100", "text-white", `bg-${a}`] : ["hover:brightness-90", `text-${a}`, `bg-${a}-light`], h && h), p = P(n && "ml-3", i && "mr-3");
  return /* @__PURE__ */ R("button", {
    className: E,
    onClick: x,
    children: [n, /* @__PURE__ */ l("span", {
      className: p,
      children: u
    }), i]
  });
}
function qr({
  image: a,
  title: o,
  text: n,
  interaction: i,
  wrapperClasses: u,
  variant: h = "default",
  clamp: x
}) {
  const p = C(["flex rounded bg-white shadow", {
    default: "flex-col w-[356px]",
    small: "w-[271px] flex-col",
    horizontal: "h-[208px] w-[568px]"
  }[h], u]), f = C(h === "default" ? "rounded-t" : "min-w-[200px] h-[208px] rounded-l object-cover"), b = C([!!o && "mt-4", x && "line-clamp-3"]);
  return /* @__PURE__ */ R("div", {
    className: p,
    children: [a && /* @__PURE__ */ l("div", {
      className: f,
      children: /* @__PURE__ */ l("img", {
        className: f,
        src: a
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
function Gr({
  vertical: a
}) {
  const o = C("bg-lightBorder inline-block", a ? "h-full w-[1px]" : "w-full h-[1px]");
  return /* @__PURE__ */ l("div", {
    className: o
  });
}
function $e(a, o, n) {
  H(() => {
    const i = (u) => {
      !a.current || a.current.contains(u.target) || o(u);
    };
    return a.current && n && (document.addEventListener("mousedown", i), document.addEventListener("touchstart", i)), () => {
      document.removeEventListener("mousedown", i), document.removeEventListener("touchstart", i);
    };
  }, [n, o]);
}
const Or = () => {
  const [a, o] = I(!1), n = document.getElementById("root"), i = document.getElementById("overlay"), u = Rr(/* @__PURE__ */ l("div", {
    id: "overlay",
    className: "absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-60"
  }), n);
  return H(() => {
    !i && o(!a);
  }, []), a ? u : null;
};
function Pr({
  options: a,
  variant: o
}) {
  const n = C(["group cursor-pointer rounded px-4 py-2", `hover:bg-${o}`]);
  return /* @__PURE__ */ l("div", {
    className: C(["absolute top-[42px] z-20 flex w-full flex-col gap-1 rounded bg-white p-1 shadow", "border", `border-${o}`]),
    children: a.map((i) => /* @__PURE__ */ l("div", {
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
function Hr({
  text: a,
  options: o,
  variant: n = "primary",
  outlined: i,
  className: u
}) {
  const [h, x] = I(!1), E = se(null);
  $e(E, () => x(!1), h);
  const p = C(["flex items-center rounded text-[15px] font-medium leading-[17px]", i ? `border border-${n} text-${n}` : `bg-${n} text-white`, u]), f = C(["flex items-center py-[10px] px-5 min-h-[38px]", i ? `border-r border-${n}` : "border-r-2 border-r-opacity-10"]), b = C(["transition-all", h ? "rotate-0" : "-rotate-90"]);
  function N() {
    x(!h);
  }
  return /* @__PURE__ */ R("div", {
    className: "relative w-fit",
    onClick: N,
    ref: E,
    children: [/* @__PURE__ */ R("button", {
      className: p,
      children: [/* @__PURE__ */ l("div", {
        className: f,
        children: a
      }), /* @__PURE__ */ l("div", {
        className: "flex items-center p-[10px]",
        children: /* @__PURE__ */ l(wr, {
          size: 18,
          weight: "bold",
          className: b
        })
      })]
    }), h && /* @__PURE__ */ l(Pr, {
      options: o,
      variant: n
    })]
  });
}
function Jr({
  icon: a,
  number: o,
  variant: n = "primary",
  onClick: i
}) {
  const u = P("absolute rounded-full top-[-10px] right-[-10px] flex h-4 w-4 items-center justify-center p-1 text-[9px] text-white", n && `bg-${n}`);
  return /* @__PURE__ */ R("div", {
    className: "relative flex w-fit cursor-pointer",
    onClick: i,
    children: [a, /* @__PURE__ */ l("div", {
      className: u,
      children: o
    })]
  });
}
function kr({
  id: a,
  label: o,
  selected: n,
  disabled: i,
  onChange: u
}) {
  return /* @__PURE__ */ R("div", {
    className: "flex items-center",
    children: [/* @__PURE__ */ l("input", {
      type: "radio",
      id: a,
      value: a,
      onChange: u,
      checked: n === a,
      disabled: i,
      className: "relative mr-2 flex h-4 w-4 appearance-none items-center justify-center rounded-full border border-lightBorder before:block before:h-2 before:w-2 before:rounded-full checked:before:bg-primary checked:before:content-[''] focus-visible:border-0 disabled:bg-gray"
    }), /* @__PURE__ */ l("label", {
      htmlFor: a,
      className: "text-sm text-defaultText",
      children: o
    })]
  });
}
function De(a) {
  return /* @__PURE__ */ l("input", {
    ...a,
    type: "text",
    className: "border border-lightBorder focus:border-primary focus:border focus-visible:border-0 min-w-[200px] w-full h-8 px-3 py-2 placeholder:text-lightText text-defaultText rounded font-normal text-sm leading-6 disabled:bg-gray"
  });
}
function jr({
  label: a,
  ...o
}) {
  return a ? /* @__PURE__ */ R("label", {
    className: "text-[13px] text-dark",
    children: [/* @__PURE__ */ l("span", {
      className: "mb-1 flex",
      children: a
    }), /* @__PURE__ */ l(De, {
      ...o
    })]
  }) : /* @__PURE__ */ l(De, {
    ...o
  });
}
const Sr = {
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
}, Ar = {
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
  variant: a = "paragraph",
  as: o,
  className: n,
  children: i
}) {
  const u = C(Sr[a], n);
  return vr(o || Ar[a], {
    className: u
  }, i);
}
function Kr({
  items: a,
  active: o
}) {
  return /* @__PURE__ */ l("div", {
    className: "flex w-full max-w-[240px] flex-col overflow-hidden rounded border border-lightBorder",
    children: a.map((n, i) => /* @__PURE__ */ l("div", {
      onClick: n.onClick,
      className: C(["group cursor-pointer py-[10px] px-[20px] hover:bg-primary", a.length === i + 1 ? "border-b-0" : "border-b border-b-lightBorder", o === n.id && "bg-primary-light"]),
      children: /* @__PURE__ */ l(J, {
        className: C([o === n.id && "text-primary", "group-hover:text-white"]),
        children: n.value
      })
    }, n.id))
  });
}
function Fr({
  children: a,
  className: o,
  handleClose: n,
  closeOnClickOutside: i,
  open: u
}) {
  const h = se(null);
  $e(h, n, !!i && u);
  const x = Or();
  return /* @__PURE__ */ R(Nr, {
    children: [/* @__PURE__ */ R("div", {
      ref: h,
      className: C(["absolute left-0 right-0 top-[30%] z-50 ml-auto mr-auto flex w-full max-w-[500px] flex-col rounded bg-white px-6 py-5 shadow-md", o]),
      children: [/* @__PURE__ */ l("div", {
        className: "absolute top-[-14px] right-[-14px] cursor-pointer rounded bg-white p-[6px] text-defaultText shadow-md",
        onClick: n,
        children: /* @__PURE__ */ l(Er, {
          size: 20,
          weight: "bold"
        })
      }), a]
    }), x]
  });
}
function Xr({
  children: a,
  open: o,
  className: n,
  handleClose: i,
  closeOnClickOutside: u
}) {
  return o ? /* @__PURE__ */ l(Fr, {
    className: n,
    handleClose: i,
    closeOnClickOutside: u,
    open: o,
    children: a
  }) : null;
}
function Zr({
  placeholder: a = "",
  options: o,
  selected: n,
  onChange: i,
  emptyResultText: u
}) {
  const [h, x] = I(""), E = (f) => {
    x(f.target.value.toLocaleLowerCase());
  }, p = br(() => o.filter((f) => f.label.includes(h)), [h]);
  return /* @__PURE__ */ R("div", {
    className: "w-full",
    children: [/* @__PURE__ */ l(jr, {
      placeholder: a,
      value: h,
      onChange: E
    }), /* @__PURE__ */ l("div", {
      className: "mt-4",
      children: p.length > 0 ? p.map((f) => /* @__PURE__ */ l("div", {
        className: "my-2",
        children: /* @__PURE__ */ l(kr, {
          id: f.id,
          label: f.label,
          selected: n,
          onChange: i
        }, f.id)
      })) : /* @__PURE__ */ l("span", {
        className: "text-sm text-defaultText",
        children: u
      })
    })]
  });
}
function Qr({
  children: a,
  variant: o = "default",
  className: n
}) {
  const i = C("w-full rounded-md", o === "default" ? "shadow" : "border border-solid border-lightBorder", n);
  return /* @__PURE__ */ l("div", {
    className: i,
    children: a
  });
}
function et({
  text: a,
  variant: o = "primary",
  rounded: n
}) {
  const i = P("h-[10px] w-[10px] mr-[6px]", n && "rounded-full", `bg-${o}`);
  return /* @__PURE__ */ R("div", {
    className: "flex w-fit items-center font-bold",
    children: [/* @__PURE__ */ l("div", {
      className: i
    }), /* @__PURE__ */ l("span", {
      className: "text-sm font-semibold text-dark",
      children: a
    })]
  });
}
export {
  Tr as Accordion,
  Yr as AccordionWrapper,
  Mr as Alert,
  Ur as Badge,
  Vr as Breadcrumb,
  zr as Button,
  qr as Card,
  Gr as Divider,
  Hr as Dropdown,
  Jr as IconWithBadge,
  kr as InputRadio,
  jr as InputText,
  Kr as ListGroup,
  Xr as Modal,
  Zr as RadioSearchCombo,
  Qr as Surface,
  et as Tag,
  J as Typography
};
//# sourceMappingURL=dsx-react-components.es.js.map
