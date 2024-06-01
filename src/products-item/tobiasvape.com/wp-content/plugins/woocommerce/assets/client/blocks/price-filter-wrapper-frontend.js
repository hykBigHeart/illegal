(self.webpackChunkwebpackWcBlocksJsonp = self.webpackChunkwebpackWcBlocksJsonp || []).push([
    [3470], {
        9281: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => i
            });
            var n = r(9196);
            r(1753);
            const i = ({
                children: e
            }) => (0, n.createElement)("div", {
                className: "wc-block-filter-title-placeholder"
            }, e)
        },
        390: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(9196),
                i = r(5736),
                c = r(3849),
                o = r.n(c),
                a = r(711);
            r(2728);
            const s = ({
                className: e,
                /* translators: Reset button text for filters. */
                label: t = (0, i.__)("Reset", "woocommerce"),
                onClick: r,
                screenReaderLabel: c = (0, i.__)("Reset filter", "woocommerce")
            }) => (0, n.createElement)("button", {
                className: o()("wc-block-components-filter-reset-button", e),
                onClick: r
            }, (0, n.createElement)(a.Label, {
                label: t,
                screenReaderLabel: c
            }))
        },
        6977: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => s
            });
            var n = r(9196),
                i = r(5736),
                c = r(3849),
                o = r.n(c),
                a = r(711);
            r(6099);
            const s = ({
                className: e,
                isLoading: t,
                disabled: r,
                /* translators: Submit button text for filters. */
                label: c = (0, i.__)("Apply", "woocommerce"),
                onClick: s,
                screenReaderLabel: l = (0, i.__)("Apply filter", "woocommerce")
            }) => (0, n.createElement)("button", {
                type: "submit",
                className: o()("wp-block-button__link", "wc-block-filter-submit-button", "wc-block-components-filter-submit-button", {
                    "is-loading": t
                }, e),
                disabled: r,
                onClick: s
            }, (0, n.createElement)(a.Label, {
                label: c,
                screenReaderLabel: l
            }))
        },
        6621: (e, t, r) => {
            "use strict";
            r.d(t, {
                d: () => m
            });
            var n = r(9307),
                i = r(2600),
                c = r(7998),
                o = r(4167),
                a = r(9530),
                s = r(2785),
                l = r(1720),
                u = r(7218);
            const m = ({
                queryAttribute: e,
                queryPrices: t,
                queryStock: r,
                queryRating: m,
                queryState: d,
                isEditor: p = !1
            }) => {
                let f = (0, u.s)();
                f = `${f}-collection-data`;
                const [v] = (0, s.$p)(f), [b, g] = (0, s.kX)("calculate_attribute_counts", [], f), [y, _] = (0, s.kX)("calculate_price_range", null, f), [h, w] = (0, s.kX)("calculate_stock_status_counts", null, f), [k, E] = (0, s.kX)("calculate_rating_counts", null, f), x = (0, a.s)(e || {}), N = (0, a.s)(t), F = (0, a.s)(r), S = (0, a.s)(m);
                (0, n.useEffect)((() => {
                    "object" == typeof x && Object.keys(x).length && (b.find((e => (0, c.$n)(x, "taxonomy") && e.taxonomy === x.taxonomy)) || g([...b, x]))
                }), [x, b, g]), (0, n.useEffect)((() => {
                    y !== N && void 0 !== N && _(N)
                }), [N, _, y]), (0, n.useEffect)((() => {
                    h !== F && void 0 !== F && w(F)
                }), [F, w, h]), (0, n.useEffect)((() => {
                    k !== S && void 0 !== S && E(S)
                }), [S, E, k]);
                const [C, R] = (0, n.useState)(p), [A] = (0, i.Nr)(C, 200);
                C || R(!0);
                const U = (0, n.useMemo)((() => (e => {
                    const t = e;
                    return Array.isArray(e.calculate_attribute_counts) && (t.calculate_attribute_counts = (0, o.DY)(e.calculate_attribute_counts.map((({
                        taxonomy: e,
                        queryType: t
                    }) => ({
                        taxonomy: e,
                        query_type: t
                    })))).asc(["taxonomy", "query_type"])), t
                })(v)), [v]);
                return (0, l.K)({
                    namespace: "/wc/store/v1",
                    resourceName: "products/collection-data",
                    query: { ...d,
                        page: void 0,
                        per_page: void 0,
                        orderby: void 0,
                        order: void 0,
                        ...U
                    },
                    shouldSelect: A
                })
            }
        },
        1720: (e, t, r) => {
            "use strict";
            r.d(t, {
                K: () => l
            });
            var n = r(4801),
                i = r(9818),
                c = r(9307),
                o = r(9530),
                a = r(5280),
                s = r(7700);
            const l = e => {
                const {
                    namespace: t,
                    resourceName: r,
                    resourceValues: l = [],
                    query: u = {},
                    shouldSelect: m = !0
                } = e;
                if (!t || !r) throw new Error("The options object must have valid values for the namespace and the resource properties.");
                const d = (0, c.useRef)({
                        results: [],
                        isLoading: !0
                    }),
                    p = (0, o.s)(u),
                    f = (0, o.s)(l),
                    v = (0, a._)(),
                    b = (0, i.useSelect)((e => {
                        if (!m) return null;
                        const i = e(n.COLLECTIONS_STORE_KEY),
                            c = [t, r, p, f],
                            o = i.getCollectionError(...c);
                        if (o) {
                            if (!(0, s.V)(o)) throw new Error("TypeError: `error` object is not an instance of Error constructor");
                            v(o)
                        }
                        return {
                            results: i.getCollection(...c),
                            isLoading: !i.hasFinishedResolution("getCollection", c)
                        }
                    }), [t, r, f, p, m]);
                return null !== b && (d.current = b), d.current
            }
        },
        2785: (e, t, r) => {
            "use strict";
            r.d(t, {
                $p: () => a,
                kX: () => s
            });
            var n = r(4801),
                i = r(9818),
                c = r(9307),
                o = (r(9127), r(7218));
            const a = e => {
                    const t = (0, o.s)();
                    e = e || t;
                    const r = (0, i.useSelect)((t => t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e, void 0)), [e]),
                        {
                            setValueForQueryContext: a
                        } = (0, i.useDispatch)(n.QUERY_STATE_STORE_KEY);
                    return [r, (0, c.useCallback)((t => {
                        a(e, t)
                    }), [e, a])]
                },
                s = (e, t, r) => {
                    const a = (0, o.s)();
                    r = r || a;
                    const s = (0, i.useSelect)((i => i(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(r, e, t)), [r, e]),
                        {
                            setQueryValue: l
                        } = (0, i.useDispatch)(n.QUERY_STATE_STORE_KEY);
                    return [s, (0, c.useCallback)((t => {
                        l(r, e, t)
                    }), [r, e, l])]
                }
        },
        7218: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => c
            });
            var n = r(9307);
            const i = (0, n.createContext)("page"),
                c = () => (0, n.useContext)(i);
            i.Provider
        },
        8161: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => i
            });
            var n = r(9307);

            function i(e, t) {
                const r = (0, n.useRef)();
                return (0, n.useEffect)((() => {
                    r.current === e || t && !t(e, r.current) || (r.current = e)
                }), [e, t]), r.current
            }
        },
        9530: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => o
            });
            var n = r(9307),
                i = r(9127),
                c = r.n(i);

            function o(e) {
                const t = (0, n.useRef)(e);
                return c()(e, t.current) || (t.current = e), t.current
            }
        },
        947: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => l
            });
            var n = r(3849),
                i = r.n(n),
                c = r(7998),
                o = r(3243),
                a = r(3392),
                s = r(172);
            const l = e => {
                const t = (e => {
                        const t = (0, c.Kn)(e) ? e : {
                            style: {}
                        };
                        let r = t.style;
                        return (0, o.H)(r) && (r = JSON.parse(r) || {}), (0, c.Kn)(r) || (r = {}), { ...t,
                            style: r
                        }
                    })(e),
                    r = (0, s.vc)(t),
                    n = (0, s.l8)(t),
                    l = (0, s.su)(t),
                    u = (0, a.f)(t);
                return {
                    className: i()(u.className, r.className, n.className, l.className),
                    style: { ...u.style,
                        ...r.style,
                        ...n.style,
                        ...l.style
                    }
                }
            }
        },
        5280: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => i
            });
            var n = r(9307);
            const i = () => {
                const [, e] = (0, n.useState)();
                return (0, n.useCallback)((t => {
                    e((() => {
                        throw t
                    }))
                }), [])
            }
        },
        3392: (e, t, r) => {
            "use strict";
            r.d(t, {
                f: () => c
            });
            var n = r(7998),
                i = r(3243);
            const c = e => {
                const t = (0, n.Kn)(e.style.typography) ? e.style.typography : {},
                    r = (0, i.H)(t.fontFamily) ? t.fontFamily : "";
                return {
                    className: e.fontFamily ? `has-${e.fontFamily}-font-family` : r,
                    style: {
                        fontSize: e.fontSize ? `var(--wp--preset--font-size--${e.fontSize})` : t.fontSize,
                        fontStyle: t.fontStyle,
                        fontWeight: t.fontWeight,
                        letterSpacing: t.letterSpacing,
                        lineHeight: t.lineHeight,
                        textDecoration: t.textDecoration,
                        textTransform: t.textTransform
                    }
                }
            }
        },
        172: (e, t, r) => {
            "use strict";
            r.d(t, {
                l8: () => m,
                su: () => d,
                vc: () => u
            });
            var n = r(3849),
                i = r.n(n),
                c = r(7427),
                o = r(2289),
                a = r(7998);

            function s(e = {}) {
                const t = {};
                return (0, o.getCSSRules)(e, {
                    selector: ""
                }).forEach((e => {
                    t[e.key] = e.value
                })), t
            }

            function l(e, t) {
                return e && t ? `has-${(0,c.o)(t)}-${e}` : ""
            }

            function u(e) {
                var t, r, n, c, o, u, m;
                const {
                    backgroundColor: d,
                    textColor: p,
                    gradient: f,
                    style: v
                } = e, b = l("background-color", d), g = l("color", p), y = function(e) {
                    if (e) return `has-${e}-gradient-background`
                }(f), _ = y || (null == v || null === (t = v.color) || void 0 === t ? void 0 : t.gradient);
                return {
                    className: i()(g, y, {
                        [b]: !_ && !!b,
                        "has-text-color": p || (null == v || null === (r = v.color) || void 0 === r ? void 0 : r.text),
                        "has-background": d || (null == v || null === (n = v.color) || void 0 === n ? void 0 : n.background) || f || (null == v || null === (c = v.color) || void 0 === c ? void 0 : c.gradient),
                        "has-link-color": (0, a.Kn)(null == v || null === (o = v.elements) || void 0 === o ? void 0 : o.link) ? null == v || null === (u = v.elements) || void 0 === u || null === (m = u.link) || void 0 === m ? void 0 : m.color : void 0
                    }),
                    style: s({
                        color: (null == v ? void 0 : v.color) || {}
                    })
                }
            }

            function m(e) {
                var t;
                const r = (null === (t = e.style) || void 0 === t ? void 0 : t.border) || {};
                return {
                    className: function(e) {
                        var t;
                        const {
                            borderColor: r,
                            style: n
                        } = e, c = r ? l("border-color", r) : "";
                        return i()({
                            "has-border-color": !!r || !(null == n || null === (t = n.border) || void 0 === t || !t.color),
                            [c]: !!c
                        })
                    }(e),
                    style: s({
                        border: r
                    })
                }
            }

            function d(e) {
                var t;
                return {
                    className: void 0,
                    style: s({
                        spacing: (null === (t = e.style) || void 0 === t ? void 0 : t.spacing) || {}
                    })
                }
            }
        },
        4169: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => P
            });
            var n = r(9196),
                i = r(3849),
                c = r.n(i),
                o = r(947),
                a = r(3243),
                s = r(8161),
                l = r(2785),
                u = r(6621),
                m = r(9307),
                d = r(5736),
                p = r(711),
                f = r(7998),
                v = r(2600);
            r(7507);
            const b = (e, t, r, n = 1, i = !1) => {
                let [c, o] = e;
                const a = e => Number.isFinite(e);
                return a(c) || (c = t || 0), a(o) || (o = r || n), a(t) && t > c && (c = t), a(r) && r <= c && (c = r - n), a(t) && t >= o && (o = t + n), a(r) && r < o && (o = r), !i && c >= o && (c = o - n), i && o <= c && (o = c + n), [c, o]
            };
            var g = r(6977);
            const y = ({
                    maxConstraint: e,
                    minorUnit: t
                }) => ({
                    floatValue: r
                }) => void 0 !== r && r <= e / 10 ** t && r > 0,
                _ = ({
                    minConstraint: e,
                    currentMaxValue: t,
                    minorUnit: r
                }) => ({
                    floatValue: n
                }) => void 0 !== n && n >= e / 10 ** r && n < t / 10 ** r;
            var h = r(390);
            const w = ({
                minPrice: e,
                maxPrice: t,
                minConstraint: r,
                maxConstraint: i,
                onChange: o,
                step: a,
                currency: s,
                showInputFields: l = !0,
                showFilterButton: u = !1,
                inlineInput: w = !0,
                isLoading: k = !1,
                isUpdating: E = !1,
                isEditor: x = !1,
                onSubmit: N = (() => {})
            }) => {
                const F = (0, m.useRef)(null),
                    S = (0, m.useRef)(null),
                    C = a || 10 ** s.minorUnit,
                    [R, A] = (0, m.useState)(e),
                    [U, L] = (0, m.useState)(t),
                    T = (0, m.useRef)(null),
                    [O, P] = (0, m.useState)(0);
                (0, m.useEffect)((() => {
                    A(e)
                }), [e]), (0, m.useEffect)((() => {
                    L(t)
                }), [t]), (0, m.useLayoutEffect)((() => {
                    var e;
                    w && T.current && P(null === (e = T.current) || void 0 === e ? void 0 : e.offsetWidth)
                }), [w, P]);
                const $ = (0, m.useMemo)((() => isFinite(r) && isFinite(i)), [r, i]),
                    j = (0, m.useMemo)((() => isFinite(e) && isFinite(t) && $ ? {
                        "--low": (e - r) / (i - r) * 100 + "%",
                        "--high": (t - r) / (i - r) * 100 + "%"
                    } : {
                        "--low": "0%",
                        "--high": "100%"
                    }), [e, t, r, i, $]),
                    D = (0, m.useCallback)((e => {
                        if (k || !$ || !F.current || !S.current) return;
                        const t = e.target.getBoundingClientRect(),
                            r = e.clientX - t.left,
                            n = F.current.offsetWidth,
                            c = +F.current.value,
                            o = S.current.offsetWidth,
                            a = +S.current.value,
                            s = n * (c / i),
                            l = o * (a / i);
                        Math.abs(r - s) > Math.abs(r - l) ? (F.current.style.zIndex = "20", S.current.style.zIndex = "21") : (F.current.style.zIndex = "21", S.current.style.zIndex = "20")
                    }), [k, i, $]),
                    I = (0, m.useCallback)((n => {
                        const c = n.target.classList.contains("wc-block-price-filter__range-input--min"),
                            a = +n.target.value,
                            s = c ? [Math.round(a / C) * C, t] : [e, Math.round(a / C) * C],
                            l = b(s, r, i, C, c);
                        o(l)
                    }), [o, e, t, r, i, C]),
                    M = (0, m.useCallback)((e => {
                        if (e.relatedTarget && e.relatedTarget.classList && e.relatedTarget.classList.contains("wc-block-price-filter__amount")) return;
                        const t = e.target.classList.contains("wc-block-price-filter__amount--min");
                        if (R >= U) {
                            const e = b([0, U], null, null, C, t);
                            return o([parseInt(e[0], 10), parseInt(e[1], 10)])
                        }
                        const r = b([R, U], null, null, C, t);
                        o(r)
                    }), [o, C, R, U]),
                    B = (0, v.y1)(N, 600),
                    q = c()("wc-block-price-filter", "wc-block-components-price-slider", l && "wc-block-price-filter--has-input-fields", l && "wc-block-components-price-slider--has-input-fields", u && "wc-block-price-filter--has-filter-button", u && "wc-block-components-price-slider--has-filter-button", !$ && "is-disabled", (w || O <= 300) && "wc-block-components-price-slider--is-input-inline"),
                    K = (0, f.Kn)(F.current) ? F.current.ownerDocument.activeElement : void 0,
                    Q = K && K === F.current ? C : 1,
                    V = K && K === S.current ? C : 1,
                    W = String(R / 10 ** s.minorUnit),
                    Y = String(U / 10 ** s.minorUnit),
                    z = w && O > 300,
                    Z = (0, n.createElement)("div", {
                        className: c()("wc-block-price-filter__range-input-wrapper", "wc-block-components-price-slider__range-input-wrapper", {
                            "is-loading": k && E
                        }),
                        onMouseMove: D,
                        onFocus: D
                    }, $ && (0, n.createElement)("div", {
                        "aria-hidden": l
                    }, (0, n.createElement)("div", {
                        className: "wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",
                        style: j
                    }), (0, n.createElement)("input", {
                        type: "range",
                        className: "wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min",
                        "aria-label": (0, d.__)("Filter products by minimum price", "woocommerce"),
                        "aria-valuetext": W,
                        value: Number.isFinite(e) ? e : r,
                        onChange: I,
                        step: Q,
                        min: r,
                        max: i,
                        ref: F,
                        disabled: k && !$,
                        tabIndex: l ? -1 : 0
                    }), (0, n.createElement)("input", {
                        type: "range",
                        className: "wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max",
                        "aria-label": (0, d.__)("Filter products by maximum price", "woocommerce"),
                        "aria-valuetext": Y,
                        value: Number.isFinite(t) ? t : i,
                        onChange: I,
                        step: V,
                        min: r,
                        max: i,
                        ref: S,
                        disabled: k,
                        tabIndex: l ? -1 : 0
                    }))),
                    H = e => `wc-block-price-filter__amount wc-block-price-filter__amount--${e} wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--${e}`,
                    X = {
                        currency: s,
                        decimalScale: 0
                    },
                    J = { ...X,
                        displayType: "input",
                        allowNegative: !1,
                        disabled: k || !$,
                        onBlur: M
                    };
                return (0, n.createElement)("div", {
                    className: q,
                    ref: T
                }, (!z || !l) && Z, l && (0, n.createElement)("div", {
                    className: "wc-block-price-filter__controls wc-block-components-price-slider__controls"
                }, E ? (0, n.createElement)("div", {
                    className: "input-loading"
                }) : (0, n.createElement)(p.FormattedMonetaryAmount, { ...J,
                    className: H("min"),
                    "aria-label": (0, d.__)("Filter products by minimum price", "woocommerce"),
                    isAllowed: _({
                        minConstraint: r,
                        minorUnit: s.minorUnit,
                        currentMaxValue: U
                    }),
                    onValueChange: e => {
                        e !== R && A(e)
                    },
                    value: R
                }), z && Z, E ? (0, n.createElement)("div", {
                    className: "input-loading"
                }) : (0, n.createElement)(p.FormattedMonetaryAmount, { ...J,
                    className: H("max"),
                    "aria-label": (0, d.__)("Filter products by maximum price", "woocommerce"),
                    isAllowed: y({
                        maxConstraint: i,
                        minorUnit: s.minorUnit
                    }),
                    onValueChange: e => {
                        e !== U && L(e)
                    },
                    value: U
                })), !l && !E && Number.isFinite(e) && Number.isFinite(t) && (0, n.createElement)("div", {
                    className: "wc-block-price-filter__range-text wc-block-components-price-slider__range-text"
                }, (0, n.createElement)(p.FormattedMonetaryAmount, { ...X,
                    value: e
                }), (0, n.createElement)(p.FormattedMonetaryAmount, { ...X,
                    value: t
                })), (0, n.createElement)("div", {
                    className: "wc-block-components-price-slider__actions"
                }, (x || !E && (e !== r || t !== i)) && (0, n.createElement)(h.Z, {
                    onClick: () => {
                        o([r, i]), B()
                    },
                    screenReaderLabel: (0, d.__)("Reset price filter", "woocommerce")
                }), u && (0, n.createElement)(g.Z, {
                    className: "wc-block-price-filter__button wc-block-components-price-slider__button",
                    isLoading: E,
                    disabled: k || !$,
                    onClick: N,
                    screenReaderLabel: (0, d.__)("Apply price filter", "woocommerce")
                })))
            };
            var k = r(9281),
                E = r(4293),
                x = r(4617),
                N = r(6483),
                F = r(4534),
                S = r(6508);
            const C = "ROUND_UP",
                R = "ROUND_DOWN",
                A = (e, t, r) => {
                    const n = 10 * 10 ** t;
                    let i = null;
                    const c = parseFloat(e);
                    isNaN(c) || (r === C ? i = Math.ceil(c / n) * n : r === R && (i = Math.floor(c / n) * n));
                    const o = (0, s.D)(i, Number.isFinite);
                    return Number.isFinite(i) ? i : o
                };
            r(9432);
            var U = r(9389);

            function L(e, t) {
                return Number(e) * 10 ** t
            }
            const T = ({
                    attributes: e,
                    isEditor: t = !1
                }) => {
                    const r = (0, U.Ah)(),
                        i = (0, x.getSettingWithCoercion)("hasFilterableProducts", !1, S.j),
                        c = (0, x.getSettingWithCoercion)("isRenderingPhpTemplate", !1, S.j),
                        [o, d] = (0, m.useState)(!1),
                        p = (0, F.re)("min_price"),
                        b = (0, F.re)("max_price"),
                        [g] = (0, l.$p)(),
                        {
                            results: y,
                            isLoading: _
                        } = (0, u.d)({
                            queryPrices: !0,
                            queryState: g,
                            isEditor: t
                        }),
                        h = (0, E.getCurrencyFromPriceResponse)((0, f.$n)(y, "price_range") ? y.price_range : void 0),
                        [T, O] = (0, l.kX)("min_price"),
                        [P, $] = (0, l.kX)("max_price"),
                        [j, D] = (0, m.useState)(L(p, h.minorUnit) || null),
                        [I, M] = (0, m.useState)(L(b, h.minorUnit) || null),
                        {
                            minConstraint: B,
                            maxConstraint: q
                        } = (({
                            minPrice: e,
                            maxPrice: t,
                            minorUnit: r
                        }) => ({
                            minConstraint: A(e || "", r, R),
                            maxConstraint: A(t || "", r, C)
                        }))({
                            minPrice: (0, f.$n)(y, "price_range") && (0, f.$n)(y.price_range, "min_price") && (0, a.H)(y.price_range.min_price) ? y.price_range.min_price : void 0,
                            maxPrice: (0, f.$n)(y, "price_range") && (0, f.$n)(y.price_range, "max_price") && (0, a.H)(y.price_range.max_price) ? y.price_range.max_price : void 0,
                            minorUnit: h.minorUnit
                        });
                    (0, m.useEffect)((() => {
                        o || (O(L(p, h.minorUnit)), $(L(b, h.minorUnit)), d(!0))
                    }), [h.minorUnit, o, b, p, $, O]);
                    const [K, Q] = (0, m.useState)(_), V = (0, m.useCallback)(((e, t) => {
                        const r = t >= Number(q) ? void 0 : t,
                            n = e <= Number(B) ? void 0 : e;
                        if (window) {
                            const e = function(e, t) {
                                const r = {};
                                for (const [e, n] of Object.entries(t)) n ? r[e] = n.toString() : delete r[e];
                                const n = (0, N.removeQueryArgs)(e, ...Object.keys(t));
                                return (0, N.addQueryArgs)(n, r)
                            }(window.location.href, {
                                min_price: n / 10 ** h.minorUnit,
                                max_price: r / 10 ** h.minorUnit
                            });
                            window.location.href !== e && (0, F.X7)(e)
                        }
                        O(n), $(r)
                    }), [B, q, O, $, h.minorUnit]), W = (0, v.y1)(V, 500), Y = (0, m.useCallback)((t => {
                        Q(!0), t[0] !== j && D(t[0]), t[1] !== I && M(t[1]), c && o && !e.showFilterButton && W(t[0], t[1])
                    }), [j, I, D, M, c, o, W, e.showFilterButton]);
                    (0, m.useEffect)((() => {
                        e.showFilterButton || c || W(j, I)
                    }), [j, I, e.showFilterButton, W, c]);
                    const z = (0, s.D)(T),
                        Z = (0, s.D)(P),
                        H = (0, s.D)(B),
                        X = (0, s.D)(q);
                    if ((0, m.useEffect)((() => {
                            (!Number.isFinite(j) || T !== z && T !== j || B !== H && B !== j) && D(Number.isFinite(T) ? T : B), (!Number.isFinite(I) || P !== Z && P !== I || q !== X && q !== I) && M(Number.isFinite(P) ? P : q)
                        }), [j, I, T, P, B, q, H, X, z, Z]), !i) return r(!1), null;
                    if (!_ && (null === B || null === q || B === q)) return r(!1), null;
                    const J = `h${e.headingLevel}`;
                    r(!0), !_ && K && Q(!1);
                    const G = (0, n.createElement)(J, {
                            className: "wc-block-price-filter__title"
                        }, e.heading),
                        ee = _ && K ? (0, n.createElement)(k.Z, null, G) : G;
                    return (0, n.createElement)(n.Fragment, null, !t && e.heading && ee, (0, n.createElement)("div", {
                        className: "wc-block-price-slider"
                    }, (0, n.createElement)(w, {
                        minConstraint: B,
                        maxConstraint: q,
                        minPrice: j,
                        maxPrice: I,
                        currency: h,
                        showInputFields: e.showInputFields,
                        inlineInput: e.inlineInput,
                        showFilterButton: e.showFilterButton,
                        onChange: Y,
                        onSubmit: () => V(j, I),
                        isLoading: _,
                        isUpdating: K,
                        isEditor: t
                    })))
                },
                O = JSON.parse('{"Y4":{"D8":{"Z":3}}}'),
                P = e => {
                    const t = (0, o.F)(e),
                        r = (i = e, {
                            heading: (0, a.H)(null == i ? void 0 : i.heading) ? i.heading : "",
                            headingLevel: (0, a.H)(null == i ? void 0 : i.headingLevel) && parseInt(i.headingLevel, 10) || O.Y4.D8.Z,
                            showFilterButton: "true" === (null == i ? void 0 : i.showFilterButton),
                            showInputFields: "false" !== (null == i ? void 0 : i.showInputFields),
                            inlineInput: "true" === (null == i ? void 0 : i.inlineInput)
                        });
                    var i;
                    return (0, n.createElement)("div", {
                        className: c()((0, a.H)(e.className) ? e.className : "", t.className),
                        style: t.style
                    }, (0, n.createElement)(T, {
                        isEditor: !1,
                        attributes: r
                    }))
                }
        },
        6508: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => n
            });
            const n = e => "boolean" == typeof e
        },
        7700: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => n
            });
            const n = e => e instanceof Error
        },
        2893: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => n
            });
            const n = e => null === e
        },
        7998: (e, t, r) => {
            "use strict";
            r.d(t, {
                $n: () => c,
                Kn: () => i
            });
            var n = r(2893);
            const i = e => !(0, n.F)(e) && e instanceof Object && e.constructor === Object;

            function c(e, t) {
                return i(e) && t in e
            }
        },
        3243: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => n
            });
            const n = e => "string" == typeof e
        },
        4534: (e, t, r) => {
            "use strict";
            r.d(t, {
                H9: () => m,
                X7: () => u,
                re: () => l,
                w8: () => s,
                zv: () => a
            });
            var n = r(6483),
                i = r(4617),
                c = r(6508);
            const o = (0, i.getSettingWithCoercion)("isRenderingPhpTemplate", !1, c.j),
                a = "query_type_",
                s = "filter_";

            function l(e) {
                return window ? (0, n.getQueryArg)(window.location.href, e) : null
            }

            function u(e) {
                if (o) {
                    const t = new URL(e);
                    t.pathname = t.pathname.replace(/\/page\/[0-9]+/i, ""), t.searchParams.delete("paged"), t.searchParams.forEach(((e, r) => {
                        r.match(/^query(?:-[0-9]+)?-page$/) && t.searchParams.delete(r)
                    })), window.location.href = t.href
                } else window.history.replaceState({}, "", e)
            }
            const m = e => {
                const t = (0, n.getQueryArgs)(e);
                return (0, n.addQueryArgs)(e, t)
            }
        },
        3849: (e, t) => {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var c = typeof r;
                            if ("string" === c || "number" === c) e.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var o = i.apply(null, r);
                                    o && e.push(o)
                                }
                            } else if ("object" === c)
                                if (r.toString === Object.prototype.toString)
                                    for (var a in r) n.call(r, a) && r[a] && e.push(a);
                                else e.push(r.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (r = function() {
                    return i
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        112: (e, t, r) => {
            "use strict";
            r.d(t, {
                $: () => c
            });
            var n = r(3112),
                i = r(7090);

            function c(e, t) {
                return void 0 === t && (t = {}), (0, i.B)(e, (0, n.pi)({
                    delimiter: "."
                }, t))
            }
        },
        1753: () => {},
        2728: () => {},
        6099: () => {},
        7507: () => {},
        9432: () => {},
        3569: (e, t, r) => {
            "use strict";

            function n(e) {
                return e.toLowerCase()
            }
            r.d(t, {
                U: () => n
            })
        },
        7090: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => o
            });
            var n = r(3569),
                i = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
                c = /[^A-Z0-9]+/gi;

            function o(e, t) {
                void 0 === t && (t = {});
                for (var r = t.splitRegexp, o = void 0 === r ? i : r, s = t.stripRegexp, l = void 0 === s ? c : s, u = t.transform, m = void 0 === u ? n.U : u, d = t.delimiter, p = void 0 === d ? " " : d, f = a(a(e, o, "$1\0$2"), l, "\0"), v = 0, b = f.length;
                    "\0" === f.charAt(v);) v++;
                for (;
                    "\0" === f.charAt(b - 1);) b--;
                return f.slice(v, b).split("\0").map(m).join(p)
            }

            function a(e, t, r) {
                return t instanceof RegExp ? e.replace(t, r) : t.reduce((function(e, t) {
                    return e.replace(t, r)
                }), e)
            }
        },
        7427: (e, t, r) => {
            "use strict";
            r.d(t, {
                o: () => c
            });
            var n = r(3112),
                i = r(112);

            function c(e, t) {
                return void 0 === t && (t = {}), (0, i.$)(e, (0, n.pi)({
                    delimiter: "-"
                }, t))
            }
        },
        2600: (e, t, r) => {
            "use strict";
            r.d(t, {
                Nr: () => a,
                y1: () => i
            });
            var n = r(9196);

            function i(e, t, r) {
                var i = this,
                    c = (0, n.useRef)(null),
                    o = (0, n.useRef)(0),
                    a = (0, n.useRef)(null),
                    s = (0, n.useRef)([]),
                    l = (0, n.useRef)(),
                    u = (0, n.useRef)(),
                    m = (0, n.useRef)(e),
                    d = (0, n.useRef)(!0);
                (0, n.useEffect)((function() {
                    m.current = e
                }), [e]);
                var p = !t && 0 !== t && "undefined" != typeof window;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                t = +t || 0;
                var f = !!(r = r || {}).leading,
                    v = !("trailing" in r) || !!r.trailing,
                    b = "maxWait" in r,
                    g = b ? Math.max(+r.maxWait || 0, t) : null;
                (0, n.useEffect)((function() {
                    return d.current = !0,
                        function() {
                            d.current = !1
                        }
                }), []);
                var y = (0, n.useMemo)((function() {
                    var e = function(e) {
                            var t = s.current,
                                r = l.current;
                            return s.current = l.current = null, o.current = e, u.current = m.current.apply(r, t)
                        },
                        r = function(e, t) {
                            p && cancelAnimationFrame(a.current), a.current = p ? requestAnimationFrame(e) : setTimeout(e, t)
                        },
                        n = function(e) {
                            if (!d.current) return !1;
                            var r = e - c.current;
                            return !c.current || r >= t || r < 0 || b && e - o.current >= g
                        },
                        y = function(t) {
                            return a.current = null, v && s.current ? e(t) : (s.current = l.current = null, u.current)
                        },
                        _ = function e() {
                            var i = Date.now();
                            if (n(i)) return y(i);
                            if (d.current) {
                                var a = t - (i - c.current),
                                    s = b ? Math.min(a, g - (i - o.current)) : a;
                                r(e, s)
                            }
                        },
                        h = function() {
                            var m = Date.now(),
                                p = n(m);
                            if (s.current = [].slice.call(arguments), l.current = i, c.current = m, p) {
                                if (!a.current && d.current) return o.current = c.current, r(_, t), f ? e(c.current) : u.current;
                                if (b) return r(_, t), e(c.current)
                            }
                            return a.current || r(_, t), u.current
                        };
                    return h.cancel = function() {
                        a.current && (p ? cancelAnimationFrame(a.current) : clearTimeout(a.current)), o.current = 0, s.current = c.current = l.current = a.current = null
                    }, h.isPending = function() {
                        return !!a.current
                    }, h.flush = function() {
                        return a.current ? y(Date.now()) : u.current
                    }, h
                }), [f, b, t, g, v, p]);
                return y
            }

            function c(e, t) {
                return e === t
            }

            function o(e) {
                return "function" == typeof e ? function() {
                    return e
                } : e
            }

            function a(e, t, r) {
                var a, s, l = r && r.equalityFn || c,
                    u = (a = (0, n.useState)(o(e)), s = a[1], [a[0], (0, n.useCallback)((function(e) {
                        return s(o(e))
                    }), [])]),
                    m = u[0],
                    d = u[1],
                    p = i((0, n.useCallback)((function(e) {
                        return d(e)
                    }), [d]), t, r),
                    f = (0, n.useRef)(e);
                return l(f.current, e) || (p(e), f.current = e), [m, p]
            }
        },
        4167: (e, t, r) => {
            "use strict";
            r.d(t, {
                DY: () => u
            });
            var n = function(e) {
                    return function(t, r, n) {
                        return e(t, r, n) * n
                    }
                },
                i = function(e, t) {
                    if (e) throw Error("Invalid sort config: " + t)
                },
                c = function(e) {
                    var t = e || {},
                        r = t.asc,
                        c = t.desc,
                        o = r ? 1 : -1,
                        a = r || c;
                    return i(!a, "Expected `asc` or `desc` property"), i(r && c, "Ambiguous object with `asc` and `desc` config properties"), {
                        order: o,
                        sortBy: a,
                        comparer: e.comparer && n(e.comparer)
                    }
                };

            function o(e, t, r) {
                if (void 0 === e || !0 === e) return function(e, n) {
                    return t(e, n, r)
                };
                if ("string" == typeof e) return i(e.includes("."), "String syntax not allowed for nested properties."),
                    function(n, i) {
                        return t(n[e], i[e], r)
                    };
                if ("function" == typeof e) return function(n, i) {
                    return t(e(n), e(i), r)
                };
                if (Array.isArray(e)) {
                    var n = function(e) {
                        return function t(r, n, i, o, a, s, l) {
                            var u, m;
                            if ("string" == typeof r) u = s[r], m = l[r];
                            else {
                                if ("function" != typeof r) {
                                    var d = c(r);
                                    return t(d.sortBy, n, i, d.order, d.comparer || e, s, l)
                                }
                                u = r(s), m = r(l)
                            }
                            var p = a(u, m, o);
                            return (0 === p || null == u && null == m) && n.length > i ? t(n[i], n, i + 1, o, a, s, l) : p
                        }
                    }(t);
                    return function(i, c) {
                        return n(e[0], e, 1, r, t, i, c)
                    }
                }
                var a = c(e);
                return o(a.sortBy, a.comparer || t, a.order)
            }
            var a = function(e, t, r, n) {
                return Array.isArray(t) ? (Array.isArray(r) && r.length < 2 && (r = r[0]), t.sort(o(r, n, e))) : t
            };

            function s(e) {
                var t = n(e.comparer);
                return function(r) {
                    var n = Array.isArray(r) && !e.inPlaceSorting ? r.slice() : r;
                    return {
                        asc: function(e) {
                            return a(1, n, e, t)
                        },
                        desc: function(e) {
                            return a(-1, n, e, t)
                        },
                        by: function(e) {
                            return a(1, n, e, t)
                        }
                    }
                }
            }
            var l = function(e, t, r) {
                    return null == e ? r : null == t ? -r : typeof e != typeof t ? typeof e < typeof t ? -1 : 1 : e < t ? -1 : e > t ? 1 : 0
                },
                u = s({
                    comparer: l
                });
            s({
                comparer: l,
                inPlaceSorting: !0
            })
        },
        3112: (e, t, r) => {
            "use strict";
            r.d(t, {
                pi: () => n
            });
            var n = function() {
                return n = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, n.apply(this, arguments)
            };
            Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
        }
    }
]);