var jQuery;
void 0 === jQuery && (jQuery = "function" == typeof require ? $ = require("jquery") : $);
!function(t) {
    t.Package ? Materialize = {} : t.Materialize = {}
}(window),
function(t) {
    for (var e = 0, i = ["webkit", "moz"], n = t.requestAnimationFrame, r = t.cancelAnimationFrame, o = i.length; --o >= 0 && !n; )
        n = t[i[o] + "RequestAnimationFrame"],
        r = t[i[o] + "CancelRequestAnimationFrame"];
    n && r || (n = function(t) {
        var i = +Date.now()
          , n = Math.max(e + 16, i);
        return setTimeout((function() {
            t(e = n)
        }
        ), n - i)
    }
    ,
    r = clearTimeout),
    t.requestAnimationFrame = n,
    t.cancelAnimationFrame = r
}(window),
Materialize.objectSelectorString = function(t) {
    return ((t.prop("tagName") || "") + (t.attr("id") || "") + (t.attr("class") || "")).replace(/\s/g, "")
}
,
Materialize.guid = function() {
    function t() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    }
}(),
Materialize.escapeHash = function(t) {
    return t.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
}
,
Materialize.elementOrParentIsFixed = function(t) {
    var e = $(t)
      , i = e.add(e.parents())
      , n = !1;
    return i.each((function() {
        if ("fixed" === $(this).css("position"))
            return n = !0,
            !1
    }
    )),
    n
}
;
/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var Vel, getTime = Date.now || function() {
    return (new Date).getTime()
}
;
/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
Materialize.throttle = function(t, e, i) {
    var n, r, o, s = null, a = 0;
    i || (i = {});
    var l = function() {
        a = !1 === i.leading ? 0 : getTime(),
        s = null,
        o = t.apply(n, r),
        n = r = null
    };
    return function() {
        var c = getTime();
        a || !1 !== i.leading || (a = c);
        var u = e - (c - a);
        return n = this,
        r = arguments,
        u <= 0 ? (clearTimeout(s),
        s = null,
        a = c,
        o = t.apply(n, r),
        n = r = null) : s || !1 === i.trailing || (s = setTimeout(l, u)),
        o
    }
}
,
Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity,
/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(t) {
    function e(t) {
        var e = t.length
          , n = i.type(t);
        return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }
    if (!t.jQuery) {
        var i = function(t, e) {
            return new i.fn.init(t,e)
        };
        i.isWindow = function(t) {
            return null != t && t == t.window
        }
        ,
        i.type = function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? r[s.call(t)] || "object" : typeof t
        }
        ,
        i.isArray = Array.isArray || function(t) {
            return "array" === i.type(t)
        }
        ,
        i.isPlainObject = function(t) {
            var e;
            if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t))
                return !1;
            try {
                if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            for (e in t)
                ;
            return void 0 === e || o.call(t, e)
        }
        ,
        i.each = function(t, i, n) {
            var r = 0
              , o = t.length
              , s = e(t);
            if (n) {
                if (s)
                    for (; o > r && !1 !== i.apply(t[r], n); r++)
                        ;
                else
                    for (r in t)
                        if (!1 === i.apply(t[r], n))
                            break
            } else if (s)
                for (; o > r && !1 !== i.call(t[r], r, t[r]); r++)
                    ;
            else
                for (r in t)
                    if (!1 === i.call(t[r], r, t[r]))
                        break;
            return t
        }
        ,
        i.data = function(t, e, r) {
            if (void 0 === r) {
                var o = (s = t[i.expando]) && n[s];
                if (void 0 === e)
                    return o;
                if (o && e in o)
                    return o[e]
            } else if (void 0 !== e) {
                var s = t[i.expando] || (t[i.expando] = ++i.uuid);
                return n[s] = n[s] || {},
                n[s][e] = r,
                r
            }
        }
        ,
        i.removeData = function(t, e) {
            var r = t[i.expando]
              , o = r && n[r];
            o && i.each(e, (function(t, e) {
                delete o[e]
            }
            ))
        }
        ,
        i.extend = function() {
            var t, e, n, r, o, s, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof a && (u = a,
            a = arguments[l] || {},
            l++),
            "object" != typeof a && "function" !== i.type(a) && (a = {}),
            l === c && (a = this,
            l--); c > l; l++)
                if (null != (o = arguments[l]))
                    for (r in o)
                        t = a[r],
                        a !== (n = o[r]) && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1,
                        s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {},
                        a[r] = i.extend(u, s, n)) : void 0 !== n && (a[r] = n));
            return a
        }
        ,
        i.queue = function(t, n, r) {
            if (t) {
                n = (n || "fx") + "queue";
                var o = i.data(t, n);
                return r ? (!o || i.isArray(r) ? o = i.data(t, n, function(t, i) {
                    var n = i || [];
                    return null != t && (e(Object(t)) ? function(t, e) {
                        for (var i = +e.length, n = 0, r = t.length; i > n; )
                            t[r++] = e[n++];
                        if (i != i)
                            for (; void 0 !== e[n]; )
                                t[r++] = e[n++];
                        t.length = r
                    }(n, "string" == typeof t ? [t] : t) : [].push.call(n, t)),
                    n
                }(r)) : o.push(r),
                o) : o || []
            }
        }
        ,
        i.dequeue = function(t, e) {
            i.each(t.nodeType ? [t] : t, (function(t, n) {
                e = e || "fx";
                var r = i.queue(n, e)
                  , o = r.shift();
                "inprogress" === o && (o = r.shift()),
                o && ("fx" === e && r.unshift("inprogress"),
                o.call(n, (function() {
                    i.dequeue(n, e)
                }
                )))
            }
            ))
        }
        ,
        i.fn = i.prototype = {
            init: function(t) {
                if (t.nodeType)
                    return this[0] = t,
                    this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function t() {
                    for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position; )
                        t = t.offsetParent;
                    return t || document
                }
                var e = this[0]
                  , t = t.apply(e)
                  , n = this.offset()
                  , r = /^(?:body|html)$/i.test(t.nodeName) ? {
                    top: 0,
                    left: 0
                } : i(t).offset();
                return n.top -= parseFloat(e.style.marginTop) || 0,
                n.left -= parseFloat(e.style.marginLeft) || 0,
                t.style && (r.top += parseFloat(t.style.borderTopWidth) || 0,
                r.left += parseFloat(t.style.borderLeftWidth) || 0),
                {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(),
        i.uuid = 0;
        for (var r = {}, o = r.hasOwnProperty, s = r.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++)
            r["[object " + a[l] + "]"] = a[l].toLowerCase();
        i.fn.init.prototype = i.fn,
        t.Velocity = {
            Utilities: i
        }
    }
}(window),
function(t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
}((function() {
    return function(t, e, i, n) {
        function r(t) {
            return f.isWrapped(t) ? t = [].slice.call(t) : f.isNode(t) && (t = [t]),
            t
        }
        function o(t) {
            var e = d.data(t, "velocity");
            return null === e ? n : e
        }
        function s(t) {
            return function(e) {
                return Math.round(e * t) * (1 / t)
            }
        }
        function a(t, i, n, r) {
            function o(t, e) {
                return 1 - 3 * e + 3 * t
            }
            function s(t, e) {
                return 3 * e - 6 * t
            }
            function a(t) {
                return 3 * t
            }
            function l(t, e, i) {
                return ((o(e, i) * t + s(e, i)) * t + a(e)) * t
            }
            function c(t, e, i) {
                return 3 * o(e, i) * t * t + 2 * s(e, i) * t + a(e)
            }
            function u(e, i) {
                for (var r = 0; v > r; ++r) {
                    var o = c(i, t, n);
                    if (0 === o)
                        return i;
                    i -= (l(i, t, n) - e) / o
                }
                return i
            }
            function d() {
                for (var e = 0; b > e; ++e)
                    T[e] = l(e * x, t, n)
            }
            function h(e, i, r) {
                var o, s, a = 0;
                do {
                    (o = l(s = i + (r - i) / 2, t, n) - e) > 0 ? r = s : i = s
                } while (Math.abs(o) > m && ++a < y);
                return s
            }
            function p(e) {
                for (var i = 0, r = 1, o = b - 1; r != o && T[r] <= e; ++r)
                    i += x;
                --r;
                var s = i + (e - T[r]) / (T[r + 1] - T[r]) * x
                  , a = c(s, t, n);
                return a >= g ? u(e, s) : 0 == a ? s : h(e, i, i + x)
            }
            function f() {
                C = !0,
                (t != i || n != r) && d()
            }
            var v = 4
              , g = .001
              , m = 1e-7
              , y = 10
              , b = 11
              , x = 1 / (b - 1)
              , w = "Float32Array"in e;
            if (4 !== arguments.length)
                return !1;
            for (var k = 0; 4 > k; ++k)
                if ("number" != typeof arguments[k] || isNaN(arguments[k]) || !isFinite(arguments[k]))
                    return !1;
            t = Math.min(t, 1),
            n = Math.min(n, 1),
            t = Math.max(t, 0),
            n = Math.max(n, 0);
            var T = w ? new Float32Array(b) : new Array(b)
              , C = !1
              , S = function(e) {
                return C || f(),
                t === i && n === r ? e : 0 === e ? 0 : 1 === e ? 1 : l(p(e), i, r)
            };
            S.getControlPoints = function() {
                return [{
                    x: t,
                    y: i
                }, {
                    x: n,
                    y: r
                }]
            }
            ;
            var _ = "generateBezier(" + [t, i, n, r] + ")";
            return S.toString = function() {
                return _
            }
            ,
            S
        }
        function l(t, e) {
            var i = t;
            return f.isString(t) ? y.Easings[t] || (i = !1) : i = f.isArray(t) && 1 === t.length ? s.apply(null, t) : f.isArray(t) && 2 === t.length ? b.apply(null, t.concat([e])) : !(!f.isArray(t) || 4 !== t.length) && a.apply(null, t),
            !1 === i && (i = y.Easings[y.defaults.easing] ? y.defaults.easing : m),
            i
        }
        function c(t) {
            if (t) {
                var e = (new Date).getTime()
                  , i = y.State.calls.length;
                i > 1e4 && (y.State.calls = function(t) {
                    for (var e = -1, i = t ? t.length : 0, n = []; ++e < i; ) {
                        var r = t[e];
                        r && n.push(r)
                    }
                    return n
                }(y.State.calls));
                for (var r = 0; i > r; r++)
                    if (y.State.calls[r]) {
                        var s = y.State.calls[r]
                          , a = s[0]
                          , l = s[2]
                          , h = s[3]
                          , p = !!h
                          , v = null;
                        h || (h = y.State.calls[r][3] = e - 16);
                        for (var g = Math.min((e - h) / l.duration, 1), m = 0, b = a.length; b > m; m++) {
                            var w = a[m]
                              , T = w.element;
                            if (o(T)) {
                                var C = !1;
                                if (l.display !== n && null !== l.display && "none" !== l.display) {
                                    if ("flex" === l.display) {
                                        d.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], (function(t, e) {
                                            x.setPropertyValue(T, "display", e)
                                        }
                                        ))
                                    }
                                    x.setPropertyValue(T, "display", l.display)
                                }
                                for (var S in l.visibility !== n && "hidden" !== l.visibility && x.setPropertyValue(T, "visibility", l.visibility),
                                w)
                                    if ("element" !== S) {
                                        var _, q = w[S], P = f.isString(q.easing) ? y.Easings[q.easing] : q.easing;
                                        if (1 === g)
                                            _ = q.endValue;
                                        else {
                                            var A = q.endValue - q.startValue;
                                            if (_ = q.startValue + A * P(g, l, A),
                                            !p && _ === q.currentValue)
                                                continue
                                        }
                                        if (q.currentValue = _,
                                        "tween" === S)
                                            v = _;
                                        else {
                                            if (x.Hooks.registered[S]) {
                                                var O = x.Hooks.getRoot(S)
                                                  , $ = o(T).rootPropertyValueCache[O];
                                                $ && (q.rootPropertyValue = $)
                                            }
                                            var M = x.setPropertyValue(T, S, q.currentValue + (0 === parseFloat(_) ? "" : q.unitType), q.rootPropertyValue, q.scrollData);
                                            x.Hooks.registered[S] && (o(T).rootPropertyValueCache[O] = x.Normalizations.registered[O] ? x.Normalizations.registered[O]("extract", null, M[1]) : M[1]),
                                            "transform" === M[0] && (C = !0)
                                        }
                                    }
                                l.mobileHA && o(T).transformCache.translate3d === n && (o(T).transformCache.translate3d = "(0px, 0px, 0px)",
                                C = !0),
                                C && x.flushTransformCache(T)
                            }
                        }
                        l.display !== n && "none" !== l.display && (y.State.calls[r][2].display = !1),
                        l.visibility !== n && "hidden" !== l.visibility && (y.State.calls[r][2].visibility = !1),
                        l.progress && l.progress.call(s[1], s[1], g, Math.max(0, h + l.duration - e), h, v),
                        1 === g && u(r)
                    }
            }
            y.State.isTicking && k(c)
        }
        function u(t, e) {
            if (!y.State.calls[t])
                return !1;
            for (var i = y.State.calls[t][0], r = y.State.calls[t][1], s = y.State.calls[t][2], a = y.State.calls[t][4], l = !1, c = 0, u = i.length; u > c; c++) {
                var h = i[c].element;
                if (e || s.loop || ("none" === s.display && x.setPropertyValue(h, "display", s.display),
                "hidden" === s.visibility && x.setPropertyValue(h, "visibility", s.visibility)),
                !0 !== s.loop && (d.queue(h)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(h)[1])) && o(h)) {
                    o(h).isAnimating = !1,
                    o(h).rootPropertyValueCache = {};
                    var p = !1;
                    d.each(x.Lists.transforms3D, (function(t, e) {
                        var i = /^scale/.test(e) ? 1 : 0
                          , r = o(h).transformCache[e];
                        o(h).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(r) && (p = !0,
                        delete o(h).transformCache[e])
                    }
                    )),
                    s.mobileHA && (p = !0,
                    delete o(h).transformCache.translate3d),
                    p && x.flushTransformCache(h),
                    x.Values.removeClass(h, "velocity-animating")
                }
                if (!e && s.complete && !s.loop && c === u - 1)
                    try {
                        s.complete.call(r, r)
                    } catch (t) {
                        setTimeout((function() {
                            throw t
                        }
                        ), 1)
                    }
                a && !0 !== s.loop && a(r),
                o(h) && !0 === s.loop && !e && (d.each(o(h).tweensContainer, (function(t, e) {
                    /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0,
                    e.startValue = 360),
                    /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0,
                    e.startValue = 100)
                }
                )),
                y(h, "reverse", {
                    loop: !0,
                    delay: s.delay
                })),
                !1 !== s.queue && d.dequeue(h, s.queue)
            }
            y.State.calls[t] = !1;
            for (var f = 0, v = y.State.calls.length; v > f; f++)
                if (!1 !== y.State.calls[f]) {
                    l = !0;
                    break
                }
            !1 === l && (y.State.isTicking = !1,
            delete y.State.calls,
            y.State.calls = [])
        }
        var d, h = function() {
            if (i.documentMode)
                return i.documentMode;
            for (var t = 7; t > 4; t--) {
                var e = i.createElement("div");
                if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e",
                e.getElementsByTagName("span").length)
                    return e = null,
                    t
            }
            return n
        }(), p = function() {
            var t = 0;
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                var i, n = (new Date).getTime();
                return i = Math.max(0, 16 - (n - t)),
                t = n + i,
                setTimeout((function() {
                    e(n + i)
                }
                ), i)
            }
        }(), f = {
            isString: function(t) {
                return "string" == typeof t
            },
            isArray: Array.isArray || function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
            ,
            isFunction: function(t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            },
            isNode: function(t) {
                return t && t.nodeType
            },
            isNodeList: function(t) {
                return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
            },
            isWrapped: function(t) {
                return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
            },
            isSVG: function(t) {
                return e.SVGElement && t instanceof e.SVGElement
            },
            isEmptyObject: function(t) {
                for (var e in t)
                    return !1;
                return !0
            }
        }, v = !1;
        if (t.fn && t.fn.jquery ? (d = t,
        v = !0) : d = e.Velocity.Utilities,
        8 >= h && !v)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (!(7 >= h)) {
            var g = 400
              , m = "swing"
              , y = {
                State: {
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    isAndroid: /Android/i.test(navigator.userAgent),
                    isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                    isChrome: e.chrome,
                    isFirefox: /Firefox/i.test(navigator.userAgent),
                    prefixElement: i.createElement("div"),
                    prefixMatches: {},
                    scrollAnchor: null,
                    scrollPropertyLeft: null,
                    scrollPropertyTop: null,
                    isTicking: !1,
                    calls: []
                },
                CSS: {},
                Utilities: d,
                Redirects: {},
                Easings: {},
                Promise: e.Promise,
                defaults: {
                    queue: "",
                    duration: g,
                    easing: m,
                    begin: n,
                    complete: n,
                    progress: n,
                    display: n,
                    visibility: n,
                    loop: !1,
                    delay: !1,
                    mobileHA: !0,
                    _cacheValues: !0
                },
                init: function(t) {
                    d.data(t, "velocity", {
                        isSVG: f.isSVG(t),
                        isAnimating: !1,
                        computedStyle: null,
                        tweensContainer: null,
                        rootPropertyValueCache: {},
                        transformCache: {}
                    })
                },
                hook: null,
                mock: !1,
                version: {
                    major: 1,
                    minor: 2,
                    patch: 2
                },
                debug: !1
            };
            e.pageYOffset !== n ? (y.State.scrollAnchor = e,
            y.State.scrollPropertyLeft = "pageXOffset",
            y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body,
            y.State.scrollPropertyLeft = "scrollLeft",
            y.State.scrollPropertyTop = "scrollTop");
            var b = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }
                function e(e, i, n) {
                    var r = {
                        x: e.x + n.dx * i,
                        v: e.v + n.dv * i,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: r.v,
                        dv: t(r)
                    }
                }
                function i(i, n) {
                    var r = {
                        dx: i.v,
                        dv: t(i)
                    }
                      , o = e(i, .5 * n, r)
                      , s = e(i, .5 * n, o)
                      , a = e(i, n, s)
                      , l = 1 / 6 * (r.dx + 2 * (o.dx + s.dx) + a.dx)
                      , c = 1 / 6 * (r.dv + 2 * (o.dv + s.dv) + a.dv);
                    return i.x = i.x + l * n,
                    i.v = i.v + c * n,
                    i
                }
                return function t(e, n, r) {
                    var o, s, a, l = {
                        x: -1,
                        v: 0,
                        tension: null,
                        friction: null
                    }, c = [0], u = 0, d = 1e-4;
                    for (e = parseFloat(e) || 500,
                    n = parseFloat(n) || 20,
                    r = r || null,
                    l.tension = e,
                    l.friction = n,
                    (o = null !== r) ? s = (u = t(e, n)) / r * .016 : s = .016; a = i(a || l, s),
                    c.push(1 + a.x),
                    u += 16,
                    Math.abs(a.x) > d && Math.abs(a.v) > d; )
                        ;
                    return o ? function(t) {
                        return c[t * (c.length - 1) | 0]
                    }
                    : u
                }
            }();
            y.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            },
            d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], (function(t, e) {
                y.Easings[e[0]] = a.apply(null, e[1])
            }
            ));
            var x = y.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < x.Lists.colors.length; t++) {
                            var e = "color" === x.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            x.Hooks.templates[x.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var i, n, r;
                        if (h)
                            for (i in x.Hooks.templates) {
                                r = (n = x.Hooks.templates[i])[0].split(" ");
                                var o = n[1].match(x.RegEx.valueSplit);
                                "Color" === r[0] && (r.push(r.shift()),
                                o.push(o.shift()),
                                x.Hooks.templates[i] = [r.join(" "), o.join(" ")])
                            }
                        for (i in x.Hooks.templates)
                            for (var t in r = (n = x.Hooks.templates[i])[0].split(" ")) {
                                var s = i + r[t]
                                  , a = t;
                                x.Hooks.registered[s] = [i, a]
                            }
                    },
                    getRoot: function(t) {
                        var e = x.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return x.RegEx.valueUnwrap.test(e) && (e = e.match(x.RegEx.valueUnwrap)[1]),
                        x.Values.isCSSNullValue(e) && (e = x.Hooks.templates[t][1]),
                        e
                    },
                    extractValue: function(t, e) {
                        var i = x.Hooks.registered[t];
                        if (i) {
                            var n = i[0]
                              , r = i[1];
                            return (e = x.Hooks.cleanRootPropertyValue(n, e)).toString().match(x.RegEx.valueSplit)[r]
                        }
                        return e
                    },
                    injectValue: function(t, e, i) {
                        var n = x.Hooks.registered[t];
                        if (n) {
                            var r, o = n[0], s = n[1];
                            return (r = (i = x.Hooks.cleanRootPropertyValue(o, i)).toString().match(x.RegEx.valueSplit))[s] = e,
                            r.join(" ")
                        }
                        return i
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, i) {
                            switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var n;
                                return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(x.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i,
                                n;
                            case "inject":
                                return "rect(" + i + ")"
                            }
                        },
                        blur: function(t, e, i) {
                            switch (t) {
                            case "name":
                                return y.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var n = parseFloat(i);
                                if (!n && 0 !== n) {
                                    var r = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n = r ? r[1] : 0
                                }
                                return n;
                            case "inject":
                                return parseFloat(i) ? "blur(" + i + ")" : "none"
                            }
                        },
                        opacity: function(t, e, i) {
                            if (8 >= h)
                                switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n ? n[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1,
                                    parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                }
                            else
                                switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return i
                                }
                        }
                    },
                    register: function() {
                        9 >= h || y.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                        for (var t = 0; t < x.Lists.transformsBase.length; t++)
                            !function() {
                                var e = x.Lists.transformsBase[t];
                                x.Normalizations.registered[e] = function(t, i, r) {
                                    switch (t) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return o(i) === n || o(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : o(i).transformCache[e].replace(/[()]/g, "");
                                    case "inject":
                                        var s = !1;
                                        switch (e.substr(0, e.length - 1)) {
                                        case "translate":
                                            s = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                            break;
                                        case "scal":
                                        case "scale":
                                            y.State.isAndroid && o(i).transformCache[e] === n && 1 > r && (r = 1),
                                            s = !/(\d)$/i.test(r);
                                            break;
                                        case "skew":
                                            s = !/(deg|\d)$/i.test(r);
                                            break;
                                        case "rotate":
                                            s = !/(deg|\d)$/i.test(r)
                                        }
                                        return s || (o(i).transformCache[e] = "(" + r + ")"),
                                        o(i).transformCache[e]
                                    }
                                }
                            }();
                        for (t = 0; t < x.Lists.colors.length; t++)
                            !function() {
                                var e = x.Lists.colors[t];
                                x.Normalizations.registered[e] = function(t, i, r) {
                                    switch (t) {
                                    case "name":
                                        return e;
                                    case "extract":
                                        var o;
                                        if (x.RegEx.wrappedValueAlreadyExtracted.test(r))
                                            o = r;
                                        else {
                                            var s, a = {
                                                black: "rgb(0, 0, 0)",
                                                blue: "rgb(0, 0, 255)",
                                                gray: "rgb(128, 128, 128)",
                                                green: "rgb(0, 128, 0)",
                                                red: "rgb(255, 0, 0)",
                                                white: "rgb(255, 255, 255)"
                                            };
                                            /^[A-z]+$/i.test(r) ? s = a[r] !== n ? a[r] : a.black : x.RegEx.isHex.test(r) ? s = "rgb(" + x.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (s = a.black),
                                            o = (s || r).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return 8 >= h || 3 !== o.split(" ").length || (o += " 1"),
                                        o;
                                    case "inject":
                                        return 8 >= h ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"),
                                        (8 >= h ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, (function(t, e) {
                            return e.toUpperCase()
                        }
                        ))
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (h || y.State.isAndroid && !y.State.isChrome) && (e += "|transform"),
                        new RegExp("^(" + e + ")$","i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (y.State.prefixMatches[t])
                            return [y.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                            var r;
                            if (r = 0 === i ? t : e[i] + t.replace(/^\w/, (function(t) {
                                return t.toUpperCase()
                            }
                            )),
                            f.isString(y.State.prefixElement.style[r]))
                                return y.State.prefixMatches[t] = r,
                                [r, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e;
                        return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(t, e, i, n) {
                            return e + e + i + i + n + n
                        }
                        )),
                        (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                    },
                    removeClass: function(t, e) {
                        t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)","gi"), " ")
                    }
                },
                getPropertyValue: function(t, i, r, s) {
                    function a(t, i) {
                        function r() {
                            u && x.setPropertyValue(t, "display", "none")
                        }
                        var l = 0;
                        if (8 >= h)
                            l = d.css(t, i);
                        else {
                            var c, u = !1;
                            if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(t, "display") && (u = !0,
                            x.setPropertyValue(t, "display", x.Values.getDisplayType(t))),
                            !s) {
                                if ("height" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var p = t.offsetHeight - (parseFloat(x.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingBottom")) || 0);
                                    return r(),
                                    p
                                }
                                if ("width" === i && "border-box" !== x.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var f = t.offsetWidth - (parseFloat(x.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(t, "paddingRight")) || 0);
                                    return r(),
                                    f
                                }
                            }
                            c = o(t) === n ? e.getComputedStyle(t, null) : o(t).computedStyle ? o(t).computedStyle : o(t).computedStyle = e.getComputedStyle(t, null),
                            "borderColor" === i && (i = "borderTopColor"),
                            ("" === (l = 9 === h && "filter" === i ? c.getPropertyValue(i) : c[i]) || null === l) && (l = t.style[i]),
                            r()
                        }
                        if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                            var v = a(t, "position");
                            ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = d(t).position()[i] + "px")
                        }
                        return l
                    }
                    var l;
                    if (x.Hooks.registered[i]) {
                        var c = i
                          , u = x.Hooks.getRoot(c);
                        r === n && (r = x.getPropertyValue(t, x.Names.prefixCheck(u)[0])),
                        x.Normalizations.registered[u] && (r = x.Normalizations.registered[u]("extract", t, r)),
                        l = x.Hooks.extractValue(c, r)
                    } else if (x.Normalizations.registered[i]) {
                        var p, f;
                        "transform" !== (p = x.Normalizations.registered[i]("name", t)) && (f = a(t, x.Names.prefixCheck(p)[0]),
                        x.Values.isCSSNullValue(f) && x.Hooks.templates[i] && (f = x.Hooks.templates[i][1])),
                        l = x.Normalizations.registered[i]("extract", t, f)
                    }
                    if (!/^[\d-]/.test(l))
                        if (o(t) && o(t).isSVG && x.Names.SVGAttribute(i))
                            if (/^(height|width)$/i.test(i))
                                try {
                                    l = t.getBBox()[i]
                                } catch (t) {
                                    l = 0
                                }
                            else
                                l = t.getAttribute(i);
                        else
                            l = a(t, x.Names.prefixCheck(i)[0]);
                    return x.Values.isCSSNullValue(l) && (l = 0),
                    y.debug >= 2 && console.log("Get " + i + ": " + l),
                    l
                },
                setPropertyValue: function(t, i, n, r, s) {
                    var a = i;
                    if ("scroll" === i)
                        s.container ? s.container["scroll" + s.direction] = n : "Left" === s.direction ? e.scrollTo(n, s.alternateValue) : e.scrollTo(s.alternateValue, n);
                    else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", t))
                        x.Normalizations.registered[i]("inject", t, n),
                        a = "transform",
                        n = o(t).transformCache[i];
                    else {
                        if (x.Hooks.registered[i]) {
                            var l = i
                              , c = x.Hooks.getRoot(i);
                            r = r || x.getPropertyValue(t, c),
                            n = x.Hooks.injectValue(l, n, r),
                            i = c
                        }
                        if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", t, n),
                        i = x.Normalizations.registered[i]("name", t)),
                        a = x.Names.prefixCheck(i)[0],
                        8 >= h)
                            try {
                                t.style[a] = n
                            } catch (t) {
                                y.debug && console.log("Browser does not support [" + n + "] for [" + a + "]")
                            }
                        else
                            o(t) && o(t).isSVG && x.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[a] = n;
                        y.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n)
                    }
                    return [a, n]
                },
                flushTransformCache: function(t) {
                    function e(e) {
                        return parseFloat(x.getPropertyValue(t, e))
                    }
                    var i = "";
                    if ((h || y.State.isAndroid && !y.State.isChrome) && o(t).isSVG) {
                        var n = {
                            translate: [e("translateX"), e("translateY")],
                            skewX: [e("skewX")],
                            skewY: [e("skewY")],
                            scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                            rotate: [e("rotateZ"), 0, 0]
                        };
                        d.each(o(t).transformCache, (function(t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"),
                            n[t] && (i += t + "(" + n[t].join(" ") + ") ",
                            delete n[t])
                        }
                        ))
                    } else {
                        var r, s;
                        d.each(o(t).transformCache, (function(e) {
                            return r = o(t).transformCache[e],
                            "transformPerspective" === e ? (s = r,
                            !0) : (9 === h && "rotateZ" === e && (e = "rotate"),
                            void (i += e + r + " "))
                        }
                        )),
                        s && (i = "perspective" + s + " " + i)
                    }
                    x.setPropertyValue(t, "transform", i)
                }
            };
            x.Hooks.register(),
            x.Normalizations.register(),
            y.hook = function(t, e, i) {
                var s = n;
                return t = r(t),
                d.each(t, (function(t, r) {
                    if (o(r) === n && y.init(r),
                    i === n)
                        s === n && (s = y.CSS.getPropertyValue(r, e));
                    else {
                        var a = y.CSS.setPropertyValue(r, e, i);
                        "transform" === a[0] && y.CSS.flushTransformCache(r),
                        s = a
                    }
                }
                )),
                s
            }
            ;
            var w = function() {
                function t() {
                    return a ? P.promise || null : h
                }
                function s() {
                    function t(t) {
                        function h(t, e) {
                            var i = n
                              , r = n
                              , o = n;
                            return f.isArray(t) ? (i = t[0],
                            !f.isArray(t[1]) && /^[\d-]/.test(t[1]) || f.isFunction(t[1]) || x.RegEx.isHex.test(t[1]) ? o = t[1] : (f.isString(t[1]) && !x.RegEx.isHex.test(t[1]) || f.isArray(t[1])) && (r = e ? t[1] : l(t[1], a.duration),
                            t[2] !== n && (o = t[2]))) : i = t,
                            e || (r = r || a.easing),
                            f.isFunction(i) && (i = i.call(s, C, T)),
                            f.isFunction(o) && (o = o.call(s, C, T)),
                            [i || 0, r, o]
                        }
                        function p(t, e) {
                            var i, n;
                            return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, (function(t) {
                                return i = t,
                                ""
                            }
                            )),
                            i || (i = x.Values.getUnitType(t)),
                            [n, i]
                        }
                        function g() {
                            var t = {
                                myParent: s.parentNode || i.body,
                                position: x.getPropertyValue(s, "position"),
                                fontSize: x.getPropertyValue(s, "fontSize")
                            }
                              , n = t.position === I.lastPosition && t.myParent === I.lastParent
                              , r = t.fontSize === I.lastFontSize;
                            I.lastParent = t.myParent,
                            I.lastPosition = t.position,
                            I.lastFontSize = t.fontSize;
                            var a = 100
                              , l = {};
                            if (r && n)
                                l.emToPx = I.lastEmToPx,
                                l.percentToPxWidth = I.lastPercentToPxWidth,
                                l.percentToPxHeight = I.lastPercentToPxHeight;
                            else {
                                var c = o(s).isSVG ? i.createElementNS("https://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                y.init(c),
                                t.myParent.appendChild(c),
                                d.each(["overflow", "overflowX", "overflowY"], (function(t, e) {
                                    y.CSS.setPropertyValue(c, e, "hidden")
                                }
                                )),
                                y.CSS.setPropertyValue(c, "position", t.position),
                                y.CSS.setPropertyValue(c, "fontSize", t.fontSize),
                                y.CSS.setPropertyValue(c, "boxSizing", "content-box"),
                                d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], (function(t, e) {
                                    y.CSS.setPropertyValue(c, e, "100%")
                                }
                                )),
                                y.CSS.setPropertyValue(c, "paddingLeft", "100em"),
                                l.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / a,
                                l.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / a,
                                l.emToPx = I.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / a,
                                t.myParent.removeChild(c)
                            }
                            return null === I.remToPx && (I.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16),
                            null === I.vwToPx && (I.vwToPx = parseFloat(e.innerWidth) / 100,
                            I.vhToPx = parseFloat(e.innerHeight) / 100),
                            l.remToPx = I.remToPx,
                            l.vwToPx = I.vwToPx,
                            l.vhToPx = I.vhToPx,
                            y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), s),
                            l
                        }
                        if (a.begin && 0 === C)
                            try {
                                a.begin.call(v, v)
                            } catch (t) {
                                setTimeout((function() {
                                    throw t
                                }
                                ), 1)
                            }
                        if ("scroll" === q) {
                            var w, k, S, _ = /^x$/i.test(a.axis) ? "Left" : "Top", A = parseFloat(a.offset) || 0;
                            a.container ? f.isWrapped(a.container) || f.isNode(a.container) ? (a.container = a.container[0] || a.container,
                            S = (w = a.container["scroll" + _]) + d(s).position()[_.toLowerCase()] + A) : a.container = null : (w = y.State.scrollAnchor[y.State["scrollProperty" + _]],
                            k = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === _ ? "Top" : "Left")]],
                            S = d(s).offset()[_.toLowerCase()] + A),
                            u = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: w,
                                    currentValue: w,
                                    endValue: S,
                                    unitType: "",
                                    easing: a.easing,
                                    scrollData: {
                                        container: a.container,
                                        direction: _,
                                        alternateValue: k
                                    }
                                },
                                element: s
                            },
                            y.debug && console.log("tweensContainer (scroll): ", u.scroll, s)
                        } else if ("reverse" === q) {
                            if (!o(s).tweensContainer)
                                return void d.dequeue(s, a.queue);
                            "none" === o(s).opts.display && (o(s).opts.display = "auto"),
                            "hidden" === o(s).opts.visibility && (o(s).opts.visibility = "visible"),
                            o(s).opts.loop = !1,
                            o(s).opts.begin = null,
                            o(s).opts.complete = null,
                            b.easing || delete a.easing,
                            b.duration || delete a.duration,
                            a = d.extend({}, o(s).opts, a);
                            var O = d.extend(!0, {}, o(s).tweensContainer);
                            for (var $ in O)
                                if ("element" !== $) {
                                    var M = O[$].startValue;
                                    O[$].startValue = O[$].currentValue = O[$].endValue,
                                    O[$].endValue = M,
                                    f.isEmptyObject(b) || (O[$].easing = a.easing),
                                    y.debug && console.log("reverse tweensContainer (" + $ + "): " + JSON.stringify(O[$]), s)
                                }
                            u = O
                        } else if ("start" === q) {
                            for (var j in o(s).tweensContainer && !0 === o(s).isAnimating && (O = o(s).tweensContainer),
                            d.each(m, (function(t, e) {
                                if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(t)) {
                                    var i = h(e, !0)
                                      , r = i[0]
                                      , o = i[1]
                                      , s = i[2];
                                    if (x.RegEx.isHex.test(r)) {
                                        for (var a = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(r), c = s ? x.Values.hexToRgb(s) : n, u = 0; u < a.length; u++) {
                                            var d = [l[u]];
                                            o && d.push(o),
                                            c !== n && d.push(c[u]),
                                            m[t + a[u]] = d
                                        }
                                        delete m[t]
                                    }
                                }
                            }
                            )),
                            m) {
                                var E = h(m[j])
                                  , B = E[0]
                                  , L = E[1]
                                  , D = E[2];
                                j = x.Names.camelCase(j);
                                var W = x.Hooks.getRoot(j)
                                  , F = !1;
                                if (o(s).isSVG || "tween" === W || !1 !== x.Names.prefixCheck(W)[1] || x.Normalizations.registered[W] !== n) {
                                    (a.display !== n && null !== a.display && "none" !== a.display || a.visibility !== n && "hidden" !== a.visibility) && /opacity|filter/.test(j) && !D && 0 !== B && (D = 0),
                                    a._cacheValues && O && O[j] ? (D === n && (D = O[j].endValue + O[j].unitType),
                                    F = o(s).rootPropertyValueCache[W]) : x.Hooks.registered[j] ? D === n ? (F = x.getPropertyValue(s, W),
                                    D = x.getPropertyValue(s, j, F)) : F = x.Hooks.templates[W][1] : D === n && (D = x.getPropertyValue(s, j));
                                    var V, N, H, R = !1;
                                    if (D = (V = p(j, D))[0],
                                    H = V[1],
                                    B = (V = p(j, B))[0].replace(/^([+-\/*])=/, (function(t, e) {
                                        return R = e,
                                        ""
                                    }
                                    )),
                                    N = V[1],
                                    D = parseFloat(D) || 0,
                                    B = parseFloat(B) || 0,
                                    "%" === N && (/^(fontSize|lineHeight)$/.test(j) ? (B /= 100,
                                    N = "em") : /^scale/.test(j) ? (B /= 100,
                                    N = "") : /(Red|Green|Blue)$/i.test(j) && (B = B / 100 * 255,
                                    N = "")),
                                    /[\/*]/.test(R))
                                        N = H;
                                    else if (H !== N && 0 !== D)
                                        if (0 === B)
                                            N = H;
                                        else {
                                            r = r || g();
                                            var Y = /margin|padding|left|right|width|text|word|letter/i.test(j) || /X$/.test(j) || "x" === j ? "x" : "y";
                                            switch (H) {
                                            case "%":
                                                D *= "x" === Y ? r.percentToPxWidth : r.percentToPxHeight;
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                D *= r[H + "ToPx"]
                                            }
                                            switch (N) {
                                            case "%":
                                                D *= 1 / ("x" === Y ? r.percentToPxWidth : r.percentToPxHeight);
                                                break;
                                            case "px":
                                                break;
                                            default:
                                                D *= 1 / r[N + "ToPx"]
                                            }
                                        }
                                    switch (R) {
                                    case "+":
                                        B = D + B;
                                        break;
                                    case "-":
                                        B = D - B;
                                        break;
                                    case "*":
                                        B *= D;
                                        break;
                                    case "/":
                                        B = D / B
                                    }
                                    u[j] = {
                                        rootPropertyValue: F,
                                        startValue: D,
                                        currentValue: D,
                                        endValue: B,
                                        unitType: N,
                                        easing: L
                                    },
                                    y.debug && console.log("tweensContainer (" + j + "): " + JSON.stringify(u[j]), s)
                                } else
                                    y.debug && console.log("Skipping [" + W + "] due to a lack of browser support.")
                            }
                            u.element = s
                        }
                        u.element && (x.Values.addClass(s, "velocity-animating"),
                        z.push(u),
                        "" === a.queue && (o(s).tweensContainer = u,
                        o(s).opts = a),
                        o(s).isAnimating = !0,
                        C === T - 1 ? (y.State.calls.push([z, v, a, null, P.resolver]),
                        !1 === y.State.isTicking && (y.State.isTicking = !0,
                        c())) : C++)
                    }
                    var r, s = this, a = d.extend({}, y.defaults, b), u = {};
                    switch (o(s) === n && y.init(s),
                    parseFloat(a.delay) && !1 !== a.queue && d.queue(s, a.queue, (function(t) {
                        y.velocityQueueEntryFlag = !0,
                        o(s).delayTimer = {
                            setTimeout: setTimeout(t, parseFloat(a.delay)),
                            next: t
                        }
                    }
                    )),
                    a.duration.toString().toLowerCase()) {
                    case "fast":
                        a.duration = 200;
                        break;
                    case "normal":
                        a.duration = g;
                        break;
                    case "slow":
                        a.duration = 600;
                        break;
                    default:
                        a.duration = parseFloat(a.duration) || 1
                    }
                    !1 !== y.mock && (!0 === y.mock ? a.duration = a.delay = 1 : (a.duration *= parseFloat(y.mock) || 1,
                    a.delay *= parseFloat(y.mock) || 1)),
                    a.easing = l(a.easing, a.duration),
                    a.begin && !f.isFunction(a.begin) && (a.begin = null),
                    a.progress && !f.isFunction(a.progress) && (a.progress = null),
                    a.complete && !f.isFunction(a.complete) && (a.complete = null),
                    a.display !== n && null !== a.display && (a.display = a.display.toString().toLowerCase(),
                    "auto" === a.display && (a.display = y.CSS.Values.getDisplayType(s))),
                    a.visibility !== n && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()),
                    a.mobileHA = a.mobileHA && y.State.isMobile && !y.State.isGingerbread,
                    !1 === a.queue ? a.delay ? setTimeout(t, a.delay) : t() : d.queue(s, a.queue, (function(e, i) {
                        return !0 === i ? (P.promise && P.resolver(v),
                        !0) : (y.velocityQueueEntryFlag = !0,
                        void t())
                    }
                    )),
                    "" !== a.queue && "fx" !== a.queue || "inprogress" === d.queue(s)[0] || d.dequeue(s)
                }
                var a, h, p, v, m, b, k = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));
                if (f.isWrapped(this) ? (a = !1,
                p = 0,
                v = this,
                h = this) : (a = !0,
                p = 1,
                v = k ? arguments[0].elements || arguments[0].e : arguments[0]),
                v = r(v)) {
                    k ? (m = arguments[0].properties || arguments[0].p,
                    b = arguments[0].options || arguments[0].o) : (m = arguments[p],
                    b = arguments[p + 1]);
                    var T = v.length
                      , C = 0;
                    if (!/^(stop|finish)$/i.test(m) && !d.isPlainObject(b)) {
                        var S = p + 1;
                        b = {};
                        for (var _ = S; _ < arguments.length; _++)
                            f.isArray(arguments[_]) || !/^(fast|normal|slow)$/i.test(arguments[_]) && !/^\d/.test(arguments[_]) ? f.isString(arguments[_]) || f.isArray(arguments[_]) ? b.easing = arguments[_] : f.isFunction(arguments[_]) && (b.complete = arguments[_]) : b.duration = arguments[_]
                    }
                    var q, P = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    switch (a && y.Promise && (P.promise = new y.Promise((function(t, e) {
                        P.resolver = t,
                        P.rejecter = e
                    }
                    ))),
                    m) {
                    case "scroll":
                        q = "scroll";
                        break;
                    case "reverse":
                        q = "reverse";
                        break;
                    case "finish":
                    case "stop":
                        d.each(v, (function(t, e) {
                            o(e) && o(e).delayTimer && (clearTimeout(o(e).delayTimer.setTimeout),
                            o(e).delayTimer.next && o(e).delayTimer.next(),
                            delete o(e).delayTimer)
                        }
                        ));
                        var A = [];
                        return d.each(y.State.calls, (function(t, e) {
                            e && d.each(e[1], (function(i, r) {
                                var s = b === n ? "" : b;
                                return !0 !== s && e[2].queue !== s && (b !== n || !1 !== e[2].queue) || void d.each(v, (function(i, n) {
                                    n === r && ((!0 === b || f.isString(b)) && (d.each(d.queue(n, f.isString(b) ? b : ""), (function(t, e) {
                                        f.isFunction(e) && e(null, !0)
                                    }
                                    )),
                                    d.queue(n, f.isString(b) ? b : "", [])),
                                    "stop" === m ? (o(n) && o(n).tweensContainer && !1 !== s && d.each(o(n).tweensContainer, (function(t, e) {
                                        e.endValue = e.currentValue
                                    }
                                    )),
                                    A.push(t)) : "finish" === m && (e[2].duration = 1))
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        "stop" === m && (d.each(A, (function(t, e) {
                            u(e, !0)
                        }
                        )),
                        P.promise && P.resolver(v)),
                        t();
                    default:
                        if (!d.isPlainObject(m) || f.isEmptyObject(m)) {
                            if (f.isString(m) && y.Redirects[m]) {
                                var O = (E = d.extend({}, b)).duration
                                  , $ = E.delay || 0;
                                return !0 === E.backwards && (v = d.extend(!0, [], v).reverse()),
                                d.each(v, (function(t, e) {
                                    parseFloat(E.stagger) ? E.delay = $ + parseFloat(E.stagger) * t : f.isFunction(E.stagger) && (E.delay = $ + E.stagger.call(e, t, T)),
                                    E.drag && (E.duration = parseFloat(O) || (/^(callout|transition)/.test(m) ? 1e3 : g),
                                    E.duration = Math.max(E.duration * (E.backwards ? 1 - t / T : (t + 1) / T), .75 * E.duration, 200)),
                                    y.Redirects[m].call(e, e, E || {}, t, T, v, P.promise ? P : n)
                                }
                                )),
                                t()
                            }
                            var M = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return P.promise ? P.rejecter(new Error(M)) : console.log(M),
                            t()
                        }
                        q = "start"
                    }
                    var j, E, I = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    }, z = [];
                    if (d.each(v, (function(t, e) {
                        f.isNode(e) && s.call(e)
                    }
                    )),
                    (E = d.extend({}, y.defaults, b)).loop = parseInt(E.loop),
                    j = 2 * E.loop - 1,
                    E.loop)
                        for (var B = 0; j > B; B++) {
                            var L = {
                                delay: E.delay,
                                progress: E.progress
                            };
                            B === j - 1 && (L.display = E.display,
                            L.visibility = E.visibility,
                            L.complete = E.complete),
                            w(v, "reverse", L)
                        }
                    return t()
                }
            };
            (y = d.extend(w, y)).animate = w;
            var k = e.requestAnimationFrame || p;
            return y.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", (function() {
                i.hidden ? (k = function(t) {
                    return setTimeout((function() {
                        t(!0)
                    }
                    ), 16)
                }
                ,
                c()) : k = e.requestAnimationFrame || p
            }
            )),
            t.Velocity = y,
            t !== e && (t.fn.velocity = w,
            t.fn.velocity.defaults = y.defaults),
            d.each(["Down", "Up"], (function(t, e) {
                y.Redirects["slide" + e] = function(t, i, r, o, s, a) {
                    var l = d.extend({}, i)
                      , c = l.begin
                      , u = l.complete
                      , h = {
                        height: "",
                        marginTop: "",
                        marginBottom: "",
                        paddingTop: "",
                        paddingBottom: ""
                    }
                      , p = {};
                    l.display === n && (l.display = "Down" === e ? "inline" === y.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"),
                    l.begin = function() {
                        for (var i in c && c.call(s, s),
                        h) {
                            p[i] = t.style[i];
                            var n = y.CSS.getPropertyValue(t, i);
                            h[i] = "Down" === e ? [n, 0] : [0, n]
                        }
                        p.overflow = t.style.overflow,
                        t.style.overflow = "hidden"
                    }
                    ,
                    l.complete = function() {
                        for (var e in p)
                            t.style[e] = p[e];
                        u && u.call(s, s),
                        a && a.resolver(s)
                    }
                    ,
                    y(t, h, l)
                }
            }
            )),
            d.each(["In", "Out"], (function(t, e) {
                y.Redirects["fade" + e] = function(t, i, r, o, s, a) {
                    var l = d.extend({}, i)
                      , c = {
                        opacity: "In" === e ? 1 : 0
                    }
                      , u = l.complete;
                    l.complete = r !== o - 1 ? l.begin = null : function() {
                        u && u.call(s, s),
                        a && a.resolver(s)
                    }
                    ,
                    l.display === n && (l.display = "In" === e ? "auto" : "none"),
                    y(this, c, l)
                }
            }
            )),
            y
        }
        jQuery.fn.velocity = jQuery.fn.animate
    }(window.jQuery || window.Zepto || window, window, document)
}
))),
jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e + i : n / 4 * ((e -= 2) * e * e + 2) + i
    }
}),
function(t) {
    var e = {
        init: function(e) {
            e = t.extend({
                menuWidth: 300,
                edge: "left",
                closeOnClick: !1,
                draggable: !0
            }, e),
            t(this).each((function() {
                var i = t(this)
                  , n = i.attr("data-activates")
                  , r = t("#" + n);
                300 != e.menuWidth && r.css("width", e.menuWidth);
                var o = t('.drag-target[data-sidenav="' + n + '"]');
                e.draggable ? (o.length && o.remove(),
                o = t('<div class="drag-target"></div>').attr("data-sidenav", n),
                t("body").append(o)) : o = t(),
                "left" == e.edge ? (r.css("transform", "translateX(-100%)"),
                o.css({
                    left: 0
                })) : (r.addClass("right-aligned").css("transform", "translateX(100%)"),
                o.css({
                    right: 0
                })),
                r.hasClass("fixed") && window.innerWidth > 992 && r.css("transform", "translateX(0)"),
                r.hasClass("fixed") && t(window).resize((function() {
                    window.innerWidth > 992 ? 0 !== t("#sidenav-overlay").length && a ? s(!0) : r.css("transform", "translateX(0%)") : !1 === a && ("left" === e.edge ? r.css("transform", "translateX(-100%)") : r.css("transform", "translateX(100%)"))
                }
                )),
                !0 === e.closeOnClick && r.on("click.itemclick", "a:not(.collapsible-header)", (function() {
                    s()
                }
                ));
                var s = function(i) {
                    !1,
                    a = !1,
                    t("body").css({
                        overflow: "",
                        width: ""
                    }),
                    t("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            t(this).remove()
                        }
                    }),
                    "left" === e.edge ? (o.css({
                        width: "",
                        right: "",
                        left: "0"
                    }),
                    r.velocity({
                        translateX: "-100%"
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            !0 === i && (r.removeAttr("style"),
                            r.css("width", e.menuWidth))
                        }
                    })) : (o.css({
                        width: "",
                        right: "0",
                        left: ""
                    }),
                    r.velocity({
                        translateX: "100%"
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            !0 === i && (r.removeAttr("style"),
                            r.css("width", e.menuWidth))
                        }
                    }))
                }
                  , a = !1;
                e.draggable && (o.on("click", (function() {
                    a && s()
                }
                )),
                o.hammer({
                    prevent_default: !1
                }).bind("pan", (function(i) {
                    if ("touch" == i.gesture.pointerType) {
                        i.gesture.direction;
                        var n, o = i.gesture.center.x, l = (i.gesture.center.y,
                        i.gesture.velocityX,
                        t("body")), c = t("#sidenav-overlay"), u = l.innerWidth();
                        if (l.css("overflow", "hidden"),
                        l.width(u),
                        0 === c.length && ((c = t('<div id="sidenav-overlay"></div>')).css("opacity", 0).click((function() {
                            s()
                        }
                        )),
                        t("body").append(c)),
                        "left" === e.edge && (o > e.menuWidth ? o = e.menuWidth : o < 0 && (o = 0)),
                        "left" === e.edge)
                            o < e.menuWidth / 2 ? a = !1 : o >= e.menuWidth / 2 && (a = !0),
                            r.css("transform", "translateX(" + (o - e.menuWidth) + "px)");
                        else {
                            o < window.innerWidth - e.menuWidth / 2 ? a = !0 : o >= window.innerWidth - e.menuWidth / 2 && (a = !1);
                            var d = o - e.menuWidth / 2;
                            d < 0 && (d = 0),
                            r.css("transform", "translateX(" + d + "px)")
                        }
                        "left" === e.edge ? (n = o / e.menuWidth,
                        c.velocity({
                            opacity: n
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (n = Math.abs((o - window.innerWidth) / e.menuWidth),
                        c.velocity({
                            opacity: n
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }
                )).bind("panend", (function(i) {
                    if ("touch" == i.gesture.pointerType) {
                        var n = t("#sidenav-overlay")
                          , s = i.gesture.velocityX
                          , l = i.gesture.center.x
                          , c = l - e.menuWidth
                          , u = l - e.menuWidth / 2;
                        c > 0 && (c = 0),
                        u < 0 && (u = 0),
                        !1,
                        "left" === e.edge ? a && s <= .3 || s < -.5 ? (0 !== c && r.velocity({
                            translateX: [0, c]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        n.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        o.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }),
                        a = !0) : (!a || s > .3) && (t("body").css({
                            overflow: "",
                            width: ""
                        }),
                        r.velocity({
                            translateX: [-1 * e.menuWidth - 10, c]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        n.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                t(this).remove()
                            }
                        }),
                        o.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : a && s >= -.3 || s > .5 ? (0 !== u && r.velocity({
                            translateX: [0, u]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        n.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        o.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }),
                        a = !0) : (!a || s < -.3) && (t("body").css({
                            overflow: "",
                            width: ""
                        }),
                        r.velocity({
                            translateX: [e.menuWidth + 10, u]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        n.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                t(this).remove()
                            }
                        }),
                        o.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                }
                ))),
                i.off("click.sidenav").on("click.sidenav", (function() {
                    if (!0 === a)
                        a = !1,
                        !1,
                        s();
                    else {
                        var i = t("body")
                          , n = t('<div id="sidenav-overlay"></div>')
                          , l = i.innerWidth();
                        i.css("overflow", "hidden"),
                        i.width(l),
                        t("body").append(o),
                        "left" === e.edge ? (o.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }),
                        r.velocity({
                            translateX: [0, -1 * e.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (o.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }),
                        r.velocity({
                            translateX: [0, e.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })),
                        n.css("opacity", 0).click((function() {
                            a = !1,
                            !1,
                            s(),
                            n.velocity({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    t(this).remove()
                                }
                            })
                        }
                        )),
                        t("body").append(n),
                        n.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a = !0,
                                !1
                            }
                        })
                    }
                    return !1
                }
                ))
            }
            ))
        },
        destroy: function() {
            var e = t("#sidenav-overlay")
              , i = t('.drag-target[data-sidenav="' + t(this).attr("data-activates") + '"]');
            e.trigger("click"),
            i.remove(),
            t(this).off("click"),
            e.remove()
        },
        show: function() {
            this.trigger("click")
        },
        hide: function() {
            t("#sidenav-overlay").trigger("click")
        }
    };
    t.fn.sideNav = function(i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
    }
}(jQuery),
function(t, e, i, n) {
    "use strict";
    function r(t, e, i) {
        return setTimeout(u(t, i), e)
    }
    function o(t, e, i) {
        return !!Array.isArray(t) && (s(t, i[e], i),
        !0)
    }
    function s(t, e, i) {
        var r;
        if (t)
            if (t.forEach)
                t.forEach(e, i);
            else if (t.length !== n)
                for (r = 0; r < t.length; )
                    e.call(i, t[r], r, t),
                    r++;
            else
                for (r in t)
                    t.hasOwnProperty(r) && e.call(i, t[r], r, t)
    }
    function a(t, e, i) {
        for (var r = Object.keys(e), o = 0; o < r.length; )
            (!i || i && t[r[o]] === n) && (t[r[o]] = e[r[o]]),
            o++;
        return t
    }
    function l(t, e) {
        return a(t, e, !0)
    }
    function c(t, e, i) {
        var n, r = e.prototype;
        (n = t.prototype = Object.create(r)).constructor = t,
        n._super = r,
        i && a(n, i)
    }
    function u(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function d(t, e) {
        return typeof t == et ? t.apply(e && e[0] || n, e) : t
    }
    function h(t, e) {
        return t === n ? e : t
    }
    function p(t, e, i) {
        s(m(e), (function(e) {
            t.addEventListener(e, i, !1)
        }
        ))
    }
    function f(t, e, i) {
        s(m(e), (function(e) {
            t.removeEventListener(e, i, !1)
        }
        ))
    }
    function v(t, e) {
        for (; t; ) {
            if (t == e)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function g(t, e) {
        return t.indexOf(e) > -1
    }
    function m(t) {
        return t.trim().split(/\s+/g)
    }
    function y(t, e, i) {
        if (t.indexOf && !i)
            return t.indexOf(e);
        for (var n = 0; n < t.length; ) {
            if (i && t[n][i] == e || !i && t[n] === e)
                return n;
            n++
        }
        return -1
    }
    function b(t) {
        return Array.prototype.slice.call(t, 0)
    }
    function x(t, e, i) {
        for (var n = [], r = [], o = 0; o < t.length; ) {
            var s = e ? t[o][e] : t[o];
            y(r, s) < 0 && n.push(t[o]),
            r[o] = s,
            o++
        }
        return i && (n = e ? n.sort((function(t, i) {
            return t[e] > i[e]
        }
        )) : n.sort()),
        n
    }
    function w(t, e) {
        for (var i, r, o = e[0].toUpperCase() + e.slice(1), s = 0; s < K.length; ) {
            if ((r = (i = K[s]) ? i + o : e)in t)
                return r;
            s++
        }
        return n
    }
    function k(t) {
        var e = t.ownerDocument;
        return e.defaultView || e.parentWindow
    }
    function T(t, e) {
        var i = this;
        this.manager = t,
        this.callback = e,
        this.element = t.element,
        this.target = t.options.inputTarget,
        this.domHandler = function(e) {
            d(t.options.enable, [t]) && i.handler(e)
        }
        ,
        this.init()
    }
    function C(t, e, i) {
        var n = i.pointers.length
          , r = i.changedPointers.length
          , o = e & ht && 0 == n - r
          , s = e & (ft | vt) && 0 == n - r;
        i.isFirst = !!o,
        i.isFinal = !!s,
        o && (t.session = {}),
        i.eventType = e,
        function(t, e) {
            var i = t.session
              , n = e.pointers
              , r = n.length;
            i.firstInput || (i.firstInput = _(e)),
            r > 1 && !i.firstMultiple ? i.firstMultiple = _(e) : 1 === r && (i.firstMultiple = !1);
            var o = i.firstInput
              , s = i.firstMultiple
              , a = s ? s.center : o.center
              , l = e.center = q(n);
            e.timeStamp = rt(),
            e.deltaTime = e.timeStamp - o.timeStamp,
            e.angle = O(a, l),
            e.distance = A(a, l),
            function(t, e) {
                var i = e.center
                  , n = t.offsetDelta || {}
                  , r = t.prevDelta || {}
                  , o = t.prevInput || {};
                (e.eventType === ht || o.eventType === ft) && (r = t.prevDelta = {
                    x: o.deltaX || 0,
                    y: o.deltaY || 0
                },
                n = t.offsetDelta = {
                    x: i.x,
                    y: i.y
                }),
                e.deltaX = r.x + (i.x - n.x),
                e.deltaY = r.y + (i.y - n.y)
            }(i, e),
            e.offsetDirection = P(e.deltaX, e.deltaY),
            e.scale = s ? function(t, e) {
                return A(e[0], e[1], St) / A(t[0], t[1], St)
            }(s.pointers, n) : 1,
            e.rotation = s ? function(t, e) {
                return O(e[1], e[0], St) - O(t[1], t[0], St)
            }(s.pointers, n) : 0,
            S(i, e);
            var c = t.element;
            v(e.srcEvent.target, c) && (c = e.srcEvent.target),
            e.target = c
        }(t, i),
        t.emit("hammer.input", i),
        t.recognize(i),
        t.session.prevInput = i
    }
    function S(t, e) {
        var i, r, o, s, a = t.lastInterval || e, l = e.timeStamp - a.timeStamp;
        if (e.eventType != vt && (l > dt || a.velocity === n)) {
            var c = a.deltaX - e.deltaX
              , u = a.deltaY - e.deltaY
              , d = function(t, e, i) {
                return {
                    x: e / t || 0,
                    y: i / t || 0
                }
            }(l, c, u);
            r = d.x,
            o = d.y,
            i = nt(d.x) > nt(d.y) ? d.x : d.y,
            s = P(c, u),
            t.lastInterval = e
        } else
            i = a.velocity,
            r = a.velocityX,
            o = a.velocityY,
            s = a.direction;
        e.velocity = i,
        e.velocityX = r,
        e.velocityY = o,
        e.direction = s
    }
    function _(t) {
        for (var e = [], i = 0; i < t.pointers.length; )
            e[i] = {
                clientX: it(t.pointers[i].clientX),
                clientY: it(t.pointers[i].clientY)
            },
            i++;
        return {
            timeStamp: rt(),
            pointers: e,
            center: q(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
        }
    }
    function q(t) {
        var e = t.length;
        if (1 === e)
            return {
                x: it(t[0].clientX),
                y: it(t[0].clientY)
            };
        for (var i = 0, n = 0, r = 0; e > r; )
            i += t[r].clientX,
            n += t[r].clientY,
            r++;
        return {
            x: it(i / e),
            y: it(n / e)
        }
    }
    function P(t, e) {
        return t === e ? gt : nt(t) >= nt(e) ? t > 0 ? mt : yt : e > 0 ? bt : xt
    }
    function A(t, e, i) {
        i || (i = Ct);
        var n = e[i[0]] - t[i[0]]
          , r = e[i[1]] - t[i[1]];
        return Math.sqrt(n * n + r * r)
    }
    function O(t, e, i) {
        i || (i = Ct);
        var n = e[i[0]] - t[i[0]]
          , r = e[i[1]] - t[i[1]];
        return 180 * Math.atan2(r, n) / Math.PI
    }
    function $() {
        this.evEl = qt,
        this.evWin = Pt,
        this.allow = !0,
        this.pressed = !1,
        T.apply(this, arguments)
    }
    function M() {
        this.evEl = $t,
        this.evWin = Mt,
        T.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function j() {
        this.evTarget = Et,
        this.evWin = It,
        this.started = !1,
        T.apply(this, arguments)
    }
    function E(t, e) {
        var i = b(t.touches)
          , n = b(t.changedTouches);
        return e & (ft | vt) && (i = x(i.concat(n), "identifier", !0)),
        [i, n]
    }
    function I() {
        this.evTarget = Bt,
        this.targetIds = {},
        T.apply(this, arguments)
    }
    function z(t, e) {
        var i = b(t.touches)
          , n = this.targetIds;
        if (e & (ht | pt) && 1 === i.length)
            return n[i[0].identifier] = !0,
            [i, i];
        var r, o, s = b(t.changedTouches), a = [], l = this.target;
        if (o = i.filter((function(t) {
            return v(t.target, l)
        }
        )),
        e === ht)
            for (r = 0; r < o.length; )
                n[o[r].identifier] = !0,
                r++;
        for (r = 0; r < s.length; )
            n[s[r].identifier] && a.push(s[r]),
            e & (ft | vt) && delete n[s[r].identifier],
            r++;
        return a.length ? [x(o.concat(a), "identifier", !0), a] : void 0
    }
    function B() {
        T.apply(this, arguments);
        var t = u(this.handler, this);
        this.touch = new I(this.manager,t),
        this.mouse = new $(this.manager,t)
    }
    function L(t, e) {
        this.manager = t,
        this.set(e)
    }
    function D(t) {
        this.id = ot++,
        this.manager = null,
        this.options = l(t || {}, this.defaults),
        this.options.enable = h(this.options.enable, !0),
        this.state = Yt,
        this.simultaneous = {},
        this.requireFail = []
    }
    function W(t) {
        return t == xt ? "down" : t == bt ? "up" : t == mt ? "left" : t == yt ? "right" : ""
    }
    function F(t, e) {
        var i = e.manager;
        return i ? i.get(t) : t
    }
    function V() {
        D.apply(this, arguments)
    }
    function N() {
        V.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function H() {
        V.apply(this, arguments)
    }
    function R() {
        D.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function Y() {
        V.apply(this, arguments)
    }
    function Q() {
        V.apply(this, arguments)
    }
    function X() {
        D.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function U(t, e) {
        return (e = e || {}).recognizers = h(e.recognizers, U.defaults.preset),
        new G(t,e)
    }
    function G(t, e) {
        e = e || {},
        this.options = l(e, U.defaults),
        this.options.inputTarget = this.options.inputTarget || t,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.element = t,
        this.input = function(t) {
            var e = t.options.inputClass;
            return new (e || (at ? M : lt ? I : st ? B : $))(t,C)
        }(this),
        this.touchAction = new L(this,this.options.touchAction),
        Z(this, !0),
        s(e.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]),
            t[3] && e.requireFailure(t[3])
        }
        ), this)
    }
    function Z(t, e) {
        var i = t.element;
        s(t.options.cssProps, (function(t, n) {
            i.style[w(i.style, n)] = e ? t : ""
        }
        ))
    }
    function J(t, i) {
        var n = e.createEvent("Event");
        n.initEvent(t, !0, !0),
        n.gesture = i,
        i.target.dispatchEvent(n)
    }
    var K = ["", "webkit", "moz", "MS", "ms", "o"]
      , tt = e.createElement("div")
      , et = "function"
      , it = Math.round
      , nt = Math.abs
      , rt = Date.now
      , ot = 1
      , st = "ontouchstart"in t
      , at = w(t, "PointerEvent") !== n
      , lt = st && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
      , ct = "touch"
      , ut = "mouse"
      , dt = 25
      , ht = 1
      , pt = 2
      , ft = 4
      , vt = 8
      , gt = 1
      , mt = 2
      , yt = 4
      , bt = 8
      , xt = 16
      , wt = mt | yt
      , kt = bt | xt
      , Tt = wt | kt
      , Ct = ["x", "y"]
      , St = ["clientX", "clientY"];
    T.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler),
            this.evTarget && p(this.target, this.evTarget, this.domHandler),
            this.evWin && p(k(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler),
            this.evTarget && f(this.target, this.evTarget, this.domHandler),
            this.evWin && f(k(this.element), this.evWin, this.domHandler)
        }
    };
    var _t = {
        mousedown: ht,
        mousemove: pt,
        mouseup: ft
    }
      , qt = "mousedown"
      , Pt = "mousemove mouseup";
    c($, T, {
        handler: function(t) {
            var e = _t[t.type];
            e & ht && 0 === t.button && (this.pressed = !0),
            e & pt && 1 !== t.which && (e = ft),
            this.pressed && this.allow && (e & ft && (this.pressed = !1),
            this.callback(this.manager, e, {
                pointers: [t],
                changedPointers: [t],
                pointerType: ut,
                srcEvent: t
            }))
        }
    });
    var At = {
        pointerdown: ht,
        pointermove: pt,
        pointerup: ft,
        pointercancel: vt,
        pointerout: vt
    }
      , Ot = {
        2: ct,
        3: "pen",
        4: ut,
        5: "kinect"
    }
      , $t = "pointerdown"
      , Mt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && ($t = "MSPointerDown",
    Mt = "MSPointerMove MSPointerUp MSPointerCancel"),
    c(M, T, {
        handler: function(t) {
            var e = this.store
              , i = !1
              , n = t.type.toLowerCase().replace("ms", "")
              , r = At[n]
              , o = Ot[t.pointerType] || t.pointerType
              , s = o == ct
              , a = y(e, t.pointerId, "pointerId");
            r & ht && (0 === t.button || s) ? 0 > a && (e.push(t),
            a = e.length - 1) : r & (ft | vt) && (i = !0),
            0 > a || (e[a] = t,
            this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t
            }),
            i && e.splice(a, 1))
        }
    });
    var jt = {
        touchstart: ht,
        touchmove: pt,
        touchend: ft,
        touchcancel: vt
    }
      , Et = "touchstart"
      , It = "touchstart touchmove touchend touchcancel";
    c(j, T, {
        handler: function(t) {
            var e = jt[t.type];
            if (e === ht && (this.started = !0),
            this.started) {
                var i = E.call(this, t, e);
                e & (ft | vt) && 0 == i[0].length - i[1].length && (this.started = !1),
                this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: ct,
                    srcEvent: t
                })
            }
        }
    });
    var zt = {
        touchstart: ht,
        touchmove: pt,
        touchend: ft,
        touchcancel: vt
    }
      , Bt = "touchstart touchmove touchend touchcancel";
    c(I, T, {
        handler: function(t) {
            var e = zt[t.type]
              , i = z.call(this, t, e);
            i && this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: ct,
                srcEvent: t
            })
        }
    }),
    c(B, T, {
        handler: function(t, e, i) {
            var n = i.pointerType == ct
              , r = i.pointerType == ut;
            if (n)
                this.mouse.allow = !1;
            else if (r && !this.mouse.allow)
                return;
            e & (ft | vt) && (this.mouse.allow = !0),
            this.callback(t, e, i)
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Lt = w(tt.style, "touchAction")
      , Dt = Lt !== n
      , Wt = "compute"
      , Ft = "auto"
      , Vt = "manipulation"
      , Nt = "none"
      , Ht = "pan-x"
      , Rt = "pan-y";
    L.prototype = {
        set: function(t) {
            t == Wt && (t = this.compute()),
            Dt && (this.manager.element.style[Lt] = t),
            this.actions = t.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return s(this.manager.recognizers, (function(e) {
                d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }
            )),
            function(t) {
                if (g(t, Nt))
                    return Nt;
                var e = g(t, Ht)
                  , i = g(t, Rt);
                return e && i ? Ht + " " + Rt : e || i ? e ? Ht : Rt : g(t, Vt) ? Vt : Ft
            }(t.join(" "))
        },
        preventDefaults: function(t) {
            if (!Dt) {
                var e = t.srcEvent
                  , i = t.offsetDirection;
                if (this.manager.session.prevented)
                    return void e.preventDefault();
                var n = this.actions
                  , r = g(n, Nt)
                  , o = g(n, Rt)
                  , s = g(n, Ht);
                return r || o && i & wt || s && i & kt ? this.preventSrc(e) : void 0
            }
        },
        preventSrc: function(t) {
            this.manager.session.prevented = !0,
            t.preventDefault()
        }
    };
    var Yt = 1
      , Qt = 2
      , Xt = 4
      , Ut = 8
      , Gt = Ut
      , Zt = 16;
    D.prototype = {
        defaults: {},
        set: function(t) {
            return a(this.options, t),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(t) {
            if (o(t, "recognizeWith", this))
                return this;
            var e = this.simultaneous;
            return e[(t = F(t, this)).id] || (e[t.id] = t,
            t.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(t) {
            return o(t, "dropRecognizeWith", this) || (t = F(t, this),
            delete this.simultaneous[t.id]),
            this
        },
        requireFailure: function(t) {
            if (o(t, "requireFailure", this))
                return this;
            var e = this.requireFail;
            return -1 === y(e, t = F(t, this)) && (e.push(t),
            t.requireFailure(this)),
            this
        },
        dropRequireFailure: function(t) {
            if (o(t, "dropRequireFailure", this))
                return this;
            t = F(t, this);
            var e = y(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
        },
        emit: function(t) {
            function e(e) {
                i.manager.emit(i.options.event + (e ? function(t) {
                    return t & Zt ? "cancel" : t & Ut ? "end" : t & Xt ? "move" : t & Qt ? "start" : ""
                }(n) : ""), t)
            }
            var i = this
              , n = this.state;
            Ut > n && e(!0),
            e(),
            n >= Ut && e(!0)
        },
        tryEmit: function(t) {
            return this.canEmit() ? this.emit(t) : void (this.state = 32)
        },
        canEmit: function() {
            for (var t = 0; t < this.requireFail.length; ) {
                if (!(this.requireFail[t].state & (32 | Yt)))
                    return !1;
                t++
            }
            return !0
        },
        recognize: function(t) {
            var e = a({}, t);
            return d(this.options.enable, [this, e]) ? (this.state & (Gt | Zt | 32) && (this.state = Yt),
            this.state = this.process(e),
            void (this.state & (Qt | Xt | Ut | Zt) && this.tryEmit(e))) : (this.reset(),
            void (this.state = 32))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    },
    c(V, D, {
        defaults: {
            pointers: 1
        },
        attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
        },
        process: function(t) {
            var e = this.state
              , i = t.eventType
              , n = e & (Qt | Xt)
              , r = this.attrTest(t);
            return n && (i & vt || !r) ? e | Zt : n || r ? i & ft ? e | Ut : e & Qt ? e | Xt : Qt : 32
        }
    }),
    c(N, V, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Tt
        },
        getTouchAction: function() {
            var t = this.options.direction
              , e = [];
            return t & wt && e.push(Rt),
            t & kt && e.push(Ht),
            e
        },
        directionTest: function(t) {
            var e = this.options
              , i = !0
              , n = t.distance
              , r = t.direction
              , o = t.deltaX
              , s = t.deltaY;
            return r & e.direction || (e.direction & wt ? (r = 0 === o ? gt : 0 > o ? mt : yt,
            i = o != this.pX,
            n = Math.abs(t.deltaX)) : (r = 0 === s ? gt : 0 > s ? bt : xt,
            i = s != this.pY,
            n = Math.abs(t.deltaY))),
            t.direction = r,
            i && n > e.threshold && r & e.direction
        },
        attrTest: function(t) {
            return V.prototype.attrTest.call(this, t) && (this.state & Qt || !(this.state & Qt) && this.directionTest(t))
        },
        emit: function(t) {
            this.pX = t.deltaX,
            this.pY = t.deltaY;
            var e = W(t.direction);
            e && this.manager.emit(this.options.event + e, t),
            this._super.emit.call(this, t)
        }
    }),
    c(H, V, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Nt]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & Qt)
        },
        emit: function(t) {
            if (this._super.emit.call(this, t),
            1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + e, t)
            }
        }
    }),
    c(R, D, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Ft]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , n = t.distance < e.threshold
              , o = t.deltaTime > e.time;
            if (this._input = t,
            !n || !i || t.eventType & (ft | vt) && !o)
                this.reset();
            else if (t.eventType & ht)
                this.reset(),
                this._timer = r((function() {
                    this.state = Gt,
                    this.tryEmit()
                }
                ), e.time, this);
            else if (t.eventType & ft)
                return Gt;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(t) {
            this.state === Gt && (t && t.eventType & ft ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = rt(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    c(Y, V, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Nt]
        },
        attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & Qt)
        }
    }),
    c(Q, V, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: wt | kt,
            pointers: 1
        },
        getTouchAction: function() {
            return N.prototype.getTouchAction.call(this)
        },
        attrTest: function(t) {
            var e, i = this.options.direction;
            return i & (wt | kt) ? e = t.velocity : i & wt ? e = t.velocityX : i & kt && (e = t.velocityY),
            this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && nt(e) > this.options.velocity && t.eventType & ft
        },
        emit: function(t) {
            var e = W(t.direction);
            e && this.manager.emit(this.options.event + e, t),
            this.manager.emit(this.options.event, t)
        }
    }),
    c(X, D, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Vt]
        },
        process: function(t) {
            var e = this.options
              , i = t.pointers.length === e.pointers
              , n = t.distance < e.threshold
              , o = t.deltaTime < e.time;
            if (this.reset(),
            t.eventType & ht && 0 === this.count)
                return this.failTimeout();
            if (n && o && i) {
                if (t.eventType != ft)
                    return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval
                  , a = !this.pCenter || A(this.pCenter, t.center) < e.posThreshold;
                if (this.pTime = t.timeStamp,
                this.pCenter = t.center,
                a && s ? this.count += 1 : this.count = 1,
                this._input = t,
                0 === this.count % e.taps)
                    return this.hasRequireFailures() ? (this._timer = r((function() {
                        this.state = Gt,
                        this.tryEmit()
                    }
                    ), e.interval, this),
                    Qt) : Gt
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = r((function() {
                this.state = 32
            }
            ), this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == Gt && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    U.VERSION = "2.0.4",
    U.defaults = {
        domEvents: !1,
        touchAction: Wt,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[Y, {
            enable: !1
        }], [H, {
            enable: !1
        }, ["rotate"]], [Q, {
            direction: wt
        }], [N, {
            direction: wt
        }, ["swipe"]], [X], [X, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [R]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    G.prototype = {
        set: function(t) {
            return a(this.options, t),
            t.touchAction && this.touchAction.update(),
            t.inputTarget && (this.input.destroy(),
            this.input.target = t.inputTarget,
            this.input.init()),
            this
        },
        stop: function(t) {
            this.session.stopped = t ? 2 : 1
        },
        recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
                this.touchAction.preventDefaults(t);
                var i, n = this.recognizers, r = e.curRecognizer;
                (!r || r && r.state & Gt) && (r = e.curRecognizer = null);
                for (var o = 0; o < n.length; )
                    i = n[o],
                    2 === e.stopped || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(t),
                    !r && i.state & (Qt | Xt | Ut) && (r = e.curRecognizer = i),
                    o++
            }
        },
        get: function(t) {
            if (t instanceof D)
                return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
                if (e[i].options.event == t)
                    return e[i];
            return null
        },
        add: function(t) {
            if (o(t, "add", this))
                return this;
            var e = this.get(t.options.event);
            return e && this.remove(e),
            this.recognizers.push(t),
            t.manager = this,
            this.touchAction.update(),
            t
        },
        remove: function(t) {
            if (o(t, "remove", this))
                return this;
            var e = this.recognizers;
            return t = this.get(t),
            e.splice(y(e, t), 1),
            this.touchAction.update(),
            this
        },
        on: function(t, e) {
            var i = this.handlers;
            return s(m(t), (function(t) {
                i[t] = i[t] || [],
                i[t].push(e)
            }
            )),
            this
        },
        off: function(t, e) {
            var i = this.handlers;
            return s(m(t), (function(t) {
                e ? i[t].splice(y(i[t], e), 1) : delete i[t]
            }
            )),
            this
        },
        emit: function(t, e) {
            this.options.domEvents && J(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
                e.type = t,
                e.preventDefault = function() {
                    e.srcEvent.preventDefault()
                }
                ;
                for (var n = 0; n < i.length; )
                    i[n](e),
                    n++
            }
        },
        destroy: function() {
            this.element && Z(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    a(U, {
        INPUT_START: ht,
        INPUT_MOVE: pt,
        INPUT_END: ft,
        INPUT_CANCEL: vt,
        STATE_POSSIBLE: Yt,
        STATE_BEGAN: Qt,
        STATE_CHANGED: Xt,
        STATE_ENDED: Ut,
        STATE_RECOGNIZED: Gt,
        STATE_CANCELLED: Zt,
        STATE_FAILED: 32,
        DIRECTION_NONE: gt,
        DIRECTION_LEFT: mt,
        DIRECTION_RIGHT: yt,
        DIRECTION_UP: bt,
        DIRECTION_DOWN: xt,
        DIRECTION_HORIZONTAL: wt,
        DIRECTION_VERTICAL: kt,
        DIRECTION_ALL: Tt,
        Manager: G,
        Input: T,
        TouchAction: L,
        TouchInput: I,
        MouseInput: $,
        PointerEventInput: M,
        TouchMouseInput: B,
        SingleTouchInput: j,
        Recognizer: D,
        AttrRecognizer: V,
        Tap: X,
        Pan: N,
        Swipe: Q,
        Pinch: H,
        Rotate: Y,
        Press: R,
        on: p,
        off: f,
        each: s,
        merge: l,
        extend: a,
        inherit: c,
        bindFn: u,
        prefixed: w
    }),
    typeof define == et && define.amd ? define((function() {
        return U
    }
    )) : "undefined" != typeof module && module.exports ? module.exports = U : t.Hammer = U
}(window, document),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
}((function(t, e) {
    var i;
    t.fn.hammer = function(i) {
        return this.each((function() {
            !function(i, n) {
                var r = t(i);
                r.data("hammer") || r.data("hammer", new e(r[0],n))
            }(this, i)
        }
        ))
    }
    ,
    e.Manager.prototype.emit = (i = e.Manager.prototype.emit,
    function(e, n) {
        i.call(this, e, n),
        t(this.element).trigger({
            type: e,
            gesture: n
        })
    }
    )
}
)),
function(t) {
    t.fn.collapsible = function(e, i) {
        var n = {
            accordion: void 0,
            onOpen: void 0,
            onClose: void 0
        }
          , r = e;
        return e = t.extend(n, e),
        this.each((function() {
            var n = t(this)
              , o = t(this).find("> li > .collapsible-header")
              , s = n.data("collapsible");
            function a(i, r) {
                r || i.toggleClass("active"),
                e.accordion || "accordion" === s || void 0 === s ? function(e) {
                    o = n.find("> li > .collapsible-header"),
                    e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"),
                    e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }),
                    o.not(e).removeClass("active").parent().removeClass("active"),
                    o.not(e).parent().children(".collapsible-body").stop(!0, !1).each((function() {
                        t(this).is(":visible") && t(this).slideUp({
                            duration: 350,
                            easing: "easeOutQuart",
                            queue: !1,
                            complete: function() {
                                t(this).css("height", ""),
                                l(t(this).siblings(".collapsible-header"))
                            }
                        })
                    }
                    ))
                }(i) : function(e) {
                    e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"),
                    e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            t(this).css("height", "")
                        }
                    })
                }(i),
                l(i)
            }
            function l(t) {
                t.hasClass("active") ? "function" == typeof e.onOpen && e.onOpen.call(this, t.parent()) : "function" == typeof e.onClose && e.onClose.call(this, t.parent())
            }
            function c(t) {
                return t.closest("li > .collapsible-header")
            }
            function u() {
                n.off("click.collapse", "> li > .collapsible-header")
            }
            if ("destroy" !== r)
                if (i >= 0 && i < o.length) {
                    var d = o.eq(i);
                    d.length && ("open" === r || "close" === r && d.hasClass("active")) && a(d)
                } else
                    u(),
                    n.on("click.collapse", "> li > .collapsible-header", (function(e) {
                        var i = t(e.target);
                        c(i).length > 0 && (i = c(i)),
                        a(i)
                    }
                    )),
                    e.accordion || "accordion" === s || void 0 === s ? a(o.filter(".active").first(), !0) : o.filter(".active").each((function() {
                        a(t(this), !0)
                    }
                    ));
            else
                u()
        }
        ))
    }
    ,
    t(document).ready((function() {
        t(".collapsible").collapsible()
    }
    ))
}(jQuery),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, i, n, r) {
        return jQuery.easing[jQuery.easing.def](t, e, i, n, r)
    },
    easeInQuad: function(t, e, i, n, r) {
        return n * (e /= r) * e + i
    },
    easeOutQuad: function(t, e, i, n, r) {
        return -n * (e /= r) * (e - 2) + i
    },
    easeInOutQuad: function(t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
    },
    easeInCubic: function(t, e, i, n, r) {
        return n * (e /= r) * e * e + i
    },
    easeOutCubic: function(t, e, i, n, r) {
        return n * ((e = e / r - 1) * e * e + 1) + i
    },
    easeInOutCubic: function(t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
    },
    easeInQuart: function(t, e, i, n, r) {
        return n * (e /= r) * e * e * e + i
    },
    easeOutQuart: function(t, e, i, n, r) {
        return -n * ((e = e / r - 1) * e * e * e - 1) + i
    },
    easeInOutQuart: function(t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
    },
    easeInQuint: function(t, e, i, n, r) {
        return n * (e /= r) * e * e * e * e + i
    },
    easeOutQuint: function(t, e, i, n, r) {
        return n * ((e = e / r - 1) * e * e * e * e + 1) + i
    },
    easeInOutQuint: function(t, e, i, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
    },
    easeInSine: function(t, e, i, n, r) {
        return -n * Math.cos(e / r * (Math.PI / 2)) + n + i
    },
    easeOutSine: function(t, e, i, n, r) {
        return n * Math.sin(e / r * (Math.PI / 2)) + i
    },
    easeInOutSine: function(t, e, i, n, r) {
        return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + i
    },
    easeInExpo: function(t, e, i, n, r) {
        return 0 == e ? i : n * Math.pow(2, 10 * (e / r - 1)) + i
    },
    easeOutExpo: function(t, e, i, n, r) {
        return e == r ? i + n : n * (1 - Math.pow(2, -10 * e / r)) + i
    },
    easeInOutExpo: function(t, e, i, n, r) {
        return 0 == e ? i : e == r ? i + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
    },
    easeInCirc: function(t, e, i, n, r) {
        return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + i
    },
    easeOutCirc: function(t, e, i, n, r) {
        return n * Math.sqrt(1 - (e = e / r - 1) * e) + i
    },
    easeInOutCirc: function(t, e, i, n, r) {
        return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    },
    easeInElastic: function(t, e, i, n, r) {
        var o = 1.70158
          , s = 0
          , a = n;
        if (0 == e)
            return i;
        if (1 == (e /= r))
            return i + n;
        if (s || (s = .3 * r),
        a < Math.abs(n)) {
            a = n;
            o = s / 4
        } else
            o = s / (2 * Math.PI) * Math.asin(n / a);
        return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s) + i
    },
    easeOutElastic: function(t, e, i, n, r) {
        var o = 1.70158
          , s = 0
          , a = n;
        if (0 == e)
            return i;
        if (1 == (e /= r))
            return i + n;
        if (s || (s = .3 * r),
        a < Math.abs(n)) {
            a = n;
            o = s / 4
        } else
            o = s / (2 * Math.PI) * Math.asin(n / a);
        return a * Math.pow(2, -10 * e) * Math.sin((e * r - o) * (2 * Math.PI) / s) + n + i
    },
    easeInOutElastic: function(t, e, i, n, r) {
        var o = 1.70158
          , s = 0
          , a = n;
        if (0 == e)
            return i;
        if (2 == (e /= r / 2))
            return i + n;
        if (s || (s = r * (.3 * 1.5)),
        a < Math.abs(n)) {
            a = n;
            o = s / 4
        } else
            o = s / (2 * Math.PI) * Math.asin(n / a);
        return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s) * -.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s) * .5 + n + i
    },
    easeInBack: function(t, e, i, n, r, o) {
        return null == o && (o = 1.70158),
        n * (e /= r) * e * ((o + 1) * e - o) + i
    },
    easeOutBack: function(t, e, i, n, r, o) {
        return null == o && (o = 1.70158),
        n * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + i
    },
    easeInOutBack: function(t, e, i, n, r, o) {
        return null == o && (o = 1.70158),
        (e /= r / 2) < 1 ? n / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + i : n / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + i
    },
    easeInBounce: function(t, e, i, n, r) {
        return n - jQuery.easing.easeOutBounce(t, r - e, 0, n, r) + i
    },
    easeOutBounce: function(t, e, i, n, r) {
        return (e /= r) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    },
    easeInOutBounce: function(t, e, i, n, r) {
        return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, n, r) + .5 * n + i
    }
}),
function(t) {
    var e = {
        init: function(e) {
            var i = {
                onShow: null,
                swipeable: !1,
                responsiveThreshold: 1 / 0
            };
            e = t.extend(i, e);
            var n = Materialize.objectSelectorString(t(this));
            return this.each((function(i) {
                var r, o, s, a, l = n + i, c = t(this), u = t(window).width(), d = c.find("li.tab a"), h = c.width(), p = t(), f = Math.max(h, c[0].scrollWidth) / d.length, v = prev_index = 0, g = !1, m = function(t) {
                    if (void 0 !== t.position())
                        return Math.ceil(h - t.position().left - t.outerWidth() - c.scrollLeft())
                }, y = function(t) {
                    if (void 0 !== t.position())
                        return Math.floor(t.position().left + c.scrollLeft())
                }, b = function(t) {
                    v - t >= 0 ? (a.velocity({
                        right: m(r)
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    a.velocity({
                        left: y(r)
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : (a.velocity({
                        left: y(r)
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    a.velocity({
                        right: m(r)
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    }))
                };
                e.swipeable && u > e.responsiveThreshold && (e.swipeable = !1),
                0 === (r = t(d.filter('[href="' + location.hash + '"]'))).length && (r = t(this).find("li.tab a.active").first()),
                0 === r.length && (r = t(this).find("li.tab a").first()),
                r.addClass("active"),
                (v = d.index(r)) < 0 && (v = 0),
                void 0 !== r[0] && (o = t(r[0].hash)).addClass("active"),
                c.find(".indicator").length || c.append('<div class="indicator"></div>'),
                a = c.find(".indicator"),
                c.append(a),
                c.is(":visible") && setTimeout((function() {
                    a.css({
                        right: m(r)
                    }),
                    a.css({
                        left: y(r)
                    })
                }
                ), 0),
                t(window).off("resize.tabs-" + l).on("resize.tabs-" + l, (function() {
                    h = c.width(),
                    f = Math.max(h, c[0].scrollWidth) / d.length,
                    v < 0 && (v = 0),
                    0 !== f && 0 !== h && (a.css({
                        right: m(r)
                    }),
                    a.css({
                        left: y(r)
                    }))
                }
                )),
                e.swipeable ? (d.each((function() {
                    var e = t(Materialize.escapeHash(this.hash));
                    e.addClass("carousel-item"),
                    p = p.add(e)
                }
                )),
                s = p.wrapAll('<div class="tabs-content carousel"></div>'),
                p.css("display", ""),
                t(".tabs-content.carousel").carousel({
                    fullWidth: !0,
                    noWrap: !0,
                    onCycleTo: function(t) {
                        if (!g) {
                            var e = v;
                            v = s.index(t),
                            r = d.eq(v),
                            b(e)
                        }
                    }
                })) : d.not(r).each((function() {
                    t(Materialize.escapeHash(this.hash)).hide()
                }
                )),
                c.off("click.tabs").on("click.tabs", "a", (function(i) {
                    if (t(this).parent().hasClass("disabled"))
                        i.preventDefault();
                    else if (!t(this).attr("target")) {
                        g = !0,
                        h = c.width(),
                        f = Math.max(h, c[0].scrollWidth) / d.length,
                        r.removeClass("active");
                        var n = o;
                        r = t(this),
                        o = t(Materialize.escapeHash(this.hash)),
                        d = c.find("li.tab a");
                        r.position();
                        r.addClass("active"),
                        prev_index = v,
                        (v = d.index(t(this))) < 0 && (v = 0),
                        e.swipeable ? p.length && p.carousel("set", v) : (void 0 !== o && (o.show(),
                        o.addClass("active"),
                        "function" == typeof e.onShow && e.onShow.call(this, o)),
                        void 0 === n || n.is(o) || (n.hide(),
                        n.removeClass("active"))),
                        setTimeout((function() {
                            g = !1
                        }
                        ), 300),
                        b(prev_index),
                        i.preventDefault()
                    }
                }
                ))
            }
            ))
        },
        select_tab: function(t) {
            this.find('a[href="#' + t + '"]').trigger("click")
        }
    };
    t.fn.tabs = function(i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tabs") : e.init.apply(this, arguments)
    }
    ,
    t(document).ready((function() {
        t("ul.tabs").tabs()
    }
    ))
}(jQuery),
function(t) {
    t(document).ready((function() {
        Materialize.updateTextFields = function() {
            t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each((function(e, i) {
                var n = t(this);
                t(i).val().length > 0 || i.autofocus || void 0 !== n.attr("placeholder") ? n.siblings("label").addClass("active") : t(i)[0].validity ? n.siblings("label").toggleClass("active", !0 === t(i)[0].validity.badInput) : n.siblings("label").removeClass("active")
            }
            ))
        }
        ;
        var e = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        t(document).on("change", e, (function() {
            0 === t(this).val().length && void 0 === t(this).attr("placeholder") || t(this).siblings("label").addClass("active"),
            validate_field(t(this))
        }
        )),
        t(document).ready((function() {
            Materialize.updateTextFields()
        }
        )),
        t(document).on("reset", (function(i) {
            var n = t(i.target);
            n.is("form") && (n.find(e).removeClass("valid").removeClass("invalid"),
            n.find(e).each((function() {
                "" === t(this).attr("value") && t(this).siblings("label").removeClass("active")
            }
            )),
            n.find("select.initialized").each((function() {
                var t = n.find("option[selected]").text();
                n.siblings("input.select-dropdown").val(t)
            }
            )))
        }
        )),
        t(document).on("focus", e, (function() {
            t(this).siblings("label, .prefix").addClass("active")
        }
        )),
        t(document).on("blur", e, (function() {
            var e = t(this)
              , i = ".prefix";
            0 === e.val().length && !0 !== e[0].validity.badInput && void 0 === e.attr("placeholder") && (i += ", label"),
            e.siblings(i).removeClass("active"),
            validate_field(e)
        }
        )),
        window.validate_field = function(t) {
            var e = void 0 !== t.attr("data-length")
              , i = parseInt(t.attr("data-length"))
              , n = t.val().length;
            0 === t.val().length && !1 === t[0].validity.badInput ? t.hasClass("validate") && (t.removeClass("valid"),
            t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && n <= i || t.is(":valid") && !e ? (t.removeClass("invalid"),
            t.addClass("valid")) : (t.removeClass("valid"),
            t.addClass("invalid")))
        }
        ;
        t(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", (function(e) {
            if (9 === e.which)
                return t(this).addClass("tabbed"),
                void t(this).one("blur", (function(e) {
                    t(this).removeClass("tabbed")
                }
                ))
        }
        ));
        var i = t(".hiddendiv").first();
        i.length || (i = t('<div class="hiddendiv common"></div>'),
        t("body").append(i));
        t(".materialize-textarea").each((function() {
            var e = t(this);
            e.data("original-height", e.height()),
            e.data("previous-length", e.val().length)
        }
        )),
        t("body").on("keyup keydown autoresize", ".materialize-textarea", (function() {
            !function(e) {
                var n = e.css("font-family")
                  , r = e.css("font-size")
                  , o = e.css("line-height");
                r && i.css("font-size", r),
                n && i.css("font-family", n),
                o && i.css("line-height", o),
                "off" === e.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"),
                i.text(e.val() + "\n");
                var s = i.html().replace(/\n/g, "<br>");
                i.html(s),
                e.is(":visible") ? i.css("width", e.width()) : i.css("width", t(window).width() / 2),
                e.data("original-height") <= i.height() ? e.css("height", i.height()) : e.val().length < e.data("previous-length") && e.css("height", e.data("original-height")),
                e.data("previous-length", e.val().length)
            }(t(this))
        }
        )),
        t(document).on("change", '.file-field input[type="file"]', (function() {
            for (var e = t(this).closest(".file-field").find("input.file-path"), i = t(this)[0].files, n = [], r = 0; r < i.length; r++)
                n.push(i[r].name);
            e.val(n.join(", ")),
            e.trigger("change")
        }
        ));
        var n = "input[type=range]"
          , r = !1;
        t(n).each((function() {
            var e = t('<span class="thumb"><span class="value"></span></span>');
            t(this).after(e)
        }
        ));
        var o = function(t) {
            var e = -7 + parseInt(t.parent().css("padding-left")) + "px";
            t.velocity({
                height: "30px",
                width: "30px",
                top: "-30px",
                marginLeft: e
            }, {
                duration: 300,
                easing: "easeOutExpo"
            })
        }
          , s = function(t) {
            var e = t.width() - 15
              , i = parseFloat(t.attr("max"))
              , n = parseFloat(t.attr("min"));
            return (parseFloat(t.val()) - n) / (i - n) * e
        };
        t(document).on("change", n, (function(e) {
            var i = t(this).siblings(".thumb");
            i.find(".value").html(t(this).val()),
            i.hasClass("active") || o(i);
            var n = s(t(this));
            i.addClass("active").css("left", n)
        }
        )),
        t(document).on("mousedown touchstart", n, (function(e) {
            var i = t(this).siblings(".thumb");
            if (i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'),
            t(this).after(i)),
            i.find(".value").html(t(this).val()),
            r = !0,
            t(this).addClass("active"),
            i.hasClass("active") || o(i),
            "input" !== e.type) {
                var n = s(t(this));
                i.addClass("active").css("left", n)
            }
        }
        )),
        t(document).on("mouseup touchend", ".range-field", (function() {
            r = !1,
            t(this).removeClass("active")
        }
        )),
        t(document).on("input mousemove touchmove", ".range-field", (function(e) {
            var i = t(this).children(".thumb")
              , a = t(this).find(n);
            if (r) {
                i.hasClass("active") || o(i);
                var l = s(a);
                i.addClass("active").css("left", l),
                i.find(".value").html(i.siblings(n).val())
            }
        }
        )),
        t(document).on("mouseout touchleave", ".range-field", (function() {
            if (!r) {
                var e = t(this).children(".thumb")
                  , i = 7 + parseInt(t(this).css("padding-left")) + "px";
                e.hasClass("active") && e.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: i
                }, {
                    duration: 100
                }),
                e.removeClass("active")
            }
        }
        )),
        t.fn.autocomplete = function(e) {
            var i = {
                data: {},
                limit: 1 / 0,
                onAutocomplete: null,
                minLength: 1
            };
            return e = t.extend(i, e),
            this.each((function() {
                var i, n = t(this), r = e.data, o = 0, s = -1, a = n.closest(".input-field");
                if (!t.isEmptyObject(r)) {
                    var l, c = t('<ul class="autocomplete-content dropdown-content"></ul>');
                    a.length ? (l = a.children(".autocomplete-content.dropdown-content").first()).length || a.append(c) : (l = n.next(".autocomplete-content.dropdown-content")).length || n.after(c),
                    l.length && (c = l);
                    var u = function() {
                        c.empty(),
                        s = -1,
                        c.find(".active").removeClass("active"),
                        i = void 0
                    };
                    n.off("blur.autocomplete").on("blur.autocomplete", (function() {
                        u()
                    }
                    )),
                    n.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", (function(s) {
                        o = 0;
                        var a = n.val().toLowerCase();
                        if (13 !== s.which && 38 !== s.which && 40 !== s.which) {
                            if (i !== a && (u(),
                            a.length >= e.minLength))
                                for (var l in r)
                                    if (r.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(a) && l.toLowerCase() !== a) {
                                        if (o >= e.limit)
                                            break;
                                        var d = t("<li></li>");
                                        r[l] ? d.append('<img src="' + r[l] + '" class="right circle"><span>' + l + "</span>") : d.append("<span>" + l + "</span>"),
                                        c.append(d),
                                        h = a,
                                        f = void 0,
                                        v = void 0,
                                        g = void 0,
                                        m = void 0,
                                        y = void 0,
                                        b = void 0,
                                        f = (p = d).find("img"),
                                        v = p.text().toLowerCase().indexOf("" + h.toLowerCase()),
                                        g = v + h.length - 1,
                                        m = p.text().slice(0, v),
                                        y = p.text().slice(v, g + 1),
                                        b = p.text().slice(g + 1),
                                        p.html("<span>" + m + "<span class='highlight'>" + y + "</span>" + b + "</span>"),
                                        f.length && p.prepend(f),
                                        o++
                                    }
                            var h, p, f, v, g, m, y, b;
                            i = a
                        }
                    }
                    )),
                    n.off("keydown.autocomplete").on("keydown.autocomplete", (function(t) {
                        var e, i = t.which, n = c.children("li").length, r = c.children(".active").first();
                        13 === i && s >= 0 ? (e = c.children("li").eq(s)).length && (e.trigger("mousedown.autocomplete"),
                        t.preventDefault()) : 38 !== i && 40 !== i || (t.preventDefault(),
                        38 === i && s > 0 && s--,
                        40 === i && s < n - 1 && s++,
                        r.removeClass("active"),
                        s >= 0 && c.children("li").eq(s).addClass("active"))
                    }
                    )),
                    c.on("mousedown.autocomplete touchstart.autocomplete", "li", (function() {
                        var i = t(this).text().trim();
                        n.val(i),
                        n.trigger("change"),
                        u(),
                        "function" == typeof e.onAutocomplete && e.onAutocomplete.call(this, i)
                    }
                    ))
                }
            }
            ))
        }
    }
    )),
    t.fn.material_select = function(e) {
        function i(t, e, i) {
            var n = t.indexOf(e)
              , r = -1 === n;
            return r ? t.push(e) : t.splice(n, 1),
            i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(e).toggleClass("active"),
            i.find("option").eq(e).prop("selected", r),
            function(t, e) {
                for (var i = "", n = 0, r = t.length; n < r; n++) {
                    var o = e.find("option").eq(t[n]).text();
                    i += 0 === n ? o : ", " + o
                }
                "" === i && (i = e.find("option:disabled").eq(0).text());
                e.siblings("input.select-dropdown").val(i)
            }(t, i),
            r
        }
        t(this).each((function() {
            var n = t(this);
            if (!n.hasClass("browser-default")) {
                var r = !!n.attr("multiple")
                  , o = n.data("select-id");
                if (o && (n.parent().find("span.caret").remove(),
                n.parent().find("input").remove(),
                n.unwrap(),
                t("ul#select-options-" + o).remove()),
                "destroy" !== e) {
                    var s = Materialize.guid();
                    n.data("select-id", s);
                    var a = t('<div class="select-wrapper"></div>');
                    a.addClass(n.attr("class"));
                    var l = t('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>')
                      , c = n.children("option, optgroup")
                      , u = []
                      , d = !1
                      , h = n.find("option:selected").html() || n.find("option:first").html() || ""
                      , p = function(e, i, n) {
                        var o = i.is(":disabled") ? "disabled " : ""
                          , s = "optgroup-option" === n ? "optgroup-option " : ""
                          , a = r ? '<input type="checkbox"' + o + "/><label></label>" : ""
                          , c = i.data("icon")
                          , u = i.attr("class");
                        if (c) {
                            var d = "";
                            return u && (d = ' class="' + u + '"'),
                            l.append(t('<li class="' + o + s + '"><img alt="" src="' + c + '"' + d + "><span>" + a + i.html() + "</span></li>")),
                            !0
                        }
                        l.append(t('<li class="' + o + s + '"><span>' + a + i.html() + "</span></li>"))
                    };
                    c.length && c.each((function() {
                        if (t(this).is("option"))
                            r ? p(0, t(this), "multiple") : p(0, t(this));
                        else if (t(this).is("optgroup")) {
                            var e = t(this).children("option");
                            l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")),
                            e.each((function() {
                                p(0, t(this), "optgroup-option")
                            }
                            ))
                        }
                    }
                    )),
                    l.find("li:not(.optgroup)").each((function(o) {
                        t(this).click((function(s) {
                            if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                                var a = !0;
                                r ? (t('input[type="checkbox"]', this).prop("checked", (function(t, e) {
                                    return !e
                                }
                                )),
                                a = i(u, o, n),
                                g.trigger("focus")) : (l.find("li").removeClass("active"),
                                t(this).toggleClass("active"),
                                g.val(t(this).text())),
                                m(l, t(this)),
                                n.find("option").eq(o).prop("selected", a),
                                n.trigger("change"),
                                void 0 !== e && e()
                            }
                            s.stopPropagation()
                        }
                        ))
                    }
                    )),
                    n.wrap(a);
                    var f = t('<span class="caret">&#9660;</span>');
                    n.is(":disabled") && f.addClass("disabled");
                    var v = h.replace(/"/g, "&quot;")
                      , g = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + v + '"/>');
                    n.before(g),
                    g.before(f),
                    g.after(l),
                    n.is(":disabled") || g.dropdown({
                        hover: !1
                    }),
                    n.attr("tabindex") && t(g[0]).attr("tabindex", n.attr("tabindex")),
                    n.addClass("initialized"),
                    g.on({
                        focus: function() {
                            if (t("ul.select-dropdown").not(l[0]).is(":visible") && t("input.select-dropdown").trigger("close"),
                            !l.is(":visible")) {
                                t(this).trigger("open", ["focus"]);
                                var e = t(this).val();
                                r && e.indexOf(",") >= 0 && (e = e.split(",")[0]);
                                var i = l.find("li").filter((function() {
                                    return t(this).text().toLowerCase() === e.toLowerCase()
                                }
                                ))[0];
                                m(l, i, !0)
                            }
                        },
                        click: function(t) {
                            t.stopPropagation()
                        }
                    }),
                    g.on("blur", (function() {
                        r || t(this).trigger("close"),
                        l.find("li.selected").removeClass("selected")
                    }
                    )),
                    l.hover((function() {
                        d = !0
                    }
                    ), (function() {
                        d = !1
                    }
                    )),
                    t(window).on({
                        click: function() {
                            r && (d || g.trigger("close"))
                        }
                    }),
                    r && n.find("option:selected:not(:disabled)").each((function() {
                        var e = t(this).index();
                        i(u, e, n),
                        l.find("li").eq(e).find(":checkbox").prop("checked", !0)
                    }
                    ));
                    var m = function(e, i, n) {
                        if (i) {
                            e.find("li.selected").removeClass("selected");
                            var o = t(i);
                            o.addClass("selected"),
                            r && !n || l.scrollTo(o)
                        }
                    }
                      , y = [];
                    g.on("keydown", (function(e) {
                        if (9 != e.which)
                            if (40 != e.which || l.is(":visible")) {
                                if (13 != e.which || l.is(":visible")) {
                                    e.preventDefault();
                                    var i = String.fromCharCode(e.which).toLowerCase();
                                    if (i && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                                        y.push(i);
                                        var n = y.join("")
                                          , o = l.find("li").filter((function() {
                                            return 0 === t(this).text().toLowerCase().indexOf(n)
                                        }
                                        ))[0];
                                        o && m(l, o)
                                    }
                                    if (13 == e.which) {
                                        var s = l.find("li.selected:not(.disabled)")[0];
                                        s && (t(s).trigger("click"),
                                        r || g.trigger("close"))
                                    }
                                    40 == e.which && (o = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0],
                                    m(l, o)),
                                    27 == e.which && g.trigger("close"),
                                    38 == e.which && (o = l.find("li.selected").prev("li:not(.disabled)")[0]) && m(l, o),
                                    setTimeout((function() {
                                        y = []
                                    }
                                    ), 1e3)
                                }
                            } else
                                g.trigger("open");
                        else
                            g.trigger("close")
                    }
                    ))
                } else
                    n.data("select-id", null).removeClass("initialized")
            }
        }
        ))
    }
}(jQuery),
function(t) {
    var e = {
        init: function(e) {
            return e = t.extend({
                indicators: !0,
                height: 400,
                transition: 500,
                interval: 6e3
            }, e),
            this.each((function() {
                var i, n, r, o = t(this), s = o.find("ul.slides").first(), a = s.find("> li"), l = s.find(".active").index();
                function c(t, e) {
                    t.hasClass("center-align") ? t.velocity({
                        opacity: 0,
                        translateY: -100
                    }, {
                        duration: e,
                        queue: !1
                    }) : t.hasClass("right-align") ? t.velocity({
                        opacity: 0,
                        translateX: 100
                    }, {
                        duration: e,
                        queue: !1
                    }) : t.hasClass("left-align") && t.velocity({
                        opacity: 0,
                        translateX: -100
                    }, {
                        duration: e,
                        queue: !1
                    })
                }
                function u(t) {
                    t >= a.length ? t = 0 : t < 0 && (t = a.length - 1),
                    (l = s.find(".active").index()) != t && (i = a.eq(l),
                    $caption = i.find(".caption"),
                    i.removeClass("active"),
                    i.velocity({
                        opacity: 0
                    }, {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            a.not(".active").velocity({
                                opacity: 0,
                                translateX: 0,
                                translateY: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    }),
                    c($caption, e.transition),
                    e.indicators && n.eq(l).removeClass("active"),
                    a.eq(t).velocity({
                        opacity: 1
                    }, {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    a.eq(t).find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: e.transition,
                        delay: e.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    a.eq(t).addClass("active"),
                    e.indicators && n.eq(t).addClass("active"))
                }
                -1 != l && (i = a.eq(l)),
                o.hasClass("fullscreen") || (e.indicators,
                o.height(e.height),
                s.height(e.height)),
                a.find(".caption").each((function() {
                    c(t(this), 0)
                }
                )),
                a.find("img").each((function() {
                    var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                    t(this).attr("src") !== e && (t(this).css("background-image", "url(" + t(this).attr("src") + ")"),
                    t(this).attr("src", e))
                }
                )),
                e.indicators && (n = t('<ul class="indicators"></ul>'),
                a.each((function(i) {
                    var o = t('<li class="indicator-item"></li>');
                    o.click((function() {
                        u(s.parent().find(t(this)).index()),
                        clearInterval(r),
                        r = setInterval((function() {
                            l = s.find(".active").index(),
                            a.length == l + 1 ? l = 0 : l += 1,
                            u(l)
                        }
                        ), e.transition + e.interval)
                    }
                    )),
                    n.append(o)
                }
                )),
                o.append(n),
                n = o.find("ul.indicators").find("li.indicator-item")),
                i ? i.show() : (a.first().addClass("active").velocity({
                    opacity: 1
                }, {
                    duration: e.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }),
                l = 0,
                i = a.eq(l),
                e.indicators && n.eq(l).addClass("active")),
                i.find("img").each((function() {
                    i.find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: e.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    })
                }
                )),
                r = setInterval((function() {
                    u((l = s.find(".active").index()) + 1)
                }
                ), e.transition + e.interval);
                var d = !1
                  , h = !1;
                o.hammer({
                    prevent_default: !1
                }).bind("pan", (function(t) {
                    if ("touch" === t.gesture.pointerType) {
                        clearInterval(r);
                        var e, i = t.gesture.direction, n = t.gesture.deltaX, l = t.gesture.velocityX, c = t.gesture.velocityY;
                        $curr_slide = s.find(".active"),
                        Math.abs(l) > Math.abs(c) && $curr_slide.velocity({
                            translateX: n
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        4 === i && (n > o.innerWidth() / 2 || l < -.65) ? h = !0 : 2 === i && (n < -1 * o.innerWidth() / 2 || l > .65) && (d = !0),
                        d && (0 === (e = $curr_slide.next()).length && (e = a.first()),
                        e.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })),
                        h && (0 === (e = $curr_slide.prev()).length && (e = a.last()),
                        e.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }
                )).bind("panend", (function(t) {
                    "touch" === t.gesture.pointerType && ($curr_slide = s.find(".active"),
                    !1,
                    curr_index = s.find(".active").index(),
                    !h && !d || a.length <= 1 ? $curr_slide.velocity({
                        translateX: 0
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }) : d ? (u(curr_index + 1),
                    $curr_slide.velocity({
                        translateX: -1 * o.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })) : h && (u(curr_index - 1),
                    $curr_slide.velocity({
                        translateX: o.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })),
                    d = !1,
                    h = !1,
                    clearInterval(r),
                    r = setInterval((function() {
                        l = s.find(".active").index(),
                        a.length == l + 1 ? l = 0 : l += 1,
                        u(l)
                    }
                    ), e.transition + e.interval))
                }
                )),
                o.on("sliderPause", (function() {
                    clearInterval(r)
                }
                )),
                o.on("sliderStart", (function() {
                    clearInterval(r),
                    r = setInterval((function() {
                        l = s.find(".active").index(),
                        a.length == l + 1 ? l = 0 : l += 1,
                        u(l)
                    }
                    ), e.transition + e.interval)
                }
                )),
                o.on("sliderNext", (function() {
                    u((l = s.find(".active").index()) + 1)
                }
                )),
                o.on("sliderPrev", (function() {
                    u((l = s.find(".active").index()) - 1)
                }
                ))
            }
            ))
        },
        pause: function() {
            t(this).trigger("sliderPause")
        },
        start: function() {
            t(this).trigger("sliderStart")
        },
        next: function() {
            t(this).trigger("sliderNext")
        },
        prev: function() {
            t(this).trigger("sliderPrev")
        }
    };
    t.fn.slider = function(i) {
        return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
    }
}(jQuery),
function(t) {
    t.fn.scrollTo = function(e) {
        return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top),
        this
    }
    ,
    t.fn.dropdown = function(e) {
        var i = {
            inDuration: 300,
            outDuration: 225,
            constrainWidth: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left",
            stopPropagation: !1
        };
        return "open" === e ? (this.each((function() {
            t(this).trigger("open")
        }
        )),
        !1) : "close" === e ? (this.each((function() {
            t(this).trigger("close")
        }
        )),
        !1) : void this.each((function() {
            var n = t(this)
              , r = t.extend({}, i, e)
              , o = !1
              , s = t("#" + n.attr("data-activates"));
            function a() {
                void 0 !== n.data("induration") && (r.inDuration = n.data("induration")),
                void 0 !== n.data("outduration") && (r.outDuration = n.data("outduration")),
                void 0 !== n.data("constrainwidth") && (r.constrainWidth = n.data("constrainwidth")),
                void 0 !== n.data("hover") && (r.hover = n.data("hover")),
                void 0 !== n.data("gutter") && (r.gutter = n.data("gutter")),
                void 0 !== n.data("beloworigin") && (r.belowOrigin = n.data("beloworigin")),
                void 0 !== n.data("alignment") && (r.alignment = n.data("alignment")),
                void 0 !== n.data("stoppropagation") && (r.stopPropagation = n.data("stoppropagation"))
            }
            function l(e) {
                "focus" === e && (o = !0),
                a(),
                s.addClass("active"),
                n.addClass("active"),
                !0 === r.constrainWidth ? s.css("width", n.outerWidth()) : s.css("white-space", "nowrap");
                var i = window.innerHeight
                  , l = n.innerHeight()
                  , u = n.offset().left
                  , d = n.offset().top - t(window).scrollTop()
                  , h = r.alignment
                  , p = 0
                  , f = 0
                  , v = 0;
                !0 === r.belowOrigin && (v = l);
                var g = 0
                  , m = 0
                  , y = n.parent();
                if (y.is("body") || (y[0].scrollHeight > y[0].clientHeight && (g = y[0].scrollTop),
                y[0].scrollWidth > y[0].clientWidth && (m = y[0].scrollLeft)),
                u + s.innerWidth() > t(window).width() ? h = "right" : u - s.innerWidth() + n.innerWidth() < 0 && (h = "left"),
                d + s.innerHeight() > i)
                    if (d + l - s.innerHeight() < 0) {
                        var b = i - d - v;
                        s.css("max-height", b)
                    } else
                        v || (v += l),
                        v -= s.innerHeight();
                if ("left" === h)
                    p = r.gutter,
                    f = n.position().left + p;
                else if ("right" === h) {
                    f = n.position().left + n.outerWidth() - s.outerWidth() + (p = -r.gutter)
                }
                s.css({
                    position: "absolute",
                    top: n.position().top + v + g,
                    left: f + m
                }),
                s.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: r.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        t(this).css("height", "")
                    }
                }).animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: r.inDuration,
                    easing: "easeOutSine"
                }),
                setTimeout((function() {
                    t(document).bind("click." + s.attr("id"), (function(e) {
                        c(),
                        t(document).unbind("click." + s.attr("id"))
                    }
                    ))
                }
                ), 0)
            }
            function c() {
                o = !1,
                s.fadeOut(r.outDuration),
                s.removeClass("active"),
                n.removeClass("active"),
                t(document).unbind("click." + s.attr("id")),
                setTimeout((function() {
                    s.css("max-height", "")
                }
                ), r.outDuration)
            }
            if (a(),
            n.after(s),
            r.hover) {
                var u = !1;
                n.unbind("click." + n.attr("id")),
                n.on("mouseenter", (function(t) {
                    !1 === u && (l(),
                    u = !0)
                }
                )),
                n.on("mouseleave", (function(e) {
                    var i = e.toElement || e.relatedTarget;
                    t(i).closest(".dropdown-content").is(s) || (s.stop(!0, !0),
                    c(),
                    u = !1)
                }
                )),
                s.on("mouseleave", (function(e) {
                    var i = e.toElement || e.relatedTarget;
                    t(i).closest(".dropdown-button").is(n) || (s.stop(!0, !0),
                    c(),
                    u = !1)
                }
                ))
            } else
                n.unbind("click." + n.attr("id")),
                n.bind("click." + n.attr("id"), (function(e) {
                    o || (n[0] != e.currentTarget || n.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? n.hasClass("active") && (c(),
                    t(document).unbind("click." + s.attr("id"))) : (e.preventDefault(),
                    r.stopPropagation && e.stopPropagation(),
                    l("click")))
                }
                ));
            n.on("open", (function(t, e) {
                l(e)
            }
            )),
            n.on("close", c)
        }
        ))
    }
    ,
    t(document).ready((function() {
        t(".dropdown-button").dropdown()
    }
    ))
}(jQuery),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}((function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, n) {
            var r, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(o, o.initials),
            o.activeBreakpoint = null,
            o.animType = null,
            o.animProp = null,
            o.breakpoints = [],
            o.breakpointSettings = [],
            o.cssTransitions = !1,
            o.focussed = !1,
            o.interrupted = !1,
            o.hidden = "hidden",
            o.paused = !0,
            o.positionProp = null,
            o.respondTo = null,
            o.rowCount = 1,
            o.shouldClick = !0,
            o.$slider = t(i),
            o.$slidesCache = null,
            o.transformType = null,
            o.transitionType = null,
            o.visibilityChange = "visibilitychange",
            o.windowWidth = 0,
            o.windowTimer = null,
            r = t(i).data("slick") || {},
            o.options = t.extend({}, o.defaults, n, r),
            o.currentSlide = o.options.initialSlide,
            o.originalSettings = o.options,
            void 0 !== document.mozHidden ? (o.hidden = "mozHidden",
            o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden",
            o.visibilityChange = "webkitvisibilitychange"),
            o.autoPlay = t.proxy(o.autoPlay, o),
            o.autoPlayClear = t.proxy(o.autoPlayClear, o),
            o.autoPlayIterator = t.proxy(o.autoPlayIterator, o),
            o.changeSlide = t.proxy(o.changeSlide, o),
            o.clickHandler = t.proxy(o.clickHandler, o),
            o.selectHandler = t.proxy(o.selectHandler, o),
            o.setPosition = t.proxy(o.setPosition, o),
            o.swipeHandler = t.proxy(o.swipeHandler, o),
            o.dragHandler = t.proxy(o.dragHandler, o),
            o.keyHandler = t.proxy(o.keyHandler, o),
            o.instanceUid = e++,
            o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            o.registerBreakpoints(),
            o.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var r = this;
        if ("boolean" == typeof i)
            n = i,
            i = null;
        else if (0 > i || i >= r.slideCount)
            return !1;
        r.unload(),
        "number" == typeof i ? 0 === i && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : n ? t(e).insertBefore(r.$slides.eq(i)) : t(e).insertAfter(r.$slides.eq(i)) : !0 === n ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack),
        r.$slides = r.$slideTrack.children(this.options.slide),
        r.$slideTrack.children(this.options.slide).detach(),
        r.$slideTrack.append(r.$slides),
        r.$slides.each((function(e, i) {
            t(i).attr("data-slick-index", e)
        }
        )),
        r.$slidesCache = r.$slides,
        r.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, i) {
        var n = {}
          , r = this;
        r.animateHeight(),
        !0 === r.options.rtl && !1 === r.options.vertical && (e = -e),
        !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
            left: e
        }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
            top: e
        }, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft),
        t({
            animStart: r.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: r.options.speed,
            easing: r.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                !1 === r.options.vertical ? (n[r.animType] = "translate(" + t + "px, 0px)",
                r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + t + "px)",
                r.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (r.applyTransition(),
        e = Math.ceil(e),
        !1 === r.options.vertical ? n[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + e + "px, 0px)",
        r.$slideTrack.css(n),
        i && setTimeout((function() {
            r.disableTransition(),
            i.call()
        }
        ), r.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)),
        e
    }
    ,
    e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each((function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        }
        ))
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
        t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this
          , e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll,
        t.currentSlide - 1 == 0 && (t.direction = 1))),
        t.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, i, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"),
            i = t("<ul />").addClass(n.options.dotsClass),
            e = 0; e <= n.getDotCount(); e += 1)
                i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = i.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each((function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }
        )),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, i, n, r, o, s, a = this;
        if (n = document.createDocumentFragment(),
        o = a.$slider.children(),
        a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows,
            r = Math.ceil(o.length / s),
            t = 0; r > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var u = t * s + (e * a.options.slidesPerRow + i);
                        o.get(u) && c.appendChild(o.get(u))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, i) {
        var n, r, o, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || t(window).width();
        if ("window" === s.respondTo ? o = c : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            for (n in r = null,
            s.breakpoints)
                s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[n] && (r = s.breakpoints[n]) : o > s.breakpoints[n] && (r = s.breakpoints[n]));
            null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || i) && (s.activeBreakpoint = r,
            "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = r) : (s.activeBreakpoint = r,
            "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]),
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e)),
            a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            !0 === e && (s.currentSlide = s.options.initialSlide),
            s.refresh(e),
            a = r),
            e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    e.prototype.changeSlide = function(e, i) {
        var n, r, o = this, s = t(e.currentTarget);
        switch (s.is("a") && e.preventDefault(),
        s.is("li") || (s = s.closest("li")),
        n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll,
        e.data.message) {
        case "previous":
            r = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, i);
            break;
        case "next":
            r = 0 === n ? o.options.slidesToScroll : n,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, i);
            break;
        case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(a), !1, i),
            s.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, i;
        if (i = 0,
        t > (e = this.getNavigableIndexes())[e.length - 1])
            t = e[e.length - 1];
        else
            for (var n in e) {
                if (t < e[n]) {
                    t = i;
                    break
                }
                i = e[n]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        t(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
        i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }
        )),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.$slider.removeClass("slick-dotted"),
        i.unslicked = !0,
        e || i.$slider.trigger("destroy", [i])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , i = {};
        i[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }),
        i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }),
        e && setTimeout((function() {
            i.disableTransition(t),
            e.call()
        }
        ), i.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t),
        e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", (function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout((function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"),
                e.autoPlay())
            }
            ), 0)
        }
        ))
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , i = 0
          , n = 0;
        if (!0 === t.options.infinite)
            for (; e < t.slideCount; )
                ++n,
                e = i + t.options.slidesToScroll,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (!0 === t.options.centerMode)
            n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount; )
                ++n,
                e = i + t.options.slidesToScroll,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else
            n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return n - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, i, n, r = this, o = 0;
        return r.slideOffset = 0,
        i = r.$slides.first().outerHeight(!0),
        !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1,
        o = i * r.options.slidesToShow * -1),
        r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1,
        o = (r.options.slidesToShow - (t - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1,
        o = r.slideCount % r.options.slidesToScroll * i * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth,
        o = (t + r.options.slidesToShow - r.slideCount) * i),
        r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0,
        o = 0),
        !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0,
        r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)),
        e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * i * -1 + o,
        !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow),
        e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1),
        e = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
        e += (r.$list.width() - n.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = this, i = 0, n = 0, r = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
        n = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); t > i; )
            r.push(i),
            i = n + e.options.slidesToScroll,
            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return r
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0,
        !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each((function(r, o) {
            return o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft ? (e = o,
            !1) : void 0
        }
        )),
        Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots(),
        i.checkResponsive(!0),
        i.focusHandler()),
        e && i.$slider.trigger("init", [i]),
        !0 === i.options.accessibility && i.initADA(),
        i.options.autoplay && (i.paused = !1,
        i.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        e.$slideTrack.attr("role", "listbox"),
        e.$slides.not(e.$slideTrack.find(".slick-cloned")).each((function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            })
        }
        )),
        null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each((function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            })
        }
        )).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each((function() {
                var e = t(this)
                  , i = t(this).attr("data-lazy")
                  , n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, (function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, (function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        }
                        )),
                        r.$slider.trigger("lazyLoaded", [r, e, i])
                    }
                    ))
                }
                ,
                n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    r.$slider.trigger("lazyLoadError", [r, e, i])
                }
                ,
                n.src = i
            }
            ))
        }
        var i, n, r = this;
        !0 === r.options.centerMode ? !0 === r.options.infinite ? n = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)),
        n = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide,
        n = Math.ceil(i + r.options.slidesToShow),
        !0 === r.options.fade && (i > 0 && i--,
        n <= r.slideCount && n++)),
        e(r.$slider.find(".slick-slide").slice(i, n)),
        r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        this.checkResponsive(),
        this.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(),
        this.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.autoPlay(),
        t.options.autoplay = !0,
        t.paused = !1,
        t.focussed = !1,
        t.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]),
        e.animating = !1,
        e.setPosition(),
        e.swipeLeft = null,
        e.options.autoplay && e.autoPlay(),
        !0 === e.options.accessibility && e.initADA())
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, r, o = this, s = t("img[data-lazy]", o.$slider);
        s.length ? (i = s.first(),
        n = i.attr("data-lazy"),
        (r = document.createElement("img")).onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"),
            !0 === o.options.adaptiveHeight && o.setPosition(),
            o.$slider.trigger("lazyLoaded", [o, i, n]),
            o.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            3 > e ? setTimeout((function() {
                o.progressiveLazyLoad(e + 1)
            }
            ), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            o.$slider.trigger("lazyLoadError", [o, i, n]),
            o.progressiveLazyLoad())
        }
        ,
        r.src = n) : o.$slider.trigger("allImagesLoaded", [o])
    }
    ,
    e.prototype.refresh = function(e) {
        var i, n, r = this;
        n = r.slideCount - r.options.slidesToShow,
        !r.options.infinite && r.currentSlide > n && (r.currentSlide = n),
        r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0),
        i = r.currentSlide,
        r.destroy(!0),
        t.extend(r, r.initials, {
            currentSlide: i
        }),
        r.init(),
        e || r.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, i, n, r = this, o = r.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            for (e in r.respondTo = r.options.respondTo || "window",
            o)
                if (n = r.breakpoints.length - 1,
                i = o[e].breakpoint,
                o.hasOwnProperty(e)) {
                    for (; n >= 0; )
                        r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1),
                        n--;
                    r.breakpoints.push(i),
                    r.breakpointSettings[i] = o[e].settings
                }
            r.breakpoints.sort((function(t, e) {
                return r.options.mobileFirst ? t - e : e - t
            }
            ))
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout((function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }
        ), 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        return "boolean" == typeof t ? t = !0 === (e = t) ? 0 : n.slideCount - 1 : t = !0 === e ? --t : t,
        !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(),
        !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        void n.reinit())
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, i, n = this, r = {};
        !0 === n.options.rtl && (t = -t),
        e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        r[n.positionProp] = t,
        !1 === n.transformsEnabled ? n.$slideTrack.css(r) : (r = {},
        !1 === n.cssTransitions ? (r[n.animType] = "translate(" + e + ", " + i + ")",
        n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + e + ", " + i + ", 0px)",
        n.$slideTrack.css(r)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        !0 === t.options.centerMode && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each((function(n, r) {
            e = i.slideWidth * n * -1,
            !0 === i.options.rtl ? t(r).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(r).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }
        )),
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, n, r, o, s = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0],
        a = arguments[1],
        o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0],
        r = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")),
        "single" === o)
            s.options[n] = r;
        else if ("multiple" === o)
            t.each(n, (function(t, e) {
                s.options[t] = e
            }
            ));
        else if ("responsive" === o)
            for (i in r)
                if ("array" !== t.type(s.options.responsive))
                    s.options.responsive = [r[i]];
                else {
                    for (e = s.options.responsive.length - 1; e >= 0; )
                        s.options.responsive[e].breakpoint === r[i].breakpoint && s.options.responsive.splice(e, 1),
                        e--;
                    s.options.responsive.push(r[i])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0),
        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, i, n, r, o = this;
        i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        o.$slides.eq(t).addClass("slick-current"),
        !0 === o.options.centerMode ? (e = Math.floor(o.options.slidesToShow / 2),
        !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = o.options.slidesToShow + t,
        i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === t ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")),
        o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow,
        n = !0 === o.options.infinite ? o.options.slidesToShow + t : t,
        o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === o.options.lazyLoad && o.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, i, n, r = this;
        if (!0 === r.options.fade && (r.options.centerMode = !1),
        !0 === r.options.infinite && !1 === r.options.fade && (i = null,
        r.slideCount > r.options.slidesToShow)) {
            for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow,
            e = r.slideCount; e > r.slideCount - n; e -= 1)
                i = e - 1,
                t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
            for (e = 0; n > e; e += 1)
                i = e,
                t(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
            r.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                t(this).attr("id", "")
            }
            ))
        }
    }
    ,
    e.prototype.interrupt = function(t) {
        t || this.autoPlay(),
        this.interrupted = t
    }
    ,
    e.prototype.selectHandler = function(e) {
        var i = this
          , n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , r = parseInt(n.attr("data-slick-index"));
        return r || (r = 0),
        i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r),
        void i.asNavFor(r)) : void i.slideHandler(r)
    }
    ,
    e.prototype.slideHandler = function(t, e, i) {
        var n, r, o, s, a, l = null, c = this;
        return e = e || !1,
        !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t),
        n = t,
        l = c.getLeft(n),
        s = c.getLeft(c.currentSlide),
        c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
        !1 === c.options.infinite && !1 === c.options.centerMode && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) || !1 === c.options.infinite && !0 === c.options.centerMode && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (n = c.currentSlide,
        !0 !== i ? c.animateSlide(s, (function() {
            c.postSlide(n)
        }
        )) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
        r = 0 > n ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n,
        c.animating = !0,
        c.$slider.trigger("beforeChange", [c, c.currentSlide, r]),
        o = c.currentSlide,
        c.currentSlide = r,
        c.setSlideClasses(c.currentSlide),
        c.options.asNavFor && ((a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
        c.updateDots(),
        c.updateArrows(),
        !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(o),
        c.fadeSlide(r, (function() {
            c.postSlide(r)
        }
        ))) : c.postSlide(r),
        void c.animateHeight()) : void (!0 !== i ? c.animateSlide(l, (function() {
            c.postSlide(r)
        }
        )) : c.postSlide(r))))
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, i, n, r = this;
        return t = r.touchObject.startX - r.touchObject.curX,
        e = r.touchObject.startY - r.touchObject.curY,
        i = Math.atan2(e, t),
        0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)),
        45 >= n && n >= 0 || 360 >= n && n >= 315 ? !1 === r.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, i, n = this;
        if (n.dragging = !1,
        n.interrupted = !1,
        n.shouldClick = !(n.touchObject.swipeLength > 10),
        void 0 === n.touchObject.curX)
            return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
            case "left":
            case "down":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                n.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(e),
            n.touchObject = {},
            n.$slider.trigger("swipe", [n, i]))
        } else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, i, n, r, o, s = this;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !(!s.dragging || o && 1 !== o.length) && (e = s.getLeft(s.currentSlide),
        s.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX,
        s.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY,
        s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
        !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
        "vertical" !== (i = s.swipeDirection()) ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(),
        r = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
        !0 === s.options.verticalSwiping && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
        n = s.touchObject.swipeLength,
        s.touchObject.edgeHit = !1,
        !1 === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction,
        s.touchObject.edgeHit = !0),
        !1 === s.options.vertical ? s.swipeLeft = e + n * r : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * r,
        !0 === s.options.verticalSwiping && (s.swipeLeft = e + n * r),
        !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null,
        !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e, i = this;
        return i.interrupted = !0,
        1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
        !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        void (i.dragging = !0))
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
    }
    ,
    t.fn.slick = function() {
        var t, i, n = this, r = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = n.length;
        for (t = 0; s > t; t++)
            if ("object" == typeof r || void 0 === r ? n[t].slick = new e(n[t],r) : i = n[t].slick[r].apply(n[t].slick, o),
            void 0 !== i)
                return i;
        return n
    }
}
)),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Raphael = e() : t.Raphael = e()
}(this, (function() {
    return function(t) {
        function e(n) {
            if (i[n])
                return i[n].exports;
            var r = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(r.exports, r, r.exports, e),
            r.loaded = !0,
            r.exports
        }
        var i = {};
        return e.m = t,
        e.c = i,
        e.p = "",
        e(0)
    }([function(t, e, i) {
        var n, r;
        n = [i(1), i(3), i(4)],
        void 0 === (r = function(t) {
            return t
        }
        .apply(e, n)) || (t.exports = r)
    }
    , function(t, e, i) {
        var n, r;
        n = [i(2)],
        void 0 === (r = function(t) {
            function e(i) {
                if (e.is(i, "function"))
                    return y ? i() : t.on("raphael.DOMload", i);
                if (e.is(i, R))
                    return e._engine.create[q](e, i.splice(0, 3 + e.is(i[0], N))).add(i);
                var n = Array.prototype.slice.call(arguments, 0);
                if (e.is(n[n.length - 1], "function")) {
                    var r = n.pop();
                    return y ? r.call(e._engine.create[q](e, n)) : t.on("raphael.DOMload", (function() {
                        r.call(e._engine.create[q](e, n))
                    }
                    ))
                }
                return e._engine.create[q](e, arguments)
            }
            function i(t) {
                if ("function" == typeof t || Object(t) !== t)
                    return t;
                var e = new t.constructor;
                for (var n in t)
                    t[T](n) && (e[n] = i(t[n]));
                return e
            }
            function n(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e)
                        return t.push(t.splice(i, 1)[0])
            }
            function r(t, e, i) {
                return function r() {
                    var o = Array.prototype.slice.call(arguments, 0)
                      , s = o.join("␀")
                      , a = r.cache = r.cache || {}
                      , l = r.count = r.count || [];
                    return a[T](s) ? (n(l, s),
                    i ? i(a[s]) : a[s]) : (l.length >= 1e3 && delete a[l.shift()],
                    l.push(s),
                    a[s] = t[q](e, o),
                    i ? i(a[s]) : a[s])
                }
            }
            function o() {
                return this.hex
            }
            function s(t, e) {
                for (var i = [], n = 0, r = t.length; r - 2 * !e > n; n += 2) {
                    var o = [{
                        x: +t[n - 2],
                        y: +t[n - 1]
                    }, {
                        x: +t[n],
                        y: +t[n + 1]
                    }, {
                        x: +t[n + 2],
                        y: +t[n + 3]
                    }, {
                        x: +t[n + 4],
                        y: +t[n + 5]
                    }];
                    e ? n ? r - 4 == n ? o[3] = {
                        x: +t[0],
                        y: +t[1]
                    } : r - 2 == n && (o[2] = {
                        x: +t[0],
                        y: +t[1]
                    },
                    o[3] = {
                        x: +t[2],
                        y: +t[3]
                    }) : o[0] = {
                        x: +t[r - 2],
                        y: +t[r - 1]
                    } : r - 4 == n ? o[3] = o[2] : n || (o[0] = {
                        x: +t[n],
                        y: +t[n + 1]
                    }),
                    i.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
                }
                return i
            }
            function a(t, e, i, n, r) {
                return t * (t * (-3 * e + 9 * i - 9 * n + 3 * r) + 6 * e - 12 * i + 6 * n) - 3 * e + 3 * i
            }
            function l(t, e, i, n, r, o, s, l, c) {
                null == c && (c = 1);
                for (var u = (c = c > 1 ? 1 : c < 0 ? 0 : c) / 2, d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], h = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, f = 0; f < 12; f++) {
                    var v = u * d[f] + u
                      , g = a(v, t, i, r, s)
                      , m = a(v, e, n, o, l)
                      , y = g * g + m * m;
                    p += h[f] * B.sqrt(y)
                }
                return u * p
            }
            function c(t, e, i, n, r, o, s, a) {
                if (!(L(t, i) < D(r, s) || D(t, i) > L(r, s) || L(e, n) < D(o, a) || D(e, n) > L(o, a))) {
                    var l = (t - i) * (o - a) - (e - n) * (r - s);
                    if (l) {
                        var c = ((t * n - e * i) * (r - s) - (t - i) * (r * a - o * s)) / l
                          , u = ((t * n - e * i) * (o - a) - (e - n) * (r * a - o * s)) / l
                          , d = +c.toFixed(2)
                          , h = +u.toFixed(2);
                        if (!(d < +D(t, i).toFixed(2) || d > +L(t, i).toFixed(2) || d < +D(r, s).toFixed(2) || d > +L(r, s).toFixed(2) || h < +D(e, n).toFixed(2) || h > +L(e, n).toFixed(2) || h < +D(o, a).toFixed(2) || h > +L(o, a).toFixed(2)))
                            return {
                                x: c,
                                y: u
                            }
                    }
                }
            }
            function u(t, i, n) {
                var r = e.bezierBBox(t)
                  , o = e.bezierBBox(i);
                if (!e.isBBoxIntersect(r, o))
                    return n ? 0 : [];
                for (var s = l.apply(0, t), a = l.apply(0, i), u = L(~~(s / 5), 1), d = L(~~(a / 5), 1), h = [], p = [], f = {}, v = n ? 0 : [], g = 0; g < u + 1; g++) {
                    var m = e.findDotsAtSegment.apply(e, t.concat(g / u));
                    h.push({
                        x: m.x,
                        y: m.y,
                        t: g / u
                    })
                }
                for (g = 0; g < d + 1; g++)
                    m = e.findDotsAtSegment.apply(e, i.concat(g / d)),
                    p.push({
                        x: m.x,
                        y: m.y,
                        t: g / d
                    });
                for (g = 0; g < u; g++)
                    for (var y = 0; y < d; y++) {
                        var b = h[g]
                          , x = h[g + 1]
                          , w = p[y]
                          , k = p[y + 1]
                          , T = W(x.x - b.x) < .001 ? "y" : "x"
                          , C = W(k.x - w.x) < .001 ? "y" : "x"
                          , S = c(b.x, b.y, x.x, x.y, w.x, w.y, k.x, k.y);
                        if (S) {
                            if (f[S.x.toFixed(4)] == S.y.toFixed(4))
                                continue;
                            f[S.x.toFixed(4)] = S.y.toFixed(4);
                            var _ = b.t + W((S[T] - b[T]) / (x[T] - b[T])) * (x.t - b.t)
                              , q = w.t + W((S[C] - w[C]) / (k[C] - w[C])) * (k.t - w.t);
                            _ >= 0 && _ <= 1.001 && q >= 0 && q <= 1.001 && (n ? v++ : v.push({
                                x: S.x,
                                y: S.y,
                                t1: D(_, 1),
                                t2: D(q, 1)
                            }))
                        }
                    }
                return v
            }
            function d(t, i, n) {
                t = e._path2curve(t),
                i = e._path2curve(i);
                for (var r, o, s, a, l, c, d, h, p, f, v = n ? 0 : [], g = 0, m = t.length; g < m; g++) {
                    var y = t[g];
                    if ("M" == y[0])
                        r = l = y[1],
                        o = c = y[2];
                    else {
                        "C" == y[0] ? (p = [r, o].concat(y.slice(1)),
                        r = p[6],
                        o = p[7]) : (p = [r, o, r, o, l, c, l, c],
                        r = l,
                        o = c);
                        for (var b = 0, x = i.length; b < x; b++) {
                            var w = i[b];
                            if ("M" == w[0])
                                s = d = w[1],
                                a = h = w[2];
                            else {
                                "C" == w[0] ? (f = [s, a].concat(w.slice(1)),
                                s = f[6],
                                a = f[7]) : (f = [s, a, s, a, d, h, d, h],
                                s = d,
                                a = h);
                                var k = u(p, f, n);
                                if (n)
                                    v += k;
                                else {
                                    for (var T = 0, C = k.length; T < C; T++)
                                        k[T].segment1 = g,
                                        k[T].segment2 = b,
                                        k[T].bez1 = p,
                                        k[T].bez2 = f;
                                    v = v.concat(k)
                                }
                            }
                        }
                    }
                }
                return v
            }
            function h(t, e, i, n, r, o) {
                null != t ? (this.a = +t,
                this.b = +e,
                this.c = +i,
                this.d = +n,
                this.e = +r,
                this.f = +o) : (this.a = 1,
                this.b = 0,
                this.c = 0,
                this.d = 1,
                this.e = 0,
                this.f = 0)
            }
            function p() {
                return this.x + $ + this.y + $ + this.width + " × " + this.height
            }
            function f(t, e, i, n, r, o) {
                function s(t) {
                    return ((c * t + l) * t + a) * t
                }
                var a = 3 * e
                  , l = 3 * (n - e) - a
                  , c = 1 - a - l
                  , u = 3 * i
                  , d = 3 * (r - i) - u
                  , h = 1 - u - d;
                return function(t, e) {
                    var i = function(t, e) {
                        var i, n, r, o, u, d;
                        for (r = t,
                        d = 0; d < 8; d++) {
                            if (o = s(r) - t,
                            W(o) < e)
                                return r;
                            if (W(u = (3 * c * r + 2 * l) * r + a) < 1e-6)
                                break;
                            r -= o / u
                        }
                        if (n = 1,
                        (r = t) < (i = 0))
                            return i;
                        if (r > n)
                            return n;
                        for (; i < n; ) {
                            if (o = s(r),
                            W(o - t) < e)
                                return r;
                            t > o ? i = r : n = r,
                            r = (n - i) / 2 + i
                        }
                        return r
                    }(t, e);
                    return ((h * i + d) * i + u) * i
                }(t, 1 / (200 * o))
            }
            function v(t, e) {
                var i = []
                  , n = {};
                if (this.ms = e,
                this.times = 1,
                t) {
                    for (var r in t)
                        t[T](r) && (n[Z(r)] = t[r],
                        i.push(Z(r)));
                    i.sort(ct)
                }
                this.anim = n,
                this.top = i[i.length - 1],
                this.percents = i
            }
            function g(i, n, r, o, s, a) {
                r = Z(r);
                var l, c, u, d, p, v, g = i.ms, m = {}, y = {}, b = {};
                if (o)
                    for (k = 0,
                    C = ne.length; k < C; k++) {
                        var w = ne[k];
                        if (w.el.id == n.id && w.anim == i) {
                            w.percent != r ? (ne.splice(k, 1),
                            u = 1) : c = w,
                            n.attr(w.totalOrigin);
                            break
                        }
                    }
                else
                    o = +y;
                for (var k = 0, C = i.percents.length; k < C; k++) {
                    if (i.percents[k] == r || i.percents[k] > o * i.top) {
                        r = i.percents[k],
                        p = i.percents[k - 1] || 0,
                        g = g / i.top * (r - p),
                        d = i.percents[k + 1],
                        l = i.anim[r];
                        break
                    }
                    o && n.attr(i.anim[i.percents[k]])
                }
                if (l) {
                    if (c)
                        c.initstatus = o,
                        c.start = new Date - c.ms * o;
                    else {
                        for (var S in l)
                            if (l[T](S) && (et[T](S) || n.paper.customAttributes[T](S)))
                                switch (m[S] = n.attr(S),
                                null == m[S] && (m[S] = tt[S]),
                                y[S] = l[S],
                                et[S]) {
                                case N:
                                    b[S] = (y[S] - m[S]) / g;
                                    break;
                                case "colour":
                                    m[S] = e.getRGB(m[S]);
                                    var _ = e.getRGB(y[S]);
                                    b[S] = {
                                        r: (_.r - m[S].r) / g,
                                        g: (_.g - m[S].g) / g,
                                        b: (_.b - m[S].b) / g
                                    };
                                    break;
                                case "path":
                                    var q = jt(m[S], y[S])
                                      , A = q[1];
                                    for (m[S] = q[0],
                                    b[S] = [],
                                    k = 0,
                                    C = m[S].length; k < C; k++) {
                                        b[S][k] = [0];
                                        for (var O = 1, $ = m[S][k].length; O < $; O++)
                                            b[S][k][O] = (A[k][O] - m[S][k][O]) / g
                                    }
                                    break;
                                case "transform":
                                    var E = n._
                                      , I = Lt(E[S], y[S]);
                                    if (I)
                                        for (m[S] = I.from,
                                        y[S] = I.to,
                                        b[S] = [],
                                        b[S].real = !0,
                                        k = 0,
                                        C = m[S].length; k < C; k++)
                                            for (b[S][k] = [m[S][k][0]],
                                            O = 1,
                                            $ = m[S][k].length; O < $; O++)
                                                b[S][k][O] = (y[S][k][O] - m[S][k][O]) / g;
                                    else {
                                        var z = n.matrix || new h
                                          , B = {
                                            _: {
                                                transform: E.transform
                                            },
                                            getBBox: function() {
                                                return n.getBBox(1)
                                            }
                                        };
                                        m[S] = [z.a, z.b, z.c, z.d, z.e, z.f],
                                        zt(B, y[S]),
                                        y[S] = B._.transform,
                                        b[S] = [(B.matrix.a - z.a) / g, (B.matrix.b - z.b) / g, (B.matrix.c - z.c) / g, (B.matrix.d - z.d) / g, (B.matrix.e - z.e) / g, (B.matrix.f - z.f) / g]
                                    }
                                    break;
                                case "csv":
                                    var L = M(l[S])[j](x)
                                      , D = M(m[S])[j](x);
                                    if ("clip-rect" == S)
                                        for (m[S] = D,
                                        b[S] = [],
                                        k = D.length; k--; )
                                            b[S][k] = (L[k] - m[S][k]) / g;
                                    y[S] = L;
                                    break;
                                default:
                                    for (L = [][P](l[S]),
                                    D = [][P](m[S]),
                                    b[S] = [],
                                    k = n.paper.customAttributes[S].length; k--; )
                                        b[S][k] = ((L[k] || 0) - (D[k] || 0)) / g
                                }
                        var W = l.easing
                          , F = e.easing_formulas[W];
                        if (!F)
                            if ((F = M(W).match(U)) && 5 == F.length) {
                                var V = F;
                                F = function(t) {
                                    return f(t, +V[1], +V[2], +V[3], +V[4], g)
                                }
                            } else
                                F = ut;
                        if (w = {
                            anim: i,
                            percent: r,
                            timestamp: v = l.start || i.start || +new Date,
                            start: v + (i.del || 0),
                            status: 0,
                            initstatus: o || 0,
                            stop: !1,
                            ms: g,
                            easing: F,
                            from: m,
                            diff: b,
                            to: y,
                            el: n,
                            callback: l.callback,
                            prev: p,
                            next: d,
                            repeat: a || i.times,
                            origin: n.attr(),
                            totalOrigin: s
                        },
                        ne.push(w),
                        o && !c && !u && (w.stop = !0,
                        w.start = new Date - g * o,
                        1 == ne.length))
                            return oe();
                        u && (w.start = new Date - w.ms * o),
                        1 == ne.length && re(oe)
                    }
                    t("raphael.anim.start." + n.id, n, i)
                }
            }
            function m(t) {
                for (var e = 0; e < ne.length; e++)
                    ne[e].el.paper == t && ne.splice(e--, 1)
            }
            e.version = "2.2.0",
            e.eve = t;
            var y, b, x = /[, ]+/, w = {
                circle: 1,
                rect: 1,
                path: 1,
                ellipse: 1,
                text: 1,
                image: 1
            }, k = /\{(\d+)\}/g, T = "hasOwnProperty", C = {
                doc: document,
                win: window
            }, S = {
                was: Object.prototype[T].call(C.win, "Raphael"),
                is: C.win.Raphael
            }, _ = function() {
                this.ca = this.customAttributes = {}
            }, q = "apply", P = "concat", A = "ontouchstart"in C.win || C.win.DocumentTouch && C.doc instanceof DocumentTouch, O = "", $ = " ", M = String, j = "split", E = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[j]($), I = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, z = M.prototype.toLowerCase, B = Math, L = B.max, D = B.min, W = B.abs, F = B.pow, V = B.PI, N = "number", H = "string", R = "array", Y = Object.prototype.toString, Q = (e._ISURL = /^url\(['"]?(.+?)['"]?\)$/i,
            /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i), X = {
                NaN: 1,
                Infinity: 1,
                "-Infinity": 1
            }, U = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, G = B.round, Z = parseFloat, J = parseInt, K = M.prototype.toUpperCase, tt = e._availableAttrs = {
                "arrow-end": "none",
                "arrow-start": "none",
                blur: 0,
                "clip-rect": "0 0 1e9 1e9",
                cursor: "default",
                cx: 0,
                cy: 0,
                fill: "#fff",
                "fill-opacity": 1,
                font: '10px "Arial"',
                "font-family": '"Arial"',
                "font-size": "10",
                "font-style": "normal",
                "font-weight": 400,
                gradient: 0,
                height: 0,
                href: "https://raphaeljs.com/",
                "letter-spacing": 0,
                opacity: 1,
                path: "M0,0",
                r: 0,
                rx: 0,
                ry: 0,
                src: "",
                stroke: "#000",
                "stroke-dasharray": "",
                "stroke-linecap": "butt",
                "stroke-linejoin": "butt",
                "stroke-miterlimit": 0,
                "stroke-opacity": 1,
                "stroke-width": 1,
                target: "_blank",
                "text-anchor": "middle",
                title: "Raphael",
                transform: "",
                width: 0,
                x: 0,
                y: 0,
                class: ""
            }, et = e._availableAnimAttrs = {
                blur: N,
                "clip-rect": "csv",
                cx: N,
                cy: N,
                fill: "colour",
                "fill-opacity": N,
                "font-size": N,
                height: N,
                opacity: N,
                path: "path",
                r: N,
                rx: N,
                ry: N,
                stroke: "colour",
                "stroke-opacity": N,
                "stroke-width": N,
                transform: "transform",
                width: N,
                x: N,
                y: N
            }, it = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/, nt = {
                hs: 1,
                rg: 1
            }, rt = /,?([achlmqrstvxz]),?/gi, ot = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, st = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi, at = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi, lt = (e._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
            {}), ct = function(t, e) {
                return Z(t) - Z(e)
            }, ut = function(t) {
                return t
            }, dt = e._rectPath = function(t, e, i, n, r) {
                return r ? [["M", t + r, e], ["l", i - 2 * r, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, n - 2 * r], ["a", r, r, 0, 0, 1, -r, r], ["l", 2 * r - i, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, 2 * r - n], ["a", r, r, 0, 0, 1, r, -r], ["z"]] : [["M", t, e], ["l", i, 0], ["l", 0, n], ["l", -i, 0], ["z"]]
            }
            , ht = function(t, e, i, n) {
                return null == n && (n = i),
                [["M", t, e], ["m", 0, -n], ["a", i, n, 0, 1, 1, 0, 2 * n], ["a", i, n, 0, 1, 1, 0, -2 * n], ["z"]]
            }, pt = e._getPath = {
                path: function(t) {
                    return t.attr("path")
                },
                circle: function(t) {
                    var e = t.attrs;
                    return ht(e.cx, e.cy, e.r)
                },
                ellipse: function(t) {
                    var e = t.attrs;
                    return ht(e.cx, e.cy, e.rx, e.ry)
                },
                rect: function(t) {
                    var e = t.attrs;
                    return dt(e.x, e.y, e.width, e.height, e.r)
                },
                image: function(t) {
                    var e = t.attrs;
                    return dt(e.x, e.y, e.width, e.height)
                },
                text: function(t) {
                    var e = t._getBBox();
                    return dt(e.x, e.y, e.width, e.height)
                },
                set: function(t) {
                    var e = t._getBBox();
                    return dt(e.x, e.y, e.width, e.height)
                }
            }, ft = e.mapPath = function(t, e) {
                if (!e)
                    return t;
                var i, n, r, o, s, a, l;
                for (r = 0,
                s = (t = jt(t)).length; r < s; r++)
                    for (o = 1,
                    a = (l = t[r]).length; o < a; o += 2)
                        i = e.x(l[o], l[o + 1]),
                        n = e.y(l[o], l[o + 1]),
                        l[o] = i,
                        l[o + 1] = n;
                return t
            }
            ;
            if (e._g = C,
            e.type = C.win.SVGAngle || C.doc.implementation.hasFeature("https://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML",
            "VML" == e.type) {
                var vt, gt = C.doc.createElement("div");
                if (gt.innerHTML = '<v:shape adj="1"/>',
                (vt = gt.firstChild).style.behavior = "url(#default#VML)",
                !vt || "object" != typeof vt.adj)
                    return e.type = O;
                gt = null
            }
            e.svg = !(e.vml = "VML" == e.type),
            e._Paper = _,
            e.fn = b = _.prototype = e.prototype,
            e._id = 0,
            e.is = function(t, e) {
                return "finite" == (e = z.call(e)) ? !X[T](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || Y.call(t).slice(8, -1).toLowerCase() == e
            }
            ,
            e.angle = function(t, i, n, r, o, s) {
                if (null == o) {
                    var a = t - n
                      , l = i - r;
                    return a || l ? (180 + 180 * B.atan2(-l, -a) / V + 360) % 360 : 0
                }
                return e.angle(t, i, o, s) - e.angle(n, r, o, s)
            }
            ,
            e.rad = function(t) {
                return t % 360 * V / 180
            }
            ,
            e.deg = function(t) {
                return Math.round(180 * t / V % 360 * 1e3) / 1e3
            }
            ,
            e.snapTo = function(t, i, n) {
                if (n = e.is(n, "finite") ? n : 10,
                e.is(t, R)) {
                    for (var r = t.length; r--; )
                        if (W(t[r] - i) <= n)
                            return t[r]
                } else {
                    var o = i % (t = +t);
                    if (o < n)
                        return i - o;
                    if (o > t - n)
                        return i - o + t
                }
                return i
            }
            ;
            e.createUUID = function(t, e) {
                return function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
                }
            }(/[xy]/g, (function(t) {
                var e = 16 * B.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16)
            }
            ));
            e.setWindow = function(i) {
                t("raphael.setWindow", e, C.win, i),
                C.win = i,
                C.doc = C.win.document,
                e._engine.initWin && e._engine.initWin(C.win)
            }
            ;
            var mt = function(t) {
                if (e.vml) {
                    var i, n = /^\s+|\s+$/g;
                    try {
                        var o = new ActiveXObject("htmlfile");

                        o.write("<body>"),


                        o.write("<body>


                        o.write("<body>");
     main

                        o.close(),
                        i = o.body
                    } catch (t) {
                        i = createPopup().document.body
                    }
                    var s = i.createTextRange();
                    mt = r((function(t) {
                        try {
                            i.style.color = M(t).replace(n, O);
                            var e = s.queryCommandValue("ForeColor");
                            return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6)
                        } catch (t) {
                            return "none"
                        }
                    }
                    ))
                } else {
                    var a = C.doc.createElement("i");
                    a.title = "Raphaël Colour Picker",
                    a.style.display = "none",
                    C.doc.body.appendChild(a),
                    mt = r((function(t) {
                        return a.style.color = t,
                        C.doc.defaultView.getComputedStyle(a, O).getPropertyValue("color")
                    }
                    ))
                }
                return mt(t)
            }
              , yt = function() {
                return "hsb(" + [this.h, this.s, this.b] + ")"
            }
              , bt = function() {
                return "hsl(" + [this.h, this.s, this.l] + ")"
            }
              , xt = function() {
                return this.hex
            }
              , wt = function(t, i, n) {
                if (null == i && e.is(t, "object") && "r"in t && "g"in t && "b"in t && (n = t.b,
                i = t.g,
                t = t.r),
                null == i && e.is(t, H)) {
                    var r = e.getRGB(t);
                    t = r.r,
                    i = r.g,
                    n = r.b
                }
                return (t > 1 || i > 1 || n > 1) && (t /= 255,
                i /= 255,
                n /= 255),
                [t, i, n]
            }
              , kt = function(t, i, n, r) {
                var o = {
                    r: t *= 255,
                    g: i *= 255,
                    b: n *= 255,
                    hex: e.rgb(t, i, n),
                    toString: xt
                };
                return e.is(r, "finite") && (o.opacity = r),
                o
            };
            e.color = function(t) {
                var i;
                return e.is(t, "object") && "h"in t && "s"in t && "b"in t ? (i = e.hsb2rgb(t),
                t.r = i.r,
                t.g = i.g,
                t.b = i.b,
                t.hex = i.hex) : e.is(t, "object") && "h"in t && "s"in t && "l"in t ? (i = e.hsl2rgb(t),
                t.r = i.r,
                t.g = i.g,
                t.b = i.b,
                t.hex = i.hex) : (e.is(t, "string") && (t = e.getRGB(t)),
                e.is(t, "object") && "r"in t && "g"in t && "b"in t ? (i = e.rgb2hsl(t),
                t.h = i.h,
                t.s = i.s,
                t.l = i.l,
                i = e.rgb2hsb(t),
                t.v = i.b) : (t = {
                    hex: "none"
                }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1),
                t.toString = xt,
                t
            }
            ,
            e.hsb2rgb = function(t, e, i, n) {
                var r, o, s, a, l;
                return this.is(t, "object") && "h"in t && "s"in t && "b"in t && (i = t.b,
                e = t.s,
                n = t.o,
                t = t.h),
                r = o = s = i - (l = i * e),
                r += [l, a = l * (1 - W((t = (t *= 360) % 360 / 60) % 2 - 1)), 0, 0, a, l][t = ~~t],
                o += [a, l, l, a, 0, 0][t],
                s += [0, 0, a, l, l, a][t],
                kt(r, o, s, n)
            }
            ,
            e.hsl2rgb = function(t, e, i, n) {
                var r, o, s, a, l;
                return this.is(t, "object") && "h"in t && "s"in t && "l"in t && (i = t.l,
                e = t.s,
                t = t.h),
                (t > 1 || e > 1 || i > 1) && (t /= 360,
                e /= 100,
                i /= 100),
                r = o = s = i - (l = 2 * e * (i < .5 ? i : 1 - i)) / 2,
                r += [l, a = l * (1 - W((t = (t *= 360) % 360 / 60) % 2 - 1)), 0, 0, a, l][t = ~~t],
                o += [a, l, l, a, 0, 0][t],
                s += [0, 0, a, l, l, a][t],
                kt(r, o, s, n)
            }
            ,
            e.rgb2hsb = function(t, e, i) {
                var n, r;
                return t = (i = wt(t, e, i))[0],
                e = i[1],
                i = i[2],
                {
                    h: ((0 == (r = (n = L(t, e, i)) - D(t, e, i)) ? null : n == t ? (e - i) / r : n == e ? (i - t) / r + 2 : (t - e) / r + 4) + 360) % 6 * 60 / 360,
                    s: 0 == r ? 0 : r / n,
                    b: n,
                    toString: yt
                }
            }
            ,
            e.rgb2hsl = function(t, e, i) {
                var n, r, o, s;
                return t = (i = wt(t, e, i))[0],
                e = i[1],
                i = i[2],
                n = ((r = L(t, e, i)) + (o = D(t, e, i))) / 2,
                {
                    h: ((0 == (s = r - o) ? null : r == t ? (e - i) / s : r == e ? (i - t) / s + 2 : (t - e) / s + 4) + 360) % 6 * 60 / 360,
                    s: 0 == s ? 0 : n < .5 ? s / (2 * n) : s / (2 - 2 * n),
                    l: n,
                    toString: bt
                }
            }
            ,
            e._path2string = function() {
                return this.join(",").replace(rt, "$1")
            }
            ;
            e._preload = function(t, e) {
                var i = C.doc.createElement("img");
                i.style.cssText = "position:absolute;left:-9999em;top:-9999em",
                i.onload = function() {
                    e.call(this),
                    this.onload = null,
                    C.doc.body.removeChild(this)
                }
                ,
                i.onerror = function() {
                    C.doc.body.removeChild(this)
                }
                ,
                C.doc.body.appendChild(i),
                i.src = t
            }
            ;
            e.getRGB = r((function(t) {
                if (!t || (t = M(t)).indexOf("-") + 1)
                    return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        error: 1,
                        toString: o
                    };
                if ("none" == t)
                    return {
                        r: -1,
                        g: -1,
                        b: -1,
                        hex: "none",
                        toString: o
                    };
                !nt[T](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = mt(t));
                var i, n, r, s, a, l, c = t.match(Q);
                return c ? (c[2] && (r = J(c[2].substring(5), 16),
                n = J(c[2].substring(3, 5), 16),
                i = J(c[2].substring(1, 3), 16)),
                c[3] && (r = J((a = c[3].charAt(3)) + a, 16),
                n = J((a = c[3].charAt(2)) + a, 16),
                i = J((a = c[3].charAt(1)) + a, 16)),
                c[4] && (l = c[4][j](it),
                i = Z(l[0]),
                "%" == l[0].slice(-1) && (i *= 2.55),
                n = Z(l[1]),
                "%" == l[1].slice(-1) && (n *= 2.55),
                r = Z(l[2]),
                "%" == l[2].slice(-1) && (r *= 2.55),
                "rgba" == c[1].toLowerCase().slice(0, 4) && (s = Z(l[3])),
                l[3] && "%" == l[3].slice(-1) && (s /= 100)),
                c[5] ? (l = c[5][j](it),
                i = Z(l[0]),
                "%" == l[0].slice(-1) && (i *= 2.55),
                n = Z(l[1]),
                "%" == l[1].slice(-1) && (n *= 2.55),
                r = Z(l[2]),
                "%" == l[2].slice(-1) && (r *= 2.55),
                ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (i /= 360),
                "hsba" == c[1].toLowerCase().slice(0, 4) && (s = Z(l[3])),
                l[3] && "%" == l[3].slice(-1) && (s /= 100),
                e.hsb2rgb(i, n, r, s)) : c[6] ? (l = c[6][j](it),
                i = Z(l[0]),
                "%" == l[0].slice(-1) && (i *= 2.55),
                n = Z(l[1]),
                "%" == l[1].slice(-1) && (n *= 2.55),
                r = Z(l[2]),
                "%" == l[2].slice(-1) && (r *= 2.55),
                ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (i /= 360),
                "hsla" == c[1].toLowerCase().slice(0, 4) && (s = Z(l[3])),
                l[3] && "%" == l[3].slice(-1) && (s /= 100),
                e.hsl2rgb(i, n, r, s)) : ((c = {
                    r: i,
                    g: n,
                    b: r,
                    toString: o
                }).hex = "#" + (16777216 | r | n << 8 | i << 16).toString(16).slice(1),
                e.is(s, "finite") && (c.opacity = s),
                c)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: o
                }
            }
            ), e),
            e.hsb = r((function(t, i, n) {
                return e.hsb2rgb(t, i, n).hex
            }
            )),
            e.hsl = r((function(t, i, n) {
                return e.hsl2rgb(t, i, n).hex
            }
            )),
            e.rgb = r((function(t, e, i) {
                function n(t) {
                    return t + .5 | 0
                }
                return "#" + (16777216 | n(i) | n(e) << 8 | n(t) << 16).toString(16).slice(1)
            }
            )),
            e.getColor = function(t) {
                var e = this.getColor.start = this.getColor.start || {
                    h: 0,
                    s: 1,
                    b: t || .75
                }
                  , i = this.hsb2rgb(e.h, e.s, e.b);
                return e.h += .075,
                e.h > 1 && (e.h = 0,
                e.s -= .2,
                e.s <= 0 && (this.getColor.start = {
                    h: 0,
                    s: 1,
                    b: e.b
                })),
                i.hex
            }
            ,
            e.getColor.reset = function() {
                delete this.start
            }
            ,
            e.parsePathString = function(t) {
                if (!t)
                    return null;
                var i = Tt(t);
                if (i.arr)
                    return St(i.arr);
                var n = {
                    a: 7,
                    c: 6,
                    h: 1,
                    l: 2,
                    m: 2,
                    r: 4,
                    q: 4,
                    s: 4,
                    t: 2,
                    v: 1,
                    z: 0
                }
                  , r = [];
                return e.is(t, R) && e.is(t[0], R) && (r = St(t)),
                r.length || M(t).replace(ot, (function(t, e, i) {
                    var o = []
                      , s = e.toLowerCase();
                    if (i.replace(at, (function(t, e) {
                        e && o.push(+e)
                    }
                    )),
                    "m" == s && o.length > 2 && (r.push([e][P](o.splice(0, 2))),
                    s = "l",
                    e = "m" == e ? "l" : "L"),
                    "r" == s)
                        r.push([e][P](o));
                    else
                        for (; o.length >= n[s] && (r.push([e][P](o.splice(0, n[s]))),
                        n[s]); )
                            ;
                }
                )),
                r.toString = e._path2string,
                i.arr = St(r),
                r
            }
            ,
            e.parseTransformString = r((function(t) {
                if (!t)
                    return null;
                var i = [];
                return e.is(t, R) && e.is(t[0], R) && (i = St(t)),
                i.length || M(t).replace(st, (function(t, e, n) {
                    var r = [];
                    z.call(e);
                    n.replace(at, (function(t, e) {
                        e && r.push(+e)
                    }
                    )),
                    i.push([e][P](r))
                }
                )),
                i.toString = e._path2string,
                i
            }
            ));
            var Tt = function(t) {
                var e = Tt.ps = Tt.ps || {};
                return e[t] ? e[t].sleep = 100 : e[t] = {
                    sleep: 100
                },
                setTimeout((function() {
                    for (var i in e)
                        e[T](i) && i != t && (e[i].sleep--,
                        !e[i].sleep && delete e[i])
                }
                )),
                e[t]
            };
            e.findDotsAtSegment = function(t, e, i, n, r, o, s, a, l) {
                var c = 1 - l
                  , u = F(c, 3)
                  , d = F(c, 2)
                  , h = l * l
                  , p = h * l
                  , f = u * t + 3 * d * l * i + 3 * c * l * l * r + p * s
                  , v = u * e + 3 * d * l * n + 3 * c * l * l * o + p * a
                  , g = t + 2 * l * (i - t) + h * (r - 2 * i + t)
                  , m = e + 2 * l * (n - e) + h * (o - 2 * n + e)
                  , y = i + 2 * l * (r - i) + h * (s - 2 * r + i)
                  , b = n + 2 * l * (o - n) + h * (a - 2 * o + n)
                  , x = c * t + l * i
                  , w = c * e + l * n
                  , k = c * r + l * s
                  , T = c * o + l * a
                  , C = 90 - 180 * B.atan2(g - y, m - b) / V;
                return (g > y || m < b) && (C += 180),
                {
                    x: f,
                    y: v,
                    m: {
                        x: g,
                        y: m
                    },
                    n: {
                        x: y,
                        y: b
                    },
                    start: {
                        x: x,
                        y: w
                    },
                    end: {
                        x: k,
                        y: T
                    },
                    alpha: C
                }
            }
            ,
            e.bezierBBox = function(t, i, n, r, o, s, a, l) {
                e.is(t, "array") || (t = [t, i, n, r, o, s, a, l]);
                var c = Mt.apply(null, t);
                return {
                    x: c.min.x,
                    y: c.min.y,
                    x2: c.max.x,
                    y2: c.max.y,
                    width: c.max.x - c.min.x,
                    height: c.max.y - c.min.y
                }
            }
            ,
            e.isPointInsideBBox = function(t, e, i) {
                return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2
            }
            ,
            e.isBBoxIntersect = function(t, i) {
                var n = e.isPointInsideBBox;
                return n(i, t.x, t.y) || n(i, t.x2, t.y) || n(i, t.x, t.y2) || n(i, t.x2, t.y2) || n(t, i.x, i.y) || n(t, i.x2, i.y) || n(t, i.x, i.y2) || n(t, i.x2, i.y2) || (t.x < i.x2 && t.x > i.x || i.x < t.x2 && i.x > t.x) && (t.y < i.y2 && t.y > i.y || i.y < t.y2 && i.y > t.y)
            }
            ,
            e.pathIntersection = function(t, e) {
                return d(t, e)
            }
            ,
            e.pathIntersectionNumber = function(t, e) {
                return d(t, e, 1)
            }
            ,
            e.isPointInsidePath = function(t, i, n) {
                var r = e.pathBBox(t);
                return e.isPointInsideBBox(r, i, n) && d(t, [["M", i, n], ["H", r.x2 + 10]], 1) % 2 == 1
            }
            ,
            e._removedFactory = function(e) {
                return function() {
                    t("raphael.log", null, "Raphaël: you are calling to method “" + e + "” of removed object", e)
                }
            }
            ;
            var Ct = e.pathBBox = function(t) {
                var e = Tt(t);
                if (e.bbox)
                    return i(e.bbox);
                if (!t)
                    return {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0,
                        x2: 0,
                        y2: 0
                    };
                for (var n, r = 0, o = 0, s = [], a = [], l = 0, c = (t = jt(t)).length; l < c; l++)
                    if ("M" == (n = t[l])[0])
                        r = n[1],
                        o = n[2],
                        s.push(r),
                        a.push(o);
                    else {
                        var u = Mt(r, o, n[1], n[2], n[3], n[4], n[5], n[6]);
                        s = s[P](u.min.x, u.max.x),
                        a = a[P](u.min.y, u.max.y),
                        r = n[5],
                        o = n[6]
                    }
                var d = D[q](0, s)
                  , h = D[q](0, a)
                  , p = L[q](0, s)
                  , f = L[q](0, a)
                  , v = p - d
                  , g = f - h
                  , m = {
                    x: d,
                    y: h,
                    x2: p,
                    y2: f,
                    width: v,
                    height: g,
                    cx: d + v / 2,
                    cy: h + g / 2
                };
                return e.bbox = i(m),
                m
            }
              , St = function(t) {
                var n = i(t);
                return n.toString = e._path2string,
                n
            }
              , _t = e._pathToRelative = function(t) {
                var i = Tt(t);
                if (i.rel)
                    return St(i.rel);
                e.is(t, R) && e.is(t && t[0], R) || (t = e.parsePathString(t));
                var n = []
                  , r = 0
                  , o = 0
                  , s = 0
                  , a = 0
                  , l = 0;
                "M" == t[0][0] && (s = r = t[0][1],
                a = o = t[0][2],
                l++,
                n.push(["M", r, o]));
                for (var c = l, u = t.length; c < u; c++) {
                    var d = n[c] = []
                      , h = t[c];
                    if (h[0] != z.call(h[0]))
                        switch (d[0] = z.call(h[0]),
                        d[0]) {
                        case "a":
                            d[1] = h[1],
                            d[2] = h[2],
                            d[3] = h[3],
                            d[4] = h[4],
                            d[5] = h[5],
                            d[6] = +(h[6] - r).toFixed(3),
                            d[7] = +(h[7] - o).toFixed(3);
                            break;
                        case "v":
                            d[1] = +(h[1] - o).toFixed(3);
                            break;
                        case "m":
                            s = h[1],
                            a = h[2];
                        default:
                            for (var p = 1, f = h.length; p < f; p++)
                                d[p] = +(h[p] - (p % 2 ? r : o)).toFixed(3)
                        }
                    else {
                        d = n[c] = [],
                        "m" == h[0] && (s = h[1] + r,
                        a = h[2] + o);
                        for (var v = 0, g = h.length; v < g; v++)
                            n[c][v] = h[v]
                    }
                    var m = n[c].length;
                    switch (n[c][0]) {
                    case "z":
                        r = s,
                        o = a;
                        break;
                    case "h":
                        r += +n[c][m - 1];
                        break;
                    case "v":
                        o += +n[c][m - 1];
                        break;
                    default:
                        r += +n[c][m - 2],
                        o += +n[c][m - 1]
                    }
                }
                return n.toString = e._path2string,
                i.rel = St(n),
                n
            }
              , qt = e._pathToAbsolute = function(t) {
                var i = Tt(t);
                if (i.abs)
                    return St(i.abs);
                if (e.is(t, R) && e.is(t && t[0], R) || (t = e.parsePathString(t)),
                !t || !t.length)
                    return [["M", 0, 0]];
                var n = []
                  , r = 0
                  , o = 0
                  , a = 0
                  , l = 0
                  , c = 0;
                "M" == t[0][0] && (a = r = +t[0][1],
                l = o = +t[0][2],
                c++,
                n[0] = ["M", r, o]);
                for (var u, d, h = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = c, f = t.length; p < f; p++) {
                    if (n.push(u = []),
                    (d = t[p])[0] != K.call(d[0]))
                        switch (u[0] = K.call(d[0]),
                        u[0]) {
                        case "A":
                            u[1] = d[1],
                            u[2] = d[2],
                            u[3] = d[3],
                            u[4] = d[4],
                            u[5] = d[5],
                            u[6] = +(d[6] + r),
                            u[7] = +(d[7] + o);
                            break;
                        case "V":
                            u[1] = +d[1] + o;
                            break;
                        case "H":
                            u[1] = +d[1] + r;
                            break;
                        case "R":
                            for (var v = [r, o][P](d.slice(1)), g = 2, m = v.length; g < m; g++)
                                v[g] = +v[g] + r,
                                v[++g] = +v[g] + o;
                            n.pop(),
                            n = n[P](s(v, h));
                            break;
                        case "M":
                            a = +d[1] + r,
                            l = +d[2] + o;
                        default:
                            for (g = 1,
                            m = d.length; g < m; g++)
                                u[g] = +d[g] + (g % 2 ? r : o)
                        }
                    else if ("R" == d[0])
                        v = [r, o][P](d.slice(1)),
                        n.pop(),
                        n = n[P](s(v, h)),
                        u = ["R"][P](d.slice(-2));
                    else
                        for (var y = 0, b = d.length; y < b; y++)
                            u[y] = d[y];
                    switch (u[0]) {
                    case "Z":
                        r = a,
                        o = l;
                        break;
                    case "H":
                        r = u[1];
                        break;
                    case "V":
                        o = u[1];
                        break;
                    case "M":
                        a = u[u.length - 2],
                        l = u[u.length - 1];
                    default:
                        r = u[u.length - 2],
                        o = u[u.length - 1]
                    }
                }
                return n.toString = e._path2string,
                i.abs = St(n),
                n
            }
              , Pt = function(t, e, i, n) {
                return [t, e, i, n, i, n]
            }
              , At = function(t, e, i, n, r, o) {
                var s = 1 / 3
                  , a = 2 / 3;
                return [s * t + a * i, s * e + a * n, s * r + a * i, s * o + a * n, r, o]
            }
              , Ot = function(t, e, i, n, o, s, a, l, c, u) {
                var d, h = 120 * V / 180, p = V / 180 * (+o || 0), f = [], v = r((function(t, e, i) {
                    return {
                        x: t * B.cos(i) - e * B.sin(i),
                        y: t * B.sin(i) + e * B.cos(i)
                    }
                }
                ));
                if (u)
                    C = u[0],
                    S = u[1],
                    k = u[2],
                    T = u[3];
                else {
                    t = (d = v(t, e, -p)).x,
                    e = d.y,
                    l = (d = v(l, c, -p)).x,
                    c = d.y;
                    B.cos(V / 180 * o),
                    B.sin(V / 180 * o);
                    var g = (t - l) / 2
                      , m = (e - c) / 2
                      , y = g * g / (i * i) + m * m / (n * n);
                    y > 1 && (i *= y = B.sqrt(y),
                    n *= y);
                    var b = i * i
                      , x = n * n
                      , w = (s == a ? -1 : 1) * B.sqrt(W((b * x - b * m * m - x * g * g) / (b * m * m + x * g * g)))
                      , k = w * i * m / n + (t + l) / 2
                      , T = w * -n * g / i + (e + c) / 2
                      , C = B.asin(((e - T) / n).toFixed(9))
                      , S = B.asin(((c - T) / n).toFixed(9));
                    (C = t < k ? V - C : C) < 0 && (C = 2 * V + C),
                    (S = l < k ? V - S : S) < 0 && (S = 2 * V + S),
                    a && C > S && (C -= 2 * V),
                    !a && S > C && (S -= 2 * V)
                }
                var _ = S - C;
                if (W(_) > h) {
                    var q = S
                      , A = l
                      , O = c;
                    S = C + h * (a && S > C ? 1 : -1),
                    l = k + i * B.cos(S),
                    c = T + n * B.sin(S),
                    f = Ot(l, c, i, n, o, 0, a, A, O, [S, q, k, T])
                }
                _ = S - C;
                var $ = B.cos(C)
                  , M = B.sin(C)
                  , E = B.cos(S)
                  , I = B.sin(S)
                  , z = B.tan(_ / 4)
                  , L = 4 / 3 * i * z
                  , D = 4 / 3 * n * z
                  , F = [t, e]
                  , N = [t + L * M, e - D * $]
                  , H = [l + L * I, c - D * E]
                  , R = [l, c];
                if (N[0] = 2 * F[0] - N[0],
                N[1] = 2 * F[1] - N[1],
                u)
                    return [N, H, R][P](f);
                for (var Y = [], Q = 0, X = (f = [N, H, R][P](f).join()[j](",")).length; Q < X; Q++)
                    Y[Q] = Q % 2 ? v(f[Q - 1], f[Q], p).y : v(f[Q], f[Q + 1], p).x;
                return Y
            }
              , $t = function(t, e, i, n, r, o, s, a, l) {
                var c = 1 - l;
                return {
                    x: F(c, 3) * t + 3 * F(c, 2) * l * i + 3 * c * l * l * r + F(l, 3) * s,
                    y: F(c, 3) * e + 3 * F(c, 2) * l * n + 3 * c * l * l * o + F(l, 3) * a
                }
            }
              , Mt = r((function(t, e, i, n, r, o, s, a) {
                var l, c = r - 2 * i + t - (s - 2 * r + i), u = 2 * (i - t) - 2 * (r - i), d = t - i, h = (-u + B.sqrt(u * u - 4 * c * d)) / 2 / c, p = (-u - B.sqrt(u * u - 4 * c * d)) / 2 / c, f = [e, a], v = [t, s];
                return W(h) > "1e12" && (h = .5),
                W(p) > "1e12" && (p = .5),
                h > 0 && h < 1 && (l = $t(t, e, i, n, r, o, s, a, h),
                v.push(l.x),
                f.push(l.y)),
                p > 0 && p < 1 && (l = $t(t, e, i, n, r, o, s, a, p),
                v.push(l.x),
                f.push(l.y)),
                c = o - 2 * n + e - (a - 2 * o + n),
                d = e - n,
                h = (-(u = 2 * (n - e) - 2 * (o - n)) + B.sqrt(u * u - 4 * c * d)) / 2 / c,
                p = (-u - B.sqrt(u * u - 4 * c * d)) / 2 / c,
                W(h) > "1e12" && (h = .5),
                W(p) > "1e12" && (p = .5),
                h > 0 && h < 1 && (l = $t(t, e, i, n, r, o, s, a, h),
                v.push(l.x),
                f.push(l.y)),
                p > 0 && p < 1 && (l = $t(t, e, i, n, r, o, s, a, p),
                v.push(l.x),
                f.push(l.y)),
                {
                    min: {
                        x: D[q](0, v),
                        y: D[q](0, f)
                    },
                    max: {
                        x: L[q](0, v),
                        y: L[q](0, f)
                    }
                }
            }
            ))
              , jt = e._path2curve = r((function(t, e) {
                var i = !e && Tt(t);
                if (!e && i.curve)
                    return St(i.curve);
                for (var n = qt(t), r = e && qt(e), o = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, s = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, a = function(t, e, i) {
                    var n, r;
                    if (!t)
                        return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0]in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null),
                    t[0]) {
                    case "M":
                        e.X = t[1],
                        e.Y = t[2];
                        break;
                    case "A":
                        t = ["C"][P](Ot[q](0, [e.x, e.y][P](t.slice(1))));
                        break;
                    case "S":
                        "C" == i || "S" == i ? (n = 2 * e.x - e.bx,
                        r = 2 * e.y - e.by) : (n = e.x,
                        r = e.y),
                        t = ["C", n, r][P](t.slice(1));
                        break;
                    case "T":
                        "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx,
                        e.qy = 2 * e.y - e.qy) : (e.qx = e.x,
                        e.qy = e.y),
                        t = ["C"][P](At(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case "Q":
                        e.qx = t[1],
                        e.qy = t[2],
                        t = ["C"][P](At(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case "L":
                        t = ["C"][P](Pt(e.x, e.y, t[1], t[2]));
                        break;
                    case "H":
                        t = ["C"][P](Pt(e.x, e.y, t[1], e.y));
                        break;
                    case "V":
                        t = ["C"][P](Pt(e.x, e.y, e.x, t[1]));
                        break;
                    case "Z":
                        t = ["C"][P](Pt(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }, l = function(t, e) {
                    if (t[e].length > 7) {
                        t[e].shift();
                        for (var i = t[e]; i.length; )
                            u[e] = "A",
                            r && (d[e] = "A"),
                            t.splice(e++, 0, ["C"][P](i.splice(0, 6)));
                        t.splice(e, 1),
                        v = L(n.length, r && r.length || 0)
                    }
                }, c = function(t, e, i, o, s) {
                    t && e && "M" == t[s][0] && "M" != e[s][0] && (e.splice(s, 0, ["M", o.x, o.y]),
                    i.bx = 0,
                    i.by = 0,
                    i.x = t[s][1],
                    i.y = t[s][2],
                    v = L(n.length, r && r.length || 0))
                }, u = [], d = [], h = "", p = "", f = 0, v = L(n.length, r && r.length || 0); f < v; f++) {
                    n[f] && (h = n[f][0]),
                    "C" != h && (u[f] = h,
                    f && (p = u[f - 1])),
                    n[f] = a(n[f], o, p),
                    "A" != u[f] && "C" == h && (u[f] = "C"),
                    l(n, f),
                    r && (r[f] && (h = r[f][0]),
                    "C" != h && (d[f] = h,
                    f && (p = d[f - 1])),
                    r[f] = a(r[f], s, p),
                    "A" != d[f] && "C" == h && (d[f] = "C"),
                    l(r, f)),
                    c(n, r, o, s, f),
                    c(r, n, s, o, f);
                    var g = n[f]
                      , m = r && r[f]
                      , y = g.length
                      , b = r && m.length;
                    o.x = g[y - 2],
                    o.y = g[y - 1],
                    o.bx = Z(g[y - 4]) || o.x,
                    o.by = Z(g[y - 3]) || o.y,
                    s.bx = r && (Z(m[b - 4]) || s.x),
                    s.by = r && (Z(m[b - 3]) || s.y),
                    s.x = r && m[b - 2],
                    s.y = r && m[b - 1]
                }
                return r || (i.curve = St(n)),
                r ? [n, r] : n
            }
            ), null, St)
              , Et = (e._parseDots = r((function(t) {
                for (var i = [], n = 0, r = t.length; n < r; n++) {
                    var o = {}
                      , s = t[n].match(/^([^:]*):?([\d\.]*)/);
                    if (o.color = e.getRGB(s[1]),
                    o.color.error)
                        return null;
                    o.opacity = o.color.opacity,
                    o.color = o.color.hex,
                    s[2] && (o.offset = s[2] + "%"),
                    i.push(o)
                }
                for (n = 1,
                r = i.length - 1; n < r; n++)
                    if (!i[n].offset) {
                        for (var a = Z(i[n - 1].offset || 0), l = 0, c = n + 1; c < r; c++)
                            if (i[c].offset) {
                                l = i[c].offset;
                                break
                            }
                        l || (l = 100,
                        c = r);
                        for (var u = ((l = Z(l)) - a) / (c - n + 1); n < c; n++)
                            a += u,
                            i[n].offset = a + "%"
                    }
                return i
            }
            )),
            e._tear = function(t, e) {
                t == e.top && (e.top = t.prev),
                t == e.bottom && (e.bottom = t.next),
                t.next && (t.next.prev = t.prev),
                t.prev && (t.prev.next = t.next)
            }
            )
              , It = (e._tofront = function(t, e) {
                e.top !== t && (Et(t, e),
                t.next = null,
                t.prev = e.top,
                e.top.next = t,
                e.top = t)
            }
            ,
            e._toback = function(t, e) {
                e.bottom !== t && (Et(t, e),
                t.next = e.bottom,
                t.prev = null,
                e.bottom.prev = t,
                e.bottom = t)
            }
            ,
            e._insertafter = function(t, e, i) {
                Et(t, i),
                e == i.top && (i.top = t),
                e.next && (e.next.prev = t),
                t.next = e.next,
                t.prev = e,
                e.next = t
            }
            ,
            e._insertbefore = function(t, e, i) {
                Et(t, i),
                e == i.bottom && (i.bottom = t),
                e.prev && (e.prev.next = t),
                t.prev = e.prev,
                e.prev = t,
                t.next = e
            }
            ,
            e.toMatrix = function(t, e) {
                var i = Ct(t)
                  , n = {
                    _: {
                        transform: O
                    },
                    getBBox: function() {
                        return i
                    }
                };
                return zt(n, e),
                n.matrix
            }
            )
              , zt = (e.transformPath = function(t, e) {
                return ft(t, It(t, e))
            }
            ,
            e._extractTransform = function(t, i) {
                if (null == i)
                    return t._.transform;
                i = M(i).replace(/\.{3}|\u2026/g, t._.transform || O);
                var n, r, o = e.parseTransformString(i), s = 0, a = 1, l = 1, c = t._, u = new h;
                if (c.transform = o || [],
                o)
                    for (var d = 0, p = o.length; d < p; d++) {
                        var f, v, g, m, y, b = o[d], x = b.length, w = M(b[0]).toLowerCase(), k = b[0] != w, T = k ? u.invert() : 0;
                        "t" == w && 3 == x ? k ? (f = T.x(0, 0),
                        v = T.y(0, 0),
                        g = T.x(b[1], b[2]),
                        m = T.y(b[1], b[2]),
                        u.translate(g - f, m - v)) : u.translate(b[1], b[2]) : "r" == w ? 2 == x ? (y = y || t.getBBox(1),
                        u.rotate(b[1], y.x + y.width / 2, y.y + y.height / 2),
                        s += b[1]) : 4 == x && (k ? (g = T.x(b[2], b[3]),
                        m = T.y(b[2], b[3]),
                        u.rotate(b[1], g, m)) : u.rotate(b[1], b[2], b[3]),
                        s += b[1]) : "s" == w ? 2 == x || 3 == x ? (y = y || t.getBBox(1),
                        u.scale(b[1], b[x - 1], y.x + y.width / 2, y.y + y.height / 2),
                        a *= b[1],
                        l *= b[x - 1]) : 5 == x && (k ? (g = T.x(b[3], b[4]),
                        m = T.y(b[3], b[4]),
                        u.scale(b[1], b[2], g, m)) : u.scale(b[1], b[2], b[3], b[4]),
                        a *= b[1],
                        l *= b[2]) : "m" == w && 7 == x && u.add(b[1], b[2], b[3], b[4], b[5], b[6]),
                        c.dirtyT = 1,
                        t.matrix = u
                    }
                t.matrix = u,
                c.sx = a,
                c.sy = l,
                c.deg = s,
                c.dx = n = u.e,
                c.dy = r = u.f,
                1 == a && 1 == l && !s && c.bbox ? (c.bbox.x += +n,
                c.bbox.y += +r) : c.dirtyT = 1
            }
            )
              , Bt = function(t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
                }
            }
              , Lt = e._equaliseTransform = function(t, i) {
                i = M(i).replace(/\.{3}|\u2026/g, t),
                t = e.parseTransformString(t) || [],
                i = e.parseTransformString(i) || [];
                for (var n, r, o, s, a = L(t.length, i.length), l = [], c = [], u = 0; u < a; u++) {
                    if (o = t[u] || Bt(i[u]),
                    s = i[u] || Bt(o),
                    o[0] != s[0] || "r" == o[0].toLowerCase() && (o[2] != s[2] || o[3] != s[3]) || "s" == o[0].toLowerCase() && (o[3] != s[3] || o[4] != s[4]))
                        return;
                    for (l[u] = [],
                    c[u] = [],
                    n = 0,
                    r = L(o.length, s.length); n < r; n++)
                        n in o && (l[u][n] = o[n]),
                        n in s && (c[u][n] = s[n])
                }
                return {
                    from: l,
                    to: c
                }
            }
            ;
            e._getContainer = function(t, i, n, r) {
                var o;
                if (null != (o = null != r || e.is(t, "object") ? t : C.doc.getElementById(t)))
                    return o.tagName ? null == i ? {
                        container: o,
                        width: o.style.pixelWidth || o.offsetWidth,
                        height: o.style.pixelHeight || o.offsetHeight
                    } : {
                        container: o,
                        width: i,
                        height: n
                    } : {
                        container: 1,
                        x: t,
                        y: i,
                        width: n,
                        height: r
                    }
            }
            ,
            e.pathToRelative = _t,
            e._engine = {},
            e.path2curve = jt,
            e.matrix = function(t, e, i, n, r, o) {
                return new h(t,e,i,n,r,o)
            }
            ,
            function(t) {
                function i(t) {
                    return t[0] * t[0] + t[1] * t[1]
                }
                function n(t) {
                    var e = B.sqrt(i(t));
                    t[0] && (t[0] /= e),
                    t[1] && (t[1] /= e)
                }
                t.add = function(t, e, i, n, r, o) {
                    var s, a, l, c, u = [[], [], []], d = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], p = [[t, i, r], [e, n, o], [0, 0, 1]];
                    for (t && t instanceof h && (p = [[t.a, t.c, t.e], [t.b, t.d, t.f], [0, 0, 1]]),
                    s = 0; s < 3; s++)
                        for (a = 0; a < 3; a++) {
                            for (c = 0,
                            l = 0; l < 3; l++)
                                c += d[s][l] * p[l][a];
                            u[s][a] = c
                        }
                    this.a = u[0][0],
                    this.b = u[1][0],
                    this.c = u[0][1],
                    this.d = u[1][1],
                    this.e = u[0][2],
                    this.f = u[1][2]
                }
                ,
                t.invert = function() {
                    var t = this
                      , e = t.a * t.d - t.b * t.c;
                    return new h(t.d / e,-t.b / e,-t.c / e,t.a / e,(t.c * t.f - t.d * t.e) / e,(t.b * t.e - t.a * t.f) / e)
                }
                ,
                t.clone = function() {
                    return new h(this.a,this.b,this.c,this.d,this.e,this.f)
                }
                ,
                t.translate = function(t, e) {
                    this.add(1, 0, 0, 1, t, e)
                }
                ,
                t.scale = function(t, e, i, n) {
                    null == e && (e = t),
                    (i || n) && this.add(1, 0, 0, 1, i, n),
                    this.add(t, 0, 0, e, 0, 0),
                    (i || n) && this.add(1, 0, 0, 1, -i, -n)
                }
                ,
                t.rotate = function(t, i, n) {
                    t = e.rad(t),
                    i = i || 0,
                    n = n || 0;
                    var r = +B.cos(t).toFixed(9)
                      , o = +B.sin(t).toFixed(9);
                    this.add(r, o, -o, r, i, n),
                    this.add(1, 0, 0, 1, -i, -n)
                }
                ,
                t.x = function(t, e) {
                    return t * this.a + e * this.c + this.e
                }
                ,
                t.y = function(t, e) {
                    return t * this.b + e * this.d + this.f
                }
                ,
                t.get = function(t) {
                    return +this[M.fromCharCode(97 + t)].toFixed(4)
                }
                ,
                t.toString = function() {
                    return e.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
                }
                ,
                t.toFilter = function() {
                    return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
                }
                ,
                t.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }
                ,
                t.split = function() {
                    var t = {};
                    t.dx = this.e,
                    t.dy = this.f;
                    var r = [[this.a, this.c], [this.b, this.d]];
                    t.scalex = B.sqrt(i(r[0])),
                    n(r[0]),
                    t.shear = r[0][0] * r[1][0] + r[0][1] * r[1][1],
                    r[1] = [r[1][0] - r[0][0] * t.shear, r[1][1] - r[0][1] * t.shear],
                    t.scaley = B.sqrt(i(r[1])),
                    n(r[1]),
                    t.shear /= t.scaley;
                    var o = -r[0][1]
                      , s = r[1][1];
                    return s < 0 ? (t.rotate = e.deg(B.acos(s)),
                    o < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(B.asin(o)),
                    t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate),
                    t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate,
                    t.noRotation = !+t.shear.toFixed(9) && !t.rotate,
                    t
                }
                ,
                t.toTransformString = function(t) {
                    var e = t || this[j]();
                    return e.isSimple ? (e.scalex = +e.scalex.toFixed(4),
                    e.scaley = +e.scaley.toFixed(4),
                    e.rotate = +e.rotate.toFixed(4),
                    (e.dx || e.dy ? "t" + [e.dx, e.dy] : O) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : O) + (e.rotate ? "r" + [e.rotate, 0, 0] : O)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                }
            }(h.prototype);
            for (var Dt = function() {
                this.returnValue = !1
            }, Wt = function() {
                return this.originalEvent.preventDefault()
            }, Ft = function() {
                this.cancelBubble = !0
            }, Vt = function() {
                return this.originalEvent.stopPropagation()
            }, Nt = function(t) {
                var e = C.doc.documentElement.scrollTop || C.doc.body.scrollTop
                  , i = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft;
                return {
                    x: t.clientX + i,
                    y: t.clientY + e
                }
            }, Ht = C.doc.addEventListener ? function(t, e, i, n) {
                var r = function(t) {
                    var e = Nt(t);
                    return i.call(n, t, e.x, e.y)
                };
                if (t.addEventListener(e, r, !1),
                A && I[e]) {
                    var o = function(e) {
                        for (var r = Nt(e), o = e, s = 0, a = e.targetTouches && e.targetTouches.length; s < a; s++)
                            if (e.targetTouches[s].target == t) {
                                (e = e.targetTouches[s]).originalEvent = o,
                                e.preventDefault = Wt,
                                e.stopPropagation = Vt;
                                break
                            }
                        return i.call(n, e, r.x, r.y)
                    };
                    t.addEventListener(I[e], o, !1)
                }
                return function() {
                    return t.removeEventListener(e, r, !1),
                    A && I[e] && t.removeEventListener(I[e], o, !1),
                    !0
                }
            }
            : C.doc.attachEvent ? function(t, e, i, n) {
                var r = function(t) {
                    t = t || C.win.event;
                    var e = C.doc.documentElement.scrollTop || C.doc.body.scrollTop
                      , r = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft
                      , o = t.clientX + r
                      , s = t.clientY + e;
                    return t.preventDefault = t.preventDefault || Dt,
                    t.stopPropagation = t.stopPropagation || Ft,
                    i.call(n, t, o, s)
                };
                return t.attachEvent("on" + e, r),
                function() {
                    return t.detachEvent("on" + e, r),
                    !0
                }
            }
            : void 0, Rt = [], Yt = function(e) {
                for (var i, n = e.clientX, r = e.clientY, o = C.doc.documentElement.scrollTop || C.doc.body.scrollTop, s = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft, a = Rt.length; a--; ) {
                    if (i = Rt[a],
                    A && e.touches) {
                        for (var l, c = e.touches.length; c--; )
                            if ((l = e.touches[c]).identifier == i.el._drag.id) {
                                n = l.clientX,
                                r = l.clientY,
                                (e.originalEvent ? e.originalEvent : e).preventDefault();
                                break
                            }
                    } else
                        e.preventDefault();
                    var u, d = i.el.node, h = d.nextSibling, p = d.parentNode, f = d.style.display;
                    C.win.opera && p.removeChild(d),
                    d.style.display = "none",
                    u = i.el.paper.getElementByPoint(n, r),
                    d.style.display = f,
                    C.win.opera && (h ? p.insertBefore(d, h) : p.appendChild(d)),
                    u && t("raphael.drag.over." + i.el.id, i.el, u),
                    n += s,
                    r += o,
                    t("raphael.drag.move." + i.el.id, i.move_scope || i.el, n - i.el._drag.x, r - i.el._drag.y, n, r, e)
                }
            }, Qt = function(i) {
                e.unmousemove(Yt).unmouseup(Qt);
                for (var n, r = Rt.length; r--; )
                    (n = Rt[r]).el._drag = {},
                    t("raphael.drag.end." + n.el.id, n.end_scope || n.start_scope || n.move_scope || n.el, i);
                Rt = []
            }, Xt = e.el = {}, Ut = E.length; Ut--; )
                !function(t) {
                    e[t] = Xt[t] = function(i, n) {
                        return e.is(i, "function") && (this.events = this.events || [],
                        this.events.push({
                            name: t,
                            f: i,
                            unbind: Ht(this.shape || this.node || C.doc, t, i, n || this)
                        })),
                        this
                    }
                    ,
                    e["un" + t] = Xt["un" + t] = function(i) {
                        for (var n = this.events || [], r = n.length; r--; )
                            n[r].name != t || !e.is(i, "undefined") && n[r].f != i || (n[r].unbind(),
                            n.splice(r, 1),
                            !n.length && delete this.events);
                        return this
                    }
                }(E[Ut]);
            Xt.data = function(i, n) {
                var r = lt[this.id] = lt[this.id] || {};
                if (0 == arguments.length)
                    return r;
                if (1 == arguments.length) {
                    if (e.is(i, "object")) {
                        for (var o in i)
                            i[T](o) && this.data(o, i[o]);
                        return this
                    }
                    return t("raphael.data.get." + this.id, this, r[i], i),
                    r[i]
                }
                return r[i] = n,
                t("raphael.data.set." + this.id, this, n, i),
                this
            }
            ,
            Xt.removeData = function(t) {
                return null == t ? lt[this.id] = {} : lt[this.id] && delete lt[this.id][t],
                this
            }
            ,
            Xt.getData = function() {
                return i(lt[this.id] || {})
            }
            ,
            Xt.hover = function(t, e, i, n) {
                return this.mouseover(t, i).mouseout(e, n || i)
            }
            ,
            Xt.unhover = function(t, e) {
                return this.unmouseover(t).unmouseout(e)
            }
            ;
            var Gt = [];
            Xt.drag = function(i, n, r, o, s, a) {
                function l(l) {
                    (l.originalEvent || l).preventDefault();
                    var c = l.clientX
                      , u = l.clientY
                      , d = C.doc.documentElement.scrollTop || C.doc.body.scrollTop
                      , h = C.doc.documentElement.scrollLeft || C.doc.body.scrollLeft;
                    if (this._drag.id = l.identifier,
                    A && l.touches)
                        for (var p, f = l.touches.length; f--; )
                            if (p = l.touches[f],
                            this._drag.id = p.identifier,
                            p.identifier == this._drag.id) {
                                c = p.clientX,
                                u = p.clientY;
                                break
                            }
                    this._drag.x = c + h,
                    this._drag.y = u + d,
                    !Rt.length && e.mousemove(Yt).mouseup(Qt),
                    Rt.push({
                        el: this,
                        move_scope: o,
                        start_scope: s,
                        end_scope: a
                    }),
                    n && t.on("raphael.drag.start." + this.id, n),
                    i && t.on("raphael.drag.move." + this.id, i),
                    r && t.on("raphael.drag.end." + this.id, r),
                    t("raphael.drag.start." + this.id, s || o || this, l.clientX + h, l.clientY + d, l)
                }
                return this._drag = {},
                Gt.push({
                    el: this,
                    start: l
                }),
                this.mousedown(l),
                this
            }
            ,
            Xt.onDragOver = function(e) {
                e ? t.on("raphael.drag.over." + this.id, e) : t.unbind("raphael.drag.over." + this.id)
            }
            ,
            Xt.undrag = function() {
                for (var i = Gt.length; i--; )
                    Gt[i].el == this && (this.unmousedown(Gt[i].start),
                    Gt.splice(i, 1),
                    t.unbind("raphael.drag.*." + this.id));
                !Gt.length && e.unmousemove(Yt).unmouseup(Qt),
                Rt = []
            }
            ,
            b.circle = function(t, i, n) {
                var r = e._engine.circle(this, t || 0, i || 0, n || 0);
                return this.__set__ && this.__set__.push(r),
                r
            }
            ,
            b.rect = function(t, i, n, r, o) {
                var s = e._engine.rect(this, t || 0, i || 0, n || 0, r || 0, o || 0);
                return this.__set__ && this.__set__.push(s),
                s
            }
            ,
            b.ellipse = function(t, i, n, r) {
                var o = e._engine.ellipse(this, t || 0, i || 0, n || 0, r || 0);
                return this.__set__ && this.__set__.push(o),
                o
            }
            ,
            b.path = function(t) {
                t && !e.is(t, H) && !e.is(t[0], R) && (t += O);
                var i = e._engine.path(e.format[q](e, arguments), this);
                return this.__set__ && this.__set__.push(i),
                i
            }
            ,
            b.image = function(t, i, n, r, o) {
                var s = e._engine.image(this, t || "about:blank", i || 0, n || 0, r || 0, o || 0);
                return this.__set__ && this.__set__.push(s),
                s
            }
            ,
            b.text = function(t, i, n) {
                var r = e._engine.text(this, t || 0, i || 0, M(n));
                return this.__set__ && this.__set__.push(r),
                r
            }
            ,
            b.set = function(t) {
                !e.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
                var i = new ae(t);
                return this.__set__ && this.__set__.push(i),
                i.paper = this,
                i.type = "set",
                i
            }
            ,
            b.setStart = function(t) {
                this.__set__ = t || this.set()
            }
            ,
            b.setFinish = function(t) {
                var e = this.__set__;
                return delete this.__set__,
                e
            }
            ,
            b.getSize = function() {
                var t = this.canvas.parentNode;
                return {
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            }
            ,
            b.setSize = function(t, i) {
                return e._engine.setSize.call(this, t, i)
            }
            ,
            b.setViewBox = function(t, i, n, r, o) {
                return e._engine.setViewBox.call(this, t, i, n, r, o)
            }
            ,
            b.top = b.bottom = null,
            b.raphael = e;
            b.getElementByPoint = function(t, e) {
                var i = this
                  , n = i.canvas
                  , r = C.doc.elementFromPoint(t, e);
                if (C.win.opera && "svg" == r.tagName) {
                    var o = function(t) {
                        var e = t.getBoundingClientRect()
                          , i = t.ownerDocument
                          , n = i.body
                          , r = i.documentElement
                          , o = r.clientTop || n.clientTop || 0
                          , s = r.clientLeft || n.clientLeft || 0;
                        return {
                            y: e.top + (C.win.pageYOffset || r.scrollTop || n.scrollTop) - o,
                            x: e.left + (C.win.pageXOffset || r.scrollLeft || n.scrollLeft) - s
                        }
                    }(n)
                      , s = n.createSVGRect();
                    s.x = t - o.x,
                    s.y = e - o.y,
                    s.width = s.height = 1;
                    var a = n.getIntersectionList(s, null);
                    a.length && (r = a[a.length - 1])
                }
                if (!r)
                    return null;
                for (; r.parentNode && r != n.parentNode && !r.raphael; )
                    r = r.parentNode;
                return r == i.canvas.parentNode && (r = n),
                r && r.raphael ? i.getById(r.raphaelid) : null
            }
            ,
            b.getElementsByBBox = function(t) {
                var i = this.set();
                return this.forEach((function(n) {
                    e.isBBoxIntersect(n.getBBox(), t) && i.push(n)
                }
                )),
                i
            }
            ,
            b.getById = function(t) {
                for (var e = this.bottom; e; ) {
                    if (e.id == t)
                        return e;
                    e = e.next
                }
                return null
            }
            ,
            b.forEach = function(t, e) {
                for (var i = this.bottom; i; ) {
                    if (!1 === t.call(e, i))
                        return this;
                    i = i.next
                }
                return this
            }
            ,
            b.getElementsByPoint = function(t, e) {
                var i = this.set();
                return this.forEach((function(n) {
                    n.isPointInside(t, e) && i.push(n)
                }
                )),
                i
            }
            ,
            Xt.isPointInside = function(t, i) {
                var n = this.realPath = pt[this.type](this);
                return this.attr("transform") && this.attr("transform").length && (n = e.transformPath(n, this.attr("transform"))),
                e.isPointInsidePath(n, t, i)
            }
            ,
            Xt.getBBox = function(t) {
                if (this.removed)
                    return {};
                var e = this._;
                return t ? (!e.dirty && e.bboxwt || (this.realPath = pt[this.type](this),
                e.bboxwt = Ct(this.realPath),
                e.bboxwt.toString = p,
                e.dirty = 0),
                e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && (!e.dirty && this.realPath || (e.bboxwt = 0,
                this.realPath = pt[this.type](this)),
                e.bbox = Ct(ft(this.realPath, this.matrix)),
                e.bbox.toString = p,
                e.dirty = e.dirtyT = 0),
                e.bbox)
            }
            ,
            Xt.clone = function() {
                if (this.removed)
                    return null;
                var t = this.paper[this.type]().attr(this.attr());
                return this.__set__ && this.__set__.push(t),
                t
            }
            ,
            Xt.glow = function(t) {
                if ("text" == this.type)
                    return null;
                var e = {
                    width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1),
                    fill: t.fill || !1,
                    opacity: null == t.opacity ? .5 : t.opacity,
                    offsetx: t.offsetx || 0,
                    offsety: t.offsety || 0,
                    color: t.color || "#000"
                }
                  , i = e.width / 2
                  , n = this.paper
                  , r = n.set()
                  , o = this.realPath || pt[this.type](this);
                o = this.matrix ? ft(o, this.matrix) : o;
                for (var s = 1; s < i + 1; s++)
                    r.push(n.path(o).attr({
                        stroke: e.color,
                        fill: e.fill ? e.color : "none",
                        "stroke-linejoin": "round",
                        "stroke-linecap": "round",
                        "stroke-width": +(e.width / i * s).toFixed(3),
                        opacity: +(e.opacity / i).toFixed(3)
                    }));
                return r.insertBefore(this).translate(e.offsetx, e.offsety)
            }
            ;
            var Zt = function(t, i, n, r, o, s, a, c, u) {
                return null == u ? l(t, i, n, r, o, s, a, c) : e.findDotsAtSegment(t, i, n, r, o, s, a, c, function(t, e, i, n, r, o, s, a, c) {
                    if (!(c < 0 || l(t, e, i, n, r, o, s, a) < c)) {
                        var u, d = .5, h = 1 - d;
                        for (u = l(t, e, i, n, r, o, s, a, h); W(u - c) > .01; )
                            u = l(t, e, i, n, r, o, s, a, h += (u < c ? 1 : -1) * (d /= 2));
                        return h
                    }
                }(t, i, n, r, o, s, a, c, u))
            }
              , Jt = function(t, i) {
                return function(n, r, o) {
                    for (var s, a, l, c, u, d = "", h = {}, p = 0, f = 0, v = (n = jt(n)).length; f < v; f++) {
                        if ("M" == (l = n[f])[0])
                            s = +l[1],
                            a = +l[2];
                        else {
                            if (p + (c = Zt(s, a, l[1], l[2], l[3], l[4], l[5], l[6])) > r) {
                                if (i && !h.start) {
                                    if (d += ["C" + (u = Zt(s, a, l[1], l[2], l[3], l[4], l[5], l[6], r - p)).start.x, u.start.y, u.m.x, u.m.y, u.x, u.y],
                                    o)
                                        return d;
                                    h.start = d,
                                    d = ["M" + u.x, u.y + "C" + u.n.x, u.n.y, u.end.x, u.end.y, l[5], l[6]].join(),
                                    p += c,
                                    s = +l[5],
                                    a = +l[6];
                                    continue
                                }
                                if (!t && !i)
                                    return {
                                        x: (u = Zt(s, a, l[1], l[2], l[3], l[4], l[5], l[6], r - p)).x,
                                        y: u.y,
                                        alpha: u.alpha
                                    }
                            }
                            p += c,
                            s = +l[5],
                            a = +l[6]
                        }
                        d += l.shift() + l
                    }
                    return h.end = d,
                    (u = t ? p : i ? h : e.findDotsAtSegment(s, a, l[0], l[1], l[2], l[3], l[4], l[5], 1)).alpha && (u = {
                        x: u.x,
                        y: u.y,
                        alpha: u.alpha
                    }),
                    u
                }
            }
              , Kt = Jt(1)
              , te = Jt()
              , ee = Jt(0, 1);
            e.getTotalLength = Kt,
            e.getPointAtLength = te,
            e.getSubpath = function(t, e, i) {
                if (this.getTotalLength(t) - i < 1e-6)
                    return ee(t, e).end;
                var n = ee(t, i, 1);
                return e ? ee(n, e).end : n
            }
            ,
            Xt.getTotalLength = function() {
                var t = this.getPath();
                if (t)
                    return this.node.getTotalLength ? this.node.getTotalLength() : Kt(t)
            }
            ,
            Xt.getPointAtLength = function(t) {
                var e = this.getPath();
                if (e)
                    return te(e, t)
            }
            ,
            Xt.getPath = function() {
                var t, i = e._getPath[this.type];
                if ("text" != this.type && "set" != this.type)
                    return i && (t = i(this)),
                    t
            }
            ,
            Xt.getSubpath = function(t, i) {
                var n = this.getPath();
                if (n)
                    return e.getSubpath(n, t, i)
            }
            ;
            var ie = e.easing_formulas = {
                linear: function(t) {
                    return t
                },
                "<": function(t) {
                    return F(t, 1.7)
                },
                ">": function(t) {
                    return F(t, .48)
                },
                "<>": function(t) {
                    var e = .48 - t / 1.04
                      , i = B.sqrt(.1734 + e * e)
                      , n = i - e
                      , r = -i - e
                      , o = F(W(n), 1 / 3) * (n < 0 ? -1 : 1) + F(W(r), 1 / 3) * (r < 0 ? -1 : 1) + .5;
                    return 3 * (1 - o) * o * o + o * o * o
                },
                backIn: function(t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                backOut: function(t) {
                    var e = 1.70158;
                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                },
                elastic: function(t) {
                    return t == !!t ? t : F(2, -10 * t) * B.sin(2 * V * (t - .075) / .3) + 1
                },
                bounce: function(t) {
                    var e, i = 7.5625, n = 2.75;
                    return t < 1 / n ? e = i * t * t : t < 2 / n ? e = i * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e = i * (t -= 2.25 / n) * t + .9375 : e = i * (t -= 2.625 / n) * t + .984375,
                    e
                }
            };
            ie.easeIn = ie["ease-in"] = ie["<"],
            ie.easeOut = ie["ease-out"] = ie[">"],
            ie.easeInOut = ie["ease-in-out"] = ie["<>"],
            ie["back-in"] = ie.backIn,
            ie["back-out"] = ie.backOut;
            var ne = []
              , re = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                setTimeout(t, 16)
            }
              , oe = function() {
                for (var i = +new Date, n = 0; n < ne.length; n++) {
                    var r = ne[n];
                    if (!r.el.removed && !r.paused) {
                        var o, s, a = i - r.start, l = r.ms, c = r.easing, u = r.from, d = r.diff, h = r.to, p = (r.t,
                        r.el), f = {}, v = {};
                        if (r.initstatus ? (a = (r.initstatus * r.anim.top - r.prev) / (r.percent - r.prev) * l,
                        r.status = r.initstatus,
                        delete r.initstatus,
                        r.stop && ne.splice(n--, 1)) : r.status = (r.prev + (r.percent - r.prev) * (a / l)) / r.anim.top,
                        !(a < 0))
                            if (a < l) {
                                var m = c(a / l);
                                for (var y in u)
                                    if (u[T](y)) {
                                        switch (et[y]) {
                                        case N:
                                            o = +u[y] + m * l * d[y];
                                            break;
                                        case "colour":
                                            o = "rgb(" + [se(G(u[y].r + m * l * d[y].r)), se(G(u[y].g + m * l * d[y].g)), se(G(u[y].b + m * l * d[y].b))].join(",") + ")";
                                            break;
                                        case "path":
                                            o = [];
                                            for (var b = 0, x = u[y].length; b < x; b++) {
                                                o[b] = [u[y][b][0]];
                                                for (var w = 1, k = u[y][b].length; w < k; w++)
                                                    o[b][w] = +u[y][b][w] + m * l * d[y][b][w];
                                                o[b] = o[b].join($)
                                            }
                                            o = o.join($);
                                            break;
                                        case "transform":
                                            if (d[y].real)
                                                for (o = [],
                                                b = 0,
                                                x = u[y].length; b < x; b++)
                                                    for (o[b] = [u[y][b][0]],
                                                    w = 1,
                                                    k = u[y][b].length; w < k; w++)
                                                        o[b][w] = u[y][b][w] + m * l * d[y][b][w];
                                            else {
                                                var C = function(t) {
                                                    return +u[y][t] + m * l * d[y][t]
                                                };
                                                o = [["m", C(0), C(1), C(2), C(3), C(4), C(5)]]
                                            }
                                            break;
                                        case "csv":
                                            if ("clip-rect" == y)
                                                for (o = [],
                                                b = 4; b--; )
                                                    o[b] = +u[y][b] + m * l * d[y][b];
                                            break;
                                        default:
                                            var S = [][P](u[y]);
                                            for (o = [],
                                            b = p.paper.customAttributes[y].length; b--; )
                                                o[b] = +S[b] + m * l * d[y][b]
                                        }
                                        f[y] = o
                                    }
                                p.attr(f),
                                function(e, i, n) {
                                    setTimeout((function() {
                                        t("raphael.anim.frame." + e, i, n)
                                    }
                                    ))
                                }(p.id, p, r.anim)
                            } else {
                                if (function(i, n, r) {
                                    setTimeout((function() {
                                        t("raphael.anim.frame." + n.id, n, r),
                                        t("raphael.anim.finish." + n.id, n, r),
                                        e.is(i, "function") && i.call(n)
                                    }
                                    ))
                                }(r.callback, p, r.anim),
                                p.attr(h),
                                ne.splice(n--, 1),
                                r.repeat > 1 && !r.next) {
                                    for (s in h)
                                        h[T](s) && (v[s] = r.totalOrigin[s]);
                                    r.el.attr(v),
                                    g(r.anim, r.el, r.anim.percents[0], null, r.totalOrigin, r.repeat - 1)
                                }
                                r.next && !r.stop && g(r.anim, r.el, r.next, null, r.totalOrigin, r.repeat)
                            }
                    }
                }
                ne.length && re(oe)
            }
              , se = function(t) {
                return t > 255 ? 255 : t < 0 ? 0 : t
            };
            Xt.animateWith = function(t, i, n, r, o, s) {
                var a = this;
                if (a.removed)
                    return s && s.call(a),
                    a;
                var l = n instanceof v ? n : e.animation(n, r, o, s);
                g(l, a, l.percents[0], null, a.attr());
                for (var c = 0, u = ne.length; c < u; c++)
                    if (ne[c].anim == i && ne[c].el == t) {
                        ne[u - 1].start = ne[c].start;
                        break
                    }
                return a
            }
            ,
            Xt.onAnimation = function(e) {
                return e ? t.on("raphael.anim.frame." + this.id, e) : t.unbind("raphael.anim.frame." + this.id),
                this
            }
            ,
            v.prototype.delay = function(t) {
                var e = new v(this.anim,this.ms);
                return e.times = this.times,
                e.del = +t || 0,
                e
            }
            ,
            v.prototype.repeat = function(t) {
                var e = new v(this.anim,this.ms);
                return e.del = this.del,
                e.times = B.floor(L(t, 0)) || 1,
                e
            }
            ,
            e.animation = function(t, i, n, r) {
                if (t instanceof v)
                    return t;
                !e.is(n, "function") && n || (r = r || n || null,
                n = null),
                t = Object(t),
                i = +i || 0;
                var o, s, a = {};
                for (s in t)
                    t[T](s) && Z(s) != s && Z(s) + "%" != s && (o = !0,
                    a[s] = t[s]);
                if (o)
                    return n && (a.easing = n),
                    r && (a.callback = r),
                    new v({
                        100: a
                    },i);
                if (r) {
                    var l = 0;
                    for (var c in t) {
                        var u = J(c);
                        t[T](c) && u > l && (l = u)
                    }
                    !t[l += "%"].callback && (t[l].callback = r)
                }
                return new v(t,i)
            }
            ,
            Xt.animate = function(t, i, n, r) {
                var o = this;
                if (o.removed)
                    return r && r.call(o),
                    o;
                var s = t instanceof v ? t : e.animation(t, i, n, r);
                return g(s, o, s.percents[0], null, o.attr()),
                o
            }
            ,
            Xt.setTime = function(t, e) {
                return t && null != e && this.status(t, D(e, t.ms) / t.ms),
                this
            }
            ,
            Xt.status = function(t, e) {
                var i, n, r = [], o = 0;
                if (null != e)
                    return g(t, this, -1, D(e, 1)),
                    this;
                for (i = ne.length; o < i; o++)
                    if ((n = ne[o]).el.id == this.id && (!t || n.anim == t)) {
                        if (t)
                            return n.status;
                        r.push({
                            anim: n.anim,
                            status: n.status
                        })
                    }
                return t ? 0 : r
            }
            ,
            Xt.pause = function(e) {
                for (var i = 0; i < ne.length; i++)
                    ne[i].el.id != this.id || e && ne[i].anim != e || !1 !== t("raphael.anim.pause." + this.id, this, ne[i].anim) && (ne[i].paused = !0);
                return this
            }
            ,
            Xt.resume = function(e) {
                for (var i = 0; i < ne.length; i++)
                    if (ne[i].el.id == this.id && (!e || ne[i].anim == e)) {
                        var n = ne[i];
                        !1 !== t("raphael.anim.resume." + this.id, this, n.anim) && (delete n.paused,
                        this.status(n.anim, n.status))
                    }
                return this
            }
            ,
            Xt.stop = function(e) {
                for (var i = 0; i < ne.length; i++)
                    ne[i].el.id != this.id || e && ne[i].anim != e || !1 !== t("raphael.anim.stop." + this.id, this, ne[i].anim) && ne.splice(i--, 1);
                return this
            }
            ,
            t.on("raphael.remove", m),
            t.on("raphael.clear", m),
            Xt.toString = function() {
                return "Raphaël’s object"
            }
            ;
            var ae = function(t) {
                if (this.items = [],
                this.length = 0,
                this.type = "set",
                t)
                    for (var e = 0, i = t.length; e < i; e++)
                        !t[e] || t[e].constructor != Xt.constructor && t[e].constructor != ae || (this[this.items.length] = this.items[this.items.length] = t[e],
                        this.length++)
            }
              , le = ae.prototype;
            for (var ce in le.push = function() {
                for (var t, e, i = 0, n = arguments.length; i < n; i++)
                    !(t = arguments[i]) || t.constructor != Xt.constructor && t.constructor != ae || (this[e = this.items.length] = this.items[e] = t,
                    this.length++);
                return this
            }
            ,
            le.pop = function() {
                return this.length && delete this[this.length--],
                this.items.pop()
            }
            ,
            le.forEach = function(t, e) {
                for (var i = 0, n = this.items.length; i < n; i++)
                    if (!1 === t.call(e, this.items[i], i))
                        return this;
                return this
            }
            ,
            Xt)
                Xt[T](ce) && (le[ce] = function(t) {
                    return function() {
                        var e = arguments;
                        return this.forEach((function(i) {
                            i[t][q](i, e)
                        }
                        ))
                    }
                }(ce));
            return le.attr = function(t, i) {
                if (t && e.is(t, R) && e.is(t[0], "object"))
                    for (var n = 0, r = t.length; n < r; n++)
                        this.items[n].attr(t[n]);
                else
                    for (var o = 0, s = this.items.length; o < s; o++)
                        this.items[o].attr(t, i);
                return this
            }
            ,
            le.clear = function() {
                for (; this.length; )
                    this.pop()
            }
            ,
            le.splice = function(t, e, i) {
                t = t < 0 ? L(this.length + t, 0) : t,
                e = L(0, D(this.length - t, e));
                var n, r = [], o = [], s = [];
                for (n = 2; n < arguments.length; n++)
                    s.push(arguments[n]);
                for (n = 0; n < e; n++)
                    o.push(this[t + n]);
                for (; n < this.length - t; n++)
                    r.push(this[t + n]);
                var a = s.length;
                for (n = 0; n < a + r.length; n++)
                    this.items[t + n] = this[t + n] = n < a ? s[n] : r[n - a];
                for (n = this.items.length = this.length -= e - a; this[n]; )
                    delete this[n++];
                return new ae(o)
            }
            ,
            le.exclude = function(t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (this[e] == t)
                        return this.splice(e, 1),
                        !0
            }
            ,
            le.animate = function(t, i, n, r) {
                (e.is(n, "function") || !n) && (r = n || null);
                var o, s, a = this.items.length, l = a, c = this;
                if (!a)
                    return this;
                r && (s = function() {
                    !--a && r.call(c)
                }
                ),
                n = e.is(n, H) ? n : s;
                var u = e.animation(t, i, n, s);
                for (o = this.items[--l].animate(u); l--; )
                    this.items[l] && !this.items[l].removed && this.items[l].animateWith(o, u, u),
                    this.items[l] && !this.items[l].removed || a--;
                return this
            }
            ,
            le.insertAfter = function(t) {
                for (var e = this.items.length; e--; )
                    this.items[e].insertAfter(t);
                return this
            }
            ,
            le.getBBox = function() {
                for (var t = [], e = [], i = [], n = [], r = this.items.length; r--; )
                    if (!this.items[r].removed) {
                        var o = this.items[r].getBBox();
                        t.push(o.x),
                        e.push(o.y),
                        i.push(o.x + o.width),
                        n.push(o.y + o.height)
                    }
                return {
                    x: t = D[q](0, t),
                    y: e = D[q](0, e),
                    x2: i = L[q](0, i),
                    y2: n = L[q](0, n),
                    width: i - t,
                    height: n - e
                }
            }
            ,
            le.clone = function(t) {
                t = this.paper.set();
                for (var e = 0, i = this.items.length; e < i; e++)
                    t.push(this.items[e].clone());
                return t
            }
            ,
            le.toString = function() {
                return "Raphaël‘s set"
            }
            ,
            le.glow = function(t) {
                var e = this.paper.set();
                return this.forEach((function(i, n) {
                    var r = i.glow(t);
                    null != r && r.forEach((function(t, i) {
                        e.push(t)
                    }
                    ))
                }
                )),
                e
            }
            ,
            le.isPointInside = function(t, e) {
                var i = !1;
                return this.forEach((function(n) {
                    if (n.isPointInside(t, e))
                        return i = !0,
                        !1
                }
                )),
                i
            }
            ,
            e.registerFont = function(t) {
                if (!t.face)
                    return t;
                this.fonts = this.fonts || {};
                var e = {
                    w: t.w,
                    face: {},
                    glyphs: {}
                }
                  , i = t.face["font-family"];
                for (var n in t.face)
                    t.face[T](n) && (e.face[n] = t.face[n]);
                if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e],
                !t.svg)
                    for (var r in e.face["units-per-em"] = J(t.face["units-per-em"], 10),
                    t.glyphs)
                        if (t.glyphs[T](r)) {
                            var o = t.glyphs[r];
                            if (e.glyphs[r] = {
                                w: o.w,
                                k: {},
                                d: o.d && "M" + o.d.replace(/[mlcxtrv]/g, (function(t) {
                                    return {
                                        l: "L",
                                        c: "C",
                                        x: "z",
                                        t: "m",
                                        r: "l",
                                        v: "c"
                                    }[t] || "M"
                                }
                                )) + "z"
                            },
                            o.k)
                                for (var s in o.k)
                                    o[T](s) && (e.glyphs[r].k[s] = o.k[s])
                        }
                return t
            }
            ,
            b.getFont = function(t, i, n, r) {
                if (r = r || "normal",
                n = n || "normal",
                i = +i || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                }[i] || 400,
                e.fonts) {
                    var o, s = e.fonts[t];
                    if (!s) {
                        var a = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, O) + "(\\s|$)","i");
                        for (var l in e.fonts)
                            if (e.fonts[T](l) && a.test(l)) {
                                s = e.fonts[l];
                                break
                            }
                    }
                    if (s)
                        for (var c = 0, u = s.length; c < u && ((o = s[c]).face["font-weight"] != i || o.face["font-style"] != n && o.face["font-style"] || o.face["font-stretch"] != r); c++)
                            ;
                    return o
                }
            }
            ,
            b.print = function(t, i, n, r, o, s, a, l) {
                s = s || "middle",
                a = L(D(a || 0, 1), -1),
                l = L(D(l || 1, 3), 1);
                var c, u = M(n)[j](O), d = 0, h = 0, p = O;
                if (e.is(r, "string") && (r = this.getFont(r)),
                r) {
                    c = (o || 16) / r.face["units-per-em"];
                    for (var f = r.face.bbox[j](x), v = +f[0], g = f[3] - f[1], m = 0, y = +f[1] + ("baseline" == s ? g + +r.face.descent : g / 2), b = 0, w = u.length; b < w; b++) {
                        if ("\n" == u[b])
                            d = 0,
                            T = 0,
                            h = 0,
                            m += g * l;
                        else {
                            var k = h && r.glyphs[u[b - 1]] || {}
                              , T = r.glyphs[u[b]];
                            d += h ? (k.w || r.w) + (k.k && k.k[u[b]] || 0) + r.w * a : 0,
                            h = 1
                        }
                        T && T.d && (p += e.transformPath(T.d, ["t", d * c, m * c, "s", c, c, v, y, "t", (t - v) / c, (i - y) / c]))
                    }
                }
                return this.path(p).attr({
                    fill: "#000",
                    stroke: "none"
                })
            }
            ,
            b.add = function(t) {
                if (e.is(t, "array"))
                    for (var i, n = this.set(), r = 0, o = t.length; r < o; r++)
                        i = t[r] || {},
                        w[T](i.type) && n.push(this[i.type]().attr(i));
                return n
            }
            ,
            e.format = function(t, i) {
                var n = e.is(i, R) ? [0][P](i) : arguments;
                return t && e.is(t, H) && n.length - 1 && (t = t.replace(k, (function(t, e) {
                    return null == n[++e] ? O : n[e]
                }
                ))),
                t || O
            }
            ,
            e.fullfill = function() {
                var t = /\{([^\}]+)\}/g
                  , e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g
                  , i = function(t, i, n) {
                    var r = n;
                    return i.replace(e, (function(t, e, i, n, o) {
                        e = e || n,
                        r && (e in r && (r = r[e]),
                        "function" == typeof r && o && (r = r()))
                    }
                    )),
                    r = (null == r || r == n ? t : r) + ""
                };
                return function(e, n) {
                    return String(e).replace(t, (function(t, e) {
                        return i(t, e, n)
                    }
                    ))
                }
            }(),
            e.ninja = function() {
                if (S.was)
                    C.win.Raphael = S.is;
                else {
                    window.Raphael = void 0;
                    try {
                        delete window.Raphael
                    } catch (t) {}
                }
                return e
            }
            ,
            e.st = le,
            t.on("raphael.DOMload", (function() {
                y = !0
            }
            )),
            function(t, i, n) {
                null == t.readyState && t.addEventListener && (t.addEventListener(i, n = function() {
                    t.removeEventListener(i, n, !1),
                    t.readyState = "complete"
                }
                , !1),
                t.readyState = "loading"),
                function i() {
                    /in/.test(t.readyState) ? setTimeout(i, 9) : e.eve("raphael.DOMload")
                }()
            }(document, "DOMContentLoaded"),
            e
        }
        .apply(e, n)) || (t.exports = r)
    }
    , function(t, e, i) {
        var n, r, o, s, a, l, c, u, d, h, p, f, v, g, m;
        a = "0.5.0",
        l = "hasOwnProperty",
        c = /[\.\/]/,
        u = /\s*,\s*/,
        d = function(t, e) {
            return t - e
        }
        ,
        h = {
            n: {}
        },
        p = function() {
            for (var t = 0, e = this.length; t < e; t++)
                if (void 0 !== this[t])
                    return this[t]
        }
        ,
        f = function() {
            for (var t = this.length; --t; )
                if (void 0 !== this[t])
                    return this[t]
        }
        ,
        v = Object.prototype.toString,
        g = String,
        m = Array.isArray || function(t) {
            return t instanceof Array || "[object Array]" == v.call(t)
        }
        ,
        eve = function(t, e) {
            var i, n = s, r = Array.prototype.slice.call(arguments, 2), a = eve.listeners(t), l = 0, c = [], u = {}, h = [], v = o;
            h.firstDefined = p,
            h.lastDefined = f,
            o = t,
            s = 0;
            for (var g = 0, m = a.length; g < m; g++)
                "zIndex"in a[g] && (c.push(a[g].zIndex),
                a[g].zIndex < 0 && (u[a[g].zIndex] = a[g]));
            for (c.sort(d); c[l] < 0; )
                if (i = u[c[l++]],
                h.push(i.apply(e, r)),
                s)
                    return s = n,
                    h;
            for (g = 0; g < m; g++)
                if ("zIndex"in (i = a[g]))
                    if (i.zIndex == c[l]) {
                        if (h.push(i.apply(e, r)),
                        s)
                            break;
                        do {
                            if ((i = u[c[++l]]) && h.push(i.apply(e, r)),
                            s)
                                break
                        } while (i)
                    } else
                        u[i.zIndex] = i;
                else if (h.push(i.apply(e, r)),
                s)
                    break;
            return s = n,
            o = v,
            h
        }
        ,
        eve._events = h,
        eve.listeners = function(t) {
            var e, i, n, r, o, s, a, l, u = m(t) ? t : t.split(c), d = h, p = [d], f = [];
            for (r = 0,
            o = u.length; r < o; r++) {
                for (l = [],
                s = 0,
                a = p.length; s < a; s++)
                    for (i = [(d = p[s].n)[u[r]], d["*"]],
                    n = 2; n--; )
                        (e = i[n]) && (l.push(e),
                        f = f.concat(e.f || []));
                p = l
            }
            return f
        }
        ,
        eve.separator = function(t) {
            t ? (t = "[" + (t = g(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]",
            c = new RegExp(t)) : c = /[\.\/]/
        }
        ,
        eve.on = function(t, e) {
            if ("function" != typeof e)
                return function() {}
                ;
            for (var i = m(t) ? m(t[0]) ? t : [t] : g(t).split(u), n = 0, r = i.length; n < r; n++)
                !function(t) {
                    for (var i, n = m(t) ? t : g(t).split(c), r = h, o = 0, s = n.length; o < s; o++)
                        r = (r = r.n).hasOwnProperty(n[o]) && r[n[o]] || (r[n[o]] = {
                            n: {}
                        });
                    for (r.f = r.f || [],
                    o = 0,
                    s = r.f.length; o < s; o++)
                        if (r.f[o] == e) {
                            i = !0;
                            break
                        }
                    !i && r.f.push(e)
                }(i[n]);
            return function(t) {
                +t == +t && (e.zIndex = +t)
            }
        }
        ,
        eve.f = function(t) {
            var e = [].slice.call(arguments, 1);
            return function() {
                eve.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }
        ,
        eve.stop = function() {
            s = 1
        }
        ,
        eve.nt = function(t) {
            var e = m(o) ? o.join(".") : o;
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
        }
        ,
        eve.nts = function() {
            return m(o) ? o : o.split(c)
        }
        ,
        eve.off = eve.unbind = function(t, e) {
            if (t) {
                var i = m(t) ? m(t[0]) ? t : [t] : g(t).split(u);
                if (i.length > 1)
                    for (var n = 0, r = i.length; n < r; n++)
                        eve.off(i[n], e);
                else {
                    i = m(t) ? t : g(t).split(c);
                    var o, s, a, d, p, f = [h];
                    for (n = 0,
                    r = i.length; n < r; n++)
                        for (d = 0; d < f.length; d += a.length - 2) {
                            if (a = [d, 1],
                            o = f[d].n,
                            "*" != i[n])
                                o[i[n]] && a.push(o[i[n]]);
                            else
                                for (s in o)
                                    o[l](s) && a.push(o[s]);
                            f.splice.apply(f, a)
                        }
                    for (n = 0,
                    r = f.length; n < r; n++)
                        for (o = f[n]; o.n; ) {
                            if (e) {
                                if (o.f) {
                                    for (d = 0,
                                    p = o.f.length; d < p; d++)
                                        if (o.f[d] == e) {
                                            o.f.splice(d, 1);
                                            break
                                        }
                                    !o.f.length && delete o.f
                                }
                                for (s in o.n)
                                    if (o.n[l](s) && o.n[s].f) {
                                        var v = o.n[s].f;
                                        for (d = 0,
                                        p = v.length; d < p; d++)
                                            if (v[d] == e) {
                                                v.splice(d, 1);
                                                break
                                            }
                                        !v.length && delete o.n[s].f
                                    }
                            } else
                                for (s in delete o.f,
                                o.n)
                                    o.n[l](s) && o.n[s].f && delete o.n[s].f;
                            o = o.n
                        }
                }
            } else
                eve._events = h = {
                    n: {}
                }
        }
        ,
        eve.once = function(t, e) {
            var i = function() {
                return eve.off(t, i),
                e.apply(this, arguments)
            };
            return eve.on(t, i)
        }
        ,
        eve.version = a,
        eve.toString = function() {
            return "You are running Eve " + a
        }
        ,
        void 0 !== t && t.exports ? t.exports = eve : (n = [],
        void 0 === (r = function() {
            return eve
        }
        .apply(e, n)) || (t.exports = r))
    }
    , function(t, e, i) {
        var n, r;
        n = [i(1)],
        void 0 === (r = function(t) {
            if (!t || t.svg) {
                var e = "hasOwnProperty"
                  , i = String
                  , n = parseFloat
                  , r = parseInt
                  , o = Math
                  , s = o.max
                  , a = o.abs
                  , l = o.pow
                  , c = /[, ]+/
                  , u = t.eve
                  , d = ""
                  , h = " "
                  , p = "https://www.w3.org/1999/xlink"
                  , f = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                }
                  , v = {};
                t.toString = function() {
                    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                }
                ;
                var g = function(n, r) {
                    if (r)
                        for (var o in "string" == typeof n && (n = g(n)),
                        r)
                            r[e](o) && ("xlink:" == o.substring(0, 6) ? n.setAttributeNS(p, o.substring(6), i(r[o])) : n.setAttribute(o, i(r[o])));
                    else
                        (n = t._g.doc.createElementNS("https://www.w3.org/2000/svg", n)).style && (n.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                    return n
                }
                  , m = function(e, r) {
                    var c = "linear"
                      , u = e.id + r
                      , h = .5
                      , p = .5
                      , f = e.node
                      , v = e.paper
                      , m = f.style
                      , b = t._g.doc.getElementById(u);
                    if (!b) {
                        if (r = (r = i(r).replace(t._radial_gradient, (function(t, e, i) {
                            if (c = "radial",
                            e && i) {
                                h = n(e);
                                var r = 2 * ((p = n(i)) > .5) - 1;
                                l(h - .5, 2) + l(p - .5, 2) > .25 && (p = o.sqrt(.25 - l(h - .5, 2)) * r + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * r)
                            }
                            return d
                        }
                        ))).split(/\s*\-\s*/),
                        "linear" == c) {
                            var x = r.shift();
                            if (x = -n(x),
                            isNaN(x))
                                return null;
                            var w = [0, 0, o.cos(t.rad(x)), o.sin(t.rad(x))]
                              , k = 1 / (s(a(w[2]), a(w[3])) || 1);
                            w[2] *= k,
                            w[3] *= k,
                            w[2] < 0 && (w[0] = -w[2],
                            w[2] = 0),
                            w[3] < 0 && (w[1] = -w[3],
                            w[3] = 0)
                        }
                        var T = t._parseDots(r);
                        if (!T)
                            return null;
                        if (u = u.replace(/[\(\)\s,\xb0#]/g, "_"),
                        e.gradient && u != e.gradient.id && (v.defs.removeChild(e.gradient),
                        delete e.gradient),
                        !e.gradient) {
                            b = g(c + "Gradient", {
                                id: u
                            }),
                            e.gradient = b,
                            g(b, "radial" == c ? {
                                fx: h,
                                fy: p
                            } : {
                                x1: w[0],
                                y1: w[1],
                                x2: w[2],
                                y2: w[3],
                                gradientTransform: e.matrix.invert()
                            }),
                            v.defs.appendChild(b);
                            for (var C = 0, S = T.length; C < S; C++)
                                b.appendChild(g("stop", {
                                    offset: T[C].offset ? T[C].offset : C ? "100%" : "0%",
                                    "stop-color": T[C].color || "#fff",
                                    "stop-opacity": isFinite(T[C].opacity) ? T[C].opacity : 1
                                }))
                        }
                    }
                    return g(f, {
                        fill: y(u),
                        opacity: 1,
                        "fill-opacity": 1
                    }),
                    m.fill = d,
                    m.opacity = 1,
                    m.fillOpacity = 1,
                    1
                }
                  , y = function(t) {
                    if (function() {
                        var t = document.documentMode;
                        return t && (9 === t || 10 === t)
                    }())
                        return "url('#" + t + "')";
                    var e = document.location;
                    return "url('" + (e.protocol + "//" + e.host + e.pathname + e.search) + "#" + t + "')"
                }
                  , b = function(t) {
                    var e = t.getBBox(1);
                    g(t.pattern, {
                        patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                    })
                }
                  , x = function(n, r, o) {
                    if ("path" == n.type) {
                        for (var s, a, l, c, u, h = i(r).toLowerCase().split("-"), p = n.paper, m = o ? "end" : "start", y = n.node, b = n.attrs, x = b["stroke-width"], w = h.length, k = "classic", T = 3, C = 3, S = 5; w--; )
                            switch (h[w]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                k = h[w];
                                break;
                            case "wide":
                                C = 5;
                                break;
                            case "narrow":
                                C = 2;
                                break;
                            case "long":
                                T = 5;
                                break;
                            case "short":
                                T = 2
                            }
                        if ("open" == k ? (T += 2,
                        C += 2,
                        S += 2,
                        l = 1,
                        c = o ? 4 : 1,
                        u = {
                            fill: "none",
                            stroke: b.stroke
                        }) : (c = l = T / 2,
                        u = {
                            fill: b.stroke,
                            stroke: "none"
                        }),
                        n._.arrows ? o ? (n._.arrows.endPath && v[n._.arrows.endPath]--,
                        n._.arrows.endMarker && v[n._.arrows.endMarker]--) : (n._.arrows.startPath && v[n._.arrows.startPath]--,
                        n._.arrows.startMarker && v[n._.arrows.startMarker]--) : n._.arrows = {},
                        "none" != k) {
                            var _ = "raphael-marker-" + k
                              , q = "raphael-marker-" + m + k + T + C + "-obj" + n.id;
                            t._g.doc.getElementById(_) ? v[_]++ : (p.defs.appendChild(g(g("path"), {
                                "stroke-linecap": "round",
                                d: f[k],
                                id: _
                            })),
                            v[_] = 1);
                            var P, A = t._g.doc.getElementById(q);
                            A ? (v[q]++,
                            P = A.getElementsByTagName("use")[0]) : (A = g(g("marker"), {
                                id: q,
                                markerHeight: C,
                                markerWidth: T,
                                orient: "auto",
                                refX: c,
                                refY: C / 2
                            }),
                            P = g(g("use"), {
                                "xlink:href": "#" + _,
                                transform: (o ? "rotate(180 " + T / 2 + " " + C / 2 + ") " : d) + "scale(" + T / S + "," + C / S + ")",
                                "stroke-width": (1 / ((T / S + C / S) / 2)).toFixed(4)
                            }),
                            A.appendChild(P),
                            p.defs.appendChild(A),
                            v[q] = 1),
                            g(P, u);
                            var O = l * ("diamond" != k && "oval" != k);
                            o ? (s = n._.arrows.startdx * x || 0,
                            a = t.getTotalLength(b.path) - O * x) : (s = O * x,
                            a = t.getTotalLength(b.path) - (n._.arrows.enddx * x || 0)),
                            (u = {})["marker-" + m] = "url(#" + q + ")",
                            (a || s) && (u.d = t.getSubpath(b.path, s, a)),
                            g(y, u),
                            n._.arrows[m + "Path"] = _,
                            n._.arrows[m + "Marker"] = q,
                            n._.arrows[m + "dx"] = O,
                            n._.arrows[m + "Type"] = k,
                            n._.arrows[m + "String"] = r
                        } else
                            o ? (s = n._.arrows.startdx * x || 0,
                            a = t.getTotalLength(b.path) - s) : (s = 0,
                            a = t.getTotalLength(b.path) - (n._.arrows.enddx * x || 0)),
                            n._.arrows[m + "Path"] && g(y, {
                                d: t.getSubpath(b.path, s, a)
                            }),
                            delete n._.arrows[m + "Path"],
                            delete n._.arrows[m + "Marker"],
                            delete n._.arrows[m + "dx"],
                            delete n._.arrows[m + "Type"],
                            delete n._.arrows[m + "String"];
                        for (u in v)
                            if (v[e](u) && !v[u]) {
                                var $ = t._g.doc.getElementById(u);
                                $ && $.parentNode.removeChild($)
                            }
                    }
                }
                  , w = {
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3]
                }
                  , k = function(t, e, n) {
                    if (e = w[i(e).toLowerCase()]) {
                        for (var r = t.attrs["stroke-width"] || "1", o = {
                            round: r,
                            square: r,
                            butt: 0
                        }[t.attrs["stroke-linecap"] || n["stroke-linecap"]] || 0, s = [], a = e.length; a--; )
                            s[a] = e[a] * r + (a % 2 ? 1 : -1) * o;
                        g(t.node, {
                            "stroke-dasharray": s.join(",")
                        })
                    } else
                        g(t.node, {
                            "stroke-dasharray": "none"
                        })
                }
                  , T = function(n, o) {
                    var l = n.node
                      , u = n.attrs
                      , h = l.style.visibility;
                    for (var f in l.style.visibility = "hidden",
                    o)
                        if (o[e](f)) {
                            if (!t._availableAttrs[e](f))
                                continue;
                            var v = o[f];
                            switch (u[f] = v,
                            f) {
                            case "blur":
                                n.blur(v);
                                break;
                            case "title":
                                var y = l.getElementsByTagName("title");
                                if (y.length && (y = y[0]))
                                    y.firstChild.nodeValue = v;
                                else {
                                    y = g("title");
                                    var w = t._g.doc.createTextNode(v);
                                    y.appendChild(w),
                                    l.appendChild(y)
                                }
                                break;
                            case "href":
                            case "target":
                                var T = l.parentNode;
                                if ("a" != T.tagName.toLowerCase()) {
                                    var S = g("a");
                                    T.insertBefore(S, l),
                                    S.appendChild(l),
                                    T = S
                                }
                                "target" == f ? T.setAttributeNS(p, "show", "blank" == v ? "new" : v) : T.setAttributeNS(p, f, v);
                                break;
                            case "cursor":
                                l.style.cursor = v;
                                break;
                            case "transform":
                                n.transform(v);
                                break;
                            case "arrow-start":
                                x(n, v);
                                break;
                            case "arrow-end":
                                x(n, v, 1);
                                break;
                            case "clip-rect":
                                var _ = i(v).split(c);
                                if (4 == _.length) {
                                    n.clip && n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);
                                    var q = g("clipPath")
                                      , P = g("rect");
                                    q.id = t.createUUID(),
                                    g(P, {
                                        x: _[0],
                                        y: _[1],
                                        width: _[2],
                                        height: _[3]
                                    }),
                                    q.appendChild(P),
                                    n.paper.defs.appendChild(q),
                                    g(l, {
                                        "clip-path": "url(#" + q.id + ")"
                                    }),
                                    n.clip = P
                                }
                                if (!v) {
                                    var A = l.getAttribute("clip-path");
                                    if (A) {
                                        var O = t._g.doc.getElementById(A.replace(/(^url\(#|\)$)/g, d));
                                        O && O.parentNode.removeChild(O),
                                        g(l, {
                                            "clip-path": d
                                        }),
                                        delete n.clip
                                    }
                                }
                                break;
                            case "path":
                                "path" == n.type && (g(l, {
                                    d: v ? u.path = t._pathToAbsolute(v) : "M0,0"
                                }),
                                n._.dirty = 1,
                                n._.arrows && ("startString"in n._.arrows && x(n, n._.arrows.startString),
                                "endString"in n._.arrows && x(n, n._.arrows.endString, 1)));
                                break;
                            case "width":
                                if (l.setAttribute(f, v),
                                n._.dirty = 1,
                                !u.fx)
                                    break;
                                f = "x",
                                v = u.x;
                            case "x":
                                u.fx && (v = -u.x - (u.width || 0));
                            case "rx":
                                if ("rx" == f && "rect" == n.type)
                                    break;
                            case "cx":
                                l.setAttribute(f, v),
                                n.pattern && b(n),
                                n._.dirty = 1;
                                break;
                            case "height":
                                if (l.setAttribute(f, v),
                                n._.dirty = 1,
                                !u.fy)
                                    break;
                                f = "y",
                                v = u.y;
                            case "y":
                                u.fy && (v = -u.y - (u.height || 0));
                            case "ry":
                                if ("ry" == f && "rect" == n.type)
                                    break;
                            case "cy":
                                l.setAttribute(f, v),
                                n.pattern && b(n),
                                n._.dirty = 1;
                                break;
                            case "r":
                                "rect" == n.type ? g(l, {
                                    rx: v,
                                    ry: v
                                }) : l.setAttribute(f, v),
                                n._.dirty = 1;
                                break;
                            case "src":
                                "image" == n.type && l.setAttributeNS(p, "href", v);
                                break;
                            case "stroke-width":
                                1 == n._.sx && 1 == n._.sy || (v /= s(a(n._.sx), a(n._.sy)) || 1),
                                l.setAttribute(f, v),
                                u["stroke-dasharray"] && k(n, u["stroke-dasharray"], o),
                                n._.arrows && ("startString"in n._.arrows && x(n, n._.arrows.startString),
                                "endString"in n._.arrows && x(n, n._.arrows.endString, 1));
                                break;
                            case "stroke-dasharray":
                                k(n, v, o);
                                break;
                            case "fill":
                                var $ = i(v).match(t._ISURL);
                                if ($) {
                                    q = g("pattern");
                                    var M = g("image");
                                    q.id = t.createUUID(),
                                    g(q, {
                                        x: 0,
                                        y: 0,
                                        patternUnits: "userSpaceOnUse",
                                        height: 1,
                                        width: 1
                                    }),
                                    g(M, {
                                        x: 0,
                                        y: 0,
                                        "xlink:href": $[1]
                                    }),
                                    q.appendChild(M),
                                    function(e) {
                                        t._preload($[1], (function() {
                                            var t = this.offsetWidth
                                              , i = this.offsetHeight;
                                            g(e, {
                                                width: t,
                                                height: i
                                            }),
                                            g(M, {
                                                width: t,
                                                height: i
                                            })
                                        }
                                        ))
                                    }(q),
                                    n.paper.defs.appendChild(q),
                                    g(l, {
                                        fill: "url(#" + q.id + ")"
                                    }),
                                    n.pattern = q,
                                    n.pattern && b(n);
                                    break
                                }
                                var j = t.getRGB(v);
                                if (j.error) {
                                    if (("circle" == n.type || "ellipse" == n.type || "r" != i(v).charAt()) && m(n, v)) {
                                        if ("opacity"in u || "fill-opacity"in u) {
                                            var E = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, d));
                                            if (E) {
                                                var I = E.getElementsByTagName("stop");
                                                g(I[I.length - 1], {
                                                    "stop-opacity": ("opacity"in u ? u.opacity : 1) * ("fill-opacity"in u ? u["fill-opacity"] : 1)
                                                })
                                            }
                                        }
                                        u.gradient = v,
                                        u.fill = "none";
                                        break
                                    }
                                } else
                                    delete o.gradient,
                                    delete u.gradient,
                                    !t.is(u.opacity, "undefined") && t.is(o.opacity, "undefined") && g(l, {
                                        opacity: u.opacity
                                    }),
                                    !t.is(u["fill-opacity"], "undefined") && t.is(o["fill-opacity"], "undefined") && g(l, {
                                        "fill-opacity": u["fill-opacity"]
                                    });
                                j[e]("opacity") && g(l, {
                                    "fill-opacity": j.opacity > 1 ? j.opacity / 100 : j.opacity
                                });
                            case "stroke":
                                j = t.getRGB(v),
                                l.setAttribute(f, j.hex),
                                "stroke" == f && j[e]("opacity") && g(l, {
                                    "stroke-opacity": j.opacity > 1 ? j.opacity / 100 : j.opacity
                                }),
                                "stroke" == f && n._.arrows && ("startString"in n._.arrows && x(n, n._.arrows.startString),
                                "endString"in n._.arrows && x(n, n._.arrows.endString, 1));
                                break;
                            case "gradient":
                                ("circle" == n.type || "ellipse" == n.type || "r" != i(v).charAt()) && m(n, v);
                                break;
                            case "opacity":
                                u.gradient && !u[e]("stroke-opacity") && g(l, {
                                    "stroke-opacity": v > 1 ? v / 100 : v
                                });
                            case "fill-opacity":
                                if (u.gradient) {
                                    (E = t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, d))) && (I = E.getElementsByTagName("stop"),
                                    g(I[I.length - 1], {
                                        "stop-opacity": v
                                    }));
                                    break
                                }
                            default:
                                "font-size" == f && (v = r(v, 10) + "px");
                                var z = f.replace(/(\-.)/g, (function(t) {
                                    return t.substring(1).toUpperCase()
                                }
                                ));
                                l.style[z] = v,
                                n._.dirty = 1,
                                l.setAttribute(f, v)
                            }
                        }
                    C(n, o),
                    l.style.visibility = h
                }
                  , C = function(n, o) {
                    if ("text" == n.type && (o[e]("text") || o[e]("font") || o[e]("font-size") || o[e]("x") || o[e]("y"))) {
                        var s = n.attrs
                          , a = n.node
                          , l = a.firstChild ? r(t._g.doc.defaultView.getComputedStyle(a.firstChild, d).getPropertyValue("font-size"), 10) : 10;
                        if (o[e]("text")) {
                            for (s.text = o.text; a.firstChild; )
                                a.removeChild(a.firstChild);
                            for (var c, u = i(o.text).split("\n"), h = [], p = 0, f = u.length; p < f; p++)
                                c = g("tspan"),
                                p && g(c, {
                                    dy: 1.2 * l,
                                    x: s.x
                                }),
                                c.appendChild(t._g.doc.createTextNode(u[p])),
                                a.appendChild(c),
                                h[p] = c
                        } else
                            for (p = 0,
                            f = (h = a.getElementsByTagName("tspan")).length; p < f; p++)
                                p ? g(h[p], {
                                    dy: 1.2 * l,
                                    x: s.x
                                }) : g(h[0], {
                                    dy: 0
                                });
                        g(a, {
                            x: s.x,
                            y: s.y
                        }),
                        n._.dirty = 1;
                        var v = n._getBBox()
                          , m = s.y - (v.y + v.height / 2);
                        m && t.is(m, "finite") && g(h[0], {
                            dy: m
                        })
                    }
                }
                  , S = function(t) {
                    return t.parentNode && "a" === t.parentNode.tagName.toLowerCase() ? t.parentNode : t
                }
                  , _ = function(e, i) {
                    this[0] = this.node = e,
                    e.raphael = !0,
                    this.id = ("0000" + (Math.random() * Math.pow(36, 5) << 0).toString(36)).slice(-5),
                    e.raphaelid = this.id,
                    this.matrix = t.matrix(),
                    this.realPath = null,
                    this.paper = i,
                    this.attrs = this.attrs || {},
                    this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        deg: 0,
                        dx: 0,
                        dy: 0,
                        dirty: 1
                    },
                    !i.bottom && (i.bottom = this),
                    this.prev = i.top,
                    i.top && (i.top.next = this),
                    i.top = this,
                    this.next = null
                }
                  , q = t.el;
                _.prototype = q,
                q.constructor = _,
                t._engine.path = function(t, e) {
                    var i = g("path");
                    e.canvas && e.canvas.appendChild(i);
                    var n = new _(i,e);
                    return n.type = "path",
                    T(n, {
                        fill: "none",
                        stroke: "#000",
                        path: t
                    }),
                    n
                }
                ,
                q.rotate = function(t, e, r) {
                    if (this.removed)
                        return this;
                    if ((t = i(t).split(c)).length - 1 && (e = n(t[1]),
                    r = n(t[2])),
                    t = n(t[0]),
                    null == r && (e = r),
                    null == e || null == r) {
                        var o = this.getBBox(1);
                        e = o.x + o.width / 2,
                        r = o.y + o.height / 2
                    }
                    return this.transform(this._.transform.concat([["r", t, e, r]])),
                    this
                }
                ,
                q.scale = function(t, e, r, o) {
                    if (this.removed)
                        return this;
                    if ((t = i(t).split(c)).length - 1 && (e = n(t[1]),
                    r = n(t[2]),
                    o = n(t[3])),
                    t = n(t[0]),
                    null == e && (e = t),
                    null == o && (r = o),
                    null == r || null == o)
                        var s = this.getBBox(1);
                    return r = null == r ? s.x + s.width / 2 : r,
                    o = null == o ? s.y + s.height / 2 : o,
                    this.transform(this._.transform.concat([["s", t, e, r, o]])),
                    this
                }
                ,
                q.translate = function(t, e) {
                    return this.removed || ((t = i(t).split(c)).length - 1 && (e = n(t[1])),
                    t = n(t[0]) || 0,
                    e = +e || 0,
                    this.transform(this._.transform.concat([["t", t, e]]))),
                    this
                }
                ,
                q.transform = function(i) {
                    var n = this._;
                    if (null == i)
                        return n.transform;
                    if (t._extractTransform(this, i),
                    this.clip && g(this.clip, {
                        transform: this.matrix.invert()
                    }),
                    this.pattern && b(this),
                    this.node && g(this.node, {
                        transform: this.matrix
                    }),
                    1 != n.sx || 1 != n.sy) {
                        var r = this.attrs[e]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({
                            "stroke-width": r
                        })
                    }
                    return this
                }
                ,
                q.hide = function() {
                    return this.removed || (this.node.style.display = "none"),
                    this
                }
                ,
                q.show = function() {
                    return this.removed || (this.node.style.display = ""),
                    this
                }
                ,
                q.remove = function() {
                    var e = S(this.node);
                    if (!this.removed && e.parentNode) {
                        var i = this.paper;
                        for (var n in i.__set__ && i.__set__.exclude(this),
                        u.unbind("raphael.*.*." + this.id),
                        this.gradient && i.defs.removeChild(this.gradient),
                        t._tear(this, i),
                        e.parentNode.removeChild(e),
                        this.removeData(),
                        this)
                            this[n] = "function" == typeof this[n] ? t._removedFactory(n) : null;
                        this.removed = !0
                    }
                }
                ,
                q._getBBox = function() {
                    if ("none" == this.node.style.display) {
                        this.show();
                        var t = !0
                    }
                    var e, i = !1;
                    this.paper.canvas.parentElement ? e = this.paper.canvas.parentElement.style : this.paper.canvas.parentNode && (e = this.paper.canvas.parentNode.style),
                    e && "none" == e.display && (i = !0,
                    e.display = "");
                    var n = {};
                    try {
                        n = this.node.getBBox()
                    } catch (t) {
                        n = {
                            x: this.node.clientLeft,
                            y: this.node.clientTop,
                            width: this.node.clientWidth,
                            height: this.node.clientHeight
                        }
                    } finally {
                        n = n || {},
                        i && (e.display = "none")
                    }
                    return t && this.hide(),
                    n
                }
                ,
                q.attr = function(i, n) {
                    if (this.removed)
                        return this;
                    if (null == i) {
                        var r = {};
                        for (var o in this.attrs)
                            this.attrs[e](o) && (r[o] = this.attrs[o]);
                        return r.gradient && "none" == r.fill && (r.fill = r.gradient) && delete r.gradient,
                        r.transform = this._.transform,
                        r
                    }
                    if (null == n && t.is(i, "string")) {
                        if ("fill" == i && "none" == this.attrs.fill && this.attrs.gradient)
                            return this.attrs.gradient;
                        if ("transform" == i)
                            return this._.transform;
                        for (var s = i.split(c), a = {}, l = 0, d = s.length; l < d; l++)
                            (i = s[l])in this.attrs ? a[i] = this.attrs[i] : t.is(this.paper.customAttributes[i], "function") ? a[i] = this.paper.customAttributes[i].def : a[i] = t._availableAttrs[i];
                        return d - 1 ? a : a[s[0]]
                    }
                    if (null == n && t.is(i, "array")) {
                        for (a = {},
                        l = 0,
                        d = i.length; l < d; l++)
                            a[i[l]] = this.attr(i[l]);
                        return a
                    }
                    if (null != n) {
                        var h = {};
                        h[i] = n
                    } else
                        null != i && t.is(i, "object") && (h = i);
                    for (var p in h)
                        u("raphael.attr." + p + "." + this.id, this, h[p]);
                    for (p in this.paper.customAttributes)
                        if (this.paper.customAttributes[e](p) && h[e](p) && t.is(this.paper.customAttributes[p], "function")) {
                            var f = this.paper.customAttributes[p].apply(this, [].concat(h[p]));
                            for (var v in this.attrs[p] = h[p],
                            f)
                                f[e](v) && (h[v] = f[v])
                        }
                    return T(this, h),
                    this
                }
                ,
                q.toFront = function() {
                    if (this.removed)
                        return this;
                    var e = S(this.node);
                    e.parentNode.appendChild(e);
                    var i = this.paper;
                    return i.top != this && t._tofront(this, i),
                    this
                }
                ,
                q.toBack = function() {
                    if (this.removed)
                        return this;
                    var e = S(this.node)
                      , i = e.parentNode;
                    i.insertBefore(e, i.firstChild),
                    t._toback(this, this.paper);
                    this.paper;
                    return this
                }
                ,
                q.insertAfter = function(e) {
                    if (this.removed || !e)
                        return this;
                    var i = S(this.node)
                      , n = S(e.node || e[e.length - 1].node);
                    return n.nextSibling ? n.parentNode.insertBefore(i, n.nextSibling) : n.parentNode.appendChild(i),
                    t._insertafter(this, e, this.paper),
                    this
                }
                ,
                q.insertBefore = function(e) {
                    if (this.removed || !e)
                        return this;
                    var i = S(this.node)
                      , n = S(e.node || e[0].node);
                    return n.parentNode.insertBefore(i, n),
                    t._insertbefore(this, e, this.paper),
                    this
                }
                ,
                q.blur = function(e) {
                    var i = this;
                    if (0 != +e) {
                        var n = g("filter")
                          , r = g("feGaussianBlur");
                        i.attrs.blur = e,
                        n.id = t.createUUID(),
                        g(r, {
                            stdDeviation: +e || 1.5
                        }),
                        n.appendChild(r),
                        i.paper.defs.appendChild(n),
                        i._blur = n,
                        g(i.node, {
                            filter: "url(#" + n.id + ")"
                        })
                    } else
                        i._blur && (i._blur.parentNode.removeChild(i._blur),
                        delete i._blur,
                        delete i.attrs.blur),
                        i.node.removeAttribute("filter");
                    return i
                }
                ,
                t._engine.circle = function(t, e, i, n) {
                    var r = g("circle");
                    t.canvas && t.canvas.appendChild(r);
                    var o = new _(r,t);
                    return o.attrs = {
                        cx: e,
                        cy: i,
                        r: n,
                        fill: "none",
                        stroke: "#000"
                    },
                    o.type = "circle",
                    g(r, o.attrs),
                    o
                }
                ,
                t._engine.rect = function(t, e, i, n, r, o) {
                    var s = g("rect");
                    t.canvas && t.canvas.appendChild(s);
                    var a = new _(s,t);
                    return a.attrs = {
                        x: e,
                        y: i,
                        width: n,
                        height: r,
                        rx: o || 0,
                        ry: o || 0,
                        fill: "none",
                        stroke: "#000"
                    },
                    a.type = "rect",
                    g(s, a.attrs),
                    a
                }
                ,
                t._engine.ellipse = function(t, e, i, n, r) {
                    var o = g("ellipse");
                    t.canvas && t.canvas.appendChild(o);
                    var s = new _(o,t);
                    return s.attrs = {
                        cx: e,
                        cy: i,
                        rx: n,
                        ry: r,
                        fill: "none",
                        stroke: "#000"
                    },
                    s.type = "ellipse",
                    g(o, s.attrs),
                    s
                }
                ,
                t._engine.image = function(t, e, i, n, r, o) {
                    var s = g("image");
                    g(s, {
                        x: i,
                        y: n,
                        width: r,
                        height: o,
                        preserveAspectRatio: "none"
                    }),
                    s.setAttributeNS(p, "href", e),
                    t.canvas && t.canvas.appendChild(s);
                    var a = new _(s,t);
                    return a.attrs = {
                        x: i,
                        y: n,
                        width: r,
                        height: o,
                        src: e
                    },
                    a.type = "image",
                    a
                }
                ,
                t._engine.text = function(e, i, n, r) {
                    var o = g("text");
                    e.canvas && e.canvas.appendChild(o);
                    var s = new _(o,e);
                    return s.attrs = {
                        x: i,
                        y: n,
                        "text-anchor": "middle",
                        text: r,
                        "font-family": t._availableAttrs["font-family"],
                        "font-size": t._availableAttrs["font-size"],
                        stroke: "none",
                        fill: "#000"
                    },
                    s.type = "text",
                    T(s, s.attrs),
                    s
                }
                ,
                t._engine.setSize = function(t, e) {
                    return this.width = t || this.width,
                    this.height = e || this.height,
                    this.canvas.setAttribute("width", this.width),
                    this.canvas.setAttribute("height", this.height),
                    this._viewBox && this.setViewBox.apply(this, this._viewBox),
                    this
                }
                ,
                t._engine.create = function() {
                    var e = t._getContainer.apply(0, arguments)
                      , i = e && e.container
                      , n = e.x
                      , r = e.y
                      , o = e.width
                      , s = e.height;
                    if (!i)
                        throw new Error("SVG container not found.");
                    var a, l = g("svg"), c = "overflow:hidden;";
                    return n = n || 0,
                    r = r || 0,
                    g(l, {
                        height: s = s || 342,
                        version: 1.1,
                        width: o = o || 512,
                        xmlns: "https://www.w3.org/2000/svg",
                        "xmlns:xlink": "https://www.w3.org/1999/xlink"
                    }),
                    1 == i ? (l.style.cssText = c + "position:absolute;left:" + n + "px;top:" + r + "px",
                    t._g.doc.body.appendChild(l),
                    a = 1) : (l.style.cssText = c + "position:relative",
                    i.firstChild ? i.insertBefore(l, i.firstChild) : i.appendChild(l)),
                    (i = new t._Paper).width = o,
                    i.height = s,
                    i.canvas = l,
                    i.clear(),
                    i._left = i._top = 0,
                    a && (i.renderfix = function() {}
                    ),
                    i.renderfix(),
                    i
                }
                ,
                t._engine.setViewBox = function(t, e, i, n, r) {
                    u("raphael.setViewBox", this, this._viewBox, [t, e, i, n, r]);
                    var o, a, l = this.getSize(), c = s(i / l.width, n / l.height), d = this.top, p = r ? "xMidYMid meet" : "xMinYMin";
                    for (null == t ? (this._vbSize && (c = 1),
                    delete this._vbSize,
                    o = "0 0 " + this.width + h + this.height) : (this._vbSize = c,
                    o = t + h + e + h + i + h + n),
                    g(this.canvas, {
                        viewBox: o,
                        preserveAspectRatio: p
                    }); c && d; )
                        a = "stroke-width"in d.attrs ? d.attrs["stroke-width"] : 1,
                        d.attr({
                            "stroke-width": a
                        }),
                        d._.dirty = 1,
                        d._.dirtyT = 1,
                        d = d.prev;
                    return this._viewBox = [t, e, i, n, !!r],
                    this
                }
                ,
                t.prototype.renderfix = function() {
                    var t, e = this.canvas, i = e.style;
                    try {
                        t = e.getScreenCTM() || e.createSVGMatrix()
                    } catch (i) {
                        t = e.createSVGMatrix()
                    }
                    var n = -t.e % 1
                      , r = -t.f % 1;
                    (n || r) && (n && (this._left = (this._left + n) % 1,
                    i.left = this._left + "px"),
                    r && (this._top = (this._top + r) % 1,
                    i.top = this._top + "px"))
                }
                ,
                t.prototype.clear = function() {
                    t.eve("raphael.clear", this);
                    for (var e = this.canvas; e.firstChild; )
                        e.removeChild(e.firstChild);
                    this.bottom = this.top = null,
                    (this.desc = g("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël " + t.version)),
                    e.appendChild(this.desc),
                    e.appendChild(this.defs = g("defs"))
                }
                ,
                t.prototype.remove = function() {
                    for (var e in u("raphael.remove", this),
                    this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas),
                    this)
                        this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null
                }
                ;
                var P = t.st;
                for (var A in q)
                    q[e](A) && !P[e](A) && (P[A] = function(t) {
                        return function() {
                            var e = arguments;
                            return this.forEach((function(i) {
                                i[t].apply(i, e)
                            }
                            ))
                        }
                    }(A))
            }
        }
        .apply(e, n)) || (t.exports = r)
    }
    , function(t, e, i) {
        var n, r;
        n = [i(1)],
        void 0 === (r = function(t) {
            if (!t || t.vml) {
                var e = "hasOwnProperty"
                  , i = String
                  , n = parseFloat
                  , r = Math
                  , o = r.round
                  , s = r.max
                  , a = r.min
                  , l = r.abs
                  , c = "fill"
                  , u = /[, ]+/
                  , d = t.eve
                  , h = " "
                  , p = ""
                  , f = {
                    M: "m",
                    L: "l",
                    C: "c",
                    Z: "x",
                    m: "t",
                    l: "r",
                    c: "v",
                    z: "x"
                }
                  , v = /([clmz]),?([^clmz]*)/gi
                  , g = / progid:\S+Blur\([^\)]+\)/g
                  , m = /-?[^,\s-]+/g
                  , y = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)"
                  , b = 21600
                  , x = {
                    path: 1,
                    rect: 1,
                    image: 1
                }
                  , w = {
                    circle: 1,
                    ellipse: 1
                }
                  , k = function(e) {
                    var n = /[ahqstv]/gi
                      , r = t._pathToAbsolute;
                    if (i(e).match(n) && (r = t._path2curve),
                    n = /[clmz]/g,
                    r == t._pathToAbsolute && !i(e).match(n)) {
                        var s = i(e).replace(v, (function(t, e, i) {
                            var n = []
                              , r = "m" == e.toLowerCase()
                              , s = f[e];
                            return i.replace(m, (function(t) {
                                r && 2 == n.length && (s += n + f["m" == e ? "l" : "L"],
                                n = []),
                                n.push(o(t * b))
                            }
                            )),
                            s + n
                        }
                        ));
                        return s
                    }
                    var a, l, c = r(e);
                    s = [];
                    for (var u = 0, d = c.length; u < d; u++) {
                        a = c[u],
                        "z" == (l = c[u][0].toLowerCase()) && (l = "x");
                        for (var g = 1, y = a.length; g < y; g++)
                            l += o(a[g] * b) + (g != y - 1 ? "," : p);
                        s.push(l)
                    }
                    return s.join(h)
                }
                  , T = function(e, i, n) {
                    var r = t.matrix();
                    return r.rotate(-e, .5, .5),
                    {
                        dx: r.x(i, n),
                        dy: r.y(i, n)
                    }
                }
                  , C = function(t, e, i, n, r, o) {
                    var s = t._
                      , a = t.matrix
                      , u = s.fillpos
                      , d = t.node
                      , p = d.style
                      , f = 1
                      , v = ""
                      , g = b / e
                      , m = b / i;
                    if (p.visibility = "hidden",
                    e && i) {
                        if (d.coordsize = l(g) + h + l(m),
                        p.rotation = o * (e * i < 0 ? -1 : 1),
                        o) {
                            var y = T(o, n, r);
                            n = y.dx,
                            r = y.dy
                        }
                        if (e < 0 && (v += "x"),
                        i < 0 && (v += " y") && (f = -1),
                        p.flip = v,
                        d.coordorigin = n * -g + h + r * -m,
                        u || s.fillsize) {
                            var x = d.getElementsByTagName(c);
                            x = x && x[0],
                            d.removeChild(x),
                            u && (y = T(o, a.x(u[0], u[1]), a.y(u[0], u[1])),
                            x.position = y.dx * f + h + y.dy * f),
                            s.fillsize && (x.size = s.fillsize[0] * l(e) + h + s.fillsize[1] * l(i)),
                            d.appendChild(x)
                        }
                        p.visibility = "visible"
                    }
                };
                t.toString = function() {
                    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                }
                ;
                var S, _ = function(t, e, n) {
                    for (var r = i(e).toLowerCase().split("-"), o = n ? "end" : "start", s = r.length, a = "classic", l = "medium", c = "medium"; s--; )
                        switch (r[s]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                            a = r[s];
                            break;
                        case "wide":
                        case "narrow":
                            c = r[s];
                            break;
                        case "long":
                        case "short":
                            l = r[s]
                        }
                    var u = t.node.getElementsByTagName("stroke")[0];
                    u[o + "arrow"] = a,
                    u[o + "arrowlength"] = l,
                    u[o + "arrowwidth"] = c
                }, q = function(r, l) {
                    r.attrs = r.attrs || {};
                    var d = r.node
                      , f = r.attrs
                      , v = d.style
                      , g = x[r.type] && (l.x != f.x || l.y != f.y || l.width != f.width || l.height != f.height || l.cx != f.cx || l.cy != f.cy || l.rx != f.rx || l.ry != f.ry || l.r != f.r)
                      , m = w[r.type] && (f.cx != l.cx || f.cy != l.cy || f.r != l.r || f.rx != l.rx || f.ry != l.ry)
                      , y = r;
                    for (var T in l)
                        l[e](T) && (f[T] = l[T]);
                    if (g && (f.path = t._getPath[r.type](r),
                    r._.dirty = 1),
                    l.href && (d.href = l.href),
                    l.title && (d.title = l.title),
                    l.target && (d.target = l.target),
                    l.cursor && (v.cursor = l.cursor),
                    "blur"in l && r.blur(l.blur),
                    (l.path && "path" == r.type || g) && (d.path = k(~i(f.path).toLowerCase().indexOf("r") ? t._pathToAbsolute(f.path) : f.path),
                    r._.dirty = 1,
                    "image" == r.type && (r._.fillpos = [f.x, f.y],
                    r._.fillsize = [f.width, f.height],
                    C(r, 1, 1, 0, 0, 0))),
                    "transform"in l && r.transform(l.transform),
                    m) {
                        var q = +f.cx
                          , A = +f.cy
                          , O = +f.rx || +f.r || 0
                          , $ = +f.ry || +f.r || 0;
                        d.path = t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", o((q - O) * b), o((A - $) * b), o((q + O) * b), o((A + $) * b), o(q * b)),
                        r._.dirty = 1
                    }
                    if ("clip-rect"in l) {
                        var M = i(l["clip-rect"]).split(u);
                        if (4 == M.length) {
                            M[2] = +M[2] + +M[0],
                            M[3] = +M[3] + +M[1];
                            var j = d.clipRect || t._g.doc.createElement("div")
                              , E = j.style;
                            E.clip = t.format("rect({1}px {2}px {3}px {0}px)", M),
                            d.clipRect || (E.position = "absolute",
                            E.top = 0,
                            E.left = 0,
                            E.width = r.paper.width + "px",
                            E.height = r.paper.height + "px",
                            d.parentNode.insertBefore(j, d),
                            j.appendChild(d),
                            d.clipRect = j)
                        }
                        l["clip-rect"] || d.clipRect && (d.clipRect.style.clip = "auto")
                    }
                    if (r.textpath) {
                        var I = r.textpath.style;
                        l.font && (I.font = l.font),
                        l["font-family"] && (I.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, p) + '"'),
                        l["font-size"] && (I.fontSize = l["font-size"]),
                        l["font-weight"] && (I.fontWeight = l["font-weight"]),
                        l["font-style"] && (I.fontStyle = l["font-style"])
                    }
                    if ("arrow-start"in l && _(y, l["arrow-start"]),
                    "arrow-end"in l && _(y, l["arrow-end"], 1),
                    null != l.opacity || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                        var z = d.getElementsByTagName(c);
                        if (!(z = z && z[0]) && (z = S(c)),
                        "image" == r.type && l.src && (z.src = l.src),
                        l.fill && (z.on = !0),
                        null != z.on && "none" != l.fill && null !== l.fill || (z.on = !1),
                        z.on && l.fill) {
                            var B = i(l.fill).match(t._ISURL);
                            if (B) {
                                z.parentNode == d && d.removeChild(z),
                                z.rotate = !0,
                                z.src = B[1],
                                z.type = "tile";
                                var L = r.getBBox(1);
                                z.position = L.x + h + L.y,
                                r._.fillpos = [L.x, L.y],
                                t._preload(B[1], (function() {
                                    r._.fillsize = [this.offsetWidth, this.offsetHeight]
                                }
                                ))
                            } else
                                z.color = t.getRGB(l.fill).hex,
                                z.src = p,
                                z.type = "solid",
                                t.getRGB(l.fill).error && (y.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != i(l.fill).charAt()) && P(y, l.fill, z) && (f.fill = "none",
                                f.gradient = l.fill,
                                z.rotate = !1)
                        }
                        if ("fill-opacity"in l || "opacity"in l) {
                            var D = ((+f["fill-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+t.getRGB(l.fill).o + 1 || 2) - 1);
                            D = a(s(D, 0), 1),
                            z.opacity = D,
                            z.src && (z.color = "none")
                        }
                        d.appendChild(z);
                        var W = d.getElementsByTagName("stroke") && d.getElementsByTagName("stroke")[0]
                          , F = !1;
                        !W && (F = W = S("stroke")),
                        (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (W.on = !0),
                        ("none" == l.stroke || null === l.stroke || null == W.on || 0 == l.stroke || 0 == l["stroke-width"]) && (W.on = !1);
                        var V = t.getRGB(l.stroke);
                        W.on && l.stroke && (W.color = V.hex),
                        D = ((+f["stroke-opacity"] + 1 || 2) - 1) * ((+f.opacity + 1 || 2) - 1) * ((+V.o + 1 || 2) - 1);
                        var N = .75 * (n(l["stroke-width"]) || 1);
                        if (D = a(s(D, 0), 1),
                        null == l["stroke-width"] && (N = f["stroke-width"]),
                        l["stroke-width"] && (W.weight = N),
                        N && N < 1 && (D *= N) && (W.weight = 1),
                        W.opacity = D,
                        l["stroke-linejoin"] && (W.joinstyle = l["stroke-linejoin"] || "miter"),
                        W.miterlimit = l["stroke-miterlimit"] || 8,
                        l["stroke-linecap"] && (W.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"),
                        "stroke-dasharray"in l) {
                            var H = {
                                "-": "shortdash",
                                ".": "shortdot",
                                "-.": "shortdashdot",
                                "-..": "shortdashdotdot",
                                ". ": "dot",
                                "- ": "dash",
                                "--": "longdash",
                                "- .": "dashdot",
                                "--.": "longdashdot",
                                "--..": "longdashdotdot"
                            };
                            W.dashstyle = H[e](l["stroke-dasharray"]) ? H[l["stroke-dasharray"]] : p
                        }
                        F && d.appendChild(W)
                    }
                    if ("text" == y.type) {
                        y.paper.canvas.style.display = p;
                        var R = y.paper.span
                          , Y = f.font && f.font.match(/\d+(?:\.\d*)?(?=px)/);
                        v = R.style,
                        f.font && (v.font = f.font),
                        f["font-family"] && (v.fontFamily = f["font-family"]),
                        f["font-weight"] && (v.fontWeight = f["font-weight"]),
                        f["font-style"] && (v.fontStyle = f["font-style"]),
                        Y = n(f["font-size"] || Y && Y[0]) || 10,
                        v.fontSize = 100 * Y + "px",
                        y.textpath.string && (R.innerHTML = i(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                        var Q = R.getBoundingClientRect();
                        y.W = f.w = (Q.right - Q.left) / 100,
                        y.H = f.h = (Q.bottom - Q.top) / 100,
                        y.X = f.x,
                        y.Y = f.y + y.H / 2,
                        ("x"in l || "y"in l) && (y.path.v = t.format("m{0},{1}l{2},{1}", o(f.x * b), o(f.y * b), o(f.x * b) + 1));
                        for (var X = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], U = 0, G = X.length; U < G; U++)
                            if (X[U]in l) {
                                y._.dirty = 1;
                                break
                            }
                        switch (f["text-anchor"]) {
                        case "start":
                            y.textpath.style["v-text-align"] = "left",
                            y.bbx = y.W / 2;
                            break;
                        case "end":
                            y.textpath.style["v-text-align"] = "right",
                            y.bbx = -y.W / 2;
                            break;
                        default:
                            y.textpath.style["v-text-align"] = "center",
                            y.bbx = 0
                        }
                        y.textpath.style["v-text-kern"] = !0
                    }
                }, P = function(e, o, s) {
                    e.attrs = e.attrs || {};
                    e.attrs;
                    var a = Math.pow
                      , l = "linear"
                      , c = ".5 .5";
                    if (e.attrs.gradient = o,
                    o = (o = i(o).replace(t._radial_gradient, (function(t, e, i) {
                        return l = "radial",
                        e && i && (e = n(e),
                        i = n(i),
                        a(e - .5, 2) + a(i - .5, 2) > .25 && (i = r.sqrt(.25 - a(e - .5, 2)) * (2 * (i > .5) - 1) + .5),
                        c = e + h + i),
                        p
                    }
                    ))).split(/\s*\-\s*/),
                    "linear" == l) {
                        var u = o.shift();
                        if (u = -n(u),
                        isNaN(u))
                            return null
                    }
                    var d = t._parseDots(o);
                    if (!d)
                        return null;
                    if (e = e.shape || e.node,
                    d.length) {
                        e.removeChild(s),
                        s.on = !0,
                        s.method = "none",
                        s.color = d[0].color,
                        s.color2 = d[d.length - 1].color;
                        for (var f = [], v = 0, g = d.length; v < g; v++)
                            d[v].offset && f.push(d[v].offset + h + d[v].color);
                        s.colors = f.length ? f.join() : "0% " + s.color,
                        "radial" == l ? (s.type = "gradientTitle",
                        s.focus = "100%",
                        s.focussize = "0 0",
                        s.focusposition = c,
                        s.angle = 0) : (s.type = "gradient",
                        s.angle = (270 - u) % 360),
                        e.appendChild(s)
                    }
                    return 1
                }, A = function(e, i) {
                    this[0] = this.node = e,
                    e.raphael = !0,
                    this.id = t._oid++,
                    e.raphaelid = this.id,
                    this.X = 0,
                    this.Y = 0,
                    this.attrs = {},
                    this.paper = i,
                    this.matrix = t.matrix(),
                    this._ = {
                        transform: [],
                        sx: 1,
                        sy: 1,
                        dx: 0,
                        dy: 0,
                        deg: 0,
                        dirty: 1,
                        dirtyT: 1
                    },
                    !i.bottom && (i.bottom = this),
                    this.prev = i.top,
                    i.top && (i.top.next = this),
                    i.top = this,
                    this.next = null
                }, O = t.el;
                A.prototype = O,
                O.constructor = A,
                O.transform = function(e) {
                    if (null == e)
                        return this._.transform;
                    var n, r = this.paper._viewBoxShift, o = r ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy] : p;
                    r && (n = e = i(e).replace(/\.{3}|\u2026/g, this._.transform || p)),
                    t._extractTransform(this, o + e);
                    var s, a = this.matrix.clone(), l = this.skew, c = this.node, u = ~i(this.attrs.fill).indexOf("-"), d = !i(this.attrs.fill).indexOf("url(");
                    if (a.translate(1, 1),
                    d || u || "image" == this.type)
                        if (l.matrix = "1 0 0 1",
                        l.offset = "0 0",
                        s = a.split(),
                        u && s.noRotation || !s.isSimple) {
                            c.style.filter = a.toFilter();
                            var f = this.getBBox()
                              , v = this.getBBox(1)
                              , g = f.x - v.x
                              , m = f.y - v.y;
                            c.coordorigin = g * -b + h + m * -b,
                            C(this, 1, 1, g, m, 0)
                        } else
                            c.style.filter = p,
                            C(this, s.scalex, s.scaley, s.dx, s.dy, s.rotate);
                    else
                        c.style.filter = p,
                        l.matrix = i(a),
                        l.offset = a.offset();
                    return null !== n && (this._.transform = n,
                    t._extractTransform(this, n)),
                    this
                }
                ,
                O.rotate = function(t, e, r) {
                    if (this.removed)
                        return this;
                    if (null != t) {
                        if ((t = i(t).split(u)).length - 1 && (e = n(t[1]),
                        r = n(t[2])),
                        t = n(t[0]),
                        null == r && (e = r),
                        null == e || null == r) {
                            var o = this.getBBox(1);
                            e = o.x + o.width / 2,
                            r = o.y + o.height / 2
                        }
                        return this._.dirtyT = 1,
                        this.transform(this._.transform.concat([["r", t, e, r]])),
                        this
                    }
                }
                ,
                O.translate = function(t, e) {
                    return this.removed || ((t = i(t).split(u)).length - 1 && (e = n(t[1])),
                    t = n(t[0]) || 0,
                    e = +e || 0,
                    this._.bbox && (this._.bbox.x += t,
                    this._.bbox.y += e),
                    this.transform(this._.transform.concat([["t", t, e]]))),
                    this
                }
                ,
                O.scale = function(t, e, r, o) {
                    if (this.removed)
                        return this;
                    if ((t = i(t).split(u)).length - 1 && (e = n(t[1]),
                    r = n(t[2]),
                    o = n(t[3]),
                    isNaN(r) && (r = null),
                    isNaN(o) && (o = null)),
                    t = n(t[0]),
                    null == e && (e = t),
                    null == o && (r = o),
                    null == r || null == o)
                        var s = this.getBBox(1);
                    return r = null == r ? s.x + s.width / 2 : r,
                    o = null == o ? s.y + s.height / 2 : o,
                    this.transform(this._.transform.concat([["s", t, e, r, o]])),
                    this._.dirtyT = 1,
                    this
                }
                ,
                O.hide = function() {
                    return !this.removed && (this.node.style.display = "none"),
                    this
                }
                ,
                O.show = function() {
                    return !this.removed && (this.node.style.display = p),
                    this
                }
                ,
                O.auxGetBBox = t.el.getBBox,
                O.getBBox = function() {
                    var t = this.auxGetBBox();
                    if (this.paper && this.paper._viewBoxShift) {
                        var e = {}
                          , i = 1 / this.paper._viewBoxShift.scale;
                        return e.x = t.x - this.paper._viewBoxShift.dx,
                        e.x *= i,
                        e.y = t.y - this.paper._viewBoxShift.dy,
                        e.y *= i,
                        e.width = t.width * i,
                        e.height = t.height * i,
                        e.x2 = e.x + e.width,
                        e.y2 = e.y + e.height,
                        e
                    }
                    return t
                }
                ,
                O._getBBox = function() {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }
                ,
                O.remove = function() {
                    if (!this.removed && this.node.parentNode) {
                        for (var e in this.paper.__set__ && this.paper.__set__.exclude(this),
                        t.eve.unbind("raphael.*.*." + this.id),
                        t._tear(this, this.paper),
                        this.node.parentNode.removeChild(this.node),
                        this.shape && this.shape.parentNode.removeChild(this.shape),
                        this)
                            this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                        this.removed = !0
                    }
                }
                ,
                O.attr = function(i, n) {
                    if (this.removed)
                        return this;
                    if (null == i) {
                        var r = {};
                        for (var o in this.attrs)
                            this.attrs[e](o) && (r[o] = this.attrs[o]);
                        return r.gradient && "none" == r.fill && (r.fill = r.gradient) && delete r.gradient,
                        r.transform = this._.transform,
                        r
                    }
                    if (null == n && t.is(i, "string")) {
                        if (i == c && "none" == this.attrs.fill && this.attrs.gradient)
                            return this.attrs.gradient;
                        for (var s = i.split(u), a = {}, l = 0, h = s.length; l < h; l++)
                            (i = s[l])in this.attrs ? a[i] = this.attrs[i] : t.is(this.paper.customAttributes[i], "function") ? a[i] = this.paper.customAttributes[i].def : a[i] = t._availableAttrs[i];
                        return h - 1 ? a : a[s[0]]
                    }
                    if (this.attrs && null == n && t.is(i, "array")) {
                        for (a = {},
                        l = 0,
                        h = i.length; l < h; l++)
                            a[i[l]] = this.attr(i[l]);
                        return a
                    }
                    var p;
                    for (var f in null != n && ((p = {})[i] = n),
                    null == n && t.is(i, "object") && (p = i),
                    p)
                        d("raphael.attr." + f + "." + this.id, this, p[f]);
                    if (p) {
                        for (f in this.paper.customAttributes)
                            if (this.paper.customAttributes[e](f) && p[e](f) && t.is(this.paper.customAttributes[f], "function")) {
                                var v = this.paper.customAttributes[f].apply(this, [].concat(p[f]));
                                for (var g in this.attrs[f] = p[f],
                                v)
                                    v[e](g) && (p[g] = v[g])
                            }
                        p.text && "text" == this.type && (this.textpath.string = p.text),
                        q(this, p)
                    }
                    return this
                }
                ,
                O.toFront = function() {
                    return !this.removed && this.node.parentNode.appendChild(this.node),
                    this.paper && this.paper.top != this && t._tofront(this, this.paper),
                    this
                }
                ,
                O.toBack = function() {
                    return this.removed || this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild),
                    t._toback(this, this.paper)),
                    this
                }
                ,
                O.insertAfter = function(e) {
                    return this.removed || (e.constructor == t.st.constructor && (e = e[e.length - 1]),
                    e.node.nextSibling ? e.node.parentNode.insertBefore(this.node, e.node.nextSibling) : e.node.parentNode.appendChild(this.node),
                    t._insertafter(this, e, this.paper)),
                    this
                }
                ,
                O.insertBefore = function(e) {
                    return this.removed || (e.constructor == t.st.constructor && (e = e[0]),
                    e.node.parentNode.insertBefore(this.node, e.node),
                    t._insertbefore(this, e, this.paper)),
                    this
                }
                ,
                O.blur = function(e) {
                    var i = this.node.runtimeStyle
                      , n = i.filter;
                    return n = n.replace(g, p),
                    0 != +e ? (this.attrs.blur = e,
                    i.filter = n + h + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+e || 1.5) + ")",
                    i.margin = t.format("-{0}px 0 0 -{0}px", o(+e || 1.5))) : (i.filter = n,
                    i.margin = 0,
                    delete this.attrs.blur),
                    this
                }
                ,
                t._engine.path = function(t, e) {
                    var i = S("shape");
                    i.style.cssText = y,
                    i.coordsize = b + h + b,
                    i.coordorigin = e.coordorigin;
                    var n = new A(i,e)
                      , r = {
                        fill: "none",
                        stroke: "#000"
                    };
                    t && (r.path = t),
                    n.type = "path",
                    n.path = [],
                    n.Path = p,
                    q(n, r),
                    e.canvas && e.canvas.appendChild(i);
                    var o = S("skew");
                    return o.on = !0,
                    i.appendChild(o),
                    n.skew = o,
                    n.transform(p),
                    n
                }
                ,
                t._engine.rect = function(e, i, n, r, o, s) {
                    var a = t._rectPath(i, n, r, o, s)
                      , l = e.path(a)
                      , c = l.attrs;
                    return l.X = c.x = i,
                    l.Y = c.y = n,
                    l.W = c.width = r,
                    l.H = c.height = o,
                    c.r = s,
                    c.path = a,
                    l.type = "rect",
                    l
                }
                ,
                t._engine.ellipse = function(t, e, i, n, r) {
                    var o = t.path();
                    o.attrs;
                    return o.X = e - n,
                    o.Y = i - r,
                    o.W = 2 * n,
                    o.H = 2 * r,
                    o.type = "ellipse",
                    q(o, {
                        cx: e,
                        cy: i,
                        rx: n,
                        ry: r
                    }),
                    o
                }
                ,
                t._engine.circle = function(t, e, i, n) {
                    var r = t.path();
                    r.attrs;
                    return r.X = e - n,
                    r.Y = i - n,
                    r.W = r.H = 2 * n,
                    r.type = "circle",
                    q(r, {
                        cx: e,
                        cy: i,
                        r: n
                    }),
                    r
                }
                ,
                t._engine.image = function(e, i, n, r, o, s) {
                    var a = t._rectPath(n, r, o, s)
                      , l = e.path(a).attr({
                        stroke: "none"
                    })
                      , u = l.attrs
                      , d = l.node
                      , h = d.getElementsByTagName(c)[0];
                    return u.src = i,
                    l.X = u.x = n,
                    l.Y = u.y = r,
                    l.W = u.width = o,
                    l.H = u.height = s,
                    u.path = a,
                    l.type = "image",
                    h.parentNode == d && d.removeChild(h),
                    h.rotate = !0,
                    h.src = i,
                    h.type = "tile",
                    l._.fillpos = [n, r],
                    l._.fillsize = [o, s],
                    d.appendChild(h),
                    C(l, 1, 1, 0, 0, 0),
                    l
                }
                ,
                t._engine.text = function(e, n, r, s) {
                    var a = S("shape")
                      , l = S("path")
                      , c = S("textpath");
                    n = n || 0,
                    r = r || 0,
                    s = s || "",
                    l.v = t.format("m{0},{1}l{2},{1}", o(n * b), o(r * b), o(n * b) + 1),
                    l.textpathok = !0,
                    c.string = i(s),
                    c.on = !0,
                    a.style.cssText = y,
                    a.coordsize = b + h + b,
                    a.coordorigin = "0 0";
                    var u = new A(a,e)
                      , d = {
                        fill: "#000",
                        stroke: "none",
                        font: t._availableAttrs.font,
                        text: s
                    };
                    u.shape = a,
                    u.path = l,
                    u.textpath = c,
                    u.type = "text",
                    u.attrs.text = i(s),
                    u.attrs.x = n,
                    u.attrs.y = r,
                    u.attrs.w = 1,
                    u.attrs.h = 1,
                    q(u, d),
                    a.appendChild(c),
                    a.appendChild(l),
                    e.canvas.appendChild(a);
                    var f = S("skew");
                    return f.on = !0,
                    a.appendChild(f),
                    u.skew = f,
                    u.transform(p),
                    u
                }
                ,
                t._engine.setSize = function(e, i) {
                    var n = this.canvas.style;
                    return this.width = e,
                    this.height = i,
                    e == +e && (e += "px"),
                    i == +i && (i += "px"),
                    n.width = e,
                    n.height = i,
                    n.clip = "rect(0 " + e + " " + i + " 0)",
                    this._viewBox && t._engine.setViewBox.apply(this, this._viewBox),
                    this
                }
                ,
                t._engine.setViewBox = function(e, i, n, r, o) {
                    t.eve("raphael.setViewBox", this, this._viewBox, [e, i, n, r, o]);
                    var s, a, l = this.getSize(), c = l.width, u = l.height;
                    return o && (n * (s = u / r) < c && (e -= (c - n * s) / 2 / s),
                    r * (a = c / n) < u && (i -= (u - r * a) / 2 / a)),
                    this._viewBox = [e, i, n, r, !!o],
                    this._viewBoxShift = {
                        dx: -e,
                        dy: -i,
                        scale: l
                    },
                    this.forEach((function(t) {
                        t.transform("...")
                    }
                    )),
                    this
                }
                ,
                t._engine.initWin = function(t) {
                    var e = t.document;
                    e.styleSheets.length < 31 ? e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)") : e.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                        S = function(t) {
                            return e.createElement("<rvml:" + t + ' class="rvml">')
                        }
                    } catch (t) {
                        S = function(t) {
                            return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }
                ,
                t._engine.initWin(t._g.win),
                t._engine.create = function() {
                    var e = t._getContainer.apply(0, arguments)
                      , i = e.container
                      , n = e.height
                      , r = e.width
                      , o = e.x
                      , s = e.y;
                    if (!i)
                        throw new Error("VML container not found.");
                    var a = new t._Paper
                      , l = a.canvas = t._g.doc.createElement("div")
                      , c = l.style;
                    return o = o || 0,
                    s = s || 0,
                    r = r || 512,
                    n = n || 342,
                    a.width = r,
                    a.height = n,
                    r == +r && (r += "px"),
                    n == +n && (n += "px"),
                    a.coordsize = 1e3 * b + h + 1e3 * b,
                    a.coordorigin = "0 0",
                    a.span = t._g.doc.createElement("span"),
                    a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",
                    l.appendChild(a.span),
                    c.cssText = t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", r, n),
                    1 == i ? (t._g.doc.body.appendChild(l),
                    c.left = o + "px",
                    c.top = s + "px",
                    c.position = "absolute") : i.firstChild ? i.insertBefore(l, i.firstChild) : i.appendChild(l),
                    a.renderfix = function() {}
                    ,
                    a
                }
                ,
                t.prototype.clear = function() {
                    t.eve("raphael.clear", this),
                    this.canvas.innerHTML = p,
                    this.span = t._g.doc.createElement("span"),
                    this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",
                    this.canvas.appendChild(this.span),
                    this.bottom = this.top = null
                }
                ,
                t.prototype.remove = function() {
                    for (var e in t.eve("raphael.remove", this),
                    this.canvas.parentNode.removeChild(this.canvas),
                    this)
                        this[e] = "function" == typeof this[e] ? t._removedFactory(e) : null;
                    return !0
                }
                ;
                var $ = t.st;
                for (var M in O)
                    O[e](M) && !$[e](M) && ($[M] = function(t) {
                        return function() {
                            var e = arguments;
                            return this.forEach((function(i) {
                                i[t].apply(i, e)
                            }
                            ))
                        }
                    }(M))
            }
        }
        .apply(e, n)) || (t.exports = r)
    }
    ])
}
)),
function(t) {
    t.fn.popupwindow = function(e) {
        t("body").on("click", ".qt-popupwindow", (function(e) {
            var i, n, r;
            e.preventDefault();
            var o = t(this)
              , s = o.attr("href")
              , a = o.attr("data-name")
              , l = o.attr("data-width")
              , c = o.attr("data-height");
            return i = {
                height: 600,
                width: 600,
                toolbar: 0,
                scrollbars: 0,
                status: 0,
                resizable: 1,
                left: 0,
                top: 0,
                center: 0,
                createnew: 1,
                location: 0,
                menubar: 0,
                onUnload: null
            },
            l && (i.width = l),
            c && (i.height = c),
            1 == i.center && (i.top = (screen.height - (i.height + 110)) / 2,
            i.left = (screen.width - i.width) / 2),
            n = "location=" + i.location + ",menubar=" + i.menubar + ",height=" + i.height + ",width=" + i.width + ",toolbar=" + i.toolbar + ",scrollbars=" + i.scrollbars + ",status=" + i.status + ",resizable=" + i.resizable + ",left=" + i.left + ",screenX=" + i.left + ",top=" + i.top + ",screenY=" + i.top,
            r = window.open(s, a, n),
            i.onUnload && (unloadInterval = setInterval((function() {
                r && !r.closed || (clearInterval(unloadInterval),
                i.onUnload.call(t(this)))
            }
            ), 500)),
            !1
        }
        ))
    }
}(jQuery),
"function" != typeof Object.create && (Object.create = function(t) {
    function e() {}
    return e.prototype = t,
    new e
}
),
function(t, e, i) {
    var n = t(e)
      , r = function(t) {
        o(t)
    }
      , o = function(i) {
        "undefined" == typeof YT && void 0 === e.loadingPlayer ? (e.loadingPlayer = !0,
        e.dfd = t.Deferred(),
        e.onYouTubeIframeAPIReady = function() {
            e.onYouTubeIframeAPIReady = null,
            e.dfd.resolve("done"),
            i()
        }
        ) : "object" == typeof YT ? i() : e.dfd.done((function() {
            i()
        }
        ))
    }
      , s = {
        player: null,
        defaults: {
            ratio: 16 / 9,
            videoId: "iGpuQ0ioPrM",
            mute: !0,
            repeat: !0,
            width: t(e).width(),
            playButtonClass: "YTPlayer-play",
            pauseButtonClass: "YTPlayer-pause",
            muteButtonClass: "YTPlayer-mute",
            volumeUpClass: "YTPlayer-volume-up",
            volumeDownClass: "YTPlayer-volume-down",
            start: 0,
            pauseOnScroll: !1,
            fitToBackground: !0,
            playerVars: {
                iv_load_policy: 3,
                modestbranding: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                wmode: "opaque",
                branding: 0,
                autohide: 0
            },
            events: null
        },
        init: function(e, i) {
            var o = this;
            return o.userOptions = i,
            o.$body = t("body"),
            o.$node = t(e),
            o.defaults.events = {
                onReady: function(t) {
                    o.onPlayerReady(t),
                    o.options.pauseOnScroll && o.pauseOnScroll(),
                    "function" == typeof o.options.callback && o.options.callback.call(this)
                },
                onStateChange: function(t) {
                    1 === t.data ? (o.$node.find("img").fadeOut(400),
                    o.$node.addClass("loaded")) : 0 === t.data && o.options.repeat && o.player.seekTo(o.options.start)
                }
            },
            o.options = t.extend(!0, {}, o.defaults, o.userOptions),
            o.options.height = Math.ceil(o.options.width / o.options.ratio),
            o.ID = (new Date).getTime(),
            o.holderID = "YTPlayer-ID-" + o.ID,
            o.options.fitToBackground ? o.createBackgroundVideo() : o.createContainerVideo(),
            n.on("resize.YTplayer" + o.ID, (function() {
                o.resize(o)
            }
            )),
            r(o.onYouTubeIframeAPIReady.bind(o)),
            o.resize(o),
            o
        },
        pauseOnScroll: function() {
            var t = this;
            n.on("scroll.YTplayer" + t.ID, (function() {
                1 === t.player.getPlayerState() && t.player.pauseVideo()
            }
            )),
            n.scrollStopped((function() {
                2 === t.player.getPlayerState() && t.player.playVideo()
            }
            ))
        },
        createContainerVideo: function() {
            var e = this
              , i = t('<div id="ytplayer-container' + e.ID + '" >\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="' + e.holderID + '" class="ytplayer-player-inline"></div> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="ytplayer-shield" class="ytplayer-shield"></div>');
            e.$node.append(i),
            e.$YTPlayerString = i,
            i = null
        },
        createBackgroundVideo: function() {
            var e = this
              , i = t('<div id="ytplayer-container' + e.ID + '" class="ytplayer-container background">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="' + e.holderID + '" class="ytplayer-player"></div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div id="ytplayer-shield" class="ytplayer-shield"></div>');
            e.$node.append(i),
            e.$YTPlayerString = i,
            i = null
        },
        resize: function(i) {
            var n = t(e);
            i.options.fitToBackground || (n = i.$node);
            var r, o, s = n.width(), a = n.height(), l = t("#" + i.holderID);
            s / i.options.ratio < a ? (r = Math.ceil(a * i.options.ratio),
            l.width(r).height(a).css({
                left: (s - r) / 2,
                top: 0
            })) : (o = Math.ceil(s / i.options.ratio),
            l.width(s).height(o).css({
                left: 0,
                top: (a - o) / 2
            })),
            n = l = null
        },
        onYouTubeIframeAPIReady: function() {
            var t = this;
            t.player = new e.YT.Player(t.holderID,t.options)
        },
        onPlayerReady: function(t) {
            this.options.mute && t.target.mute(),
            t.target.playVideo()
        },
        getPlayer: function() {
            return this.player
        },
        destroy: function() {
            var i = this;
            i.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"),
            i.$YTPlayerString.remove(),
            t(e).off("resize.YTplayer" + i.ID),
            t(e).off("scroll.YTplayer" + i.ID),
            i.$body = null,
            i.$node = null,
            i.$YTPlayerString = null,
            i.player.destroy(),
            i.player = null
        }
    };
    t.fn.scrollStopped = function(e) {
        var i = t(this)
          , n = this;
        i.scroll((function() {
            i.data("scrollTimeout") && clearTimeout(i.data("scrollTimeout")),
            i.data("scrollTimeout", setTimeout(e, 250, n))
        }
        ))
    }
    ,
    t.fn.YTPlayer = function(e) {
        return this.each((function() {
            var i = this;
            t(i).data("yt-init", !0);
            var n = Object.create(s);
            n.init(i, e),
            t.data(i, "ytPlayer", n)
        }
        ))
    }
    ,
    jQuery(i).ready((function() {
        t.getScript("")
    }
    ))
}(jQuery, window, document),
function(t) {
    "use strict";
    var e = function(t) {
        console && "function" == typeof console.log && console.log(t)
    };
    e("Qt Main Loaded"),
    t.qtWebsiteObj = {
        body: t("body"),
        window: t(window),
        document: t(document),
        htmlAndbody: t("html,body"),
        highQualityScroll: t("body").hasClass("qt-hq-parallax"),
        fn: {
            isExplorer: function() {
                return /Trident/i.test(navigator.userAgent)
            },
            isSafari: function() {
                return /Safari/i.test(navigator.userAgent)
            },
            isMobile: function() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || t.qtWebsiteObj.window.width() < 1170
            },
            embedVideo: function(t, e, i) {
                i = e / 16 * 9;
                var n = t.match(/=[\w-]{11}/)[0].replace(/=/, "");
                return ''
            },
            smoothScr: function() {
                var e;
                t.qtWebsiteObj.body.off("click", "a.qt-smoothscroll"),
                t.qtWebsiteObj.body.off("click", "li.smoothscroll a"),
                t.qtWebsiteObj.body.on("click", "a.qt-smoothscroll, li.smoothscroll a", (function(i) {
                    i.preventDefault(),
                    e = t(this.hash).offset().top,
                    t("html,body").animate({
                        scrollTop: e
                    }, 600),
                    i.stopPropagation()
                }
                ))
            },
            YTreszr: function() {
                jQuery("iframe").each((function(t, e) {
                    var i = jQuery(this);
                    if (i.attr("src")) {
                        var n = i.attr("src");
                        if (n.match("youtube.com") || n.match("vimeo.com") || n.match("vevo.com")) {
                            var r = i.parent().width();
                            i.height();
                            i.css({
                                width: r
                            }),
                            i.height(r / 16 * 9)
                        } else if (n.match("soundcloud.com")) {
                            r = i.parent().width();
                            i.css({
                                width: r
                            })
                        }
                    }
                }
                ))
            },
            imagesLoaded: function() {
                var e = this.find('img[src!=""]');
                if (!e.length)
                    return t.Deferred().resolve().promise();
                var i = [];
                return e.each((function() {
                    var e = t.Deferred();
                    i.push(e);
                    var n = new Image;
                    n.onload = function() {
                        e.resolve()
                    }
                    ,
                    n.onerror = function() {
                        e.resolve()
                    }
                    ,
                    n.src = this.src
                }
                )),
                t.when.apply(t, i)
            },
            transformlinksReverse: function(t) {
                jQuery(t).find("[data-autoembed]").html("")
            },
            transformlinks: function(e, i) {
                void 0 === e && (e = "body");
                var n = t.qtWebsiteObj;
                jQuery(e).find("a[href*='youtube.com'],a[href*='youtu.be'],a[href*='mixcloud.com'],a[href*='soundcloud.com'], [data-autoembed]").not(".qw-disableembedding").not(".elementor-social-icon").not(".qt-disableembedding").each((function(e) {
                    var r = jQuery(this)
                      , o = r.attr("href")
                      , s = r.parent().width()
                      , a = (r.height(),
                    e = r,
                    r.data("fixedheight"));
                    if (!(r.hasClass(".elementor-social-icon") || !1 === i && r.hasClass("qt-differembed"))) {
                        0 === s && (s = r.parent().parent().parent()),
                        0 === s && (s = r.parent().parent().parent().width()),
                        0 === s && (s = r.parent().parent().parent().parent().width()),
                        r.attr("data-autoembed") && (o = r.attr("data-autoembed"));
                        var l = /(http|https):\/\/(\w{0,3}\.)?youtube\.\w{2,3}\/watch\?v=[\w-]{11}/gi
                          , c = o.match(l);
                        if (null !== c)
                            for (var u = 0; u < c.length; u++)
                                g(o = o.replace(c[u], t.qtWebsiteObj.fn.embedVideo(c[u], s, s / 16 * 9)));
                        var d, h = "", p = (l = /(http|https)(\:\/\/soundcloud.com\/+([a-zA-Z0-9\/\-_]*))/g,
                        o.match(l));
                        if (null !== p)
                            for (u = 0; u < p.length; u++) {
                                var f = p[u].replace(":", "%3A");
                                a || (a = 180),
                                jQuery.getJSON("https://soundcloud.com/oembed?maxheight=" + a + "&format=js&url=" + f + "&iframe=true&callback=?", (function(e) {
                                    h = e.html,
                                    r.closest("li").length > 0 && r.closest("li").hasClass("qt-collapsible-item") ? (d = t(h),
                                    g('<div class="qt-dynamic-iframe" data-src="' + d.attr("src") + '"></div>')) : g(h)
                                }
                                ))
                            }
                        l = /(http|https)\:\/\/www\.mixcloud\.com\/[\w-]{0,150}\/[\w-]{0,150}\/[\w-]{0,1}/gi;
                        var v = o.match(l);
                        if (null !== v)
                            for (u = 0; u < v.length; u++) {
                                g('<iframe data-state="0" class="mixcloudplayer" width="100%" height="160" src="//www.mixcloud.com/widget/iframe/?feed=' + (f = encodeURIComponent(v[u])) + '&embed_uuid=addfd1ba-1531-4f6e-9977-6ca2bd308dcc&stylecolor=&embed_type=widget_standard"></iframe><div class="canc"></div>')
                            }
                        n.fn.YTreszr()
                    }
                    function g(t) {
                        return e.is("a") ? e.replaceWith(t) : e.html(t),
                        !0
                    }
                }
                )),
                n.body.off("click", ".qt-collapsible li"),
                n.body.on("click", ".qt-collapsible li", (function(e) {
                    var i = t(this);
                    if (i.hasClass("active")) {
                        var r = i.find(".qt-dynamic-iframe")
                          , o = r.attr("data-src");
                        r.replaceWith('<iframe src="' + o + '" frameborder="0"></iframe>'),
                        n.fn.YTreszr()
                    }
                }
                )),
                n.body.off("click", "ul.tabs li a"),
                n.body.on("click", "ul.tabs li a", (function(t) {
                    n.fn.YTreszr(),
                    window.dispatchEvent(new Event("resize"))
                }
                ))
            },
            qtMobileNav: function() {
                return t.qtWebsiteObj.body.find(".qt-dropdown-menu li.menu-item-has-children").each((function(e, i) {
                    var n = t(i);
                    n.append("<a class='qt-openthis'><i class='material-icons'>keyboard_arrow_down</i></a>"),
                    n.on("click", "> .qt-openthis", (function(t) {
                        t.preventDefault(),
                        n.toggleClass("open")
                    }
                    ))
                }
                )),
                !0
            },
            slickGallery: function() {
                t.qtWebsiteObj.slickSliders = t(".qt-slickslider, .qt-slick"),
                0 !== t.qtWebsiteObj.slickSliders.length && (t.qtWebsiteObj.slickSliders.not(".slick-initialized").each((function() {
                    var e = t(this)
                      , i = e.attr("data-slidestoshow")
                      , n = e.attr("data-slidestoshowmobile")
                      , r = e.attr("data-slidestoshowipad")
                      , o = e.attr("data-appendArrows");
                    void 0 !== i && "" !== i || (i = 1),
                    void 0 !== n && "" !== n || (n = 1),
                    void 0 !== r && "" !== r || (r = 3),
                    o = void 0 === o || "" === o ? e : e.closest(o);
                    var s = !1
                      , a = !1
                      , l = !0;
                    n > 1 && (s = !0,
                    l = !1,
                    a = !0),
                    e.slick({
                        slidesToScroll: 1,
                        pauseOnHover: "true" === e.attr("data-pauseonhover"),
                        infinite: s,
                        centerMode: a,
                        variableWidth: l,
                        autoplay: "true" === e.attr("data-autoplay"),
                        autoplaySpeed: 4e3,
                        centerPadding: 0,
                        slide: ".qt-item",
                        dots: "true" === e.attr("data-dotsmobile"),
                        arrows: !1,
                        slidesToShow: n,
                        appendArrows: !1,
                        mobileFirst: !0,
                        variableHeight: !1,
                        draggable: !1,
                        touchMove: !0,
                        responsive: [{
                            breakpoint: 600,
                            settings: {
                                slidesToShow: r,
                                centerMode: !0,
                                centerPadding: 50,
                                variableWidth: "true" === e.attr("data-variablewidth"),
                                variableHeight: !0,
                                dots: "true" === e.attr("data-dotsipad"),
                                draggable: !1,
                                touchMove: !0,
                                infinite: !0
                            }
                        }, {
                            breakpoint: 1170,
                            settings: {
                                infinite: !0,
                                arrows: !1,
                                centerMode: !1,
                                centerPadding: 0,
                                dots: "true" === e.attr("data-dots"),
                                variableWidth: "true" === e.attr("data-variablewidth"),
                                variableHeight: !0,
                                draggable: !0,
                                touchMove: !1,
                                slidesToShow: i
                            }
                        }]
                    }).promise().done((function() {
                        e.removeClass("qt-invisible")
                    }
                    ))
                }
                )),
                t.qtWebsiteObj.body.off("click", "[data-slicknext]"),
                t.qtWebsiteObj.body.on("click", "[data-slicknext]", (function(e) {
                    e.preventDefault(),
                    t(this).closest(".qt-slickslider-outercontainer").find(".qt-slickslider").slick("slickNext")
                }
                )),
                t.qtWebsiteObj.body.off("click", "[data-slickprev]"),
                t.qtWebsiteObj.body.on("click", "[data-slickprev]", (function(e) {
                    e.preventDefault(),
                    t(this).closest(".qt-slickslider-outercontainer").find(".qt-slickslider").slick("slickPrev")
                }
                )))
            },
            qtParallaxRuntime8: function(e) {
                var i, n, r, o, s = e.data, a = s.itemsArray, l = t.qtWebsiteObj, c = Date.now(), u = s.wH, d = l.window.scrollTop();
                c > l.lastMove + 1 && (l.lastMove = c,
                a.each((function(e, s) {
                    i = t(s),
                    o = i.data("speed") / 10,
                    (r = i.offset().top) + i.outerHeight() <= d || r >= d + u || (n = Math.round((r - d) * o),
                    i.css("background-position", "center " + n + "px"))
                }
                )))
            },
            qtParallaxV8: function() {
                var e = t.qtWebsiteObj
                  , i = e.fn.qtParallaxRuntime8
                  , n = t('[data-parallax="1"]');
                if (0 !== n.length && !1 !== e.highQualityScroll) {
                    n.each((function(i, n) {
                        var r = t(n);
                        e.fn.isMobile() || e.window.width() < 1280 ? r.css("background-attachment", "local") : (r.css("background-attachment", "fixed"),
                        t(n).data("speed") || t(n).data("speed", 1.5))
                    }
                    ));
                    var r = {
                        itemsArray: n,
                        wH: e.window.height()
                    };
                    e.lastMove = Date.now(),
                    e.window.off("scroll", i),
                    e.window.on("scroll", r, i),
                    t(window).scroll()
                }
            },
            qtParallaxReinit: function() {
                t.qtWebsiteObj.fn.qtParallaxV8()
            },
            dynamicBackgroundsV4: function(e) {
                void 0 === e && (e = "body"),
                t(e + " [data-bgimage]").each((function() {
                    var e = t(this)
                      , i = e.attr("data-bgimage");
                    "" === i || e.css({
                        "background-image": "url(" + i + ")"
                    }).addClass("qt-bgloaded")
                }
                ))
            },
            qtSkrollrInit: function() {
                t.qtWebsiteObj.fn.isMobile() || (t.qtWebsiteObj.skrollrInstance = skrollr.init({
                    smoothScrolling: !0,
                    forceHeight: !1
                }))
            },
            qtActivates: function() {
                var e = t.qtWebsiteObj;
                e.body.off("click", "[data-activates]"),
                e.body.on("click", "[data-activates]", (function(e) {
                    e.preventDefault(),
                    t(t(this).attr("data-activates")).toggleClass("active")
                }
                ))
            },
            openPlayer: function() {
                jQuery(".button-playlistswitch").click()
            },
            qt3DfxFunction: {
                status: 0,
                init: function() {
                    var e = t.qtWebsiteObj
                      , i = t.qtWebsiteObj.fn.qt3DfxFunction
                      , n = t("#maincontent")
                      , r = t("#qtLayerBottom")
                      , o = t("#qtMasterContainter")
                      , s = t("[data-3dfx]");
                    i.status = 0,
                    i.lb = r,
                    i.bt = s,
                    i.cont = n,
                    i.perspect = o,
                    i.iexpl = e.fn.isExplorer(),
                    s.on("click", (function(t) {
                        return t.preventDefault(),
                        t.stopPropagation(),
                        0 !== i.status && i.status ? i.close() : i.open(),
                        !1
                    }
                    )),
                    t(".qt-menuswitch").on("click", (function(e) {
                        t.qtWebsiteObj.fn.qt3DfxFunction.close(),
                        s.removeClass("active")
                    }
                    ))
                },
                open: function() {
                    var e = t.qtWebsiteObj
                      , i = e.fn.qt3DfxFunction
                      , n = i.lb
                      , r = i.bt;
                    i.status = 1,
                    r.addClass("active"),
                    i.cont.addClass("qt-3dfx"),
                    t(".button-collapse").sideNav("hide"),
                    e.fn.isMobile() ? (i.cont.addClass("qt-3dfx-on"),
                    n.addClass("active")) : i.iexpl ? (i.cont.addClass("qt-3dfx-on-IE"),
                    n.addClass("active"),
                    e.body.addClass("qt-body-3dfx-on-IE")) : (e.body.css({
                        height: "100vh",
                        overflow: "hidden"
                    }).addClass("qt-body-3dfx-on"),
                    i.perspect.addClass("qt-3dfx-enabled").css({
                        perspective: "1500px",
                        height: "100vh",
                        "overflow-x": "hidden"
                    }).promise().done((function() {
                        i.cont.css({
                            height: "100vh",
                            transform: "scale(1)rotateY(0deg) translateY(0%)",
                            top: "0%",
                            "transform-origin": "18% 36%"
                        }).promise().done((function() {
                            try {
                                i.cont.addClass("qt-3dfx-on")
                            } catch (t) {}
                            i.cont.css({
                                transform: "scale(0.4) rotateY(33deg)  translateY(30%)",
                                top: "30%"
                            }),
                            n.addClass("active")
                        }
                        ))
                    }
                    )))
                },
                close: function() {
                    var e = t.qtWebsiteObj
                      , i = e.fn.qt3DfxFunction
                      , n = i.lb
                      , r = i.bt;
                    i.status = 0,
                    r.removeClass("active"),
                    e.fn.isMobile() ? (n.removeClass("active"),
                    i.cont.removeClass("qt-3dfx-on"),
                    i.cont.addClass("qt-3dfx"),
                    e.body.css({
                        height: "auto",
                        overflow: "initial"
                    }).removeClass("qt-body-3dfx-on").promise().done((function() {
                        i.cont.removeClass("qt-3dfx"),
                        e.fn.qtParallaxReinit()
                    }
                    ))) : i.iexpl ? (i.cont.removeClass("qt-3dfx-on-IE"),
                    n.removeClass("active"),
                    e.body.removeClass("qt-body-3dfx-on-IE"),
                    e.fn.qtParallaxReinit()) : (n.removeClass("active"),
                    i.cont.css({
                        transform: "scale(1) rotateY(0deg)  translateY(0%)",
                        top: "0%"
                    }).delay(300).promise().done((function() {
                        i.perspect.css({
                            perspective: "none",
                            height: "auto",
                            "overflow-x": "auto"
                        }).promise().done((function() {
                            i.cont.css({
                                height: "initial",
                                "transform-origin": "initial",
                                transform: "none"
                            }).removeClass("qt-3dfx-on"),
                            i.cont.addClass("qt-3dfx"),
                            i.perspect.removeClass("qt-3dfx-enabled"),
                            e.body.css({
                                height: "auto",
                                overflow: "initial"
                            }).removeClass("qt-body-3dfx-on").promise().done((function() {
                                i.cont.removeClass("qt-3dfx"),
                                e.fn.qtParallaxReinit(),
                                void 0 !== t.qtWebsiteObj.skrollrInstance && t.qtWebsiteObj.skrollrInstance.refresh()
                            }
                            ))
                        }
                        ))
                    }
                    )))
                }
            },
            animObj: !1,
            animInterval: !1,
            equalizerPath: function(t, e, i) {
                var n = ""
                  , r = 0
                  , o = 0
                  , s = Math.round(e / (t.length - 1));
                return n += "M " + [-30, -3],
                t.forEach((function(t, e) {
                    o = Math.round(i / 100 * t),
                    r = e * s,
                    0 == e ? (n += "L " + [r = -1, o] + " S ",
                    [r, o]) : n += [r, o] + " ,"
                }
                )),
                n += "L " + (e + 1) + ",-1",
                n += "L " + [0, 0]
            },
            doAnimationEq: function(e, i, n, r, o, s) {
                var a = t.qtWebsiteObj.fn.equalizerPath(e, r, o)
                  , l = Raphael.animation({
                    path: a,
                    stroke: s
                }, i, "<>");
                n.animate(l, {
                    path: a + "L" + r + "," + o + " 0," + o + "z",
                    fill: s,
                    stroke: s
                }, i, "<>")
            },
            cardAnimDestroy: function() {
                var e = t.qtWebsiteObj.fn;
                !1 !== e.animObj && e.animObj.remove(),
                !1 !== e.animInterval && clearInterval(e.animInterval)
            },
            cardAnimation: function() {
                var e = t.qtWebsiteObj.fn
                  , i = t(".qt-part-archive-item.qt-open .qt-animation");
                if (e.cardAnimDestroy(),
                !(i.length <= 0)) {
                    i.attr("id", "qtCardAnimation");
                    for (var n = t("#qtCardAnimation"), r = n.attr("data-color"), o = n.height(), s = n.width(), a = Raphael(i[0], "100%", "100%"), l = [], c = 0; c < 9; c++)
                        l[c] = Math.floor(60 * Math.random() + 20);
                    var u = e.equalizerPath(l, s, o);
                    e.animObj = a.path(u).attr({
                        fill: r,
                        stroke: r
                    });
                    for (c = 0; c < 9; c++)
                        l[c] = Math.floor(60 * Math.random() + 20);
                    e.doAnimationEq(l, 3e3, e.animObj, s, o),
                    e.animInterval = setInterval((function() {
                        for (var t = [], i = 0; i < 9; i++)
                            t[i] = Math.floor(60 * Math.random() + 20);
                        e.doAnimationEq(t, 3e3, e.animObj, s, o, r)
                    }
                    ), 2300)
                }
            },
            qtVideoBg: function() {
                if (!t.qtWebsiteObj.fn.isMobile()) {
                    var e = jQuery("#qtvideobg");
                    if (1 == e.length) {
                        var i = e.attr("data-id");
                        e.YTPlayer({
                            fitToBackground: !0,
                            videoId: i,
                            mute: e.data("mute"),
                            playerVars: {
                                modestbranding: 0,
                                autoplay: 1,
                                controls: 0,
                                showinfo: 0,
                                branding: 0,
                                rel: 0,
                                autohide: 0,
                                start: e.data("start"),
                                vq: "large"
                            },
                            callback: function() {
                                e.delay(1e3).promise().done((function() {
                                    e.animate({
                                        opacity: 1
                                    }, 1500)
                                }
                                ))
                            }
                        })
                    }
                }
            },
            pageheaderFx: function() {
                t("#qt-pageheader").addClass("active")
            },
            countDown: {
                cd: t(".qt-countdown"),
                cdf: this,
                pad: function(t) {
                    return t < 10 ? "0" + t : t
                },
                showclock: function() {
                    if (!(t(".qt-countdown").length < 1) && t(".qt-countdown").data("date") && t(".qt-countdown").data("time")) {
                        var e, i, n, r = t.qtWebsiteObj.fn.countDown, o = t(".qt-countdown"), s = (r.cdf,
                        ""), a = new Date, l = o.data("date").split("-"), c = o.data("time").split(":"), u = new Date(l[0],l[1] - 1,l[2],c[0],c[1]).getTime() / 1e3 - a.getTime() / 1e3;
                        if (u <= 0 || isNaN(u))
                            return o.hide(),
                            o;
                        e = Math.floor(u / 86400),
                        u %= 86400,
                        i = Math.floor(u / 3600),
                        u %= 3600,
                        n = Math.floor(u / 60),
                        u = Math.floor(u % 60),
                        0 != e && (s += r.pad(e) + "<span>" + o.data("days") + "</span> "),
                        s += r.pad(i) + "<span>" + o.data("hours") + "</span> ",
                        s += r.pad(n) + "<span>" + o.data("minutes") + "</span> ",
                        s += r.pad(u) + "<span>" + o.data("seconds") + "</span>",
                        o.html(s)
                    }
                },
                remove: function() {
                    var e = t.qtWebsiteObj.fn.countDown;
                    e.qtClockInterval && clearInterval(e.qtClockInterval)
                },
                init: function() {
                    var e = t.qtWebsiteObj.fn.countDown;
                    t(".qt-countdown").length < 1 || (e.showclock(),
                    e.qtClockInterval = setInterval((function() {
                        e.showclock()
                    }
                    ), 1e3))
                }
            },
            masonry: function() {
                return t(".qt-masonry").each((function(e, i) {
                    var n = t(i)
                      , r = t(i).attr("id")
                      , o = document.querySelector("#" + r);
                    o && n.imagesLoaded().then((function() {
                        new Masonry(o,{
                            itemSelector: ".qt-ms-item",
                            columnWidth: ".qt-ms-item"
                        })
                    }
                    ))
                }
                )),
                t(".gallery").each((function(e, i) {
                    var n = t(i)
                      , r = t(i).attr("id")
                      , o = document.querySelector("#" + r);
                    t(this).parent().hasClass("elementor-image-gallery") || o && n.imagesLoaded().then((function() {
                        new Masonry(o,{
                            itemSelector: ".gallery-item",
                            columnWidth: ".gallery-item"
                        })
                    }
                    ))
                }
                )),
                !0
            },
            shareitem: function() {
                var e = t.qtWebsiteObj.body
                  , i = t("#qtSharelayer");
                e.off("click", "[data-shareitem]"),
                e.on("click", "[data-shareitem]", (function(e) {
                    e.preventDefault();
                    var n = t(this).data("shareitem")
                      , r = encodeURIComponent(n);
                    t("[data-sharetype-facebook]").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + r),
                    t("[data-sharetype-twitter]").attr("href", "https://twitter.com/home?status=" + r),
                    t("[data-sharetype-google]").attr("href", "https://plus.google.com/share?url=" + r),
                    t("[data-sharetype-pinterest]").attr("href", "https://www.pinterest.es/pin/create/bookmarklet/?url=" + r),
                    i.addClass("active")
                }
                )),
                e.off("click", "#qtSharelayer .qt-close, #qtSharelayer"),
                e.on("click", "#qtSharelayer .qt-close, #qtSharelayer", (function(t) {
                    i.removeClass("active")
                }
                ))
            },
            qtCardActivator: function() {
                var e = t.qtWebsiteObj
                  , i = e.body
                  , n = e.fn;
                i.off("click", "[data-activatecard]"),
                i.on("click", "[data-activatecard]", (function(e) {
                    e.preventDefault();
                    var i = t(this).closest(".qt-interactivecard");
                    n.cardAnimDestroy(),
                    i.hasClass("qt-open") ? (i.removeClass("qt-open"),
                    n.transformlinksReverse("#" + i.attr("id"))) : (n.transformlinksReverse(".qt-interactivecard.qt-open"),
                    t(".qt-interactivecard.qt-open").removeClass("qt-open"),
                    i.addClass("qt-open"),
                    n.transformlinks("#" + i.attr("id"), !0),
                    n.cardAnimation())
                }
                ))
            },
            loadmore: {
                init: function() {
                    var e, i, n = t.qtWebsiteObj, r = n.body, o = n.fn, s = "#qtloop", a = "#qtloadmore", l = t(a).find("i");
                    l.hide(),
                    r.off("click", "#qtloadmore"),
                    r.on("click", "#qtloadmore", (function(n) {
                        n.preventDefault(),
                        e = t(a).attr("href"),
                        l.show(),
                        t.ajax({
                            url: e,
                            success: function(e) {
                                i = t(s, e),
                                t("#qtpagination").remove(),
                                t(s).append(i.html()),
                                t(a).find("i").hide(),
                                t(s).imagesLoaded().then((function() {
                                    o.masonry(),
                                    o.YTreszr(),
                                    o.dynamicBackgroundsV4(s),
                                    o.qtCardActivator()
                                }
                                ))
                            },
                            error: function() {
                                window.location.replace(e)
                            }
                        })
                    }
                    ))
                }
            },
            perspCard: {
                init: function() {
                    t.qtWebsiteObj.fn.isMobile() || t.qtWebsiteObj.fn.perspCard.mousemove()
                },
                generateTranslate: function(t, e, i) {
                    t.css({
                        transform: "translate(" + e.clientX * i + "px, " + e.clientY * i + "px)"
                    })
                },
                mousemove: function() {
                    var e = t.qtWebsiteObj
                      , i = e.fn.perspCard.generateTranslate;
                    e.body.find(".qt-perspectivecard-wrapper").each((function(e, n) {
                        var r, o, s, a = t(n), l = a.find(".qt-perspectivecard"), c = a.find(".qt-perspectivecard__cover"), u = a.find(".qt-perspectivecard__bg2"), d = a.find(".qt-perspectivecard__bg3"), h = a.find(".qt-perspectivecard__bg4"), p = a.find(".qt-perspectivecard__fg1"), f = a.find(".qt-perspectivecard__fg2"), v = a.find("p"), g = a.offset().left, m = a.offset().top, y = a.width(), b = a.height(), x = y / 2, w = b / 2, k = 0, T = Date.now();
                        a.off("mousemove"),
                        a.on("mousemove", (function(t) {
                            (T = Date.now()) > k + 2 && (k = T,
                            o = t.pageX - x,
                            s = t.pageY - w,
                            r = [[1, 0, 0, 3e-5 * -(-1 * (o - g / 2) / 100)], [0, 1, 0, 3e-5 * -(-1 * (s - m / 2) / 100)], [0, 0, 1, 1], [0, 0, 0, 1]],
                            i(u, t, -.04),
                            i(d, t, -.03),
                            i(h, t, -.02),
                            i(c, t, 0),
                            i(p, t, .02),
                            i(f, t, .03),
                            i(v, t, .01),
                            l.css({
                                transform: "matrix3d(" + r.toString() + ")"
                            }))
                        }
                        ))
                    }
                    ))
                }
            },
            initializeVisualComposerAfterAjax: function() {
                "function" == typeof vc_toggleBehaviour && vc_toggleBehaviour(),
                "function" == typeof vc_tabsBehaviour && vc_tabsBehaviour(),
                "function" == typeof vc_accordionBehaviour && vc_accordionBehaviour(),
                "function" == typeof vc_initVideoBackgrounds && vc_initVideoBackgrounds(),
                "function" == typeof vc_teaserGrid && vc_teaserGrid(),
                "function" == typeof vc_carouselBehaviour && vc_carouselBehaviour(),
                "function" == typeof vc_slidersBehaviour && vc_slidersBehaviour(),
                "function" == typeof vc_prettyPhoto && vc_prettyPhoto(),
                "function" == typeof vc_googleplus && vc_googleplus(),
                "function" == typeof vc_pinterest && vc_pinterest(),
                "function" == typeof t.fn.qtChartvoteInit && t.fn.qtChartvoteInit(),
                t("body [data-bgimagevc]").each((function() {
                    var e = t(this)
                      , i = e.attr("data-bgimagevc")
                      , n = e.attr("data-bgattachment");
                    void 0 === n && (n = "static"),
                    "" !== i && e.css({
                        "background-image": "url(" + i + ")",
                        "background-attachment": "fixed"
                    })
                }
                ))
            },
            qtMaterialSlideshow: function() {
                t(".qt-material-slider").each((function(e, i) {
                    var n = t(i)
                      , r = n.data("proportion")
                      , o = n.data("proportionmob")
                      , s = n.data("height")
                      , a = t.qtWebsiteObj.window;
                    a.width() < 680 && (r = o),
                    "wide" === r && (s = n.width() / 16 * 9),
                    "ultrawide" === r && (s = n.width() / 2),
                    "full" === r && (s = a.height()),
                    n.slider({
                        full_width: !0,
                        height: s
                    }).delay(2).promise().done((function() {
                        n.addClass("active")
                    }
                    )),
                    n.on("click", ".prev", (function(t) {
                        t.preventDefault(),
                        n.slider("prev")
                    }
                    )),
                    n.on("click", ".next", (function(t) {
                        t.preventDefault(),
                        n.slider("next")
                    }
                    )),
                    n.on("mouseenter", ".qt-slideshow-link", (function() {
                        n.slider("pause")
                    }
                    )).on("mouseleave", ".qt-slideshow-link", (function() {
                        n.slider("start")
                    }
                    ))
                }
                ))
            },
            scrollUpF: function() {
                if (t.qtWebsiteObj.fn.isMobile) {
                    var e = 0
                      , i = t("#qt-mob-navbar");
                    document.addEventListener("scroll", (function() {
                        var t = window.pageYOffset || document.documentElement.scrollTop;
                        t > e ? (i.removeClass("qt-up"),
                        t > 80 ? i.addClass("qt-down") : i.removeClass("qt-down")) : (i.removeClass("qt-down"),
                        i.addClass("qt-up")),
                        e = t
                    }
                    ), !1)
                }
            },
            qtPopupwindow: function() {
                void 0 !== t.fn.popupwindow && t(".qt-popupwindow").popupwindow()
            },
            qtResizeTimer: function() {
                var e, i = t.qtWebsiteObj, n = i.window, r = n.width(), o = n.height(), s = i.fn;
                n.on("resize", (function(t) {
                    clearTimeout(e),
                    e = setTimeout((function() {
                        n.width() == r && n.height() == o || s.perspCard.init()
                    }
                    ), 150)
                }
                ))
            },
            newIcons: function() {},
            initializeAfterAjax: function() {
                e("-> what are you looking for?");
                try {
                    e("Doing");
                    var i = t.qtWebsiteObj.fn;
                    return i.perspCard.init(),
                    i.newIcons(),
                    i.slickGallery(),
                    i.qtActivates(),
                    i.dynamicBackgroundsV4(),
                    i.qtParallaxV8(),
                    void 0 !== t.qtWebsiteObj.skrollrInstance ? t.qtWebsiteObj.skrollrInstance.refresh() : i.qtSkrollrInit(),
                    i.transformlinks("#maincontent", !1),
                    i.transformlinks("#qtFooterWidgets", !1),
                    t(".qt-collapsible").collapsible(),
                    jQuery("ul.tabs").tabs({
                        swipeable: !1
                    }),
                    i.smoothScr(),
                    i.YTreszr(),
                    i.qtCardActivator(),
                    i.qtVideoBg(),
                    i.qtMaterialSlideshow(),
                    i.countDown.init(),
                    i.pageheaderFx(),
                    i.masonry(),
                    i.shareitem(),
                    i.loadmore.init(),
                    i.qt3DfxFunction.close(),
                    i.qtPopupwindow(),
                    "function" == typeof t.fn.qtDynamicMaps && t.fn.qtDynamicMaps(),
                    "function" == typeof t.qtSwipeboxFunction && t.qtSwipeboxFunction(),
                    t(".dropdown-button").dropdown({
                        inDuration: 300,
                        outDuration: 225,
                        constrainWidth: !1,
                        hover: !1,
                        gutter: 0,
                        belowOrigin: !0,
                        alignment: "left",
                        stopPropagation: !1
                    }),
                    t.qtWebsiteObj.body.hasClass("qt-animations-enabled") && jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint((function() {
                        jQuery(this).addClass("wpb_start_animation animated")
                    }
                    ), {
                        offset: "85%"
                    }),
                    jQuery.fn.waypoint && jQuery(".qt-txtfx:not(.qt-txtfxstart)").waypoint((function() {
                        e("waypoint"),
                        jQuery(this).addClass("qt-txtfxstart")
                    }
                    ), {
                        offset: "80%"
                    }),
                    "function" == typeof t.fn.qtPlacesInit && t.fn.qtPlacesInit(),
                    t(window).scroll(),
                    !0
                } catch (t) {
                    return e("errors happening"),
                    !1
                }
            },
            init: function() {
                e("====== MÚSICO LOCAL =======");
                var i = t.qtWebsiteObj.fn;
                t(".button-collapse").sideNav(),
                t.qtWebsiteObj.body.on("click", ".qt-closesidenav", (function(e) {
                    e.preventDefault(),
                    t(".button-collapse").sideNav("hide")
                }
                )),
                i.newIcons(),
                i.qtMobileNav(),
                i.qt3DfxFunction.init(),
                i.scrollUpF(),
                i.initializeAfterAjax(),
                i.qtResizeTimer()
            }
        }
    },
    jQuery(document).ready((function() {
        t.qtWebsiteObj.fn.init()
    }
    )),
    t(window).resize((function() {
        t.qtWebsiteObj.fn.YTreszr()
    }
    ))
}(jQuery);
