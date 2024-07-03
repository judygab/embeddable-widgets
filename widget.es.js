var Ga = { exports: {} }, _r = {}, ji = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ia;
function ef() {
  if (Ia) return K;
  Ia = 1;
  var a = Symbol.for("react.element"), g = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), z = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), U = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), B = Symbol.iterator;
  function H(f) {
    return f === null || typeof f != "object" ? null : (f = B && f[B] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var ce = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, me = Object.assign, V = {};
  function W(f, y, G) {
    this.props = f, this.context = y, this.refs = V, this.updater = G || ce;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(f, y) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, y, "setState");
  }, W.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function Ee() {
  }
  Ee.prototype = W.prototype;
  function ve(f, y, G) {
    this.props = f, this.context = y, this.refs = V, this.updater = G || ce;
  }
  var Ve = ve.prototype = new Ee();
  Ve.constructor = ve, me(Ve, W.prototype), Ve.isPureReactComponent = !0;
  var ye = Array.isArray, We = Object.prototype.hasOwnProperty, Ce = { current: null }, Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function De(f, y, G) {
    var Y, J = {}, q = null, ne = null;
    if (y != null) for (Y in y.ref !== void 0 && (ne = y.ref), y.key !== void 0 && (q = "" + y.key), y) We.call(y, Y) && !Ne.hasOwnProperty(Y) && (J[Y] = y[Y]);
    var ee = arguments.length - 2;
    if (ee === 1) J.children = G;
    else if (1 < ee) {
      for (var se = Array(ee), Je = 0; Je < ee; Je++) se[Je] = arguments[Je + 2];
      J.children = se;
    }
    if (f && f.defaultProps) for (Y in ee = f.defaultProps, ee) J[Y] === void 0 && (J[Y] = ee[Y]);
    return { $$typeof: a, type: f, key: q, ref: ne, props: J, _owner: Ce.current };
  }
  function nt(f, y) {
    return { $$typeof: a, type: f.type, key: y, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Xe(f) {
    return typeof f == "object" && f !== null && f.$$typeof === a;
  }
  function at(f) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(G) {
      return y[G];
    });
  }
  var X = /\/+/g;
  function Le(f, y) {
    return typeof f == "object" && f !== null && f.key != null ? at("" + f.key) : y.toString(36);
  }
  function Me(f, y, G, Y, J) {
    var q = typeof f;
    (q === "undefined" || q === "boolean") && (f = null);
    var ne = !1;
    if (f === null) ne = !0;
    else switch (q) {
      case "string":
      case "number":
        ne = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case a:
          case g:
            ne = !0;
        }
    }
    if (ne) return ne = f, J = J(ne), f = Y === "" ? "." + Le(ne, 0) : Y, ye(J) ? (G = "", f != null && (G = f.replace(X, "$&/") + "/"), Me(J, y, G, "", function(Je) {
      return Je;
    })) : J != null && (Xe(J) && (J = nt(J, G + (!J.key || ne && ne.key === J.key ? "" : ("" + J.key).replace(X, "$&/") + "/") + f)), y.push(J)), 1;
    if (ne = 0, Y = Y === "" ? "." : Y + ":", ye(f)) for (var ee = 0; ee < f.length; ee++) {
      q = f[ee];
      var se = Y + Le(q, ee);
      ne += Me(q, y, G, se, J);
    }
    else if (se = H(f), typeof se == "function") for (f = se.call(f), ee = 0; !(q = f.next()).done; ) q = q.value, se = Y + Le(q, ee++), ne += Me(q, y, G, se, J);
    else if (q === "object") throw y = String(f), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return ne;
  }
  function Ze(f, y, G) {
    if (f == null) return f;
    var Y = [], J = 0;
    return Me(f, Y, "", "", function(q) {
      return y.call(G, q, J++);
    }), Y;
  }
  function ke(f) {
    if (f._status === -1) {
      var y = f._result;
      y = y(), y.then(function(G) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = G);
      }, function(G) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = G);
      }), f._status === -1 && (f._status = 0, f._result = y);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var le = { current: null }, C = { transition: null }, O = { ReactCurrentDispatcher: le, ReactCurrentBatchConfig: C, ReactCurrentOwner: Ce };
  function N() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return K.Children = { map: Ze, forEach: function(f, y, G) {
    Ze(f, function() {
      y.apply(this, arguments);
    }, G);
  }, count: function(f) {
    var y = 0;
    return Ze(f, function() {
      y++;
    }), y;
  }, toArray: function(f) {
    return Ze(f, function(y) {
      return y;
    }) || [];
  }, only: function(f) {
    if (!Xe(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, K.Component = W, K.Fragment = s, K.Profiler = _, K.PureComponent = ve, K.StrictMode = v, K.Suspense = I, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, K.act = N, K.cloneElement = function(f, y, G) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var Y = me({}, f.props), J = f.key, q = f.ref, ne = f._owner;
    if (y != null) {
      if (y.ref !== void 0 && (q = y.ref, ne = Ce.current), y.key !== void 0 && (J = "" + y.key), f.type && f.type.defaultProps) var ee = f.type.defaultProps;
      for (se in y) We.call(y, se) && !Ne.hasOwnProperty(se) && (Y[se] = y[se] === void 0 && ee !== void 0 ? ee[se] : y[se]);
    }
    var se = arguments.length - 2;
    if (se === 1) Y.children = G;
    else if (1 < se) {
      ee = Array(se);
      for (var Je = 0; Je < se; Je++) ee[Je] = arguments[Je + 2];
      Y.children = ee;
    }
    return { $$typeof: a, type: f.type, key: J, ref: q, props: Y, _owner: ne };
  }, K.createContext = function(f) {
    return f = { $$typeof: z, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: E, _context: f }, f.Consumer = f;
  }, K.createElement = De, K.createFactory = function(f) {
    var y = De.bind(null, f);
    return y.type = f, y;
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(f) {
    return { $$typeof: j, render: f };
  }, K.isValidElement = Xe, K.lazy = function(f) {
    return { $$typeof: $, _payload: { _status: -1, _result: f }, _init: ke };
  }, K.memo = function(f, y) {
    return { $$typeof: U, type: f, compare: y === void 0 ? null : y };
  }, K.startTransition = function(f) {
    var y = C.transition;
    C.transition = {};
    try {
      f();
    } finally {
      C.transition = y;
    }
  }, K.unstable_act = N, K.useCallback = function(f, y) {
    return le.current.useCallback(f, y);
  }, K.useContext = function(f) {
    return le.current.useContext(f);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(f) {
    return le.current.useDeferredValue(f);
  }, K.useEffect = function(f, y) {
    return le.current.useEffect(f, y);
  }, K.useId = function() {
    return le.current.useId();
  }, K.useImperativeHandle = function(f, y, G) {
    return le.current.useImperativeHandle(f, y, G);
  }, K.useInsertionEffect = function(f, y) {
    return le.current.useInsertionEffect(f, y);
  }, K.useLayoutEffect = function(f, y) {
    return le.current.useLayoutEffect(f, y);
  }, K.useMemo = function(f, y) {
    return le.current.useMemo(f, y);
  }, K.useReducer = function(f, y, G) {
    return le.current.useReducer(f, y, G);
  }, K.useRef = function(f) {
    return le.current.useRef(f);
  }, K.useState = function(f) {
    return le.current.useState(f);
  }, K.useSyncExternalStore = function(f, y, G) {
    return le.current.useSyncExternalStore(f, y, G);
  }, K.useTransition = function() {
    return le.current.useTransition();
  }, K.version = "18.3.1", K;
}
var Fa;
function Ui() {
  return Fa || (Fa = 1, ji.exports = ef()), ji.exports;
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
var Da;
function tf() {
  if (Da) return _r;
  Da = 1;
  var a = Ui(), g = Symbol.for("react.element"), s = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, _ = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(j, I, U) {
    var $, B = {}, H = null, ce = null;
    U !== void 0 && (H = "" + U), I.key !== void 0 && (H = "" + I.key), I.ref !== void 0 && (ce = I.ref);
    for ($ in I) v.call(I, $) && !E.hasOwnProperty($) && (B[$] = I[$]);
    if (j && j.defaultProps) for ($ in I = j.defaultProps, I) B[$] === void 0 && (B[$] = I[$]);
    return { $$typeof: g, type: j, key: H, ref: ce, props: B, _owner: _.current };
  }
  return _r.Fragment = s, _r.jsx = z, _r.jsxs = z, _r;
}
Ga.exports = tf();
var vt = Ga.exports, Fi = {}, Ka = { exports: {} }, Ke = {}, Oi = { exports: {} }, Ii = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function nf() {
  return Aa || (Aa = 1, function(a) {
    function g(C, O) {
      var N = C.length;
      C.push(O);
      e: for (; 0 < N; ) {
        var f = N - 1 >>> 1, y = C[f];
        if (0 < _(y, O)) C[f] = O, C[N] = y, N = f;
        else break e;
      }
    }
    function s(C) {
      return C.length === 0 ? null : C[0];
    }
    function v(C) {
      if (C.length === 0) return null;
      var O = C[0], N = C.pop();
      if (N !== O) {
        C[0] = N;
        e: for (var f = 0, y = C.length, G = y >>> 1; f < G; ) {
          var Y = 2 * (f + 1) - 1, J = C[Y], q = Y + 1, ne = C[q];
          if (0 > _(J, N)) q < y && 0 > _(ne, J) ? (C[f] = ne, C[q] = N, f = q) : (C[f] = J, C[Y] = N, f = Y);
          else if (q < y && 0 > _(ne, N)) C[f] = ne, C[q] = N, f = q;
          else break e;
        }
      }
      return O;
    }
    function _(C, O) {
      var N = C.sortIndex - O.sortIndex;
      return N !== 0 ? N : C.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      a.unstable_now = function() {
        return E.now();
      };
    } else {
      var z = Date, j = z.now();
      a.unstable_now = function() {
        return z.now() - j;
      };
    }
    var I = [], U = [], $ = 1, B = null, H = 3, ce = !1, me = !1, V = !1, W = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ve(C) {
      for (var O = s(U); O !== null; ) {
        if (O.callback === null) v(U);
        else if (O.startTime <= C) v(U), O.sortIndex = O.expirationTime, g(I, O);
        else break;
        O = s(U);
      }
    }
    function ye(C) {
      if (V = !1, Ve(C), !me) if (s(I) !== null) me = !0, ke(We);
      else {
        var O = s(U);
        O !== null && le(ye, O.startTime - C);
      }
    }
    function We(C, O) {
      me = !1, V && (V = !1, Ee(De), De = -1), ce = !0;
      var N = H;
      try {
        for (Ve(O), B = s(I); B !== null && (!(B.expirationTime > O) || C && !at()); ) {
          var f = B.callback;
          if (typeof f == "function") {
            B.callback = null, H = B.priorityLevel;
            var y = f(B.expirationTime <= O);
            O = a.unstable_now(), typeof y == "function" ? B.callback = y : B === s(I) && v(I), Ve(O);
          } else v(I);
          B = s(I);
        }
        if (B !== null) var G = !0;
        else {
          var Y = s(U);
          Y !== null && le(ye, Y.startTime - O), G = !1;
        }
        return G;
      } finally {
        B = null, H = N, ce = !1;
      }
    }
    var Ce = !1, Ne = null, De = -1, nt = 5, Xe = -1;
    function at() {
      return !(a.unstable_now() - Xe < nt);
    }
    function X() {
      if (Ne !== null) {
        var C = a.unstable_now();
        Xe = C;
        var O = !0;
        try {
          O = Ne(!0, C);
        } finally {
          O ? Le() : (Ce = !1, Ne = null);
        }
      } else Ce = !1;
    }
    var Le;
    if (typeof ve == "function") Le = function() {
      ve(X);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), Ze = Me.port2;
      Me.port1.onmessage = X, Le = function() {
        Ze.postMessage(null);
      };
    } else Le = function() {
      W(X, 0);
    };
    function ke(C) {
      Ne = C, Ce || (Ce = !0, Le());
    }
    function le(C, O) {
      De = W(function() {
        C(a.unstable_now());
      }, O);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, a.unstable_continueExecution = function() {
      me || ce || (me = !0, ke(We));
    }, a.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : nt = 0 < C ? Math.floor(1e3 / C) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, a.unstable_getFirstCallbackNode = function() {
      return s(I);
    }, a.unstable_next = function(C) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = H;
      }
      var N = H;
      H = O;
      try {
        return C();
      } finally {
        H = N;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(C, O) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var N = H;
      H = C;
      try {
        return O();
      } finally {
        H = N;
      }
    }, a.unstable_scheduleCallback = function(C, O, N) {
      var f = a.unstable_now();
      switch (typeof N == "object" && N !== null ? (N = N.delay, N = typeof N == "number" && 0 < N ? f + N : f) : N = f, C) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = N + y, C = { id: $++, callback: O, priorityLevel: C, startTime: N, expirationTime: y, sortIndex: -1 }, N > f ? (C.sortIndex = N, g(U, C), s(I) === null && C === s(U) && (V ? (Ee(De), De = -1) : V = !0, le(ye, N - f))) : (C.sortIndex = y, g(I, C), me || ce || (me = !0, ke(We))), C;
    }, a.unstable_shouldYield = at, a.unstable_wrapCallback = function(C) {
      var O = H;
      return function() {
        var N = H;
        H = O;
        try {
          return C.apply(this, arguments);
        } finally {
          H = N;
        }
      };
    };
  }(Ii)), Ii;
}
var Ua;
function rf() {
  return Ua || (Ua = 1, Oi.exports = nf()), Oi.exports;
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
var Va;
function lf() {
  if (Va) return Ke;
  Va = 1;
  var a = Ui(), g = rf();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), _ = {};
  function E(e, t) {
    z(e, t), z(e + "Capture", t);
  }
  function z(e, t) {
    for (_[e] = t, e = 0; e < t.length; e++) v.add(t[e]);
  }
  var j = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), I = Object.prototype.hasOwnProperty, U = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, B = {};
  function H(e) {
    return I.call(B, e) ? !0 : I.call($, e) ? !1 : U.test(e) ? B[e] = !0 : ($[e] = !0, !1);
  }
  function ce(e, t, n, r) {
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
  function me(e, t, n, r) {
    if (t === null || typeof t > "u" || ce(e, t, n, r)) return !0;
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
  function V(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new V(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    W[t] = new V(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new V(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new V(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new V(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new V(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Ee = /[\-:]([a-z])/g;
  function ve(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Ee,
      ve
    );
    W[t] = new V(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ee, ve);
    W[t] = new V(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ee, ve);
    W[t] = new V(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new V("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Ve(e, t, n, r) {
    var l = W.hasOwnProperty(t) ? W[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (me(t, n, l, r) && (n = null), r || l === null ? H(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ye = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, We = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), Xe = Symbol.for("react.provider"), at = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), ke = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), C = Symbol.iterator;
  function O(e) {
    return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var N = Object.assign, f;
  function y(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
  }
  var G = !1;
  function Y(e, t) {
    if (!e || G) return "";
    G = !0;
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
        } catch (h) {
          var r = h;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (h) {
          r = h;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (h) {
          r = h;
        }
        e();
      }
    } catch (h) {
      if (h && r && typeof h.stack == "string") {
        for (var l = h.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
        for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || l[i] !== o[u]) {
                var c = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
              }
            while (1 <= i && 0 <= u);
          break;
        }
      }
    } finally {
      G = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function J(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Y(e.type, !1), e;
      case 11:
        return e = Y(e.type.render, !1), e;
      case 1:
        return e = Y(e.type, !0), e;
      default:
        return "";
    }
  }
  function q(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ne:
        return "Fragment";
      case Ce:
        return "Portal";
      case nt:
        return "Profiler";
      case De:
        return "StrictMode";
      case Le:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case at:
        return (e.displayName || "Context") + ".Consumer";
      case Xe:
        return (e._context.displayName || "Context") + ".Provider";
      case X:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ze:
        return t = e.displayName || null, t !== null ? t : q(e.type) || "Memo";
      case ke:
        t = e._payload, e = e._init;
        try {
          return q(e(t));
        } catch {
        }
    }
    return null;
  }
  function ne(e) {
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
        return q(t);
      case 8:
        return t === De ? "StrictMode" : "Mode";
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
  function ee(e) {
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
  function se(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Je(e) {
    var t = se(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Nr(e) {
    e._valueTracker || (e._valueTracker = Je(e));
  }
  function Wi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = se(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Tr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ul(e, t) {
    var n = t.checked;
    return N({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Bi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ee(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function $i(e, t) {
    t = t.checked, t != null && Ve(e, "checked", t, !1);
  }
  function Vl(e, t) {
    $i(e, t);
    var n = ee(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Wl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Wl(e, t.type, ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Hi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Wl(e, t, n) {
    (t !== "number" || Tr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Vn = Array.isArray;
  function mn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ee(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Bl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return N({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Qi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (Vn(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ee(n) };
  }
  function Gi(e, t) {
    var n = ee(t.value), r = ee(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ki(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Yi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function $l(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Yi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Rr, Xi = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Rr = Rr || document.createElement("div"), Rr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Rr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Wn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bn = {
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
  }, lc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function(e) {
    lc.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Bn[t] = Bn[e];
    });
  });
  function Zi(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bn.hasOwnProperty(e) && Bn[e] ? ("" + t).trim() : t + "px";
  }
  function Ji(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Zi(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var oc = N({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Hl(e, t) {
    if (t) {
      if (oc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ql(e, t) {
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
  var Gl = null;
  function Kl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Yl = null, hn = null, gn = null;
  function qi(e) {
    if (e = cr(e)) {
      if (typeof Yl != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = br(t), Yl(e.stateNode, e.type, t));
    }
  }
  function bi(e) {
    hn ? gn ? gn.push(e) : gn = [e] : hn = e;
  }
  function eu() {
    if (hn) {
      var e = hn, t = gn;
      if (gn = hn = null, qi(e), t) for (e = 0; e < t.length; e++) qi(t[e]);
    }
  }
  function tu(e, t) {
    return e(t);
  }
  function nu() {
  }
  var Xl = !1;
  function ru(e, t, n) {
    if (Xl) return e(t, n);
    Xl = !0;
    try {
      return tu(e, t, n);
    } finally {
      Xl = !1, (hn !== null || gn !== null) && (nu(), eu());
    }
  }
  function $n(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = br(n);
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
  var Zl = !1;
  if (j) try {
    var Hn = {};
    Object.defineProperty(Hn, "passive", { get: function() {
      Zl = !0;
    } }), window.addEventListener("test", Hn, Hn), window.removeEventListener("test", Hn, Hn);
  } catch {
    Zl = !1;
  }
  function ic(e, t, n, r, l, o, i, u, c) {
    var h = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, h);
    } catch (k) {
      this.onError(k);
    }
  }
  var Qn = !1, Lr = null, Mr = !1, Jl = null, uc = { onError: function(e) {
    Qn = !0, Lr = e;
  } };
  function sc(e, t, n, r, l, o, i, u, c) {
    Qn = !1, Lr = null, ic.apply(uc, arguments);
  }
  function ac(e, t, n, r, l, o, i, u, c) {
    if (sc.apply(this, arguments), Qn) {
      if (Qn) {
        var h = Lr;
        Qn = !1, Lr = null;
      } else throw Error(s(198));
      Mr || (Mr = !0, Jl = h);
    }
  }
  function bt(e) {
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
  function lu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ou(e) {
    if (bt(e) !== e) throw Error(s(188));
  }
  function cc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = bt(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return ou(l), e;
          if (o === r) return ou(l), t;
          o = o.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = !1, u = l.child; u; ) {
          if (u === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (u === r) {
            i = !0, r = l, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === n) {
              i = !0, n = o, r = l;
              break;
            }
            if (u === r) {
              i = !0, r = o, n = l;
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function iu(e) {
    return e = cc(e), e !== null ? uu(e) : null;
  }
  function uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = uu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var su = g.unstable_scheduleCallback, au = g.unstable_cancelCallback, dc = g.unstable_shouldYield, fc = g.unstable_requestPaint, he = g.unstable_now, pc = g.unstable_getCurrentPriorityLevel, ql = g.unstable_ImmediatePriority, cu = g.unstable_UserBlockingPriority, jr = g.unstable_NormalPriority, mc = g.unstable_LowPriority, du = g.unstable_IdlePriority, Or = null, yt = null;
  function hc(e) {
    if (yt && typeof yt.onCommitFiberRoot == "function") try {
      yt.onCommitFiberRoot(Or, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var ct = Math.clz32 ? Math.clz32 : yc, gc = Math.log, vc = Math.LN2;
  function yc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (gc(e) / vc | 0) | 0;
  }
  var Ir = 64, Fr = 4194304;
  function Gn(e) {
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
  function Dr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var u = i & ~l;
      u !== 0 ? r = Gn(u) : (o &= i, o !== 0 && (r = Gn(o)));
    } else i = n & ~l, i !== 0 ? r = Gn(i) : o !== 0 && (r = Gn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ct(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function wc(e, t) {
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
  function kc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - ct(o), u = 1 << i, c = l[i];
      c === -1 ? (!(u & n) || u & r) && (l[i] = wc(u, t)) : c <= t && (e.expiredLanes |= u), o &= ~u;
    }
  }
  function bl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function fu() {
    var e = Ir;
    return Ir <<= 1, !(Ir & 4194240) && (Ir = 64), e;
  }
  function eo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ct(t), e[t] = n;
  }
  function xc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - ct(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function to(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - ct(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var te = 0;
  function pu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var mu, no, hu, gu, vu, ro = !1, Ar = [], Mt = null, jt = null, Ot = null, Yn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), It = [], Sc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function yu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Mt = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xn.delete(t.pointerId);
    }
  }
  function Zn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = cr(t), t !== null && no(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Ec(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Mt = Zn(Mt, e, t, n, r, l), !0;
      case "dragenter":
        return jt = Zn(jt, e, t, n, r, l), !0;
      case "mouseover":
        return Ot = Zn(Ot, e, t, n, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return Yn.set(o, Zn(Yn.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Xn.set(o, Zn(Xn.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function wu(e) {
    var t = en(e.target);
    if (t !== null) {
      var n = bt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = lu(n), t !== null) {
            e.blockedOn = t, vu(e.priority, function() {
              hu(n);
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
  function Ur(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = oo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Gl = r, n.target.dispatchEvent(r), Gl = null;
      } else return t = cr(n), t !== null && no(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ku(e, t, n) {
    Ur(e) && n.delete(t);
  }
  function Cc() {
    ro = !1, Mt !== null && Ur(Mt) && (Mt = null), jt !== null && Ur(jt) && (jt = null), Ot !== null && Ur(Ot) && (Ot = null), Yn.forEach(ku), Xn.forEach(ku);
  }
  function Jn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ro || (ro = !0, g.unstable_scheduleCallback(g.unstable_NormalPriority, Cc)));
  }
  function qn(e) {
    function t(l) {
      return Jn(l, e);
    }
    if (0 < Ar.length) {
      Jn(Ar[0], e);
      for (var n = 1; n < Ar.length; n++) {
        var r = Ar[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Mt !== null && Jn(Mt, e), jt !== null && Jn(jt, e), Ot !== null && Jn(Ot, e), Yn.forEach(t), Xn.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && (n = It[0], n.blockedOn === null); ) wu(n), n.blockedOn === null && It.shift();
  }
  var vn = ye.ReactCurrentBatchConfig, Vr = !0;
  function _c(e, t, n, r) {
    var l = te, o = vn.transition;
    vn.transition = null;
    try {
      te = 1, lo(e, t, n, r);
    } finally {
      te = l, vn.transition = o;
    }
  }
  function zc(e, t, n, r) {
    var l = te, o = vn.transition;
    vn.transition = null;
    try {
      te = 4, lo(e, t, n, r);
    } finally {
      te = l, vn.transition = o;
    }
  }
  function lo(e, t, n, r) {
    if (Vr) {
      var l = oo(e, t, n, r);
      if (l === null) Eo(e, t, r, Wr, n), yu(e, r);
      else if (Ec(l, e, t, n, r)) r.stopPropagation();
      else if (yu(e, r), t & 4 && -1 < Sc.indexOf(e)) {
        for (; l !== null; ) {
          var o = cr(l);
          if (o !== null && mu(o), o = oo(e, t, n, r), o === null && Eo(e, t, r, Wr, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Eo(e, t, r, null, n);
    }
  }
  var Wr = null;
  function oo(e, t, n, r) {
    if (Wr = null, e = Kl(r), e = en(e), e !== null) if (t = bt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = lu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Wr = e, null;
  }
  function xu(e) {
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
        switch (pc()) {
          case ql:
            return 1;
          case cu:
            return 4;
          case jr:
          case mc:
            return 16;
          case du:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ft = null, io = null, Br = null;
  function Su() {
    if (Br) return Br;
    var e, t = io, n = t.length, r, l = "value" in Ft ? Ft.value : Ft.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Br = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function $r(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Hr() {
    return !0;
  }
  function Eu() {
    return !1;
  }
  function qe(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Hr : Eu, this.isPropagationStopped = Eu, this;
    }
    return N(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hr);
    }, persist: function() {
    }, isPersistent: Hr }), t;
  }
  var yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, uo = qe(yn), bn = N({}, yn, { view: 0, detail: 0 }), Pc = qe(bn), so, ao, er, Qr = N({}, bn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fo, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (so = e.screenX - er.screenX, ao = e.screenY - er.screenY) : ao = so = 0, er = e), so);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ao;
  } }), Cu = qe(Qr), Nc = N({}, Qr, { dataTransfer: 0 }), Tc = qe(Nc), Rc = N({}, bn, { relatedTarget: 0 }), co = qe(Rc), Lc = N({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mc = qe(Lc), jc = N({}, yn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Oc = qe(jc), Ic = N({}, yn, { data: 0 }), _u = qe(Ic), Fc = {
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
  }, Dc = {
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
  }, Ac = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Uc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ac[e]) ? !!t[e] : !1;
  }
  function fo() {
    return Uc;
  }
  var Vc = N({}, bn, { key: function(e) {
    if (e.key) {
      var t = Fc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = $r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Dc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fo, charCode: function(e) {
    return e.type === "keypress" ? $r(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? $r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Wc = qe(Vc), Bc = N({}, Qr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zu = qe(Bc), $c = N({}, bn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fo }), Hc = qe($c), Qc = N({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gc = qe(Qc), Kc = N({}, Qr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yc = qe(Kc), Xc = [9, 13, 27, 32], po = j && "CompositionEvent" in window, tr = null;
  j && "documentMode" in document && (tr = document.documentMode);
  var Zc = j && "TextEvent" in window && !tr, Pu = j && (!po || tr && 8 < tr && 11 >= tr), Nu = " ", Tu = !1;
  function Ru(e, t) {
    switch (e) {
      case "keyup":
        return Xc.indexOf(t.keyCode) !== -1;
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
  function Lu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var wn = !1;
  function Jc(e, t) {
    switch (e) {
      case "compositionend":
        return Lu(t);
      case "keypress":
        return t.which !== 32 ? null : (Tu = !0, Nu);
      case "textInput":
        return e = t.data, e === Nu && Tu ? null : e;
      default:
        return null;
    }
  }
  function qc(e, t) {
    if (wn) return e === "compositionend" || !po && Ru(e, t) ? (e = Su(), Br = io = Ft = null, wn = !1, e) : null;
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
        return Pu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var bc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Mu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!bc[e.type] : t === "textarea";
  }
  function ju(e, t, n, r) {
    bi(r), t = Zr(t, "onChange"), 0 < t.length && (n = new uo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var nr = null, rr = null;
  function ed(e) {
    Ju(e, 0);
  }
  function Gr(e) {
    var t = Cn(e);
    if (Wi(t)) return e;
  }
  function td(e, t) {
    if (e === "change") return t;
  }
  var Ou = !1;
  if (j) {
    var mo;
    if (j) {
      var ho = "oninput" in document;
      if (!ho) {
        var Iu = document.createElement("div");
        Iu.setAttribute("oninput", "return;"), ho = typeof Iu.oninput == "function";
      }
      mo = ho;
    } else mo = !1;
    Ou = mo && (!document.documentMode || 9 < document.documentMode);
  }
  function Fu() {
    nr && (nr.detachEvent("onpropertychange", Du), rr = nr = null);
  }
  function Du(e) {
    if (e.propertyName === "value" && Gr(rr)) {
      var t = [];
      ju(t, rr, e, Kl(e)), ru(ed, t);
    }
  }
  function nd(e, t, n) {
    e === "focusin" ? (Fu(), nr = t, rr = n, nr.attachEvent("onpropertychange", Du)) : e === "focusout" && Fu();
  }
  function rd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Gr(rr);
  }
  function ld(e, t) {
    if (e === "click") return Gr(t);
  }
  function od(e, t) {
    if (e === "input" || e === "change") return Gr(t);
  }
  function id(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dt = typeof Object.is == "function" ? Object.is : id;
  function lr(e, t) {
    if (dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!I.call(t, l) || !dt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Au(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Uu(e, t) {
    var n = Au(e);
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
      n = Au(n);
    }
  }
  function Vu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Wu() {
    for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Tr(e.document);
    }
    return t;
  }
  function go(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function ud(e) {
    var t = Wu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Vu(n.ownerDocument.documentElement, n)) {
      if (r !== null && go(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Uu(n, o);
          var i = Uu(
            n,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var sd = j && "documentMode" in document && 11 >= document.documentMode, kn = null, vo = null, or = null, yo = !1;
  function Bu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yo || kn == null || kn !== Tr(r) || (r = kn, "selectionStart" in r && go(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), or && lr(or, r) || (or = r, r = Zr(vo, "onSelect"), 0 < r.length && (t = new uo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = kn)));
  }
  function Kr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var xn = { animationend: Kr("Animation", "AnimationEnd"), animationiteration: Kr("Animation", "AnimationIteration"), animationstart: Kr("Animation", "AnimationStart"), transitionend: Kr("Transition", "TransitionEnd") }, wo = {}, $u = {};
  j && ($u = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
  function Yr(e) {
    if (wo[e]) return wo[e];
    if (!xn[e]) return e;
    var t = xn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in $u) return wo[e] = t[n];
    return e;
  }
  var Hu = Yr("animationend"), Qu = Yr("animationiteration"), Gu = Yr("animationstart"), Ku = Yr("transitionend"), Yu = /* @__PURE__ */ new Map(), Xu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dt(e, t) {
    Yu.set(e, t), E(t, [e]);
  }
  for (var ko = 0; ko < Xu.length; ko++) {
    var xo = Xu[ko], ad = xo.toLowerCase(), cd = xo[0].toUpperCase() + xo.slice(1);
    Dt(ad, "on" + cd);
  }
  Dt(Hu, "onAnimationEnd"), Dt(Qu, "onAnimationIteration"), Dt(Gu, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Ku, "onTransitionEnd"), z("onMouseEnter", ["mouseout", "mouseover"]), z("onMouseLeave", ["mouseout", "mouseover"]), z("onPointerEnter", ["pointerout", "pointerover"]), z("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
  function Zu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ac(r, t, void 0, e), e.currentTarget = null;
  }
  function Ju(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], c = u.instance, h = u.currentTarget;
          if (u = u.listener, c !== o && l.isPropagationStopped()) break e;
          Zu(l, u, h), o = c;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], c = u.instance, h = u.currentTarget, u = u.listener, c !== o && l.isPropagationStopped()) break e;
          Zu(l, u, h), o = c;
        }
      }
    }
    if (Mr) throw e = Jl, Mr = !1, Jl = null, e;
  }
  function oe(e, t) {
    var n = t[To];
    n === void 0 && (n = t[To] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (qu(t, e, 2, !1), n.add(r));
  }
  function So(e, t, n) {
    var r = 0;
    t && (r |= 4), qu(n, e, r, t);
  }
  var Xr = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(e) {
    if (!e[Xr]) {
      e[Xr] = !0, v.forEach(function(n) {
        n !== "selectionchange" && (dd.has(n) || So(n, !1, e), So(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Xr] || (t[Xr] = !0, So("selectionchange", !1, t));
    }
  }
  function qu(e, t, n, r) {
    switch (xu(t)) {
      case 1:
        var l = _c;
        break;
      case 4:
        l = zc;
        break;
      default:
        l = lo;
    }
    n = l.bind(null, t, n, e), l = void 0, !Zl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Eo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || u.nodeType === 8 && u.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var c = i.tag;
          if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
          i = i.return;
        }
        for (; u !== null; ) {
          if (i = en(u), i === null) return;
          if (c = i.tag, c === 5 || c === 6) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    ru(function() {
      var h = o, k = Kl(n), x = [];
      e: {
        var w = Yu.get(e);
        if (w !== void 0) {
          var P = uo, R = e;
          switch (e) {
            case "keypress":
              if ($r(n) === 0) break e;
            case "keydown":
            case "keyup":
              P = Wc;
              break;
            case "focusin":
              R = "focus", P = co;
              break;
            case "focusout":
              R = "blur", P = co;
              break;
            case "beforeblur":
            case "afterblur":
              P = co;
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
              P = Cu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              P = Tc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              P = Hc;
              break;
            case Hu:
            case Qu:
            case Gu:
              P = Mc;
              break;
            case Ku:
              P = Gc;
              break;
            case "scroll":
              P = Pc;
              break;
            case "wheel":
              P = Yc;
              break;
            case "copy":
            case "cut":
            case "paste":
              P = Oc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              P = zu;
          }
          var L = (t & 4) !== 0, ge = !L && e === "scroll", p = L ? w !== null ? w + "Capture" : null : w;
          L = [];
          for (var d = h, m; d !== null; ) {
            m = d;
            var S = m.stateNode;
            if (m.tag === 5 && S !== null && (m = S, p !== null && (S = $n(d, p), S != null && L.push(sr(d, S, m)))), ge) break;
            d = d.return;
          }
          0 < L.length && (w = new P(w, R, null, n, k), x.push({ event: w, listeners: L }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (w = e === "mouseover" || e === "pointerover", P = e === "mouseout" || e === "pointerout", w && n !== Gl && (R = n.relatedTarget || n.fromElement) && (en(R) || R[Et])) break e;
          if ((P || w) && (w = k.window === k ? k : (w = k.ownerDocument) ? w.defaultView || w.parentWindow : window, P ? (R = n.relatedTarget || n.toElement, P = h, R = R ? en(R) : null, R !== null && (ge = bt(R), R !== ge || R.tag !== 5 && R.tag !== 6) && (R = null)) : (P = null, R = h), P !== R)) {
            if (L = Cu, S = "onMouseLeave", p = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (L = zu, S = "onPointerLeave", p = "onPointerEnter", d = "pointer"), ge = P == null ? w : Cn(P), m = R == null ? w : Cn(R), w = new L(S, d + "leave", P, n, k), w.target = ge, w.relatedTarget = m, S = null, en(k) === h && (L = new L(p, d + "enter", R, n, k), L.target = m, L.relatedTarget = ge, S = L), ge = S, P && R) t: {
              for (L = P, p = R, d = 0, m = L; m; m = Sn(m)) d++;
              for (m = 0, S = p; S; S = Sn(S)) m++;
              for (; 0 < d - m; ) L = Sn(L), d--;
              for (; 0 < m - d; ) p = Sn(p), m--;
              for (; d--; ) {
                if (L === p || p !== null && L === p.alternate) break t;
                L = Sn(L), p = Sn(p);
              }
              L = null;
            }
            else L = null;
            P !== null && bu(x, w, P, L, !1), R !== null && ge !== null && bu(x, ge, R, L, !0);
          }
        }
        e: {
          if (w = h ? Cn(h) : window, P = w.nodeName && w.nodeName.toLowerCase(), P === "select" || P === "input" && w.type === "file") var M = td;
          else if (Mu(w)) if (Ou) M = od;
          else {
            M = rd;
            var F = nd;
          }
          else (P = w.nodeName) && P.toLowerCase() === "input" && (w.type === "checkbox" || w.type === "radio") && (M = ld);
          if (M && (M = M(e, h))) {
            ju(x, M, n, k);
            break e;
          }
          F && F(e, w, h), e === "focusout" && (F = w._wrapperState) && F.controlled && w.type === "number" && Wl(w, "number", w.value);
        }
        switch (F = h ? Cn(h) : window, e) {
          case "focusin":
            (Mu(F) || F.contentEditable === "true") && (kn = F, vo = h, or = null);
            break;
          case "focusout":
            or = vo = kn = null;
            break;
          case "mousedown":
            yo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yo = !1, Bu(x, n, k);
            break;
          case "selectionchange":
            if (sd) break;
          case "keydown":
          case "keyup":
            Bu(x, n, k);
        }
        var D;
        if (po) e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
        else wn ? Ru(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
        A && (Pu && n.locale !== "ko" && (wn || A !== "onCompositionStart" ? A === "onCompositionEnd" && wn && (D = Su()) : (Ft = k, io = "value" in Ft ? Ft.value : Ft.textContent, wn = !0)), F = Zr(h, A), 0 < F.length && (A = new _u(A, e, null, n, k), x.push({ event: A, listeners: F }), D ? A.data = D : (D = Lu(n), D !== null && (A.data = D)))), (D = Zc ? Jc(e, n) : qc(e, n)) && (h = Zr(h, "onBeforeInput"), 0 < h.length && (k = new _u("onBeforeInput", "beforeinput", null, n, k), x.push({ event: k, listeners: h }), k.data = D));
      }
      Ju(x, t);
    });
  }
  function sr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Zr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = $n(e, n), o != null && r.unshift(sr(e, o, l)), o = $n(e, t), o != null && r.push(sr(e, o, l))), e = e.return;
    }
    return r;
  }
  function Sn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function bu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n, c = u.alternate, h = u.stateNode;
      if (c !== null && c === r) break;
      u.tag === 5 && h !== null && (u = h, l ? (c = $n(n, o), c != null && i.unshift(sr(n, c, u))) : l || (c = $n(n, o), c != null && i.push(sr(n, c, u)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var fd = /\r\n?/g, pd = /\u0000|\uFFFD/g;
  function es(e) {
    return (typeof e == "string" ? e : "" + e).replace(fd, `
`).replace(pd, "");
  }
  function Jr(e, t, n) {
    if (t = es(t), es(e) !== t && n) throw Error(s(425));
  }
  function qr() {
  }
  var Co = null, _o = null;
  function zo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Po = typeof setTimeout == "function" ? setTimeout : void 0, md = typeof clearTimeout == "function" ? clearTimeout : void 0, ts = typeof Promise == "function" ? Promise : void 0, hd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ts < "u" ? function(e) {
    return ts.resolve(null).then(e).catch(gd);
  } : Po;
  function gd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function No(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), qn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    qn(t);
  }
  function At(e) {
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
  function ns(e) {
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
  var En = Math.random().toString(36).slice(2), wt = "__reactFiber$" + En, ar = "__reactProps$" + En, Et = "__reactContainer$" + En, To = "__reactEvents$" + En, vd = "__reactListeners$" + En, yd = "__reactHandles$" + En;
  function en(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Et] || n[wt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ns(e); e !== null; ) {
          if (n = e[wt]) return n;
          e = ns(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function cr(e) {
    return e = e[wt] || e[Et], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Cn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function br(e) {
    return e[ar] || null;
  }
  var Ro = [], _n = -1;
  function Ut(e) {
    return { current: e };
  }
  function ie(e) {
    0 > _n || (e.current = Ro[_n], Ro[_n] = null, _n--);
  }
  function re(e, t) {
    _n++, Ro[_n] = e.current, e.current = t;
  }
  var Vt = {}, je = Ut(Vt), Be = Ut(!1), tn = Vt;
  function zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function $e(e) {
    return e = e.childContextTypes, e != null;
  }
  function el() {
    ie(Be), ie(je);
  }
  function rs(e, t, n) {
    if (je.current !== Vt) throw Error(s(168));
    re(je, t), re(Be, n);
  }
  function ls(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, ne(e) || "Unknown", l));
    return N({}, n, r);
  }
  function tl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, tn = je.current, re(je, e), re(Be, Be.current), !0;
  }
  function os(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = ls(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, ie(Be), ie(je), re(je, e)) : ie(Be), re(Be, n);
  }
  var Ct = null, nl = !1, Lo = !1;
  function is(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  function wd(e) {
    nl = !0, is(e);
  }
  function Wt() {
    if (!Lo && Ct !== null) {
      Lo = !0;
      var e = 0, t = te;
      try {
        var n = Ct;
        for (te = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Ct = null, nl = !1;
      } catch (l) {
        throw Ct !== null && (Ct = Ct.slice(e + 1)), su(ql, Wt), l;
      } finally {
        te = t, Lo = !1;
      }
    }
    return null;
  }
  var Pn = [], Nn = 0, rl = null, ll = 0, rt = [], lt = 0, nn = null, _t = 1, zt = "";
  function rn(e, t) {
    Pn[Nn++] = ll, Pn[Nn++] = rl, rl = e, ll = t;
  }
  function us(e, t, n) {
    rt[lt++] = _t, rt[lt++] = zt, rt[lt++] = nn, nn = e;
    var r = _t;
    e = zt;
    var l = 32 - ct(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - ct(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, _t = 1 << 32 - ct(t) + l | n << l | r, zt = o + e;
    } else _t = 1 << o | n << l | r, zt = e;
  }
  function Mo(e) {
    e.return !== null && (rn(e, 1), us(e, 1, 0));
  }
  function jo(e) {
    for (; e === rl; ) rl = Pn[--Nn], Pn[Nn] = null, ll = Pn[--Nn], Pn[Nn] = null;
    for (; e === nn; ) nn = rt[--lt], rt[lt] = null, zt = rt[--lt], rt[lt] = null, _t = rt[--lt], rt[lt] = null;
  }
  var be = null, et = null, ae = !1, ft = null;
  function ss(e, t) {
    var n = st(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function as(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, be = e, et = At(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, be = e, et = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: _t, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = st(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, be = e, et = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Oo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Io(e) {
    if (ae) {
      var t = et;
      if (t) {
        var n = t;
        if (!as(e, t)) {
          if (Oo(e)) throw Error(s(418));
          t = At(n.nextSibling);
          var r = be;
          t && as(e, t) ? ss(r, n) : (e.flags = e.flags & -4097 | 2, ae = !1, be = e);
        }
      } else {
        if (Oo(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, ae = !1, be = e;
      }
    }
  }
  function cs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    be = e;
  }
  function ol(e) {
    if (e !== be) return !1;
    if (!ae) return cs(e), ae = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zo(e.type, e.memoizedProps)), t && (t = et)) {
      if (Oo(e)) throw ds(), Error(s(418));
      for (; t; ) ss(e, t), t = At(t.nextSibling);
    }
    if (cs(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                et = At(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        et = null;
      }
    } else et = be ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ds() {
    for (var e = et; e; ) e = At(e.nextSibling);
  }
  function Tn() {
    et = be = null, ae = !1;
  }
  function Fo(e) {
    ft === null ? ft = [e] : ft.push(e);
  }
  var kd = ye.ReactCurrentBatchConfig;
  function dr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var u = l.refs;
          i === null ? delete u[o] : u[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function il(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function fs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ps(e) {
    function t(p, d) {
      if (e) {
        var m = p.deletions;
        m === null ? (p.deletions = [d], p.flags |= 16) : m.push(d);
      }
    }
    function n(p, d) {
      if (!e) return null;
      for (; d !== null; ) t(p, d), d = d.sibling;
      return null;
    }
    function r(p, d) {
      for (p = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? p.set(d.key, d) : p.set(d.index, d), d = d.sibling;
      return p;
    }
    function l(p, d) {
      return p = Xt(p, d), p.index = 0, p.sibling = null, p;
    }
    function o(p, d, m) {
      return p.index = m, e ? (m = p.alternate, m !== null ? (m = m.index, m < d ? (p.flags |= 2, d) : m) : (p.flags |= 2, d)) : (p.flags |= 1048576, d);
    }
    function i(p) {
      return e && p.alternate === null && (p.flags |= 2), p;
    }
    function u(p, d, m, S) {
      return d === null || d.tag !== 6 ? (d = Pi(m, p.mode, S), d.return = p, d) : (d = l(d, m), d.return = p, d);
    }
    function c(p, d, m, S) {
      var M = m.type;
      return M === Ne ? k(p, d, m.props.children, S, m.key) : d !== null && (d.elementType === M || typeof M == "object" && M !== null && M.$$typeof === ke && fs(M) === d.type) ? (S = l(d, m.props), S.ref = dr(p, d, m), S.return = p, S) : (S = Rl(m.type, m.key, m.props, null, p.mode, S), S.ref = dr(p, d, m), S.return = p, S);
    }
    function h(p, d, m, S) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== m.containerInfo || d.stateNode.implementation !== m.implementation ? (d = Ni(m, p.mode, S), d.return = p, d) : (d = l(d, m.children || []), d.return = p, d);
    }
    function k(p, d, m, S, M) {
      return d === null || d.tag !== 7 ? (d = fn(m, p.mode, S, M), d.return = p, d) : (d = l(d, m), d.return = p, d);
    }
    function x(p, d, m) {
      if (typeof d == "string" && d !== "" || typeof d == "number") return d = Pi("" + d, p.mode, m), d.return = p, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case We:
            return m = Rl(d.type, d.key, d.props, null, p.mode, m), m.ref = dr(p, null, d), m.return = p, m;
          case Ce:
            return d = Ni(d, p.mode, m), d.return = p, d;
          case ke:
            var S = d._init;
            return x(p, S(d._payload), m);
        }
        if (Vn(d) || O(d)) return d = fn(d, p.mode, m, null), d.return = p, d;
        il(p, d);
      }
      return null;
    }
    function w(p, d, m, S) {
      var M = d !== null ? d.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number") return M !== null ? null : u(p, d, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case We:
            return m.key === M ? c(p, d, m, S) : null;
          case Ce:
            return m.key === M ? h(p, d, m, S) : null;
          case ke:
            return M = m._init, w(
              p,
              d,
              M(m._payload),
              S
            );
        }
        if (Vn(m) || O(m)) return M !== null ? null : k(p, d, m, S, null);
        il(p, m);
      }
      return null;
    }
    function P(p, d, m, S, M) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return p = p.get(m) || null, u(d, p, "" + S, M);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case We:
            return p = p.get(S.key === null ? m : S.key) || null, c(d, p, S, M);
          case Ce:
            return p = p.get(S.key === null ? m : S.key) || null, h(d, p, S, M);
          case ke:
            var F = S._init;
            return P(p, d, m, F(S._payload), M);
        }
        if (Vn(S) || O(S)) return p = p.get(m) || null, k(d, p, S, M, null);
        il(d, S);
      }
      return null;
    }
    function R(p, d, m, S) {
      for (var M = null, F = null, D = d, A = d = 0, Pe = null; D !== null && A < m.length; A++) {
        D.index > A ? (Pe = D, D = null) : Pe = D.sibling;
        var b = w(p, D, m[A], S);
        if (b === null) {
          D === null && (D = Pe);
          break;
        }
        e && D && b.alternate === null && t(p, D), d = o(b, d, A), F === null ? M = b : F.sibling = b, F = b, D = Pe;
      }
      if (A === m.length) return n(p, D), ae && rn(p, A), M;
      if (D === null) {
        for (; A < m.length; A++) D = x(p, m[A], S), D !== null && (d = o(D, d, A), F === null ? M = D : F.sibling = D, F = D);
        return ae && rn(p, A), M;
      }
      for (D = r(p, D); A < m.length; A++) Pe = P(D, p, A, m[A], S), Pe !== null && (e && Pe.alternate !== null && D.delete(Pe.key === null ? A : Pe.key), d = o(Pe, d, A), F === null ? M = Pe : F.sibling = Pe, F = Pe);
      return e && D.forEach(function(Zt) {
        return t(p, Zt);
      }), ae && rn(p, A), M;
    }
    function L(p, d, m, S) {
      var M = O(m);
      if (typeof M != "function") throw Error(s(150));
      if (m = M.call(m), m == null) throw Error(s(151));
      for (var F = M = null, D = d, A = d = 0, Pe = null, b = m.next(); D !== null && !b.done; A++, b = m.next()) {
        D.index > A ? (Pe = D, D = null) : Pe = D.sibling;
        var Zt = w(p, D, b.value, S);
        if (Zt === null) {
          D === null && (D = Pe);
          break;
        }
        e && D && Zt.alternate === null && t(p, D), d = o(Zt, d, A), F === null ? M = Zt : F.sibling = Zt, F = Zt, D = Pe;
      }
      if (b.done) return n(
        p,
        D
      ), ae && rn(p, A), M;
      if (D === null) {
        for (; !b.done; A++, b = m.next()) b = x(p, b.value, S), b !== null && (d = o(b, d, A), F === null ? M = b : F.sibling = b, F = b);
        return ae && rn(p, A), M;
      }
      for (D = r(p, D); !b.done; A++, b = m.next()) b = P(D, p, A, b.value, S), b !== null && (e && b.alternate !== null && D.delete(b.key === null ? A : b.key), d = o(b, d, A), F === null ? M = b : F.sibling = b, F = b);
      return e && D.forEach(function(bd) {
        return t(p, bd);
      }), ae && rn(p, A), M;
    }
    function ge(p, d, m, S) {
      if (typeof m == "object" && m !== null && m.type === Ne && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case We:
            e: {
              for (var M = m.key, F = d; F !== null; ) {
                if (F.key === M) {
                  if (M = m.type, M === Ne) {
                    if (F.tag === 7) {
                      n(p, F.sibling), d = l(F, m.props.children), d.return = p, p = d;
                      break e;
                    }
                  } else if (F.elementType === M || typeof M == "object" && M !== null && M.$$typeof === ke && fs(M) === F.type) {
                    n(p, F.sibling), d = l(F, m.props), d.ref = dr(p, F, m), d.return = p, p = d;
                    break e;
                  }
                  n(p, F);
                  break;
                } else t(p, F);
                F = F.sibling;
              }
              m.type === Ne ? (d = fn(m.props.children, p.mode, S, m.key), d.return = p, p = d) : (S = Rl(m.type, m.key, m.props, null, p.mode, S), S.ref = dr(p, d, m), S.return = p, p = S);
            }
            return i(p);
          case Ce:
            e: {
              for (F = m.key; d !== null; ) {
                if (d.key === F) if (d.tag === 4 && d.stateNode.containerInfo === m.containerInfo && d.stateNode.implementation === m.implementation) {
                  n(p, d.sibling), d = l(d, m.children || []), d.return = p, p = d;
                  break e;
                } else {
                  n(p, d);
                  break;
                }
                else t(p, d);
                d = d.sibling;
              }
              d = Ni(m, p.mode, S), d.return = p, p = d;
            }
            return i(p);
          case ke:
            return F = m._init, ge(p, d, F(m._payload), S);
        }
        if (Vn(m)) return R(p, d, m, S);
        if (O(m)) return L(p, d, m, S);
        il(p, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, d !== null && d.tag === 6 ? (n(p, d.sibling), d = l(d, m), d.return = p, p = d) : (n(p, d), d = Pi(m, p.mode, S), d.return = p, p = d), i(p)) : n(p, d);
    }
    return ge;
  }
  var Rn = ps(!0), ms = ps(!1), ul = Ut(null), sl = null, Ln = null, Do = null;
  function Ao() {
    Do = Ln = sl = null;
  }
  function Uo(e) {
    var t = ul.current;
    ie(ul), e._currentValue = t;
  }
  function Vo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Mn(e, t) {
    sl = e, Do = Ln = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (He = !0), e.firstContext = null);
  }
  function ot(e) {
    var t = e._currentValue;
    if (Do !== e) if (e = { context: e, memoizedValue: t, next: null }, Ln === null) {
      if (sl === null) throw Error(s(308));
      Ln = e, sl.dependencies = { lanes: 0, firstContext: e };
    } else Ln = Ln.next = e;
    return t;
  }
  var ln = null;
  function Wo(e) {
    ln === null ? ln = [e] : ln.push(e);
  }
  function hs(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Wo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Pt(e, r);
  }
  function Pt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Bt = !1;
  function Bo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function gs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Nt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $t(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Z & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Pt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Wo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Pt(e, n);
  }
  function al(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, to(e, n);
    }
  }
  function vs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function cl(e, t, n, r) {
    var l = e.updateQueue;
    Bt = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var c = u, h = c.next;
      c.next = null, i === null ? o = h : i.next = h, i = c;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, u = k.lastBaseUpdate, u !== i && (u === null ? k.firstBaseUpdate = h : u.next = h, k.lastBaseUpdate = c));
    }
    if (o !== null) {
      var x = l.baseState;
      i = 0, k = h = c = null, u = o;
      do {
        var w = u.lane, P = u.eventTime;
        if ((r & w) === w) {
          k !== null && (k = k.next = {
            eventTime: P,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var R = e, L = u;
            switch (w = t, P = n, L.tag) {
              case 1:
                if (R = L.payload, typeof R == "function") {
                  x = R.call(P, x, w);
                  break e;
                }
                x = R;
                break e;
              case 3:
                R.flags = R.flags & -65537 | 128;
              case 0:
                if (R = L.payload, w = typeof R == "function" ? R.call(P, x, w) : R, w == null) break e;
                x = N({}, x, w);
                break e;
              case 2:
                Bt = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, w = l.effects, w === null ? l.effects = [u] : w.push(u));
        } else P = { eventTime: P, lane: w, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, k === null ? (h = k = P, c = x) : k = k.next = P, i |= w;
        if (u = u.next, u === null) {
          if (u = l.shared.pending, u === null) break;
          w = u, u = w.next, w.next = null, l.lastBaseUpdate = w, l.shared.pending = null;
        }
      } while (!0);
      if (k === null && (c = x), l.baseState = c, l.firstBaseUpdate = h, l.lastBaseUpdate = k, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      sn |= i, e.lanes = i, e.memoizedState = x;
    }
  }
  function ys(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(s(191, l));
        l.call(r);
      }
    }
  }
  var fr = {}, kt = Ut(fr), pr = Ut(fr), mr = Ut(fr);
  function on(e) {
    if (e === fr) throw Error(s(174));
    return e;
  }
  function $o(e, t) {
    switch (re(mr, t), re(pr, e), re(kt, fr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $l(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $l(t, e);
    }
    ie(kt), re(kt, t);
  }
  function jn() {
    ie(kt), ie(pr), ie(mr);
  }
  function ws(e) {
    on(mr.current);
    var t = on(kt.current), n = $l(t, e.type);
    t !== n && (re(pr, e), re(kt, n));
  }
  function Ho(e) {
    pr.current === e && (ie(kt), ie(pr));
  }
  var de = Ut(0);
  function dl(e) {
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
  var Qo = [];
  function Go() {
    for (var e = 0; e < Qo.length; e++) Qo[e]._workInProgressVersionPrimary = null;
    Qo.length = 0;
  }
  var fl = ye.ReactCurrentDispatcher, Ko = ye.ReactCurrentBatchConfig, un = 0, fe = null, xe = null, _e = null, pl = !1, hr = !1, gr = 0, xd = 0;
  function Oe() {
    throw Error(s(321));
  }
  function Yo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!dt(e[n], t[n])) return !1;
    return !0;
  }
  function Xo(e, t, n, r, l, o) {
    if (un = o, fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fl.current = e === null || e.memoizedState === null ? _d : zd, e = n(r, l), hr) {
      o = 0;
      do {
        if (hr = !1, gr = 0, 25 <= o) throw Error(s(301));
        o += 1, _e = xe = null, t.updateQueue = null, fl.current = Pd, e = n(r, l);
      } while (hr);
    }
    if (fl.current = gl, t = xe !== null && xe.next !== null, un = 0, _e = xe = fe = null, pl = !1, t) throw Error(s(300));
    return e;
  }
  function Zo() {
    var e = gr !== 0;
    return gr = 0, e;
  }
  function xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return _e === null ? fe.memoizedState = _e = e : _e = _e.next = e, _e;
  }
  function it() {
    if (xe === null) {
      var e = fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = _e === null ? fe.memoizedState : _e.next;
    if (t !== null) _e = t, xe = e;
    else {
      if (e === null) throw Error(s(310));
      xe = e, e = { memoizedState: xe.memoizedState, baseState: xe.baseState, baseQueue: xe.baseQueue, queue: xe.queue, next: null }, _e === null ? fe.memoizedState = _e = e : _e = _e.next = e;
    }
    return _e;
  }
  function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Jo(e) {
    var t = it(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = xe, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var u = i = null, c = null, h = o;
      do {
        var k = h.lane;
        if ((un & k) === k) c !== null && (c = c.next = { lane: 0, action: h.action, hasEagerState: h.hasEagerState, eagerState: h.eagerState, next: null }), r = h.hasEagerState ? h.eagerState : e(r, h.action);
        else {
          var x = {
            lane: k,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          };
          c === null ? (u = c = x, i = r) : c = c.next = x, fe.lanes |= k, sn |= k;
        }
        h = h.next;
      } while (h !== null && h !== o);
      c === null ? i = r : c.next = u, dt(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, fe.lanes |= o, sn |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function qo(e) {
    var t = it(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      dt(o, t.memoizedState) || (He = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function ks() {
  }
  function xs(e, t) {
    var n = fe, r = it(), l = t(), o = !dt(r.memoizedState, l);
    if (o && (r.memoizedState = l, He = !0), r = r.queue, bo(Cs.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || _e !== null && _e.memoizedState.tag & 1) {
      if (n.flags |= 2048, yr(9, Es.bind(null, n, r, l, t), void 0, null), ze === null) throw Error(s(349));
      un & 30 || Ss(n, t, l);
    }
    return l;
  }
  function Ss(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Es(e, t, n, r) {
    t.value = n, t.getSnapshot = r, _s(t) && zs(e);
  }
  function Cs(e, t, n) {
    return n(function() {
      _s(t) && zs(e);
    });
  }
  function _s(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !dt(e, n);
    } catch {
      return !0;
    }
  }
  function zs(e) {
    var t = Pt(e, 1);
    t !== null && gt(t, e, 1, -1);
  }
  function Ps(e) {
    var t = xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Cd.bind(null, fe, e), [t.memoizedState, e];
  }
  function yr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, fe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ns() {
    return it().memoizedState;
  }
  function ml(e, t, n, r) {
    var l = xt();
    fe.flags |= e, l.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function hl(e, t, n, r) {
    var l = it();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (xe !== null) {
      var i = xe.memoizedState;
      if (o = i.destroy, r !== null && Yo(r, i.deps)) {
        l.memoizedState = yr(t, n, o, r);
        return;
      }
    }
    fe.flags |= e, l.memoizedState = yr(1 | t, n, o, r);
  }
  function Ts(e, t) {
    return ml(8390656, 8, e, t);
  }
  function bo(e, t) {
    return hl(2048, 8, e, t);
  }
  function Rs(e, t) {
    return hl(4, 2, e, t);
  }
  function Ls(e, t) {
    return hl(4, 4, e, t);
  }
  function Ms(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function js(e, t, n) {
    return n = n != null ? n.concat([e]) : null, hl(4, 4, Ms.bind(null, t, e), n);
  }
  function ei() {
  }
  function Os(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Is(e, t) {
    var n = it();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Yo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Fs(e, t, n) {
    return un & 21 ? (dt(n, t) || (n = fu(), fe.lanes |= n, sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n);
  }
  function Sd(e, t) {
    var n = te;
    te = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ko.transition;
    Ko.transition = {};
    try {
      e(!1), t();
    } finally {
      te = n, Ko.transition = r;
    }
  }
  function Ds() {
    return it().memoizedState;
  }
  function Ed(e, t, n) {
    var r = Kt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, As(e)) Us(t, n);
    else if (n = hs(e, t, n, r), n !== null) {
      var l = Ue();
      gt(n, e, r, l), Vs(n, t, r);
    }
  }
  function Cd(e, t, n) {
    var r = Kt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (As(e)) Us(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, u = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = u, dt(u, i)) {
          var c = t.interleaved;
          c === null ? (l.next = l, Wo(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = hs(e, t, l, r), n !== null && (l = Ue(), gt(n, e, r, l), Vs(n, t, r));
    }
  }
  function As(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe;
  }
  function Us(e, t) {
    hr = pl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Vs(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, to(e, n);
    }
  }
  var gl = { readContext: ot, useCallback: Oe, useContext: Oe, useEffect: Oe, useImperativeHandle: Oe, useInsertionEffect: Oe, useLayoutEffect: Oe, useMemo: Oe, useReducer: Oe, useRef: Oe, useState: Oe, useDebugValue: Oe, useDeferredValue: Oe, useTransition: Oe, useMutableSource: Oe, useSyncExternalStore: Oe, useId: Oe, unstable_isNewReconciler: !1 }, _d = { readContext: ot, useCallback: function(e, t) {
    return xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ot, useEffect: Ts, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ml(
      4194308,
      4,
      Ms.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ml(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ml(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ed.bind(null, fe, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ps, useDebugValue: ei, useDeferredValue: function(e) {
    return xt().memoizedState = e;
  }, useTransition: function() {
    var e = Ps(!1), t = e[0];
    return e = Sd.bind(null, e[1]), xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = fe, l = xt();
    if (ae) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), ze === null) throw Error(s(349));
      un & 30 || Ss(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, Ts(Cs.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, yr(9, Es.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = xt(), t = ze.identifierPrefix;
    if (ae) {
      var n = zt, r = _t;
      n = (r & ~(1 << 32 - ct(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = xd++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zd = {
    readContext: ot,
    useCallback: Os,
    useContext: ot,
    useEffect: bo,
    useImperativeHandle: js,
    useInsertionEffect: Rs,
    useLayoutEffect: Ls,
    useMemo: Is,
    useReducer: Jo,
    useRef: Ns,
    useState: function() {
      return Jo(vr);
    },
    useDebugValue: ei,
    useDeferredValue: function(e) {
      var t = it();
      return Fs(t, xe.memoizedState, e);
    },
    useTransition: function() {
      var e = Jo(vr)[0], t = it().memoizedState;
      return [e, t];
    },
    useMutableSource: ks,
    useSyncExternalStore: xs,
    useId: Ds,
    unstable_isNewReconciler: !1
  }, Pd = { readContext: ot, useCallback: Os, useContext: ot, useEffect: bo, useImperativeHandle: js, useInsertionEffect: Rs, useLayoutEffect: Ls, useMemo: Is, useReducer: qo, useRef: Ns, useState: function() {
    return qo(vr);
  }, useDebugValue: ei, useDeferredValue: function(e) {
    var t = it();
    return xe === null ? t.memoizedState = e : Fs(t, xe.memoizedState, e);
  }, useTransition: function() {
    var e = qo(vr)[0], t = it().memoizedState;
    return [e, t];
  }, useMutableSource: ks, useSyncExternalStore: xs, useId: Ds, unstable_isNewReconciler: !1 };
  function pt(e, t) {
    if (e && e.defaultProps) {
      t = N({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ti(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : N({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var vl = { isMounted: function(e) {
    return (e = e._reactInternals) ? bt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ue(), l = Kt(e), o = Nt(r, l);
    o.payload = t, n != null && (o.callback = n), t = $t(e, o, l), t !== null && (gt(t, e, l, r), al(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Ue(), l = Kt(e), o = Nt(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = $t(e, o, l), t !== null && (gt(t, e, l, r), al(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Ue(), r = Kt(e), l = Nt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = $t(e, l, r), t !== null && (gt(t, e, r, n), al(t, e, r));
  } };
  function Ws(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !lr(n, r) || !lr(l, o) : !0;
  }
  function Bs(e, t, n) {
    var r = !1, l = Vt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ot(o) : (l = $e(t) ? tn : je.current, r = t.contextTypes, o = (r = r != null) ? zn(e, l) : Vt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function $s(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vl.enqueueReplaceState(t, t.state, null);
  }
  function ni(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Bo(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = ot(o) : (o = $e(t) ? tn : je.current, l.context = zn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (ti(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && vl.enqueueReplaceState(l, l.state, null), cl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function On(e, t) {
    try {
      var n = "", r = t;
      do
        n += J(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function ri(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function li(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Nd = typeof WeakMap == "function" ? WeakMap : Map;
  function Hs(e, t, n) {
    n = Nt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      Cl || (Cl = !0, wi = r), li(e, t);
    }, n;
  }
  function Qs(e, t, n) {
    n = Nt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        li(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      li(e, t), typeof r != "function" && (Qt === null ? Qt = /* @__PURE__ */ new Set([this]) : Qt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function Gs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Nd();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Bd.bind(null, e, t, n), t.then(e, e));
  }
  function Ks(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ys(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Nt(-1, 1), t.tag = 2, $t(n, t, 1))), n.lanes |= 1), e);
  }
  var Td = ye.ReactCurrentOwner, He = !1;
  function Ae(e, t, n, r) {
    t.child = e === null ? ms(t, null, n, r) : Rn(t, e.child, n, r);
  }
  function Xs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Mn(t, l), r = Xo(e, t, n, r, o, l), n = Zo(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Tt(e, t, l)) : (ae && n && Mo(t), t.flags |= 1, Ae(e, t, r, l), t.child);
  }
  function Zs(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !zi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Js(e, t, o, r, l)) : (e = Rl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : lr, n(i, r) && e.ref === t.ref) return Tt(e, t, l);
    }
    return t.flags |= 1, e = Xt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Js(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (lr(o, r) && e.ref === t.ref) if (He = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (He = !0);
      else return t.lanes = e.lanes, Tt(e, t, l);
    }
    return oi(e, t, n, r, l);
  }
  function qs(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, re(Fn, tt), tt |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, re(Fn, tt), tt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, re(Fn, tt), tt |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, re(Fn, tt), tt |= r;
    return Ae(e, t, l, n), t.child;
  }
  function bs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function oi(e, t, n, r, l) {
    var o = $e(n) ? tn : je.current;
    return o = zn(t, o), Mn(t, l), n = Xo(e, t, n, r, o, l), r = Zo(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Tt(e, t, l)) : (ae && r && Mo(t), t.flags |= 1, Ae(e, t, n, l), t.child);
  }
  function ea(e, t, n, r, l) {
    if ($e(n)) {
      var o = !0;
      tl(t);
    } else o = !1;
    if (Mn(t, l), t.stateNode === null) wl(e, t), Bs(t, n, r), ni(t, n, r, l), r = !0;
    else if (e === null) {
      var i = t.stateNode, u = t.memoizedProps;
      i.props = u;
      var c = i.context, h = n.contextType;
      typeof h == "object" && h !== null ? h = ot(h) : (h = $e(n) ? tn : je.current, h = zn(t, h));
      var k = n.getDerivedStateFromProps, x = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      x || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== h) && $s(t, i, r, h), Bt = !1;
      var w = t.memoizedState;
      i.state = w, cl(t, r, i, l), c = t.memoizedState, u !== r || w !== c || Be.current || Bt ? (typeof k == "function" && (ti(t, n, k, r), c = t.memoizedState), (u = Bt || Ws(t, n, u, r, w, c, h)) ? (x || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = h, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, gs(e, t), u = t.memoizedProps, h = t.type === t.elementType ? u : pt(t.type, u), i.props = h, x = t.pendingProps, w = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = ot(c) : (c = $e(n) ? tn : je.current, c = zn(t, c));
      var P = n.getDerivedStateFromProps;
      (k = typeof P == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== x || w !== c) && $s(t, i, r, c), Bt = !1, w = t.memoizedState, i.state = w, cl(t, r, i, l);
      var R = t.memoizedState;
      u !== x || w !== R || Be.current || Bt ? (typeof P == "function" && (ti(t, n, P, r), R = t.memoizedState), (h = Bt || Ws(t, n, h, r, w, R, c) || !1) ? (k || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, R, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, R, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = R), i.props = r, i.state = R, i.context = c, r = h) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ii(e, t, n, r, o, l);
  }
  function ii(e, t, n, r, l, o) {
    bs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && os(t, n, !1), Tt(e, t, o);
    r = t.stateNode, Td.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Rn(t, e.child, null, o), t.child = Rn(t, null, u, o)) : Ae(e, t, u, o), t.memoizedState = r.state, l && os(t, n, !0), t.child;
  }
  function ta(e) {
    var t = e.stateNode;
    t.pendingContext ? rs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && rs(e, t.context, !1), $o(e, t.containerInfo);
  }
  function na(e, t, n, r, l) {
    return Tn(), Fo(l), t.flags |= 256, Ae(e, t, n, r), t.child;
  }
  var ui = { dehydrated: null, treeContext: null, retryLane: 0 };
  function si(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ra(e, t, n) {
    var r = t.pendingProps, l = de.current, o = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), re(de, l & 1), e === null)
      return Io(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Ll(i, r, 0, null), e = fn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = si(n), t.memoizedState = ui, e) : ai(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Rd(e, t, i, r, u, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
      var c = { mode: "hidden", children: r.children };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Xt(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Xt(u, o) : (o = fn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? si(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = ui, r;
    }
    return o = e.child, e = o.sibling, r = Xt(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ai(e, t) {
    return t = Ll({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function yl(e, t, n, r) {
    return r !== null && Fo(r), Rn(t, e.child, null, n), e = ai(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Rd(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = ri(Error(s(422))), yl(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Ll({ mode: "visible", children: r.children }, l, 0, null), o = fn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Rn(t, e.child, null, i), t.child.memoizedState = si(i), t.memoizedState = ui, o);
    if (!(t.mode & 1)) return yl(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
      return r = u, o = Error(s(419)), r = ri(o, r, void 0), yl(e, t, i, r);
    }
    if (u = (i & e.childLanes) !== 0, He || u) {
      if (r = ze, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Pt(e, l), gt(r, e, l, -1));
      }
      return _i(), r = ri(Error(s(421))), yl(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $d.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, et = At(l.nextSibling), be = t, ae = !0, ft = null, e !== null && (rt[lt++] = _t, rt[lt++] = zt, rt[lt++] = nn, _t = e.id, zt = e.overflow, nn = t), t = ai(t, r.children), t.flags |= 4096, t);
  }
  function la(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Vo(e.return, t, n);
  }
  function ci(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function oa(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (Ae(e, t, r.children, n), r = de.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && la(e, n, t);
        else if (e.tag === 19) la(e, n, t);
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
    if (re(de, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && dl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ci(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && dl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ci(t, !0, n, null, o);
        break;
      case "together":
        ci(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function wl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ld(e, t, n) {
    switch (t.tag) {
      case 3:
        ta(t), Tn();
        break;
      case 5:
        ws(t);
        break;
      case 1:
        $e(t.type) && tl(t);
        break;
      case 4:
        $o(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        re(ul, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (re(de, de.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ra(e, t, n) : (re(de, de.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
        re(de, de.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return oa(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), re(de, de.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, qs(e, t, n);
    }
    return Tt(e, t, n);
  }
  var ia, di, ua, sa;
  ia = function(e, t) {
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
  }, di = function() {
  }, ua = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, on(kt.current);
      var o = null;
      switch (n) {
        case "input":
          l = Ul(e, l), r = Ul(e, r), o = [];
          break;
        case "select":
          l = N({}, l, { value: void 0 }), r = N({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Bl(e, l), r = Bl(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qr);
      }
      Hl(n, r);
      var i;
      n = null;
      for (h in l) if (!r.hasOwnProperty(h) && l.hasOwnProperty(h) && l[h] != null) if (h === "style") {
        var u = l[h];
        for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (_.hasOwnProperty(h) ? o || (o = []) : (o = o || []).push(h, null));
      for (h in r) {
        var c = r[h];
        if (u = l?.[h], r.hasOwnProperty(h) && c !== u && (c != null || u != null)) if (h === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
        } else n || (o || (o = []), o.push(
          h,
          n
        )), n = c;
        else h === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (o = o || []).push(h, c)) : h === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(h, "" + c) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (_.hasOwnProperty(h) ? (c != null && h === "onScroll" && oe("scroll", e), o || u === c || (o = [])) : (o = o || []).push(h, c));
      }
      n && (o = o || []).push("style", n);
      var h = o;
      (t.updateQueue = h) && (t.flags |= 4);
    }
  }, sa = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function wr(e, t) {
    if (!ae) switch (e.tailMode) {
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
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Md(e, t, n) {
    var r = t.pendingProps;
    switch (jo(t), t.tag) {
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
        return Ie(t), null;
      case 1:
        return $e(t.type) && el(), Ie(t), null;
      case 3:
        return r = t.stateNode, jn(), ie(Be), ie(je), Go(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (Si(ft), ft = null))), di(e, t), Ie(t), null;
      case 5:
        Ho(t);
        var l = on(mr.current);
        if (n = t.type, e !== null && t.stateNode != null) ua(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ie(t), null;
          }
          if (e = on(kt.current), ol(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[wt] = t, r[ar] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                oe("cancel", r), oe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < ir.length; l++) oe(ir[l], r);
                break;
              case "source":
                oe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                oe(
                  "error",
                  r
                ), oe("load", r);
                break;
              case "details":
                oe("toggle", r);
                break;
              case "input":
                Bi(r, o), oe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, oe("invalid", r);
                break;
              case "textarea":
                Qi(r, o), oe("invalid", r);
            }
            Hl(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && Jr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && Jr(
                r.textContent,
                u,
                e
              ), l = ["children", "" + u]) : _.hasOwnProperty(i) && u != null && i === "onScroll" && oe("scroll", r);
            }
            switch (n) {
              case "input":
                Nr(r), Hi(r, o, !0);
                break;
              case "textarea":
                Nr(r), Ki(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = qr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Yi(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[wt] = t, e[ar] = r, ia(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = Ql(n, r), n) {
                case "dialog":
                  oe("cancel", e), oe("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  oe("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < ir.length; l++) oe(ir[l], e);
                  l = r;
                  break;
                case "source":
                  oe("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  oe(
                    "error",
                    e
                  ), oe("load", e), l = r;
                  break;
                case "details":
                  oe("toggle", e), l = r;
                  break;
                case "input":
                  Bi(e, r), l = Ul(e, r), oe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = N({}, r, { value: void 0 }), oe("invalid", e);
                  break;
                case "textarea":
                  Qi(e, r), l = Bl(e, r), oe("invalid", e);
                  break;
                default:
                  l = r;
              }
              Hl(n, l), u = l;
              for (o in u) if (u.hasOwnProperty(o)) {
                var c = u[o];
                o === "style" ? Ji(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Xi(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Wn(e, c) : typeof c == "number" && Wn(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (_.hasOwnProperty(o) ? c != null && o === "onScroll" && oe("scroll", e) : c != null && Ve(e, o, c, i));
              }
              switch (n) {
                case "input":
                  Nr(e), Hi(e, r, !1);
                  break;
                case "textarea":
                  Nr(e), Ki(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ee(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? mn(e, !!r.multiple, o, !1) : r.defaultValue != null && mn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = qr);
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
        return Ie(t), null;
      case 6:
        if (e && t.stateNode != null) sa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = on(mr.current), on(kt.current), ol(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (o = r.nodeValue !== n) && (e = be, e !== null)) switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
        }
        return Ie(t), null;
      case 13:
        if (ie(de), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ae && et !== null && t.mode & 1 && !(t.flags & 128)) ds(), Tn(), t.flags |= 98560, o = !1;
          else if (o = ol(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[wt] = t;
            } else Tn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ie(t), o = !1;
          } else ft !== null && (Si(ft), ft = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || de.current & 1 ? Se === 0 && (Se = 3) : _i())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
      case 4:
        return jn(), di(e, t), e === null && ur(t.stateNode.containerInfo), Ie(t), null;
      case 10:
        return Uo(t.type._context), Ie(t), null;
      case 17:
        return $e(t.type) && el(), Ie(t), null;
      case 19:
        if (ie(de), o = t.memoizedState, o === null) return Ie(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) wr(o, !1);
        else {
          if (Se !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = dl(e), i !== null) {
              for (t.flags |= 128, wr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return re(de, de.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && he() > Dn && (t.flags |= 128, r = !0, wr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = dl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !ae) return Ie(t), null;
          } else 2 * he() - o.renderingStartTime > Dn && n !== 1073741824 && (t.flags |= 128, r = !0, wr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = he(), t.sibling = null, n = de.current, re(de, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
      case 22:
      case 23:
        return Ci(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? tt & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function jd(e, t) {
    switch (jo(t), t.tag) {
      case 1:
        return $e(t.type) && el(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jn(), ie(Be), ie(je), Go(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ho(t), null;
      case 13:
        if (ie(de), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Tn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ie(de), null;
      case 4:
        return jn(), null;
      case 10:
        return Uo(t.type._context), null;
      case 22:
      case 23:
        return Ci(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var kl = !1, Fe = !1, Od = typeof WeakSet == "function" ? WeakSet : Set, T = null;
  function In(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      pe(e, t, r);
    }
    else n.current = null;
  }
  function fi(e, t, n) {
    try {
      n();
    } catch (r) {
      pe(e, t, r);
    }
  }
  var aa = !1;
  function Id(e, t) {
    if (Co = Vr, e = Wu(), go(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, c = -1, h = 0, k = 0, x = e, w = null;
          t: for (; ; ) {
            for (var P; x !== n || l !== 0 && x.nodeType !== 3 || (u = i + l), x !== o || r !== 0 && x.nodeType !== 3 || (c = i + r), x.nodeType === 3 && (i += x.nodeValue.length), (P = x.firstChild) !== null; )
              w = x, x = P;
            for (; ; ) {
              if (x === e) break t;
              if (w === n && ++h === l && (u = i), w === o && ++k === r && (c = i), (P = x.nextSibling) !== null) break;
              x = w, w = x.parentNode;
            }
            x = P;
          }
          n = u === -1 || c === -1 ? null : { start: u, end: c };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (_o = { focusedElem: e, selectionRange: n }, Vr = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
    else for (; T !== null; ) {
      t = T;
      try {
        var R = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (R !== null) {
              var L = R.memoizedProps, ge = R.memoizedState, p = t.stateNode, d = p.getSnapshotBeforeUpdate(t.elementType === t.type ? L : pt(t.type, L), ge);
              p.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          case 3:
            var m = t.stateNode.containerInfo;
            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (S) {
        pe(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, T = e;
        break;
      }
      T = t.return;
    }
    return R = aa, aa = !1, R;
  }
  function kr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && fi(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function xl(e, t) {
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
  function pi(e) {
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
  function ca(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ca(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[ar], delete t[To], delete t[vd], delete t[yd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function da(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function fa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || da(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function mi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qr));
    else if (r !== 4 && (e = e.child, e !== null)) for (mi(e, t, n), e = e.sibling; e !== null; ) mi(e, t, n), e = e.sibling;
  }
  function hi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (hi(e, t, n), e = e.sibling; e !== null; ) hi(e, t, n), e = e.sibling;
  }
  var Te = null, mt = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null; ) pa(e, t, n), n = n.sibling;
  }
  function pa(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function") try {
      yt.onCommitFiberUnmount(Or, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Fe || In(n, t);
      case 6:
        var r = Te, l = mt;
        Te = null, Ht(e, t, n), Te = r, mt = l, Te !== null && (mt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Te.removeChild(n.stateNode));
        break;
      case 18:
        Te !== null && (mt ? (e = Te, n = n.stateNode, e.nodeType === 8 ? No(e.parentNode, n) : e.nodeType === 1 && No(e, n), qn(e)) : No(Te, n.stateNode));
        break;
      case 4:
        r = Te, l = mt, Te = n.stateNode.containerInfo, mt = !0, Ht(e, t, n), Te = r, mt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Fe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && (o & 2 || o & 4) && fi(n, t, i), l = l.next;
          } while (l !== r);
        }
        Ht(e, t, n);
        break;
      case 1:
        if (!Fe && (In(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          pe(n, t, u);
        }
        Ht(e, t, n);
        break;
      case 21:
        Ht(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null, Ht(e, t, n), Fe = r) : Ht(e, t, n);
        break;
      default:
        Ht(e, t, n);
    }
  }
  function ma(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Od()), t.forEach(function(r) {
        var l = Hd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              Te = u.stateNode, mt = !1;
              break e;
            case 3:
              Te = u.stateNode.containerInfo, mt = !0;
              break e;
            case 4:
              Te = u.stateNode.containerInfo, mt = !0;
              break e;
          }
          u = u.return;
        }
        if (Te === null) throw Error(s(160));
        pa(o, i, l), Te = null, mt = !1;
        var c = l.alternate;
        c !== null && (c.return = null), l.return = null;
      } catch (h) {
        pe(l, t, h);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ha(t, e), t = t.sibling;
  }
  function ha(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ht(t, e), St(e), r & 4) {
          try {
            kr(3, e, e.return), xl(3, e);
          } catch (L) {
            pe(e, e.return, L);
          }
          try {
            kr(5, e, e.return);
          } catch (L) {
            pe(e, e.return, L);
          }
        }
        break;
      case 1:
        ht(t, e), St(e), r & 512 && n !== null && In(n, n.return);
        break;
      case 5:
        if (ht(t, e), St(e), r & 512 && n !== null && In(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Wn(l, "");
          } catch (L) {
            pe(e, e.return, L);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, c = e.updateQueue;
          if (e.updateQueue = null, c !== null) try {
            u === "input" && o.type === "radio" && o.name != null && $i(l, o), Ql(u, i);
            var h = Ql(u, o);
            for (i = 0; i < c.length; i += 2) {
              var k = c[i], x = c[i + 1];
              k === "style" ? Ji(l, x) : k === "dangerouslySetInnerHTML" ? Xi(l, x) : k === "children" ? Wn(l, x) : Ve(l, k, x, h);
            }
            switch (u) {
              case "input":
                Vl(l, o);
                break;
              case "textarea":
                Gi(l, o);
                break;
              case "select":
                var w = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var P = o.value;
                P != null ? mn(l, !!o.multiple, P, !1) : w !== !!o.multiple && (o.defaultValue != null ? mn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : mn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[ar] = o;
          } catch (L) {
            pe(e, e.return, L);
          }
        }
        break;
      case 6:
        if (ht(t, e), St(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (L) {
            pe(e, e.return, L);
          }
        }
        break;
      case 3:
        if (ht(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          qn(t.containerInfo);
        } catch (L) {
          pe(e, e.return, L);
        }
        break;
      case 4:
        ht(t, e), St(e);
        break;
      case 13:
        ht(t, e), St(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (yi = he())), r & 4 && ma(e);
        break;
      case 22:
        if (k = n !== null && n.memoizedState !== null, e.mode & 1 ? (Fe = (h = Fe) || k, ht(t, e), Fe = h) : ht(t, e), St(e), r & 8192) {
          if (h = e.memoizedState !== null, (e.stateNode.isHidden = h) && !k && e.mode & 1) for (T = e, k = e.child; k !== null; ) {
            for (x = T = k; T !== null; ) {
              switch (w = T, P = w.child, w.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, w, w.return);
                  break;
                case 1:
                  In(w, w.return);
                  var R = w.stateNode;
                  if (typeof R.componentWillUnmount == "function") {
                    r = w, n = w.return;
                    try {
                      t = r, R.props = t.memoizedProps, R.state = t.memoizedState, R.componentWillUnmount();
                    } catch (L) {
                      pe(r, n, L);
                    }
                  }
                  break;
                case 5:
                  In(w, w.return);
                  break;
                case 22:
                  if (w.memoizedState !== null) {
                    ya(x);
                    continue;
                  }
              }
              P !== null ? (P.return = w, T = P) : ya(x);
            }
            k = k.sibling;
          }
          e: for (k = null, x = e; ; ) {
            if (x.tag === 5) {
              if (k === null) {
                k = x;
                try {
                  l = x.stateNode, h ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = x.stateNode, c = x.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = Zi("display", i));
                } catch (L) {
                  pe(e, e.return, L);
                }
              }
            } else if (x.tag === 6) {
              if (k === null) try {
                x.stateNode.nodeValue = h ? "" : x.memoizedProps;
              } catch (L) {
                pe(e, e.return, L);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === e) break e;
              k === x && (k = null), x = x.return;
            }
            k === x && (k = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        ht(t, e), St(e), r & 4 && ma(e);
        break;
      case 21:
        break;
      default:
        ht(
          t,
          e
        ), St(e);
    }
  }
  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (da(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Wn(l, ""), r.flags &= -33);
            var o = fa(e);
            hi(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = fa(e);
            mi(e, u, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (c) {
        pe(e, e.return, c);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Fd(e, t, n) {
    T = e, ga(e);
  }
  function ga(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null; ) {
      var l = T, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || kl;
        if (!i) {
          var u = l.alternate, c = u !== null && u.memoizedState !== null || Fe;
          u = kl;
          var h = Fe;
          if (kl = i, (Fe = c) && !h) for (T = l; T !== null; ) i = T, c = i.child, i.tag === 22 && i.memoizedState !== null ? wa(l) : c !== null ? (c.return = i, T = c) : wa(l);
          for (; o !== null; ) T = o, ga(o), o = o.sibling;
          T = l, kl = u, Fe = h;
        }
        va(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, T = o) : va(e);
    }
  }
  function va(e) {
    for (; T !== null; ) {
      var t = T;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Fe || xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Fe) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : pt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && ys(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                ys(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var h = t.alternate;
                if (h !== null) {
                  var k = h.memoizedState;
                  if (k !== null) {
                    var x = k.dehydrated;
                    x !== null && qn(x);
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
          Fe || t.flags & 512 && pi(t);
        } catch (w) {
          pe(t, t.return, w);
        }
      }
      if (t === e) {
        T = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, T = n;
        break;
      }
      T = t.return;
    }
  }
  function ya(e) {
    for (; T !== null; ) {
      var t = T;
      if (t === e) {
        T = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, T = n;
        break;
      }
      T = t.return;
    }
  }
  function wa(e) {
    for (; T !== null; ) {
      var t = T;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              xl(4, t);
            } catch (c) {
              pe(t, n, c);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (c) {
                pe(t, l, c);
              }
            }
            var o = t.return;
            try {
              pi(t);
            } catch (c) {
              pe(t, o, c);
            }
            break;
          case 5:
            var i = t.return;
            try {
              pi(t);
            } catch (c) {
              pe(t, i, c);
            }
        }
      } catch (c) {
        pe(t, t.return, c);
      }
      if (t === e) {
        T = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, T = u;
        break;
      }
      T = t.return;
    }
  }
  var Dd = Math.ceil, Sl = ye.ReactCurrentDispatcher, gi = ye.ReactCurrentOwner, ut = ye.ReactCurrentBatchConfig, Z = 0, ze = null, we = null, Re = 0, tt = 0, Fn = Ut(0), Se = 0, xr = null, sn = 0, El = 0, vi = 0, Sr = null, Qe = null, yi = 0, Dn = 1 / 0, Rt = null, Cl = !1, wi = null, Qt = null, _l = !1, Gt = null, zl = 0, Er = 0, ki = null, Pl = -1, Nl = 0;
  function Ue() {
    return Z & 6 ? he() : Pl !== -1 ? Pl : Pl = he();
  }
  function Kt(e) {
    return e.mode & 1 ? Z & 2 && Re !== 0 ? Re & -Re : kd.transition !== null ? (Nl === 0 && (Nl = fu()), Nl) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : xu(e.type)), e) : 1;
  }
  function gt(e, t, n, r) {
    if (50 < Er) throw Er = 0, ki = null, Error(s(185));
    Kn(e, n, r), (!(Z & 2) || e !== ze) && (e === ze && (!(Z & 2) && (El |= n), Se === 4 && Yt(e, Re)), Ge(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (Dn = he() + 500, nl && Wt()));
  }
  function Ge(e, t) {
    var n = e.callbackNode;
    kc(e, t);
    var r = Dr(e, e === ze ? Re : 0);
    if (r === 0) n !== null && au(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && au(n), t === 1) e.tag === 0 ? wd(xa.bind(null, e)) : is(xa.bind(null, e)), hd(function() {
        !(Z & 6) && Wt();
      }), n = null;
      else {
        switch (pu(r)) {
          case 1:
            n = ql;
            break;
          case 4:
            n = cu;
            break;
          case 16:
            n = jr;
            break;
          case 536870912:
            n = du;
            break;
          default:
            n = jr;
        }
        n = Ta(n, ka.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ka(e, t) {
    if (Pl = -1, Nl = 0, Z & 6) throw Error(s(327));
    var n = e.callbackNode;
    if (An() && e.callbackNode !== n) return null;
    var r = Dr(e, e === ze ? Re : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Tl(e, r);
    else {
      t = r;
      var l = Z;
      Z |= 2;
      var o = Ea();
      (ze !== e || Re !== t) && (Rt = null, Dn = he() + 500, cn(e, t));
      do
        try {
          Vd();
          break;
        } catch (u) {
          Sa(e, u);
        }
      while (!0);
      Ao(), Sl.current = o, Z = l, we !== null ? t = 0 : (ze = null, Re = 0, t = Se);
    }
    if (t !== 0) {
      if (t === 2 && (l = bl(e), l !== 0 && (r = l, t = xi(e, l))), t === 1) throw n = xr, cn(e, 0), Yt(e, r), Ge(e, he()), n;
      if (t === 6) Yt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Ad(l) && (t = Tl(e, r), t === 2 && (o = bl(e), o !== 0 && (r = o, t = xi(e, o))), t === 1)) throw n = xr, cn(e, 0), Yt(e, r), Ge(e, he()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            dn(e, Qe, Rt);
            break;
          case 3:
            if (Yt(e, r), (r & 130023424) === r && (t = yi + 500 - he(), 10 < t)) {
              if (Dr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Ue(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Po(dn.bind(null, e, Qe, Rt), t);
              break;
            }
            dn(e, Qe, Rt);
            break;
          case 4:
            if (Yt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - ct(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = he() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Dd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Po(dn.bind(null, e, Qe, Rt), r);
              break;
            }
            dn(e, Qe, Rt);
            break;
          case 5:
            dn(e, Qe, Rt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Ge(e, he()), e.callbackNode === n ? ka.bind(null, e) : null;
  }
  function xi(e, t) {
    var n = Sr;
    return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Tl(e, t), e !== 2 && (t = Qe, Qe = n, t !== null && Si(t)), e;
  }
  function Si(e) {
    Qe === null ? Qe = e : Qe.push.apply(Qe, e);
  }
  function Ad(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!dt(o(), l)) return !1;
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
  function Yt(e, t) {
    for (t &= ~vi, t &= ~El, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - ct(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function xa(e) {
    if (Z & 6) throw Error(s(327));
    An();
    var t = Dr(e, 0);
    if (!(t & 1)) return Ge(e, he()), null;
    var n = Tl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = bl(e);
      r !== 0 && (t = r, n = xi(e, r));
    }
    if (n === 1) throw n = xr, cn(e, 0), Yt(e, t), Ge(e, he()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, dn(e, Qe, Rt), Ge(e, he()), null;
  }
  function Ei(e, t) {
    var n = Z;
    Z |= 1;
    try {
      return e(t);
    } finally {
      Z = n, Z === 0 && (Dn = he() + 500, nl && Wt());
    }
  }
  function an(e) {
    Gt !== null && Gt.tag === 0 && !(Z & 6) && An();
    var t = Z;
    Z |= 1;
    var n = ut.transition, r = te;
    try {
      if (ut.transition = null, te = 1, e) return e();
    } finally {
      te = r, ut.transition = n, Z = t, !(Z & 6) && Wt();
    }
  }
  function Ci() {
    tt = Fn.current, ie(Fn);
  }
  function cn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, md(n)), we !== null) for (n = we.return; n !== null; ) {
      var r = n;
      switch (jo(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && el();
          break;
        case 3:
          jn(), ie(Be), ie(je), Go();
          break;
        case 5:
          Ho(r);
          break;
        case 4:
          jn();
          break;
        case 13:
          ie(de);
          break;
        case 19:
          ie(de);
          break;
        case 10:
          Uo(r.type._context);
          break;
        case 22:
        case 23:
          Ci();
      }
      n = n.return;
    }
    if (ze = e, we = e = Xt(e.current, null), Re = tt = t, Se = 0, xr = null, vi = El = sn = 0, Qe = Sr = null, ln !== null) {
      for (t = 0; t < ln.length; t++) if (n = ln[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      ln = null;
    }
    return e;
  }
  function Sa(e, t) {
    do {
      var n = we;
      try {
        if (Ao(), fl.current = gl, pl) {
          for (var r = fe.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          pl = !1;
        }
        if (un = 0, _e = xe = fe = null, hr = !1, gr = 0, gi.current = null, n === null || n.return === null) {
          Se = 1, xr = t, we = null;
          break;
        }
        e: {
          var o = e, i = n.return, u = n, c = t;
          if (t = Re, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
            var h = c, k = u, x = k.tag;
            if (!(k.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var w = k.alternate;
              w ? (k.updateQueue = w.updateQueue, k.memoizedState = w.memoizedState, k.lanes = w.lanes) : (k.updateQueue = null, k.memoizedState = null);
            }
            var P = Ks(i);
            if (P !== null) {
              P.flags &= -257, Ys(P, i, u, o, t), P.mode & 1 && Gs(o, h, t), t = P, c = h;
              var R = t.updateQueue;
              if (R === null) {
                var L = /* @__PURE__ */ new Set();
                L.add(c), t.updateQueue = L;
              } else R.add(c);
              break e;
            } else {
              if (!(t & 1)) {
                Gs(o, h, t), _i();
                break e;
              }
              c = Error(s(426));
            }
          } else if (ae && u.mode & 1) {
            var ge = Ks(i);
            if (ge !== null) {
              !(ge.flags & 65536) && (ge.flags |= 256), Ys(ge, i, u, o, t), Fo(On(c, u));
              break e;
            }
          }
          o = c = On(c, u), Se !== 4 && (Se = 2), Sr === null ? Sr = [o] : Sr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var p = Hs(o, c, t);
                vs(o, p);
                break e;
              case 1:
                u = c;
                var d = o.type, m = o.stateNode;
                if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Qt === null || !Qt.has(m)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var S = Qs(o, u, t);
                  vs(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        _a(n);
      } catch (M) {
        t = M, we === n && n !== null && (we = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ea() {
    var e = Sl.current;
    return Sl.current = gl, e === null ? gl : e;
  }
  function _i() {
    (Se === 0 || Se === 3 || Se === 2) && (Se = 4), ze === null || !(sn & 268435455) && !(El & 268435455) || Yt(ze, Re);
  }
  function Tl(e, t) {
    var n = Z;
    Z |= 2;
    var r = Ea();
    (ze !== e || Re !== t) && (Rt = null, cn(e, t));
    do
      try {
        Ud();
        break;
      } catch (l) {
        Sa(e, l);
      }
    while (!0);
    if (Ao(), Z = n, Sl.current = r, we !== null) throw Error(s(261));
    return ze = null, Re = 0, Se;
  }
  function Ud() {
    for (; we !== null; ) Ca(we);
  }
  function Vd() {
    for (; we !== null && !dc(); ) Ca(we);
  }
  function Ca(e) {
    var t = Na(e.alternate, e, tt);
    e.memoizedProps = e.pendingProps, t === null ? _a(e) : we = t, gi.current = null;
  }
  function _a(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = jd(n, t), n !== null) {
          n.flags &= 32767, we = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Se = 6, we = null;
          return;
        }
      } else if (n = Md(n, t, tt), n !== null) {
        we = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Se === 0 && (Se = 5);
  }
  function dn(e, t, n) {
    var r = te, l = ut.transition;
    try {
      ut.transition = null, te = 1, Wd(e, t, n, r);
    } finally {
      ut.transition = l, te = r;
    }
    return null;
  }
  function Wd(e, t, n, r) {
    do
      An();
    while (Gt !== null);
    if (Z & 6) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (xc(e, o), e === ze && (we = ze = null, Re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _l || (_l = !0, Ta(jr, function() {
      return An(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = ut.transition, ut.transition = null;
      var i = te;
      te = 1;
      var u = Z;
      Z |= 4, gi.current = null, Id(e, n), ha(n, e), ud(_o), Vr = !!Co, _o = Co = null, e.current = n, Fd(n), fc(), Z = u, te = i, ut.transition = o;
    } else e.current = n;
    if (_l && (_l = !1, Gt = e, zl = l), o = e.pendingLanes, o === 0 && (Qt = null), hc(n.stateNode), Ge(e, he()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (Cl) throw Cl = !1, e = wi, wi = null, e;
    return zl & 1 && e.tag !== 0 && An(), o = e.pendingLanes, o & 1 ? e === ki ? Er++ : (Er = 0, ki = e) : Er = 0, Wt(), null;
  }
  function An() {
    if (Gt !== null) {
      var e = pu(zl), t = ut.transition, n = te;
      try {
        if (ut.transition = null, te = 16 > e ? 16 : e, Gt === null) var r = !1;
        else {
          if (e = Gt, Gt = null, zl = 0, Z & 6) throw Error(s(331));
          var l = Z;
          for (Z |= 4, T = e.current; T !== null; ) {
            var o = T, i = o.child;
            if (T.flags & 16) {
              var u = o.deletions;
              if (u !== null) {
                for (var c = 0; c < u.length; c++) {
                  var h = u[c];
                  for (T = h; T !== null; ) {
                    var k = T;
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kr(8, k, o);
                    }
                    var x = k.child;
                    if (x !== null) x.return = k, T = x;
                    else for (; T !== null; ) {
                      k = T;
                      var w = k.sibling, P = k.return;
                      if (ca(k), k === h) {
                        T = null;
                        break;
                      }
                      if (w !== null) {
                        w.return = P, T = w;
                        break;
                      }
                      T = P;
                    }
                  }
                }
                var R = o.alternate;
                if (R !== null) {
                  var L = R.child;
                  if (L !== null) {
                    R.child = null;
                    do {
                      var ge = L.sibling;
                      L.sibling = null, L = ge;
                    } while (L !== null);
                  }
                }
                T = o;
              }
            }
            if (o.subtreeFlags & 2064 && i !== null) i.return = o, T = i;
            else e: for (; T !== null; ) {
              if (o = T, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  kr(9, o, o.return);
              }
              var p = o.sibling;
              if (p !== null) {
                p.return = o.return, T = p;
                break e;
              }
              T = o.return;
            }
          }
          var d = e.current;
          for (T = d; T !== null; ) {
            i = T;
            var m = i.child;
            if (i.subtreeFlags & 2064 && m !== null) m.return = i, T = m;
            else e: for (i = d; T !== null; ) {
              if (u = T, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xl(9, u);
                }
              } catch (M) {
                pe(u, u.return, M);
              }
              if (u === i) {
                T = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                S.return = u.return, T = S;
                break e;
              }
              T = u.return;
            }
          }
          if (Z = l, Wt(), yt && typeof yt.onPostCommitFiberRoot == "function") try {
            yt.onPostCommitFiberRoot(Or, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        te = n, ut.transition = t;
      }
    }
    return !1;
  }
  function za(e, t, n) {
    t = On(n, t), t = Hs(e, t, 1), e = $t(e, t, 1), t = Ue(), e !== null && (Kn(e, 1, t), Ge(e, t));
  }
  function pe(e, t, n) {
    if (e.tag === 3) za(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        za(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qt === null || !Qt.has(r))) {
          e = On(n, e), e = Qs(t, e, 1), t = $t(t, e, 1), e = Ue(), t !== null && (Kn(t, 1, e), Ge(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Bd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ue(), e.pingedLanes |= e.suspendedLanes & n, ze === e && (Re & n) === n && (Se === 4 || Se === 3 && (Re & 130023424) === Re && 500 > he() - yi ? cn(e, 0) : vi |= n), Ge(e, t);
  }
  function Pa(e, t) {
    t === 0 && (e.mode & 1 ? (t = Fr, Fr <<= 1, !(Fr & 130023424) && (Fr = 4194304)) : t = 1);
    var n = Ue();
    e = Pt(e, t), e !== null && (Kn(e, t, n), Ge(e, n));
  }
  function $d(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Pa(e, n);
  }
  function Hd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Pa(e, n);
  }
  var Na;
  Na = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) He = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return He = !1, Ld(e, t, n);
      He = !!(e.flags & 131072);
    }
    else He = !1, ae && t.flags & 1048576 && us(t, ll, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        wl(e, t), e = t.pendingProps;
        var l = zn(t, je.current);
        Mn(t, n), l = Xo(null, t, r, e, l, n);
        var o = Zo();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, $e(r) ? (o = !0, tl(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Bo(t), l.updater = vl, t.stateNode = l, l._reactInternals = t, ni(t, r, e, n), t = ii(null, t, r, !0, o, n)) : (t.tag = 0, ae && o && Mo(t), Ae(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (wl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Gd(r), e = pt(r, e), l) {
            case 0:
              t = oi(null, t, r, e, n);
              break e;
            case 1:
              t = ea(null, t, r, e, n);
              break e;
            case 11:
              t = Xs(null, t, r, e, n);
              break e;
            case 14:
              t = Zs(null, t, r, pt(r.type, e), n);
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
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pt(r, l), oi(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pt(r, l), ea(e, t, r, l, n);
      case 3:
        e: {
          if (ta(t), e === null) throw Error(s(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, gs(e, t), cl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = On(Error(s(423)), t), t = na(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = On(Error(s(424)), t), t = na(e, t, r, n, l);
            break e;
          } else for (et = At(t.stateNode.containerInfo.firstChild), be = t, ae = !0, ft = null, n = ms(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Tn(), r === l) {
              t = Tt(e, t, n);
              break e;
            }
            Ae(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ws(t), e === null && Io(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, zo(r, l) ? i = null : o !== null && zo(r, o) && (t.flags |= 32), bs(e, t), Ae(e, t, i, n), t.child;
      case 6:
        return e === null && Io(t), null;
      case 13:
        return ra(e, t, n);
      case 4:
        return $o(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Rn(t, null, r, n) : Ae(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pt(r, l), Xs(e, t, r, l, n);
      case 7:
        return Ae(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ae(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ae(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, re(ul, r._currentValue), r._currentValue = i, o !== null) if (dt(o.value, i)) {
            if (o.children === l.children && !Be.current) {
              t = Tt(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var u = o.dependencies;
            if (u !== null) {
              i = o.child;
              for (var c = u.firstContext; c !== null; ) {
                if (c.context === r) {
                  if (o.tag === 1) {
                    c = Nt(-1, n & -n), c.tag = 2;
                    var h = o.updateQueue;
                    if (h !== null) {
                      h = h.shared;
                      var k = h.pending;
                      k === null ? c.next = c : (c.next = k.next, k.next = c), h.pending = c;
                    }
                  }
                  o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), Vo(
                    o.return,
                    n,
                    t
                  ), u.lanes |= n;
                  break;
                }
                c = c.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(s(341));
              i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Vo(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          Ae(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Mn(t, n), l = ot(l), r = r(l), t.flags |= 1, Ae(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = pt(r, t.pendingProps), l = pt(r.type, l), Zs(e, t, r, l, n);
      case 15:
        return Js(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : pt(r, l), wl(e, t), t.tag = 1, $e(r) ? (e = !0, tl(t)) : e = !1, Mn(t, n), Bs(t, r, l), ni(t, r, l, n), ii(null, t, r, !0, e, n);
      case 19:
        return oa(e, t, n);
      case 22:
        return qs(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Ta(e, t) {
    return su(e, t);
  }
  function Qd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function st(e, t, n, r) {
    return new Qd(e, t, n, r);
  }
  function zi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gd(e) {
    if (typeof e == "function") return zi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === X) return 11;
      if (e === Ze) return 14;
    }
    return 2;
  }
  function Xt(e, t) {
    var n = e.alternate;
    return n === null ? (n = st(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Rl(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") zi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Ne:
        return fn(n.children, l, o, t);
      case De:
        i = 8, l |= 8;
        break;
      case nt:
        return e = st(12, n, t, l | 2), e.elementType = nt, e.lanes = o, e;
      case Le:
        return e = st(13, n, t, l), e.elementType = Le, e.lanes = o, e;
      case Me:
        return e = st(19, n, t, l), e.elementType = Me, e.lanes = o, e;
      case le:
        return Ll(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Xe:
            i = 10;
            break e;
          case at:
            i = 9;
            break e;
          case X:
            i = 11;
            break e;
          case Ze:
            i = 14;
            break e;
          case ke:
            i = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = st(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function fn(e, t, n, r) {
    return e = st(7, e, r, t), e.lanes = n, e;
  }
  function Ll(e, t, n, r) {
    return e = st(22, e, r, t), e.elementType = le, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Pi(e, t, n) {
    return e = st(6, e, null, t), e.lanes = n, e;
  }
  function Ni(e, t, n) {
    return t = st(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Kd(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = eo(0), this.expirationTimes = eo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = eo(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Ti(e, t, n, r, l, o, i, u, c) {
    return e = new Kd(e, t, n, u, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = st(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Bo(o), e;
  }
  function Yd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ra(e) {
    if (!e) return Vt;
    e = e._reactInternals;
    e: {
      if (bt(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if ($e(t.type)) {
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
      if ($e(n)) return ls(e, n, t);
    }
    return t;
  }
  function La(e, t, n, r, l, o, i, u, c) {
    return e = Ti(n, r, !0, e, l, o, i, u, c), e.context = Ra(null), n = e.current, r = Ue(), l = Kt(n), o = Nt(r, l), o.callback = t ?? null, $t(n, o, l), e.current.lanes = l, Kn(e, l, r), Ge(e, r), e;
  }
  function Ml(e, t, n, r) {
    var l = t.current, o = Ue(), i = Kt(l);
    return n = Ra(n), t.context === null ? t.context = n : t.pendingContext = n, t = Nt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $t(l, t, i), e !== null && (gt(e, l, i, o), al(e, l, i)), i;
  }
  function jl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ma(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ri(e, t) {
    Ma(e, t), (e = e.alternate) && Ma(e, t);
  }
  function Xd() {
    return null;
  }
  var ja = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Li(e) {
    this._internalRoot = e;
  }
  Ol.prototype.render = Li.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Ml(e, t, null, null);
  }, Ol.prototype.unmount = Li.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      an(function() {
        Ml(null, e, null, null);
      }), t[Et] = null;
    }
  };
  function Ol(e) {
    this._internalRoot = e;
  }
  Ol.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = gu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++) ;
      It.splice(n, 0, e), n === 0 && wu(e);
    }
  };
  function Mi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Il(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Oa() {
  }
  function Zd(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var h = jl(i);
          o.call(h);
        };
      }
      var i = La(t, r, e, 0, null, !1, !1, "", Oa);
      return e._reactRootContainer = i, e[Et] = i.current, ur(e.nodeType === 8 ? e.parentNode : e), an(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var h = jl(c);
        u.call(h);
      };
    }
    var c = Ti(e, 0, !1, null, null, !1, !1, "", Oa);
    return e._reactRootContainer = c, e[Et] = c.current, ur(e.nodeType === 8 ? e.parentNode : e), an(function() {
      Ml(t, c, n, r);
    }), c;
  }
  function Fl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var u = l;
        l = function() {
          var c = jl(i);
          u.call(c);
        };
      }
      Ml(t, i, e, l);
    } else i = Zd(n, t, e, l, r);
    return jl(i);
  }
  mu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Gn(t.pendingLanes);
          n !== 0 && (to(t, n | 1), Ge(t, he()), !(Z & 6) && (Dn = he() + 500, Wt()));
        }
        break;
      case 13:
        an(function() {
          var r = Pt(e, 1);
          if (r !== null) {
            var l = Ue();
            gt(r, e, 1, l);
          }
        }), Ri(e, 1);
    }
  }, no = function(e) {
    if (e.tag === 13) {
      var t = Pt(e, 134217728);
      if (t !== null) {
        var n = Ue();
        gt(t, e, 134217728, n);
      }
      Ri(e, 134217728);
    }
  }, hu = function(e) {
    if (e.tag === 13) {
      var t = Kt(e), n = Pt(e, t);
      if (n !== null) {
        var r = Ue();
        gt(n, e, t, r);
      }
      Ri(e, t);
    }
  }, gu = function() {
    return te;
  }, vu = function(e, t) {
    var n = te;
    try {
      return te = e, t();
    } finally {
      te = n;
    }
  }, Yl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Vl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = br(r);
              if (!l) throw Error(s(90));
              Wi(r), Vl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Gi(e, n);
        break;
      case "select":
        t = n.value, t != null && mn(e, !!n.multiple, t, !1);
    }
  }, tu = Ei, nu = an;
  var Jd = { usingClientEntryPoint: !1, Events: [cr, Cn, br, bi, eu, Ei] }, Cr = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qd = { bundleType: Cr.bundleType, version: Cr.version, rendererPackageName: Cr.rendererPackageName, rendererConfig: Cr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = iu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Cr.findFiberByHostInstance || Xd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dl.isDisabled && Dl.supportsFiber) try {
      Or = Dl.inject(qd), yt = Dl;
    } catch {
    }
  }
  return Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jd, Ke.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mi(t)) throw Error(s(200));
    return Yd(e, t, null, n);
  }, Ke.createRoot = function(e, t) {
    if (!Mi(e)) throw Error(s(299));
    var n = !1, r = "", l = ja;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ti(e, 1, !1, null, null, n, !1, r, l), e[Et] = t.current, ur(e.nodeType === 8 ? e.parentNode : e), new Li(t);
  }, Ke.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = iu(t), e = e === null ? null : e.stateNode, e;
  }, Ke.flushSync = function(e) {
    return an(e);
  }, Ke.hydrate = function(e, t, n) {
    if (!Il(t)) throw Error(s(200));
    return Fl(null, e, t, !0, n);
  }, Ke.hydrateRoot = function(e, t, n) {
    if (!Mi(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", i = ja;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = La(t, null, e, 1, n ?? null, l, !1, o, i), e[Et] = t.current, ur(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Ol(t);
  }, Ke.render = function(e, t, n) {
    if (!Il(t)) throw Error(s(200));
    return Fl(null, e, t, !1, n);
  }, Ke.unmountComponentAtNode = function(e) {
    if (!Il(e)) throw Error(s(40));
    return e._reactRootContainer ? (an(function() {
      Fl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Et] = null;
      });
    }), !0) : !1;
  }, Ke.unstable_batchedUpdates = Ei, Ke.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Il(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return Fl(e, t, n, !1, r);
  }, Ke.version = "18.3.1-next-f1338f8080-20240426", Ke;
}
function Ya() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ya);
    } catch (a) {
      console.error(a);
    }
}
Ya(), Ka.exports = lf();
var of = Ka.exports, Wa = of;
Fi.createRoot = Wa.createRoot, Fi.hydrateRoot = Wa.hydrateRoot;
const uf = ".widget{background-color:#f9f9f9;border:1px solid #e6e6e6;border-radius:4px;padding:10px;margin-bottom:10px;box-shadow:0 0 10px #0000001a}", sf = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}:widget{--background: 0 0% 100%;--foreground: 222.2 84% 4.9%;--card: 0 0% 100%;--card-foreground: 222.2 84% 4.9%;--popover: 0 0% 100%;--popover-foreground: 222.2 84% 4.9%;--primary: 222.2 47.4% 11.2%;--primary-foreground: 210 40% 98%;--secondary: 210 40% 96.1%;--secondary-foreground: 222.2 47.4% 11.2%;--muted: 210 40% 96.1%;--muted-foreground: 215.4 16.3% 46.9%;--accent: 210 40% 96.1%;--accent-foreground: 222.2 47.4% 11.2%;--destructive: 0 84.2% 60.2%;--destructive-foreground: 210 40% 98%;--border: 214.3 31.8% 91.4%;--input: 214.3 31.8% 91.4%;--ring: 222.2 84% 4.9%;--radius: .5rem}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.inline{display:inline}.inline-flex{display:inline-flex}.h-10{height:2.5rem}.h-11{height:2.75rem}.h-9{height:2.25rem}.w-10{width:2.5rem}.items-center{align-items:center}.justify-center{justify-content:center}.whitespace-nowrap{white-space:nowrap}.rounded-md{border-radius:calc(var(--radius) - 2px)}.border{border-width:1px}.border-input{border-color:hsl(var(--input))}.bg-background{background-color:hsl(var(--background))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-slate-800{--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.outline{outline-style:solid}.ring-offset-background{--tw-ring-offset-color: hsl(var(--background))}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-2:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width: 2px}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}';
var Ye = Ui();
function af(a, g) {
  typeof a == "function" ? a(g) : a != null && (a.current = g);
}
function cf(...a) {
  return (g) => a.forEach((s) => af(s, g));
}
var Xa = Ye.forwardRef((a, g) => {
  const { children: s, ...v } = a, _ = Ye.Children.toArray(s), E = _.find(ff);
  if (E) {
    const z = E.props.children, j = _.map((I) => I === E ? Ye.Children.count(z) > 1 ? Ye.Children.only(null) : Ye.isValidElement(z) ? z.props.children : null : I);
    return /* @__PURE__ */ vt.jsx(Di, { ...v, ref: g, children: Ye.isValidElement(z) ? Ye.cloneElement(z, void 0, j) : null });
  }
  return /* @__PURE__ */ vt.jsx(Di, { ...v, ref: g, children: s });
});
Xa.displayName = "Slot";
var Di = Ye.forwardRef((a, g) => {
  const { children: s, ...v } = a;
  if (Ye.isValidElement(s)) {
    const _ = mf(s);
    return Ye.cloneElement(s, {
      ...pf(v, s.props),
      // @ts-ignore
      ref: g ? cf(g, _) : _
    });
  }
  return Ye.Children.count(s) > 1 ? Ye.Children.only(null) : null;
});
Di.displayName = "SlotClone";
var df = ({ children: a }) => /* @__PURE__ */ vt.jsx(vt.Fragment, { children: a });
function ff(a) {
  return Ye.isValidElement(a) && a.type === df;
}
function pf(a, g) {
  const s = { ...g };
  for (const v in g) {
    const _ = a[v], E = g[v];
    /^on[A-Z]/.test(v) ? _ && E ? s[v] = (...j) => {
      E(...j), _(...j);
    } : _ && (s[v] = _) : v === "style" ? s[v] = { ..._, ...E } : v === "className" && (s[v] = [_, E].filter(Boolean).join(" "));
  }
  return { ...a, ...s };
}
function mf(a) {
  let g = Object.getOwnPropertyDescriptor(a.props, "ref")?.get, s = g && "isReactWarning" in g && g.isReactWarning;
  return s ? a.ref : (g = Object.getOwnPropertyDescriptor(a, "ref")?.get, s = g && "isReactWarning" in g && g.isReactWarning, s ? a.props.ref : a.props.ref || a.ref);
}
function Za(a) {
  var g, s, v = "";
  if (typeof a == "string" || typeof a == "number") v += a;
  else if (typeof a == "object") if (Array.isArray(a)) for (g = 0; g < a.length; g++) a[g] && (s = Za(a[g])) && (v && (v += " "), v += s);
  else for (g in a) a[g] && (v && (v += " "), v += g);
  return v;
}
function hf() {
  for (var a, g, s = 0, v = ""; s < arguments.length; ) (a = arguments[s++]) && (g = Za(a)) && (v && (v += " "), v += g);
  return v;
}
const Ba = (a) => typeof a == "boolean" ? "".concat(a) : a === 0 ? "0" : a, $a = hf, gf = (a, g) => (s) => {
  var v;
  if (g?.variants == null) return $a(a, s?.class, s?.className);
  const { variants: _, defaultVariants: E } = g, z = Object.keys(_).map((U) => {
    const $ = s?.[U], B = E?.[U];
    if ($ === null) return null;
    const H = Ba($) || Ba(B);
    return _[U][H];
  }), j = s && Object.entries(s).reduce((U, $) => {
    let [B, H] = $;
    return H === void 0 || (U[B] = H), U;
  }, {}), I = g == null || (v = g.compoundVariants) === null || v === void 0 ? void 0 : v.reduce((U, $) => {
    let { class: B, className: H, ...ce } = $;
    return Object.entries(ce).every((me) => {
      let [V, W] = me;
      return Array.isArray(W) ? W.includes({
        ...E,
        ...j
      }[V]) : {
        ...E,
        ...j
      }[V] === W;
    }) ? [
      ...U,
      B,
      H
    ] : U;
  }, []);
  return $a(a, z, I, s?.class, s?.className);
};
function Ja(a) {
  var g, s, v = "";
  if (typeof a == "string" || typeof a == "number") v += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var _ = a.length;
    for (g = 0; g < _; g++) a[g] && (s = Ja(a[g])) && (v && (v += " "), v += s);
  } else for (s in a) a[s] && (v && (v += " "), v += s);
  return v;
}
function vf() {
  for (var a, g, s = 0, v = "", _ = arguments.length; s < _; s++) (a = arguments[s]) && (g = Ja(a)) && (v && (v += " "), v += g);
  return v;
}
const Vi = "-";
function yf(a) {
  const g = kf(a), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: v
  } = a;
  function _(z) {
    const j = z.split(Vi);
    return j[0] === "" && j.length !== 1 && j.shift(), qa(j, g) || wf(z);
  }
  function E(z, j) {
    const I = s[z] || [];
    return j && v[z] ? [...I, ...v[z]] : I;
  }
  return {
    getClassGroupId: _,
    getConflictingClassGroupIds: E
  };
}
function qa(a, g) {
  if (a.length === 0)
    return g.classGroupId;
  const s = a[0], v = g.nextPart.get(s), _ = v ? qa(a.slice(1), v) : void 0;
  if (_)
    return _;
  if (g.validators.length === 0)
    return;
  const E = a.join(Vi);
  return g.validators.find(({
    validator: z
  }) => z(E))?.classGroupId;
}
const Ha = /^\[(.+)\]$/;
function wf(a) {
  if (Ha.test(a)) {
    const g = Ha.exec(a)[1], s = g?.substring(0, g.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}
function kf(a) {
  const {
    theme: g,
    prefix: s
  } = a, v = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Sf(Object.entries(a.classGroups), s).forEach(([E, z]) => {
    Ai(z, v, E, g);
  }), v;
}
function Ai(a, g, s, v) {
  a.forEach((_) => {
    if (typeof _ == "string") {
      const E = _ === "" ? g : Qa(g, _);
      E.classGroupId = s;
      return;
    }
    if (typeof _ == "function") {
      if (xf(_)) {
        Ai(_(v), g, s, v);
        return;
      }
      g.validators.push({
        validator: _,
        classGroupId: s
      });
      return;
    }
    Object.entries(_).forEach(([E, z]) => {
      Ai(z, Qa(g, E), s, v);
    });
  });
}
function Qa(a, g) {
  let s = a;
  return g.split(Vi).forEach((v) => {
    s.nextPart.has(v) || s.nextPart.set(v, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(v);
  }), s;
}
function xf(a) {
  return a.isThemeGetter;
}
function Sf(a, g) {
  return g ? a.map(([s, v]) => {
    const _ = v.map((E) => typeof E == "string" ? g + E : typeof E == "object" ? Object.fromEntries(Object.entries(E).map(([z, j]) => [g + z, j])) : E);
    return [s, _];
  }) : a;
}
function Ef(a) {
  if (a < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let g = 0, s = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  function _(E, z) {
    s.set(E, z), g++, g > a && (g = 0, v = s, s = /* @__PURE__ */ new Map());
  }
  return {
    get(E) {
      let z = s.get(E);
      if (z !== void 0)
        return z;
      if ((z = v.get(E)) !== void 0)
        return _(E, z), z;
    },
    set(E, z) {
      s.has(E) ? s.set(E, z) : _(E, z);
    }
  };
}
const ba = "!";
function Cf(a) {
  const g = a.separator, s = g.length === 1, v = g[0], _ = g.length;
  return function(z) {
    const j = [];
    let I = 0, U = 0, $;
    for (let V = 0; V < z.length; V++) {
      let W = z[V];
      if (I === 0) {
        if (W === v && (s || z.slice(V, V + _) === g)) {
          j.push(z.slice(U, V)), U = V + _;
          continue;
        }
        if (W === "/") {
          $ = V;
          continue;
        }
      }
      W === "[" ? I++ : W === "]" && I--;
    }
    const B = j.length === 0 ? z : z.substring(U), H = B.startsWith(ba), ce = H ? B.substring(1) : B, me = $ && $ > U ? $ - U : void 0;
    return {
      modifiers: j,
      hasImportantModifier: H,
      baseClassName: ce,
      maybePostfixModifierPosition: me
    };
  };
}
function _f(a) {
  if (a.length <= 1)
    return a;
  const g = [];
  let s = [];
  return a.forEach((v) => {
    v[0] === "[" ? (g.push(...s.sort(), v), s = []) : s.push(v);
  }), g.push(...s.sort()), g;
}
function zf(a) {
  return {
    cache: Ef(a.cacheSize),
    splitModifiers: Cf(a),
    ...yf(a)
  };
}
const Pf = /\s+/;
function Nf(a, g) {
  const {
    splitModifiers: s,
    getClassGroupId: v,
    getConflictingClassGroupIds: _
  } = g, E = /* @__PURE__ */ new Set();
  return a.trim().split(Pf).map((z) => {
    const {
      modifiers: j,
      hasImportantModifier: I,
      baseClassName: U,
      maybePostfixModifierPosition: $
    } = s(z);
    let B = v($ ? U.substring(0, $) : U), H = !!$;
    if (!B) {
      if (!$)
        return {
          isTailwindClass: !1,
          originalClassName: z
        };
      if (B = v(U), !B)
        return {
          isTailwindClass: !1,
          originalClassName: z
        };
      H = !1;
    }
    const ce = _f(j).join(":");
    return {
      isTailwindClass: !0,
      modifierId: I ? ce + ba : ce,
      classGroupId: B,
      originalClassName: z,
      hasPostfixModifier: H
    };
  }).reverse().filter((z) => {
    if (!z.isTailwindClass)
      return !0;
    const {
      modifierId: j,
      classGroupId: I,
      hasPostfixModifier: U
    } = z, $ = j + I;
    return E.has($) ? !1 : (E.add($), _(I, U).forEach((B) => E.add(j + B)), !0);
  }).reverse().map((z) => z.originalClassName).join(" ");
}
function Tf() {
  let a = 0, g, s, v = "";
  for (; a < arguments.length; )
    (g = arguments[a++]) && (s = ec(g)) && (v && (v += " "), v += s);
  return v;
}
function ec(a) {
  if (typeof a == "string")
    return a;
  let g, s = "";
  for (let v = 0; v < a.length; v++)
    a[v] && (g = ec(a[v])) && (s && (s += " "), s += g);
  return s;
}
function Rf(a, ...g) {
  let s, v, _, E = z;
  function z(I) {
    const U = g.reduce(($, B) => B($), a());
    return s = zf(U), v = s.cache.get, _ = s.cache.set, E = j, j(I);
  }
  function j(I) {
    const U = v(I);
    if (U)
      return U;
    const $ = Nf(I, s);
    return _(I, $), $;
  }
  return function() {
    return E(Tf.apply(null, arguments));
  };
}
function ue(a) {
  const g = (s) => s[a] || [];
  return g.isThemeGetter = !0, g;
}
const tc = /^\[(?:([a-z-]+):)?(.+)\]$/i, Lf = /^\d+\/\d+$/, Mf = /* @__PURE__ */ new Set(["px", "full", "screen"]), jf = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Of = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, If = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ff = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Df = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Lt(a) {
  return pn(a) || Mf.has(a) || Lf.test(a);
}
function Jt(a) {
  return Un(a, "length", Qf);
}
function pn(a) {
  return !!a && !Number.isNaN(Number(a));
}
function Al(a) {
  return Un(a, "number", pn);
}
function zr(a) {
  return !!a && Number.isInteger(Number(a));
}
function Af(a) {
  return a.endsWith("%") && pn(a.slice(0, -1));
}
function Q(a) {
  return tc.test(a);
}
function qt(a) {
  return jf.test(a);
}
const Uf = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Vf(a) {
  return Un(a, Uf, nc);
}
function Wf(a) {
  return Un(a, "position", nc);
}
const Bf = /* @__PURE__ */ new Set(["image", "url"]);
function $f(a) {
  return Un(a, Bf, Kf);
}
function Hf(a) {
  return Un(a, "", Gf);
}
function Pr() {
  return !0;
}
function Un(a, g, s) {
  const v = tc.exec(a);
  return v ? v[1] ? typeof g == "string" ? v[1] === g : g.has(v[1]) : s(v[2]) : !1;
}
function Qf(a) {
  return Of.test(a) && !If.test(a);
}
function nc() {
  return !1;
}
function Gf(a) {
  return Ff.test(a);
}
function Kf(a) {
  return Df.test(a);
}
function Yf() {
  const a = ue("colors"), g = ue("spacing"), s = ue("blur"), v = ue("brightness"), _ = ue("borderColor"), E = ue("borderRadius"), z = ue("borderSpacing"), j = ue("borderWidth"), I = ue("contrast"), U = ue("grayscale"), $ = ue("hueRotate"), B = ue("invert"), H = ue("gap"), ce = ue("gradientColorStops"), me = ue("gradientColorStopPositions"), V = ue("inset"), W = ue("margin"), Ee = ue("opacity"), ve = ue("padding"), Ve = ue("saturate"), ye = ue("scale"), We = ue("sepia"), Ce = ue("skew"), Ne = ue("space"), De = ue("translate"), nt = () => ["auto", "contain", "none"], Xe = () => ["auto", "hidden", "clip", "visible", "scroll"], at = () => ["auto", Q, g], X = () => [Q, g], Le = () => ["", Lt, Jt], Me = () => ["auto", pn, Q], Ze = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ke = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], O = () => ["", "0", Q], N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], f = () => [pn, Al], y = () => [pn, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Pr],
      spacing: [Lt, Jt],
      blur: ["none", "", qt, Q],
      brightness: f(),
      borderColor: [a],
      borderRadius: ["none", "", "full", qt, Q],
      borderSpacing: X(),
      borderWidth: Le(),
      contrast: f(),
      grayscale: O(),
      hueRotate: y(),
      invert: O(),
      gap: X(),
      gradientColorStops: [a],
      gradientColorStopPositions: [Af, Jt],
      inset: at(),
      margin: at(),
      opacity: f(),
      padding: X(),
      saturate: f(),
      scale: f(),
      sepia: O(),
      skew: y(),
      space: X(),
      translate: X()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Q]
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
        columns: [qt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": N()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": N()
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
        object: [...Ze(), Q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Xe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Xe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Xe()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: nt()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": nt()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": nt()
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
        inset: [V]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [V]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [V]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [V]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [V]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [V]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [V]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [V]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [V]
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
        z: ["auto", zr, Q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: at()
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
        flex: ["1", "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: O()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: O()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", zr, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Pr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", zr, Q]
        }, Q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Me()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Me()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Pr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [zr, Q]
        }, Q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Me()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Me()
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
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [H]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [H]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [H]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...C()]
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
        content: ["normal", ...C(), "baseline"]
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
        "place-content": [...C(), "baseline"]
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
        p: [ve]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [ve]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [ve]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [ve]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [ve]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [ve]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [ve]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [ve]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [ve]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [W]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [W]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [W]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [W]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [W]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [W]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [W]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [W]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [W]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Ne]
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
        "space-y": [Ne]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, g]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Q, g, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Q, g, "none", "full", "min", "max", "fit", "prose", {
          screen: [qt]
        }, qt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Q, g, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Q, g, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Q, g, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Q, g, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", qt, Jt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Al]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Pr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", pn, Al]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Lt, Q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
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
        placeholder: [a]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [Ee]
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
        text: [a]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [Ee]
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
        decoration: [...ke(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Lt, Jt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Lt, Q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [a]
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
        indent: X()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
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
        content: ["none", Q]
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
        "bg-opacity": [Ee]
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
        bg: [...Ze(), Wf]
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
        bg: ["auto", "cover", "contain", Vf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $f]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [a]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [me]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [me]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [me]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [ce]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [ce]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [ce]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [E]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [E]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [E]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [E]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [E]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [E]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [E]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [E]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [E]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [E]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [E]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [E]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [E]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [E]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [E]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [j]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [j]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [j]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [j]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [j]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [j]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [j]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [j]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [j]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [Ee]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ke(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [j]
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
        "divide-y": [j]
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
        "divide-opacity": [Ee]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ke()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [_]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [_]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [_]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [_]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [_]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [_]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [_]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [_]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ke()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Lt, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Lt, Jt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [a]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Le()
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
        ring: [a]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [Ee]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Lt, Jt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [a]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", qt, Hf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Pr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Ee]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        brightness: [v]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [I]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", qt, Q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [$]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [B]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ve]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [We]
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
        "backdrop-brightness": [v]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [I]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [$]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [B]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ve]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [We]
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
        "border-spacing": [z]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [z]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [z]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
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
        scale: [ye]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ye]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ye]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [zr, Q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [De]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [De]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Ce]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Ce]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", a]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [a]
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
        "scroll-m": X()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": X()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": X()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": X()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": X()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": X()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": X()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": X()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": X()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": X()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": X()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": X()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": X()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": X()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": X()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": X()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": X()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": X()
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
        "will-change": ["auto", "scroll", "contents", "transform", Q]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [a, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Lt, Jt, Al]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [a, "none"]
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
const Xf = /* @__PURE__ */ Rf(Yf);
function Zf(...a) {
  return Xf(vf(a));
}
const Jf = gf(
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
), rc = Ye.forwardRef(({ className: a, variant: g, size: s, asChild: v = !1, ..._ }, E) => {
  const z = v ? Xa : "button";
  return /* @__PURE__ */ vt.jsx(
    z,
    {
      className: Zf(Jf({ variant: g, size: s, className: a })),
      ref: E,
      ..._
    }
  );
});
rc.displayName = "Button";
const qf = () => /* @__PURE__ */ vt.jsxs("div", { id: "widget", children: [
  /* @__PURE__ */ vt.jsx("style", { children: uf }),
  /* @__PURE__ */ vt.jsx("style", { children: sf }),
  /* @__PURE__ */ vt.jsx("div", { className: "widget", children: "Widget" }),
  /* @__PURE__ */ vt.jsx(rc, { className: "bg-slate-800", children: "Click me" })
] }), bf = (a) => a.replace(/-([a-z])/g, (g, s) => s.toUpperCase());
class ep extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const g = this.getPropsFromAttributes();
    Fi.createRoot(this.shadowRoot).render(/* @__PURE__ */ vt.jsx(qf, { ...g }));
  }
  getPropsFromAttributes() {
    const g = {};
    for (let s = 0; s < this.attributes.length; s++) {
      const v = this.attributes[s];
      g[bf(v.name)] = v.value;
    }
    return g;
  }
}
customElements.define("my-widget", ep);
