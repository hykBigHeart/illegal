"use strict";
(self.blocksyJsonP = self.blocksyJsonP || []).push([
    [95], {
        1095: function(e, t, n) {
            n.r(t), n.d(t, {
                bootModalLoaderFlow: function() {
                    return s
                }
            });
            var r = n(4254);

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

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function a(e, t, n) {
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
            const c = '<span class="ct-ajax-loader" data-type="boxed"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" opacity="0.2" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="2"/><path d="m12,2c5.52,0,10,4.48,10,10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="0.5s" from="0 12 12" to="360 12 12" repeatCount="indefinite" /></path></svg></span>',
                l = function(e) {
                    const t = (new Date).getTime();
                    document.querySelector(".ct-panel.active") || function(e) {
                        return new Promise((function(t) {
                            const n = e.loadedChunks[e.chunk.id],
                                r = document.createElement("div");
                            if (n && n.maybeGetPanelContent) {
                                const o = n.maybeGetPanelContent(e.el, {
                                    event: e.event
                                });
                                if (o) return void o.then((function(e) {
                                    r.appendChild(e), t(r.firstElementChild)
                                }))
                            }
                            r.innerHTML = c, r.dataset.behaviour = "modal", r.classList.add("ct-panel"), r.classList.add("loading"), e.chunk.has_loader.class && r.classList.add(e.chunk.has_loader.class), e.chunk.has_loader.id ? r.id = e.chunk.has_loader.id : r.id = (e.el.hash || "").replace("#", ""), t(r)
                        }))
                    }(e).then((function(n) {
                        document.querySelector(".ct-drawer-canvas").appendChild(n), (0, r.a)(e.event, {
                            openStrategy: "fast",
                            container: n
                        }), e.loadChunkWithPayload(e.chunk, {
                            event: e.event,
                            ajaxLoader: c,
                            panel: n,
                            completeAction: function() {
                                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                r = i({
                                    onCompleted: function() {}
                                }, r);
                                ! function() {
                                    const o = (new Date).getTime();
                                    o - t < e.ensureAtLeast ? setTimeout((function() {
                                        n.classList.remove("loading"), r.onCompleted()
                                    }), e.ensureAtLeast - (o - t)) : (n.classList.remove("loading"), r.onCompleted())
                                }()
                            }
                        }, e.el)
                    }))
                },
                s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e = i({
                        el: null,
                        event: null,
                        chunk: null,
                        loadedChunks: {},
                        ensureAtLeast: 0
                    }, e), l(e)
                }
        }
    }
]);