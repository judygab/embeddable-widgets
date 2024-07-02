var Na = { exports: {} }, hr = {}, Eo = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function zf() {
  if (Sa) return M;
  Sa = 1;
  var R = Symbol.for("react.element"), B = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), Ce = Symbol.for("react.strict_mode"), xe = Symbol.for("react.profiler"), Fe = Symbol.for("react.provider"), Pe = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Se = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), q = Symbol.iterator;
  function X(c) {
    return c === null || typeof c != "object" ? null : (c = q && c[q] || c["@@iterator"], typeof c == "function" ? c : null);
  }
  var He = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, G = {};
  function W(c, h, O) {
    this.props = c, this.context = h, this.refs = G, this.updater = O || He;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(c, h) {
    if (typeof c != "object" && typeof c != "function" && c != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, c, h, "setState");
  }, W.prototype.forceUpdate = function(c) {
    this.updater.enqueueForceUpdate(this, c, "forceUpdate");
  };
  function hn() {
  }
  hn.prototype = W.prototype;
  function sn(c, h, O) {
    this.props = c, this.context = h, this.refs = G, this.updater = O || He;
  }
  var Je = sn.prototype = new hn();
  Je.constructor = sn, We(Je, W.prototype), Je.isPureReactComponent = !0;
  var ve = Array.isArray, qe = Object.prototype.hasOwnProperty, ke = { current: null }, Ne = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(c, h, O) {
    var D, I = {}, j = null, $ = null;
    if (h != null) for (D in h.ref !== void 0 && ($ = h.ref), h.key !== void 0 && (j = "" + h.key), h) qe.call(h, D) && !Ne.hasOwnProperty(D) && (I[D] = h[D]);
    var A = arguments.length - 2;
    if (A === 1) I.children = O;
    else if (1 < A) {
      for (var Z = Array(A), je = 0; je < A; je++) Z[je] = arguments[je + 2];
      I.children = Z;
    }
    if (c && c.defaultProps) for (D in A = c.defaultProps, A) I[D] === void 0 && (I[D] = A[D]);
    return { $$typeof: R, type: c, key: j, ref: $, props: I, _owner: ke.current };
  }
  function Pn(c, h) {
    return { $$typeof: R, type: c.type, key: h, ref: c.ref, props: c.props, _owner: c._owner };
  }
  function yn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === R;
  }
  function Kn(c) {
    var h = { "=": "=0", ":": "=2" };
    return "$" + c.replace(/[=:]/g, function(O) {
      return h[O];
    });
  }
  var an = /\/+/g;
  function Ie(c, h) {
    return typeof c == "object" && c !== null && c.key != null ? Kn("" + c.key) : h.toString(36);
  }
  function be(c, h, O, D, I) {
    var j = typeof c;
    (j === "undefined" || j === "boolean") && (c = null);
    var $ = !1;
    if (c === null) $ = !0;
    else switch (j) {
      case "string":
      case "number":
        $ = !0;
        break;
      case "object":
        switch (c.$$typeof) {
          case R:
          case B:
            $ = !0;
        }
    }
    if ($) return $ = c, I = I($), c = D === "" ? "." + Ie($, 0) : D, ve(I) ? (O = "", c != null && (O = c.replace(an, "$&/") + "/"), be(I, h, O, "", function(je) {
      return je;
    })) : I != null && (yn(I) && (I = Pn(I, O + (!I.key || $ && $.key === I.key ? "" : ("" + I.key).replace(an, "$&/") + "/") + c)), h.push(I)), 1;
    if ($ = 0, D = D === "" ? "." : D + ":", ve(c)) for (var A = 0; A < c.length; A++) {
      j = c[A];
      var Z = D + Ie(j, A);
      $ += be(j, h, O, Z, I);
    }
    else if (Z = X(c), typeof Z == "function") for (c = Z.call(c), A = 0; !(j = c.next()).done; ) j = j.value, Z = D + Ie(j, A++), $ += be(j, h, O, Z, I);
    else if (j === "object") throw h = String(c), Error("Objects are not valid as a React child (found: " + (h === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : h) + "). If you meant to render a collection of children, use an array instead.");
    return $;
  }
  function cn(c, h, O) {
    if (c == null) return c;
    var D = [], I = 0;
    return be(c, D, "", "", function(j) {
      return h.call(O, j, I++);
    }), D;
  }
  function ze(c) {
    if (c._status === -1) {
      var h = c._result;
      h = h(), h.then(function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 1, c._result = O);
      }, function(O) {
        (c._status === 0 || c._status === -1) && (c._status = 2, c._result = O);
      }), c._status === -1 && (c._status = 0, c._result = h);
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ne = { current: null }, S = { transition: null }, T = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: S, ReactCurrentOwner: ke };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: cn, forEach: function(c, h, O) {
    cn(c, function() {
      h.apply(this, arguments);
    }, O);
  }, count: function(c) {
    var h = 0;
    return cn(c, function() {
      h++;
    }), h;
  }, toArray: function(c) {
    return cn(c, function(h) {
      return h;
    }) || [];
  }, only: function(c) {
    if (!yn(c)) throw Error("React.Children.only expected to receive a single React element child.");
    return c;
  } }, M.Component = W, M.Fragment = m, M.Profiler = xe, M.PureComponent = sn, M.StrictMode = Ce, M.Suspense = H, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, M.act = _, M.cloneElement = function(c, h, O) {
    if (c == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + c + ".");
    var D = We({}, c.props), I = c.key, j = c.ref, $ = c._owner;
    if (h != null) {
      if (h.ref !== void 0 && (j = h.ref, $ = ke.current), h.key !== void 0 && (I = "" + h.key), c.type && c.type.defaultProps) var A = c.type.defaultProps;
      for (Z in h) qe.call(h, Z) && !Ne.hasOwnProperty(Z) && (D[Z] = h[Z] === void 0 && A !== void 0 ? A[Z] : h[Z]);
    }
    var Z = arguments.length - 2;
    if (Z === 1) D.children = O;
    else if (1 < Z) {
      A = Array(Z);
      for (var je = 0; je < Z; je++) A[je] = arguments[je + 2];
      D.children = A;
    }
    return { $$typeof: R, type: c.type, key: I, ref: j, props: D, _owner: $ };
  }, M.createContext = function(c) {
    return c = { $$typeof: Pe, _currentValue: c, _currentValue2: c, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, c.Provider = { $$typeof: Fe, _context: c }, c.Consumer = c;
  }, M.createElement = $e, M.createFactory = function(c) {
    var h = $e.bind(null, c);
    return h.type = c, h;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(c) {
    return { $$typeof: se, render: c };
  }, M.isValidElement = yn, M.lazy = function(c) {
    return { $$typeof: me, _payload: { _status: -1, _result: c }, _init: ze };
  }, M.memo = function(c, h) {
    return { $$typeof: Se, type: c, compare: h === void 0 ? null : h };
  }, M.startTransition = function(c) {
    var h = S.transition;
    S.transition = {};
    try {
      c();
    } finally {
      S.transition = h;
    }
  }, M.unstable_act = _, M.useCallback = function(c, h) {
    return ne.current.useCallback(c, h);
  }, M.useContext = function(c) {
    return ne.current.useContext(c);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(c) {
    return ne.current.useDeferredValue(c);
  }, M.useEffect = function(c, h) {
    return ne.current.useEffect(c, h);
  }, M.useId = function() {
    return ne.current.useId();
  }, M.useImperativeHandle = function(c, h, O) {
    return ne.current.useImperativeHandle(c, h, O);
  }, M.useInsertionEffect = function(c, h) {
    return ne.current.useInsertionEffect(c, h);
  }, M.useLayoutEffect = function(c, h) {
    return ne.current.useLayoutEffect(c, h);
  }, M.useMemo = function(c, h) {
    return ne.current.useMemo(c, h);
  }, M.useReducer = function(c, h, O) {
    return ne.current.useReducer(c, h, O);
  }, M.useRef = function(c) {
    return ne.current.useRef(c);
  }, M.useState = function(c) {
    return ne.current.useState(c);
  }, M.useSyncExternalStore = function(c, h, O) {
    return ne.current.useSyncExternalStore(c, h, O);
  }, M.useTransition = function() {
    return ne.current.useTransition();
  }, M.version = "18.3.1", M;
}
var ka;
function za() {
  return ka || (ka = 1, Eo.exports = zf()), Eo.exports;
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
var Ea;
function Tf() {
  if (Ea) return hr;
  Ea = 1;
  var R = za(), B = Symbol.for("react.element"), m = Symbol.for("react.fragment"), Ce = Object.prototype.hasOwnProperty, xe = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Pe(se, H, Se) {
    var me, q = {}, X = null, He = null;
    Se !== void 0 && (X = "" + Se), H.key !== void 0 && (X = "" + H.key), H.ref !== void 0 && (He = H.ref);
    for (me in H) Ce.call(H, me) && !Fe.hasOwnProperty(me) && (q[me] = H[me]);
    if (se && se.defaultProps) for (me in H = se.defaultProps, H) q[me] === void 0 && (q[me] = H[me]);
    return { $$typeof: B, type: se, key: X, ref: He, props: q, _owner: xe.current };
  }
  return hr.Fragment = m, hr.jsx = Pe, hr.jsxs = Pe, hr;
}
Na.exports = Tf();
var yr = Na.exports, xo = {}, Ta = { exports: {} }, De = {}, _o = { exports: {} }, Co = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function Lf() {
  return _a || (_a = 1, function(R) {
    function B(S, T) {
      var _ = S.length;
      S.push(T);
      e: for (; 0 < _; ) {
        var c = _ - 1 >>> 1, h = S[c];
        if (0 < xe(h, T)) S[c] = T, S[_] = h, _ = c;
        else break e;
      }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function Ce(S) {
      if (S.length === 0) return null;
      var T = S[0], _ = S.pop();
      if (_ !== T) {
        S[0] = _;
        e: for (var c = 0, h = S.length, O = h >>> 1; c < O; ) {
          var D = 2 * (c + 1) - 1, I = S[D], j = D + 1, $ = S[j];
          if (0 > xe(I, _)) j < h && 0 > xe($, I) ? (S[c] = $, S[j] = _, c = j) : (S[c] = I, S[D] = _, c = D);
          else if (j < h && 0 > xe($, _)) S[c] = $, S[j] = _, c = j;
          else break e;
        }
      }
      return T;
    }
    function xe(S, T) {
      var _ = S.sortIndex - T.sortIndex;
      return _ !== 0 ? _ : S.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Fe = performance;
      R.unstable_now = function() {
        return Fe.now();
      };
    } else {
      var Pe = Date, se = Pe.now();
      R.unstable_now = function() {
        return Pe.now() - se;
      };
    }
    var H = [], Se = [], me = 1, q = null, X = 3, He = !1, We = !1, G = !1, W = typeof setTimeout == "function" ? setTimeout : null, hn = typeof clearTimeout == "function" ? clearTimeout : null, sn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Je(S) {
      for (var T = m(Se); T !== null; ) {
        if (T.callback === null) Ce(Se);
        else if (T.startTime <= S) Ce(Se), T.sortIndex = T.expirationTime, B(H, T);
        else break;
        T = m(Se);
      }
    }
    function ve(S) {
      if (G = !1, Je(S), !We) if (m(H) !== null) We = !0, ze(qe);
      else {
        var T = m(Se);
        T !== null && ne(ve, T.startTime - S);
      }
    }
    function qe(S, T) {
      We = !1, G && (G = !1, hn($e), $e = -1), He = !0;
      var _ = X;
      try {
        for (Je(T), q = m(H); q !== null && (!(q.expirationTime > T) || S && !Kn()); ) {
          var c = q.callback;
          if (typeof c == "function") {
            q.callback = null, X = q.priorityLevel;
            var h = c(q.expirationTime <= T);
            T = R.unstable_now(), typeof h == "function" ? q.callback = h : q === m(H) && Ce(H), Je(T);
          } else Ce(H);
          q = m(H);
        }
        if (q !== null) var O = !0;
        else {
          var D = m(Se);
          D !== null && ne(ve, D.startTime - T), O = !1;
        }
        return O;
      } finally {
        q = null, X = _, He = !1;
      }
    }
    var ke = !1, Ne = null, $e = -1, Pn = 5, yn = -1;
    function Kn() {
      return !(R.unstable_now() - yn < Pn);
    }
    function an() {
      if (Ne !== null) {
        var S = R.unstable_now();
        yn = S;
        var T = !0;
        try {
          T = Ne(!0, S);
        } finally {
          T ? Ie() : (ke = !1, Ne = null);
        }
      } else ke = !1;
    }
    var Ie;
    if (typeof sn == "function") Ie = function() {
      sn(an);
    };
    else if (typeof MessageChannel < "u") {
      var be = new MessageChannel(), cn = be.port2;
      be.port1.onmessage = an, Ie = function() {
        cn.postMessage(null);
      };
    } else Ie = function() {
      W(an, 0);
    };
    function ze(S) {
      Ne = S, ke || (ke = !0, Ie());
    }
    function ne(S, T) {
      $e = W(function() {
        S(R.unstable_now());
      }, T);
    }
    R.unstable_IdlePriority = 5, R.unstable_ImmediatePriority = 1, R.unstable_LowPriority = 4, R.unstable_NormalPriority = 3, R.unstable_Profiling = null, R.unstable_UserBlockingPriority = 2, R.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, R.unstable_continueExecution = function() {
      We || He || (We = !0, ze(qe));
    }, R.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < S ? Math.floor(1e3 / S) : 5;
    }, R.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, R.unstable_getFirstCallbackNode = function() {
      return m(H);
    }, R.unstable_next = function(S) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = X;
      }
      var _ = X;
      X = T;
      try {
        return S();
      } finally {
        X = _;
      }
    }, R.unstable_pauseExecution = function() {
    }, R.unstable_requestPaint = function() {
    }, R.unstable_runWithPriority = function(S, T) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var _ = X;
      X = S;
      try {
        return T();
      } finally {
        X = _;
      }
    }, R.unstable_scheduleCallback = function(S, T, _) {
      var c = R.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? c + _ : c) : _ = c, S) {
        case 1:
          var h = -1;
          break;
        case 2:
          h = 250;
          break;
        case 5:
          h = 1073741823;
          break;
        case 4:
          h = 1e4;
          break;
        default:
          h = 5e3;
      }
      return h = _ + h, S = { id: me++, callback: T, priorityLevel: S, startTime: _, expirationTime: h, sortIndex: -1 }, _ > c ? (S.sortIndex = _, B(Se, S), m(H) === null && S === m(Se) && (G ? (hn($e), $e = -1) : G = !0, ne(ve, _ - c))) : (S.sortIndex = h, B(H, S), We || He || (We = !0, ze(qe))), S;
    }, R.unstable_shouldYield = Kn, R.unstable_wrapCallback = function(S) {
      var T = X;
      return function() {
        var _ = X;
        X = T;
        try {
          return S.apply(this, arguments);
        } finally {
          X = _;
        }
      };
    };
  }(Co)), Co;
}
var Ca;
function Rf() {
  return Ca || (Ca = 1, _o.exports = Lf()), _o.exports;
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
var xa;
function Of() {
  if (xa) return De;
  xa = 1;
  var R = za(), B = Rf();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ce = /* @__PURE__ */ new Set(), xe = {};
  function Fe(e, n) {
    Pe(e, n), Pe(e + "Capture", n);
  }
  function Pe(e, n) {
    for (xe[e] = n, e = 0; e < n.length; e++) Ce.add(n[e]);
  }
  var se = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), H = Object.prototype.hasOwnProperty, Se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, me = {}, q = {};
  function X(e) {
    return H.call(q, e) ? !0 : H.call(me, e) ? !1 : Se.test(e) ? q[e] = !0 : (me[e] = !0, !1);
  }
  function He(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, n, t, r) {
    if (n === null || typeof n > "u" || He(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return !1;
  }
  function G(e, n, t, r, l, u, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new G(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    W[n] = new G(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new G(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new G(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new G(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new G(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var hn = /[\-:]([a-z])/g;
  function sn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      hn,
      sn
    );
    W[n] = new G(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(hn, sn);
    W[n] = new G(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(hn, sn);
    W[n] = new G(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Je(e, n, t, r) {
    var l = W.hasOwnProperty(n) ? W[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (We(n, t, l, r) && (t = null), r || l === null ? X(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var ve = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qe = Symbol.for("react.element"), ke = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), yn = Symbol.for("react.provider"), Kn = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), cn = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, c;
  function h(e) {
    if (c === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      c = n && n[1] || "";
    }
    return `
` + c + e;
  }
  var O = !1;
  function D(e, n) {
    if (!e || O) return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (p) {
          r = p;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; ) i--;
        for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1)
            do
              if (o--, i--, 0 > i || l[o] !== u[i]) {
                var s = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= o && 0 <= i);
          break;
        }
      }
    } finally {
      O = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? h(e) : "";
  }
  function I(e) {
    switch (e.tag) {
      case 5:
        return h(e.type);
      case 16:
        return h("Lazy");
      case 13:
        return h("Suspense");
      case 19:
        return h("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = D(e.type, !1), e;
      case 11:
        return e = D(e.type.render, !1), e;
      case 1:
        return e = D(e.type, !0), e;
      default:
        return "";
    }
  }
  function j(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ne:
        return "Fragment";
      case ke:
        return "Portal";
      case Pn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case be:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Kn:
        return (e.displayName || "Context") + ".Consumer";
      case yn:
        return (e._context.displayName || "Context") + ".Provider";
      case an:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case cn:
        return n = e.displayName || null, n !== null ? n : j(e.type) || "Memo";
      case ze:
        n = e._payload, e = e._init;
        try {
          return j(e(n));
        } catch {
        }
    }
    return null;
  }
  function $(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return j(n);
      case 8:
        return n === $e ? "StrictMode" : "Mode";
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
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function A(e) {
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
  function Z(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function je(e) {
    var n = Z(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, u = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, u.call(this, o);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function gr(e) {
    e._valueTracker || (e._valueTracker = je(e));
  }
  function Po(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = Z(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function wr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function zl(e, n) {
    var t = n.checked;
    return _({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function No(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = A(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function zo(e, n) {
    n = n.checked, n != null && Je(e, "checked", n, !1);
  }
  function Tl(e, n) {
    zo(e, n);
    var t = A(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Ll(e, n.type, t) : n.hasOwnProperty("defaultValue") && Ll(e, n.type, A(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function To(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Ll(e, n, t) {
    (n !== "number" || wr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Rt = Array.isArray;
  function ot(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + A(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Rl(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Lo(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (Rt(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: A(t) };
  }
  function Ro(e, n) {
    var t = A(n.value), r = A(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Oo(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Mo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ol(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Mo(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Sr, Do = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function Ot(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Mt = {
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
  }, Ra = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Mt).forEach(function(e) {
    Ra.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Mt[n] = Mt[e];
    });
  });
  function Fo(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Mt.hasOwnProperty(e) && Mt[e] ? ("" + n).trim() : n + "px";
  }
  function Io(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = Fo(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var Oa = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ml(e, n) {
    if (n) {
      if (Oa[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Dl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
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
  var Fl = null;
  function Il(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var jl = null, it = null, st = null;
  function jo(e) {
    if (e = nr(e)) {
      if (typeof jl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = Wr(n), jl(e.stateNode, e.type, n));
    }
  }
  function Uo(e) {
    it ? st ? st.push(e) : st = [e] : it = e;
  }
  function Ao() {
    if (it) {
      var e = it, n = st;
      if (st = it = null, jo(e), n) for (e = 0; e < n.length; e++) jo(n[e]);
    }
  }
  function Vo(e, n) {
    return e(n);
  }
  function Bo() {
  }
  var Ul = !1;
  function Ho(e, n, t) {
    if (Ul) return e(n, t);
    Ul = !0;
    try {
      return Vo(e, n, t);
    } finally {
      Ul = !1, (it !== null || st !== null) && (Bo(), Ao());
    }
  }
  function Dt(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Wr(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
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
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Al = !1;
  if (se) try {
    var Ft = {};
    Object.defineProperty(Ft, "passive", { get: function() {
      Al = !0;
    } }), window.addEventListener("test", Ft, Ft), window.removeEventListener("test", Ft, Ft);
  } catch {
    Al = !1;
  }
  function Ma(e, n, t, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var It = !1, kr = null, Er = !1, Vl = null, Da = { onError: function(e) {
    It = !0, kr = e;
  } };
  function Fa(e, n, t, r, l, u, o, i, s) {
    It = !1, kr = null, Ma.apply(Da, arguments);
  }
  function Ia(e, n, t, r, l, u, o, i, s) {
    if (Fa.apply(this, arguments), It) {
      if (It) {
        var p = kr;
        It = !1, kr = null;
      } else throw Error(m(198));
      Er || (Er = !0, Vl = p);
    }
  }
  function Yn(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Wo(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function $o(e) {
    if (Yn(e) !== e) throw Error(m(188));
  }
  function ja(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Yn(e), n === null) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return $o(l), e;
          if (u === r) return $o(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) t = l, r = u;
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === t) {
            o = !0, t = l, r = u;
            break;
          }
          if (i === r) {
            o = !0, r = l, t = u;
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === t) {
              o = !0, t = u, r = l;
              break;
            }
            if (i === r) {
              o = !0, r = u, t = l;
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Qo(e) {
    return e = ja(e), e !== null ? Ko(e) : null;
  }
  function Ko(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Ko(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Yo = B.unstable_scheduleCallback, Xo = B.unstable_cancelCallback, Ua = B.unstable_shouldYield, Aa = B.unstable_requestPaint, re = B.unstable_now, Va = B.unstable_getCurrentPriorityLevel, Bl = B.unstable_ImmediatePriority, Go = B.unstable_UserBlockingPriority, _r = B.unstable_NormalPriority, Ba = B.unstable_LowPriority, Zo = B.unstable_IdlePriority, Cr = null, fn = null;
  function Ha(e) {
    if (fn && typeof fn.onCommitFiberRoot == "function") try {
      fn.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var en = Math.clz32 ? Math.clz32 : Qa, Wa = Math.log, $a = Math.LN2;
  function Qa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wa(e) / $a | 0) | 0;
  }
  var xr = 64, Pr = 4194304;
  function jt(e) {
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
  function Nr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = t & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? r = jt(i) : (u &= o, u !== 0 && (r = jt(u)));
    } else o = t & ~l, o !== 0 ? r = jt(o) : u !== 0 && (r = jt(u));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - en(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Ka(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function Ya(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - en(u), i = 1 << o, s = l[o];
      s === -1 ? (!(i & t) || i & r) && (l[o] = Ka(i, n)) : s <= n && (e.expiredLanes |= i), u &= ~i;
    }
  }
  function Hl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Jo() {
    var e = xr;
    return xr <<= 1, !(xr & 4194240) && (xr = 64), e;
  }
  function Wl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Ut(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - en(n), e[n] = t;
  }
  function Xa(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - en(t), u = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
    }
  }
  function $l(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - en(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var V = 0;
  function qo(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var bo, Ql, ei, ni, ti, Kl = !1, zr = [], Nn = null, zn = null, Tn = null, At = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), Ln = [], Ga = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ri(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Nn = null;
        break;
      case "dragenter":
      case "dragleave":
        zn = null;
        break;
      case "mouseover":
      case "mouseout":
        Tn = null;
        break;
      case "pointerover":
      case "pointerout":
        At.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vt.delete(n.pointerId);
    }
  }
  function Bt(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = nr(n), n !== null && Ql(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Za(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return Nn = Bt(Nn, e, n, t, r, l), !0;
      case "dragenter":
        return zn = Bt(zn, e, n, t, r, l), !0;
      case "mouseover":
        return Tn = Bt(Tn, e, n, t, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return At.set(u, Bt(At.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Vt.set(u, Bt(Vt.get(u) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function li(e) {
    var n = Xn(e.target);
    if (n !== null) {
      var t = Yn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Wo(t), n !== null) {
            e.blockedOn = n, ti(e.priority, function() {
              ei(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Xl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Fl = r, t.target.dispatchEvent(r), Fl = null;
      } else return n = nr(t), n !== null && Ql(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function ui(e, n, t) {
    Tr(e) && t.delete(n);
  }
  function Ja() {
    Kl = !1, Nn !== null && Tr(Nn) && (Nn = null), zn !== null && Tr(zn) && (zn = null), Tn !== null && Tr(Tn) && (Tn = null), At.forEach(ui), Vt.forEach(ui);
  }
  function Ht(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Kl || (Kl = !0, B.unstable_scheduleCallback(B.unstable_NormalPriority, Ja)));
  }
  function Wt(e) {
    function n(l) {
      return Ht(l, e);
    }
    if (0 < zr.length) {
      Ht(zr[0], e);
      for (var t = 1; t < zr.length; t++) {
        var r = zr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Nn !== null && Ht(Nn, e), zn !== null && Ht(zn, e), Tn !== null && Ht(Tn, e), At.forEach(n), Vt.forEach(n), t = 0; t < Ln.length; t++) r = Ln[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ln.length && (t = Ln[0], t.blockedOn === null); ) li(t), t.blockedOn === null && Ln.shift();
  }
  var at = ve.ReactCurrentBatchConfig, Lr = !0;
  function qa(e, n, t, r) {
    var l = V, u = at.transition;
    at.transition = null;
    try {
      V = 1, Yl(e, n, t, r);
    } finally {
      V = l, at.transition = u;
    }
  }
  function ba(e, n, t, r) {
    var l = V, u = at.transition;
    at.transition = null;
    try {
      V = 4, Yl(e, n, t, r);
    } finally {
      V = l, at.transition = u;
    }
  }
  function Yl(e, n, t, r) {
    if (Lr) {
      var l = Xl(e, n, t, r);
      if (l === null) fu(e, n, r, Rr, t), ri(e, r);
      else if (Za(l, e, n, t, r)) r.stopPropagation();
      else if (ri(e, r), n & 4 && -1 < Ga.indexOf(e)) {
        for (; l !== null; ) {
          var u = nr(l);
          if (u !== null && bo(u), u = Xl(e, n, t, r), u === null && fu(e, n, r, Rr, t), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else fu(e, n, r, null, t);
    }
  }
  var Rr = null;
  function Xl(e, n, t, r) {
    if (Rr = null, e = Il(r), e = Xn(e), e !== null) if (n = Yn(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Wo(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Rr = e, null;
  }
  function oi(e) {
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
        switch (Va()) {
          case Bl:
            return 1;
          case Go:
            return 4;
          case _r:
          case Ba:
            return 16;
          case Zo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rn = null, Gl = null, Or = null;
  function ii() {
    if (Or) return Or;
    var e, n = Gl, t = n.length, r, l = "value" in Rn ? Rn.value : Rn.textContent, u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l[u - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Mr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Dr() {
    return !0;
  }
  function si() {
    return !1;
  }
  function Ue(e) {
    function n(t, r, l, u, o) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(u) : u[i]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Dr : si, this.isPropagationStopped = si, this;
    }
    return _(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Dr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Dr);
    }, persist: function() {
    }, isPersistent: Dr }), n;
  }
  var ct = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Zl = Ue(ct), $t = _({}, ct, { view: 0, detail: 0 }), ec = Ue($t), Jl, ql, Qt, Fr = _({}, $t, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: eu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Qt && (Qt && e.type === "mousemove" ? (Jl = e.screenX - Qt.screenX, ql = e.screenY - Qt.screenY) : ql = Jl = 0, Qt = e), Jl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ql;
  } }), ai = Ue(Fr), nc = _({}, Fr, { dataTransfer: 0 }), tc = Ue(nc), rc = _({}, $t, { relatedTarget: 0 }), bl = Ue(rc), lc = _({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uc = Ue(lc), oc = _({}, ct, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), ic = Ue(oc), sc = _({}, ct, { data: 0 }), ci = Ue(sc), ac = {
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
  }, cc = {
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
  }, fc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function dc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = fc[e]) ? !!n[e] : !1;
  }
  function eu() {
    return dc;
  }
  var pc = _({}, $t, { key: function(e) {
    if (e.key) {
      var n = ac[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: eu, charCode: function(e) {
    return e.type === "keypress" ? Mr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), mc = Ue(pc), vc = _({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fi = Ue(vc), hc = _({}, $t, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: eu }), yc = Ue(hc), gc = _({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wc = Ue(gc), Sc = _({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kc = Ue(Sc), Ec = [9, 13, 27, 32], nu = se && "CompositionEvent" in window, Kt = null;
  se && "documentMode" in document && (Kt = document.documentMode);
  var _c = se && "TextEvent" in window && !Kt, di = se && (!nu || Kt && 8 < Kt && 11 >= Kt), pi = " ", mi = !1;
  function vi(e, n) {
    switch (e) {
      case "keyup":
        return Ec.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hi(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ft = !1;
  function Cc(e, n) {
    switch (e) {
      case "compositionend":
        return hi(n);
      case "keypress":
        return n.which !== 32 ? null : (mi = !0, pi);
      case "textInput":
        return e = n.data, e === pi && mi ? null : e;
      default:
        return null;
    }
  }
  function xc(e, n) {
    if (ft) return e === "compositionend" || !nu && vi(e, n) ? (e = ii(), Or = Gl = Rn = null, ft = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return di && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Pc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Pc[e.type] : n === "textarea";
  }
  function gi(e, n, t, r) {
    Uo(r), n = Vr(n, "onChange"), 0 < n.length && (t = new Zl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Yt = null, Xt = null;
  function Nc(e) {
    Ii(e, 0);
  }
  function Ir(e) {
    var n = ht(e);
    if (Po(n)) return e;
  }
  function zc(e, n) {
    if (e === "change") return n;
  }
  var wi = !1;
  if (se) {
    var tu;
    if (se) {
      var ru = "oninput" in document;
      if (!ru) {
        var Si = document.createElement("div");
        Si.setAttribute("oninput", "return;"), ru = typeof Si.oninput == "function";
      }
      tu = ru;
    } else tu = !1;
    wi = tu && (!document.documentMode || 9 < document.documentMode);
  }
  function ki() {
    Yt && (Yt.detachEvent("onpropertychange", Ei), Xt = Yt = null);
  }
  function Ei(e) {
    if (e.propertyName === "value" && Ir(Xt)) {
      var n = [];
      gi(n, Xt, e, Il(e)), Ho(Nc, n);
    }
  }
  function Tc(e, n, t) {
    e === "focusin" ? (ki(), Yt = n, Xt = t, Yt.attachEvent("onpropertychange", Ei)) : e === "focusout" && ki();
  }
  function Lc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ir(Xt);
  }
  function Rc(e, n) {
    if (e === "click") return Ir(n);
  }
  function Oc(e, n) {
    if (e === "input" || e === "change") return Ir(n);
  }
  function Mc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var nn = typeof Object.is == "function" ? Object.is : Mc;
  function Gt(e, n) {
    if (nn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!H.call(n, l) || !nn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function _i(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ci(e, n) {
    var t = _i(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = _i(t);
    }
  }
  function xi(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? xi(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Pi() {
    for (var e = window, n = wr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = wr(e.document);
    }
    return n;
  }
  function lu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Dc(e) {
    var n = Pi(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && xi(t.ownerDocument.documentElement, t)) {
      if (r !== null && lu(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = Ci(t, u);
          var o = Ci(
            t,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Fc = se && "documentMode" in document && 11 >= document.documentMode, dt = null, uu = null, Zt = null, ou = !1;
  function Ni(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ou || dt == null || dt !== wr(r) || (r = dt, "selectionStart" in r && lu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Zt && Gt(Zt, r) || (Zt = r, r = Vr(uu, "onSelect"), 0 < r.length && (n = new Zl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = dt)));
  }
  function jr(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var pt = { animationend: jr("Animation", "AnimationEnd"), animationiteration: jr("Animation", "AnimationIteration"), animationstart: jr("Animation", "AnimationStart"), transitionend: jr("Transition", "TransitionEnd") }, iu = {}, zi = {};
  se && (zi = document.createElement("div").style, "AnimationEvent" in window || (delete pt.animationend.animation, delete pt.animationiteration.animation, delete pt.animationstart.animation), "TransitionEvent" in window || delete pt.transitionend.transition);
  function Ur(e) {
    if (iu[e]) return iu[e];
    if (!pt[e]) return e;
    var n = pt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in zi) return iu[e] = n[t];
    return e;
  }
  var Ti = Ur("animationend"), Li = Ur("animationiteration"), Ri = Ur("animationstart"), Oi = Ur("transitionend"), Mi = /* @__PURE__ */ new Map(), Di = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function On(e, n) {
    Mi.set(e, n), Fe(n, [e]);
  }
  for (var su = 0; su < Di.length; su++) {
    var au = Di[su], Ic = au.toLowerCase(), jc = au[0].toUpperCase() + au.slice(1);
    On(Ic, "on" + jc);
  }
  On(Ti, "onAnimationEnd"), On(Li, "onAnimationIteration"), On(Ri, "onAnimationStart"), On("dblclick", "onDoubleClick"), On("focusin", "onFocus"), On("focusout", "onBlur"), On(Oi, "onTransitionEnd"), Pe("onMouseEnter", ["mouseout", "mouseover"]), Pe("onMouseLeave", ["mouseout", "mouseover"]), Pe("onPointerEnter", ["pointerout", "pointerover"]), Pe("onPointerLeave", ["pointerout", "pointerover"]), Fe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Fe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Fe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Fe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Fe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Jt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Uc = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jt));
  function Fi(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Ia(r, n, void 0, e), e.currentTarget = null;
  }
  function Ii(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n) for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o], s = i.instance, p = i.currentTarget;
          if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Fi(l, i, p), u = s;
        }
        else for (o = 0; o < r.length; o++) {
          if (i = r[o], s = i.instance, p = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
          Fi(l, i, p), u = s;
        }
      }
    }
    if (Er) throw e = Vl, Er = !1, Vl = null, e;
  }
  function K(e, n) {
    var t = n[yu];
    t === void 0 && (t = n[yu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (ji(n, e, 2, !1), t.add(r));
  }
  function cu(e, n, t) {
    var r = 0;
    n && (r |= 4), ji(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function qt(e) {
    if (!e[Ar]) {
      e[Ar] = !0, Ce.forEach(function(t) {
        t !== "selectionchange" && (Uc.has(t) || cu(t, !1, e), cu(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || (n[Ar] = !0, cu("selectionchange", !1, n));
    }
  }
  function ji(e, n, t, r) {
    switch (oi(n)) {
      case 1:
        var l = qa;
        break;
      case 4:
        l = ba;
        break;
      default:
        l = Yl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Al || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function fu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var s = o.tag;
          if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          o = o.return;
        }
        for (; i !== null; ) {
          if (o = Xn(i), o === null) return;
          if (s = o.tag, s === 5 || s === 6) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    Ho(function() {
      var p = u, y = Il(t), g = [];
      e: {
        var v = Mi.get(e);
        if (v !== void 0) {
          var k = Zl, C = e;
          switch (e) {
            case "keypress":
              if (Mr(t) === 0) break e;
            case "keydown":
            case "keyup":
              k = mc;
              break;
            case "focusin":
              C = "focus", k = bl;
              break;
            case "focusout":
              C = "blur", k = bl;
              break;
            case "beforeblur":
            case "afterblur":
              k = bl;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = ai;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = tc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = yc;
              break;
            case Ti:
            case Li:
            case Ri:
              k = uc;
              break;
            case Oi:
              k = wc;
              break;
            case "scroll":
              k = ec;
              break;
            case "wheel":
              k = kc;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = ic;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = fi;
          }
          var x = (n & 4) !== 0, le = !x && e === "scroll", f = x ? v !== null ? v + "Capture" : null : v;
          x = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Dt(a, f), w != null && x.push(bt(a, w, d)))), le) break;
            a = a.return;
          }
          0 < x.length && (v = new k(v, C, null, t, y), g.push({ event: v, listeners: x }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", v && t !== Fl && (C = t.relatedTarget || t.fromElement) && (Xn(C) || C[gn])) break e;
          if ((k || v) && (v = y.window === y ? y : (v = y.ownerDocument) ? v.defaultView || v.parentWindow : window, k ? (C = t.relatedTarget || t.toElement, k = p, C = C ? Xn(C) : null, C !== null && (le = Yn(C), C !== le || C.tag !== 5 && C.tag !== 6) && (C = null)) : (k = null, C = p), k !== C)) {
            if (x = ai, w = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (x = fi, w = "onPointerLeave", f = "onPointerEnter", a = "pointer"), le = k == null ? v : ht(k), d = C == null ? v : ht(C), v = new x(w, a + "leave", k, t, y), v.target = le, v.relatedTarget = d, w = null, Xn(y) === p && (x = new x(f, a + "enter", C, t, y), x.target = d, x.relatedTarget = le, w = x), le = w, k && C) n: {
              for (x = k, f = C, a = 0, d = x; d; d = mt(d)) a++;
              for (d = 0, w = f; w; w = mt(w)) d++;
              for (; 0 < a - d; ) x = mt(x), a--;
              for (; 0 < d - a; ) f = mt(f), d--;
              for (; a--; ) {
                if (x === f || f !== null && x === f.alternate) break n;
                x = mt(x), f = mt(f);
              }
              x = null;
            }
            else x = null;
            k !== null && Ui(g, v, k, x, !1), C !== null && le !== null && Ui(g, le, C, x, !0);
          }
        }
        e: {
          if (v = p ? ht(p) : window, k = v.nodeName && v.nodeName.toLowerCase(), k === "select" || k === "input" && v.type === "file") var P = zc;
          else if (yi(v)) if (wi) P = Oc;
          else {
            P = Lc;
            var N = Tc;
          }
          else (k = v.nodeName) && k.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (P = Rc);
          if (P && (P = P(e, p))) {
            gi(g, P, t, y);
            break e;
          }
          N && N(e, v, p), e === "focusout" && (N = v._wrapperState) && N.controlled && v.type === "number" && Ll(v, "number", v.value);
        }
        switch (N = p ? ht(p) : window, e) {
          case "focusin":
            (yi(N) || N.contentEditable === "true") && (dt = N, uu = p, Zt = null);
            break;
          case "focusout":
            Zt = uu = dt = null;
            break;
          case "mousedown":
            ou = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ou = !1, Ni(g, t, y);
            break;
          case "selectionchange":
            if (Fc) break;
          case "keydown":
          case "keyup":
            Ni(g, t, y);
        }
        var z;
        if (nu) e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
        else ft ? vi(e, t) && (L = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (L = "onCompositionStart");
        L && (di && t.locale !== "ko" && (ft || L !== "onCompositionStart" ? L === "onCompositionEnd" && ft && (z = ii()) : (Rn = y, Gl = "value" in Rn ? Rn.value : Rn.textContent, ft = !0)), N = Vr(p, L), 0 < N.length && (L = new ci(L, e, null, t, y), g.push({ event: L, listeners: N }), z ? L.data = z : (z = hi(t), z !== null && (L.data = z)))), (z = _c ? Cc(e, t) : xc(e, t)) && (p = Vr(p, "onBeforeInput"), 0 < p.length && (y = new ci("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = z));
      }
      Ii(g, n);
    });
  }
  function bt(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Vr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Dt(e, t), u != null && r.unshift(bt(e, u, l)), u = Dt(e, n), u != null && r.push(bt(e, u, l))), e = e.return;
    }
    return r;
  }
  function mt(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ui(e, n, t, r, l) {
    for (var u = n._reactName, o = []; t !== null && t !== r; ) {
      var i = t, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Dt(t, u), s != null && o.unshift(bt(t, s, i))) : l || (s = Dt(t, u), s != null && o.push(bt(t, s, i)))), t = t.return;
    }
    o.length !== 0 && e.push({ event: n, listeners: o });
  }
  var Ac = /\r\n?/g, Vc = /\u0000|\uFFFD/g;
  function Ai(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ac, `
`).replace(Vc, "");
  }
  function Br(e, n, t) {
    if (n = Ai(n), Ai(e) !== n && t) throw Error(m(425));
  }
  function Hr() {
  }
  var du = null, pu = null;
  function mu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var vu = typeof setTimeout == "function" ? setTimeout : void 0, Bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Vi = typeof Promise == "function" ? Promise : void 0, Hc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vi < "u" ? function(e) {
    return Vi.resolve(null).then(e).catch(Wc);
  } : vu;
  function Wc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function hu(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Wt(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Wt(n);
  }
  function Mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function Bi(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2), dn = "__reactFiber$" + vt, er = "__reactProps$" + vt, gn = "__reactContainer$" + vt, yu = "__reactEvents$" + vt, $c = "__reactListeners$" + vt, Qc = "__reactHandles$" + vt;
  function Xn(e) {
    var n = e[dn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[gn] || t[dn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = Bi(e); e !== null; ) {
          if (t = e[dn]) return t;
          e = Bi(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function nr(e) {
    return e = e[dn] || e[gn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function ht(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Wr(e) {
    return e[er] || null;
  }
  var gu = [], yt = -1;
  function Dn(e) {
    return { current: e };
  }
  function Y(e) {
    0 > yt || (e.current = gu[yt], gu[yt] = null, yt--);
  }
  function Q(e, n) {
    yt++, gu[yt] = e.current, e.current = n;
  }
  var Fn = {}, he = Dn(Fn), Te = Dn(!1), Gn = Fn;
  function gt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in t) l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Le(e) {
    return e = e.childContextTypes, e != null;
  }
  function $r() {
    Y(Te), Y(he);
  }
  function Hi(e, n, t) {
    if (he.current !== Fn) throw Error(m(168));
    Q(he, n), Q(Te, t);
  }
  function Wi(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, $(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Qr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Fn, Gn = he.current, Q(he, e), Q(Te, Te.current), !0;
  }
  function $i(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = Wi(e, n, Gn), r.__reactInternalMemoizedMergedChildContext = e, Y(Te), Y(he), Q(he, e)) : Y(Te), Q(Te, t);
  }
  var wn = null, Kr = !1, wu = !1;
  function Qi(e) {
    wn === null ? wn = [e] : wn.push(e);
  }
  function Kc(e) {
    Kr = !0, Qi(e);
  }
  function In() {
    if (!wu && wn !== null) {
      wu = !0;
      var e = 0, n = V;
      try {
        var t = wn;
        for (V = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        wn = null, Kr = !1;
      } catch (l) {
        throw wn !== null && (wn = wn.slice(e + 1)), Yo(Bl, In), l;
      } finally {
        V = n, wu = !1;
      }
    }
    return null;
  }
  var wt = [], St = 0, Yr = null, Xr = 0, Qe = [], Ke = 0, Zn = null, Sn = 1, kn = "";
  function Jn(e, n) {
    wt[St++] = Xr, wt[St++] = Yr, Yr = e, Xr = n;
  }
  function Ki(e, n, t) {
    Qe[Ke++] = Sn, Qe[Ke++] = kn, Qe[Ke++] = Zn, Zn = e;
    var r = Sn;
    e = kn;
    var l = 32 - en(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - en(n) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Sn = 1 << 32 - en(n) + l | t << l | r, kn = u + e;
    } else Sn = 1 << u | t << l | r, kn = e;
  }
  function Su(e) {
    e.return !== null && (Jn(e, 1), Ki(e, 1, 0));
  }
  function ku(e) {
    for (; e === Yr; ) Yr = wt[--St], wt[St] = null, Xr = wt[--St], wt[St] = null;
    for (; e === Zn; ) Zn = Qe[--Ke], Qe[Ke] = null, kn = Qe[--Ke], Qe[Ke] = null, Sn = Qe[--Ke], Qe[Ke] = null;
  }
  var Ae = null, Ve = null, J = !1, tn = null;
  function Yi(e, n) {
    var t = Ze(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Xi(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = Mn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ae = e, Ve = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Zn !== null ? { id: Sn, overflow: kn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ze(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ae = e, Ve = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Eu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _u(e) {
    if (J) {
      var n = Ve;
      if (n) {
        var t = n;
        if (!Xi(e, n)) {
          if (Eu(e)) throw Error(m(418));
          n = Mn(t.nextSibling);
          var r = Ae;
          n && Xi(e, n) ? Yi(r, t) : (e.flags = e.flags & -4097 | 2, J = !1, Ae = e);
        }
      } else {
        if (Eu(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, J = !1, Ae = e;
      }
    }
  }
  function Gi(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ae = e;
  }
  function Gr(e) {
    if (e !== Ae) return !1;
    if (!J) return Gi(e), J = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !mu(e.type, e.memoizedProps)), n && (n = Ve)) {
      if (Eu(e)) throw Zi(), Error(m(418));
      for (; n; ) Yi(e, n), n = Mn(n.nextSibling);
    }
    if (Gi(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ve = Mn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = Ae ? Mn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zi() {
    for (var e = Ve; e; ) e = Mn(e.nextSibling);
  }
  function kt() {
    Ve = Ae = null, J = !1;
  }
  function Cu(e) {
    tn === null ? tn = [e] : tn.push(e);
  }
  var Yc = ve.ReactCurrentBatchConfig;
  function tr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, u = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(o) {
          var i = l.refs;
          o === null ? delete i[u] : i[u] = o;
        }, n._stringRef = u, n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function Ji(e) {
    var n = e._init;
    return n(e._payload);
  }
  function qi(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), a = a.sibling;
      return null;
    }
    function r(f, a) {
      for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
      return f;
    }
    function l(f, a) {
      return f = $n(f, a), f.index = 0, f.sibling = null, f;
    }
    function u(f, a, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6 ? (a = ho(d, f.mode, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === Ne ? y(f, a, d.props.children, w, d.key) : a !== null && (a.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ze && Ji(P) === a.type) ? (w = l(a, d.props), w.ref = tr(f, a, d), w.return = f, w) : (w = Sl(d.type, d.key, d.props, null, f.mode, w), w.ref = tr(f, a, d), w.return = f, w);
    }
    function p(f, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = yo(d, f.mode, w), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
    }
    function y(f, a, d, w, P) {
      return a === null || a.tag !== 7 ? (a = ut(d, f.mode, w, P), a.return = f, a) : (a = l(a, d), a.return = f, a);
    }
    function g(f, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = ho("" + a, f.mode, d), a.return = f, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case qe:
            return d = Sl(a.type, a.key, a.props, null, f.mode, d), d.ref = tr(f, null, a), d.return = f, d;
          case ke:
            return a = yo(a, f.mode, d), a.return = f, a;
          case ze:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Rt(a) || T(a)) return a = ut(a, f.mode, d, null), a.return = f, a;
        Zr(f, a);
      }
      return null;
    }
    function v(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return P !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            return d.key === P ? s(f, a, d, w) : null;
          case ke:
            return d.key === P ? p(f, a, d, w) : null;
          case ze:
            return P = d._init, v(
              f,
              a,
              P(d._payload),
              w
            );
        }
        if (Rt(d) || T(d)) return P !== null ? null : y(f, a, d, w, null);
        Zr(f, d);
      }
      return null;
    }
    function k(f, a, d, w, P) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return f = f.get(d) || null, i(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case qe:
            return f = f.get(w.key === null ? d : w.key) || null, s(a, f, w, P);
          case ke:
            return f = f.get(w.key === null ? d : w.key) || null, p(a, f, w, P);
          case ze:
            var N = w._init;
            return k(f, a, d, N(w._payload), P);
        }
        if (Rt(w) || T(w)) return f = f.get(d) || null, y(a, f, w, P, null);
        Zr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (var P = null, N = null, z = a, L = a = 0, fe = null; z !== null && L < d.length; L++) {
        z.index > L ? (fe = z, z = null) : fe = z.sibling;
        var U = v(f, z, d[L], w);
        if (U === null) {
          z === null && (z = fe);
          break;
        }
        e && z && U.alternate === null && n(f, z), a = u(U, a, L), N === null ? P = U : N.sibling = U, N = U, z = fe;
      }
      if (L === d.length) return t(f, z), J && Jn(f, L), P;
      if (z === null) {
        for (; L < d.length; L++) z = g(f, d[L], w), z !== null && (a = u(z, a, L), N === null ? P = z : N.sibling = z, N = z);
        return J && Jn(f, L), P;
      }
      for (z = r(f, z); L < d.length; L++) fe = k(z, f, L, d[L], w), fe !== null && (e && fe.alternate !== null && z.delete(fe.key === null ? L : fe.key), a = u(fe, a, L), N === null ? P = fe : N.sibling = fe, N = fe);
      return e && z.forEach(function(Qn) {
        return n(f, Qn);
      }), J && Jn(f, L), P;
    }
    function x(f, a, d, w) {
      var P = T(d);
      if (typeof P != "function") throw Error(m(150));
      if (d = P.call(d), d == null) throw Error(m(151));
      for (var N = P = null, z = a, L = a = 0, fe = null, U = d.next(); z !== null && !U.done; L++, U = d.next()) {
        z.index > L ? (fe = z, z = null) : fe = z.sibling;
        var Qn = v(f, z, U.value, w);
        if (Qn === null) {
          z === null && (z = fe);
          break;
        }
        e && z && Qn.alternate === null && n(f, z), a = u(Qn, a, L), N === null ? P = Qn : N.sibling = Qn, N = Qn, z = fe;
      }
      if (U.done) return t(
        f,
        z
      ), J && Jn(f, L), P;
      if (z === null) {
        for (; !U.done; L++, U = d.next()) U = g(f, U.value, w), U !== null && (a = u(U, a, L), N === null ? P = U : N.sibling = U, N = U);
        return J && Jn(f, L), P;
      }
      for (z = r(f, z); !U.done; L++, U = d.next()) U = k(z, f, L, U.value, w), U !== null && (e && U.alternate !== null && z.delete(U.key === null ? L : U.key), a = u(U, a, L), N === null ? P = U : N.sibling = U, N = U);
      return e && z.forEach(function(Nf) {
        return n(f, Nf);
      }), J && Jn(f, L), P;
    }
    function le(f, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Ne && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case qe:
            e: {
              for (var P = d.key, N = a; N !== null; ) {
                if (N.key === P) {
                  if (P = d.type, P === Ne) {
                    if (N.tag === 7) {
                      t(f, N.sibling), a = l(N, d.props.children), a.return = f, f = a;
                      break e;
                    }
                  } else if (N.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ze && Ji(P) === N.type) {
                    t(f, N.sibling), a = l(N, d.props), a.ref = tr(f, N, d), a.return = f, f = a;
                    break e;
                  }
                  t(f, N);
                  break;
                } else n(f, N);
                N = N.sibling;
              }
              d.type === Ne ? (a = ut(d.props.children, f.mode, w, d.key), a.return = f, f = a) : (w = Sl(d.type, d.key, d.props, null, f.mode, w), w.ref = tr(f, a, d), w.return = f, f = w);
            }
            return o(f);
          case ke:
            e: {
              for (N = d.key; a !== null; ) {
                if (a.key === N) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
                else n(f, a);
                a = a.sibling;
              }
              a = yo(d, f.mode, w), a.return = f, f = a;
            }
            return o(f);
          case ze:
            return N = d._init, le(f, a, N(d._payload), w);
        }
        if (Rt(d)) return C(f, a, d, w);
        if (T(d)) return x(f, a, d, w);
        Zr(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = ho(d, f.mode, w), a.return = f, f = a), o(f)) : t(f, a);
    }
    return le;
  }
  var Et = qi(!0), bi = qi(!1), Jr = Dn(null), qr = null, _t = null, xu = null;
  function Pu() {
    xu = _t = qr = null;
  }
  function Nu(e) {
    var n = Jr.current;
    Y(Jr), e._currentValue = n;
  }
  function zu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Ct(e, n) {
    qr = e, xu = _t = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Re = !0), e.firstContext = null);
  }
  function Ye(e) {
    var n = e._currentValue;
    if (xu !== e) if (e = { context: e, memoizedValue: n, next: null }, _t === null) {
      if (qr === null) throw Error(m(308));
      _t = e, qr.dependencies = { lanes: 0, firstContext: e };
    } else _t = _t.next = e;
    return n;
  }
  var qn = null;
  function Tu(e) {
    qn === null ? qn = [e] : qn.push(e);
  }
  function es(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Tu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, En(e, r);
  }
  function En(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var jn = !1;
  function Lu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ns(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function _n(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function Un(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, F & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, En(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Tu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, En(e, t);
  }
  function br(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, $l(e, t);
    }
  }
  function ts(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          u === null ? l = u = o : u = u.next = o, t = t.next;
        } while (t !== null);
        u === null ? l = u = n : u = u.next = n;
      } else l = u = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function el(e, n, t, r) {
    var l = e.updateQueue;
    jn = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, o === null ? u = p : o.next = p, o = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== o && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      o = 0, y = p = s = null, i = u;
      do {
        var v = i.lane, k = i.eventTime;
        if ((r & v) === v) {
          y !== null && (y = y.next = {
            eventTime: k,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var C = e, x = i;
            switch (v = n, k = t, x.tag) {
              case 1:
                if (C = x.payload, typeof C == "function") {
                  g = C.call(k, g, v);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = x.payload, v = typeof C == "function" ? C.call(k, g, v) : C, v == null) break e;
                g = _({}, g, v);
                break e;
              case 2:
                jn = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [i] : v.push(i));
        } else k = { eventTime: k, lane: v, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = k, s = g) : y = y.next = k, o |= v;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          o |= l.lane, l = l.next;
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      nt |= o, e.lanes = o, e.memoizedState = g;
    }
  }
  function rs(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var rr = {}, pn = Dn(rr), lr = Dn(rr), ur = Dn(rr);
  function bn(e) {
    if (e === rr) throw Error(m(174));
    return e;
  }
  function Ru(e, n) {
    switch (Q(ur, n), Q(lr, e), Q(pn, rr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ol(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ol(n, e);
    }
    Y(pn), Q(pn, n);
  }
  function xt() {
    Y(pn), Y(lr), Y(ur);
  }
  function ls(e) {
    bn(ur.current);
    var n = bn(pn.current), t = Ol(n, e.type);
    n !== t && (Q(lr, e), Q(pn, t));
  }
  function Ou(e) {
    lr.current === e && (Y(pn), Y(lr));
  }
  var b = Dn(0);
  function nl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Mu = [];
  function Du() {
    for (var e = 0; e < Mu.length; e++) Mu[e]._workInProgressVersionPrimary = null;
    Mu.length = 0;
  }
  var tl = ve.ReactCurrentDispatcher, Fu = ve.ReactCurrentBatchConfig, et = 0, ee = null, oe = null, ae = null, rl = !1, or = !1, ir = 0, Xc = 0;
  function ye() {
    throw Error(m(321));
  }
  function Iu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!nn(e[t], n[t])) return !1;
    return !0;
  }
  function ju(e, n, t, r, l, u) {
    if (et = u, ee = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, tl.current = e === null || e.memoizedState === null ? qc : bc, e = t(r, l), or) {
      u = 0;
      do {
        if (or = !1, ir = 0, 25 <= u) throw Error(m(301));
        u += 1, ae = oe = null, n.updateQueue = null, tl.current = ef, e = t(r, l);
      } while (or);
    }
    if (tl.current = ol, n = oe !== null && oe.next !== null, et = 0, ae = oe = ee = null, rl = !1, n) throw Error(m(300));
    return e;
  }
  function Uu() {
    var e = ir !== 0;
    return ir = 0, e;
  }
  function mn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ae === null ? ee.memoizedState = ae = e : ae = ae.next = e, ae;
  }
  function Xe() {
    if (oe === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = oe.next;
    var n = ae === null ? ee.memoizedState : ae.next;
    if (n !== null) ae = n, oe = e;
    else {
      if (e === null) throw Error(m(310));
      oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ae === null ? ee.memoizedState = ae = e : ae = ae.next = e;
    }
    return ae;
  }
  function sr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Au(e) {
    var n = Xe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = oe, l = r.baseQueue, u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, t.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var i = o = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((et & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, o = r) : s = s.next = g, ee.lanes |= y, nt |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? o = r : s.next = i, nn(r, n.memoizedState) || (Re = !0), n.memoizedState = r, n.baseState = o, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ee.lanes |= u, nt |= u, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Vu(e) {
    var n = Xe(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      nn(u, n.memoizedState) || (Re = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
    }
    return [u, r];
  }
  function us() {
  }
  function os(e, n) {
    var t = ee, r = Xe(), l = n(), u = !nn(r.memoizedState, l);
    if (u && (r.memoizedState = l, Re = !0), r = r.queue, Bu(as.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || ae !== null && ae.memoizedState.tag & 1) {
      if (t.flags |= 2048, ar(9, ss.bind(null, t, r, l, n), void 0, null), ce === null) throw Error(m(349));
      et & 30 || is(t, n, l);
    }
    return l;
  }
  function is(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function ss(e, n, t, r) {
    n.value = t, n.getSnapshot = r, cs(n) && fs(e);
  }
  function as(e, n, t) {
    return t(function() {
      cs(n) && fs(e);
    });
  }
  function cs(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !nn(e, t);
    } catch {
      return !0;
    }
  }
  function fs(e) {
    var n = En(e, 1);
    n !== null && on(n, e, 1, -1);
  }
  function ds(e) {
    var n = mn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: sr, lastRenderedState: e }, n.queue = e, e = e.dispatch = Jc.bind(null, ee, e), [n.memoizedState, e];
  }
  function ar(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ps() {
    return Xe().memoizedState;
  }
  function ll(e, n, t, r) {
    var l = mn();
    ee.flags |= e, l.memoizedState = ar(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ul(e, n, t, r) {
    var l = Xe();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (oe !== null) {
      var o = oe.memoizedState;
      if (u = o.destroy, r !== null && Iu(r, o.deps)) {
        l.memoizedState = ar(n, t, u, r);
        return;
      }
    }
    ee.flags |= e, l.memoizedState = ar(1 | n, t, u, r);
  }
  function ms(e, n) {
    return ll(8390656, 8, e, n);
  }
  function Bu(e, n) {
    return ul(2048, 8, e, n);
  }
  function vs(e, n) {
    return ul(4, 2, e, n);
  }
  function hs(e, n) {
    return ul(4, 4, e, n);
  }
  function ys(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function gs(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(4, 4, ys.bind(null, n, e), t);
  }
  function Hu() {
  }
  function ws(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Iu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Ss(e, n) {
    var t = Xe();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Iu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function ks(e, n, t) {
    return et & 21 ? (nn(t, n) || (t = Jo(), ee.lanes |= t, nt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Re = !0), e.memoizedState = t);
  }
  function Gc(e, n) {
    var t = V;
    V = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Fu.transition;
    Fu.transition = {};
    try {
      e(!1), n();
    } finally {
      V = t, Fu.transition = r;
    }
  }
  function Es() {
    return Xe().memoizedState;
  }
  function Zc(e, n, t) {
    var r = Hn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, _s(e)) Cs(n, t);
    else if (t = es(e, n, t, r), t !== null) {
      var l = _e();
      on(t, e, r, l), xs(t, n, r);
    }
  }
  function Jc(e, n, t) {
    var r = Hn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (_s(e)) Cs(n, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null)) try {
        var o = n.lastRenderedState, i = u(o, t);
        if (l.hasEagerState = !0, l.eagerState = i, nn(i, o)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Tu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = es(e, n, l, r), t !== null && (l = _e(), on(t, e, r, l), xs(t, n, r));
    }
  }
  function _s(e) {
    var n = e.alternate;
    return e === ee || n !== null && n === ee;
  }
  function Cs(e, n) {
    or = rl = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function xs(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, $l(e, t);
    }
  }
  var ol = { readContext: Ye, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, qc = { readContext: Ye, useCallback: function(e, n) {
    return mn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Ye, useEffect: ms, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ll(
      4194308,
      4,
      ys.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ll(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ll(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = mn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = mn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Zc.bind(null, ee, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = mn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ds, useDebugValue: Hu, useDeferredValue: function(e) {
    return mn().memoizedState = e;
  }, useTransition: function() {
    var e = ds(!1), n = e[0];
    return e = Gc.bind(null, e[1]), mn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ee, l = mn();
    if (J) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), ce === null) throw Error(m(349));
      et & 30 || is(r, n, t);
    }
    l.memoizedState = t;
    var u = { value: t, getSnapshot: n };
    return l.queue = u, ms(as.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, ar(9, ss.bind(null, r, u, t, n), void 0, null), t;
  }, useId: function() {
    var e = mn(), n = ce.identifierPrefix;
    if (J) {
      var t = kn, r = Sn;
      t = (r & ~(1 << 32 - en(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ir++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = Xc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, bc = {
    readContext: Ye,
    useCallback: ws,
    useContext: Ye,
    useEffect: Bu,
    useImperativeHandle: gs,
    useInsertionEffect: vs,
    useLayoutEffect: hs,
    useMemo: Ss,
    useReducer: Au,
    useRef: ps,
    useState: function() {
      return Au(sr);
    },
    useDebugValue: Hu,
    useDeferredValue: function(e) {
      var n = Xe();
      return ks(n, oe.memoizedState, e);
    },
    useTransition: function() {
      var e = Au(sr)[0], n = Xe().memoizedState;
      return [e, n];
    },
    useMutableSource: us,
    useSyncExternalStore: os,
    useId: Es,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Ye, useCallback: ws, useContext: Ye, useEffect: Bu, useImperativeHandle: gs, useInsertionEffect: vs, useLayoutEffect: hs, useMemo: Ss, useReducer: Vu, useRef: ps, useState: function() {
    return Vu(sr);
  }, useDebugValue: Hu, useDeferredValue: function(e) {
    var n = Xe();
    return oe === null ? n.memoizedState = e : ks(n, oe.memoizedState, e);
  }, useTransition: function() {
    var e = Vu(sr)[0], n = Xe().memoizedState;
    return [e, n];
  }, useMutableSource: us, useSyncExternalStore: os, useId: Es, unstable_isNewReconciler: !1 };
  function rn(e, n) {
    if (e && e.defaultProps) {
      n = _({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Wu(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : _({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var il = { isMounted: function(e) {
    return (e = e._reactInternals) ? Yn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = _e(), l = Hn(e), u = _n(r, l);
    u.payload = n, t != null && (u.callback = t), n = Un(e, u, l), n !== null && (on(n, e, l, r), br(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = _e(), l = Hn(e), u = _n(r, l);
    u.tag = 1, u.payload = n, t != null && (u.callback = t), n = Un(e, u, l), n !== null && (on(n, e, l, r), br(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = _e(), r = Hn(e), l = _n(t, r);
    l.tag = 2, n != null && (l.callback = n), n = Un(e, l, r), n !== null && (on(n, e, r, t), br(n, e, r));
  } };
  function Ps(e, n, t, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : n.prototype && n.prototype.isPureReactComponent ? !Gt(t, r) || !Gt(l, u) : !0;
  }
  function Ns(e, n, t) {
    var r = !1, l = Fn, u = n.contextType;
    return typeof u == "object" && u !== null ? u = Ye(u) : (l = Le(n) ? Gn : he.current, r = n.contextTypes, u = (r = r != null) ? gt(e, l) : Fn), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = il, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
  }
  function zs(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && il.enqueueReplaceState(n, n.state, null);
  }
  function $u(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Lu(e);
    var u = n.contextType;
    typeof u == "object" && u !== null ? l.context = Ye(u) : (u = Le(n) ? Gn : he.current, l.context = gt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Wu(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && il.enqueueReplaceState(l, l.state, null), el(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pt(e, n) {
    try {
      var t = "", r = n;
      do
        t += I(r), r = r.return;
      while (r);
      var l = t;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Qu(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Ku(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var nf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ts(e, n, t) {
    t = _n(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      ml || (ml = !0, io = r), Ku(e, n);
    }, t;
  }
  function Ls(e, n, t) {
    t = _n(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Ku(e, n);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      Ku(e, n), typeof r != "function" && (Vn === null ? Vn = /* @__PURE__ */ new Set([this]) : Vn.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, { componentStack: o !== null ? o : "" });
    }), t;
  }
  function Rs(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new nf();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = hf.bind(null, e, n, t), n.then(e, e));
  }
  function Os(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ms(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = _n(-1, 1), n.tag = 2, Un(t, n, 1))), t.lanes |= 1), e);
  }
  var tf = ve.ReactCurrentOwner, Re = !1;
  function Ee(e, n, t, r) {
    n.child = e === null ? bi(n, null, t, r) : Et(n, e.child, t, r);
  }
  function Ds(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return Ct(n, l), r = ju(e, n, t, r, u, l), t = Uu(), e !== null && !Re ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (J && t && Su(n), n.flags |= 1, Ee(e, n, r, l), n.child);
  }
  function Fs(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !vo(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, Is(e, n, u, r, l)) : (e = Sl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var o = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Gt, t(o, r) && e.ref === n.ref) return Cn(e, n, l);
    }
    return n.flags |= 1, e = $n(u, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Is(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Gt(u, r) && e.ref === n.ref) if (Re = !1, n.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (Re = !0);
      else return n.lanes = e.lanes, Cn(e, n, l);
    }
    return Yu(e, n, t, r, l);
  }
  function js(e, n, t) {
    var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(zt, Be), Be |= t;
    else {
      if (!(t & 1073741824)) return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, Q(zt, Be), Be |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, Q(zt, Be), Be |= r;
    }
    else u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, Q(zt, Be), Be |= r;
    return Ee(e, n, l, t), n.child;
  }
  function Us(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Yu(e, n, t, r, l) {
    var u = Le(t) ? Gn : he.current;
    return u = gt(n, u), Ct(n, l), t = ju(e, n, t, r, u, l), r = Uu(), e !== null && !Re ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (J && r && Su(n), n.flags |= 1, Ee(e, n, t, l), n.child);
  }
  function As(e, n, t, r, l) {
    if (Le(t)) {
      var u = !0;
      Qr(n);
    } else u = !1;
    if (Ct(n, l), n.stateNode === null) al(e, n), Ns(n, t, r), $u(n, t, r, l), r = !0;
    else if (e === null) {
      var o = n.stateNode, i = n.memoizedProps;
      o.props = i;
      var s = o.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Ye(p) : (p = Le(t) ? Gn : he.current, p = gt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      g || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== p) && zs(n, o, r, p), jn = !1;
      var v = n.memoizedState;
      o.state = v, el(n, r, o, l), s = n.memoizedState, i !== r || v !== s || Te.current || jn ? (typeof y == "function" && (Wu(n, t, y, r), s = n.memoizedState), (i = jn || Ps(n, t, i, r, v, s, p)) ? (g || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), o.props = r, o.state = s, o.context = p, r = i) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      o = n.stateNode, ns(e, n), i = n.memoizedProps, p = n.type === n.elementType ? i : rn(n.type, i), o.props = p, g = n.pendingProps, v = o.context, s = t.contextType, typeof s == "object" && s !== null ? s = Ye(s) : (s = Le(t) ? Gn : he.current, s = gt(n, s));
      var k = t.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== g || v !== s) && zs(n, o, r, s), jn = !1, v = n.memoizedState, o.state = v, el(n, r, o, l);
      var C = n.memoizedState;
      i !== g || v !== C || Te.current || jn ? (typeof k == "function" && (Wu(n, t, k, r), C = n.memoizedState), (p = jn || Ps(n, t, p, r, v, C, s) || !1) ? (y || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, C, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, C, s)), typeof o.componentDidUpdate == "function" && (n.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = C), o.props = r, o.state = C, o.context = s, r = p) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Xu(e, n, t, r, u, l);
  }
  function Xu(e, n, t, r, l, u) {
    Us(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o) return l && $i(n, t, !1), Cn(e, n, u);
    r = n.stateNode, tf.current = n;
    var i = o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && o ? (n.child = Et(n, e.child, null, u), n.child = Et(n, null, i, u)) : Ee(e, n, i, u), n.memoizedState = r.state, l && $i(n, t, !0), n.child;
  }
  function Vs(e) {
    var n = e.stateNode;
    n.pendingContext ? Hi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Hi(e, n.context, !1), Ru(e, n.containerInfo);
  }
  function Bs(e, n, t, r, l) {
    return kt(), Cu(l), n.flags |= 256, Ee(e, n, t, r), n.child;
  }
  var Gu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Hs(e, n, t) {
    var r = n.pendingProps, l = b.current, u = !1, o = (n.flags & 128) !== 0, i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Q(b, l & 1), e === null)
      return _u(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = kl(o, r, 0, null), e = ut(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = Zu(t), n.memoizedState = Gu, e) : Ju(n, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return rf(e, n, o, r, i, l, t);
    if (u) {
      u = r.fallback, o = n.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(o & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = $n(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = $n(i, u) : (u = ut(u, o, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, o = e.child.memoizedState, o = o === null ? Zu(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~t, n.memoizedState = Gu, r;
    }
    return u = e.child, e = u.sibling, r = $n(u, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function Ju(e, n) {
    return n = kl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function sl(e, n, t, r) {
    return r !== null && Cu(r), Et(n, e.child, null, t), e = Ju(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function rf(e, n, t, r, l, u, o) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Qu(Error(m(422))), sl(e, n, o, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = kl({ mode: "visible", children: r.children }, l, 0, null), u = ut(u, l, o, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, n.mode & 1 && Et(n, e.child, null, o), n.child.memoizedState = Zu(o), n.memoizedState = Gu, u);
    if (!(n.mode & 1)) return sl(e, n, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, u = Error(m(419)), r = Qu(u, r, void 0), sl(e, n, o, r);
    }
    if (i = (o & e.childLanes) !== 0, Re || i) {
      if (r = ce, r !== null) {
        switch (o & -o) {
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
        l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, En(e, l), on(r, e, l, -1));
      }
      return mo(), r = Qu(Error(m(421))), sl(e, n, o, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = yf.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, Ve = Mn(l.nextSibling), Ae = n, J = !0, tn = null, e !== null && (Qe[Ke++] = Sn, Qe[Ke++] = kn, Qe[Ke++] = Zn, Sn = e.id, kn = e.overflow, Zn = n), n = Ju(n, r.children), n.flags |= 4096, n);
  }
  function Ws(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), zu(e.return, n, t);
  }
  function qu(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
  }
  function $s(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, u = r.tail;
    if (Ee(e, n, r.children, t), r = b.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ws(e, t, n);
        else if (e.tag === 19) Ws(e, t, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Q(b, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && nl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), qu(n, !1, l, t, u);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        qu(n, !0, t, null, u);
        break;
      case "together":
        qu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function al(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Cn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), nt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = $n(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = $n(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function lf(e, n, t) {
    switch (n.tag) {
      case 3:
        Vs(n), kt();
        break;
      case 5:
        ls(n);
        break;
      case 1:
        Le(n.type) && Qr(n);
        break;
      case 4:
        Ru(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        Q(Jr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (Q(b, b.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Hs(e, n, t) : (Q(b, b.current & 1), e = Cn(e, n, t), e !== null ? e.sibling : null);
        Q(b, b.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return $s(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Q(b, b.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, js(e, n, t);
    }
    return Cn(e, n, t);
  }
  var Qs, bu, Ks, Ys;
  Qs = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, bu = function() {
  }, Ks = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, bn(pn.current);
      var u = null;
      switch (t) {
        case "input":
          l = zl(e, l), r = zl(e, r), u = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Rl(e, l), r = Rl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Ml(t, r);
      var o;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var i = l[p];
        for (o in i) i.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (xe.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l?.[p], r.hasOwnProperty(p) && s !== i && (s != null || i != null)) if (p === "style") if (i) {
          for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
          for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (t || (t = {}), t[o] = s[o]);
        } else t || (u || (u = []), u.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (xe.hasOwnProperty(p) ? (s != null && p === "onScroll" && K("scroll", e), u || i === s || (u = [])) : (u = u || []).push(p, s));
      }
      t && (u = u || []).push("style", t);
      var p = u;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Ys = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function cr(e, n) {
    if (!J) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function ge(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function uf(e, n, t) {
    var r = n.pendingProps;
    switch (ku(n), n.tag) {
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
        return ge(n), null;
      case 1:
        return Le(n.type) && $r(), ge(n), null;
      case 3:
        return r = n.stateNode, xt(), Y(Te), Y(he), Du(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, tn !== null && (co(tn), tn = null))), bu(e, n), ge(n), null;
      case 5:
        Ou(n);
        var l = bn(ur.current);
        if (t = n.type, e !== null && n.stateNode != null) Ks(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return ge(n), null;
          }
          if (e = bn(pn.current), Gr(n)) {
            r = n.stateNode, t = n.type;
            var u = n.memoizedProps;
            switch (r[dn] = n, r[er] = u, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                K("cancel", r), K("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Jt.length; l++) K(Jt[l], r);
                break;
              case "source":
                K("error", r);
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  r
                ), K("load", r);
                break;
              case "details":
                K("toggle", r);
                break;
              case "input":
                No(r, u), K("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, K("invalid", r);
                break;
              case "textarea":
                Lo(r, u), K("invalid", r);
            }
            Ml(t, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && Br(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : xe.hasOwnProperty(o) && i != null && o === "onScroll" && K("scroll", r);
            }
            switch (t) {
              case "input":
                gr(r), To(r, u, !0);
                break;
              case "textarea":
                gr(r), Oo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Hr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mo(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(t, { is: r.is }) : (e = o.createElement(t), t === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[dn] = n, e[er] = r, Qs(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (o = Dl(t, r), t) {
                case "dialog":
                  K("cancel", e), K("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  K("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Jt.length; l++) K(Jt[l], e);
                  l = r;
                  break;
                case "source":
                  K("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  K(
                    "error",
                    e
                  ), K("load", e), l = r;
                  break;
                case "details":
                  K("toggle", e), l = r;
                  break;
                case "input":
                  No(e, r), l = zl(e, r), K("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), K("invalid", e);
                  break;
                case "textarea":
                  Lo(e, r), l = Rl(e, r), K("invalid", e);
                  break;
                default:
                  l = r;
              }
              Ml(t, l), i = l;
              for (u in i) if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style" ? Io(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Do(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Ot(e, s) : typeof s == "number" && Ot(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (xe.hasOwnProperty(u) ? s != null && u === "onScroll" && K("scroll", e) : s != null && Je(e, u, s, o));
              }
              switch (t) {
                case "input":
                  gr(e), To(e, r, !1);
                  break;
                case "textarea":
                  gr(e), Oo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + A(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? ot(e, !!r.multiple, u, !1) : r.defaultValue != null && ot(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (t) {
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
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return ge(n), null;
      case 6:
        if (e && n.stateNode != null) Ys(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = bn(ur.current), bn(pn.current), Gr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[dn] = n, (u = r.nodeValue !== t) && (e = Ae, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            u && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[dn] = n, n.stateNode = r;
        }
        return ge(n), null;
      case 13:
        if (Y(b), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (J && Ve !== null && n.mode & 1 && !(n.flags & 128)) Zi(), kt(), n.flags |= 98560, u = !1;
          else if (u = Gr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[dn] = n;
            } else kt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ge(n), u = !1;
          } else tn !== null && (co(tn), tn = null), u = !0;
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || b.current & 1 ? ie === 0 && (ie = 3) : mo())), n.updateQueue !== null && (n.flags |= 4), ge(n), null);
      case 4:
        return xt(), bu(e, n), e === null && qt(n.stateNode.containerInfo), ge(n), null;
      case 10:
        return Nu(n.type._context), ge(n), null;
      case 17:
        return Le(n.type) && $r(), ge(n), null;
      case 19:
        if (Y(b), u = n.memoizedState, u === null) return ge(n), null;
        if (r = (n.flags & 128) !== 0, o = u.rendering, o === null) if (r) cr(u, !1);
        else {
          if (ie !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (o = nl(e), o !== null) {
              for (n.flags |= 128, cr(u, !1), r = o.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) u = t, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return Q(b, b.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          u.tail !== null && re() > Tt && (n.flags |= 128, r = !0, cr(u, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(o), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), cr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !J) return ge(n), null;
          } else 2 * re() - u.renderingStartTime > Tt && t !== 1073741824 && (n.flags |= 128, r = !0, cr(u, !1), n.lanes = 4194304);
          u.isBackwards ? (o.sibling = n.child, n.child = o) : (t = u.last, t !== null ? t.sibling = o : n.child = o, u.last = o);
        }
        return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = re(), n.sibling = null, t = b.current, Q(b, r ? t & 1 | 2 : t & 1), n) : (ge(n), null);
      case 22:
      case 23:
        return po(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Be & 1073741824 && (ge(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ge(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function of(e, n) {
    switch (ku(n), n.tag) {
      case 1:
        return Le(n.type) && $r(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return xt(), Y(Te), Y(he), Du(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Ou(n), null;
      case 13:
        if (Y(b), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          kt();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return Y(b), null;
      case 4:
        return xt(), null;
      case 10:
        return Nu(n.type._context), null;
      case 22:
      case 23:
        return po(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var cl = !1, we = !1, sf = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function Nt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      te(e, n, r);
    }
    else t.current = null;
  }
  function eo(e, n, t) {
    try {
      t();
    } catch (r) {
      te(e, n, r);
    }
  }
  var Xs = !1;
  function af(e, n) {
    if (du = Lr, e = Pi(), lu(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, u.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0, i = -1, s = -1, p = 0, y = 0, g = e, v = null;
          n: for (; ; ) {
            for (var k; g !== t || l !== 0 && g.nodeType !== 3 || (i = o + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = o + r), g.nodeType === 3 && (o += g.nodeValue.length), (k = g.firstChild) !== null; )
              v = g, g = k;
            for (; ; ) {
              if (g === e) break n;
              if (v === t && ++p === l && (i = o), v === u && ++y === r && (s = o), (k = g.nextSibling) !== null) break;
              g = v, v = g.parentNode;
            }
            g = k;
          }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (pu = { focusedElem: e, selectionRange: t }, Lr = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
    else for (; E !== null; ) {
      n = E;
      try {
        var C = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (C !== null) {
              var x = C.memoizedProps, le = C.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? x : rn(n.type, x), le);
              f.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = n.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (w) {
        te(n, n.return, w);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, E = e;
        break;
      }
      E = n.return;
    }
    return C = Xs, Xs = !1, C;
  }
  function fr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && eo(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function fl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function no(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Gs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Gs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[dn], delete n[er], delete n[yu], delete n[$c], delete n[Qc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Zs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Js(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function to(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null)) for (to(e, n, t), e = e.sibling; e !== null; ) to(e, n, t), e = e.sibling;
  }
  function ro(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (ro(e, n, t), e = e.sibling; e !== null; ) ro(e, n, t), e = e.sibling;
  }
  var de = null, ln = !1;
  function An(e, n, t) {
    for (t = t.child; t !== null; ) qs(e, n, t), t = t.sibling;
  }
  function qs(e, n, t) {
    if (fn && typeof fn.onCommitFiberUnmount == "function") try {
      fn.onCommitFiberUnmount(Cr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        we || Nt(t, n);
      case 6:
        var r = de, l = ln;
        de = null, An(e, n, t), de = r, ln = l, de !== null && (ln ? (e = de, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : de.removeChild(t.stateNode));
        break;
      case 18:
        de !== null && (ln ? (e = de, t = t.stateNode, e.nodeType === 8 ? hu(e.parentNode, t) : e.nodeType === 1 && hu(e, t), Wt(e)) : hu(de, t.stateNode));
        break;
      case 4:
        r = de, l = ln, de = t.stateNode.containerInfo, ln = !0, An(e, n, t), de = r, ln = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!we && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && (u & 2 || u & 4) && eo(t, n, o), l = l.next;
          } while (l !== r);
        }
        An(e, n, t);
        break;
      case 1:
        if (!we && (Nt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (i) {
          te(t, n, i);
        }
        An(e, n, t);
        break;
      case 21:
        An(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (we = (r = we) || t.memoizedState !== null, An(e, n, t), we = r) : An(e, n, t);
        break;
      default:
        An(e, n, t);
    }
  }
  function bs(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new sf()), n.forEach(function(r) {
        var l = gf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function un(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var u = e, o = n, i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              de = i.stateNode, ln = !1;
              break e;
            case 3:
              de = i.stateNode.containerInfo, ln = !0;
              break e;
            case 4:
              de = i.stateNode.containerInfo, ln = !0;
              break e;
          }
          i = i.return;
        }
        if (de === null) throw Error(m(160));
        qs(u, o, l), de = null, ln = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        te(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) ea(n, e), n = n.sibling;
  }
  function ea(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(n, e), vn(e), r & 4) {
          try {
            fr(3, e, e.return), fl(3, e);
          } catch (x) {
            te(e, e.return, x);
          }
          try {
            fr(5, e, e.return);
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 1:
        un(n, e), vn(e), r & 512 && t !== null && Nt(t, t.return);
        break;
      case 5:
        if (un(n, e), vn(e), r & 512 && t !== null && Nt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Ot(l, "");
          } catch (x) {
            te(e, e.return, x);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = t !== null ? t.memoizedProps : u, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            i === "input" && u.type === "radio" && u.name != null && zo(l, u), Dl(i, o);
            var p = Dl(i, u);
            for (o = 0; o < s.length; o += 2) {
              var y = s[o], g = s[o + 1];
              y === "style" ? Io(l, g) : y === "dangerouslySetInnerHTML" ? Do(l, g) : y === "children" ? Ot(l, g) : Je(l, y, g, p);
            }
            switch (i) {
              case "input":
                Tl(l, u);
                break;
              case "textarea":
                Ro(l, u);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var k = u.value;
                k != null ? ot(l, !!u.multiple, k, !1) : v !== !!u.multiple && (u.defaultValue != null ? ot(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : ot(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[er] = u;
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 6:
        if (un(n, e), vn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (x) {
            te(e, e.return, x);
          }
        }
        break;
      case 3:
        if (un(n, e), vn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Wt(n.containerInfo);
        } catch (x) {
          te(e, e.return, x);
        }
        break;
      case 4:
        un(n, e), vn(e);
        break;
      case 13:
        un(n, e), vn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (oo = re())), r & 4 && bs(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (we = (p = we) || y, un(n, e), we = p) : un(n, e), vn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (E = e, y = e.child; y !== null; ) {
            for (g = E = y; E !== null; ) {
              switch (v = E, k = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fr(4, v, v.return);
                  break;
                case 1:
                  Nt(v, v.return);
                  var C = v.stateNode;
                  if (typeof C.componentWillUnmount == "function") {
                    r = v, t = v.return;
                    try {
                      n = r, C.props = n.memoizedProps, C.state = n.memoizedState, C.componentWillUnmount();
                    } catch (x) {
                      te(r, t, x);
                    }
                  }
                  break;
                case 5:
                  Nt(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    ra(g);
                    continue;
                  }
              }
              k !== null ? (k.return = v, E = k) : ra(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Fo("display", o));
                } catch (x) {
                  te(e, e.return, x);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (x) {
                te(e, e.return, x);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        un(n, e), vn(e), r & 4 && bs(e);
        break;
      case 21:
        break;
      default:
        un(
          n,
          e
        ), vn(e);
    }
  }
  function vn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Zs(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Ot(l, ""), r.flags &= -33);
            var u = Js(e);
            ro(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, i = Js(e);
            to(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        te(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function cf(e, n, t) {
    E = e, na(e);
  }
  function na(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || cl;
        if (!o) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || we;
          i = cl;
          var p = we;
          if (cl = o, (we = s) && !p) for (E = l; E !== null; ) o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? la(l) : s !== null ? (s.return = o, E = s) : la(l);
          for (; u !== null; ) E = u, na(u), u = u.sibling;
          E = l, cl = i, we = p;
        }
        ta(e);
      } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, E = u) : ta(e);
    }
  }
  function ta(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              we || fl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !we) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : rn(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = n.updateQueue;
              u !== null && rs(n, u, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                rs(n, o, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
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
              if (n.memoizedState === null) {
                var p = n.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && Wt(g);
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
              throw Error(m(163));
          }
          we || n.flags & 512 && no(n);
        } catch (v) {
          te(n, n.return, v);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ra(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function la(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              fl(4, n);
            } catch (s) {
              te(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                te(n, l, s);
              }
            }
            var u = n.return;
            try {
              no(n);
            } catch (s) {
              te(n, u, s);
            }
            break;
          case 5:
            var o = n.return;
            try {
              no(n);
            } catch (s) {
              te(n, o, s);
            }
        }
      } catch (s) {
        te(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return, E = i;
        break;
      }
      E = n.return;
    }
  }
  var ff = Math.ceil, dl = ve.ReactCurrentDispatcher, lo = ve.ReactCurrentOwner, Ge = ve.ReactCurrentBatchConfig, F = 0, ce = null, ue = null, pe = 0, Be = 0, zt = Dn(0), ie = 0, dr = null, nt = 0, pl = 0, uo = 0, pr = null, Oe = null, oo = 0, Tt = 1 / 0, xn = null, ml = !1, io = null, Vn = null, vl = !1, Bn = null, hl = 0, mr = 0, so = null, yl = -1, gl = 0;
  function _e() {
    return F & 6 ? re() : yl !== -1 ? yl : yl = re();
  }
  function Hn(e) {
    return e.mode & 1 ? F & 2 && pe !== 0 ? pe & -pe : Yc.transition !== null ? (gl === 0 && (gl = Jo()), gl) : (e = V, e !== 0 || (e = window.event, e = e === void 0 ? 16 : oi(e.type)), e) : 1;
  }
  function on(e, n, t, r) {
    if (50 < mr) throw mr = 0, so = null, Error(m(185));
    Ut(e, t, r), (!(F & 2) || e !== ce) && (e === ce && (!(F & 2) && (pl |= t), ie === 4 && Wn(e, pe)), Me(e, r), t === 1 && F === 0 && !(n.mode & 1) && (Tt = re() + 500, Kr && In()));
  }
  function Me(e, n) {
    var t = e.callbackNode;
    Ya(e, n);
    var r = Nr(e, e === ce ? pe : 0);
    if (r === 0) t !== null && Xo(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Xo(t), n === 1) e.tag === 0 ? Kc(oa.bind(null, e)) : Qi(oa.bind(null, e)), Hc(function() {
        !(F & 6) && In();
      }), t = null;
      else {
        switch (qo(r)) {
          case 1:
            t = Bl;
            break;
          case 4:
            t = Go;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = Zo;
            break;
          default:
            t = _r;
        }
        t = ma(t, ua.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function ua(e, n) {
    if (yl = -1, gl = 0, F & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (Lt() && e.callbackNode !== t) return null;
    var r = Nr(e, e === ce ? pe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = wl(e, r);
    else {
      n = r;
      var l = F;
      F |= 2;
      var u = sa();
      (ce !== e || pe !== n) && (xn = null, Tt = re() + 500, rt(e, n));
      do
        try {
          mf();
          break;
        } catch (i) {
          ia(e, i);
        }
      while (!0);
      Pu(), dl.current = u, F = l, ue !== null ? n = 0 : (ce = null, pe = 0, n = ie);
    }
    if (n !== 0) {
      if (n === 2 && (l = Hl(e), l !== 0 && (r = l, n = ao(e, l))), n === 1) throw t = dr, rt(e, 0), Wn(e, r), Me(e, re()), t;
      if (n === 6) Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !df(l) && (n = wl(e, r), n === 2 && (u = Hl(e), u !== 0 && (r = u, n = ao(e, u))), n === 1)) throw t = dr, rt(e, 0), Wn(e, r), Me(e, re()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            lt(e, Oe, xn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = oo + 500 - re(), 10 < n)) {
              if (Nr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                _e(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = vu(lt.bind(null, e, Oe, xn), n);
              break;
            }
            lt(e, Oe, xn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - en(r);
              u = 1 << o, o = n[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ff(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = vu(lt.bind(null, e, Oe, xn), r);
              break;
            }
            lt(e, Oe, xn);
            break;
          case 5:
            lt(e, Oe, xn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Me(e, re()), e.callbackNode === t ? ua.bind(null, e) : null;
  }
  function ao(e, n) {
    var t = pr;
    return e.current.memoizedState.isDehydrated && (rt(e, n).flags |= 256), e = wl(e, n), e !== 2 && (n = Oe, Oe = t, n !== null && co(n)), e;
  }
  function co(e) {
    Oe === null ? Oe = e : Oe.push.apply(Oe, e);
  }
  function df(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!nn(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (n &= ~uo, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - en(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function oa(e) {
    if (F & 6) throw Error(m(327));
    Lt();
    var n = Nr(e, 0);
    if (!(n & 1)) return Me(e, re()), null;
    var t = wl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Hl(e);
      r !== 0 && (n = r, t = ao(e, r));
    }
    if (t === 1) throw t = dr, rt(e, 0), Wn(e, n), Me(e, re()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, lt(e, Oe, xn), Me(e, re()), null;
  }
  function fo(e, n) {
    var t = F;
    F |= 1;
    try {
      return e(n);
    } finally {
      F = t, F === 0 && (Tt = re() + 500, Kr && In());
    }
  }
  function tt(e) {
    Bn !== null && Bn.tag === 0 && !(F & 6) && Lt();
    var n = F;
    F |= 1;
    var t = Ge.transition, r = V;
    try {
      if (Ge.transition = null, V = 1, e) return e();
    } finally {
      V = r, Ge.transition = t, F = n, !(F & 6) && In();
    }
  }
  function po() {
    Be = zt.current, Y(zt);
  }
  function rt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Bc(t)), ue !== null) for (t = ue.return; t !== null; ) {
      var r = t;
      switch (ku(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && $r();
          break;
        case 3:
          xt(), Y(Te), Y(he), Du();
          break;
        case 5:
          Ou(r);
          break;
        case 4:
          xt();
          break;
        case 13:
          Y(b);
          break;
        case 19:
          Y(b);
          break;
        case 10:
          Nu(r.type._context);
          break;
        case 22:
        case 23:
          po();
      }
      t = t.return;
    }
    if (ce = e, ue = e = $n(e.current, null), pe = Be = n, ie = 0, dr = null, uo = pl = nt = 0, Oe = pr = null, qn !== null) {
      for (n = 0; n < qn.length; n++) if (t = qn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, u = t.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        t.pending = r;
      }
      qn = null;
    }
    return e;
  }
  function ia(e, n) {
    do {
      var t = ue;
      try {
        if (Pu(), tl.current = ol, rl) {
          for (var r = ee.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          rl = !1;
        }
        if (et = 0, ae = oe = ee = null, or = !1, ir = 0, lo.current = null, t === null || t.return === null) {
          ie = 1, dr = n, ue = null;
          break;
        }
        e: {
          var u = e, o = t.return, i = t, s = n;
          if (n = pe, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var v = y.alternate;
              v ? (y.updateQueue = v.updateQueue, y.memoizedState = v.memoizedState, y.lanes = v.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = Os(o);
            if (k !== null) {
              k.flags &= -257, Ms(k, o, i, u, n), k.mode & 1 && Rs(u, p, n), n = k, s = p;
              var C = n.updateQueue;
              if (C === null) {
                var x = /* @__PURE__ */ new Set();
                x.add(s), n.updateQueue = x;
              } else C.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Rs(u, p, n), mo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (J && i.mode & 1) {
            var le = Os(o);
            if (le !== null) {
              !(le.flags & 65536) && (le.flags |= 256), Ms(le, o, i, u, n), Cu(Pt(s, i));
              break e;
            }
          }
          u = s = Pt(s, i), ie !== 4 && (ie = 2), pr === null ? pr = [u] : pr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var f = Ts(u, s, n);
                ts(u, f);
                break e;
              case 1:
                i = s;
                var a = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Vn === null || !Vn.has(d)))) {
                  u.flags |= 65536, n &= -n, u.lanes |= n;
                  var w = Ls(u, i, n);
                  ts(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ca(t);
      } catch (P) {
        n = P, ue === t && t !== null && (ue = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function sa() {
    var e = dl.current;
    return dl.current = ol, e === null ? ol : e;
  }
  function mo() {
    (ie === 0 || ie === 3 || ie === 2) && (ie = 4), ce === null || !(nt & 268435455) && !(pl & 268435455) || Wn(ce, pe);
  }
  function wl(e, n) {
    var t = F;
    F |= 2;
    var r = sa();
    (ce !== e || pe !== n) && (xn = null, rt(e, n));
    do
      try {
        pf();
        break;
      } catch (l) {
        ia(e, l);
      }
    while (!0);
    if (Pu(), F = t, dl.current = r, ue !== null) throw Error(m(261));
    return ce = null, pe = 0, ie;
  }
  function pf() {
    for (; ue !== null; ) aa(ue);
  }
  function mf() {
    for (; ue !== null && !Ua(); ) aa(ue);
  }
  function aa(e) {
    var n = pa(e.alternate, e, Be);
    e.memoizedProps = e.pendingProps, n === null ? ca(e) : ue = n, lo.current = null;
  }
  function ca(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = of(t, n), t !== null) {
          t.flags &= 32767, ue = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ie = 6, ue = null;
          return;
        }
      } else if (t = uf(t, n, Be), t !== null) {
        ue = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ue = n;
        return;
      }
      ue = n = e;
    } while (n !== null);
    ie === 0 && (ie = 5);
  }
  function lt(e, n, t) {
    var r = V, l = Ge.transition;
    try {
      Ge.transition = null, V = 1, vf(e, n, t, r);
    } finally {
      Ge.transition = l, V = r;
    }
    return null;
  }
  function vf(e, n, t, r) {
    do
      Lt();
    while (Bn !== null);
    if (F & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (Xa(e, u), e === ce && (ue = ce = null, pe = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, ma(_r, function() {
      return Lt(), null;
    })), u = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || u) {
      u = Ge.transition, Ge.transition = null;
      var o = V;
      V = 1;
      var i = F;
      F |= 4, lo.current = null, af(e, t), ea(t, e), Dc(pu), Lr = !!du, pu = du = null, e.current = t, cf(t), Aa(), F = i, V = o, Ge.transition = u;
    } else e.current = t;
    if (vl && (vl = !1, Bn = e, hl = l), u = e.pendingLanes, u === 0 && (Vn = null), Ha(t.stateNode), Me(e, re()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ml) throw ml = !1, e = io, io = null, e;
    return hl & 1 && e.tag !== 0 && Lt(), u = e.pendingLanes, u & 1 ? e === so ? mr++ : (mr = 0, so = e) : mr = 0, In(), null;
  }
  function Lt() {
    if (Bn !== null) {
      var e = qo(hl), n = Ge.transition, t = V;
      try {
        if (Ge.transition = null, V = 16 > e ? 16 : e, Bn === null) var r = !1;
        else {
          if (e = Bn, Bn = null, hl = 0, F & 6) throw Error(m(331));
          var l = F;
          for (F |= 4, E = e.current; E !== null; ) {
            var u = E, o = u.child;
            if (E.flags & 16) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, E = g;
                    else for (; E !== null; ) {
                      y = E;
                      var v = y.sibling, k = y.return;
                      if (Gs(y), y === p) {
                        E = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = k, E = v;
                        break;
                      }
                      E = k;
                    }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var x = C.child;
                  if (x !== null) {
                    C.child = null;
                    do {
                      var le = x.sibling;
                      x.sibling = null, x = le;
                    } while (x !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && o !== null) o.return = u, E = o;
            else e: for (; E !== null; ) {
              if (u = E, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  fr(9, u, u.return);
              }
              var f = u.sibling;
              if (f !== null) {
                f.return = u.return, E = f;
                break e;
              }
              E = u.return;
            }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            o = E;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null) d.return = o, E = d;
            else e: for (o = a; E !== null; ) {
              if (i = E, i.flags & 2048) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fl(9, i);
                }
              } catch (P) {
                te(i, i.return, P);
              }
              if (i === o) {
                E = null;
                break e;
              }
              var w = i.sibling;
              if (w !== null) {
                w.return = i.return, E = w;
                break e;
              }
              E = i.return;
            }
          }
          if (F = l, In(), fn && typeof fn.onPostCommitFiberRoot == "function") try {
            fn.onPostCommitFiberRoot(Cr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        V = t, Ge.transition = n;
      }
    }
    return !1;
  }
  function fa(e, n, t) {
    n = Pt(t, n), n = Ts(e, n, 1), e = Un(e, n, 1), n = _e(), e !== null && (Ut(e, 1, n), Me(e, n));
  }
  function te(e, n, t) {
    if (e.tag === 3) fa(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        fa(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Vn === null || !Vn.has(r))) {
          e = Pt(t, e), e = Ls(n, e, 1), n = Un(n, e, 1), e = _e(), n !== null && (Ut(n, 1, e), Me(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function hf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = _e(), e.pingedLanes |= e.suspendedLanes & t, ce === e && (pe & t) === t && (ie === 4 || ie === 3 && (pe & 130023424) === pe && 500 > re() - oo ? rt(e, 0) : uo |= t), Me(e, n);
  }
  function da(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = _e();
    e = En(e, n), e !== null && (Ut(e, n, t), Me(e, t));
  }
  function yf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), da(e, t);
  }
  function gf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), da(e, t);
  }
  var pa;
  pa = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Te.current) Re = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return Re = !1, lf(e, n, t);
      Re = !!(e.flags & 131072);
    }
    else Re = !1, J && n.flags & 1048576 && Ki(n, Xr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        al(e, n), e = n.pendingProps;
        var l = gt(n, he.current);
        Ct(n, t), l = ju(null, n, r, e, l, t);
        var u = Uu();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Le(r) ? (u = !0, Qr(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Lu(n), l.updater = il, n.stateNode = l, l._reactInternals = n, $u(n, r, e, t), n = Xu(null, n, r, !0, u, t)) : (n.tag = 0, J && u && Su(n), Ee(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (al(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Sf(r), e = rn(r, e), l) {
            case 0:
              n = Yu(null, n, r, e, t);
              break e;
            case 1:
              n = As(null, n, r, e, t);
              break e;
            case 11:
              n = Ds(null, n, r, e, t);
              break e;
            case 14:
              n = Fs(null, n, r, rn(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Yu(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), As(e, n, r, l, t);
      case 3:
        e: {
          if (Vs(n), e === null) throw Error(m(387));
          r = n.pendingProps, u = n.memoizedState, l = u.element, ns(e, n), el(n, r, null, t);
          var o = n.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
            l = Pt(Error(m(423)), n), n = Bs(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = Pt(Error(m(424)), n), n = Bs(e, n, r, t, l);
            break e;
          } else for (Ve = Mn(n.stateNode.containerInfo.firstChild), Ae = n, J = !0, tn = null, t = bi(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (kt(), r === l) {
              n = Cn(e, n, t);
              break e;
            }
            Ee(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ls(n), e === null && _u(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, mu(r, l) ? o = null : u !== null && mu(r, u) && (n.flags |= 32), Us(e, n), Ee(e, n, o, t), n.child;
      case 6:
        return e === null && _u(n), null;
      case 13:
        return Hs(e, n, t);
      case 4:
        return Ru(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Et(n, null, r, t) : Ee(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), Ds(e, n, r, l, t);
      case 7:
        return Ee(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ee(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ee(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, o = l.value, Q(Jr, r._currentValue), r._currentValue = o, u !== null) if (nn(u.value, o)) {
            if (u.children === l.children && !Te.current) {
              n = Cn(e, n, t);
              break e;
            }
          } else for (u = n.child, u !== null && (u.return = n); u !== null; ) {
            var i = u.dependencies;
            if (i !== null) {
              o = u.child;
              for (var s = i.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (u.tag === 1) {
                    s = _n(-1, t & -t), s.tag = 2;
                    var p = u.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), zu(
                    u.return,
                    t,
                    n
                  ), i.lanes |= t;
                  break;
                }
                s = s.next;
              }
            } else if (u.tag === 10) o = u.type === n.type ? null : u.child;
            else if (u.tag === 18) {
              if (o = u.return, o === null) throw Error(m(341));
              o.lanes |= t, i = o.alternate, i !== null && (i.lanes |= t), zu(o, t, n), o = u.sibling;
            } else o = u.child;
            if (o !== null) o.return = u;
            else for (o = u; o !== null; ) {
              if (o === n) {
                o = null;
                break;
              }
              if (u = o.sibling, u !== null) {
                u.return = o.return, o = u;
                break;
              }
              o = o.return;
            }
            u = o;
          }
          Ee(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Ct(n, t), l = Ye(l), r = r(l), n.flags |= 1, Ee(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = rn(r, n.pendingProps), l = rn(r.type, l), Fs(e, n, r, l, t);
      case 15:
        return Is(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : rn(r, l), al(e, n), n.tag = 1, Le(r) ? (e = !0, Qr(n)) : e = !1, Ct(n, t), Ns(n, r, l), $u(n, r, l, t), Xu(null, n, r, !0, e, t);
      case 19:
        return $s(e, n, t);
      case 22:
        return js(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ma(e, n) {
    return Yo(e, n);
  }
  function wf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ze(e, n, t, r) {
    return new wf(e, n, t, r);
  }
  function vo(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Sf(e) {
    if (typeof e == "function") return vo(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === an) return 11;
      if (e === cn) return 14;
    }
    return 2;
  }
  function $n(e, n) {
    var t = e.alternate;
    return t === null ? (t = Ze(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function Sl(e, n, t, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") vo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case Ne:
        return ut(t.children, l, u, n);
      case $e:
        o = 8, l |= 8;
        break;
      case Pn:
        return e = Ze(12, t, n, l | 2), e.elementType = Pn, e.lanes = u, e;
      case Ie:
        return e = Ze(13, t, n, l), e.elementType = Ie, e.lanes = u, e;
      case be:
        return e = Ze(19, t, n, l), e.elementType = be, e.lanes = u, e;
      case ne:
        return kl(t, l, u, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case yn:
            o = 10;
            break e;
          case Kn:
            o = 9;
            break e;
          case an:
            o = 11;
            break e;
          case cn:
            o = 14;
            break e;
          case ze:
            o = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = Ze(o, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
  }
  function ut(e, n, t, r) {
    return e = Ze(7, e, r, n), e.lanes = t, e;
  }
  function kl(e, n, t, r) {
    return e = Ze(22, e, r, n), e.elementType = ne, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function ho(e, n, t) {
    return e = Ze(6, e, null, n), e.lanes = t, e;
  }
  function yo(e, n, t) {
    return n = Ze(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function kf(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function go(e, n, t, r, l, u, o, i, s) {
    return e = new kf(e, n, t, i, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = Ze(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lu(u), e;
  }
  function Ef(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ke, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function va(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Yn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Le(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Le(t)) return Wi(e, t, n);
    }
    return n;
  }
  function ha(e, n, t, r, l, u, o, i, s) {
    return e = go(t, r, !0, e, l, u, o, i, s), e.context = va(null), t = e.current, r = _e(), l = Hn(t), u = _n(r, l), u.callback = n ?? null, Un(t, u, l), e.current.lanes = l, Ut(e, l, r), Me(e, r), e;
  }
  function El(e, n, t, r) {
    var l = n.current, u = _e(), o = Hn(l);
    return t = va(t), n.context === null ? n.context = t : n.pendingContext = t, n = _n(u, o), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = Un(l, n, o), e !== null && (on(e, l, o, u), br(e, l, o)), o;
  }
  function _l(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ya(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function wo(e, n) {
    ya(e, n), (e = e.alternate) && ya(e, n);
  }
  function _f() {
    return null;
  }
  var ga = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function So(e) {
    this._internalRoot = e;
  }
  Cl.prototype.render = So.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    El(e, n, null, null);
  }, Cl.prototype.unmount = So.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      tt(function() {
        El(null, e, null, null);
      }), n[gn] = null;
    }
  };
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ni();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Ln.length && n !== 0 && n < Ln[t].priority; t++) ;
      Ln.splice(t, 0, e), t === 0 && li(e);
    }
  };
  function ko(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function xl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function wa() {
  }
  function Cf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = _l(o);
          u.call(p);
        };
      }
      var o = ha(n, r, e, 0, null, !1, !1, "", wa);
      return e._reactRootContainer = o, e[gn] = o.current, qt(e.nodeType === 8 ? e.parentNode : e), tt(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = _l(s);
        i.call(p);
      };
    }
    var s = go(e, 0, !1, null, null, !1, !1, "", wa);
    return e._reactRootContainer = s, e[gn] = s.current, qt(e.nodeType === 8 ? e.parentNode : e), tt(function() {
      El(n, s, t, r);
    }), s;
  }
  function Pl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = _l(o);
          i.call(s);
        };
      }
      El(n, o, e, l);
    } else o = Cf(t, n, e, l, r);
    return _l(o);
  }
  bo = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = jt(n.pendingLanes);
          t !== 0 && ($l(n, t | 1), Me(n, re()), !(F & 6) && (Tt = re() + 500, In()));
        }
        break;
      case 13:
        tt(function() {
          var r = En(e, 1);
          if (r !== null) {
            var l = _e();
            on(r, e, 1, l);
          }
        }), wo(e, 1);
    }
  }, Ql = function(e) {
    if (e.tag === 13) {
      var n = En(e, 134217728);
      if (n !== null) {
        var t = _e();
        on(n, e, 134217728, t);
      }
      wo(e, 134217728);
    }
  }, ei = function(e) {
    if (e.tag === 13) {
      var n = Hn(e), t = En(e, n);
      if (t !== null) {
        var r = _e();
        on(t, e, n, r);
      }
      wo(e, n);
    }
  }, ni = function() {
    return V;
  }, ti = function(e, n) {
    var t = V;
    try {
      return V = e, n();
    } finally {
      V = t;
    }
  }, jl = function(e, n, t) {
    switch (n) {
      case "input":
        if (Tl(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Wr(r);
              if (!l) throw Error(m(90));
              Po(r), Tl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ro(e, t);
        break;
      case "select":
        n = t.value, n != null && ot(e, !!t.multiple, n, !1);
    }
  }, Vo = fo, Bo = tt;
  var xf = { usingClientEntryPoint: !1, Events: [nr, ht, Wr, Uo, Ao, fo] }, vr = { findFiberByHostInstance: Xn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Pf = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Qo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: vr.findFiberByHostInstance || _f, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nl.isDisabled && Nl.supportsFiber) try {
      Cr = Nl.inject(Pf), fn = Nl;
    } catch {
    }
  }
  return De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xf, De.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ko(n)) throw Error(m(200));
    return Ef(e, n, null, t);
  }, De.createRoot = function(e, n) {
    if (!ko(e)) throw Error(m(299));
    var t = !1, r = "", l = ga;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = go(e, 1, !1, null, null, t, !1, r, l), e[gn] = n.current, qt(e.nodeType === 8 ? e.parentNode : e), new So(n);
  }, De.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Qo(n), e = e === null ? null : e.stateNode, e;
  }, De.flushSync = function(e) {
    return tt(e);
  }, De.hydrate = function(e, n, t) {
    if (!xl(n)) throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, De.hydrateRoot = function(e, n, t) {
    if (!ko(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, u = "", o = ga;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), n = ha(n, null, e, 1, t ?? null, l, !1, u, o), e[gn] = n.current, qt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new Cl(n);
  }, De.render = function(e, n, t) {
    if (!xl(n)) throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, De.unmountComponentAtNode = function(e) {
    if (!xl(e)) throw Error(m(40));
    return e._reactRootContainer ? (tt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[gn] = null;
      });
    }), !0) : !1;
  }, De.unstable_batchedUpdates = fo, De.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!xl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, De.version = "18.3.1-next-f1338f8080-20240426", De;
}
function La() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(La);
    } catch (R) {
      console.error(R);
    }
}
La(), Ta.exports = Of();
var Mf = Ta.exports, Pa = Mf;
xo.createRoot = Pa.createRoot, xo.hydrateRoot = Pa.hydrateRoot;
const Df = ".widget{background-color:#f9f9f9;border:1px solid #e6e6e6;border-radius:4px;padding:10px;margin-bottom:10px;box-shadow:0 0 10px #0000001a}", Ff = () => /* @__PURE__ */ yr.jsxs(yr.Fragment, { children: [
  /* @__PURE__ */ yr.jsx("style", { children: Df }),
  /* @__PURE__ */ yr.jsx("div", { className: "widget", children: "Widget" })
] }), If = (R) => R.replace(/-([a-z])/g, (B, m) => m.toUpperCase());
class jf extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const B = this.getPropsFromAttributes();
    xo.createRoot(this.shadowRoot).render(/* @__PURE__ */ yr.jsx(Ff, { ...B }));
  }
  getPropsFromAttributes() {
    const B = {};
    for (let m = 0; m < this.attributes.length; m++) {
      const Ce = this.attributes[m];
      B[If(Ce.name)] = Ce.value;
    }
    return B;
  }
}
customElements.define("my-widget", jf);
