function Qm(o, l) {
  for (var s = 0; s < l.length; s++) {
    const a = l[s];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const f in a)
        if (f !== "default" && !(f in o)) {
          const d = Object.getOwnPropertyDescriptor(a, f);
          d && Object.defineProperty(o, f, d.get ? d : {
            enumerable: !0,
            get: () => a[f]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
function bf(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Wf = { exports: {} }, ro = {}, Ms = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf;
function Km() {
  if (sf) return ue;
  sf = 1;
  var o = Symbol.for("react.element"), l = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), S = Symbol.iterator;
  function N(x) {
    return x === null || typeof x != "object" ? null : (x = S && x[S] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var O = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, k = {};
  function A(x, T, ie) {
    this.props = x, this.context = T, this.refs = k, this.updater = ie || O;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(x, T) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, T, "setState");
  }, A.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function j() {
  }
  j.prototype = A.prototype;
  function U(x, T, ie) {
    this.props = x, this.context = T, this.refs = k, this.updater = ie || O;
  }
  var B = U.prototype = new j();
  B.constructor = U, L(B, A.prototype), B.isPureReactComponent = !0;
  var b = Array.isArray, $ = Object.prototype.hasOwnProperty, q = { current: null }, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(x, T, ie) {
    var se, de = {}, pe = null, ve = null;
    if (T != null) for (se in T.ref !== void 0 && (ve = T.ref), T.key !== void 0 && (pe = "" + T.key), T) $.call(T, se) && !G.hasOwnProperty(se) && (de[se] = T[se]);
    var ge = arguments.length - 2;
    if (ge === 1) de.children = ie;
    else if (1 < ge) {
      for (var Ee = Array(ge), Qe = 0; Qe < ge; Qe++) Ee[Qe] = arguments[Qe + 2];
      de.children = Ee;
    }
    if (x && x.defaultProps) for (se in ge = x.defaultProps, ge) de[se] === void 0 && (de[se] = ge[se]);
    return { $$typeof: o, type: x, key: pe, ref: ve, props: de, _owner: q.current };
  }
  function me(x, T) {
    return { $$typeof: o, type: x.type, key: T, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function ce(x) {
    return typeof x == "object" && x !== null && x.$$typeof === o;
  }
  function ke(x) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(ie) {
      return T[ie];
    });
  }
  var ne = /\/+/g;
  function we(x, T) {
    return typeof x == "object" && x !== null && x.key != null ? ke("" + x.key) : T.toString(36);
  }
  function ae(x, T, ie, se, de) {
    var pe = typeof x;
    (pe === "undefined" || pe === "boolean") && (x = null);
    var ve = !1;
    if (x === null) ve = !0;
    else switch (pe) {
      case "string":
      case "number":
        ve = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case o:
          case l:
            ve = !0;
        }
    }
    if (ve) return ve = x, de = de(ve), x = se === "" ? "." + we(ve, 0) : se, b(de) ? (ie = "", x != null && (ie = x.replace(ne, "$&/") + "/"), ae(de, T, ie, "", function(Qe) {
      return Qe;
    })) : de != null && (ce(de) && (de = me(de, ie + (!de.key || ve && ve.key === de.key ? "" : ("" + de.key).replace(ne, "$&/") + "/") + x)), T.push(de)), 1;
    if (ve = 0, se = se === "" ? "." : se + ":", b(x)) for (var ge = 0; ge < x.length; ge++) {
      pe = x[ge];
      var Ee = se + we(pe, ge);
      ve += ae(pe, T, ie, Ee, de);
    }
    else if (Ee = N(x), typeof Ee == "function") for (x = Ee.call(x), ge = 0; !(pe = x.next()).done; ) pe = pe.value, Ee = se + we(pe, ge++), ve += ae(pe, T, ie, Ee, de);
    else if (pe === "object") throw T = String(x), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    return ve;
  }
  function xe(x, T, ie) {
    if (x == null) return x;
    var se = [], de = 0;
    return ae(x, se, "", "", function(pe) {
      return T.call(ie, pe, de++);
    }), se;
  }
  function fe(x) {
    if (x._status === -1) {
      var T = x._result;
      T = T(), T.then(function(ie) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = ie);
      }, function(ie) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = ie);
      }), x._status === -1 && (x._status = 0, x._result = T);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var J = { current: null }, D = { transition: null }, V = { ReactCurrentDispatcher: J, ReactCurrentBatchConfig: D, ReactCurrentOwner: q };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ue.Children = { map: xe, forEach: function(x, T, ie) {
    xe(x, function() {
      T.apply(this, arguments);
    }, ie);
  }, count: function(x) {
    var T = 0;
    return xe(x, function() {
      T++;
    }), T;
  }, toArray: function(x) {
    return xe(x, function(T) {
      return T;
    }) || [];
  }, only: function(x) {
    if (!ce(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, ue.Component = A, ue.Fragment = s, ue.Profiler = f, ue.PureComponent = U, ue.StrictMode = a, ue.Suspense = g, ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V, ue.act = H, ue.cloneElement = function(x, T, ie) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var se = L({}, x.props), de = x.key, pe = x.ref, ve = x._owner;
    if (T != null) {
      if (T.ref !== void 0 && (pe = T.ref, ve = q.current), T.key !== void 0 && (de = "" + T.key), x.type && x.type.defaultProps) var ge = x.type.defaultProps;
      for (Ee in T) $.call(T, Ee) && !G.hasOwnProperty(Ee) && (se[Ee] = T[Ee] === void 0 && ge !== void 0 ? ge[Ee] : T[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) se.children = ie;
    else if (1 < Ee) {
      ge = Array(Ee);
      for (var Qe = 0; Qe < Ee; Qe++) ge[Qe] = arguments[Qe + 2];
      se.children = ge;
    }
    return { $$typeof: o, type: x.type, key: de, ref: pe, props: se, _owner: ve };
  }, ue.createContext = function(x) {
    return x = { $$typeof: p, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: d, _context: x }, x.Consumer = x;
  }, ue.createElement = oe, ue.createFactory = function(x) {
    var T = oe.bind(null, x);
    return T.type = x, T;
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, ue.isValidElement = ce, ue.lazy = function(x) {
    return { $$typeof: P, _payload: { _status: -1, _result: x }, _init: fe };
  }, ue.memo = function(x, T) {
    return { $$typeof: y, type: x, compare: T === void 0 ? null : T };
  }, ue.startTransition = function(x) {
    var T = D.transition;
    D.transition = {};
    try {
      x();
    } finally {
      D.transition = T;
    }
  }, ue.unstable_act = H, ue.useCallback = function(x, T) {
    return J.current.useCallback(x, T);
  }, ue.useContext = function(x) {
    return J.current.useContext(x);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(x) {
    return J.current.useDeferredValue(x);
  }, ue.useEffect = function(x, T) {
    return J.current.useEffect(x, T);
  }, ue.useId = function() {
    return J.current.useId();
  }, ue.useImperativeHandle = function(x, T, ie) {
    return J.current.useImperativeHandle(x, T, ie);
  }, ue.useInsertionEffect = function(x, T) {
    return J.current.useInsertionEffect(x, T);
  }, ue.useLayoutEffect = function(x, T) {
    return J.current.useLayoutEffect(x, T);
  }, ue.useMemo = function(x, T) {
    return J.current.useMemo(x, T);
  }, ue.useReducer = function(x, T, ie) {
    return J.current.useReducer(x, T, ie);
  }, ue.useRef = function(x) {
    return J.current.useRef(x);
  }, ue.useState = function(x) {
    return J.current.useState(x);
  }, ue.useSyncExternalStore = function(x, T, ie) {
    return J.current.useSyncExternalStore(x, T, ie);
  }, ue.useTransition = function() {
    return J.current.useTransition();
  }, ue.version = "18.3.1", ue;
}
var uf;
function eu() {
  return uf || (uf = 1, Ms.exports = Km()), Ms.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af;
function Ym() {
  if (af) return ro;
  af = 1;
  var o = eu(), l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, g, y) {
    var P, S = {}, N = null, O = null;
    y !== void 0 && (N = "" + y), g.key !== void 0 && (N = "" + g.key), g.ref !== void 0 && (O = g.ref);
    for (P in g) a.call(g, P) && !d.hasOwnProperty(P) && (S[P] = g[P]);
    if (m && m.defaultProps) for (P in g = m.defaultProps, g) S[P] === void 0 && (S[P] = g[P]);
    return { $$typeof: l, type: m, key: N, ref: O, props: S, _owner: f.current };
  }
  return ro.Fragment = s, ro.jsx = p, ro.jsxs = p, ro;
}
Wf.exports = Ym();
var W = Wf.exports, Hs = {}, Uf = { exports: {} }, et = {}, Ds = { exports: {} }, js = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cf;
function Gm() {
  return cf || (cf = 1, function(o) {
    function l(D, V) {
      var H = D.length;
      D.push(V);
      e: for (; 0 < H; ) {
        var x = H - 1 >>> 1, T = D[x];
        if (0 < f(T, V)) D[x] = V, D[H] = T, H = x;
        else break e;
      }
    }
    function s(D) {
      return D.length === 0 ? null : D[0];
    }
    function a(D) {
      if (D.length === 0) return null;
      var V = D[0], H = D.pop();
      if (H !== V) {
        D[0] = H;
        e: for (var x = 0, T = D.length, ie = T >>> 1; x < ie; ) {
          var se = 2 * (x + 1) - 1, de = D[se], pe = se + 1, ve = D[pe];
          if (0 > f(de, H)) pe < T && 0 > f(ve, de) ? (D[x] = ve, D[pe] = H, x = pe) : (D[x] = de, D[se] = H, x = se);
          else if (pe < T && 0 > f(ve, H)) D[x] = ve, D[pe] = H, x = pe;
          else break e;
        }
      }
      return V;
    }
    function f(D, V) {
      var H = D.sortIndex - V.sortIndex;
      return H !== 0 ? H : D.id - V.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      o.unstable_now = function() {
        return d.now();
      };
    } else {
      var p = Date, m = p.now();
      o.unstable_now = function() {
        return p.now() - m;
      };
    }
    var g = [], y = [], P = 1, S = null, N = 3, O = !1, L = !1, k = !1, A = typeof setTimeout == "function" ? setTimeout : null, j = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function B(D) {
      for (var V = s(y); V !== null; ) {
        if (V.callback === null) a(y);
        else if (V.startTime <= D) a(y), V.sortIndex = V.expirationTime, l(g, V);
        else break;
        V = s(y);
      }
    }
    function b(D) {
      if (k = !1, B(D), !L) if (s(g) !== null) L = !0, fe($);
      else {
        var V = s(y);
        V !== null && J(b, V.startTime - D);
      }
    }
    function $(D, V) {
      L = !1, k && (k = !1, j(oe), oe = -1), O = !0;
      var H = N;
      try {
        for (B(V), S = s(g); S !== null && (!(S.expirationTime > V) || D && !ke()); ) {
          var x = S.callback;
          if (typeof x == "function") {
            S.callback = null, N = S.priorityLevel;
            var T = x(S.expirationTime <= V);
            V = o.unstable_now(), typeof T == "function" ? S.callback = T : S === s(g) && a(g), B(V);
          } else a(g);
          S = s(g);
        }
        if (S !== null) var ie = !0;
        else {
          var se = s(y);
          se !== null && J(b, se.startTime - V), ie = !1;
        }
        return ie;
      } finally {
        S = null, N = H, O = !1;
      }
    }
    var q = !1, G = null, oe = -1, me = 5, ce = -1;
    function ke() {
      return !(o.unstable_now() - ce < me);
    }
    function ne() {
      if (G !== null) {
        var D = o.unstable_now();
        ce = D;
        var V = !0;
        try {
          V = G(!0, D);
        } finally {
          V ? we() : (q = !1, G = null);
        }
      } else q = !1;
    }
    var we;
    if (typeof U == "function") we = function() {
      U(ne);
    };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), xe = ae.port2;
      ae.port1.onmessage = ne, we = function() {
        xe.postMessage(null);
      };
    } else we = function() {
      A(ne, 0);
    };
    function fe(D) {
      G = D, q || (q = !0, we());
    }
    function J(D, V) {
      oe = A(function() {
        D(o.unstable_now());
      }, V);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(D) {
      D.callback = null;
    }, o.unstable_continueExecution = function() {
      L || O || (L = !0, fe($));
    }, o.unstable_forceFrameRate = function(D) {
      0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : me = 0 < D ? Math.floor(1e3 / D) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, o.unstable_getFirstCallbackNode = function() {
      return s(g);
    }, o.unstable_next = function(D) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = N;
      }
      var H = N;
      N = V;
      try {
        return D();
      } finally {
        N = H;
      }
    }, o.unstable_pauseExecution = function() {
    }, o.unstable_requestPaint = function() {
    }, o.unstable_runWithPriority = function(D, V) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var H = N;
      N = D;
      try {
        return V();
      } finally {
        N = H;
      }
    }, o.unstable_scheduleCallback = function(D, V, H) {
      var x = o.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? x + H : x) : H = x, D) {
        case 1:
          var T = -1;
          break;
        case 2:
          T = 250;
          break;
        case 5:
          T = 1073741823;
          break;
        case 4:
          T = 1e4;
          break;
        default:
          T = 5e3;
      }
      return T = H + T, D = { id: P++, callback: V, priorityLevel: D, startTime: H, expirationTime: T, sortIndex: -1 }, H > x ? (D.sortIndex = H, l(y, D), s(g) === null && D === s(y) && (k ? (j(oe), oe = -1) : k = !0, J(b, H - x))) : (D.sortIndex = T, l(g, D), L || O || (L = !0, fe($))), D;
    }, o.unstable_shouldYield = ke, o.unstable_wrapCallback = function(D) {
      var V = N;
      return function() {
        var H = N;
        N = V;
        try {
          return D.apply(this, arguments);
        } finally {
          N = H;
        }
      };
    };
  }(js)), js;
}
var ff;
function Xm() {
  return ff || (ff = 1, Ds.exports = Gm()), Ds.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var df;
function Zm() {
  if (df) return et;
  df = 1;
  var o = eu(), l = Xm();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), f = {};
  function d(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), g = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, P = {}, S = {};
  function N(e) {
    return g.call(S, e) ? !0 : g.call(P, e) ? !1 : y.test(e) ? S[e] = !0 : (P[e] = !0, !1);
  }
  function O(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function L(e, t, n, r) {
    if (t === null || typeof t > "u" || O(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function k(e, t, n, r, i, u, c) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = c;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    A[e] = new k(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    A[t] = new k(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    A[e] = new k(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    A[e] = new k(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    A[e] = new k(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    A[e] = new k(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    A[e] = new k(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    A[e] = new k(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    A[e] = new k(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var j = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      j,
      U
    );
    A[t] = new k(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(j, U);
    A[t] = new k(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(j, U);
    A[t] = new k(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    A[e] = new k(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    A[e] = new k(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function B(e, t, n, r) {
    var i = A.hasOwnProperty(t) ? A[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (L(t, n, i, r) && (n = null), r || i === null ? N(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var b = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $ = Symbol.for("react.element"), q = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), me = Symbol.for("react.profiler"), ce = Symbol.for("react.provider"), ke = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), we = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), xe = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), D = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != "object" ? null : (e = D && e[D] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var H = Object.assign, x;
  function T(e) {
    if (x === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      x = t && t[1] || "";
    }
    return `
` + x + e;
  }
  var ie = !1;
  function se(e, t) {
    if (!e || ie) return "";
    ie = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (_) {
          var r = _;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (_) {
          r = _;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (_) {
          r = _;
        }
        e();
      }
    } catch (_) {
      if (_ && r && typeof _.stack == "string") {
        for (var i = _.stack.split(`
`), u = r.stack.split(`
`), c = i.length - 1, h = u.length - 1; 1 <= c && 0 <= h && i[c] !== u[h]; ) h--;
        for (; 1 <= c && 0 <= h; c--, h--) if (i[c] !== u[h]) {
          if (c !== 1 || h !== 1)
            do
              if (c--, h--, 0 > h || i[c] !== u[h]) {
                var v = `
` + i[c].replace(" at new ", " at ");
                return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), v;
              }
            while (1 <= c && 0 <= h);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? T(e) : "";
  }
  function de(e) {
    switch (e.tag) {
      case 5:
        return T(e.type);
      case 16:
        return T("Lazy");
      case 13:
        return T("Suspense");
      case 19:
        return T("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = se(e.type, !1), e;
      case 11:
        return e = se(e.type.render, !1), e;
      case 1:
        return e = se(e.type, !0), e;
      default:
        return "";
    }
  }
  function pe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case G:
        return "Fragment";
      case q:
        return "Portal";
      case me:
        return "Profiler";
      case oe:
        return "StrictMode";
      case we:
        return "Suspense";
      case ae:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ke:
        return (e.displayName || "Context") + ".Consumer";
      case ce:
        return (e._context.displayName || "Context") + ".Provider";
      case ne:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case xe:
        return t = e.displayName || null, t !== null ? t : pe(e.type) || "Memo";
      case fe:
        t = e._payload, e = e._init;
        try {
          return pe(e(t));
        } catch {
        }
    }
    return null;
  }
  function ve(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return pe(t);
      case 8:
        return t === oe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ge(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Qe(e) {
    var t = Ee(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return i.call(this);
      }, set: function(c) {
        r = "" + c, u.call(this, c);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(c) {
        r = "" + c;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function jn(e) {
    e._valueTracker || (e._valueTracker = Qe(e));
  }
  function po(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ee(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Tt(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ui(e, t) {
    var n = t.checked;
    return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function pu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ge(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function mu(e, t) {
    t = t.checked, t != null && B(e, "checked", t, !1);
  }
  function Bi(e, t) {
    mu(e, t);
    var n = ge(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? $i(e, t.type, n) : t.hasOwnProperty("defaultValue") && $i(e, t.type, ge(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function hu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function $i(e, t, n) {
    (t !== "number" || Tt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var yr = Array.isArray;
  function Fn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ge(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Vi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function vu(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (yr(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ge(n) };
  }
  function gu(e, t) {
    var n = ge(t.value), r = ge(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function yu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function wu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Hi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? wu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var mo, xu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, i);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (mo = mo || document.createElement("div"), mo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mo.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function wr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var xr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Xd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xr).forEach(function(e) {
    Xd.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), xr[t] = xr[e];
    });
  });
  function Su(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xr.hasOwnProperty(e) && xr[e] ? ("" + t).trim() : t + "px";
  }
  function ku(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, i = Su(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    }
  }
  var Zd = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Qi(e, t) {
    if (t) {
      if (Zd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ki(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yi = null;
  function Gi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Xi = null, In = null, bn = null;
  function Eu(e) {
    if (e = Br(e)) {
      if (typeof Xi != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Fo(t), Xi(e.stateNode, e.type, t));
    }
  }
  function Cu(e) {
    In ? bn ? bn.push(e) : bn = [e] : In = e;
  }
  function Pu() {
    if (In) {
      var e = In, t = bn;
      if (bn = In = null, Eu(e), t) for (e = 0; e < t.length; e++) Eu(t[e]);
    }
  }
  function Ru(e, t) {
    return e(t);
  }
  function Nu() {
  }
  var Zi = !1;
  function _u(e, t, n) {
    if (Zi) return e(t, n);
    Zi = !0;
    try {
      return Ru(e, t, n);
    } finally {
      Zi = !1, (In !== null || bn !== null) && (Nu(), Pu());
    }
  }
  function Sr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Fo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Ji = !1;
  if (m) try {
    var kr = {};
    Object.defineProperty(kr, "passive", { get: function() {
      Ji = !0;
    } }), window.addEventListener("test", kr, kr), window.removeEventListener("test", kr, kr);
  } catch {
    Ji = !1;
  }
  function Jd(e, t, n, r, i, u, c, h, v) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, _);
    } catch (M) {
      this.onError(M);
    }
  }
  var Er = !1, ho = null, vo = !1, qi = null, qd = { onError: function(e) {
    Er = !0, ho = e;
  } };
  function ep(e, t, n, r, i, u, c, h, v) {
    Er = !1, ho = null, Jd.apply(qd, arguments);
  }
  function tp(e, t, n, r, i, u, c, h, v) {
    if (ep.apply(this, arguments), Er) {
      if (Er) {
        var _ = ho;
        Er = !1, ho = null;
      } else throw Error(s(198));
      vo || (vo = !0, qi = _);
    }
  }
  function xn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ou(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Au(e) {
    if (xn(e) !== e) throw Error(s(188));
  }
  function np(e) {
    var t = e.alternate;
    if (!t) {
      if (t = xn(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (r = i.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return Au(i), e;
          if (u === r) return Au(i), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = i, r = u;
      else {
        for (var c = !1, h = i.child; h; ) {
          if (h === n) {
            c = !0, n = i, r = u;
            break;
          }
          if (h === r) {
            c = !0, r = i, n = u;
            break;
          }
          h = h.sibling;
        }
        if (!c) {
          for (h = u.child; h; ) {
            if (h === n) {
              c = !0, n = u, r = i;
              break;
            }
            if (h === r) {
              c = !0, r = u, n = i;
              break;
            }
            h = h.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function Tu(e) {
    return e = np(e), e !== null ? Lu(e) : null;
  }
  function Lu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Lu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var zu = l.unstable_scheduleCallback, Mu = l.unstable_cancelCallback, rp = l.unstable_shouldYield, op = l.unstable_requestPaint, Le = l.unstable_now, ip = l.unstable_getCurrentPriorityLevel, el = l.unstable_ImmediatePriority, Du = l.unstable_UserBlockingPriority, go = l.unstable_NormalPriority, lp = l.unstable_LowPriority, ju = l.unstable_IdlePriority, yo = null, St = null;
  function sp(e) {
    if (St && typeof St.onCommitFiberRoot == "function") try {
      St.onCommitFiberRoot(yo, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var pt = Math.clz32 ? Math.clz32 : cp, up = Math.log, ap = Math.LN2;
  function cp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (up(e) / ap | 0) | 0;
  }
  var wo = 64, xo = 4194304;
  function Cr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function So(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, i = e.suspendedLanes, u = e.pingedLanes, c = n & 268435455;
    if (c !== 0) {
      var h = c & ~i;
      h !== 0 ? r = Cr(h) : (u &= c, u !== 0 && (r = Cr(u)));
    } else c = n & ~i, c !== 0 ? r = Cr(c) : u !== 0 && (r = Cr(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, u = t & -t, i >= u || i === 16 && (u & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - pt(t), i = 1 << n, r |= e[n], t &= ~i;
    return r;
  }
  function fp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function dp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var c = 31 - pt(u), h = 1 << c, v = i[c];
      v === -1 ? (!(h & n) || h & r) && (i[c] = fp(h, t)) : v <= t && (e.expiredLanes |= h), u &= ~h;
    }
  }
  function tl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Fu() {
    var e = wo;
    return wo <<= 1, !(wo & 4194240) && (wo = 64), e;
  }
  function nl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Pr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
  }
  function pp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - pt(n), u = 1 << i;
      t[i] = 0, r[i] = -1, e[i] = -1, n &= ~u;
    }
  }
  function rl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - pt(n), i = 1 << r;
      i & t | e[r] & t && (e[r] |= t), n &= ~i;
    }
  }
  var Se = 0;
  function Iu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var bu, ol, Wu, Uu, Bu, il = !1, ko = [], Vt = null, Ht = null, Qt = null, Rr = /* @__PURE__ */ new Map(), Nr = /* @__PURE__ */ new Map(), Kt = [], mp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function $u(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vt = null;
        break;
      case "dragenter":
      case "dragleave":
        Ht = null;
        break;
      case "mouseover":
      case "mouseout":
        Qt = null;
        break;
      case "pointerover":
      case "pointerout":
        Rr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Nr.delete(t.pointerId);
    }
  }
  function _r(e, t, n, r, i, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [i] }, t !== null && (t = Br(t), t !== null && ol(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function hp(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return Vt = _r(Vt, e, t, n, r, i), !0;
      case "dragenter":
        return Ht = _r(Ht, e, t, n, r, i), !0;
      case "mouseover":
        return Qt = _r(Qt, e, t, n, r, i), !0;
      case "pointerover":
        var u = i.pointerId;
        return Rr.set(u, _r(Rr.get(u) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return u = i.pointerId, Nr.set(u, _r(Nr.get(u) || null, e, t, n, r, i)), !0;
    }
    return !1;
  }
  function Vu(e) {
    var t = Sn(e.target);
    if (t !== null) {
      var n = xn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Ou(n), t !== null) {
            e.blockedOn = t, Bu(e.priority, function() {
              Wu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Eo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Yi = r, n.target.dispatchEvent(r), Yi = null;
      } else return t = Br(n), t !== null && ol(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Hu(e, t, n) {
    Eo(e) && n.delete(t);
  }
  function vp() {
    il = !1, Vt !== null && Eo(Vt) && (Vt = null), Ht !== null && Eo(Ht) && (Ht = null), Qt !== null && Eo(Qt) && (Qt = null), Rr.forEach(Hu), Nr.forEach(Hu);
  }
  function Or(e, t) {
    e.blockedOn === t && (e.blockedOn = null, il || (il = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, vp)));
  }
  function Ar(e) {
    function t(i) {
      return Or(i, e);
    }
    if (0 < ko.length) {
      Or(ko[0], e);
      for (var n = 1; n < ko.length; n++) {
        var r = ko[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Vt !== null && Or(Vt, e), Ht !== null && Or(Ht, e), Qt !== null && Or(Qt, e), Rr.forEach(t), Nr.forEach(t), n = 0; n < Kt.length; n++) r = Kt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Kt.length && (n = Kt[0], n.blockedOn === null); ) Vu(n), n.blockedOn === null && Kt.shift();
  }
  var Wn = b.ReactCurrentBatchConfig, Co = !0;
  function gp(e, t, n, r) {
    var i = Se, u = Wn.transition;
    Wn.transition = null;
    try {
      Se = 1, ll(e, t, n, r);
    } finally {
      Se = i, Wn.transition = u;
    }
  }
  function yp(e, t, n, r) {
    var i = Se, u = Wn.transition;
    Wn.transition = null;
    try {
      Se = 4, ll(e, t, n, r);
    } finally {
      Se = i, Wn.transition = u;
    }
  }
  function ll(e, t, n, r) {
    if (Co) {
      var i = sl(e, t, n, r);
      if (i === null) Cl(e, t, r, Po, n), $u(e, r);
      else if (hp(i, e, t, n, r)) r.stopPropagation();
      else if ($u(e, r), t & 4 && -1 < mp.indexOf(e)) {
        for (; i !== null; ) {
          var u = Br(i);
          if (u !== null && bu(u), u = sl(e, t, n, r), u === null && Cl(e, t, r, Po, n), u === i) break;
          i = u;
        }
        i !== null && r.stopPropagation();
      } else Cl(e, t, r, null, n);
    }
  }
  var Po = null;
  function sl(e, t, n, r) {
    if (Po = null, e = Gi(r), e = Sn(e), e !== null) if (t = xn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Ou(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Po = e, null;
  }
  function Qu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ip()) {
          case el:
            return 1;
          case Du:
            return 4;
          case go:
          case lp:
            return 16;
          case ju:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Yt = null, ul = null, Ro = null;
  function Ku() {
    if (Ro) return Ro;
    var e, t = ul, n = t.length, r, i = "value" in Yt ? Yt.value : Yt.textContent, u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === i[u - r]; r++) ;
    return Ro = i.slice(e, 1 < r ? 1 - r : void 0);
  }
  function No(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function _o() {
    return !0;
  }
  function Yu() {
    return !1;
  }
  function tt(e) {
    function t(n, r, i, u, c) {
      this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = u, this.target = c, this.currentTarget = null;
      for (var h in e) e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(u) : u[h]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? _o : Yu, this.isPropagationStopped = Yu, this;
    }
    return H(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _o);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _o);
    }, persist: function() {
    }, isPersistent: _o }), t;
  }
  var Un = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, al = tt(Un), Tr = H({}, Un, { view: 0, detail: 0 }), wp = tt(Tr), cl, fl, Lr, Oo = H({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Lr && (Lr && e.type === "mousemove" ? (cl = e.screenX - Lr.screenX, fl = e.screenY - Lr.screenY) : fl = cl = 0, Lr = e), cl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : fl;
  } }), Gu = tt(Oo), xp = H({}, Oo, { dataTransfer: 0 }), Sp = tt(xp), kp = H({}, Tr, { relatedTarget: 0 }), dl = tt(kp), Ep = H({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cp = tt(Ep), Pp = H({}, Un, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Rp = tt(Pp), Np = H({}, Un, { data: 0 }), Xu = tt(Np), _p = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Op = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ap = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Tp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ap[e]) ? !!t[e] : !1;
  }
  function pl() {
    return Tp;
  }
  var Lp = H({}, Tr, { key: function(e) {
    if (e.key) {
      var t = _p[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = No(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Op[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pl, charCode: function(e) {
    return e.type === "keypress" ? No(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? No(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), zp = tt(Lp), Mp = H({}, Oo, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zu = tt(Mp), Dp = H({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pl }), jp = tt(Dp), Fp = H({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ip = tt(Fp), bp = H({}, Oo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wp = tt(bp), Up = [9, 13, 27, 32], ml = m && "CompositionEvent" in window, zr = null;
  m && "documentMode" in document && (zr = document.documentMode);
  var Bp = m && "TextEvent" in window && !zr, Ju = m && (!ml || zr && 8 < zr && 11 >= zr), qu = " ", ea = !1;
  function ta(e, t) {
    switch (e) {
      case "keyup":
        return Up.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function na(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Bn = !1;
  function $p(e, t) {
    switch (e) {
      case "compositionend":
        return na(t);
      case "keypress":
        return t.which !== 32 ? null : (ea = !0, qu);
      case "textInput":
        return e = t.data, e === qu && ea ? null : e;
      default:
        return null;
    }
  }
  function Vp(e, t) {
    if (Bn) return e === "compositionend" || !ml && ta(e, t) ? (e = Ku(), Ro = ul = Yt = null, Bn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ju && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Hp = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Hp[e.type] : t === "textarea";
  }
  function oa(e, t, n, r) {
    Cu(r), t = Mo(t, "onChange"), 0 < t.length && (n = new al("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Mr = null, Dr = null;
  function Qp(e) {
    ka(e, 0);
  }
  function Ao(e) {
    var t = Kn(e);
    if (po(t)) return e;
  }
  function Kp(e, t) {
    if (e === "change") return t;
  }
  var ia = !1;
  if (m) {
    var hl;
    if (m) {
      var vl = "oninput" in document;
      if (!vl) {
        var la = document.createElement("div");
        la.setAttribute("oninput", "return;"), vl = typeof la.oninput == "function";
      }
      hl = vl;
    } else hl = !1;
    ia = hl && (!document.documentMode || 9 < document.documentMode);
  }
  function sa() {
    Mr && (Mr.detachEvent("onpropertychange", ua), Dr = Mr = null);
  }
  function ua(e) {
    if (e.propertyName === "value" && Ao(Dr)) {
      var t = [];
      oa(t, Dr, e, Gi(e)), _u(Qp, t);
    }
  }
  function Yp(e, t, n) {
    e === "focusin" ? (sa(), Mr = t, Dr = n, Mr.attachEvent("onpropertychange", ua)) : e === "focusout" && sa();
  }
  function Gp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ao(Dr);
  }
  function Xp(e, t) {
    if (e === "click") return Ao(t);
  }
  function Zp(e, t) {
    if (e === "input" || e === "change") return Ao(t);
  }
  function Jp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : Jp;
  function jr(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!g.call(t, i) || !mt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function aa(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ca(e, t) {
    var n = aa(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = aa(n);
    }
  }
  function fa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function da() {
    for (var e = window, t = Tt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Tt(e.document);
    }
    return t;
  }
  function gl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function qp(e) {
    var t = da(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && fa(n.ownerDocument.documentElement, n)) {
      if (r !== null && gl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var i = n.textContent.length, u = Math.min(r.start, i);
          r = r.end === void 0 ? u : Math.min(r.end, i), !e.extend && u > r && (i = r, r = u, u = i), i = ca(n, u);
          var c = ca(
            n,
            r
          );
          i && c && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var em = m && "documentMode" in document && 11 >= document.documentMode, $n = null, yl = null, Fr = null, wl = !1;
  function pa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wl || $n == null || $n !== Tt(r) || (r = $n, "selectionStart" in r && gl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fr && jr(Fr, r) || (Fr = r, r = Mo(yl, "onSelect"), 0 < r.length && (t = new al("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $n)));
  }
  function To(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Vn = { animationend: To("Animation", "AnimationEnd"), animationiteration: To("Animation", "AnimationIteration"), animationstart: To("Animation", "AnimationStart"), transitionend: To("Transition", "TransitionEnd") }, xl = {}, ma = {};
  m && (ma = document.createElement("div").style, "AnimationEvent" in window || (delete Vn.animationend.animation, delete Vn.animationiteration.animation, delete Vn.animationstart.animation), "TransitionEvent" in window || delete Vn.transitionend.transition);
  function Lo(e) {
    if (xl[e]) return xl[e];
    if (!Vn[e]) return e;
    var t = Vn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in ma) return xl[e] = t[n];
    return e;
  }
  var ha = Lo("animationend"), va = Lo("animationiteration"), ga = Lo("animationstart"), ya = Lo("transitionend"), wa = /* @__PURE__ */ new Map(), xa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Gt(e, t) {
    wa.set(e, t), d(t, [e]);
  }
  for (var Sl = 0; Sl < xa.length; Sl++) {
    var kl = xa[Sl], tm = kl.toLowerCase(), nm = kl[0].toUpperCase() + kl.slice(1);
    Gt(tm, "on" + nm);
  }
  Gt(ha, "onAnimationEnd"), Gt(va, "onAnimationIteration"), Gt(ga, "onAnimationStart"), Gt("dblclick", "onDoubleClick"), Gt("focusin", "onFocus"), Gt("focusout", "onBlur"), Gt(ya, "onTransitionEnd"), p("onMouseEnter", ["mouseout", "mouseover"]), p("onMouseLeave", ["mouseout", "mouseover"]), p("onPointerEnter", ["pointerout", "pointerover"]), p("onPointerLeave", ["pointerout", "pointerover"]), d("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), d("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), d("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), d("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
  function Sa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, tp(r, t, void 0, e), e.currentTarget = null;
  }
  function ka(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], i = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var c = r.length - 1; 0 <= c; c--) {
          var h = r[c], v = h.instance, _ = h.currentTarget;
          if (h = h.listener, v !== u && i.isPropagationStopped()) break e;
          Sa(i, h, _), u = v;
        }
        else for (c = 0; c < r.length; c++) {
          if (h = r[c], v = h.instance, _ = h.currentTarget, h = h.listener, v !== u && i.isPropagationStopped()) break e;
          Sa(i, h, _), u = v;
        }
      }
    }
    if (vo) throw e = qi, vo = !1, qi = null, e;
  }
  function Pe(e, t) {
    var n = t[Al];
    n === void 0 && (n = t[Al] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ea(t, e, 2, !1), n.add(r));
  }
  function El(e, t, n) {
    var r = 0;
    t && (r |= 4), Ea(n, e, r, t);
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function br(e) {
    if (!e[zo]) {
      e[zo] = !0, a.forEach(function(n) {
        n !== "selectionchange" && (rm.has(n) || El(n, !1, e), El(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zo] || (t[zo] = !0, El("selectionchange", !1, t));
    }
  }
  function Ea(e, t, n, r) {
    switch (Qu(t)) {
      case 1:
        var i = gp;
        break;
      case 4:
        i = yp;
        break;
      default:
        i = ll;
    }
    n = i.bind(null, t, n, e), i = void 0, !Ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
  }
  function Cl(e, t, n, r, i) {
    var u = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var c = r.tag;
      if (c === 3 || c === 4) {
        var h = r.stateNode.containerInfo;
        if (h === i || h.nodeType === 8 && h.parentNode === i) break;
        if (c === 4) for (c = r.return; c !== null; ) {
          var v = c.tag;
          if ((v === 3 || v === 4) && (v = c.stateNode.containerInfo, v === i || v.nodeType === 8 && v.parentNode === i)) return;
          c = c.return;
        }
        for (; h !== null; ) {
          if (c = Sn(h), c === null) return;
          if (v = c.tag, v === 5 || v === 6) {
            r = u = c;
            continue e;
          }
          h = h.parentNode;
        }
      }
      r = r.return;
    }
    _u(function() {
      var _ = u, M = Gi(n), F = [];
      e: {
        var z = wa.get(e);
        if (z !== void 0) {
          var Q = al, Y = e;
          switch (e) {
            case "keypress":
              if (No(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = zp;
              break;
            case "focusin":
              Y = "focus", Q = dl;
              break;
            case "focusout":
              Y = "blur", Q = dl;
              break;
            case "beforeblur":
            case "afterblur":
              Q = dl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = Gu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Sp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = jp;
              break;
            case ha:
            case va:
            case ga:
              Q = Cp;
              break;
            case ya:
              Q = Ip;
              break;
            case "scroll":
              Q = wp;
              break;
            case "wheel":
              Q = Wp;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Rp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Zu;
          }
          var X = (t & 4) !== 0, ze = !X && e === "scroll", E = X ? z !== null ? z + "Capture" : null : z;
          X = [];
          for (var w = _, R; w !== null; ) {
            R = w;
            var I = R.stateNode;
            if (R.tag === 5 && I !== null && (R = I, E !== null && (I = Sr(w, E), I != null && X.push(Wr(w, I, R)))), ze) break;
            w = w.return;
          }
          0 < X.length && (z = new Q(z, Y, null, n, M), F.push({ event: z, listeners: X }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", z && n !== Yi && (Y = n.relatedTarget || n.fromElement) && (Sn(Y) || Y[Lt])) break e;
          if ((Q || z) && (z = M.window === M ? M : (z = M.ownerDocument) ? z.defaultView || z.parentWindow : window, Q ? (Y = n.relatedTarget || n.toElement, Q = _, Y = Y ? Sn(Y) : null, Y !== null && (ze = xn(Y), Y !== ze || Y.tag !== 5 && Y.tag !== 6) && (Y = null)) : (Q = null, Y = _), Q !== Y)) {
            if (X = Gu, I = "onMouseLeave", E = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (X = Zu, I = "onPointerLeave", E = "onPointerEnter", w = "pointer"), ze = Q == null ? z : Kn(Q), R = Y == null ? z : Kn(Y), z = new X(I, w + "leave", Q, n, M), z.target = ze, z.relatedTarget = R, I = null, Sn(M) === _ && (X = new X(E, w + "enter", Y, n, M), X.target = R, X.relatedTarget = ze, I = X), ze = I, Q && Y) t: {
              for (X = Q, E = Y, w = 0, R = X; R; R = Hn(R)) w++;
              for (R = 0, I = E; I; I = Hn(I)) R++;
              for (; 0 < w - R; ) X = Hn(X), w--;
              for (; 0 < R - w; ) E = Hn(E), R--;
              for (; w--; ) {
                if (X === E || E !== null && X === E.alternate) break t;
                X = Hn(X), E = Hn(E);
              }
              X = null;
            }
            else X = null;
            Q !== null && Ca(F, z, Q, X, !1), Y !== null && ze !== null && Ca(F, ze, Y, X, !0);
          }
        }
        e: {
          if (z = _ ? Kn(_) : window, Q = z.nodeName && z.nodeName.toLowerCase(), Q === "select" || Q === "input" && z.type === "file") var Z = Kp;
          else if (ra(z)) if (ia) Z = Zp;
          else {
            Z = Gp;
            var ee = Yp;
          }
          else (Q = z.nodeName) && Q.toLowerCase() === "input" && (z.type === "checkbox" || z.type === "radio") && (Z = Xp);
          if (Z && (Z = Z(e, _))) {
            oa(F, Z, n, M);
            break e;
          }
          ee && ee(e, z, _), e === "focusout" && (ee = z._wrapperState) && ee.controlled && z.type === "number" && $i(z, "number", z.value);
        }
        switch (ee = _ ? Kn(_) : window, e) {
          case "focusin":
            (ra(ee) || ee.contentEditable === "true") && ($n = ee, yl = _, Fr = null);
            break;
          case "focusout":
            Fr = yl = $n = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wl = !1, pa(F, n, M);
            break;
          case "selectionchange":
            if (em) break;
          case "keydown":
          case "keyup":
            pa(F, n, M);
        }
        var te;
        if (ml) e: {
          switch (e) {
            case "compositionstart":
              var re = "onCompositionStart";
              break e;
            case "compositionend":
              re = "onCompositionEnd";
              break e;
            case "compositionupdate":
              re = "onCompositionUpdate";
              break e;
          }
          re = void 0;
        }
        else Bn ? ta(e, n) && (re = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (re = "onCompositionStart");
        re && (Ju && n.locale !== "ko" && (Bn || re !== "onCompositionStart" ? re === "onCompositionEnd" && Bn && (te = Ku()) : (Yt = M, ul = "value" in Yt ? Yt.value : Yt.textContent, Bn = !0)), ee = Mo(_, re), 0 < ee.length && (re = new Xu(re, e, null, n, M), F.push({ event: re, listeners: ee }), te ? re.data = te : (te = na(n), te !== null && (re.data = te)))), (te = Bp ? $p(e, n) : Vp(e, n)) && (_ = Mo(_, "onBeforeInput"), 0 < _.length && (M = new Xu("onBeforeInput", "beforeinput", null, n, M), F.push({ event: M, listeners: _ }), M.data = te));
      }
      ka(F, t);
    });
  }
  function Wr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Mo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e, u = i.stateNode;
      i.tag === 5 && u !== null && (i = u, u = Sr(e, n), u != null && r.unshift(Wr(e, u, i)), u = Sr(e, t), u != null && r.push(Wr(e, u, i))), e = e.return;
    }
    return r;
  }
  function Hn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ca(e, t, n, r, i) {
    for (var u = t._reactName, c = []; n !== null && n !== r; ) {
      var h = n, v = h.alternate, _ = h.stateNode;
      if (v !== null && v === r) break;
      h.tag === 5 && _ !== null && (h = _, i ? (v = Sr(n, u), v != null && c.unshift(Wr(n, v, h))) : i || (v = Sr(n, u), v != null && c.push(Wr(n, v, h)))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var om = /\r\n?/g, im = /\u0000|\uFFFD/g;
  function Pa(e) {
    return (typeof e == "string" ? e : "" + e).replace(om, `
`).replace(im, "");
  }
  function Do(e, t, n) {
    if (t = Pa(t), Pa(e) !== t && n) throw Error(s(425));
  }
  function jo() {
  }
  var Pl = null, Rl = null;
  function Nl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var _l = typeof setTimeout == "function" ? setTimeout : void 0, lm = typeof clearTimeout == "function" ? clearTimeout : void 0, Ra = typeof Promise == "function" ? Promise : void 0, sm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ra < "u" ? function(e) {
    return Ra.resolve(null).then(e).catch(um);
  } : _l;
  function um(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ol(e, t) {
    var n = t, r = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$") {
        if (r === 0) {
          e.removeChild(i), Ar(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = i;
    } while (n);
    Ar(t);
  }
  function Xt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Na(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Qn = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Qn, Ur = "__reactProps$" + Qn, Lt = "__reactContainer$" + Qn, Al = "__reactEvents$" + Qn, am = "__reactListeners$" + Qn, cm = "__reactHandles$" + Qn;
  function Sn(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Lt] || n[kt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Na(e); e !== null; ) {
          if (n = e[kt]) return n;
          e = Na(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Br(e) {
    return e = e[kt] || e[Lt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Kn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Fo(e) {
    return e[Ur] || null;
  }
  var Tl = [], Yn = -1;
  function Zt(e) {
    return { current: e };
  }
  function Re(e) {
    0 > Yn || (e.current = Tl[Yn], Tl[Yn] = null, Yn--);
  }
  function Ce(e, t) {
    Yn++, Tl[Yn] = e.current, e.current = t;
  }
  var Jt = {}, Be = Zt(Jt), Ge = Zt(!1), kn = Jt;
  function Gn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, u;
    for (u in n) i[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i;
  }
  function Xe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Io() {
    Re(Ge), Re(Be);
  }
  function _a(e, t, n) {
    if (Be.current !== Jt) throw Error(s(168));
    Ce(Be, t), Ce(Ge, n);
  }
  function Oa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(s(108, ve(e) || "Unknown", i));
    return H({}, n, r);
  }
  function bo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, kn = Be.current, Ce(Be, e), Ce(Ge, Ge.current), !0;
  }
  function Aa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = Oa(e, t, kn), r.__reactInternalMemoizedMergedChildContext = e, Re(Ge), Re(Be), Ce(Be, e)) : Re(Ge), Ce(Ge, n);
  }
  var zt = null, Wo = !1, Ll = !1;
  function Ta(e) {
    zt === null ? zt = [e] : zt.push(e);
  }
  function fm(e) {
    Wo = !0, Ta(e);
  }
  function qt() {
    if (!Ll && zt !== null) {
      Ll = !0;
      var e = 0, t = Se;
      try {
        var n = zt;
        for (Se = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        zt = null, Wo = !1;
      } catch (i) {
        throw zt !== null && (zt = zt.slice(e + 1)), zu(el, qt), i;
      } finally {
        Se = t, Ll = !1;
      }
    }
    return null;
  }
  var Xn = [], Zn = 0, Uo = null, Bo = 0, st = [], ut = 0, En = null, Mt = 1, Dt = "";
  function Cn(e, t) {
    Xn[Zn++] = Bo, Xn[Zn++] = Uo, Uo = e, Bo = t;
  }
  function La(e, t, n) {
    st[ut++] = Mt, st[ut++] = Dt, st[ut++] = En, En = e;
    var r = Mt;
    e = Dt;
    var i = 32 - pt(r) - 1;
    r &= ~(1 << i), n += 1;
    var u = 32 - pt(t) + i;
    if (30 < u) {
      var c = i - i % 5;
      u = (r & (1 << c) - 1).toString(32), r >>= c, i -= c, Mt = 1 << 32 - pt(t) + i | n << i | r, Dt = u + e;
    } else Mt = 1 << u | n << i | r, Dt = e;
  }
  function zl(e) {
    e.return !== null && (Cn(e, 1), La(e, 1, 0));
  }
  function Ml(e) {
    for (; e === Uo; ) Uo = Xn[--Zn], Xn[Zn] = null, Bo = Xn[--Zn], Xn[Zn] = null;
    for (; e === En; ) En = st[--ut], st[ut] = null, Dt = st[--ut], st[ut] = null, Mt = st[--ut], st[ut] = null;
  }
  var nt = null, rt = null, _e = !1, ht = null;
  function za(e, t) {
    var n = dt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Ma(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = Xt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = En !== null ? { id: Mt, overflow: Dt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Dl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function jl(e) {
    if (_e) {
      var t = rt;
      if (t) {
        var n = t;
        if (!Ma(e, t)) {
          if (Dl(e)) throw Error(s(418));
          t = Xt(n.nextSibling);
          var r = nt;
          t && Ma(e, t) ? za(r, n) : (e.flags = e.flags & -4097 | 2, _e = !1, nt = e);
        }
      } else {
        if (Dl(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, _e = !1, nt = e;
      }
    }
  }
  function Da(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    nt = e;
  }
  function $o(e) {
    if (e !== nt) return !1;
    if (!_e) return Da(e), _e = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Nl(e.type, e.memoizedProps)), t && (t = rt)) {
      if (Dl(e)) throw ja(), Error(s(418));
      for (; t; ) za(e, t), t = Xt(t.nextSibling);
    }
    if (Da(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Xt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ja() {
    for (var e = rt; e; ) e = Xt(e.nextSibling);
  }
  function Jn() {
    rt = nt = null, _e = !1;
  }
  function Fl(e) {
    ht === null ? ht = [e] : ht.push(e);
  }
  var dm = b.ReactCurrentBatchConfig;
  function $r(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var i = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(c) {
          var h = i.refs;
          c === null ? delete h[u] : h[u] = c;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Vo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Fa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ia(e) {
    function t(E, w) {
      if (e) {
        var R = E.deletions;
        R === null ? (E.deletions = [w], E.flags |= 16) : R.push(w);
      }
    }
    function n(E, w) {
      if (!e) return null;
      for (; w !== null; ) t(E, w), w = w.sibling;
      return null;
    }
    function r(E, w) {
      for (E = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? E.set(w.key, w) : E.set(w.index, w), w = w.sibling;
      return E;
    }
    function i(E, w) {
      return E = un(E, w), E.index = 0, E.sibling = null, E;
    }
    function u(E, w, R) {
      return E.index = R, e ? (R = E.alternate, R !== null ? (R = R.index, R < w ? (E.flags |= 2, w) : R) : (E.flags |= 2, w)) : (E.flags |= 1048576, w);
    }
    function c(E) {
      return e && E.alternate === null && (E.flags |= 2), E;
    }
    function h(E, w, R, I) {
      return w === null || w.tag !== 6 ? (w = _s(R, E.mode, I), w.return = E, w) : (w = i(w, R), w.return = E, w);
    }
    function v(E, w, R, I) {
      var Z = R.type;
      return Z === G ? M(E, w, R.props.children, I, R.key) : w !== null && (w.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === fe && Fa(Z) === w.type) ? (I = i(w, R.props), I.ref = $r(E, w, R), I.return = E, I) : (I = mi(R.type, R.key, R.props, null, E.mode, I), I.ref = $r(E, w, R), I.return = E, I);
    }
    function _(E, w, R, I) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== R.containerInfo || w.stateNode.implementation !== R.implementation ? (w = Os(R, E.mode, I), w.return = E, w) : (w = i(w, R.children || []), w.return = E, w);
    }
    function M(E, w, R, I, Z) {
      return w === null || w.tag !== 7 ? (w = Ln(R, E.mode, I, Z), w.return = E, w) : (w = i(w, R), w.return = E, w);
    }
    function F(E, w, R) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = _s("" + w, E.mode, R), w.return = E, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case $:
            return R = mi(w.type, w.key, w.props, null, E.mode, R), R.ref = $r(E, null, w), R.return = E, R;
          case q:
            return w = Os(w, E.mode, R), w.return = E, w;
          case fe:
            var I = w._init;
            return F(E, I(w._payload), R);
        }
        if (yr(w) || V(w)) return w = Ln(w, E.mode, R, null), w.return = E, w;
        Vo(E, w);
      }
      return null;
    }
    function z(E, w, R, I) {
      var Z = w !== null ? w.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number") return Z !== null ? null : h(E, w, "" + R, I);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case $:
            return R.key === Z ? v(E, w, R, I) : null;
          case q:
            return R.key === Z ? _(E, w, R, I) : null;
          case fe:
            return Z = R._init, z(
              E,
              w,
              Z(R._payload),
              I
            );
        }
        if (yr(R) || V(R)) return Z !== null ? null : M(E, w, R, I, null);
        Vo(E, R);
      }
      return null;
    }
    function Q(E, w, R, I, Z) {
      if (typeof I == "string" && I !== "" || typeof I == "number") return E = E.get(R) || null, h(w, E, "" + I, Z);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case $:
            return E = E.get(I.key === null ? R : I.key) || null, v(w, E, I, Z);
          case q:
            return E = E.get(I.key === null ? R : I.key) || null, _(w, E, I, Z);
          case fe:
            var ee = I._init;
            return Q(E, w, R, ee(I._payload), Z);
        }
        if (yr(I) || V(I)) return E = E.get(R) || null, M(w, E, I, Z, null);
        Vo(w, I);
      }
      return null;
    }
    function Y(E, w, R, I) {
      for (var Z = null, ee = null, te = w, re = w = 0, be = null; te !== null && re < R.length; re++) {
        te.index > re ? (be = te, te = null) : be = te.sibling;
        var ye = z(E, te, R[re], I);
        if (ye === null) {
          te === null && (te = be);
          break;
        }
        e && te && ye.alternate === null && t(E, te), w = u(ye, w, re), ee === null ? Z = ye : ee.sibling = ye, ee = ye, te = be;
      }
      if (re === R.length) return n(E, te), _e && Cn(E, re), Z;
      if (te === null) {
        for (; re < R.length; re++) te = F(E, R[re], I), te !== null && (w = u(te, w, re), ee === null ? Z = te : ee.sibling = te, ee = te);
        return _e && Cn(E, re), Z;
      }
      for (te = r(E, te); re < R.length; re++) be = Q(te, E, re, R[re], I), be !== null && (e && be.alternate !== null && te.delete(be.key === null ? re : be.key), w = u(be, w, re), ee === null ? Z = be : ee.sibling = be, ee = be);
      return e && te.forEach(function(an) {
        return t(E, an);
      }), _e && Cn(E, re), Z;
    }
    function X(E, w, R, I) {
      var Z = V(R);
      if (typeof Z != "function") throw Error(s(150));
      if (R = Z.call(R), R == null) throw Error(s(151));
      for (var ee = Z = null, te = w, re = w = 0, be = null, ye = R.next(); te !== null && !ye.done; re++, ye = R.next()) {
        te.index > re ? (be = te, te = null) : be = te.sibling;
        var an = z(E, te, ye.value, I);
        if (an === null) {
          te === null && (te = be);
          break;
        }
        e && te && an.alternate === null && t(E, te), w = u(an, w, re), ee === null ? Z = an : ee.sibling = an, ee = an, te = be;
      }
      if (ye.done) return n(
        E,
        te
      ), _e && Cn(E, re), Z;
      if (te === null) {
        for (; !ye.done; re++, ye = R.next()) ye = F(E, ye.value, I), ye !== null && (w = u(ye, w, re), ee === null ? Z = ye : ee.sibling = ye, ee = ye);
        return _e && Cn(E, re), Z;
      }
      for (te = r(E, te); !ye.done; re++, ye = R.next()) ye = Q(te, E, re, ye.value, I), ye !== null && (e && ye.alternate !== null && te.delete(ye.key === null ? re : ye.key), w = u(ye, w, re), ee === null ? Z = ye : ee.sibling = ye, ee = ye);
      return e && te.forEach(function(Hm) {
        return t(E, Hm);
      }), _e && Cn(E, re), Z;
    }
    function ze(E, w, R, I) {
      if (typeof R == "object" && R !== null && R.type === G && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case $:
            e: {
              for (var Z = R.key, ee = w; ee !== null; ) {
                if (ee.key === Z) {
                  if (Z = R.type, Z === G) {
                    if (ee.tag === 7) {
                      n(E, ee.sibling), w = i(ee, R.props.children), w.return = E, E = w;
                      break e;
                    }
                  } else if (ee.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === fe && Fa(Z) === ee.type) {
                    n(E, ee.sibling), w = i(ee, R.props), w.ref = $r(E, ee, R), w.return = E, E = w;
                    break e;
                  }
                  n(E, ee);
                  break;
                } else t(E, ee);
                ee = ee.sibling;
              }
              R.type === G ? (w = Ln(R.props.children, E.mode, I, R.key), w.return = E, E = w) : (I = mi(R.type, R.key, R.props, null, E.mode, I), I.ref = $r(E, w, R), I.return = E, E = I);
            }
            return c(E);
          case q:
            e: {
              for (ee = R.key; w !== null; ) {
                if (w.key === ee) if (w.tag === 4 && w.stateNode.containerInfo === R.containerInfo && w.stateNode.implementation === R.implementation) {
                  n(E, w.sibling), w = i(w, R.children || []), w.return = E, E = w;
                  break e;
                } else {
                  n(E, w);
                  break;
                }
                else t(E, w);
                w = w.sibling;
              }
              w = Os(R, E.mode, I), w.return = E, E = w;
            }
            return c(E);
          case fe:
            return ee = R._init, ze(E, w, ee(R._payload), I);
        }
        if (yr(R)) return Y(E, w, R, I);
        if (V(R)) return X(E, w, R, I);
        Vo(E, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" ? (R = "" + R, w !== null && w.tag === 6 ? (n(E, w.sibling), w = i(w, R), w.return = E, E = w) : (n(E, w), w = _s(R, E.mode, I), w.return = E, E = w), c(E)) : n(E, w);
    }
    return ze;
  }
  var qn = Ia(!0), ba = Ia(!1), Ho = Zt(null), Qo = null, er = null, Il = null;
  function bl() {
    Il = er = Qo = null;
  }
  function Wl(e) {
    var t = Ho.current;
    Re(Ho), e._currentValue = t;
  }
  function Ul(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function tr(e, t) {
    Qo = e, Il = er = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ze = !0), e.firstContext = null);
  }
  function at(e) {
    var t = e._currentValue;
    if (Il !== e) if (e = { context: e, memoizedValue: t, next: null }, er === null) {
      if (Qo === null) throw Error(s(308));
      er = e, Qo.dependencies = { lanes: 0, firstContext: e };
    } else er = er.next = e;
    return t;
  }
  var Pn = null;
  function Bl(e) {
    Pn === null ? Pn = [e] : Pn.push(e);
  }
  function Wa(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Bl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, jt(e, r);
  }
  function jt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var en = !1;
  function $l(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Ua(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ft(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function tn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, he & 2) {
      var i = r.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, jt(e, n);
    }
    return i = r.interleaved, i === null ? (t.next = t, Bl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, jt(e, n);
  }
  function Ko(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  function Ba(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var c = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? i = u = c : u = u.next = c, n = n.next;
        } while (n !== null);
        u === null ? i = u = t : u = u.next = t;
      } else i = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Yo(e, t, n, r) {
    var i = e.updateQueue;
    en = !1;
    var u = i.firstBaseUpdate, c = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var v = h, _ = v.next;
      v.next = null, c === null ? u = _ : c.next = _, c = v;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, h = M.lastBaseUpdate, h !== c && (h === null ? M.firstBaseUpdate = _ : h.next = _, M.lastBaseUpdate = v));
    }
    if (u !== null) {
      var F = i.baseState;
      c = 0, M = _ = v = null, h = u;
      do {
        var z = h.lane, Q = h.eventTime;
        if ((r & z) === z) {
          M !== null && (M = M.next = {
            eventTime: Q,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });
          e: {
            var Y = e, X = h;
            switch (z = t, Q = n, X.tag) {
              case 1:
                if (Y = X.payload, typeof Y == "function") {
                  F = Y.call(Q, F, z);
                  break e;
                }
                F = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = X.payload, z = typeof Y == "function" ? Y.call(Q, F, z) : Y, z == null) break e;
                F = H({}, F, z);
                break e;
              case 2:
                en = !0;
            }
          }
          h.callback !== null && h.lane !== 0 && (e.flags |= 64, z = i.effects, z === null ? i.effects = [h] : z.push(h));
        } else Q = { eventTime: Q, lane: z, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, M === null ? (_ = M = Q, v = F) : M = M.next = Q, c |= z;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null) break;
          z = h, h = z.next, z.next = null, i.lastBaseUpdate = z, i.shared.pending = null;
        }
      } while (!0);
      if (M === null && (v = F), i.baseState = v, i.firstBaseUpdate = _, i.lastBaseUpdate = M, t = i.shared.interleaved, t !== null) {
        i = t;
        do
          c |= i.lane, i = i.next;
        while (i !== t);
      } else u === null && (i.shared.lanes = 0);
      _n |= c, e.lanes = c, e.memoizedState = F;
    }
  }
  function $a(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], i = r.callback;
      if (i !== null) {
        if (r.callback = null, r = n, typeof i != "function") throw Error(s(191, i));
        i.call(r);
      }
    }
  }
  var Vr = {}, Et = Zt(Vr), Hr = Zt(Vr), Qr = Zt(Vr);
  function Rn(e) {
    if (e === Vr) throw Error(s(174));
    return e;
  }
  function Vl(e, t) {
    switch (Ce(Qr, t), Ce(Hr, e), Ce(Et, Vr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Hi(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Hi(t, e);
    }
    Re(Et), Ce(Et, t);
  }
  function nr() {
    Re(Et), Re(Hr), Re(Qr);
  }
  function Va(e) {
    Rn(Qr.current);
    var t = Rn(Et.current), n = Hi(t, e.type);
    t !== n && (Ce(Hr, e), Ce(Et, n));
  }
  function Hl(e) {
    Hr.current === e && (Re(Et), Re(Hr));
  }
  var Oe = Zt(0);
  function Go(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ql = [];
  function Kl() {
    for (var e = 0; e < Ql.length; e++) Ql[e]._workInProgressVersionPrimary = null;
    Ql.length = 0;
  }
  var Xo = b.ReactCurrentDispatcher, Yl = b.ReactCurrentBatchConfig, Nn = 0, Ae = null, De = null, Fe = null, Zo = !1, Kr = !1, Yr = 0, pm = 0;
  function $e() {
    throw Error(s(321));
  }
  function Gl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function Xl(e, t, n, r, i, u) {
    if (Nn = u, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xo.current = e === null || e.memoizedState === null ? gm : ym, e = n(r, i), Kr) {
      u = 0;
      do {
        if (Kr = !1, Yr = 0, 25 <= u) throw Error(s(301));
        u += 1, Fe = De = null, t.updateQueue = null, Xo.current = wm, e = n(r, i);
      } while (Kr);
    }
    if (Xo.current = ei, t = De !== null && De.next !== null, Nn = 0, Fe = De = Ae = null, Zo = !1, t) throw Error(s(300));
    return e;
  }
  function Zl() {
    var e = Yr !== 0;
    return Yr = 0, e;
  }
  function Ct() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Fe === null ? Ae.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
  }
  function ct() {
    if (De === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = Fe === null ? Ae.memoizedState : Fe.next;
    if (t !== null) Fe = t, De = e;
    else {
      if (e === null) throw Error(s(310));
      De = e, e = { memoizedState: De.memoizedState, baseState: De.baseState, baseQueue: De.baseQueue, queue: De.queue, next: null }, Fe === null ? Ae.memoizedState = Fe = e : Fe = Fe.next = e;
    }
    return Fe;
  }
  function Gr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Jl(e) {
    var t = ct(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = De, i = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (i !== null) {
        var c = i.next;
        i.next = u.next, u.next = c;
      }
      r.baseQueue = i = u, n.pending = null;
    }
    if (i !== null) {
      u = i.next, r = r.baseState;
      var h = c = null, v = null, _ = u;
      do {
        var M = _.lane;
        if ((Nn & M) === M) v !== null && (v = v.next = { lane: 0, action: _.action, hasEagerState: _.hasEagerState, eagerState: _.eagerState, next: null }), r = _.hasEagerState ? _.eagerState : e(r, _.action);
        else {
          var F = {
            lane: M,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          };
          v === null ? (h = v = F, c = r) : v = v.next = F, Ae.lanes |= M, _n |= M;
        }
        _ = _.next;
      } while (_ !== null && _ !== u);
      v === null ? c = r : v.next = h, mt(r, t.memoizedState) || (Ze = !0), t.memoizedState = r, t.baseState = c, t.baseQueue = v, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      i = e;
      do
        u = i.lane, Ae.lanes |= u, _n |= u, i = i.next;
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ql(e) {
    var t = ct(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, i = n.pending, u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var c = i = i.next;
      do
        u = e(u, c.action), c = c.next;
      while (c !== i);
      mt(u, t.memoizedState) || (Ze = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function Ha() {
  }
  function Qa(e, t) {
    var n = Ae, r = ct(), i = t(), u = !mt(r.memoizedState, i);
    if (u && (r.memoizedState = i, Ze = !0), r = r.queue, es(Ga.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || Fe !== null && Fe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Xr(9, Ya.bind(null, n, r, i, t), void 0, null), Ie === null) throw Error(s(349));
      Nn & 30 || Ka(n, t, i);
    }
    return i;
  }
  function Ka(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ya(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Xa(t) && Za(e);
  }
  function Ga(e, t, n) {
    return n(function() {
      Xa(t) && Za(e);
    });
  }
  function Xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function Za(e) {
    var t = jt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function Ja(e) {
    var t = Ct();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Gr, lastRenderedState: e }, t.queue = e, e = e.dispatch = vm.bind(null, Ae, e), [t.memoizedState, e];
  }
  function Xr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ae.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ae.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function qa() {
    return ct().memoizedState;
  }
  function Jo(e, t, n, r) {
    var i = Ct();
    Ae.flags |= e, i.memoizedState = Xr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function qo(e, t, n, r) {
    var i = ct();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (De !== null) {
      var c = De.memoizedState;
      if (u = c.destroy, r !== null && Gl(r, c.deps)) {
        i.memoizedState = Xr(t, n, u, r);
        return;
      }
    }
    Ae.flags |= e, i.memoizedState = Xr(1 | t, n, u, r);
  }
  function ec(e, t) {
    return Jo(8390656, 8, e, t);
  }
  function es(e, t) {
    return qo(2048, 8, e, t);
  }
  function tc(e, t) {
    return qo(4, 2, e, t);
  }
  function nc(e, t) {
    return qo(4, 4, e, t);
  }
  function rc(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function oc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, qo(4, 4, rc.bind(null, t, e), n);
  }
  function ts() {
  }
  function ic(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function lc(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function sc(e, t, n) {
    return Nn & 21 ? (mt(n, t) || (n = Fu(), Ae.lanes |= n, _n |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ze = !0), e.memoizedState = n);
  }
  function mm(e, t) {
    var n = Se;
    Se = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Yl.transition;
    Yl.transition = {};
    try {
      e(!1), t();
    } finally {
      Se = n, Yl.transition = r;
    }
  }
  function uc() {
    return ct().memoizedState;
  }
  function hm(e, t, n) {
    var r = ln(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ac(e)) cc(t, n);
    else if (n = Wa(e, t, n, r), n !== null) {
      var i = Ye();
      wt(n, e, r, i), fc(n, t, r);
    }
  }
  function vm(e, t, n) {
    var r = ln(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ac(e)) cc(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var c = t.lastRenderedState, h = u(c, n);
        if (i.hasEagerState = !0, i.eagerState = h, mt(h, c)) {
          var v = t.interleaved;
          v === null ? (i.next = i, Bl(t)) : (i.next = v.next, v.next = i), t.interleaved = i;
          return;
        }
      } catch {
      } finally {
      }
      n = Wa(e, t, i, r), n !== null && (i = Ye(), wt(n, e, r, i), fc(n, t, r));
    }
  }
  function ac(e) {
    var t = e.alternate;
    return e === Ae || t !== null && t === Ae;
  }
  function cc(e, t) {
    Kr = Zo = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function fc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  var ei = { readContext: at, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, gm = { readContext: at, useCallback: function(e, t) {
    return Ct().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: at, useEffect: ec, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Jo(
      4194308,
      4,
      rc.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Jo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Jo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Ct();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Ct();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = hm.bind(null, Ae, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Ct();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ja, useDebugValue: ts, useDeferredValue: function(e) {
    return Ct().memoizedState = e;
  }, useTransition: function() {
    var e = Ja(!1), t = e[0];
    return e = mm.bind(null, e[1]), Ct().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ae, i = Ct();
    if (_e) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Ie === null) throw Error(s(349));
      Nn & 30 || Ka(r, t, n);
    }
    i.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return i.queue = u, ec(Ga.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, Xr(9, Ya.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Ct(), t = Ie.identifierPrefix;
    if (_e) {
      var n = Dt, r = Mt;
      n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = pm++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, ym = {
    readContext: at,
    useCallback: ic,
    useContext: at,
    useEffect: es,
    useImperativeHandle: oc,
    useInsertionEffect: tc,
    useLayoutEffect: nc,
    useMemo: lc,
    useReducer: Jl,
    useRef: qa,
    useState: function() {
      return Jl(Gr);
    },
    useDebugValue: ts,
    useDeferredValue: function(e) {
      var t = ct();
      return sc(t, De.memoizedState, e);
    },
    useTransition: function() {
      var e = Jl(Gr)[0], t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Ha,
    useSyncExternalStore: Qa,
    useId: uc,
    unstable_isNewReconciler: !1
  }, wm = { readContext: at, useCallback: ic, useContext: at, useEffect: es, useImperativeHandle: oc, useInsertionEffect: tc, useLayoutEffect: nc, useMemo: lc, useReducer: ql, useRef: qa, useState: function() {
    return ql(Gr);
  }, useDebugValue: ts, useDeferredValue: function(e) {
    var t = ct();
    return De === null ? t.memoizedState = e : sc(t, De.memoizedState, e);
  }, useTransition: function() {
    var e = ql(Gr)[0], t = ct().memoizedState;
    return [e, t];
  }, useMutableSource: Ha, useSyncExternalStore: Qa, useId: uc, unstable_isNewReconciler: !1 };
  function vt(e, t) {
    if (e && e.defaultProps) {
      t = H({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ns(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ti = { isMounted: function(e) {
    return (e = e._reactInternals) ? xn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), i = ln(e), u = Ft(r, i);
    u.payload = t, n != null && (u.callback = n), t = tn(e, u, i), t !== null && (wt(t, e, i, r), Ko(t, e, i));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ye(), i = ln(e), u = Ft(r, i);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = tn(e, u, i), t !== null && (wt(t, e, i, r), Ko(t, e, i));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ye(), r = ln(e), i = Ft(n, r);
    i.tag = 2, t != null && (i.callback = t), t = tn(e, i, r), t !== null && (wt(t, e, r, n), Ko(t, e, r));
  } };
  function dc(e, t, n, r, i, u, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, c) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, r) || !jr(i, u) : !0;
  }
  function pc(e, t, n) {
    var r = !1, i = Jt, u = t.contextType;
    return typeof u == "object" && u !== null ? u = at(u) : (i = Xe(t) ? kn : Be.current, r = t.contextTypes, u = (r = r != null) ? Gn(e, i) : Jt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ti, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function mc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ti.enqueueReplaceState(t, t.state, null);
  }
  function rs(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, $l(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? i.context = at(u) : (u = Xe(t) ? kn : Be.current, i.context = Gn(e, u)), i.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (ns(e, t, u, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && ti.enqueueReplaceState(i, i.state, null), Yo(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function rr(e, t) {
    try {
      var n = "", r = t;
      do
        n += de(r), r = r.return;
      while (r);
      var i = n;
    } catch (u) {
      i = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function os(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function is(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var xm = typeof WeakMap == "function" ? WeakMap : Map;
  function hc(e, t, n) {
    n = Ft(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ui || (ui = !0, xs = r), is(e, t);
    }, n;
  }
  function vc(e, t, n) {
    n = Ft(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      n.payload = function() {
        return r(i);
      }, n.callback = function() {
        is(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      is(e, t), typeof r != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
    }), n;
  }
  function gc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new xm();
      var i = /* @__PURE__ */ new Set();
      r.set(t, i);
    } else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
    i.has(n) || (i.add(n), e = Mm.bind(null, e, t, n), t.then(e, e));
  }
  function yc(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function wc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ft(-1, 1), t.tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
  }
  var Sm = b.ReactCurrentOwner, Ze = !1;
  function Ke(e, t, n, r) {
    t.child = e === null ? ba(t, null, n, r) : qn(t, e.child, n, r);
  }
  function xc(e, t, n, r, i) {
    n = n.render;
    var u = t.ref;
    return tr(t, i), r = Xl(e, t, n, r, u, i), n = Zl(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, It(e, t, i)) : (_e && n && zl(t), t.flags |= 1, Ke(e, t, r, i), t.child);
  }
  function Sc(e, t, n, r, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Ns(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, kc(e, t, u, r, i)) : (e = mi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !(e.lanes & i)) {
      var c = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : jr, n(c, r) && e.ref === t.ref) return It(e, t, i);
    }
    return t.flags |= 1, e = un(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function kc(e, t, n, r, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (jr(u, r) && e.ref === t.ref) if (Ze = !1, t.pendingProps = r = u, (e.lanes & i) !== 0) e.flags & 131072 && (Ze = !0);
      else return t.lanes = e.lanes, It(e, t, i);
    }
    return ls(e, t, n, r, i);
  }
  function Ec(e, t, n) {
    var r = t.pendingProps, i = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ce(ir, ot), ot |= n;
    else {
      if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ce(ir, ot), ot |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, Ce(ir, ot), ot |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, Ce(ir, ot), ot |= r;
    return Ke(e, t, i, n), t.child;
  }
  function Cc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ls(e, t, n, r, i) {
    var u = Xe(n) ? kn : Be.current;
    return u = Gn(t, u), tr(t, i), n = Xl(e, t, n, r, u, i), r = Zl(), e !== null && !Ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, It(e, t, i)) : (_e && r && zl(t), t.flags |= 1, Ke(e, t, n, i), t.child);
  }
  function Pc(e, t, n, r, i) {
    if (Xe(n)) {
      var u = !0;
      bo(t);
    } else u = !1;
    if (tr(t, i), t.stateNode === null) ri(e, t), pc(t, n, r), rs(t, n, r, i), r = !0;
    else if (e === null) {
      var c = t.stateNode, h = t.memoizedProps;
      c.props = h;
      var v = c.context, _ = n.contextType;
      typeof _ == "object" && _ !== null ? _ = at(_) : (_ = Xe(n) ? kn : Be.current, _ = Gn(t, _));
      var M = n.getDerivedStateFromProps, F = typeof M == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      F || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== r || v !== _) && mc(t, c, r, _), en = !1;
      var z = t.memoizedState;
      c.state = z, Yo(t, r, c, i), v = t.memoizedState, h !== r || z !== v || Ge.current || en ? (typeof M == "function" && (ns(t, n, M, r), v = t.memoizedState), (h = en || dc(t, n, h, r, z, v, _)) ? (F || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = v), c.props = r, c.state = v, c.context = _, r = h) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      c = t.stateNode, Ua(e, t), h = t.memoizedProps, _ = t.type === t.elementType ? h : vt(t.type, h), c.props = _, F = t.pendingProps, z = c.context, v = n.contextType, typeof v == "object" && v !== null ? v = at(v) : (v = Xe(n) ? kn : Be.current, v = Gn(t, v));
      var Q = n.getDerivedStateFromProps;
      (M = typeof Q == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (h !== F || z !== v) && mc(t, c, r, v), en = !1, z = t.memoizedState, c.state = z, Yo(t, r, c, i);
      var Y = t.memoizedState;
      h !== F || z !== Y || Ge.current || en ? (typeof Q == "function" && (ns(t, n, Q, r), Y = t.memoizedState), (_ = en || dc(t, n, _, r, z, Y, v) || !1) ? (M || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(r, Y, v), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(r, Y, v)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Y), c.props = r, c.state = Y, c.context = v, r = _) : (typeof c.componentDidUpdate != "function" || h === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || h === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ss(e, t, n, r, u, i);
  }
  function ss(e, t, n, r, i, u) {
    Cc(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return i && Aa(t, n, !1), It(e, t, u);
    r = t.stateNode, Sm.current = t;
    var h = c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && c ? (t.child = qn(t, e.child, null, u), t.child = qn(t, null, h, u)) : Ke(e, t, h, u), t.memoizedState = r.state, i && Aa(t, n, !0), t.child;
  }
  function Rc(e) {
    var t = e.stateNode;
    t.pendingContext ? _a(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _a(e, t.context, !1), Vl(e, t.containerInfo);
  }
  function Nc(e, t, n, r, i) {
    return Jn(), Fl(i), t.flags |= 256, Ke(e, t, n, r), t.child;
  }
  var us = { dehydrated: null, treeContext: null, retryLane: 0 };
  function as(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function _c(e, t, n) {
    var r = t.pendingProps, i = Oe.current, u = !1, c = (t.flags & 128) !== 0, h;
    if ((h = c) || (h = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), h ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Ce(Oe, i & 1), e === null)
      return jl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (c = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, c = { mode: "hidden", children: c }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = c) : u = hi(c, r, 0, null), e = Ln(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = as(n), t.memoizedState = us, e) : cs(t, c));
    if (i = e.memoizedState, i !== null && (h = i.dehydrated, h !== null)) return km(e, t, c, r, h, i, n);
    if (u) {
      u = r.fallback, c = t.mode, i = e.child, h = i.sibling;
      var v = { mode: "hidden", children: r.children };
      return !(c & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = v, t.deletions = null) : (r = un(i, v), r.subtreeFlags = i.subtreeFlags & 14680064), h !== null ? u = un(h, u) : (u = Ln(u, c, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, c = e.child.memoizedState, c = c === null ? as(n) : { baseLanes: c.baseLanes | n, cachePool: null, transitions: c.transitions }, u.memoizedState = c, u.childLanes = e.childLanes & ~n, t.memoizedState = us, r;
    }
    return u = e.child, e = u.sibling, r = un(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function cs(e, t) {
    return t = hi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ni(e, t, n, r) {
    return r !== null && Fl(r), qn(t, e.child, null, n), e = cs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function km(e, t, n, r, i, u, c) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = os(Error(s(422))), ni(e, t, c, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, i = t.mode, r = hi({ mode: "visible", children: r.children }, i, 0, null), u = Ln(u, i, c, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && qn(t, e.child, null, c), t.child.memoizedState = as(c), t.memoizedState = us, u);
    if (!(t.mode & 1)) return ni(e, t, c, null);
    if (i.data === "$!") {
      if (r = i.nextSibling && i.nextSibling.dataset, r) var h = r.dgst;
      return r = h, u = Error(s(419)), r = os(u, r, void 0), ni(e, t, c, r);
    }
    if (h = (c & e.childLanes) !== 0, Ze || h) {
      if (r = Ie, r !== null) {
        switch (c & -c) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        i = i & (r.suspendedLanes | c) ? 0 : i, i !== 0 && i !== u.retryLane && (u.retryLane = i, jt(e, i), wt(r, e, i, -1));
      }
      return Rs(), r = os(Error(s(421))), ni(e, t, c, r);
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Dm.bind(null, e), i._reactRetry = t, null) : (e = u.treeContext, rt = Xt(i.nextSibling), nt = t, _e = !0, ht = null, e !== null && (st[ut++] = Mt, st[ut++] = Dt, st[ut++] = En, Mt = e.id, Dt = e.overflow, En = t), t = cs(t, r.children), t.flags |= 4096, t);
  }
  function Oc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ul(e.return, t, n);
  }
  function fs(e, t, n, r, i) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = i);
  }
  function Ac(e, t, n) {
    var r = t.pendingProps, i = r.revealOrder, u = r.tail;
    if (Ke(e, t, r.children, n), r = Oe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Oc(e, n, t);
        else if (e.tag === 19) Oc(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Ce(Oe, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) e = n.alternate, e !== null && Go(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), fs(t, !1, i, n, u);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && Go(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        fs(t, !0, n, null, u);
        break;
      case "together":
        fs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ri(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function It(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _n |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = un(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Em(e, t, n) {
    switch (t.tag) {
      case 3:
        Rc(t), Jn();
        break;
      case 5:
        Va(t);
        break;
      case 1:
        Xe(t.type) && bo(t);
        break;
      case 4:
        Vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, i = t.memoizedProps.value;
        Ce(Ho, r._currentValue), r._currentValue = i;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Ce(Oe, Oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? _c(e, t, n) : (Ce(Oe, Oe.current & 1), e = It(e, t, n), e !== null ? e.sibling : null);
        Ce(Oe, Oe.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Ac(e, t, n);
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ce(Oe, Oe.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ec(e, t, n);
    }
    return It(e, t, n);
  }
  var Tc, ds, Lc, zc;
  Tc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, ds = function() {
  }, Lc = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      e = t.stateNode, Rn(Et.current);
      var u = null;
      switch (n) {
        case "input":
          i = Ui(e, i), r = Ui(e, r), u = [];
          break;
        case "select":
          i = H({}, i, { value: void 0 }), r = H({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          i = Vi(e, i), r = Vi(e, r), u = [];
          break;
        default:
          typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = jo);
      }
      Qi(n, r);
      var c;
      n = null;
      for (_ in i) if (!r.hasOwnProperty(_) && i.hasOwnProperty(_) && i[_] != null) if (_ === "style") {
        var h = i[_];
        for (c in h) h.hasOwnProperty(c) && (n || (n = {}), n[c] = "");
      } else _ !== "dangerouslySetInnerHTML" && _ !== "children" && _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && _ !== "autoFocus" && (f.hasOwnProperty(_) ? u || (u = []) : (u = u || []).push(_, null));
      for (_ in r) {
        var v = r[_];
        if (h = i?.[_], r.hasOwnProperty(_) && v !== h && (v != null || h != null)) if (_ === "style") if (h) {
          for (c in h) !h.hasOwnProperty(c) || v && v.hasOwnProperty(c) || (n || (n = {}), n[c] = "");
          for (c in v) v.hasOwnProperty(c) && h[c] !== v[c] && (n || (n = {}), n[c] = v[c]);
        } else n || (u || (u = []), u.push(
          _,
          n
        )), n = v;
        else _ === "dangerouslySetInnerHTML" ? (v = v ? v.__html : void 0, h = h ? h.__html : void 0, v != null && h !== v && (u = u || []).push(_, v)) : _ === "children" ? typeof v != "string" && typeof v != "number" || (u = u || []).push(_, "" + v) : _ !== "suppressContentEditableWarning" && _ !== "suppressHydrationWarning" && (f.hasOwnProperty(_) ? (v != null && _ === "onScroll" && Pe("scroll", e), u || h === v || (u = [])) : (u = u || []).push(_, v));
      }
      n && (u = u || []).push("style", n);
      var _ = u;
      (t.updateQueue = _) && (t.flags |= 4);
    }
  }, zc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Zr(e, t) {
    if (!_e) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else for (i = e.child; i !== null; ) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Cm(e, t, n) {
    var r = t.pendingProps;
    switch (Ml(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Xe(t.type) && Io(), Ve(t), null;
      case 3:
        return r = t.stateNode, nr(), Re(Ge), Re(Be), Kl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && ($o(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ht !== null && (Es(ht), ht = null))), ds(e, t), Ve(t), null;
      case 5:
        Hl(t);
        var i = Rn(Qr.current);
        if (n = t.type, e !== null && t.stateNode != null) Lc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ve(t), null;
          }
          if (e = Rn(Et.current), $o(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[kt] = t, r[Ur] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Pe("cancel", r), Pe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pe("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ir.length; i++) Pe(Ir[i], r);
                break;
              case "source":
                Pe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Pe(
                  "error",
                  r
                ), Pe("load", r);
                break;
              case "details":
                Pe("toggle", r);
                break;
              case "input":
                pu(r, u), Pe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, Pe("invalid", r);
                break;
              case "textarea":
                vu(r, u), Pe("invalid", r);
            }
            Qi(n, u), i = null;
            for (var c in u) if (u.hasOwnProperty(c)) {
              var h = u[c];
              c === "children" ? typeof h == "string" ? r.textContent !== h && (u.suppressHydrationWarning !== !0 && Do(r.textContent, h, e), i = ["children", h]) : typeof h == "number" && r.textContent !== "" + h && (u.suppressHydrationWarning !== !0 && Do(
                r.textContent,
                h,
                e
              ), i = ["children", "" + h]) : f.hasOwnProperty(c) && h != null && c === "onScroll" && Pe("scroll", r);
            }
            switch (n) {
              case "input":
                jn(r), hu(r, u, !0);
                break;
              case "textarea":
                jn(r), yu(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = jo);
            }
            r = i, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            c = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = wu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = c.createElement(n, { is: r.is }) : (e = c.createElement(n), n === "select" && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[kt] = t, e[Ur] = r, Tc(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (c = Ki(n, r), n) {
                case "dialog":
                  Pe("cancel", e), Pe("close", e), i = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pe("load", e), i = r;
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < Ir.length; i++) Pe(Ir[i], e);
                  i = r;
                  break;
                case "source":
                  Pe("error", e), i = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Pe(
                    "error",
                    e
                  ), Pe("load", e), i = r;
                  break;
                case "details":
                  Pe("toggle", e), i = r;
                  break;
                case "input":
                  pu(e, r), i = Ui(e, r), Pe("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, i = H({}, r, { value: void 0 }), Pe("invalid", e);
                  break;
                case "textarea":
                  vu(e, r), i = Vi(e, r), Pe("invalid", e);
                  break;
                default:
                  i = r;
              }
              Qi(n, i), h = i;
              for (u in h) if (h.hasOwnProperty(u)) {
                var v = h[u];
                u === "style" ? ku(e, v) : u === "dangerouslySetInnerHTML" ? (v = v ? v.__html : void 0, v != null && xu(e, v)) : u === "children" ? typeof v == "string" ? (n !== "textarea" || v !== "") && wr(e, v) : typeof v == "number" && wr(e, "" + v) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (f.hasOwnProperty(u) ? v != null && u === "onScroll" && Pe("scroll", e) : v != null && B(e, u, v, c));
              }
              switch (n) {
                case "input":
                  jn(e), hu(e, r, !1);
                  break;
                case "textarea":
                  jn(e), yu(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ge(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? Fn(e, !!r.multiple, u, !1) : r.defaultValue != null && Fn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = jo);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null) zc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = Rn(Qr.current), Rn(Et.current), $o(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (u = r.nodeValue !== n) && (e = nt, e !== null)) switch (e.tag) {
              case 3:
                Do(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Do(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
        }
        return Ve(t), null;
      case 13:
        if (Re(Oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (_e && rt !== null && t.mode & 1 && !(t.flags & 128)) ja(), Jn(), t.flags |= 98560, u = !1;
          else if (u = $o(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[kt] = t;
            } else Jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ve(t), u = !1;
          } else ht !== null && (Es(ht), ht = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Oe.current & 1 ? je === 0 && (je = 3) : Rs())), t.updateQueue !== null && (t.flags |= 4), Ve(t), null);
      case 4:
        return nr(), ds(e, t), e === null && br(t.stateNode.containerInfo), Ve(t), null;
      case 10:
        return Wl(t.type._context), Ve(t), null;
      case 17:
        return Xe(t.type) && Io(), Ve(t), null;
      case 19:
        if (Re(Oe), u = t.memoizedState, u === null) return Ve(t), null;
        if (r = (t.flags & 128) !== 0, c = u.rendering, c === null) if (r) Zr(u, !1);
        else {
          if (je !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (c = Go(e), c !== null) {
              for (t.flags |= 128, Zr(u, !1), r = c.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, c = u.alternate, c === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = c.childLanes, u.lanes = c.lanes, u.child = c.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = c.memoizedProps, u.memoizedState = c.memoizedState, u.updateQueue = c.updateQueue, u.type = c.type, e = c.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return Ce(Oe, Oe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Le() > lr && (t.flags |= 128, r = !0, Zr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Go(c), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Zr(u, !0), u.tail === null && u.tailMode === "hidden" && !c.alternate && !_e) return Ve(t), null;
          } else 2 * Le() - u.renderingStartTime > lr && n !== 1073741824 && (t.flags |= 128, r = !0, Zr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (c.sibling = t.child, t.child = c) : (n = u.last, n !== null ? n.sibling = c : t.child = c, u.last = c);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Le(), t.sibling = null, n = Oe.current, Ce(Oe, r ? n & 1 | 2 : n & 1), t) : (Ve(t), null);
      case 22:
      case 23:
        return Ps(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ot & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ve(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Pm(e, t) {
    switch (Ml(t), t.tag) {
      case 1:
        return Xe(t.type) && Io(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return nr(), Re(Ge), Re(Be), Kl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Hl(t), null;
      case 13:
        if (Re(Oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Jn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Re(Oe), null;
      case 4:
        return nr(), null;
      case 10:
        return Wl(t.type._context), null;
      case 22:
      case 23:
        return Ps(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var oi = !1, He = !1, Rm = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function or(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Te(e, t, r);
    }
    else n.current = null;
  }
  function ps(e, t, n) {
    try {
      n();
    } catch (r) {
      Te(e, t, r);
    }
  }
  var Mc = !1;
  function Nm(e, t) {
    if (Pl = Co, e = da(), gl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var c = 0, h = -1, v = -1, _ = 0, M = 0, F = e, z = null;
          t: for (; ; ) {
            for (var Q; F !== n || i !== 0 && F.nodeType !== 3 || (h = c + i), F !== u || r !== 0 && F.nodeType !== 3 || (v = c + r), F.nodeType === 3 && (c += F.nodeValue.length), (Q = F.firstChild) !== null; )
              z = F, F = Q;
            for (; ; ) {
              if (F === e) break t;
              if (z === n && ++_ === i && (h = c), z === u && ++M === r && (v = c), (Q = F.nextSibling) !== null) break;
              F = z, z = F.parentNode;
            }
            F = Q;
          }
          n = h === -1 || v === -1 ? null : { start: h, end: v };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Rl = { focusedElem: e, selectionRange: n }, Co = !1, K = t; K !== null; ) if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
    else for (; K !== null; ) {
      t = K;
      try {
        var Y = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Y !== null) {
              var X = Y.memoizedProps, ze = Y.memoizedState, E = t.stateNode, w = E.getSnapshotBeforeUpdate(t.elementType === t.type ? X : vt(t.type, X), ze);
              E.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var R = t.stateNode.containerInfo;
            R.nodeType === 1 ? R.textContent = "" : R.nodeType === 9 && R.documentElement && R.removeChild(R.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (I) {
        Te(t, t.return, I);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, K = e;
        break;
      }
      K = t.return;
    }
    return Y = Mc, Mc = !1, Y;
  }
  function Jr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var i = r = r.next;
      do {
        if ((i.tag & e) === e) {
          var u = i.destroy;
          i.destroy = void 0, u !== void 0 && ps(t, n, u);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function ii(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ms(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Dc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Dc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[Ur], delete t[Al], delete t[am], delete t[cm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function jc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Fc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || jc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function hs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = jo));
    else if (r !== 4 && (e = e.child, e !== null)) for (hs(e, t, n), e = e.sibling; e !== null; ) hs(e, t, n), e = e.sibling;
  }
  function vs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (vs(e, t, n), e = e.sibling; e !== null; ) vs(e, t, n), e = e.sibling;
  }
  var We = null, gt = !1;
  function nn(e, t, n) {
    for (n = n.child; n !== null; ) Ic(e, t, n), n = n.sibling;
  }
  function Ic(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function") try {
      St.onCommitFiberUnmount(yo, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        He || or(n, t);
      case 6:
        var r = We, i = gt;
        We = null, nn(e, t, n), We = r, gt = i, We !== null && (gt ? (e = We, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : We.removeChild(n.stateNode));
        break;
      case 18:
        We !== null && (gt ? (e = We, n = n.stateNode, e.nodeType === 8 ? Ol(e.parentNode, n) : e.nodeType === 1 && Ol(e, n), Ar(e)) : Ol(We, n.stateNode));
        break;
      case 4:
        r = We, i = gt, We = n.stateNode.containerInfo, gt = !0, nn(e, t, n), We = r, gt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!He && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          i = r = r.next;
          do {
            var u = i, c = u.destroy;
            u = u.tag, c !== void 0 && (u & 2 || u & 4) && ps(n, t, c), i = i.next;
          } while (i !== r);
        }
        nn(e, t, n);
        break;
      case 1:
        if (!He && (or(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (h) {
          Te(n, t, h);
        }
        nn(e, t, n);
        break;
      case 21:
        nn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (He = (r = He) || n.memoizedState !== null, nn(e, t, n), He = r) : nn(e, t, n);
        break;
      default:
        nn(e, t, n);
    }
  }
  function bc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Rm()), t.forEach(function(r) {
        var i = jm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var u = e, c = t, h = c;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 5:
              We = h.stateNode, gt = !1;
              break e;
            case 3:
              We = h.stateNode.containerInfo, gt = !0;
              break e;
            case 4:
              We = h.stateNode.containerInfo, gt = !0;
              break e;
          }
          h = h.return;
        }
        if (We === null) throw Error(s(160));
        Ic(u, c, i), We = null, gt = !1;
        var v = i.alternate;
        v !== null && (v.return = null), i.return = null;
      } catch (_) {
        Te(i, t, _);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Wc(t, e), t = t.sibling;
  }
  function Wc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (yt(t, e), Pt(e), r & 4) {
          try {
            Jr(3, e, e.return), ii(3, e);
          } catch (X) {
            Te(e, e.return, X);
          }
          try {
            Jr(5, e, e.return);
          } catch (X) {
            Te(e, e.return, X);
          }
        }
        break;
      case 1:
        yt(t, e), Pt(e), r & 512 && n !== null && or(n, n.return);
        break;
      case 5:
        if (yt(t, e), Pt(e), r & 512 && n !== null && or(n, n.return), e.flags & 32) {
          var i = e.stateNode;
          try {
            wr(i, "");
          } catch (X) {
            Te(e, e.return, X);
          }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
          var u = e.memoizedProps, c = n !== null ? n.memoizedProps : u, h = e.type, v = e.updateQueue;
          if (e.updateQueue = null, v !== null) try {
            h === "input" && u.type === "radio" && u.name != null && mu(i, u), Ki(h, c);
            var _ = Ki(h, u);
            for (c = 0; c < v.length; c += 2) {
              var M = v[c], F = v[c + 1];
              M === "style" ? ku(i, F) : M === "dangerouslySetInnerHTML" ? xu(i, F) : M === "children" ? wr(i, F) : B(i, M, F, _);
            }
            switch (h) {
              case "input":
                Bi(i, u);
                break;
              case "textarea":
                gu(i, u);
                break;
              case "select":
                var z = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!u.multiple;
                var Q = u.value;
                Q != null ? Fn(i, !!u.multiple, Q, !1) : z !== !!u.multiple && (u.defaultValue != null ? Fn(
                  i,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Fn(i, !!u.multiple, u.multiple ? [] : "", !1));
            }
            i[Ur] = u;
          } catch (X) {
            Te(e, e.return, X);
          }
        }
        break;
      case 6:
        if (yt(t, e), Pt(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          i = e.stateNode, u = e.memoizedProps;
          try {
            i.nodeValue = u;
          } catch (X) {
            Te(e, e.return, X);
          }
        }
        break;
      case 3:
        if (yt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Ar(t.containerInfo);
        } catch (X) {
          Te(e, e.return, X);
        }
        break;
      case 4:
        yt(t, e), Pt(e);
        break;
      case 13:
        yt(t, e), Pt(e), i = e.child, i.flags & 8192 && (u = i.memoizedState !== null, i.stateNode.isHidden = u, !u || i.alternate !== null && i.alternate.memoizedState !== null || (ws = Le())), r & 4 && bc(e);
        break;
      case 22:
        if (M = n !== null && n.memoizedState !== null, e.mode & 1 ? (He = (_ = He) || M, yt(t, e), He = _) : yt(t, e), Pt(e), r & 8192) {
          if (_ = e.memoizedState !== null, (e.stateNode.isHidden = _) && !M && e.mode & 1) for (K = e, M = e.child; M !== null; ) {
            for (F = K = M; K !== null; ) {
              switch (z = K, Q = z.child, z.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jr(4, z, z.return);
                  break;
                case 1:
                  or(z, z.return);
                  var Y = z.stateNode;
                  if (typeof Y.componentWillUnmount == "function") {
                    r = z, n = z.return;
                    try {
                      t = r, Y.props = t.memoizedProps, Y.state = t.memoizedState, Y.componentWillUnmount();
                    } catch (X) {
                      Te(r, n, X);
                    }
                  }
                  break;
                case 5:
                  or(z, z.return);
                  break;
                case 22:
                  if (z.memoizedState !== null) {
                    $c(F);
                    continue;
                  }
              }
              Q !== null ? (Q.return = z, K = Q) : $c(F);
            }
            M = M.sibling;
          }
          e: for (M = null, F = e; ; ) {
            if (F.tag === 5) {
              if (M === null) {
                M = F;
                try {
                  i = F.stateNode, _ ? (u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (h = F.stateNode, v = F.memoizedProps.style, c = v != null && v.hasOwnProperty("display") ? v.display : null, h.style.display = Su("display", c));
                } catch (X) {
                  Te(e, e.return, X);
                }
              }
            } else if (F.tag === 6) {
              if (M === null) try {
                F.stateNode.nodeValue = _ ? "" : F.memoizedProps;
              } catch (X) {
                Te(e, e.return, X);
              }
            } else if ((F.tag !== 22 && F.tag !== 23 || F.memoizedState === null || F === e) && F.child !== null) {
              F.child.return = F, F = F.child;
              continue;
            }
            if (F === e) break e;
            for (; F.sibling === null; ) {
              if (F.return === null || F.return === e) break e;
              M === F && (M = null), F = F.return;
            }
            M === F && (M = null), F.sibling.return = F.return, F = F.sibling;
          }
        }
        break;
      case 19:
        yt(t, e), Pt(e), r & 4 && bc(e);
        break;
      case 21:
        break;
      default:
        yt(
          t,
          e
        ), Pt(e);
    }
  }
  function Pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (jc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (wr(i, ""), r.flags &= -33);
            var u = Fc(e);
            vs(e, u, i);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo, h = Fc(e);
            hs(e, h, c);
            break;
          default:
            throw Error(s(161));
        }
      } catch (v) {
        Te(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function _m(e, t, n) {
    K = e, Uc(e);
  }
  function Uc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var i = K, u = i.child;
      if (i.tag === 22 && r) {
        var c = i.memoizedState !== null || oi;
        if (!c) {
          var h = i.alternate, v = h !== null && h.memoizedState !== null || He;
          h = oi;
          var _ = He;
          if (oi = c, (He = v) && !_) for (K = i; K !== null; ) c = K, v = c.child, c.tag === 22 && c.memoizedState !== null ? Vc(i) : v !== null ? (v.return = c, K = v) : Vc(i);
          for (; u !== null; ) K = u, Uc(u), u = u.sibling;
          K = i, oi = h, He = _;
        }
        Bc(e);
      } else i.subtreeFlags & 8772 && u !== null ? (u.return = i, K = u) : Bc(e);
    }
  }
  function Bc(e) {
    for (; K !== null; ) {
      var t = K;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || ii(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !He) if (n === null) r.componentDidMount();
              else {
                var i = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && $a(t, u, r);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                $a(t, c, n);
              }
              break;
            case 5:
              var h = t.stateNode;
              if (n === null && t.flags & 4) {
                n = h;
                var v = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    v.autoFocus && n.focus();
                    break;
                  case "img":
                    v.src && (n.src = v.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var _ = t.alternate;
                if (_ !== null) {
                  var M = _.memoizedState;
                  if (M !== null) {
                    var F = M.dehydrated;
                    F !== null && Ar(F);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(s(163));
          }
          He || t.flags & 512 && ms(t);
        } catch (z) {
          Te(t, t.return, z);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function $c(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function Vc(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              ii(4, t);
            } catch (v) {
              Te(t, n, v);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (v) {
                Te(t, i, v);
              }
            }
            var u = t.return;
            try {
              ms(t);
            } catch (v) {
              Te(t, u, v);
            }
            break;
          case 5:
            var c = t.return;
            try {
              ms(t);
            } catch (v) {
              Te(t, c, v);
            }
        }
      } catch (v) {
        Te(t, t.return, v);
      }
      if (t === e) {
        K = null;
        break;
      }
      var h = t.sibling;
      if (h !== null) {
        h.return = t.return, K = h;
        break;
      }
      K = t.return;
    }
  }
  var Om = Math.ceil, li = b.ReactCurrentDispatcher, gs = b.ReactCurrentOwner, ft = b.ReactCurrentBatchConfig, he = 0, Ie = null, Me = null, Ue = 0, ot = 0, ir = Zt(0), je = 0, qr = null, _n = 0, si = 0, ys = 0, eo = null, Je = null, ws = 0, lr = 1 / 0, bt = null, ui = !1, xs = null, rn = null, ai = !1, on = null, ci = 0, to = 0, Ss = null, fi = -1, di = 0;
  function Ye() {
    return he & 6 ? Le() : fi !== -1 ? fi : fi = Le();
  }
  function ln(e) {
    return e.mode & 1 ? he & 2 && Ue !== 0 ? Ue & -Ue : dm.transition !== null ? (di === 0 && (di = Fu()), di) : (e = Se, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qu(e.type)), e) : 1;
  }
  function wt(e, t, n, r) {
    if (50 < to) throw to = 0, Ss = null, Error(s(185));
    Pr(e, n, r), (!(he & 2) || e !== Ie) && (e === Ie && (!(he & 2) && (si |= n), je === 4 && sn(e, Ue)), qe(e, r), n === 1 && he === 0 && !(t.mode & 1) && (lr = Le() + 500, Wo && qt()));
  }
  function qe(e, t) {
    var n = e.callbackNode;
    dp(e, t);
    var r = So(e, e === Ie ? Ue : 0);
    if (r === 0) n !== null && Mu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Mu(n), t === 1) e.tag === 0 ? fm(Qc.bind(null, e)) : Ta(Qc.bind(null, e)), sm(function() {
        !(he & 6) && qt();
      }), n = null;
      else {
        switch (Iu(r)) {
          case 1:
            n = el;
            break;
          case 4:
            n = Du;
            break;
          case 16:
            n = go;
            break;
          case 536870912:
            n = ju;
            break;
          default:
            n = go;
        }
        n = ef(n, Hc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Hc(e, t) {
    if (fi = -1, di = 0, he & 6) throw Error(s(327));
    var n = e.callbackNode;
    if (sr() && e.callbackNode !== n) return null;
    var r = So(e, e === Ie ? Ue : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = pi(e, r);
    else {
      t = r;
      var i = he;
      he |= 2;
      var u = Yc();
      (Ie !== e || Ue !== t) && (bt = null, lr = Le() + 500, An(e, t));
      do
        try {
          Lm();
          break;
        } catch (h) {
          Kc(e, h);
        }
      while (!0);
      bl(), li.current = u, he = i, Me !== null ? t = 0 : (Ie = null, Ue = 0, t = je);
    }
    if (t !== 0) {
      if (t === 2 && (i = tl(e), i !== 0 && (r = i, t = ks(e, i))), t === 1) throw n = qr, An(e, 0), sn(e, r), qe(e, Le()), n;
      if (t === 6) sn(e, r);
      else {
        if (i = e.current.alternate, !(r & 30) && !Am(i) && (t = pi(e, r), t === 2 && (u = tl(e), u !== 0 && (r = u, t = ks(e, u))), t === 1)) throw n = qr, An(e, 0), sn(e, r), qe(e, Le()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            Tn(e, Je, bt);
            break;
          case 3:
            if (sn(e, r), (r & 130023424) === r && (t = ws + 500 - Le(), 10 < t)) {
              if (So(e, 0) !== 0) break;
              if (i = e.suspendedLanes, (i & r) !== r) {
                Ye(), e.pingedLanes |= e.suspendedLanes & i;
                break;
              }
              e.timeoutHandle = _l(Tn.bind(null, e, Je, bt), t);
              break;
            }
            Tn(e, Je, bt);
            break;
          case 4:
            if (sn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var c = 31 - pt(r);
              u = 1 << c, c = t[c], c > i && (i = c), r &= ~u;
            }
            if (r = i, r = Le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Om(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = _l(Tn.bind(null, e, Je, bt), r);
              break;
            }
            Tn(e, Je, bt);
            break;
          case 5:
            Tn(e, Je, bt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return qe(e, Le()), e.callbackNode === n ? Hc.bind(null, e) : null;
  }
  function ks(e, t) {
    var n = eo;
    return e.current.memoizedState.isDehydrated && (An(e, t).flags |= 256), e = pi(e, t), e !== 2 && (t = Je, Je = n, t !== null && Es(t)), e;
  }
  function Es(e) {
    Je === null ? Je = e : Je.push.apply(Je, e);
  }
  function Am(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var i = n[r], u = i.getSnapshot;
          i = i.value;
          try {
            if (!mt(u(), i)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function sn(e, t) {
    for (t &= ~ys, t &= ~si, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - pt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Qc(e) {
    if (he & 6) throw Error(s(327));
    sr();
    var t = So(e, 0);
    if (!(t & 1)) return qe(e, Le()), null;
    var n = pi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = tl(e);
      r !== 0 && (t = r, n = ks(e, r));
    }
    if (n === 1) throw n = qr, An(e, 0), sn(e, t), qe(e, Le()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tn(e, Je, bt), qe(e, Le()), null;
  }
  function Cs(e, t) {
    var n = he;
    he |= 1;
    try {
      return e(t);
    } finally {
      he = n, he === 0 && (lr = Le() + 500, Wo && qt());
    }
  }
  function On(e) {
    on !== null && on.tag === 0 && !(he & 6) && sr();
    var t = he;
    he |= 1;
    var n = ft.transition, r = Se;
    try {
      if (ft.transition = null, Se = 1, e) return e();
    } finally {
      Se = r, ft.transition = n, he = t, !(he & 6) && qt();
    }
  }
  function Ps() {
    ot = ir.current, Re(ir);
  }
  function An(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, lm(n)), Me !== null) for (n = Me.return; n !== null; ) {
      var r = n;
      switch (Ml(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Io();
          break;
        case 3:
          nr(), Re(Ge), Re(Be), Kl();
          break;
        case 5:
          Hl(r);
          break;
        case 4:
          nr();
          break;
        case 13:
          Re(Oe);
          break;
        case 19:
          Re(Oe);
          break;
        case 10:
          Wl(r.type._context);
          break;
        case 22:
        case 23:
          Ps();
      }
      n = n.return;
    }
    if (Ie = e, Me = e = un(e.current, null), Ue = ot = t, je = 0, qr = null, ys = si = _n = 0, Je = eo = null, Pn !== null) {
      for (t = 0; t < Pn.length; t++) if (n = Pn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var i = r.next, u = n.pending;
        if (u !== null) {
          var c = u.next;
          u.next = i, r.next = c;
        }
        n.pending = r;
      }
      Pn = null;
    }
    return e;
  }
  function Kc(e, t) {
    do {
      var n = Me;
      try {
        if (bl(), Xo.current = ei, Zo) {
          for (var r = Ae.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), r = r.next;
          }
          Zo = !1;
        }
        if (Nn = 0, Fe = De = Ae = null, Kr = !1, Yr = 0, gs.current = null, n === null || n.return === null) {
          je = 1, qr = t, Me = null;
          break;
        }
        e: {
          var u = e, c = n.return, h = n, v = t;
          if (t = Ue, h.flags |= 32768, v !== null && typeof v == "object" && typeof v.then == "function") {
            var _ = v, M = h, F = M.tag;
            if (!(M.mode & 1) && (F === 0 || F === 11 || F === 15)) {
              var z = M.alternate;
              z ? (M.updateQueue = z.updateQueue, M.memoizedState = z.memoizedState, M.lanes = z.lanes) : (M.updateQueue = null, M.memoizedState = null);
            }
            var Q = yc(c);
            if (Q !== null) {
              Q.flags &= -257, wc(Q, c, h, u, t), Q.mode & 1 && gc(u, _, t), t = Q, v = _;
              var Y = t.updateQueue;
              if (Y === null) {
                var X = /* @__PURE__ */ new Set();
                X.add(v), t.updateQueue = X;
              } else Y.add(v);
              break e;
            } else {
              if (!(t & 1)) {
                gc(u, _, t), Rs();
                break e;
              }
              v = Error(s(426));
            }
          } else if (_e && h.mode & 1) {
            var ze = yc(c);
            if (ze !== null) {
              !(ze.flags & 65536) && (ze.flags |= 256), wc(ze, c, h, u, t), Fl(rr(v, h));
              break e;
            }
          }
          u = v = rr(v, h), je !== 4 && (je = 2), eo === null ? eo = [u] : eo.push(u), u = c;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var E = hc(u, v, t);
                Ba(u, E);
                break e;
              case 1:
                h = v;
                var w = u.type, R = u.stateNode;
                if (!(u.flags & 128) && (typeof w.getDerivedStateFromError == "function" || R !== null && typeof R.componentDidCatch == "function" && (rn === null || !rn.has(R)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var I = vc(u, h, t);
                  Ba(u, I);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Xc(n);
      } catch (Z) {
        t = Z, Me === n && n !== null && (Me = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Yc() {
    var e = li.current;
    return li.current = ei, e === null ? ei : e;
  }
  function Rs() {
    (je === 0 || je === 3 || je === 2) && (je = 4), Ie === null || !(_n & 268435455) && !(si & 268435455) || sn(Ie, Ue);
  }
  function pi(e, t) {
    var n = he;
    he |= 2;
    var r = Yc();
    (Ie !== e || Ue !== t) && (bt = null, An(e, t));
    do
      try {
        Tm();
        break;
      } catch (i) {
        Kc(e, i);
      }
    while (!0);
    if (bl(), he = n, li.current = r, Me !== null) throw Error(s(261));
    return Ie = null, Ue = 0, je;
  }
  function Tm() {
    for (; Me !== null; ) Gc(Me);
  }
  function Lm() {
    for (; Me !== null && !rp(); ) Gc(Me);
  }
  function Gc(e) {
    var t = qc(e.alternate, e, ot);
    e.memoizedProps = e.pendingProps, t === null ? Xc(e) : Me = t, gs.current = null;
  }
  function Xc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Pm(n, t), n !== null) {
          n.flags &= 32767, Me = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          je = 6, Me = null;
          return;
        }
      } else if (n = Cm(n, t, ot), n !== null) {
        Me = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    je === 0 && (je = 5);
  }
  function Tn(e, t, n) {
    var r = Se, i = ft.transition;
    try {
      ft.transition = null, Se = 1, zm(e, t, n, r);
    } finally {
      ft.transition = i, Se = r;
    }
    return null;
  }
  function zm(e, t, n, r) {
    do
      sr();
    while (on !== null);
    if (he & 6) throw Error(s(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (pp(e, u), e === Ie && (Me = Ie = null, Ue = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ai || (ai = !0, ef(go, function() {
      return sr(), null;
    })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
      u = ft.transition, ft.transition = null;
      var c = Se;
      Se = 1;
      var h = he;
      he |= 4, gs.current = null, Nm(e, n), Wc(n, e), qp(Rl), Co = !!Pl, Rl = Pl = null, e.current = n, _m(n), op(), he = h, Se = c, ft.transition = u;
    } else e.current = n;
    if (ai && (ai = !1, on = e, ci = i), u = e.pendingLanes, u === 0 && (rn = null), sp(n.stateNode), qe(e, Le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ui) throw ui = !1, e = xs, xs = null, e;
    return ci & 1 && e.tag !== 0 && sr(), u = e.pendingLanes, u & 1 ? e === Ss ? to++ : (to = 0, Ss = e) : to = 0, qt(), null;
  }
  function sr() {
    if (on !== null) {
      var e = Iu(ci), t = ft.transition, n = Se;
      try {
        if (ft.transition = null, Se = 16 > e ? 16 : e, on === null) var r = !1;
        else {
          if (e = on, on = null, ci = 0, he & 6) throw Error(s(331));
          var i = he;
          for (he |= 4, K = e.current; K !== null; ) {
            var u = K, c = u.child;
            if (K.flags & 16) {
              var h = u.deletions;
              if (h !== null) {
                for (var v = 0; v < h.length; v++) {
                  var _ = h[v];
                  for (K = _; K !== null; ) {
                    var M = K;
                    switch (M.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jr(8, M, u);
                    }
                    var F = M.child;
                    if (F !== null) F.return = M, K = F;
                    else for (; K !== null; ) {
                      M = K;
                      var z = M.sibling, Q = M.return;
                      if (Dc(M), M === _) {
                        K = null;
                        break;
                      }
                      if (z !== null) {
                        z.return = Q, K = z;
                        break;
                      }
                      K = Q;
                    }
                  }
                }
                var Y = u.alternate;
                if (Y !== null) {
                  var X = Y.child;
                  if (X !== null) {
                    Y.child = null;
                    do {
                      var ze = X.sibling;
                      X.sibling = null, X = ze;
                    } while (X !== null);
                  }
                }
                K = u;
              }
            }
            if (u.subtreeFlags & 2064 && c !== null) c.return = u, K = c;
            else e: for (; K !== null; ) {
              if (u = K, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Jr(9, u, u.return);
              }
              var E = u.sibling;
              if (E !== null) {
                E.return = u.return, K = E;
                break e;
              }
              K = u.return;
            }
          }
          var w = e.current;
          for (K = w; K !== null; ) {
            c = K;
            var R = c.child;
            if (c.subtreeFlags & 2064 && R !== null) R.return = c, K = R;
            else e: for (c = w; K !== null; ) {
              if (h = K, h.flags & 2048) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ii(9, h);
                }
              } catch (Z) {
                Te(h, h.return, Z);
              }
              if (h === c) {
                K = null;
                break e;
              }
              var I = h.sibling;
              if (I !== null) {
                I.return = h.return, K = I;
                break e;
              }
              K = h.return;
            }
          }
          if (he = i, qt(), St && typeof St.onPostCommitFiberRoot == "function") try {
            St.onPostCommitFiberRoot(yo, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        Se = n, ft.transition = t;
      }
    }
    return !1;
  }
  function Zc(e, t, n) {
    t = rr(n, t), t = hc(e, t, 1), e = tn(e, t, 1), t = Ye(), e !== null && (Pr(e, 1, t), qe(e, t));
  }
  function Te(e, t, n) {
    if (e.tag === 3) Zc(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Zc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (rn === null || !rn.has(r))) {
          e = rr(n, e), e = vc(t, e, 1), t = tn(t, e, 1), e = Ye(), t !== null && (Pr(t, 1, e), qe(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Mm(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ye(), e.pingedLanes |= e.suspendedLanes & n, Ie === e && (Ue & n) === n && (je === 4 || je === 3 && (Ue & 130023424) === Ue && 500 > Le() - ws ? An(e, 0) : ys |= n), qe(e, t);
  }
  function Jc(e, t) {
    t === 0 && (e.mode & 1 ? (t = xo, xo <<= 1, !(xo & 130023424) && (xo = 4194304)) : t = 1);
    var n = Ye();
    e = jt(e, t), e !== null && (Pr(e, t, n), qe(e, n));
  }
  function Dm(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Jc(e, n);
  }
  function jm(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Jc(e, n);
  }
  var qc;
  qc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ge.current) Ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return Ze = !1, Em(e, t, n);
      Ze = !!(e.flags & 131072);
    }
    else Ze = !1, _e && t.flags & 1048576 && La(t, Bo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        ri(e, t), e = t.pendingProps;
        var i = Gn(t, Be.current);
        tr(t, n), i = Xl(null, t, r, e, i, n);
        var u = Zl();
        return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Xe(r) ? (u = !0, bo(t)) : u = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, $l(t), i.updater = ti, t.stateNode = i, i._reactInternals = t, rs(t, r, e, n), t = ss(null, t, r, !0, u, n)) : (t.tag = 0, _e && u && zl(t), Ke(null, t, i, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (ri(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = Im(r), e = vt(r, e), i) {
            case 0:
              t = ls(null, t, r, e, n);
              break e;
            case 1:
              t = Pc(null, t, r, e, n);
              break e;
            case 11:
              t = xc(null, t, r, e, n);
              break e;
            case 14:
              t = Sc(null, t, r, vt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), ls(e, t, r, i, n);
      case 1:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), Pc(e, t, r, i, n);
      case 3:
        e: {
          if (Rc(t), e === null) throw Error(s(387));
          r = t.pendingProps, u = t.memoizedState, i = u.element, Ua(e, t), Yo(t, r, null, n);
          var c = t.memoizedState;
          if (r = c.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            i = rr(Error(s(423)), t), t = Nc(e, t, r, n, i);
            break e;
          } else if (r !== i) {
            i = rr(Error(s(424)), t), t = Nc(e, t, r, n, i);
            break e;
          } else for (rt = Xt(t.stateNode.containerInfo.firstChild), nt = t, _e = !0, ht = null, n = ba(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Jn(), r === i) {
              t = It(e, t, n);
              break e;
            }
            Ke(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Va(t), e === null && jl(t), r = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, c = i.children, Nl(r, i) ? c = null : u !== null && Nl(r, u) && (t.flags |= 32), Cc(e, t), Ke(e, t, c, n), t.child;
      case 6:
        return e === null && jl(t), null;
      case 13:
        return _c(e, t, n);
      case 4:
        return Vl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = qn(t, null, r, n) : Ke(e, t, r, n), t.child;
      case 11:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), xc(e, t, r, i, n);
      case 7:
        return Ke(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ke(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, i = t.pendingProps, u = t.memoizedProps, c = i.value, Ce(Ho, r._currentValue), r._currentValue = c, u !== null) if (mt(u.value, c)) {
            if (u.children === i.children && !Ge.current) {
              t = It(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var h = u.dependencies;
            if (h !== null) {
              c = u.child;
              for (var v = h.firstContext; v !== null; ) {
                if (v.context === r) {
                  if (u.tag === 1) {
                    v = Ft(-1, n & -n), v.tag = 2;
                    var _ = u.updateQueue;
                    if (_ !== null) {
                      _ = _.shared;
                      var M = _.pending;
                      M === null ? v.next = v : (v.next = M.next, M.next = v), _.pending = v;
                    }
                  }
                  u.lanes |= n, v = u.alternate, v !== null && (v.lanes |= n), Ul(
                    u.return,
                    n,
                    t
                  ), h.lanes |= n;
                  break;
                }
                v = v.next;
              }
            } else if (u.tag === 10) c = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (c = u.return, c === null) throw Error(s(341));
              c.lanes |= n, h = c.alternate, h !== null && (h.lanes |= n), Ul(c, n, t), c = u.sibling;
            } else c = u.child;
            if (c !== null) c.return = u;
            else for (c = u; c !== null; ) {
              if (c === t) {
                c = null;
                break;
              }
              if (u = c.sibling, u !== null) {
                u.return = c.return, c = u;
                break;
              }
              c = c.return;
            }
            u = c;
          }
          Ke(e, t, i.children, n), t = t.child;
        }
        return t;
      case 9:
        return i = t.type, r = t.pendingProps.children, tr(t, n), i = at(i), r = r(i), t.flags |= 1, Ke(e, t, r, n), t.child;
      case 14:
        return r = t.type, i = vt(r, t.pendingProps), i = vt(r.type, i), Sc(e, t, r, i, n);
      case 15:
        return kc(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : vt(r, i), ri(e, t), t.tag = 1, Xe(r) ? (e = !0, bo(t)) : e = !1, tr(t, n), pc(t, r, i), rs(t, r, i, n), ss(null, t, r, !0, e, n);
      case 19:
        return Ac(e, t, n);
      case 22:
        return Ec(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function ef(e, t) {
    return zu(e, t);
  }
  function Fm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dt(e, t, n, r) {
    return new Fm(e, t, n, r);
  }
  function Ns(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Im(e) {
    if (typeof e == "function") return Ns(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === ne) return 11;
      if (e === xe) return 14;
    }
    return 2;
  }
  function un(e, t) {
    var n = e.alternate;
    return n === null ? (n = dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function mi(e, t, n, r, i, u) {
    var c = 2;
    if (r = e, typeof e == "function") Ns(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else e: switch (e) {
      case G:
        return Ln(n.children, i, u, t);
      case oe:
        c = 8, i |= 8;
        break;
      case me:
        return e = dt(12, n, t, i | 2), e.elementType = me, e.lanes = u, e;
      case we:
        return e = dt(13, n, t, i), e.elementType = we, e.lanes = u, e;
      case ae:
        return e = dt(19, n, t, i), e.elementType = ae, e.lanes = u, e;
      case J:
        return hi(n, i, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ce:
            c = 10;
            break e;
          case ke:
            c = 9;
            break e;
          case ne:
            c = 11;
            break e;
          case xe:
            c = 14;
            break e;
          case fe:
            c = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = dt(c, n, t, i), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function Ln(e, t, n, r) {
    return e = dt(7, e, r, t), e.lanes = n, e;
  }
  function hi(e, t, n, r) {
    return e = dt(22, e, r, t), e.elementType = J, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function _s(e, t, n) {
    return e = dt(6, e, null, t), e.lanes = n, e;
  }
  function Os(e, t, n) {
    return t = dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function bm(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nl(0), this.expirationTimes = nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
  }
  function As(e, t, n, r, i, u, c, h, v) {
    return e = new bm(e, t, n, h, v), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = dt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $l(u), e;
  }
  function Wm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function tf(e) {
    if (!e) return Jt;
    e = e._reactInternals;
    e: {
      if (xn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Xe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Xe(n)) return Oa(e, n, t);
    }
    return t;
  }
  function nf(e, t, n, r, i, u, c, h, v) {
    return e = As(n, r, !0, e, i, u, c, h, v), e.context = tf(null), n = e.current, r = Ye(), i = ln(n), u = Ft(r, i), u.callback = t ?? null, tn(n, u, i), e.current.lanes = i, Pr(e, i, r), qe(e, r), e;
  }
  function vi(e, t, n, r) {
    var i = t.current, u = Ye(), c = ln(i);
    return n = tf(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ft(u, c), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = tn(i, t, c), e !== null && (wt(e, i, c, u), Ko(e, i, c)), c;
  }
  function gi(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function rf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ts(e, t) {
    rf(e, t), (e = e.alternate) && rf(e, t);
  }
  function Um() {
    return null;
  }
  var of = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ls(e) {
    this._internalRoot = e;
  }
  yi.prototype.render = Ls.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    vi(e, t, null, null);
  }, yi.prototype.unmount = Ls.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      On(function() {
        vi(null, e, null, null);
      }), t[Lt] = null;
    }
  };
  function yi(e) {
    this._internalRoot = e;
  }
  yi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Uu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Kt.length && t !== 0 && t < Kt[n].priority; n++) ;
      Kt.splice(n, 0, e), n === 0 && Vu(e);
    }
  };
  function zs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function wi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function lf() {
  }
  function Bm(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var _ = gi(c);
          u.call(_);
        };
      }
      var c = nf(t, r, e, 0, null, !1, !1, "", lf);
      return e._reactRootContainer = c, e[Lt] = c.current, br(e.nodeType === 8 ? e.parentNode : e), On(), c;
    }
    for (; i = e.lastChild; ) e.removeChild(i);
    if (typeof r == "function") {
      var h = r;
      r = function() {
        var _ = gi(v);
        h.call(_);
      };
    }
    var v = As(e, 0, !1, null, null, !1, !1, "", lf);
    return e._reactRootContainer = v, e[Lt] = v.current, br(e.nodeType === 8 ? e.parentNode : e), On(function() {
      vi(t, v, n, r);
    }), v;
  }
  function xi(e, t, n, r, i) {
    var u = n._reactRootContainer;
    if (u) {
      var c = u;
      if (typeof i == "function") {
        var h = i;
        i = function() {
          var v = gi(c);
          h.call(v);
        };
      }
      vi(t, c, e, i);
    } else c = Bm(n, t, e, i, r);
    return gi(c);
  }
  bu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Cr(t.pendingLanes);
          n !== 0 && (rl(t, n | 1), qe(t, Le()), !(he & 6) && (lr = Le() + 500, qt()));
        }
        break;
      case 13:
        On(function() {
          var r = jt(e, 1);
          if (r !== null) {
            var i = Ye();
            wt(r, e, 1, i);
          }
        }), Ts(e, 1);
    }
  }, ol = function(e) {
    if (e.tag === 13) {
      var t = jt(e, 134217728);
      if (t !== null) {
        var n = Ye();
        wt(t, e, 134217728, n);
      }
      Ts(e, 134217728);
    }
  }, Wu = function(e) {
    if (e.tag === 13) {
      var t = ln(e), n = jt(e, t);
      if (n !== null) {
        var r = Ye();
        wt(n, e, t, r);
      }
      Ts(e, t);
    }
  }, Uu = function() {
    return Se;
  }, Bu = function(e, t) {
    var n = Se;
    try {
      return Se = e, t();
    } finally {
      Se = n;
    }
  }, Xi = function(e, t, n) {
    switch (t) {
      case "input":
        if (Bi(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Fo(r);
              if (!i) throw Error(s(90));
              po(r), Bi(r, i);
            }
          }
        }
        break;
      case "textarea":
        gu(e, n);
        break;
      case "select":
        t = n.value, t != null && Fn(e, !!n.multiple, t, !1);
    }
  }, Ru = Cs, Nu = On;
  var $m = { usingClientEntryPoint: !1, Events: [Br, Kn, Fo, Cu, Pu, Cs] }, no = { findFiberByHostInstance: Sn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vm = { bundleType: no.bundleType, version: no.version, rendererPackageName: no.rendererPackageName, rendererConfig: no.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: b.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Tu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: no.findFiberByHostInstance || Um, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Si.isDisabled && Si.supportsFiber) try {
      yo = Si.inject(Vm), St = Si;
    } catch {
    }
  }
  return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $m, et.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!zs(t)) throw Error(s(200));
    return Wm(e, t, null, n);
  }, et.createRoot = function(e, t) {
    if (!zs(e)) throw Error(s(299));
    var n = !1, r = "", i = of;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = As(e, 1, !1, null, null, n, !1, r, i), e[Lt] = t.current, br(e.nodeType === 8 ? e.parentNode : e), new Ls(t);
  }, et.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = Tu(t), e = e === null ? null : e.stateNode, e;
  }, et.flushSync = function(e) {
    return On(e);
  }, et.hydrate = function(e, t, n) {
    if (!wi(t)) throw Error(s(200));
    return xi(null, e, t, !0, n);
  }, et.hydrateRoot = function(e, t, n) {
    if (!zs(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, i = !1, u = "", c = of;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (c = n.onRecoverableError)), t = nf(t, null, e, 1, n ?? null, i, !1, u, c), e[Lt] = t.current, br(e), r) for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(
      n,
      i
    );
    return new yi(t);
  }, et.render = function(e, t, n) {
    if (!wi(t)) throw Error(s(200));
    return xi(null, e, t, !1, n);
  }, et.unmountComponentAtNode = function(e) {
    if (!wi(e)) throw Error(s(40));
    return e._reactRootContainer ? (On(function() {
      xi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Lt] = null;
      });
    }), !0) : !1;
  }, et.unstable_batchedUpdates = Cs, et.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!wi(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return xi(e, t, n, !1, r);
  }, et.version = "18.3.1-next-f1338f8080-20240426", et;
}
function Bf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf);
    } catch (o) {
      console.error(o);
    }
}
Bf(), Uf.exports = Zm();
var uo = Uf.exports;
const Jm = /* @__PURE__ */ bf(uo);
var pf = uo;
Hs.createRoot = pf.createRoot, Hs.hydrateRoot = pf.hydrateRoot;
var C = eu();
const qm = /* @__PURE__ */ bf(C), eh = /* @__PURE__ */ Qm({
  __proto__: null,
  default: qm
}, [C]);
function pn(o, l, { checkForDefaultPrevented: s = !0 } = {}) {
  return function(f) {
    if (o?.(f), s === !1 || !f.defaultPrevented)
      return l?.(f);
  };
}
function th(o, l) {
  typeof o == "function" ? o(l) : o != null && (o.current = l);
}
function $f(...o) {
  return (l) => o.forEach((s) => th(s, l));
}
function yn(...o) {
  return C.useCallback($f(...o), o);
}
function Vf(o, l = []) {
  let s = [];
  function a(d, p) {
    const m = C.createContext(p), g = s.length;
    s = [...s, p];
    function y(S) {
      const { scope: N, children: O, ...L } = S, k = N?.[o][g] || m, A = C.useMemo(() => L, Object.values(L));
      return /* @__PURE__ */ W.jsx(k.Provider, { value: A, children: O });
    }
    function P(S, N) {
      const O = N?.[o][g] || m, L = C.useContext(O);
      if (L) return L;
      if (p !== void 0) return p;
      throw new Error(`\`${S}\` must be used within \`${d}\``);
    }
    return y.displayName = d + "Provider", [y, P];
  }
  const f = () => {
    const d = s.map((p) => C.createContext(p));
    return function(m) {
      const g = m?.[o] || d;
      return C.useMemo(
        () => ({ [`__scope${o}`]: { ...m, [o]: g } }),
        [m, g]
      );
    };
  };
  return f.scopeName = o, [a, nh(f, ...l)];
}
function nh(...o) {
  const l = o[0];
  if (o.length === 1) return l;
  const s = () => {
    const a = o.map((f) => ({
      useScope: f(),
      scopeName: f.scopeName
    }));
    return function(d) {
      const p = a.reduce((m, { useScope: g, scopeName: y }) => {
        const S = g(d)[`__scope${y}`];
        return { ...m, ...S };
      }, {});
      return C.useMemo(() => ({ [`__scope${l.scopeName}`]: p }), [p]);
    };
  };
  return s.scopeName = l.scopeName, s;
}
var Fi = C.forwardRef((o, l) => {
  const { children: s, ...a } = o, f = C.Children.toArray(s), d = f.find(oh);
  if (d) {
    const p = d.props.children, m = f.map((g) => g === d ? C.Children.count(p) > 1 ? C.Children.only(null) : C.isValidElement(p) ? p.props.children : null : g);
    return /* @__PURE__ */ W.jsx(Qs, { ...a, ref: l, children: C.isValidElement(p) ? C.cloneElement(p, void 0, m) : null });
  }
  return /* @__PURE__ */ W.jsx(Qs, { ...a, ref: l, children: s });
});
Fi.displayName = "Slot";
var Qs = C.forwardRef((o, l) => {
  const { children: s, ...a } = o;
  if (C.isValidElement(s)) {
    const f = lh(s);
    return C.cloneElement(s, {
      ...ih(a, s.props),
      // @ts-ignore
      ref: l ? $f(l, f) : f
    });
  }
  return C.Children.count(s) > 1 ? C.Children.only(null) : null;
});
Qs.displayName = "SlotClone";
var rh = ({ children: o }) => /* @__PURE__ */ W.jsx(W.Fragment, { children: o });
function oh(o) {
  return C.isValidElement(o) && o.type === rh;
}
function ih(o, l) {
  const s = { ...l };
  for (const a in l) {
    const f = o[a], d = l[a];
    /^on[A-Z]/.test(a) ? f && d ? s[a] = (...m) => {
      d(...m), f(...m);
    } : f && (s[a] = f) : a === "style" ? s[a] = { ...f, ...d } : a === "className" && (s[a] = [f, d].filter(Boolean).join(" "));
  }
  return { ...o, ...s };
}
function lh(o) {
  let l = Object.getOwnPropertyDescriptor(o.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? o.ref : (l = Object.getOwnPropertyDescriptor(o, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? o.props.ref : o.props.ref || o.ref);
}
var sh = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], At = sh.reduce((o, l) => {
  const s = C.forwardRef((a, f) => {
    const { asChild: d, ...p } = a, m = d ? Fi : l;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ W.jsx(m, { ...p, ref: f });
  });
  return s.displayName = `Primitive.${l}`, { ...o, [l]: s };
}, {});
function uh(o, l) {
  o && uo.flushSync(() => o.dispatchEvent(l));
}
function mn(o) {
  const l = C.useRef(o);
  return C.useEffect(() => {
    l.current = o;
  }), C.useMemo(() => (...s) => l.current?.(...s), []);
}
function ah(o, l = globalThis?.document) {
  const s = mn(o);
  C.useEffect(() => {
    const a = (f) => {
      f.key === "Escape" && s(f);
    };
    return l.addEventListener("keydown", a, { capture: !0 }), () => l.removeEventListener("keydown", a, { capture: !0 });
  }, [s, l]);
}
var ch = "DismissableLayer", Ks = "dismissableLayer.update", fh = "dismissableLayer.pointerDownOutside", dh = "dismissableLayer.focusOutside", mf, Hf = C.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Qf = C.forwardRef(
  (o, l) => {
    const {
      disableOutsidePointerEvents: s = !1,
      onEscapeKeyDown: a,
      onPointerDownOutside: f,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: m,
      ...g
    } = o, y = C.useContext(Hf), [P, S] = C.useState(null), N = P?.ownerDocument ?? globalThis?.document, [, O] = C.useState({}), L = yn(l, (G) => S(G)), k = Array.from(y.layers), [A] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1), j = k.indexOf(A), U = P ? k.indexOf(P) : -1, B = y.layersWithOutsidePointerEventsDisabled.size > 0, b = U >= j, $ = hh((G) => {
      const oe = G.target, me = [...y.branches].some((ce) => ce.contains(oe));
      !b || me || (f?.(G), p?.(G), G.defaultPrevented || m?.());
    }, N), q = vh((G) => {
      const oe = G.target;
      [...y.branches].some((ce) => ce.contains(oe)) || (d?.(G), p?.(G), G.defaultPrevented || m?.());
    }, N);
    return ah((G) => {
      U === y.layers.size - 1 && (a?.(G), !G.defaultPrevented && m && (G.preventDefault(), m()));
    }, N), C.useEffect(() => {
      if (P)
        return s && (y.layersWithOutsidePointerEventsDisabled.size === 0 && (mf = N.body.style.pointerEvents, N.body.style.pointerEvents = "none"), y.layersWithOutsidePointerEventsDisabled.add(P)), y.layers.add(P), hf(), () => {
          s && y.layersWithOutsidePointerEventsDisabled.size === 1 && (N.body.style.pointerEvents = mf);
        };
    }, [P, N, s, y]), C.useEffect(() => () => {
      P && (y.layers.delete(P), y.layersWithOutsidePointerEventsDisabled.delete(P), hf());
    }, [P, y]), C.useEffect(() => {
      const G = () => O({});
      return document.addEventListener(Ks, G), () => document.removeEventListener(Ks, G);
    }, []), /* @__PURE__ */ W.jsx(
      At.div,
      {
        ...g,
        ref: L,
        style: {
          pointerEvents: B ? b ? "auto" : "none" : void 0,
          ...o.style
        },
        onFocusCapture: pn(o.onFocusCapture, q.onFocusCapture),
        onBlurCapture: pn(o.onBlurCapture, q.onBlurCapture),
        onPointerDownCapture: pn(
          o.onPointerDownCapture,
          $.onPointerDownCapture
        )
      }
    );
  }
);
Qf.displayName = ch;
var ph = "DismissableLayerBranch", mh = C.forwardRef((o, l) => {
  const s = C.useContext(Hf), a = C.useRef(null), f = yn(l, a);
  return C.useEffect(() => {
    const d = a.current;
    if (d)
      return s.branches.add(d), () => {
        s.branches.delete(d);
      };
  }, [s.branches]), /* @__PURE__ */ W.jsx(At.div, { ...o, ref: f });
});
mh.displayName = ph;
function hh(o, l = globalThis?.document) {
  const s = mn(o), a = C.useRef(!1), f = C.useRef(() => {
  });
  return C.useEffect(() => {
    const d = (m) => {
      if (m.target && !a.current) {
        let g = function() {
          Kf(
            fh,
            s,
            y,
            { discrete: !0 }
          );
        };
        const y = { originalEvent: m };
        m.pointerType === "touch" ? (l.removeEventListener("click", f.current), f.current = g, l.addEventListener("click", f.current, { once: !0 })) : g();
      } else
        l.removeEventListener("click", f.current);
      a.current = !1;
    }, p = window.setTimeout(() => {
      l.addEventListener("pointerdown", d);
    }, 0);
    return () => {
      window.clearTimeout(p), l.removeEventListener("pointerdown", d), l.removeEventListener("click", f.current);
    };
  }, [l, s]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => a.current = !0
  };
}
function vh(o, l = globalThis?.document) {
  const s = mn(o), a = C.useRef(!1);
  return C.useEffect(() => {
    const f = (d) => {
      d.target && !a.current && Kf(dh, s, { originalEvent: d }, {
        discrete: !1
      });
    };
    return l.addEventListener("focusin", f), () => l.removeEventListener("focusin", f);
  }, [l, s]), {
    onFocusCapture: () => a.current = !0,
    onBlurCapture: () => a.current = !1
  };
}
function hf() {
  const o = new CustomEvent(Ks);
  document.dispatchEvent(o);
}
function Kf(o, l, s, { discrete: a }) {
  const f = s.originalEvent.target, d = new CustomEvent(o, { bubbles: !1, cancelable: !0, detail: s });
  l && f.addEventListener(o, l, { once: !0 }), a ? uh(f, d) : f.dispatchEvent(d);
}
var Fs = 0;
function gh() {
  C.useEffect(() => {
    const o = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", o[0] ?? vf()), document.body.insertAdjacentElement("beforeend", o[1] ?? vf()), Fs++, () => {
      Fs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((l) => l.remove()), Fs--;
    };
  }, []);
}
function vf() {
  const o = document.createElement("span");
  return o.setAttribute("data-radix-focus-guard", ""), o.tabIndex = 0, o.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", o;
}
var Is = "focusScope.autoFocusOnMount", bs = "focusScope.autoFocusOnUnmount", gf = { bubbles: !1, cancelable: !0 }, yh = "FocusScope", Yf = C.forwardRef((o, l) => {
  const {
    loop: s = !1,
    trapped: a = !1,
    onMountAutoFocus: f,
    onUnmountAutoFocus: d,
    ...p
  } = o, [m, g] = C.useState(null), y = mn(f), P = mn(d), S = C.useRef(null), N = yn(l, (k) => g(k)), O = C.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  C.useEffect(() => {
    if (a) {
      let k = function(B) {
        if (O.paused || !m) return;
        const b = B.target;
        m.contains(b) ? S.current = b : dn(S.current, { select: !0 });
      }, A = function(B) {
        if (O.paused || !m) return;
        const b = B.relatedTarget;
        b !== null && (m.contains(b) || dn(S.current, { select: !0 }));
      }, j = function(B) {
        if (document.activeElement === document.body)
          for (const $ of B)
            $.removedNodes.length > 0 && dn(m);
      };
      document.addEventListener("focusin", k), document.addEventListener("focusout", A);
      const U = new MutationObserver(j);
      return m && U.observe(m, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", k), document.removeEventListener("focusout", A), U.disconnect();
      };
    }
  }, [a, m, O.paused]), C.useEffect(() => {
    if (m) {
      wf.add(O);
      const k = document.activeElement;
      if (!m.contains(k)) {
        const j = new CustomEvent(Is, gf);
        m.addEventListener(Is, y), m.dispatchEvent(j), j.defaultPrevented || (wh(Ch(Gf(m)), { select: !0 }), document.activeElement === k && dn(m));
      }
      return () => {
        m.removeEventListener(Is, y), setTimeout(() => {
          const j = new CustomEvent(bs, gf);
          m.addEventListener(bs, P), m.dispatchEvent(j), j.defaultPrevented || dn(k ?? document.body, { select: !0 }), m.removeEventListener(bs, P), wf.remove(O);
        }, 0);
      };
    }
  }, [m, y, P, O]);
  const L = C.useCallback(
    (k) => {
      if (!s && !a || O.paused) return;
      const A = k.key === "Tab" && !k.altKey && !k.ctrlKey && !k.metaKey, j = document.activeElement;
      if (A && j) {
        const U = k.currentTarget, [B, b] = xh(U);
        B && b ? !k.shiftKey && j === b ? (k.preventDefault(), s && dn(B, { select: !0 })) : k.shiftKey && j === B && (k.preventDefault(), s && dn(b, { select: !0 })) : j === U && k.preventDefault();
      }
    },
    [s, a, O.paused]
  );
  return /* @__PURE__ */ W.jsx(At.div, { tabIndex: -1, ...p, ref: N, onKeyDown: L });
});
Yf.displayName = yh;
function wh(o, { select: l = !1 } = {}) {
  const s = document.activeElement;
  for (const a of o)
    if (dn(a, { select: l }), document.activeElement !== s) return;
}
function xh(o) {
  const l = Gf(o), s = yf(l, o), a = yf(l.reverse(), o);
  return [s, a];
}
function Gf(o) {
  const l = [], s = document.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const f = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || f ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; s.nextNode(); ) l.push(s.currentNode);
  return l;
}
function yf(o, l) {
  for (const s of o)
    if (!Sh(s, { upTo: l })) return s;
}
function Sh(o, { upTo: l }) {
  if (getComputedStyle(o).visibility === "hidden") return !0;
  for (; o; ) {
    if (l !== void 0 && o === l) return !1;
    if (getComputedStyle(o).display === "none") return !0;
    o = o.parentElement;
  }
  return !1;
}
function kh(o) {
  return o instanceof HTMLInputElement && "select" in o;
}
function dn(o, { select: l = !1 } = {}) {
  if (o && o.focus) {
    const s = document.activeElement;
    o.focus({ preventScroll: !0 }), o !== s && kh(o) && l && o.select();
  }
}
var wf = Eh();
function Eh() {
  let o = [];
  return {
    add(l) {
      const s = o[0];
      l !== s && s?.pause(), o = xf(o, l), o.unshift(l);
    },
    remove(l) {
      o = xf(o, l), o[0]?.resume();
    }
  };
}
function xf(o, l) {
  const s = [...o], a = s.indexOf(l);
  return a !== -1 && s.splice(a, 1), s;
}
function Ch(o) {
  return o.filter((l) => l.tagName !== "A");
}
var Mn = globalThis?.document ? C.useLayoutEffect : () => {
}, Ph = eh.useId || (() => {
}), Rh = 0;
function Nh(o) {
  const [l, s] = C.useState(Ph());
  return Mn(() => {
    o || s((a) => a ?? String(Rh++));
  }, [o]), o || (l ? `radix-${l}` : "");
}
const _h = ["top", "right", "bottom", "left"], Nt = Math.min, it = Math.max, zi = Math.round, ki = Math.floor, hn = (o) => ({
  x: o,
  y: o
}), Oh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ah = {
  start: "end",
  end: "start"
};
function Ys(o, l, s) {
  return it(o, Nt(l, s));
}
function Ut(o, l) {
  return typeof o == "function" ? o(l) : o;
}
function Bt(o) {
  return o.split("-")[0];
}
function hr(o) {
  return o.split("-")[1];
}
function tu(o) {
  return o === "x" ? "y" : "x";
}
function nu(o) {
  return o === "y" ? "height" : "width";
}
function vn(o) {
  return ["top", "bottom"].includes(Bt(o)) ? "y" : "x";
}
function ru(o) {
  return tu(vn(o));
}
function Th(o, l, s) {
  s === void 0 && (s = !1);
  const a = hr(o), f = ru(o), d = nu(f);
  let p = f === "x" ? a === (s ? "end" : "start") ? "right" : "left" : a === "start" ? "bottom" : "top";
  return l.reference[d] > l.floating[d] && (p = Mi(p)), [p, Mi(p)];
}
function Lh(o) {
  const l = Mi(o);
  return [Gs(o), l, Gs(l)];
}
function Gs(o) {
  return o.replace(/start|end/g, (l) => Ah[l]);
}
function zh(o, l, s) {
  const a = ["left", "right"], f = ["right", "left"], d = ["top", "bottom"], p = ["bottom", "top"];
  switch (o) {
    case "top":
    case "bottom":
      return s ? l ? f : a : l ? a : f;
    case "left":
    case "right":
      return l ? d : p;
    default:
      return [];
  }
}
function Mh(o, l, s, a) {
  const f = hr(o);
  let d = zh(Bt(o), s === "start", a);
  return f && (d = d.map((p) => p + "-" + f), l && (d = d.concat(d.map(Gs)))), d;
}
function Mi(o) {
  return o.replace(/left|right|bottom|top/g, (l) => Oh[l]);
}
function Dh(o) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...o
  };
}
function Xf(o) {
  return typeof o != "number" ? Dh(o) : {
    top: o,
    right: o,
    bottom: o,
    left: o
  };
}
function Di(o) {
  const {
    x: l,
    y: s,
    width: a,
    height: f
  } = o;
  return {
    width: a,
    height: f,
    top: s,
    left: l,
    right: l + a,
    bottom: s + f,
    x: l,
    y: s
  };
}
function Sf(o, l, s) {
  let {
    reference: a,
    floating: f
  } = o;
  const d = vn(l), p = ru(l), m = nu(p), g = Bt(l), y = d === "y", P = a.x + a.width / 2 - f.width / 2, S = a.y + a.height / 2 - f.height / 2, N = a[m] / 2 - f[m] / 2;
  let O;
  switch (g) {
    case "top":
      O = {
        x: P,
        y: a.y - f.height
      };
      break;
    case "bottom":
      O = {
        x: P,
        y: a.y + a.height
      };
      break;
    case "right":
      O = {
        x: a.x + a.width,
        y: S
      };
      break;
    case "left":
      O = {
        x: a.x - f.width,
        y: S
      };
      break;
    default:
      O = {
        x: a.x,
        y: a.y
      };
  }
  switch (hr(l)) {
    case "start":
      O[p] -= N * (s && y ? -1 : 1);
      break;
    case "end":
      O[p] += N * (s && y ? -1 : 1);
      break;
  }
  return O;
}
const jh = async (o, l, s) => {
  const {
    placement: a = "bottom",
    strategy: f = "absolute",
    middleware: d = [],
    platform: p
  } = s, m = d.filter(Boolean), g = await (p.isRTL == null ? void 0 : p.isRTL(l));
  let y = await p.getElementRects({
    reference: o,
    floating: l,
    strategy: f
  }), {
    x: P,
    y: S
  } = Sf(y, a, g), N = a, O = {}, L = 0;
  for (let k = 0; k < m.length; k++) {
    const {
      name: A,
      fn: j
    } = m[k], {
      x: U,
      y: B,
      data: b,
      reset: $
    } = await j({
      x: P,
      y: S,
      initialPlacement: a,
      placement: N,
      strategy: f,
      middlewareData: O,
      rects: y,
      platform: p,
      elements: {
        reference: o,
        floating: l
      }
    });
    P = U ?? P, S = B ?? S, O = {
      ...O,
      [A]: {
        ...O[A],
        ...b
      }
    }, $ && L <= 50 && (L++, typeof $ == "object" && ($.placement && (N = $.placement), $.rects && (y = $.rects === !0 ? await p.getElementRects({
      reference: o,
      floating: l,
      strategy: f
    }) : $.rects), {
      x: P,
      y: S
    } = Sf(y, N, g)), k = -1);
  }
  return {
    x: P,
    y: S,
    placement: N,
    strategy: f,
    middlewareData: O
  };
};
async function lo(o, l) {
  var s;
  l === void 0 && (l = {});
  const {
    x: a,
    y: f,
    platform: d,
    rects: p,
    elements: m,
    strategy: g
  } = o, {
    boundary: y = "clippingAncestors",
    rootBoundary: P = "viewport",
    elementContext: S = "floating",
    altBoundary: N = !1,
    padding: O = 0
  } = Ut(l, o), L = Xf(O), A = m[N ? S === "floating" ? "reference" : "floating" : S], j = Di(await d.getClippingRect({
    element: (s = await (d.isElement == null ? void 0 : d.isElement(A))) == null || s ? A : A.contextElement || await (d.getDocumentElement == null ? void 0 : d.getDocumentElement(m.floating)),
    boundary: y,
    rootBoundary: P,
    strategy: g
  })), U = S === "floating" ? {
    x: a,
    y: f,
    width: p.floating.width,
    height: p.floating.height
  } : p.reference, B = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m.floating)), b = await (d.isElement == null ? void 0 : d.isElement(B)) ? await (d.getScale == null ? void 0 : d.getScale(B)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Di(d.convertOffsetParentRelativeRectToViewportRelativeRect ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: m,
    rect: U,
    offsetParent: B,
    strategy: g
  }) : U);
  return {
    top: (j.top - $.top + L.top) / b.y,
    bottom: ($.bottom - j.bottom + L.bottom) / b.y,
    left: (j.left - $.left + L.left) / b.x,
    right: ($.right - j.right + L.right) / b.x
  };
}
const Fh = (o) => ({
  name: "arrow",
  options: o,
  async fn(l) {
    const {
      x: s,
      y: a,
      placement: f,
      rects: d,
      platform: p,
      elements: m,
      middlewareData: g
    } = l, {
      element: y,
      padding: P = 0
    } = Ut(o, l) || {};
    if (y == null)
      return {};
    const S = Xf(P), N = {
      x: s,
      y: a
    }, O = ru(f), L = nu(O), k = await p.getDimensions(y), A = O === "y", j = A ? "top" : "left", U = A ? "bottom" : "right", B = A ? "clientHeight" : "clientWidth", b = d.reference[L] + d.reference[O] - N[O] - d.floating[L], $ = N[O] - d.reference[O], q = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(y));
    let G = q ? q[B] : 0;
    (!G || !await (p.isElement == null ? void 0 : p.isElement(q))) && (G = m.floating[B] || d.floating[L]);
    const oe = b / 2 - $ / 2, me = G / 2 - k[L] / 2 - 1, ce = Nt(S[j], me), ke = Nt(S[U], me), ne = ce, we = G - k[L] - ke, ae = G / 2 - k[L] / 2 + oe, xe = Ys(ne, ae, we), fe = !g.arrow && hr(f) != null && ae !== xe && d.reference[L] / 2 - (ae < ne ? ce : ke) - k[L] / 2 < 0, J = fe ? ae < ne ? ae - ne : ae - we : 0;
    return {
      [O]: N[O] + J,
      data: {
        [O]: xe,
        centerOffset: ae - xe - J,
        ...fe && {
          alignmentOffset: J
        }
      },
      reset: fe
    };
  }
}), Ih = function(o) {
  return o === void 0 && (o = {}), {
    name: "flip",
    options: o,
    async fn(l) {
      var s, a;
      const {
        placement: f,
        middlewareData: d,
        rects: p,
        initialPlacement: m,
        platform: g,
        elements: y
      } = l, {
        mainAxis: P = !0,
        crossAxis: S = !0,
        fallbackPlacements: N,
        fallbackStrategy: O = "bestFit",
        fallbackAxisSideDirection: L = "none",
        flipAlignment: k = !0,
        ...A
      } = Ut(o, l);
      if ((s = d.arrow) != null && s.alignmentOffset)
        return {};
      const j = Bt(f), U = vn(m), B = Bt(m) === m, b = await (g.isRTL == null ? void 0 : g.isRTL(y.floating)), $ = N || (B || !k ? [Mi(m)] : Lh(m)), q = L !== "none";
      !N && q && $.push(...Mh(m, k, L, b));
      const G = [m, ...$], oe = await lo(l, A), me = [];
      let ce = ((a = d.flip) == null ? void 0 : a.overflows) || [];
      if (P && me.push(oe[j]), S) {
        const ae = Th(f, p, b);
        me.push(oe[ae[0]], oe[ae[1]]);
      }
      if (ce = [...ce, {
        placement: f,
        overflows: me
      }], !me.every((ae) => ae <= 0)) {
        var ke, ne;
        const ae = (((ke = d.flip) == null ? void 0 : ke.index) || 0) + 1, xe = G[ae];
        if (xe)
          return {
            data: {
              index: ae,
              overflows: ce
            },
            reset: {
              placement: xe
            }
          };
        let fe = (ne = ce.filter((J) => J.overflows[0] <= 0).sort((J, D) => J.overflows[1] - D.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!fe)
          switch (O) {
            case "bestFit": {
              var we;
              const J = (we = ce.filter((D) => {
                if (q) {
                  const V = vn(D.placement);
                  return V === U || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  V === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((V) => V > 0).reduce((V, H) => V + H, 0)]).sort((D, V) => D[1] - V[1])[0]) == null ? void 0 : we[0];
              J && (fe = J);
              break;
            }
            case "initialPlacement":
              fe = m;
              break;
          }
        if (f !== fe)
          return {
            reset: {
              placement: fe
            }
          };
      }
      return {};
    }
  };
};
function kf(o, l) {
  return {
    top: o.top - l.height,
    right: o.right - l.width,
    bottom: o.bottom - l.height,
    left: o.left - l.width
  };
}
function Ef(o) {
  return _h.some((l) => o[l] >= 0);
}
const bh = function(o) {
  return o === void 0 && (o = {}), {
    name: "hide",
    options: o,
    async fn(l) {
      const {
        rects: s
      } = l, {
        strategy: a = "referenceHidden",
        ...f
      } = Ut(o, l);
      switch (a) {
        case "referenceHidden": {
          const d = await lo(l, {
            ...f,
            elementContext: "reference"
          }), p = kf(d, s.reference);
          return {
            data: {
              referenceHiddenOffsets: p,
              referenceHidden: Ef(p)
            }
          };
        }
        case "escaped": {
          const d = await lo(l, {
            ...f,
            altBoundary: !0
          }), p = kf(d, s.floating);
          return {
            data: {
              escapedOffsets: p,
              escaped: Ef(p)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Wh(o, l) {
  const {
    placement: s,
    platform: a,
    elements: f
  } = o, d = await (a.isRTL == null ? void 0 : a.isRTL(f.floating)), p = Bt(s), m = hr(s), g = vn(s) === "y", y = ["left", "top"].includes(p) ? -1 : 1, P = d && g ? -1 : 1, S = Ut(l, o);
  let {
    mainAxis: N,
    crossAxis: O,
    alignmentAxis: L
  } = typeof S == "number" ? {
    mainAxis: S,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...S
  };
  return m && typeof L == "number" && (O = m === "end" ? L * -1 : L), g ? {
    x: O * P,
    y: N * y
  } : {
    x: N * y,
    y: O * P
  };
}
const Uh = function(o) {
  return o === void 0 && (o = 0), {
    name: "offset",
    options: o,
    async fn(l) {
      var s, a;
      const {
        x: f,
        y: d,
        placement: p,
        middlewareData: m
      } = l, g = await Wh(l, o);
      return p === ((s = m.offset) == null ? void 0 : s.placement) && (a = m.arrow) != null && a.alignmentOffset ? {} : {
        x: f + g.x,
        y: d + g.y,
        data: {
          ...g,
          placement: p
        }
      };
    }
  };
}, Bh = function(o) {
  return o === void 0 && (o = {}), {
    name: "shift",
    options: o,
    async fn(l) {
      const {
        x: s,
        y: a,
        placement: f
      } = l, {
        mainAxis: d = !0,
        crossAxis: p = !1,
        limiter: m = {
          fn: (A) => {
            let {
              x: j,
              y: U
            } = A;
            return {
              x: j,
              y: U
            };
          }
        },
        ...g
      } = Ut(o, l), y = {
        x: s,
        y: a
      }, P = await lo(l, g), S = vn(Bt(f)), N = tu(S);
      let O = y[N], L = y[S];
      if (d) {
        const A = N === "y" ? "top" : "left", j = N === "y" ? "bottom" : "right", U = O + P[A], B = O - P[j];
        O = Ys(U, O, B);
      }
      if (p) {
        const A = S === "y" ? "top" : "left", j = S === "y" ? "bottom" : "right", U = L + P[A], B = L - P[j];
        L = Ys(U, L, B);
      }
      const k = m.fn({
        ...l,
        [N]: O,
        [S]: L
      });
      return {
        ...k,
        data: {
          x: k.x - s,
          y: k.y - a
        }
      };
    }
  };
}, $h = function(o) {
  return o === void 0 && (o = {}), {
    options: o,
    fn(l) {
      const {
        x: s,
        y: a,
        placement: f,
        rects: d,
        middlewareData: p
      } = l, {
        offset: m = 0,
        mainAxis: g = !0,
        crossAxis: y = !0
      } = Ut(o, l), P = {
        x: s,
        y: a
      }, S = vn(f), N = tu(S);
      let O = P[N], L = P[S];
      const k = Ut(m, l), A = typeof k == "number" ? {
        mainAxis: k,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...k
      };
      if (g) {
        const B = N === "y" ? "height" : "width", b = d.reference[N] - d.floating[B] + A.mainAxis, $ = d.reference[N] + d.reference[B] - A.mainAxis;
        O < b ? O = b : O > $ && (O = $);
      }
      if (y) {
        var j, U;
        const B = N === "y" ? "width" : "height", b = ["top", "left"].includes(Bt(f)), $ = d.reference[S] - d.floating[B] + (b && ((j = p.offset) == null ? void 0 : j[S]) || 0) + (b ? 0 : A.crossAxis), q = d.reference[S] + d.reference[B] + (b ? 0 : ((U = p.offset) == null ? void 0 : U[S]) || 0) - (b ? A.crossAxis : 0);
        L < $ ? L = $ : L > q && (L = q);
      }
      return {
        [N]: O,
        [S]: L
      };
    }
  };
}, Vh = function(o) {
  return o === void 0 && (o = {}), {
    name: "size",
    options: o,
    async fn(l) {
      const {
        placement: s,
        rects: a,
        platform: f,
        elements: d
      } = l, {
        apply: p = () => {
        },
        ...m
      } = Ut(o, l), g = await lo(l, m), y = Bt(s), P = hr(s), S = vn(s) === "y", {
        width: N,
        height: O
      } = a.floating;
      let L, k;
      y === "top" || y === "bottom" ? (L = y, k = P === (await (f.isRTL == null ? void 0 : f.isRTL(d.floating)) ? "start" : "end") ? "left" : "right") : (k = y, L = P === "end" ? "top" : "bottom");
      const A = O - g.top - g.bottom, j = N - g.left - g.right, U = Nt(O - g[L], A), B = Nt(N - g[k], j), b = !l.middlewareData.shift;
      let $ = U, q = B;
      if (S ? q = P || b ? Nt(B, j) : j : $ = P || b ? Nt(U, A) : A, b && !P) {
        const oe = it(g.left, 0), me = it(g.right, 0), ce = it(g.top, 0), ke = it(g.bottom, 0);
        S ? q = N - 2 * (oe !== 0 || me !== 0 ? oe + me : it(g.left, g.right)) : $ = O - 2 * (ce !== 0 || ke !== 0 ? ce + ke : it(g.top, g.bottom));
      }
      await p({
        ...l,
        availableWidth: q,
        availableHeight: $
      });
      const G = await f.getDimensions(d.floating);
      return N !== G.width || O !== G.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vr(o) {
  return Zf(o) ? (o.nodeName || "").toLowerCase() : "#document";
}
function lt(o) {
  var l;
  return (o == null || (l = o.ownerDocument) == null ? void 0 : l.defaultView) || window;
}
function $t(o) {
  var l;
  return (l = (Zf(o) ? o.ownerDocument : o.document) || window.document) == null ? void 0 : l.documentElement;
}
function Zf(o) {
  return o instanceof Node || o instanceof lt(o).Node;
}
function _t(o) {
  return o instanceof Element || o instanceof lt(o).Element;
}
function Ot(o) {
  return o instanceof HTMLElement || o instanceof lt(o).HTMLElement;
}
function Cf(o) {
  return typeof ShadowRoot > "u" ? !1 : o instanceof ShadowRoot || o instanceof lt(o).ShadowRoot;
}
function ao(o) {
  const {
    overflow: l,
    overflowX: s,
    overflowY: a,
    display: f
  } = xt(o);
  return /auto|scroll|overlay|hidden|clip/.test(l + a + s) && !["inline", "contents"].includes(f);
}
function Hh(o) {
  return ["table", "td", "th"].includes(vr(o));
}
function Ii(o) {
  return [":popover-open", ":modal"].some((l) => {
    try {
      return o.matches(l);
    } catch {
      return !1;
    }
  });
}
function ou(o) {
  const l = iu(), s = xt(o);
  return s.transform !== "none" || s.perspective !== "none" || (s.containerType ? s.containerType !== "normal" : !1) || !l && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !l && (s.filter ? s.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((a) => (s.willChange || "").includes(a)) || ["paint", "layout", "strict", "content"].some((a) => (s.contain || "").includes(a));
}
function Qh(o) {
  let l = gn(o);
  for (; Ot(l) && !pr(l); ) {
    if (Ii(l))
      return null;
    if (ou(l))
      return l;
    l = gn(l);
  }
  return null;
}
function iu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function pr(o) {
  return ["html", "body", "#document"].includes(vr(o));
}
function xt(o) {
  return lt(o).getComputedStyle(o);
}
function bi(o) {
  return _t(o) ? {
    scrollLeft: o.scrollLeft,
    scrollTop: o.scrollTop
  } : {
    scrollLeft: o.scrollX,
    scrollTop: o.scrollY
  };
}
function gn(o) {
  if (vr(o) === "html")
    return o;
  const l = (
    // Step into the shadow DOM of the parent of a slotted node.
    o.assignedSlot || // DOM Element detected.
    o.parentNode || // ShadowRoot detected.
    Cf(o) && o.host || // Fallback.
    $t(o)
  );
  return Cf(l) ? l.host : l;
}
function Jf(o) {
  const l = gn(o);
  return pr(l) ? o.ownerDocument ? o.ownerDocument.body : o.body : Ot(l) && ao(l) ? l : Jf(l);
}
function so(o, l, s) {
  var a;
  l === void 0 && (l = []), s === void 0 && (s = !0);
  const f = Jf(o), d = f === ((a = o.ownerDocument) == null ? void 0 : a.body), p = lt(f);
  return d ? l.concat(p, p.visualViewport || [], ao(f) ? f : [], p.frameElement && s ? so(p.frameElement) : []) : l.concat(f, so(f, [], s));
}
function qf(o) {
  const l = xt(o);
  let s = parseFloat(l.width) || 0, a = parseFloat(l.height) || 0;
  const f = Ot(o), d = f ? o.offsetWidth : s, p = f ? o.offsetHeight : a, m = zi(s) !== d || zi(a) !== p;
  return m && (s = d, a = p), {
    width: s,
    height: a,
    $: m
  };
}
function lu(o) {
  return _t(o) ? o : o.contextElement;
}
function fr(o) {
  const l = lu(o);
  if (!Ot(l))
    return hn(1);
  const s = l.getBoundingClientRect(), {
    width: a,
    height: f,
    $: d
  } = qf(l);
  let p = (d ? zi(s.width) : s.width) / a, m = (d ? zi(s.height) : s.height) / f;
  return (!p || !Number.isFinite(p)) && (p = 1), (!m || !Number.isFinite(m)) && (m = 1), {
    x: p,
    y: m
  };
}
const Kh = /* @__PURE__ */ hn(0);
function ed(o) {
  const l = lt(o);
  return !iu() || !l.visualViewport ? Kh : {
    x: l.visualViewport.offsetLeft,
    y: l.visualViewport.offsetTop
  };
}
function Yh(o, l, s) {
  return l === void 0 && (l = !1), !s || l && s !== lt(o) ? !1 : l;
}
function Dn(o, l, s, a) {
  l === void 0 && (l = !1), s === void 0 && (s = !1);
  const f = o.getBoundingClientRect(), d = lu(o);
  let p = hn(1);
  l && (a ? _t(a) && (p = fr(a)) : p = fr(o));
  const m = Yh(d, s, a) ? ed(d) : hn(0);
  let g = (f.left + m.x) / p.x, y = (f.top + m.y) / p.y, P = f.width / p.x, S = f.height / p.y;
  if (d) {
    const N = lt(d), O = a && _t(a) ? lt(a) : a;
    let L = N, k = L.frameElement;
    for (; k && a && O !== L; ) {
      const A = fr(k), j = k.getBoundingClientRect(), U = xt(k), B = j.left + (k.clientLeft + parseFloat(U.paddingLeft)) * A.x, b = j.top + (k.clientTop + parseFloat(U.paddingTop)) * A.y;
      g *= A.x, y *= A.y, P *= A.x, S *= A.y, g += B, y += b, L = lt(k), k = L.frameElement;
    }
  }
  return Di({
    width: P,
    height: S,
    x: g,
    y
  });
}
function Gh(o) {
  let {
    elements: l,
    rect: s,
    offsetParent: a,
    strategy: f
  } = o;
  const d = f === "fixed", p = $t(a), m = l ? Ii(l.floating) : !1;
  if (a === p || m && d)
    return s;
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  }, y = hn(1);
  const P = hn(0), S = Ot(a);
  if ((S || !S && !d) && ((vr(a) !== "body" || ao(p)) && (g = bi(a)), Ot(a))) {
    const N = Dn(a);
    y = fr(a), P.x = N.x + a.clientLeft, P.y = N.y + a.clientTop;
  }
  return {
    width: s.width * y.x,
    height: s.height * y.y,
    x: s.x * y.x - g.scrollLeft * y.x + P.x,
    y: s.y * y.y - g.scrollTop * y.y + P.y
  };
}
function Xh(o) {
  return Array.from(o.getClientRects());
}
function td(o) {
  return Dn($t(o)).left + bi(o).scrollLeft;
}
function Zh(o) {
  const l = $t(o), s = bi(o), a = o.ownerDocument.body, f = it(l.scrollWidth, l.clientWidth, a.scrollWidth, a.clientWidth), d = it(l.scrollHeight, l.clientHeight, a.scrollHeight, a.clientHeight);
  let p = -s.scrollLeft + td(o);
  const m = -s.scrollTop;
  return xt(a).direction === "rtl" && (p += it(l.clientWidth, a.clientWidth) - f), {
    width: f,
    height: d,
    x: p,
    y: m
  };
}
function Jh(o, l) {
  const s = lt(o), a = $t(o), f = s.visualViewport;
  let d = a.clientWidth, p = a.clientHeight, m = 0, g = 0;
  if (f) {
    d = f.width, p = f.height;
    const y = iu();
    (!y || y && l === "fixed") && (m = f.offsetLeft, g = f.offsetTop);
  }
  return {
    width: d,
    height: p,
    x: m,
    y: g
  };
}
function qh(o, l) {
  const s = Dn(o, !0, l === "fixed"), a = s.top + o.clientTop, f = s.left + o.clientLeft, d = Ot(o) ? fr(o) : hn(1), p = o.clientWidth * d.x, m = o.clientHeight * d.y, g = f * d.x, y = a * d.y;
  return {
    width: p,
    height: m,
    x: g,
    y
  };
}
function Pf(o, l, s) {
  let a;
  if (l === "viewport")
    a = Jh(o, s);
  else if (l === "document")
    a = Zh($t(o));
  else if (_t(l))
    a = qh(l, s);
  else {
    const f = ed(o);
    a = {
      ...l,
      x: l.x - f.x,
      y: l.y - f.y
    };
  }
  return Di(a);
}
function nd(o, l) {
  const s = gn(o);
  return s === l || !_t(s) || pr(s) ? !1 : xt(s).position === "fixed" || nd(s, l);
}
function ev(o, l) {
  const s = l.get(o);
  if (s)
    return s;
  let a = so(o, [], !1).filter((m) => _t(m) && vr(m) !== "body"), f = null;
  const d = xt(o).position === "fixed";
  let p = d ? gn(o) : o;
  for (; _t(p) && !pr(p); ) {
    const m = xt(p), g = ou(p);
    !g && m.position === "fixed" && (f = null), (d ? !g && !f : !g && m.position === "static" && !!f && ["absolute", "fixed"].includes(f.position) || ao(p) && !g && nd(o, p)) ? a = a.filter((P) => P !== p) : f = m, p = gn(p);
  }
  return l.set(o, a), a;
}
function tv(o) {
  let {
    element: l,
    boundary: s,
    rootBoundary: a,
    strategy: f
  } = o;
  const p = [...s === "clippingAncestors" ? Ii(l) ? [] : ev(l, this._c) : [].concat(s), a], m = p[0], g = p.reduce((y, P) => {
    const S = Pf(l, P, f);
    return y.top = it(S.top, y.top), y.right = Nt(S.right, y.right), y.bottom = Nt(S.bottom, y.bottom), y.left = it(S.left, y.left), y;
  }, Pf(l, m, f));
  return {
    width: g.right - g.left,
    height: g.bottom - g.top,
    x: g.left,
    y: g.top
  };
}
function nv(o) {
  const {
    width: l,
    height: s
  } = qf(o);
  return {
    width: l,
    height: s
  };
}
function rv(o, l, s) {
  const a = Ot(l), f = $t(l), d = s === "fixed", p = Dn(o, !0, d, l);
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const g = hn(0);
  if (a || !a && !d)
    if ((vr(l) !== "body" || ao(f)) && (m = bi(l)), a) {
      const S = Dn(l, !0, d, l);
      g.x = S.x + l.clientLeft, g.y = S.y + l.clientTop;
    } else f && (g.x = td(f));
  const y = p.left + m.scrollLeft - g.x, P = p.top + m.scrollTop - g.y;
  return {
    x: y,
    y: P,
    width: p.width,
    height: p.height
  };
}
function Ws(o) {
  return xt(o).position === "static";
}
function Rf(o, l) {
  return !Ot(o) || xt(o).position === "fixed" ? null : l ? l(o) : o.offsetParent;
}
function rd(o, l) {
  const s = lt(o);
  if (Ii(o))
    return s;
  if (!Ot(o)) {
    let f = gn(o);
    for (; f && !pr(f); ) {
      if (_t(f) && !Ws(f))
        return f;
      f = gn(f);
    }
    return s;
  }
  let a = Rf(o, l);
  for (; a && Hh(a) && Ws(a); )
    a = Rf(a, l);
  return a && pr(a) && Ws(a) && !ou(a) ? s : a || Qh(o) || s;
}
const ov = async function(o) {
  const l = this.getOffsetParent || rd, s = this.getDimensions, a = await s(o.floating);
  return {
    reference: rv(o.reference, await l(o.floating), o.strategy),
    floating: {
      x: 0,
      y: 0,
      width: a.width,
      height: a.height
    }
  };
};
function iv(o) {
  return xt(o).direction === "rtl";
}
const lv = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gh,
  getDocumentElement: $t,
  getClippingRect: tv,
  getOffsetParent: rd,
  getElementRects: ov,
  getClientRects: Xh,
  getDimensions: nv,
  getScale: fr,
  isElement: _t,
  isRTL: iv
};
function sv(o, l) {
  let s = null, a;
  const f = $t(o);
  function d() {
    var m;
    clearTimeout(a), (m = s) == null || m.disconnect(), s = null;
  }
  function p(m, g) {
    m === void 0 && (m = !1), g === void 0 && (g = 1), d();
    const {
      left: y,
      top: P,
      width: S,
      height: N
    } = o.getBoundingClientRect();
    if (m || l(), !S || !N)
      return;
    const O = ki(P), L = ki(f.clientWidth - (y + S)), k = ki(f.clientHeight - (P + N)), A = ki(y), U = {
      rootMargin: -O + "px " + -L + "px " + -k + "px " + -A + "px",
      threshold: it(0, Nt(1, g)) || 1
    };
    let B = !0;
    function b($) {
      const q = $[0].intersectionRatio;
      if (q !== g) {
        if (!B)
          return p();
        q ? p(!1, q) : a = setTimeout(() => {
          p(!1, 1e-7);
        }, 1e3);
      }
      B = !1;
    }
    try {
      s = new IntersectionObserver(b, {
        ...U,
        // Handle <iframe>s
        root: f.ownerDocument
      });
    } catch {
      s = new IntersectionObserver(b, U);
    }
    s.observe(o);
  }
  return p(!0), d;
}
function uv(o, l, s, a) {
  a === void 0 && (a = {});
  const {
    ancestorScroll: f = !0,
    ancestorResize: d = !0,
    elementResize: p = typeof ResizeObserver == "function",
    layoutShift: m = typeof IntersectionObserver == "function",
    animationFrame: g = !1
  } = a, y = lu(o), P = f || d ? [...y ? so(y) : [], ...so(l)] : [];
  P.forEach((j) => {
    f && j.addEventListener("scroll", s, {
      passive: !0
    }), d && j.addEventListener("resize", s);
  });
  const S = y && m ? sv(y, s) : null;
  let N = -1, O = null;
  p && (O = new ResizeObserver((j) => {
    let [U] = j;
    U && U.target === y && O && (O.unobserve(l), cancelAnimationFrame(N), N = requestAnimationFrame(() => {
      var B;
      (B = O) == null || B.observe(l);
    })), s();
  }), y && !g && O.observe(y), O.observe(l));
  let L, k = g ? Dn(o) : null;
  g && A();
  function A() {
    const j = Dn(o);
    k && (j.x !== k.x || j.y !== k.y || j.width !== k.width || j.height !== k.height) && s(), k = j, L = requestAnimationFrame(A);
  }
  return s(), () => {
    var j;
    P.forEach((U) => {
      f && U.removeEventListener("scroll", s), d && U.removeEventListener("resize", s);
    }), S?.(), (j = O) == null || j.disconnect(), O = null, g && cancelAnimationFrame(L);
  };
}
const av = Uh, cv = Bh, fv = Ih, dv = Vh, pv = bh, Nf = Fh, mv = $h, hv = (o, l, s) => {
  const a = /* @__PURE__ */ new Map(), f = {
    platform: lv,
    ...s
  }, d = {
    ...f.platform,
    _c: a
  };
  return jh(o, l, {
    ...f,
    platform: d
  });
};
var Oi = typeof document < "u" ? C.useLayoutEffect : C.useEffect;
function ji(o, l) {
  if (o === l)
    return !0;
  if (typeof o != typeof l)
    return !1;
  if (typeof o == "function" && o.toString() === l.toString())
    return !0;
  let s, a, f;
  if (o && l && typeof o == "object") {
    if (Array.isArray(o)) {
      if (s = o.length, s !== l.length) return !1;
      for (a = s; a-- !== 0; )
        if (!ji(o[a], l[a]))
          return !1;
      return !0;
    }
    if (f = Object.keys(o), s = f.length, s !== Object.keys(l).length)
      return !1;
    for (a = s; a-- !== 0; )
      if (!{}.hasOwnProperty.call(l, f[a]))
        return !1;
    for (a = s; a-- !== 0; ) {
      const d = f[a];
      if (!(d === "_owner" && o.$$typeof) && !ji(o[d], l[d]))
        return !1;
    }
    return !0;
  }
  return o !== o && l !== l;
}
function od(o) {
  return typeof window > "u" ? 1 : (o.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _f(o, l) {
  const s = od(o);
  return Math.round(l * s) / s;
}
function Of(o) {
  const l = C.useRef(o);
  return Oi(() => {
    l.current = o;
  }), l;
}
function vv(o) {
  o === void 0 && (o = {});
  const {
    placement: l = "bottom",
    strategy: s = "absolute",
    middleware: a = [],
    platform: f,
    elements: {
      reference: d,
      floating: p
    } = {},
    transform: m = !0,
    whileElementsMounted: g,
    open: y
  } = o, [P, S] = C.useState({
    x: 0,
    y: 0,
    strategy: s,
    placement: l,
    middlewareData: {},
    isPositioned: !1
  }), [N, O] = C.useState(a);
  ji(N, a) || O(a);
  const [L, k] = C.useState(null), [A, j] = C.useState(null), U = C.useCallback((J) => {
    J !== q.current && (q.current = J, k(J));
  }, []), B = C.useCallback((J) => {
    J !== G.current && (G.current = J, j(J));
  }, []), b = d || L, $ = p || A, q = C.useRef(null), G = C.useRef(null), oe = C.useRef(P), me = g != null, ce = Of(g), ke = Of(f), ne = C.useCallback(() => {
    if (!q.current || !G.current)
      return;
    const J = {
      placement: l,
      strategy: s,
      middleware: N
    };
    ke.current && (J.platform = ke.current), hv(q.current, G.current, J).then((D) => {
      const V = {
        ...D,
        isPositioned: !0
      };
      we.current && !ji(oe.current, V) && (oe.current = V, uo.flushSync(() => {
        S(V);
      }));
    });
  }, [N, l, s, ke]);
  Oi(() => {
    y === !1 && oe.current.isPositioned && (oe.current.isPositioned = !1, S((J) => ({
      ...J,
      isPositioned: !1
    })));
  }, [y]);
  const we = C.useRef(!1);
  Oi(() => (we.current = !0, () => {
    we.current = !1;
  }), []), Oi(() => {
    if (b && (q.current = b), $ && (G.current = $), b && $) {
      if (ce.current)
        return ce.current(b, $, ne);
      ne();
    }
  }, [b, $, ne, ce, me]);
  const ae = C.useMemo(() => ({
    reference: q,
    floating: G,
    setReference: U,
    setFloating: B
  }), [U, B]), xe = C.useMemo(() => ({
    reference: b,
    floating: $
  }), [b, $]), fe = C.useMemo(() => {
    const J = {
      position: s,
      left: 0,
      top: 0
    };
    if (!xe.floating)
      return J;
    const D = _f(xe.floating, P.x), V = _f(xe.floating, P.y);
    return m ? {
      ...J,
      transform: "translate(" + D + "px, " + V + "px)",
      ...od(xe.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: s,
      left: D,
      top: V
    };
  }, [s, m, xe.floating, P.x, P.y]);
  return C.useMemo(() => ({
    ...P,
    update: ne,
    refs: ae,
    elements: xe,
    floatingStyles: fe
  }), [P, ne, ae, xe, fe]);
}
const gv = (o) => {
  function l(s) {
    return {}.hasOwnProperty.call(s, "current");
  }
  return {
    name: "arrow",
    options: o,
    fn(s) {
      const {
        element: a,
        padding: f
      } = typeof o == "function" ? o(s) : o;
      return a && l(a) ? a.current != null ? Nf({
        element: a.current,
        padding: f
      }).fn(s) : {} : a ? Nf({
        element: a,
        padding: f
      }).fn(s) : {};
    }
  };
}, yv = (o, l) => ({
  ...av(o),
  options: [o, l]
}), wv = (o, l) => ({
  ...cv(o),
  options: [o, l]
}), xv = (o, l) => ({
  ...mv(o),
  options: [o, l]
}), Sv = (o, l) => ({
  ...fv(o),
  options: [o, l]
}), kv = (o, l) => ({
  ...dv(o),
  options: [o, l]
}), Ev = (o, l) => ({
  ...pv(o),
  options: [o, l]
}), Cv = (o, l) => ({
  ...gv(o),
  options: [o, l]
});
var Pv = "Arrow", id = C.forwardRef((o, l) => {
  const { children: s, width: a = 10, height: f = 5, ...d } = o;
  return /* @__PURE__ */ W.jsx(
    At.svg,
    {
      ...d,
      ref: l,
      width: a,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: o.asChild ? s : /* @__PURE__ */ W.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
id.displayName = Pv;
var Rv = id;
function Nv(o) {
  const [l, s] = C.useState(void 0);
  return Mn(() => {
    if (o) {
      s({ width: o.offsetWidth, height: o.offsetHeight });
      const a = new ResizeObserver((f) => {
        if (!Array.isArray(f) || !f.length)
          return;
        const d = f[0];
        let p, m;
        if ("borderBoxSize" in d) {
          const g = d.borderBoxSize, y = Array.isArray(g) ? g[0] : g;
          p = y.inlineSize, m = y.blockSize;
        } else
          p = o.offsetWidth, m = o.offsetHeight;
        s({ width: p, height: m });
      });
      return a.observe(o, { box: "border-box" }), () => a.unobserve(o);
    } else
      s(void 0);
  }, [o]), l;
}
var su = "Popper", [ld, sd] = Vf(su), [_v, ud] = ld(su), ad = (o) => {
  const { __scopePopper: l, children: s } = o, [a, f] = C.useState(null);
  return /* @__PURE__ */ W.jsx(_v, { scope: l, anchor: a, onAnchorChange: f, children: s });
};
ad.displayName = su;
var cd = "PopperAnchor", fd = C.forwardRef(
  (o, l) => {
    const { __scopePopper: s, virtualRef: a, ...f } = o, d = ud(cd, s), p = C.useRef(null), m = yn(l, p);
    return C.useEffect(() => {
      d.onAnchorChange(a?.current || p.current);
    }), a ? null : /* @__PURE__ */ W.jsx(At.div, { ...f, ref: m });
  }
);
fd.displayName = cd;
var uu = "PopperContent", [Ov, Av] = ld(uu), dd = C.forwardRef(
  (o, l) => {
    const {
      __scopePopper: s,
      side: a = "bottom",
      sideOffset: f = 0,
      align: d = "center",
      alignOffset: p = 0,
      arrowPadding: m = 0,
      avoidCollisions: g = !0,
      collisionBoundary: y = [],
      collisionPadding: P = 0,
      sticky: S = "partial",
      hideWhenDetached: N = !1,
      updatePositionStrategy: O = "optimized",
      onPlaced: L,
      ...k
    } = o, A = ud(uu, s), [j, U] = C.useState(null), B = yn(l, (ve) => U(ve)), [b, $] = C.useState(null), q = Nv(b), G = q?.width ?? 0, oe = q?.height ?? 0, me = a + (d !== "center" ? "-" + d : ""), ce = typeof P == "number" ? P : { top: 0, right: 0, bottom: 0, left: 0, ...P }, ke = Array.isArray(y) ? y : [y], ne = ke.length > 0, we = {
      padding: ce,
      boundary: ke.filter(Lv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: ne
    }, { refs: ae, floatingStyles: xe, placement: fe, isPositioned: J, middlewareData: D } = vv({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: me,
      whileElementsMounted: (...ve) => uv(...ve, {
        animationFrame: O === "always"
      }),
      elements: {
        reference: A.anchor
      },
      middleware: [
        yv({ mainAxis: f + oe, alignmentAxis: p }),
        g && wv({
          mainAxis: !0,
          crossAxis: !1,
          limiter: S === "partial" ? xv() : void 0,
          ...we
        }),
        g && Sv({ ...we }),
        kv({
          ...we,
          apply: ({ elements: ve, rects: ge, availableWidth: Ee, availableHeight: Qe }) => {
            const { width: jn, height: po } = ge.reference, Tt = ve.floating.style;
            Tt.setProperty("--radix-popper-available-width", `${Ee}px`), Tt.setProperty("--radix-popper-available-height", `${Qe}px`), Tt.setProperty("--radix-popper-anchor-width", `${jn}px`), Tt.setProperty("--radix-popper-anchor-height", `${po}px`);
          }
        }),
        b && Cv({ element: b, padding: m }),
        zv({ arrowWidth: G, arrowHeight: oe }),
        N && Ev({ strategy: "referenceHidden", ...we })
      ]
    }), [V, H] = hd(fe), x = mn(L);
    Mn(() => {
      J && x?.();
    }, [J, x]);
    const T = D.arrow?.x, ie = D.arrow?.y, se = D.arrow?.centerOffset !== 0, [de, pe] = C.useState();
    return Mn(() => {
      j && pe(window.getComputedStyle(j).zIndex);
    }, [j]), /* @__PURE__ */ W.jsx(
      "div",
      {
        ref: ae.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...xe,
          transform: J ? xe.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: de,
          "--radix-popper-transform-origin": [
            D.transformOrigin?.x,
            D.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...D.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: o.dir,
        children: /* @__PURE__ */ W.jsx(
          Ov,
          {
            scope: s,
            placedSide: V,
            onArrowChange: $,
            arrowX: T,
            arrowY: ie,
            shouldHideArrow: se,
            children: /* @__PURE__ */ W.jsx(
              At.div,
              {
                "data-side": V,
                "data-align": H,
                ...k,
                ref: B,
                style: {
                  ...k.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: J ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
dd.displayName = uu;
var pd = "PopperArrow", Tv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, md = C.forwardRef(function(l, s) {
  const { __scopePopper: a, ...f } = l, d = Av(pd, a), p = Tv[d.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ W.jsx(
      "span",
      {
        ref: d.onArrowChange,
        style: {
          position: "absolute",
          left: d.arrowX,
          top: d.arrowY,
          [p]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[d.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[d.placedSide],
          visibility: d.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ W.jsx(
          Rv,
          {
            ...f,
            ref: s,
            style: {
              ...f.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
md.displayName = pd;
function Lv(o) {
  return o !== null;
}
var zv = (o) => ({
  name: "transformOrigin",
  options: o,
  fn(l) {
    const { placement: s, rects: a, middlewareData: f } = l, p = f.arrow?.centerOffset !== 0, m = p ? 0 : o.arrowWidth, g = p ? 0 : o.arrowHeight, [y, P] = hd(s), S = { start: "0%", center: "50%", end: "100%" }[P], N = (f.arrow?.x ?? 0) + m / 2, O = (f.arrow?.y ?? 0) + g / 2;
    let L = "", k = "";
    return y === "bottom" ? (L = p ? S : `${N}px`, k = `${-g}px`) : y === "top" ? (L = p ? S : `${N}px`, k = `${a.floating.height + g}px`) : y === "right" ? (L = `${-g}px`, k = p ? S : `${O}px`) : y === "left" && (L = `${a.floating.width + g}px`, k = p ? S : `${O}px`), { data: { x: L, y: k } };
  }
});
function hd(o) {
  const [l, s = "center"] = o.split("-");
  return [l, s];
}
var Mv = ad, vd = fd, Dv = dd, jv = md, Fv = "Portal", gd = C.forwardRef((o, l) => {
  const { container: s, ...a } = o, [f, d] = C.useState(!1);
  Mn(() => d(!0), []);
  const p = s || f && globalThis?.document?.body;
  return p ? Jm.createPortal(/* @__PURE__ */ W.jsx(At.div, { ...a, ref: l }), p) : null;
});
gd.displayName = Fv;
function Iv(o, l) {
  return C.useReducer((s, a) => l[s][a] ?? s, o);
}
var au = (o) => {
  const { present: l, children: s } = o, a = bv(l), f = typeof s == "function" ? s({ present: a.isPresent }) : C.Children.only(s), d = yn(a.ref, Wv(f));
  return typeof s == "function" || a.isPresent ? C.cloneElement(f, { ref: d }) : null;
};
au.displayName = "Presence";
function bv(o) {
  const [l, s] = C.useState(), a = C.useRef({}), f = C.useRef(o), d = C.useRef("none"), p = o ? "mounted" : "unmounted", [m, g] = Iv(p, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return C.useEffect(() => {
    const y = Ei(a.current);
    d.current = m === "mounted" ? y : "none";
  }, [m]), Mn(() => {
    const y = a.current, P = f.current;
    if (P !== o) {
      const N = d.current, O = Ei(y);
      o ? g("MOUNT") : O === "none" || y?.display === "none" ? g("UNMOUNT") : g(P && N !== O ? "ANIMATION_OUT" : "UNMOUNT"), f.current = o;
    }
  }, [o, g]), Mn(() => {
    if (l) {
      const y = (S) => {
        const O = Ei(a.current).includes(S.animationName);
        S.target === l && O && uo.flushSync(() => g("ANIMATION_END"));
      }, P = (S) => {
        S.target === l && (d.current = Ei(a.current));
      };
      return l.addEventListener("animationstart", P), l.addEventListener("animationcancel", y), l.addEventListener("animationend", y), () => {
        l.removeEventListener("animationstart", P), l.removeEventListener("animationcancel", y), l.removeEventListener("animationend", y);
      };
    } else
      g("ANIMATION_END");
  }, [l, g]), {
    isPresent: ["mounted", "unmountSuspended"].includes(m),
    ref: C.useCallback((y) => {
      y && (a.current = getComputedStyle(y)), s(y);
    }, [])
  };
}
function Ei(o) {
  return o?.animationName || "none";
}
function Wv(o) {
  let l = Object.getOwnPropertyDescriptor(o.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? o.ref : (l = Object.getOwnPropertyDescriptor(o, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? o.props.ref : o.props.ref || o.ref);
}
function Uv({
  prop: o,
  defaultProp: l,
  onChange: s = () => {
  }
}) {
  const [a, f] = Bv({ defaultProp: l, onChange: s }), d = o !== void 0, p = d ? o : a, m = mn(s), g = C.useCallback(
    (y) => {
      if (d) {
        const S = typeof y == "function" ? y(o) : y;
        S !== o && m(S);
      } else
        f(y);
    },
    [d, o, f, m]
  );
  return [p, g];
}
function Bv({
  defaultProp: o,
  onChange: l
}) {
  const s = C.useState(o), [a] = s, f = C.useRef(a), d = mn(l);
  return C.useEffect(() => {
    f.current !== a && (d(a), f.current = a);
  }, [a, f, d]), s;
}
var $v = function(o) {
  if (typeof document > "u")
    return null;
  var l = Array.isArray(o) ? o[0] : o;
  return l.ownerDocument.body;
}, ur = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Pi = {}, Us = 0, yd = function(o) {
  return o && (o.host || yd(o.parentNode));
}, Vv = function(o, l) {
  return l.map(function(s) {
    if (o.contains(s))
      return s;
    var a = yd(s);
    return a && o.contains(a) ? a : (console.error("aria-hidden", s, "in not contained inside", o, ". Doing nothing"), null);
  }).filter(function(s) {
    return !!s;
  });
}, Hv = function(o, l, s, a) {
  var f = Vv(l, Array.isArray(o) ? o : [o]);
  Pi[s] || (Pi[s] = /* @__PURE__ */ new WeakMap());
  var d = Pi[s], p = [], m = /* @__PURE__ */ new Set(), g = new Set(f), y = function(S) {
    !S || m.has(S) || (m.add(S), y(S.parentNode));
  };
  f.forEach(y);
  var P = function(S) {
    !S || g.has(S) || Array.prototype.forEach.call(S.children, function(N) {
      if (m.has(N))
        P(N);
      else
        try {
          var O = N.getAttribute(a), L = O !== null && O !== "false", k = (ur.get(N) || 0) + 1, A = (d.get(N) || 0) + 1;
          ur.set(N, k), d.set(N, A), p.push(N), k === 1 && L && Ci.set(N, !0), A === 1 && N.setAttribute(s, "true"), L || N.setAttribute(a, "true");
        } catch (j) {
          console.error("aria-hidden: cannot operate on ", N, j);
        }
    });
  };
  return P(l), m.clear(), Us++, function() {
    p.forEach(function(S) {
      var N = ur.get(S) - 1, O = d.get(S) - 1;
      ur.set(S, N), d.set(S, O), N || (Ci.has(S) || S.removeAttribute(a), Ci.delete(S)), O || S.removeAttribute(s);
    }), Us--, Us || (ur = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), Ci = /* @__PURE__ */ new WeakMap(), Pi = {});
  };
}, Qv = function(o, l, s) {
  s === void 0 && (s = "data-aria-hidden");
  var a = Array.from(Array.isArray(o) ? o : [o]), f = $v(o);
  return f ? (a.push.apply(a, Array.from(f.querySelectorAll("[aria-live]"))), Hv(a, f, s, "aria-hidden")) : function() {
    return null;
  };
}, Rt = function() {
  return Rt = Object.assign || function(l) {
    for (var s, a = 1, f = arguments.length; a < f; a++) {
      s = arguments[a];
      for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (l[d] = s[d]);
    }
    return l;
  }, Rt.apply(this, arguments);
};
function wd(o, l) {
  var s = {};
  for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && l.indexOf(a) < 0 && (s[a] = o[a]);
  if (o != null && typeof Object.getOwnPropertySymbols == "function")
    for (var f = 0, a = Object.getOwnPropertySymbols(o); f < a.length; f++)
      l.indexOf(a[f]) < 0 && Object.prototype.propertyIsEnumerable.call(o, a[f]) && (s[a[f]] = o[a[f]]);
  return s;
}
function Kv(o, l, s) {
  if (s || arguments.length === 2) for (var a = 0, f = l.length, d; a < f; a++)
    (d || !(a in l)) && (d || (d = Array.prototype.slice.call(l, 0, a)), d[a] = l[a]);
  return o.concat(d || Array.prototype.slice.call(l));
}
var Ai = "right-scroll-bar-position", Ti = "width-before-scroll-bar", Yv = "with-scroll-bars-hidden", Gv = "--removed-body-scroll-bar-size";
function Bs(o, l) {
  return typeof o == "function" ? o(l) : o && (o.current = l), o;
}
function Xv(o, l) {
  var s = C.useState(function() {
    return {
      // value
      value: o,
      // last callback
      callback: l,
      // "memoized" public interface
      facade: {
        get current() {
          return s.value;
        },
        set current(a) {
          var f = s.value;
          f !== a && (s.value = a, s.callback(a, f));
        }
      }
    };
  })[0];
  return s.callback = l, s.facade;
}
var Zv = typeof window < "u" ? C.useLayoutEffect : C.useEffect, Af = /* @__PURE__ */ new WeakMap();
function Jv(o, l) {
  var s = Xv(null, function(a) {
    return o.forEach(function(f) {
      return Bs(f, a);
    });
  });
  return Zv(function() {
    var a = Af.get(s);
    if (a) {
      var f = new Set(a), d = new Set(o), p = s.current;
      f.forEach(function(m) {
        d.has(m) || Bs(m, null);
      }), d.forEach(function(m) {
        f.has(m) || Bs(m, p);
      });
    }
    Af.set(s, o);
  }, [o]), s;
}
function qv(o) {
  return o;
}
function eg(o, l) {
  l === void 0 && (l = qv);
  var s = [], a = !1, f = {
    read: function() {
      if (a)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return s.length ? s[s.length - 1] : o;
    },
    useMedium: function(d) {
      var p = l(d, a);
      return s.push(p), function() {
        s = s.filter(function(m) {
          return m !== p;
        });
      };
    },
    assignSyncMedium: function(d) {
      for (a = !0; s.length; ) {
        var p = s;
        s = [], p.forEach(d);
      }
      s = {
        push: function(m) {
          return d(m);
        },
        filter: function() {
          return s;
        }
      };
    },
    assignMedium: function(d) {
      a = !0;
      var p = [];
      if (s.length) {
        var m = s;
        s = [], m.forEach(d), p = s;
      }
      var g = function() {
        var P = p;
        p = [], P.forEach(d);
      }, y = function() {
        return Promise.resolve().then(g);
      };
      y(), s = {
        push: function(P) {
          p.push(P), y();
        },
        filter: function(P) {
          return p = p.filter(P), s;
        }
      };
    }
  };
  return f;
}
function tg(o) {
  o === void 0 && (o = {});
  var l = eg(null);
  return l.options = Rt({ async: !0, ssr: !1 }, o), l;
}
var xd = function(o) {
  var l = o.sideCar, s = wd(o, ["sideCar"]);
  if (!l)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var a = l.read();
  if (!a)
    throw new Error("Sidecar medium not found");
  return C.createElement(a, Rt({}, s));
};
xd.isSideCarExport = !0;
function ng(o, l) {
  return o.useMedium(l), xd;
}
var Sd = tg(), $s = function() {
}, Wi = C.forwardRef(function(o, l) {
  var s = C.useRef(null), a = C.useState({
    onScrollCapture: $s,
    onWheelCapture: $s,
    onTouchMoveCapture: $s
  }), f = a[0], d = a[1], p = o.forwardProps, m = o.children, g = o.className, y = o.removeScrollBar, P = o.enabled, S = o.shards, N = o.sideCar, O = o.noIsolation, L = o.inert, k = o.allowPinchZoom, A = o.as, j = A === void 0 ? "div" : A, U = o.gapMode, B = wd(o, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = N, $ = Jv([s, l]), q = Rt(Rt({}, B), f);
  return C.createElement(
    C.Fragment,
    null,
    P && C.createElement(b, { sideCar: Sd, removeScrollBar: y, shards: S, noIsolation: O, inert: L, setCallbacks: d, allowPinchZoom: !!k, lockRef: s, gapMode: U }),
    p ? C.cloneElement(C.Children.only(m), Rt(Rt({}, q), { ref: $ })) : C.createElement(j, Rt({}, q, { className: g, ref: $ }), m)
  );
});
Wi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Wi.classNames = {
  fullWidth: Ti,
  zeroRight: Ai
};
var rg = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function og() {
  if (!document)
    return null;
  var o = document.createElement("style");
  o.type = "text/css";
  var l = rg();
  return l && o.setAttribute("nonce", l), o;
}
function ig(o, l) {
  o.styleSheet ? o.styleSheet.cssText = l : o.appendChild(document.createTextNode(l));
}
function lg(o) {
  var l = document.head || document.getElementsByTagName("head")[0];
  l.appendChild(o);
}
var sg = function() {
  var o = 0, l = null;
  return {
    add: function(s) {
      o == 0 && (l = og()) && (ig(l, s), lg(l)), o++;
    },
    remove: function() {
      o--, !o && l && (l.parentNode && l.parentNode.removeChild(l), l = null);
    }
  };
}, ug = function() {
  var o = sg();
  return function(l, s) {
    C.useEffect(function() {
      return o.add(l), function() {
        o.remove();
      };
    }, [l && s]);
  };
}, kd = function() {
  var o = ug(), l = function(s) {
    var a = s.styles, f = s.dynamic;
    return o(a, f), null;
  };
  return l;
}, ag = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Vs = function(o) {
  return parseInt(o || "", 10) || 0;
}, cg = function(o) {
  var l = window.getComputedStyle(document.body), s = l[o === "padding" ? "paddingLeft" : "marginLeft"], a = l[o === "padding" ? "paddingTop" : "marginTop"], f = l[o === "padding" ? "paddingRight" : "marginRight"];
  return [Vs(s), Vs(a), Vs(f)];
}, fg = function(o) {
  if (o === void 0 && (o = "margin"), typeof window > "u")
    return ag;
  var l = cg(o), s = document.documentElement.clientWidth, a = window.innerWidth;
  return {
    left: l[0],
    top: l[1],
    right: l[2],
    gap: Math.max(0, a - s + l[2] - l[0])
  };
}, dg = kd(), dr = "data-scroll-locked", pg = function(o, l, s, a) {
  var f = o.left, d = o.top, p = o.right, m = o.gap;
  return s === void 0 && (s = "margin"), `
  .`.concat(Yv, ` {
   overflow: hidden `).concat(a, `;
   padding-right: `).concat(m, "px ").concat(a, `;
  }
  body[`).concat(dr, `] {
    overflow: hidden `).concat(a, `;
    overscroll-behavior: contain;
    `).concat([
    l && "position: relative ".concat(a, ";"),
    s === "margin" && `
    padding-left: `.concat(f, `px;
    padding-top: `).concat(d, `px;
    padding-right: `).concat(p, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(m, "px ").concat(a, `;
    `),
    s === "padding" && "padding-right: ".concat(m, "px ").concat(a, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ai, ` {
    right: `).concat(m, "px ").concat(a, `;
  }
  
  .`).concat(Ti, ` {
    margin-right: `).concat(m, "px ").concat(a, `;
  }
  
  .`).concat(Ai, " .").concat(Ai, ` {
    right: 0 `).concat(a, `;
  }
  
  .`).concat(Ti, " .").concat(Ti, ` {
    margin-right: 0 `).concat(a, `;
  }
  
  body[`).concat(dr, `] {
    `).concat(Gv, ": ").concat(m, `px;
  }
`);
}, Tf = function() {
  var o = parseInt(document.body.getAttribute(dr) || "0", 10);
  return isFinite(o) ? o : 0;
}, mg = function() {
  C.useEffect(function() {
    return document.body.setAttribute(dr, (Tf() + 1).toString()), function() {
      var o = Tf() - 1;
      o <= 0 ? document.body.removeAttribute(dr) : document.body.setAttribute(dr, o.toString());
    };
  }, []);
}, hg = function(o) {
  var l = o.noRelative, s = o.noImportant, a = o.gapMode, f = a === void 0 ? "margin" : a;
  mg();
  var d = C.useMemo(function() {
    return fg(f);
  }, [f]);
  return C.createElement(dg, { styles: pg(d, !l, f, s ? "" : "!important") });
}, Xs = !1;
if (typeof window < "u")
  try {
    var Ri = Object.defineProperty({}, "passive", {
      get: function() {
        return Xs = !0, !0;
      }
    });
    window.addEventListener("test", Ri, Ri), window.removeEventListener("test", Ri, Ri);
  } catch {
    Xs = !1;
  }
var ar = Xs ? { passive: !1 } : !1, vg = function(o) {
  return o.tagName === "TEXTAREA";
}, Ed = function(o, l) {
  var s = window.getComputedStyle(o);
  return (
    // not-not-scrollable
    s[l] !== "hidden" && // contains scroll inside self
    !(s.overflowY === s.overflowX && !vg(o) && s[l] === "visible")
  );
}, gg = function(o) {
  return Ed(o, "overflowY");
}, yg = function(o) {
  return Ed(o, "overflowX");
}, Lf = function(o, l) {
  var s = l.ownerDocument, a = l;
  do {
    typeof ShadowRoot < "u" && a instanceof ShadowRoot && (a = a.host);
    var f = Cd(o, a);
    if (f) {
      var d = Pd(o, a), p = d[1], m = d[2];
      if (p > m)
        return !0;
    }
    a = a.parentNode;
  } while (a && a !== s.body);
  return !1;
}, wg = function(o) {
  var l = o.scrollTop, s = o.scrollHeight, a = o.clientHeight;
  return [
    l,
    s,
    a
  ];
}, xg = function(o) {
  var l = o.scrollLeft, s = o.scrollWidth, a = o.clientWidth;
  return [
    l,
    s,
    a
  ];
}, Cd = function(o, l) {
  return o === "v" ? gg(l) : yg(l);
}, Pd = function(o, l) {
  return o === "v" ? wg(l) : xg(l);
}, Sg = function(o, l) {
  return o === "h" && l === "rtl" ? -1 : 1;
}, kg = function(o, l, s, a, f) {
  var d = Sg(o, window.getComputedStyle(l).direction), p = d * a, m = s.target, g = l.contains(m), y = !1, P = p > 0, S = 0, N = 0;
  do {
    var O = Pd(o, m), L = O[0], k = O[1], A = O[2], j = k - A - d * L;
    (L || j) && Cd(o, m) && (S += j, N += L), m instanceof ShadowRoot ? m = m.host : m = m.parentNode;
  } while (
    // portaled content
    !g && m !== document.body || // self content
    g && (l.contains(m) || l === m)
  );
  return (P && (Math.abs(S) < 1 || !f) || !P && (Math.abs(N) < 1 || !f)) && (y = !0), y;
}, Ni = function(o) {
  return "changedTouches" in o ? [o.changedTouches[0].clientX, o.changedTouches[0].clientY] : [0, 0];
}, zf = function(o) {
  return [o.deltaX, o.deltaY];
}, Mf = function(o) {
  return o && "current" in o ? o.current : o;
}, Eg = function(o, l) {
  return o[0] === l[0] && o[1] === l[1];
}, Cg = function(o) {
  return `
  .block-interactivity-`.concat(o, ` {pointer-events: none;}
  .allow-interactivity-`).concat(o, ` {pointer-events: all;}
`);
}, Pg = 0, cr = [];
function Rg(o) {
  var l = C.useRef([]), s = C.useRef([0, 0]), a = C.useRef(), f = C.useState(Pg++)[0], d = C.useState(kd)[0], p = C.useRef(o);
  C.useEffect(function() {
    p.current = o;
  }, [o]), C.useEffect(function() {
    if (o.inert) {
      document.body.classList.add("block-interactivity-".concat(f));
      var k = Kv([o.lockRef.current], (o.shards || []).map(Mf), !0).filter(Boolean);
      return k.forEach(function(A) {
        return A.classList.add("allow-interactivity-".concat(f));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(f)), k.forEach(function(A) {
          return A.classList.remove("allow-interactivity-".concat(f));
        });
      };
    }
  }, [o.inert, o.lockRef.current, o.shards]);
  var m = C.useCallback(function(k, A) {
    if ("touches" in k && k.touches.length === 2)
      return !p.current.allowPinchZoom;
    var j = Ni(k), U = s.current, B = "deltaX" in k ? k.deltaX : U[0] - j[0], b = "deltaY" in k ? k.deltaY : U[1] - j[1], $, q = k.target, G = Math.abs(B) > Math.abs(b) ? "h" : "v";
    if ("touches" in k && G === "h" && q.type === "range")
      return !1;
    var oe = Lf(G, q);
    if (!oe)
      return !0;
    if (oe ? $ = G : ($ = G === "v" ? "h" : "v", oe = Lf(G, q)), !oe)
      return !1;
    if (!a.current && "changedTouches" in k && (B || b) && (a.current = $), !$)
      return !0;
    var me = a.current || $;
    return kg(me, A, k, me === "h" ? B : b, !0);
  }, []), g = C.useCallback(function(k) {
    var A = k;
    if (!(!cr.length || cr[cr.length - 1] !== d)) {
      var j = "deltaY" in A ? zf(A) : Ni(A), U = l.current.filter(function($) {
        return $.name === A.type && ($.target === A.target || A.target === $.shadowParent) && Eg($.delta, j);
      })[0];
      if (U && U.should) {
        A.cancelable && A.preventDefault();
        return;
      }
      if (!U) {
        var B = (p.current.shards || []).map(Mf).filter(Boolean).filter(function($) {
          return $.contains(A.target);
        }), b = B.length > 0 ? m(A, B[0]) : !p.current.noIsolation;
        b && A.cancelable && A.preventDefault();
      }
    }
  }, []), y = C.useCallback(function(k, A, j, U) {
    var B = { name: k, delta: A, target: j, should: U, shadowParent: Ng(j) };
    l.current.push(B), setTimeout(function() {
      l.current = l.current.filter(function(b) {
        return b !== B;
      });
    }, 1);
  }, []), P = C.useCallback(function(k) {
    s.current = Ni(k), a.current = void 0;
  }, []), S = C.useCallback(function(k) {
    y(k.type, zf(k), k.target, m(k, o.lockRef.current));
  }, []), N = C.useCallback(function(k) {
    y(k.type, Ni(k), k.target, m(k, o.lockRef.current));
  }, []);
  C.useEffect(function() {
    return cr.push(d), o.setCallbacks({
      onScrollCapture: S,
      onWheelCapture: S,
      onTouchMoveCapture: N
    }), document.addEventListener("wheel", g, ar), document.addEventListener("touchmove", g, ar), document.addEventListener("touchstart", P, ar), function() {
      cr = cr.filter(function(k) {
        return k !== d;
      }), document.removeEventListener("wheel", g, ar), document.removeEventListener("touchmove", g, ar), document.removeEventListener("touchstart", P, ar);
    };
  }, []);
  var O = o.removeScrollBar, L = o.inert;
  return C.createElement(
    C.Fragment,
    null,
    L ? C.createElement(d, { styles: Cg(f) }) : null,
    O ? C.createElement(hg, { gapMode: o.gapMode }) : null
  );
}
function Ng(o) {
  for (var l = null; o !== null; )
    o instanceof ShadowRoot && (l = o.host, o = o.host), o = o.parentNode;
  return l;
}
const _g = ng(Sd, Rg);
var Rd = C.forwardRef(function(o, l) {
  return C.createElement(Wi, Rt({}, o, { ref: l, sideCar: _g }));
});
Rd.classNames = Wi.classNames;
var cu = "Popover", [Nd, Ty] = Vf(cu, [
  sd
]), co = sd(), [Og, wn] = Nd(cu), _d = (o) => {
  const {
    __scopePopover: l,
    children: s,
    open: a,
    defaultOpen: f,
    onOpenChange: d,
    modal: p = !1
  } = o, m = co(l), g = C.useRef(null), [y, P] = C.useState(!1), [S = !1, N] = Uv({
    prop: a,
    defaultProp: f,
    onChange: d
  });
  return /* @__PURE__ */ W.jsx(Mv, { ...m, children: /* @__PURE__ */ W.jsx(
    Og,
    {
      scope: l,
      contentId: Nh(),
      triggerRef: g,
      open: S,
      onOpenChange: N,
      onOpenToggle: C.useCallback(() => N((O) => !O), [N]),
      hasCustomAnchor: y,
      onCustomAnchorAdd: C.useCallback(() => P(!0), []),
      onCustomAnchorRemove: C.useCallback(() => P(!1), []),
      modal: p,
      children: s
    }
  ) });
};
_d.displayName = cu;
var Od = "PopoverAnchor", Ag = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...a } = o, f = wn(Od, s), d = co(s), { onCustomAnchorAdd: p, onCustomAnchorRemove: m } = f;
    return C.useEffect(() => (p(), () => m()), [p, m]), /* @__PURE__ */ W.jsx(vd, { ...d, ...a, ref: l });
  }
);
Ag.displayName = Od;
var Ad = "PopoverTrigger", Td = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...a } = o, f = wn(Ad, s), d = co(s), p = yn(l, f.triggerRef), m = /* @__PURE__ */ W.jsx(
      At.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": f.open,
        "aria-controls": f.contentId,
        "data-state": jd(f.open),
        ...a,
        ref: p,
        onClick: pn(o.onClick, f.onOpenToggle)
      }
    );
    return f.hasCustomAnchor ? m : /* @__PURE__ */ W.jsx(vd, { asChild: !0, ...d, children: m });
  }
);
Td.displayName = Ad;
var fu = "PopoverPortal", [Tg, Lg] = Nd(fu, {
  forceMount: void 0
}), Ld = (o) => {
  const { __scopePopover: l, forceMount: s, children: a, container: f } = o, d = wn(fu, l);
  return /* @__PURE__ */ W.jsx(Tg, { scope: l, forceMount: s, children: /* @__PURE__ */ W.jsx(au, { present: s || d.open, children: /* @__PURE__ */ W.jsx(gd, { asChild: !0, container: f, children: a }) }) });
};
Ld.displayName = fu;
var mr = "PopoverContent", zd = C.forwardRef(
  (o, l) => {
    const s = Lg(mr, o.__scopePopover), { forceMount: a = s.forceMount, ...f } = o, d = wn(mr, o.__scopePopover);
    return /* @__PURE__ */ W.jsx(au, { present: a || d.open, children: d.modal ? /* @__PURE__ */ W.jsx(zg, { ...f, ref: l }) : /* @__PURE__ */ W.jsx(Mg, { ...f, ref: l }) });
  }
);
zd.displayName = mr;
var zg = C.forwardRef(
  (o, l) => {
    const s = wn(mr, o.__scopePopover), a = C.useRef(null), f = yn(l, a), d = C.useRef(!1);
    return C.useEffect(() => {
      const p = a.current;
      if (p) return Qv(p);
    }, []), /* @__PURE__ */ W.jsx(Rd, { as: Fi, allowPinchZoom: !0, children: /* @__PURE__ */ W.jsx(
      Md,
      {
        ...o,
        ref: f,
        trapFocus: s.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: pn(o.onCloseAutoFocus, (p) => {
          p.preventDefault(), d.current || s.triggerRef.current?.focus();
        }),
        onPointerDownOutside: pn(
          o.onPointerDownOutside,
          (p) => {
            const m = p.detail.originalEvent, g = m.button === 0 && m.ctrlKey === !0, y = m.button === 2 || g;
            d.current = y;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: pn(
          o.onFocusOutside,
          (p) => p.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Mg = C.forwardRef(
  (o, l) => {
    const s = wn(mr, o.__scopePopover), a = C.useRef(!1), f = C.useRef(!1);
    return /* @__PURE__ */ W.jsx(
      Md,
      {
        ...o,
        ref: l,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (d) => {
          o.onCloseAutoFocus?.(d), d.defaultPrevented || (a.current || s.triggerRef.current?.focus(), d.preventDefault()), a.current = !1, f.current = !1;
        },
        onInteractOutside: (d) => {
          o.onInteractOutside?.(d), d.defaultPrevented || (a.current = !0, d.detail.originalEvent.type === "pointerdown" && (f.current = !0));
          const p = d.target;
          s.triggerRef.current?.contains(p) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && f.current && d.preventDefault();
        }
      }
    );
  }
), Md = C.forwardRef(
  (o, l) => {
    const {
      __scopePopover: s,
      trapFocus: a,
      onOpenAutoFocus: f,
      onCloseAutoFocus: d,
      disableOutsidePointerEvents: p,
      onEscapeKeyDown: m,
      onPointerDownOutside: g,
      onFocusOutside: y,
      onInteractOutside: P,
      ...S
    } = o, N = wn(mr, s), O = co(s);
    return gh(), /* @__PURE__ */ W.jsx(
      Yf,
      {
        asChild: !0,
        loop: !0,
        trapped: a,
        onMountAutoFocus: f,
        onUnmountAutoFocus: d,
        children: /* @__PURE__ */ W.jsx(
          Qf,
          {
            asChild: !0,
            disableOutsidePointerEvents: p,
            onInteractOutside: P,
            onEscapeKeyDown: m,
            onPointerDownOutside: g,
            onFocusOutside: y,
            onDismiss: () => N.onOpenChange(!1),
            children: /* @__PURE__ */ W.jsx(
              Dv,
              {
                "data-state": jd(N.open),
                role: "dialog",
                id: N.contentId,
                ...O,
                ...S,
                ref: l,
                style: {
                  ...S.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Dd = "PopoverClose", Dg = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...a } = o, f = wn(Dd, s);
    return /* @__PURE__ */ W.jsx(
      At.button,
      {
        type: "button",
        ...a,
        ref: l,
        onClick: pn(o.onClick, () => f.onOpenChange(!1))
      }
    );
  }
);
Dg.displayName = Dd;
var jg = "PopoverArrow", Fg = C.forwardRef(
  (o, l) => {
    const { __scopePopover: s, ...a } = o, f = co(s);
    return /* @__PURE__ */ W.jsx(jv, { ...f, ...a, ref: l });
  }
);
Fg.displayName = jg;
function jd(o) {
  return o ? "open" : "closed";
}
var Ig = _d, bg = Td, Wg = Ld, Fd = zd;
function Id(o) {
  var l, s, a = "";
  if (typeof o == "string" || typeof o == "number") a += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var f = o.length;
    for (l = 0; l < f; l++) o[l] && (s = Id(o[l])) && (a && (a += " "), a += s);
  } else for (s in o) o[s] && (a && (a += " "), a += s);
  return a;
}
function Ug() {
  for (var o, l, s = 0, a = "", f = arguments.length; s < f; s++) (o = arguments[s]) && (l = Id(o)) && (a && (a += " "), a += l);
  return a;
}
const du = "-";
function Bg(o) {
  const l = Vg(o), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: a
  } = o;
  function f(p) {
    const m = p.split(du);
    return m[0] === "" && m.length !== 1 && m.shift(), bd(m, l) || $g(p);
  }
  function d(p, m) {
    const g = s[p] || [];
    return m && a[p] ? [...g, ...a[p]] : g;
  }
  return {
    getClassGroupId: f,
    getConflictingClassGroupIds: d
  };
}
function bd(o, l) {
  if (o.length === 0)
    return l.classGroupId;
  const s = o[0], a = l.nextPart.get(s), f = a ? bd(o.slice(1), a) : void 0;
  if (f)
    return f;
  if (l.validators.length === 0)
    return;
  const d = o.join(du);
  return l.validators.find(({
    validator: p
  }) => p(d))?.classGroupId;
}
const Df = /^\[(.+)\]$/;
function $g(o) {
  if (Df.test(o)) {
    const l = Df.exec(o)[1], s = l?.substring(0, l.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}
function Vg(o) {
  const {
    theme: l,
    prefix: s
  } = o, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Qg(Object.entries(o.classGroups), s).forEach(([d, p]) => {
    Zs(p, a, d, l);
  }), a;
}
function Zs(o, l, s, a) {
  o.forEach((f) => {
    if (typeof f == "string") {
      const d = f === "" ? l : jf(l, f);
      d.classGroupId = s;
      return;
    }
    if (typeof f == "function") {
      if (Hg(f)) {
        Zs(f(a), l, s, a);
        return;
      }
      l.validators.push({
        validator: f,
        classGroupId: s
      });
      return;
    }
    Object.entries(f).forEach(([d, p]) => {
      Zs(p, jf(l, d), s, a);
    });
  });
}
function jf(o, l) {
  let s = o;
  return l.split(du).forEach((a) => {
    s.nextPart.has(a) || s.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(a);
  }), s;
}
function Hg(o) {
  return o.isThemeGetter;
}
function Qg(o, l) {
  return l ? o.map(([s, a]) => {
    const f = a.map((d) => typeof d == "string" ? l + d : typeof d == "object" ? Object.fromEntries(Object.entries(d).map(([p, m]) => [l + p, m])) : d);
    return [s, f];
  }) : o;
}
function Kg(o) {
  if (o < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, s = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  function f(d, p) {
    s.set(d, p), l++, l > o && (l = 0, a = s, s = /* @__PURE__ */ new Map());
  }
  return {
    get(d) {
      let p = s.get(d);
      if (p !== void 0)
        return p;
      if ((p = a.get(d)) !== void 0)
        return f(d, p), p;
    },
    set(d, p) {
      s.has(d) ? s.set(d, p) : f(d, p);
    }
  };
}
const Wd = "!";
function Yg(o) {
  const l = o.separator, s = l.length === 1, a = l[0], f = l.length;
  return function(p) {
    const m = [];
    let g = 0, y = 0, P;
    for (let k = 0; k < p.length; k++) {
      let A = p[k];
      if (g === 0) {
        if (A === a && (s || p.slice(k, k + f) === l)) {
          m.push(p.slice(y, k)), y = k + f;
          continue;
        }
        if (A === "/") {
          P = k;
          continue;
        }
      }
      A === "[" ? g++ : A === "]" && g--;
    }
    const S = m.length === 0 ? p : p.substring(y), N = S.startsWith(Wd), O = N ? S.substring(1) : S, L = P && P > y ? P - y : void 0;
    return {
      modifiers: m,
      hasImportantModifier: N,
      baseClassName: O,
      maybePostfixModifierPosition: L
    };
  };
}
function Gg(o) {
  if (o.length <= 1)
    return o;
  const l = [];
  let s = [];
  return o.forEach((a) => {
    a[0] === "[" ? (l.push(...s.sort(), a), s = []) : s.push(a);
  }), l.push(...s.sort()), l;
}
function Xg(o) {
  return {
    cache: Kg(o.cacheSize),
    splitModifiers: Yg(o),
    ...Bg(o)
  };
}
const Zg = /\s+/;
function Jg(o, l) {
  const {
    splitModifiers: s,
    getClassGroupId: a,
    getConflictingClassGroupIds: f
  } = l, d = /* @__PURE__ */ new Set();
  return o.trim().split(Zg).map((p) => {
    const {
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: y,
      maybePostfixModifierPosition: P
    } = s(p);
    let S = a(P ? y.substring(0, P) : y), N = !!P;
    if (!S) {
      if (!P)
        return {
          isTailwindClass: !1,
          originalClassName: p
        };
      if (S = a(y), !S)
        return {
          isTailwindClass: !1,
          originalClassName: p
        };
      N = !1;
    }
    const O = Gg(m).join(":");
    return {
      isTailwindClass: !0,
      modifierId: g ? O + Wd : O,
      classGroupId: S,
      originalClassName: p,
      hasPostfixModifier: N
    };
  }).reverse().filter((p) => {
    if (!p.isTailwindClass)
      return !0;
    const {
      modifierId: m,
      classGroupId: g,
      hasPostfixModifier: y
    } = p, P = m + g;
    return d.has(P) ? !1 : (d.add(P), f(g, y).forEach((S) => d.add(m + S)), !0);
  }).reverse().map((p) => p.originalClassName).join(" ");
}
function qg() {
  let o = 0, l, s, a = "";
  for (; o < arguments.length; )
    (l = arguments[o++]) && (s = Ud(l)) && (a && (a += " "), a += s);
  return a;
}
function Ud(o) {
  if (typeof o == "string")
    return o;
  let l, s = "";
  for (let a = 0; a < o.length; a++)
    o[a] && (l = Ud(o[a])) && (s && (s += " "), s += l);
  return s;
}
function ey(o, ...l) {
  let s, a, f, d = p;
  function p(g) {
    const y = l.reduce((P, S) => S(P), o());
    return s = Xg(y), a = s.cache.get, f = s.cache.set, d = m, m(g);
  }
  function m(g) {
    const y = a(g);
    if (y)
      return y;
    const P = Jg(g, s);
    return f(g, P), P;
  }
  return function() {
    return d(qg.apply(null, arguments));
  };
}
function Ne(o) {
  const l = (s) => s[o] || [];
  return l.isThemeGetter = !0, l;
}
const Bd = /^\[(?:([a-z-]+):)?(.+)\]$/i, ty = /^\d+\/\d+$/, ny = /* @__PURE__ */ new Set(["px", "full", "screen"]), ry = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, oy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, iy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, ly = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, sy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Wt(o) {
  return zn(o) || ny.has(o) || ty.test(o);
}
function cn(o) {
  return gr(o, "length", hy);
}
function zn(o) {
  return !!o && !Number.isNaN(Number(o));
}
function _i(o) {
  return gr(o, "number", zn);
}
function oo(o) {
  return !!o && Number.isInteger(Number(o));
}
function uy(o) {
  return o.endsWith("%") && zn(o.slice(0, -1));
}
function le(o) {
  return Bd.test(o);
}
function fn(o) {
  return ry.test(o);
}
const ay = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function cy(o) {
  return gr(o, ay, $d);
}
function fy(o) {
  return gr(o, "position", $d);
}
const dy = /* @__PURE__ */ new Set(["image", "url"]);
function py(o) {
  return gr(o, dy, gy);
}
function my(o) {
  return gr(o, "", vy);
}
function io() {
  return !0;
}
function gr(o, l, s) {
  const a = Bd.exec(o);
  return a ? a[1] ? typeof l == "string" ? a[1] === l : l.has(a[1]) : s(a[2]) : !1;
}
function hy(o) {
  return oy.test(o) && !iy.test(o);
}
function $d() {
  return !1;
}
function vy(o) {
  return ly.test(o);
}
function gy(o) {
  return sy.test(o);
}
function yy() {
  const o = Ne("colors"), l = Ne("spacing"), s = Ne("blur"), a = Ne("brightness"), f = Ne("borderColor"), d = Ne("borderRadius"), p = Ne("borderSpacing"), m = Ne("borderWidth"), g = Ne("contrast"), y = Ne("grayscale"), P = Ne("hueRotate"), S = Ne("invert"), N = Ne("gap"), O = Ne("gradientColorStops"), L = Ne("gradientColorStopPositions"), k = Ne("inset"), A = Ne("margin"), j = Ne("opacity"), U = Ne("padding"), B = Ne("saturate"), b = Ne("scale"), $ = Ne("sepia"), q = Ne("skew"), G = Ne("space"), oe = Ne("translate"), me = () => ["auto", "contain", "none"], ce = () => ["auto", "hidden", "clip", "visible", "scroll"], ke = () => ["auto", le, l], ne = () => [le, l], we = () => ["", Wt, cn], ae = () => ["auto", zn, le], xe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], fe = () => ["solid", "dashed", "dotted", "double", "none"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", le], H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [zn, _i], T = () => [zn, le];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [io],
      spacing: [Wt, cn],
      blur: ["none", "", fn, le],
      brightness: x(),
      borderColor: [o],
      borderRadius: ["none", "", "full", fn, le],
      borderSpacing: ne(),
      borderWidth: we(),
      contrast: x(),
      grayscale: V(),
      hueRotate: T(),
      invert: V(),
      gap: ne(),
      gradientColorStops: [o],
      gradientColorStopPositions: [uy, cn],
      inset: ke(),
      margin: ke(),
      opacity: x(),
      padding: ne(),
      saturate: x(),
      scale: x(),
      sepia: V(),
      skew: T(),
      space: ne(),
      translate: ne()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", le]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [fn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...xe(), le]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ce()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ce()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ce()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: me()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": me()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": me()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", oo, le]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ke()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", le]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", oo, le]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [io]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", oo, le]
        }, le]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ae()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ae()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [io]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [oo, le]
        }, le]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ae()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ae()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", le]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [N]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [N]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [N]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...D()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...D(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...D(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [U]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [U]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [U]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [U]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [U]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [U]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [U]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [U]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [U]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [A]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [A]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [A]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [A]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [A]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [A]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [A]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [A]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [A]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [G]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [G]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", le, l]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [le, l, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [le, l, "none", "full", "min", "max", "fit", "prose", {
          screen: [fn]
        }, fn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [le, l, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [le, l, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [le, l, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [le, l, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", fn, cn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _i]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [io]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", le]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", zn, _i]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Wt, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", le]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", le]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [o]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [j]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [o]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [j]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...fe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Wt, cn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Wt, le]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [o]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: ne()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", le]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", le]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [j]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...xe(), fy]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", cy]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, py]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [o]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [L]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [L]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [L]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [O]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [d]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [d]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [d]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [d]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [d]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [d]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [d]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [d]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [d]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [d]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [d]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [d]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [d]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [d]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [d]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [m]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [m]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [m]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [m]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [m]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [m]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [m]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [m]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [m]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [j]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...fe(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [m]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [m]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [j]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: fe()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [f]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [f]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [f]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [f]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [f]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [f]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [f]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [f]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...fe()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Wt, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Wt, cn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [o]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: we()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [o]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [j]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Wt, cn]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [o]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", fn, my]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [io]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [s]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [g]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", fn, le]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [S]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [s]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [g]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [S]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [p]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [p]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [p]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", le]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: T()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", le]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: T()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", le]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [b]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [b]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [b]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [oo, le]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [oe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [oe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [q]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [q]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", le]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", o]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", le]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [o]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": ne()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": ne()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": ne()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": ne()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": ne()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": ne()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": ne()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": ne()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": ne()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": ne()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": ne()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": ne()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": ne()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": ne()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": ne()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": ne()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": ne()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": ne()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", le]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [o, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Wt, cn, _i]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [o, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const wy = /* @__PURE__ */ ey(yy);
function fo(...o) {
  return wy(Ug(o));
}
const xy = Ig, Sy = bg, Vd = C.forwardRef(({ className: o, align: l = "center", sideOffset: s = 4, ...a }, f) => /* @__PURE__ */ W.jsx(Wg, { children: /* @__PURE__ */ W.jsx(
  Fd,
  {
    ref: f,
    align: l,
    sideOffset: s,
    className: fo(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      o
    ),
    ...a
  }
) }));
Vd.displayName = Fd.displayName;
function Hd(o) {
  var l, s, a = "";
  if (typeof o == "string" || typeof o == "number") a += o;
  else if (typeof o == "object") if (Array.isArray(o)) for (l = 0; l < o.length; l++) o[l] && (s = Hd(o[l])) && (a && (a += " "), a += s);
  else for (l in o) o[l] && (a && (a += " "), a += l);
  return a;
}
function ky() {
  for (var o, l, s = 0, a = ""; s < arguments.length; ) (o = arguments[s++]) && (l = Hd(o)) && (a && (a += " "), a += l);
  return a;
}
const Ff = (o) => typeof o == "boolean" ? "".concat(o) : o === 0 ? "0" : o, If = ky, Qd = (o, l) => (s) => {
  var a;
  if (l?.variants == null) return If(o, s?.class, s?.className);
  const { variants: f, defaultVariants: d } = l, p = Object.keys(f).map((y) => {
    const P = s?.[y], S = d?.[y];
    if (P === null) return null;
    const N = Ff(P) || Ff(S);
    return f[y][N];
  }), m = s && Object.entries(s).reduce((y, P) => {
    let [S, N] = P;
    return N === void 0 || (y[S] = N), y;
  }, {}), g = l == null || (a = l.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((y, P) => {
    let { class: S, className: N, ...O } = P;
    return Object.entries(O).every((L) => {
      let [k, A] = L;
      return Array.isArray(A) ? A.includes({
        ...d,
        ...m
      }[k]) : {
        ...d,
        ...m
      }[k] === A;
    }) ? [
      ...y,
      S,
      N
    ] : y;
  }, []);
  return If(o, p, g, s?.class, s?.className);
}, Ey = Qd(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Js = C.forwardRef(({ className: o, variant: l, size: s, asChild: a = !1, ...f }, d) => {
  const p = a ? Fi : "button";
  return /* @__PURE__ */ W.jsx(
    p,
    {
      className: fo(Ey({ variant: l, size: s, className: o })),
      ref: d,
      ...f
    }
  );
});
Js.displayName = "Button";
var Cy = "Label", Kd = C.forwardRef((o, l) => /* @__PURE__ */ W.jsx(
  At.label,
  {
    ...o,
    ref: l,
    onMouseDown: (s) => {
      s.target.closest("button, input, select, textarea") || (o.onMouseDown?.(s), !s.defaultPrevented && s.detail > 1 && s.preventDefault());
    }
  }
));
Kd.displayName = Cy;
var Yd = Kd;
const Py = Qd(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Li = C.forwardRef(({ className: o, ...l }, s) => /* @__PURE__ */ W.jsx(Yd, { ref: s, className: fo(Py(), o), ...l }));
Li.displayName = Yd.displayName;
const qs = C.forwardRef(({ className: o, type: l, ...s }, a) => /* @__PURE__ */ W.jsx(
  "input",
  {
    type: l,
    className: fo(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      o
    ),
    ref: a,
    ...s
  }
));
qs.displayName = "Input";
const Gd = C.forwardRef(({ className: o, ...l }, s) => /* @__PURE__ */ W.jsx(
  "textarea",
  {
    className: fo(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      o
    ),
    ref: s,
    ...l
  }
));
Gd.displayName = "Textarea";
const Ry = () => {
  const [o, l] = C.useState(0), [s, a] = C.useState(!1), f = (p) => {
    p.preventDefault();
    const m = p.target, g = {
      name: m.name.value,
      email: m.email.value,
      feedback: m.feedback.value
    };
    console.log(g), a(!0);
  }, d = (p) => {
    l(p + 1);
  };
  return /* @__PURE__ */ W.jsx("div", { className: "widget fixed bottom-4 right-4 z-50", children: /* @__PURE__ */ W.jsxs(xy, { children: [
    /* @__PURE__ */ W.jsx(Sy, { asChild: !0, children: /* @__PURE__ */ W.jsxs(
      Js,
      {
        variant: "secondary",
        className: "rounded-full bg-primary hover:bg-slate-800 px-4 py-2 text-primary-foreground shadow-lg transition-all hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        children: [
          /* @__PURE__ */ W.jsx(Ny, { className: "mr-2 h-5 w-5" }),
          "Feedback"
        ]
      }
    ) }),
    /* @__PURE__ */ W.jsx(Vd, { className: "widget w-full max-w-md rounded-lg bg-card p-4 shadow-lg", children: s ? /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("h3", { className: "text-lg font-bold", children: "Thank you for your feedback!" }) }),
      /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("p", { children: "We appreciate you taking the time to share your thoughts with us. Your feedback helps us improve our product and services." }) })
    ] }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("h3", { className: "text-lg font-bold", children: "Send us your feedback" }) }),
      /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsxs(
        "form",
        {
          className: "space-y-4",
          onSubmit: f,
          children: [
            /* @__PURE__ */ W.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ W.jsx(Li, { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ W.jsx(
                  qs,
                  {
                    id: "name",
                    placeholder: "Enter your name"
                  }
                )
              ] }),
              /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ W.jsx(Li, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ W.jsx(
                  qs,
                  {
                    id: "email",
                    type: "email",
                    placeholder: "Enter your email"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ W.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ W.jsx(Li, { htmlFor: "feedback", children: "Feedback" }),
              /* @__PURE__ */ W.jsx(
                Gd,
                {
                  id: "feedback",
                  placeholder: "Tell us what you think",
                  className: "min-h-[100px]"
                }
              )
            ] }),
            /* @__PURE__ */ W.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ W.jsx("div", { className: "flex items-center gap-2", children: [...Array(5)].map((p, m) => /* @__PURE__ */ W.jsx(
                _y,
                {
                  className: `h-5 w-5 cursor-pointer ${o > m ? "fill-primary" : "fill-muted stroke-muted-foreground"}`,
                  onClick: () => d(m)
                },
                m
              )) }),
              /* @__PURE__ */ W.jsx(Js, { type: "submit", children: "Submit" })
            ] })
          ]
        }
      ) })
    ] }) })
  ] }) });
};
function Ny(o) {
  return /* @__PURE__ */ W.jsx(
    "svg",
    {
      ...o,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ W.jsx("path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" })
    }
  );
}
function _y(o) {
  return /* @__PURE__ */ W.jsx(
    "svg",
    {
      ...o,
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ W.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
    }
  );
}
const Oy = (o) => o.replace(/-([a-z])/g, (l, s) => s.toUpperCase());
class Ay extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const l = this.getPropsFromAttributes();
    Hs.createRoot(this.shadowRoot).render(/* @__PURE__ */ W.jsx(Ry, { ...l }));
  }
  getPropsFromAttributes() {
    const l = {};
    for (let s = 0; s < this.attributes.length; s++) {
      const a = this.attributes[s];
      l[Oy(a.name)] = a.value;
    }
    return l;
  }
}
customElements.define("my-widget", Ay);
