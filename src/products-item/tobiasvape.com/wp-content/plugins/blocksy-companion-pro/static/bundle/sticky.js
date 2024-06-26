! function() {
    "use strict";
    var t = {
            n: function(e) {
                var r = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(r, {
                    a: r
                }), r
            },
            d: function(e, r) {
                for (var n in r) t.o(r, n) && !t.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: r[n]
                })
            },
            o: function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
        },
        e = window.ctEvents,
        r = t.n(e),
        n = window.ctFrontend,
        i = function(t, e, r) {
            return Math.max(t, Math.min(e, r))
        },
        o = function(t, e, r) {
            return e[0] + (e[1] - e[0]) / (t[1] - t[0]) * (r - t[0])
        },
        a = function(t) {
            var e = getComputedStyle(t),
                r = getComputedStyle(t.firstElementChild),
                n = parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth) + parseFloat(r.borderTopWidth) + parseFloat(r.borderBottomWidth),
                i = parseFloat(e.getPropertyValue("--height"));
            if (t.querySelector('[data-items] > [data-id="logo"]')) {
                var o = getComputedStyle(t.querySelector('[data-items] > [data-id="logo"]')),
                    a = parseFloat(o.height);
                if (a += parseFloat(o.marginTop) + parseFloat(o.marginBottom), t.querySelector(".site-logo-container")) {
                    var c = getComputedStyle(t.querySelector(".site-logo-container")),
                        s = parseFloat(c.getPropertyValue("--logo-shrink-height") || 0);
                    s > 0 && (a = a - s + parseFloat(c.getPropertyValue("--logo-max-height") || 50))
                }
                a > i && (i = a)
            }
            if (t.querySelector('[data-items] > [data-id*="widget-area"]')) {
                var l = getComputedStyle(t.querySelector('[data-items] > [data-id*="widget-area"]')),
                    u = parseFloat(l.height);
                u > i && (i = u)
            }
            return i + n
        },
        c = function(t) {
            if (t.blcInitialHeight) return t.blcInitialHeight;
            var e = t.firstElementChild;
            t.firstElementChild.firstElementChild && (e = t.firstElementChild.firstElementChild);
            var r = e.getBoundingClientRect().height;
            return t.blcInitialHeight = r, r
        },
        s = function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (t.blcStickyHeight) return t.blcStickyHeight;
            var r = c(t),
                n = getComputedStyle(t),
                i = getComputedStyle(t.firstElementChild);
            if (t.closest('[data-sticky*="yes"]')) {
                var o = parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth) + parseFloat(i.borderTopWidth) + parseFloat(i.borderBottomWidth);
                e || (o = 0);
                var s = t.getBoundingClientRect().height - o;
                if (Math.round(s) !== Math.round(r) || Math.round(r) > Math.round(a(t))) return t.blcStickyHeight = t.getBoundingClientRect().height, s
            }
            var l = 100;
            t.dataset.row.includes("middle") && (l = n.getPropertyValue("--sticky-shrink"));
            return l && (r *= parseFloat(l) / 100), r
        },
        l = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {
                    return 0
                },
                e = document.querySelector(".ct-floating-bar");
            e && e.style.setProperty("--header-sticky-height-animated", t())
        };

    function u(t) {
        return function(t) {
            if (Array.isArray(t)) return d(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return d(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var y = null,
        f = function(t) {
            var e = t.stickyContainer,
                r = t.startPosition;
            u(e.querySelectorAll('[data-row*="middle"]')).map((function(t) {
                if (t.querySelector('[data-id="logo"] .site-logo-container')) {
                    var e = t.querySelector('[data-id="logo"] .site-logo-container'),
                        n = function(t) {
                            var e = t.logo,
                                r = t.row;
                            if (y) return y;
                            var n = parseFloat(getComputedStyle(e).getPropertyValue("--logo-max-height") || 50),
                                i = parseFloat(getComputedStyle(e).getPropertyValue("--logo-sticky-shrink").toString().replace(",", ".") || 1),
                                o = c(r),
                                a = s(r);
                            return y = {
                                initialHeight: n,
                                stickyShrink: i,
                                rowInitialHeight: o,
                                rowStickyHeight: a
                            }
                        }({
                            logo: e,
                            row: t
                        }),
                        a = n.initialHeight,
                        l = n.stickyShrink,
                        u = n.rowInitialHeight,
                        d = n.rowStickyHeight,
                        f = a * l;
                    1 !== l && e.style.setProperty("--logo-shrink-height", "".concat(o([r, r + Math.abs(u === d ? a - f : u - d)], [1, l], i(r, r + Math.abs(u === d ? a - f : u - d), scrollY)) * a, "px"))
                }
            }))
        },
        h = null,
        m = function(t) {
            var e = t.stickyContainer,
                r = (t.containerInitialHeight, t.startPosition);
            e.querySelector('[data-row*="middle"]') && [e.querySelector('[data-row*="middle"]')].map((function(t) {
                var e = function(t) {
                        var e = t.row;
                        if (h) return h;
                        var r = c(e),
                            n = s(e);
                        return h = {
                            rowInitialHeight: r,
                            rowStickyHeight: n
                        }
                    }({
                        row: t
                    }),
                    n = e.rowInitialHeight,
                    a = e.rowStickyHeight;
                if (n !== a) {
                    var l = a;
                    l = o([r, r + Math.abs(n - a)], [n, a], i(r, r + Math.abs(n - a), scrollY)), t.style.setProperty("--shrink-height", "".concat(Math.round(l), "px"))
                }
            }))
        };

    function p(t) {
        return function(t) {
            if (Array.isArray(t)) return g(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return g(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return g(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function k(t) {
        return function(t) {
            if (Array.isArray(t)) return b(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return b(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var v = function(t) {
            var e = t.stickyContainer,
                r = k(e.querySelectorAll("[data-row]")).reduce((function(t, e) {
                    return t + s(e, !1)
                }), 0);
            return {
                stickyContainerHeight: r,
                stickyContainerHeightAbsolute: r + parseFloat(getComputedStyle(e).top)
            }
        },
        w = null;

    function S(t) {
        return function(t) {
            if (Array.isArray(t)) return A(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return A(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return A(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function A(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }

    function C(t) {
        return function(t) {
            if (Array.isArray(t)) return O(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return O(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function O(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var x = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yes";
            Array.from(t.querySelectorAll("[data-row][data-transparent-row]")).map((function(t) {
                t.dataset.transparentRow = e
            }))
        },
        H = null,
        I = {},
        j = null,
        P = null,
        q = !1,
        F = function() {
            h = null, y = null, H = null, j = null, P = null, Y = null, q = !1
        };
    if (r().on("blocksy:sticky:compute", (function() {
            setTimeout((function() {
                F(), E()
            }), 100)
        })), window.wp && wp.customize && wp.customize.selectiveRefresh) {
        var M = !1;
        wp.customize.selectiveRefresh.bind("partial-content-rendered", (function(t) {
            M || (M = !0, setTimeout((function() {
                F(), q = !0, E(), M = !1
            }), 500))
        }))
    }
    var T = function(t) {
            -1 === t.dataset.sticky.indexOf("shrink") && t.dataset.sticky.indexOf("auto-hide");
            var e = t.closest("header").getBoundingClientRect().top + scrollY;
            if (e > 0) {
                var r = document.elementFromPoint(0, 3);
                r && function(t) {
                    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
                    return e
                }(r).map((function(t) {
                    return getComputedStyle(t).position
                })).indexOf("fixed") > -1 && (e -= r.getBoundingClientRect().height)
            } - 1 === t.dataset.sticky.indexOf("shrink") && -1 === t.dataset.sticky.indexOf("auto-hide") && (e += 200);
            var n = t.parentNode,
                i = getComputedStyle(document.body),
                o = parseFloat(i.getPropertyValue("--header-sticky-offset") || 0);
            if (o += parseFloat(i.getPropertyValue("--theme-frame-size")) || 0, 1 === n.parentNode.children.length || n.parentNode.children[0].classList.contains("ct-sticky-container")) return e > 0 ? e - o : e;
            var a = Array.from(n.parentNode.children).reduce((function(t, e, r) {
                return t.indexOf(0) > -1 || !e.dataset.row ? [].concat(C(t), [0]) : [].concat(C(t), [e.classList.contains("ct-sticky-container") ? 0 : e.getBoundingClientRect().height])
            }), []).reduce((function(t, e) {
                return t + e
            }), e);
            return a > 0 ? a - o : a
        },
        Y = null,
        E = function() {
            if (Y !== scrollY) {
                var t = document.querySelector('[data-device="'.concat((0, n.getCurrentScreen)(), '"] [data-sticky]'));
                if (t) {
                    var e = (0, n.getCurrentScreen)({
                            withTablet: !0
                        }),
                        r = I[e],
                        i = !r || q;
                    r && !q || (I[e] = C(t.querySelectorAll("[data-row]")).reduce((function(t, e) {
                        return t + a(e)
                    }), 0), r = I[e]), i && (q = !1, t.parentNode.style.height = "".concat(r, "px"));
                    var o = H;
                    null === o && (o = T(t), H = o);
                    var c = j;
                    if (null === c) c = t.closest("[data-device]").getBoundingClientRect().height, j = c;
                    var u = P,
                        d = t.dataset.sticky.split(":").filter((function(t) {
                            return "yes" !== t && "no" !== t && "fixed" !== t
                        }));
                    u || (u = C(t.querySelectorAll("[data-row]")).reduce((function(t, e) {
                        return t + s(e)
                    }), 0), P = parseInt(u), l((function() {
                        return -1 === d.indexOf("auto-hide") ? u > C(t.querySelectorAll("[data-row]")).reduce((function(t, e) {
                            return t + a(e)
                        }), 0) ? "".concat(u, "px") : "".concat(C(t.querySelectorAll("[data-row]")).reduce((function(t, e) {
                            return t + s(e)
                        }), 0), "px") : "0px"
                    })));
                    var y = o > 0 && Math.abs(window.scrollY - o) < 5 || window.scrollY > o;
                    d.indexOf("shrink") > -1 && (y = o > 0 ? window.scrollY >= o : window.scrollY > 0), setTimeout((function() {
                        y && -1 === document.body.dataset.header.indexOf("shrink") && (document.body.dataset.header = "".concat(document.body.dataset.header, ":shrink")), !y && document.body.dataset.header.indexOf("shrink") > -1 && (document.body.dataset.header = document.body.dataset.header.replace(":shrink", ""))
                    }), 300);
                    var h = scrollY;
                    d.indexOf("shrink") > -1 && function(t) {
                        var e = t.containerInitialHeight,
                            r = t.stickyContainer,
                            n = (t.stickyContainerHeight, t.isSticky),
                            i = t.startPosition,
                            o = t.stickyComponents;
                        if (0 === i && 0 === window.scrollY && (r.dataset.sticky = ["fixed"].concat(p(o)).join(":")), n) {
                            if (o.indexOf("yes") > -1) return; - 1 === r.dataset.sticky.indexOf("yes") && (x(r, "no"), r.dataset.sticky = ["yes"].concat(p(o)).join(":")), f({
                                stickyContainer: r,
                                startPosition: i
                            }), m({
                                stickyContainer: r,
                                containerInitialHeight: e,
                                startPosition: i
                            })
                        } else Array.from(r.querySelectorAll("[data-row]")).map((function(t) {
                            return t.removeAttribute("style")
                        })), Array.from(r.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t) {
                            return t.removeAttribute("style")
                        })), x(r, "yes"), 0 === i && window.scrollY <= 0 ? r.dataset.sticky = ["fixed"].concat(p(o)).join(":") : r.dataset.sticky = o.join(":")
                    }({
                        stickyContainer: t,
                        stickyContainerHeight: u,
                        containerInitialHeight: r,
                        isSticky: y,
                        startPosition: o,
                        stickyComponents: d
                    }), d.indexOf("auto-hide") > -1 && function(t) {
                        var e = t.currentScrollY,
                            r = t.stickyContainer,
                            n = t.containerInitialHeight,
                            i = t.headerInitialHeight,
                            o = t.startPosition,
                            a = t.isSticky,
                            c = t.stickyComponents;
                        a && e - t.prevScrollY == 0 && l((function() {
                            return "0px"
                        })), a ? -1 === r.dataset.sticky.indexOf("yes") && e > 2 * i + o && (r.dataset.sticky = ["yes"].concat(k(c)).join(":"), f({
                            stickyContainer: r,
                            startPosition: o
                        }), m({
                            stickyContainer: r,
                            containerInitialHeight: n,
                            startPosition: o
                        }), x(r, "no"), document.body.removeAttribute("style")) : (Array.from(r.querySelectorAll("[data-row]")).map((function(t) {
                            return t.removeAttribute("style")
                        })), Array.from(r.querySelectorAll('[data-row*="middle"] .site-logo-container')).map((function(t) {
                            return t.removeAttribute("style")
                        })), r.dataset.sticky = k(c).join(":"), x(r, "yes"), l((function() {
                            return "0px"
                        })), w = null), null === w && (w = 1e3);
                        var s = w + t.prevScrollY - e,
                            u = 0;
                        if (e > 2 * i + o || r.dataset.sticky.indexOf("yes") > -1) {
                            if (e <= o) u = 0;
                            else if (e > t.prevScrollY) {
                                var d = v({
                                    stickyContainer: r
                                }).stickyContainerHeightAbsolute;
                                u = Math.abs(s) > d ? -d : s
                            } else u = s > 0 ? 0 : s;
                            r.style.transform = "translateY(".concat(u, "px)"), w = u
                        } else r.removeAttribute("style");
                        r.dataset.sticky.indexOf("yes") > -1 && (e <= o || e > t.prevScrollY || (f({
                            stickyContainer: r,
                            startPosition: o
                        }), m({
                            stickyContainer: r,
                            containerInitialHeight: n,
                            startPosition: o
                        }))), l((function() {
                            var t = v({
                                stickyContainer: r
                            }).stickyContainerHeight;
                            return "".concat(t - Math.abs(u), "px")
                        }))
                    }({
                        stickyContainer: t,
                        isSticky: y,
                        startPosition: o,
                        stickyComponents: d,
                        containerInitialHeight: r,
                        stickyContainerHeight: u,
                        headerInitialHeight: c,
                        currentScrollY: h,
                        prevScrollY: Y
                    }), (d.indexOf("slide") > -1 || d.indexOf("fade") > -1) && function(t) {
                        var e = t.stickyContainer,
                            r = t.isSticky,
                            n = t.startPosition,
                            i = t.stickyComponents;
                        r ? (-1 === e.dataset.sticky.indexOf("yes") && (e.dataset.sticky = ["yes-start"].concat(S(i)).join(":"), setTimeout((function() {
                            e.dataset.sticky = e.dataset.sticky.replace("yes-start", "yes-end"), setTimeout((function() {
                                e.dataset.sticky = e.dataset.sticky.replace("yes-end", "yes")
                            }), 200)
                        }), 1)), x(e, "no")) : -1 === e.dataset.sticky.indexOf("yes-hide") && e.dataset.sticky.indexOf("yes:") > -1 && (Math.abs(window.scrollY - n) > 10 ? (e.dataset.sticky = i.join(":"), setTimeout((function() {
                            Array.from(e.querySelectorAll("[data-row]")).map((function(t) {
                                return t.removeAttribute("style")
                            }))
                        }), 300), x(e, "yes")) : (e.dataset.sticky = ["yes-hide-start"].concat(S(i)).join(":"), requestAnimationFrame((function() {
                            e.dataset.sticky = e.dataset.sticky.replace("yes-hide-start", "yes-hide-end"), setTimeout((function() {
                                e.dataset.sticky = i.join(":"), setTimeout((function() {
                                    Array.from(e.querySelectorAll("[data-row]")).map((function(t) {
                                        return t.removeAttribute("style")
                                    }))
                                }), 300), x(e, "yes")
                            }), 200)
                        }))))
                    }({
                        stickyContainer: t,
                        isSticky: y,
                        startPosition: o,
                        stickyComponents: d
                    }), Y = h
                }
            }
        },
        B = function() {
            if (document.querySelector("header [data-sticky]")) {
                var t = window.width;
                window.addEventListener("resize", (function(e) {
                    window.width !== t && (t = window.width, F(), E(e), r().trigger("ct:header:update"))
                }), !1), window.addEventListener("orientationchange", (function(t) {
                    F(), E(t), r().trigger("ct:header:update")
                })), window.addEventListener("scroll", E, !1), window.addEventListener("load", E, !1), E()
            }
        };
    document.body.className.indexOf("e-preview") > -1 ? setTimeout((function() {
        B()
    }), 500) : B(), (0, n.registerDynamicChunk)("blocksy_sticky_header", {
        mount: function(t) {}
    })
}();