"use strict";
(self.blocksyJsonP = self.blocksyJsonP || []).push([
    [142], {
        7142: function(e, t, n) {
            n.r(t), n.d(t, {
                handleUpdate: function() {
                    return p
                },
                mountMenuLevel: function() {
                    return h
                }
            });
            var r = n(3846),
                i = n(9257);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(e, t || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == typeof t ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            const c = function() {
                    return "rtl" === document.querySelector("html").dir
                },
                a = function(e) {
                    return e.className.includes("animated-submenu") && (!e.parentNode.classList.contains("menu") || -1 === e.className.indexOf("ct-mega-menu") && e.parentNode.classList.contains("menu"))
                };
            const u = function(e, t) {
                    const n = [];
                    for (; e.parentNode !== t;) n.push(e.parentNode), e = e.parentNode;
                    return n
                },
                l = function(e) {
                    return c() ? "left" === e ? "right" : "right" === e ? "left" : e : e
                },
                d = function(e) {
                    let t = function(e, t) {
                        for (var n = []; e.parentNode;) e.parentNode && e.parentNode.matches && e.parentNode.matches(t) && n.push(e.parentNode), e = e.parentNode;
                        return n[n.length - 1]
                    }(e, "li.menu-item");
                    if (!t) return l("right");
                    const n = [...t.querySelectorAll(".sub-menu")].map((function(e) {
                        return {
                            el: e,
                            parents: u(e, t)
                        }
                    }));
                    if (0 === n.length) return l("right");
                    const r = n.sort((function(e, t) {
                            return e.parents.length - t.parents.length
                        })).reverse()[0],
                        i = [...r.parents.filter((function(e) {
                            return e.matches(".sub-menu")
                        })), r.el],
                        o = i.reduce((function(e, t, n) {
                            const r = getComputedStyle(t);
                            return e + t.getBoundingClientRect().width + (0 === n ? 0 : parseFloat(r.getPropertyValue("--dropdown-horizontal-offset") || "5px"))
                        }), 0),
                        s = t.getBoundingClientRect();
                    if (c()) {
                        return o < s.right ? "left" : "right"
                    }
                    let a = innerWidth - s.left > o;
                    return t.matches(".animated-submenu-inline") && (a = innerWidth - s.left - s.width > o), a ? "right" : "left"
                },
                f = function(e) {
                    const t = e.target.closest("li");
                    t.classList.add("ct-active");
                    let n = [...t.children].find((function(e) {
                        return e.matches(".ct-toggle-dropdown-desktop-ghost")
                    }));
                    n || (n = t.firstElementChild), n && (n.setAttribute("aria-expanded", "true"), "button" === n.tagName.toLowerCase() && n.setAttribute("aria-label", ct_localizations.collapse_submenu)), g({
                        target: t
                    })
                },
                m = function(e) {
                    if (!e.target) return;
                    const t = e.target.closest("li");
                    t.classList.remove("ct-active");
                    let n = [...t.children].find((function(e) {
                        return e.matches(".ct-toggle-dropdown-desktop-ghost")
                    }));
                    n || (n = t.firstElementChild), n && (n.setAttribute("aria-expanded", "false"), "button" === n.tagName.toLowerCase() && n.setAttribute("aria-label", ct_localizations.expand_submenu), e.focusOnIndicator && n.focus({
                        focusVisible: !0
                    })), setTimeout((function() {
                        [...t.querySelectorAll("[data-submenu]")].map((function(e) {
                            e.removeAttribute("data-submenu")
                        })), [...t.querySelectorAll(".ct-active")].map((function(e) {
                            e.classList.remove("ct-active")
                        }))
                    }), 30)
                },
                h = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(n), !0).forEach((function(t) {
                                s(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        checkForFirstLevel: !0
                    }, t), [...e.children].filter((function(e) {
                        return e.matches(".menu-item-has-children, .page_item_has_children")
                    })).map((function(e) {
                        if (e.classList.contains("ct-mega-menu-custom-width")) {
                            const t = e.querySelector(".sub-menu"),
                                n = e.getBoundingClientRect(),
                                r = t.getBoundingClientRect();
                            if (!(n.left + n.width / 2 > r.width / 2 && innerWidth - (n.left + n.width / 2) > r.width / 2)) {
                                const i = d(t);
                                let o = 0,
                                    s = 15;
                                "right" === i && (o = -1 * Math.round(n.left - (innerWidth - r.width) + s) + "px", n.left + n.width / 2 > r.width / 2 || (o = -1 * Math.round(n.left - s) + "px")), "left" === i && (o = -1 * Math.round(innerWidth - n.right - s) + "px"), e.dataset.submenu = i, t.style.setProperty("--theme-submenu-inline-offset", o)
                            }
                        }
                        a(e) && function(e, t) {
                            let {
                                startPosition: n = "end"
                            } = t;
                            const r = e.querySelector(".sub-menu"),
                                i = d(r),
                                {
                                    left: o,
                                    width: s,
                                    right: c
                                } = r.getBoundingClientRect();
                            let a = i,
                                u = e.getBoundingClientRect();
                            "left" === i && ("end" === n ? u.left : u.right) - s < 0 && (a = "right");
                            "right" === i && ("end" === n ? u.right : u.left) + s > innerWidth && (a = "left");
                            e.dataset.submenu = a, e.addEventListener("click", (function() {}))
                        }(e, t);
                        let n = [...e.children].find((function(e) {
                                return e.matches(".ct-toggle-dropdown-desktop-ghost")
                            })),
                            o = e.matches('[data-interaction*="click"] *');
                        if (e.hasFocusEventListener || (e.hasFocusEventListener = !0, e.addEventListener("keydown", (function(t) {
                                27 == t.keyCode && m({
                                    target: e.firstElementChild,
                                    focusOnIndicator: !0
                                })
                            })), e.addEventListener("focusout", (function(t) {
                                e.contains(t.relatedTarget) || m({
                                    target: e.firstElementChild
                                })
                            }))), o || (e.addEventListener("mouseenter", (function(n) {
                                (0, i.O)() ? f({
                                    target: e.firstElementChild
                                }): requestAnimationFrame((function() {
                                    f({
                                        target: e.firstElementChild
                                    })
                                })), t.checkForFirstLevel && !e.parentNode.classList.contains(".sub-menu") && [...e.parentNode.children].filter((function(t) {
                                    return t !== e
                                })).map((function(e) {
                                    m({
                                        target: e.firstElementChild
                                    })
                                })), n.target.closest("li").addEventListener("mouseleave", (function() {
                                    m({
                                        target: e.firstElementChild
                                    })
                                }), {
                                    once: !0
                                })
                            })), (0, r.b)() && e.addEventListener("click", (function(t) {
                                e.classList.contains("ct-active") || t.preventDefault()
                            }))), o) {
                            let t = e.matches('[data-interaction*="item"] *') ? e.firstElementChild : e.firstElementChild.querySelector(".ct-toggle-dropdown-desktop");
                            t.hasEventListener || (t.hasEventListener = !0, t.addEventListener("click", (function(t) {
                                t.preventDefault(), t.target.closest("li").classList.contains("ct-active") ? m(t) : (f(t), (0, i.O)() && t.target.closest("li").addEventListener("mouseleave", (function() {
                                    m({
                                        target: e.firstElementChild
                                    })
                                }), {
                                    once: !0
                                }), t.target.hasDocumentListener || (t.target.hasDocumentListener = !0, setTimeout((function() {
                                    document.addEventListener("click", (function(e) {
                                        t.target.closest("li").contains(e.target) || m(t)
                                    }))
                                }))))
                            })))
                        }
                        n && !n.hasEventListener && (n.hasEventListener = !0, n.addEventListener("click", (function(e) {
                            e.target.closest("li").classList.contains("ct-active") ? m(e) : f(e)
                        })))
                    }))
                },
                g = function(e) {
                    let {
                        target: t
                    } = e;
                    if (t.matches(".menu-item-has-children, .page_item_has_children") || (t = t.closest(".menu-item-has-children, .page_item_has_children")), t.parentNode.classList.contains("menu") && t.className.indexOf("ct-mega-menu") > -1 && -1 === t.className.indexOf("ct-mega-menu-custom-width") && window.wp && wp && wp.customize && wp.customize("active_theme")) {
                        t.querySelector(".sub-menu").style.left = Math.round(t.closest('[class*="ct-container"]').firstElementChild.getBoundingClientRect().x) - Math.round(t.closest("nav").getBoundingClientRect().x) + "px"
                    }
                    if (!a(t)) return;
                    const n = t.querySelector(".sub-menu");
                    h(n), n.closest('[data-interaction="hover"]') && n.parentNode.addEventListener("mouseleave", (function() {
                        [...n.children].filter((function(e) {
                            return a(e)
                        })).map((function(e) {
                            return e.removeAttribute("data-submenu")
                        }))
                    }), {
                        once: !0
                    })
                },
                p = function(e) {
                    e.parentNode || (e = document.querySelector(`[class="${e.className}"]`)), e && (e.querySelector(".menu-item-has-children") || e.querySelector(".page_item_has_children")) && e.closest('[data-interaction="hover"]') && (e.removeEventListener("mouseenter", g), e.addEventListener("mouseenter", g))
                }
        }
    }
]);