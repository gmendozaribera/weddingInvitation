"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [362],
  {
    89382: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return k;
        },
      });
      var r = n(67294);
      function i(e) {
        return (
          "[object Object]" === Object.prototype.toString.call(e) ||
          Array.isArray(e)
        );
      }
      function o(e, t) {
        let n = Object.keys(e),
          r = Object.keys(t);
        return (
          n.length === r.length &&
          JSON.stringify(Object.keys(e.breakpoints || {})) ===
            JSON.stringify(Object.keys(t.breakpoints || {})) &&
          n.every((n) => {
            let r = e[n],
              u = t[n];
            return "function" == typeof r
              ? `${r}` == `${u}`
              : i(r) && i(u)
                ? o(r, u)
                : r === u;
          })
        );
      }
      function u(e) {
        return e
          .concat()
          .sort((e, t) => (e.name > t.name ? 1 : -1))
          .map((e) => e.options);
      }
      function c(e) {
        return "number" == typeof e;
      }
      function l(e) {
        return "string" == typeof e;
      }
      function s(e) {
        return "boolean" == typeof e;
      }
      function a(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function f(e) {
        return Math.abs(e);
      }
      function d(e) {
        return Math.sign(e);
      }
      function p(e) {
        return y(e).map(Number);
      }
      function m(e) {
        return e[g(e)];
      }
      function g(e) {
        return Math.max(0, e.length - 1);
      }
      function h(e, t = 0) {
        return Array.from(Array(e), (e, n) => t + n);
      }
      function y(e) {
        return Object.keys(e);
      }
      function v(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent;
      }
      function b() {
        let e = [],
          t = {
            add: function (n, r, i, o = { passive: !0 }) {
              let u;
              return (
                "addEventListener" in n
                  ? (n.addEventListener(r, i, o),
                    (u = () => n.removeEventListener(r, i, o)))
                  : (n.addListener(i), (u = () => n.removeListener(i))),
                e.push(u),
                t
              );
            },
            clear: function () {
              e = e.filter((e) => e());
            },
          };
        return t;
      }
      function x(e = 0, t = 0) {
        let n = f(e - t);
        function r(n) {
          return n < e || n > t;
        }
        return {
          length: n,
          max: t,
          min: e,
          constrain: function (n) {
            return r(n) ? (n < e ? e : t) : n;
          },
          reachedAny: r,
          reachedMax: function (e) {
            return e > t;
          },
          reachedMin: function (t) {
            return t < e;
          },
          removeOffset: function (e) {
            return n ? e - n * Math.ceil((e - t) / n) : e;
          },
        };
      }
      function w(e) {
        let t = e;
        function n(e) {
          return c(e) ? e : e.get();
        }
        return {
          get: function () {
            return t;
          },
          set: function (e) {
            t = n(e);
          },
          add: function (e) {
            t += n(e);
          },
          subtract: function (e) {
            t -= n(e);
          },
        };
      }
      function E(e, t) {
        let n =
            "x" === e.scroll
              ? function (e) {
                  return `translate3d(${e}px,0px,0px)`;
                }
              : function (e) {
                  return `translate3d(0px,${e}px,0px)`;
                },
          r = t.style,
          i = null,
          o = !1;
        return {
          clear: function () {
            o ||
              ((r.transform = ""),
              t.getAttribute("style") || t.removeAttribute("style"));
          },
          to: function (t) {
            if (o) return;
            let u = Math.round(100 * e.direction(t)) / 100;
            u !== i && ((r.transform = n(u)), (i = u));
          },
          toggleActive: function (e) {
            o = !e;
          },
        };
      }
      let S = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0,
      };
      function O(e, t, n) {
        let r, i, o, u, k;
        let M = e.ownerDocument,
          D = M.defaultView,
          I = (function (e) {
            function t(e, t) {
              return (function e(t, n) {
                return [t, n].reduce(
                  (t, n) => (
                    y(n).forEach((r) => {
                      let i = t[r],
                        o = n[r],
                        u = a(i) && a(o);
                      t[r] = u ? e(i, o) : o;
                    }),
                    t
                  ),
                  {},
                );
              })(e, t || {});
            }
            return {
              mergeOptions: t,
              optionsAtMedia: function (n) {
                let r = n.breakpoints || {},
                  i = y(r)
                    .filter((t) => e.matchMedia(t).matches)
                    .map((e) => r[e])
                    .reduce((e, n) => t(e, n), {});
                return t(n, i);
              },
              optionsMediaQueries: function (t) {
                return t
                  .map((e) => y(e.breakpoints || {}))
                  .reduce((e, t) => e.concat(t), [])
                  .map(e.matchMedia);
              },
            };
          })(D),
          L =
            ((k = []),
            {
              init: function (e, t) {
                return (
                  (k = t.filter(
                    ({ options: e }) => !1 !== I.optionsAtMedia(e).active,
                  )).forEach((t) => t.init(e, I)),
                  t.reduce((e, t) => Object.assign(e, { [t.name]: t }), {})
                );
              },
              destroy: function () {
                k = k.filter((e) => e.destroy());
              },
            }),
          A = b(),
          P = (function () {
            let e,
              t = {},
              n = {
                init: function (t) {
                  e = t;
                },
                emit: function (r) {
                  return ((t[r] || []).forEach((t) => t(e, r)), n);
                },
                off: function (e, r) {
                  return ((t[e] = (t[e] || []).filter((e) => e !== r)), n);
                },
                on: function (e, r) {
                  return ((t[e] = (t[e] || []).concat([r])), n);
                },
                clear: function () {
                  t = {};
                },
              };
            return n;
          })(),
          { mergeOptions: j, optionsAtMedia: F, optionsMediaQueries: C } = I,
          { on: R, off: T, emit: N } = P,
          z = !1,
          H = j(S, O.globalOptions),
          V = j(H),
          $ = [];
        function B(t, n) {
          !z &&
            ((V = F((H = j(H, t)))),
            ($ = n || $),
            (function () {
              let { container: t, slides: n } = V;
              o = (l(t) ? e.querySelector(t) : t) || e.children[0];
              let r = l(n) ? o.querySelectorAll(n) : n;
              u = [].slice.call(r || o.children);
            })(),
            (r = (function t(n) {
              let r = (function (e, t, n, r, i, o, u) {
                let a, S;
                let {
                    align: O,
                    axis: k,
                    direction: M,
                    startIndex: D,
                    loop: I,
                    duration: L,
                    dragFree: A,
                    dragThreshold: P,
                    inViewThreshold: j,
                    slidesToScroll: F,
                    skipSnaps: C,
                    containScroll: R,
                    watchResize: T,
                    watchSlides: N,
                    watchDrag: z,
                    watchFocus: H,
                  } = o,
                  V = {
                    measure: function (e) {
                      let {
                        offsetTop: t,
                        offsetLeft: n,
                        offsetWidth: r,
                        offsetHeight: i,
                      } = e;
                      return {
                        top: t,
                        right: n + r,
                        bottom: t + i,
                        left: n,
                        width: r,
                        height: i,
                      };
                    },
                  },
                  $ = V.measure(t),
                  B = n.map(V.measure),
                  U = (function (e, t) {
                    let n = "rtl" === t,
                      r = "y" === e,
                      i = !r && n ? -1 : 1;
                    return {
                      scroll: r ? "y" : "x",
                      cross: r ? "x" : "y",
                      startEdge: r ? "top" : n ? "right" : "left",
                      endEdge: r ? "bottom" : n ? "left" : "right",
                      measureSize: function (e) {
                        let { height: t, width: n } = e;
                        return r ? t : n;
                      },
                      direction: function (e) {
                        return e * i;
                      },
                    };
                  })(k, M),
                  q = U.measureSize($),
                  _ = {
                    measure: function (e) {
                      return (e / 100) * q;
                    },
                  },
                  J = (function (e, t) {
                    let n = {
                      start: function () {
                        return 0;
                      },
                      center: function (e) {
                        return (t - e) / 2;
                      },
                      end: function (e) {
                        return t - e;
                      },
                    };
                    return {
                      measure: function (r, i) {
                        return l(e) ? n[e](r) : e(t, r, i);
                      },
                    };
                  })(O, q),
                  X = !I && !!R,
                  {
                    slideSizes: Q,
                    slideSizesWithGaps: W,
                    startGap: Y,
                    endGap: Z,
                  } = (function (e, t, n, r, i, o) {
                    let { measureSize: u, startEdge: c, endEdge: l } = e,
                      s = n[0] && i,
                      a = (function () {
                        if (!s) return 0;
                        let e = n[0];
                        return f(t[c] - e[c]);
                      })(),
                      d = s
                        ? parseFloat(
                            o
                              .getComputedStyle(m(r))
                              .getPropertyValue(`margin-${l}`),
                          )
                        : 0,
                      p = n.map(u),
                      h = n
                        .map((e, t, n) => {
                          let r = t === g(n);
                          return t
                            ? r
                              ? p[t] + d
                              : n[t + 1][c] - e[c]
                            : p[t] + a;
                        })
                        .map(f);
                    return {
                      slideSizes: p,
                      slideSizesWithGaps: h,
                      startGap: a,
                      endGap: d,
                    };
                  })(U, $, B, n, I || !!R, i),
                  G = (function (e, t, n, r, i, o, u, l, s) {
                    let { startEdge: a, endEdge: d, direction: h } = e,
                      y = c(n);
                    return {
                      groupSlides: function (e) {
                        return y
                          ? p(e)
                              .filter((e) => e % n == 0)
                              .map((t) => e.slice(t, t + n))
                          : e.length
                            ? p(e)
                                .reduce((n, c, s) => {
                                  let p = m(n) || 0,
                                    y = c === g(e),
                                    v = i[a] - o[p][a],
                                    b = i[a] - o[c][d],
                                    x = r || 0 !== p ? 0 : h(u),
                                    w = f(b - (!r && y ? h(l) : 0) - (v + x));
                                  return (
                                    s && w > t + 2 && n.push(c),
                                    y && n.push(e.length),
                                    n
                                  );
                                }, [])
                                .map((t, n, r) => {
                                  let i = Math.max(r[n - 1] || 0);
                                  return e.slice(i, t);
                                })
                            : [];
                      },
                    };
                  })(U, q, F, I, $, B, Y, Z, 0),
                  { snaps: K, snapsAligned: ee } = (function (e, t, n, r, i) {
                    let { startEdge: o, endEdge: u } = e,
                      { groupSlides: c } = i,
                      l = c(r)
                        .map((e) => m(e)[u] - e[0][o])
                        .map(f)
                        .map(t.measure),
                      s = r.map((e) => n[o] - e[o]).map((e) => -f(e)),
                      a = c(s)
                        .map((e) => e[0])
                        .map((e, t) => e + l[t]);
                    return { snaps: s, snapsAligned: a };
                  })(U, J, $, B, G),
                  et = -m(K) + m(W),
                  { snapsContained: en, scrollContainLimit: er } = (function (
                    e,
                    t,
                    n,
                    r,
                    i,
                  ) {
                    let o = x(-t + e, 0),
                      u = n
                        .map((e, t) => {
                          let { min: r, max: i } = o,
                            u = o.constrain(e),
                            c = t === g(n);
                          return t
                            ? c || 1 >= f(r - u)
                              ? r
                              : 1 >= f(i - u)
                                ? i
                                : u
                            : i;
                        })
                        .map((e) => parseFloat(e.toFixed(3))),
                      c = (function () {
                        let e = u[0],
                          t = m(u);
                        return x(u.lastIndexOf(e), u.indexOf(t) + 1);
                      })();
                    return {
                      snapsContained: (function () {
                        if (t <= e + 2) return [o.max];
                        if ("keepSnaps" === r) return u;
                        let { min: n, max: i } = c;
                        return u.slice(n, i);
                      })(),
                      scrollContainLimit: c,
                    };
                  })(q, et, ee, R, 0),
                  ei = X ? en : ee,
                  { limit: eo } = (function (e, t, n) {
                    let r = t[0];
                    return { limit: x(n ? r - e : m(t), r) };
                  })(et, ei, I),
                  eu = (function e(t, n, r) {
                    let { constrain: i } = x(0, t),
                      o = t + 1,
                      u = c(n);
                    function c(e) {
                      return r ? f((o + e) % o) : i(e);
                    }
                    function l() {
                      return e(t, u, r);
                    }
                    let s = {
                      get: function () {
                        return u;
                      },
                      set: function (e) {
                        return ((u = c(e)), s);
                      },
                      add: function (e) {
                        return l().set(u + e);
                      },
                      clone: l,
                    };
                    return s;
                  })(g(ei), D, I),
                  ec = eu.clone(),
                  el = p(n),
                  es = ({
                    dragHandler: e,
                    scrollBody: t,
                    scrollBounds: n,
                    options: { loop: r },
                  }) => {
                    (r || n.constrain(e.pointerDown()), t.seek());
                  },
                  ea = (
                    {
                      scrollBody: e,
                      translate: t,
                      location: n,
                      offsetLocation: r,
                      previousLocation: i,
                      scrollLooper: o,
                      slideLooper: u,
                      dragHandler: c,
                      animation: l,
                      eventHandler: s,
                      scrollBounds: a,
                      options: { loop: f },
                    },
                    d,
                  ) => {
                    let p = e.settled(),
                      m = !a.shouldConstrain(),
                      g = f ? p : p && m,
                      h = g && !c.pointerDown();
                    h && l.stop();
                    let y = n.get() * d + i.get() * (1 - d);
                    (r.set(y),
                      f && (o.loop(e.direction()), u.loop()),
                      t.to(r.get()),
                      h && s.emit("settle"),
                      g || s.emit("scroll"));
                  },
                  ef = (function (e, t, n, r) {
                    let i = b(),
                      o = 1e3 / 60,
                      u = null,
                      c = 0,
                      l = 0;
                    function s(e) {
                      if (!l) return;
                      u || ((u = e), n(), n());
                      let i = e - u;
                      for (u = e, c += i; c >= o; ) (n(), (c -= o));
                      (r(c / o), l && (l = t.requestAnimationFrame(s)));
                    }
                    function a() {
                      (t.cancelAnimationFrame(l), (u = null), (c = 0), (l = 0));
                    }
                    return {
                      init: function () {
                        i.add(e, "visibilitychange", () => {
                          e.hidden && ((u = null), (c = 0));
                        });
                      },
                      destroy: function () {
                        (a(), i.clear());
                      },
                      start: function () {
                        l || (l = t.requestAnimationFrame(s));
                      },
                      stop: a,
                      update: n,
                      render: r,
                    };
                  })(
                    r,
                    i,
                    () => es(ek),
                    (e) => ea(ek, e),
                  ),
                  ed = ei[eu.get()],
                  ep = w(ed),
                  em = w(ed),
                  eg = w(ed),
                  eh = w(ed),
                  ey = (function (e, t, n, r, i, o) {
                    let u = 0,
                      c = 0,
                      l = i,
                      s = 0.68,
                      a = e.get(),
                      p = 0;
                    function m(e) {
                      return ((l = e), h);
                    }
                    function g(e) {
                      return ((s = e), h);
                    }
                    let h = {
                      direction: function () {
                        return c;
                      },
                      duration: function () {
                        return l;
                      },
                      velocity: function () {
                        return u;
                      },
                      seek: function () {
                        let t = r.get() - e.get(),
                          i = 0;
                        return (
                          l
                            ? (n.set(e),
                              (u += t / l),
                              (u *= s),
                              (a += u),
                              e.add(u),
                              (i = a - p))
                            : ((u = 0), n.set(r), e.set(r), (i = t)),
                          (c = d(i)),
                          (p = a),
                          h
                        );
                      },
                      settled: function () {
                        return 0.001 > f(r.get() - t.get());
                      },
                      useBaseFriction: function () {
                        return g(0.68);
                      },
                      useBaseDuration: function () {
                        return m(i);
                      },
                      useFriction: g,
                      useDuration: m,
                    };
                    return h;
                  })(ep, eg, em, eh, L, 0),
                  ev = (function (e, t, n, r, i) {
                    let { reachedAny: o, removeOffset: u, constrain: c } = r;
                    function l(e) {
                      return e.concat().sort((e, t) => f(e) - f(t))[0];
                    }
                    function s(t, r) {
                      let i = [t, t + n, t - n];
                      if (!e) return t;
                      if (!r) return l(i);
                      let o = i.filter((e) => d(e) === r);
                      return o.length ? l(o) : m(i) - n;
                    }
                    return {
                      byDistance: function (n, r) {
                        let l = i.get() + n,
                          { index: a, distance: d } = (function (n) {
                            let r = e ? u(n) : c(n),
                              { index: i } = t
                                .map((e, t) => ({
                                  diff: s(e - r, 0),
                                  index: t,
                                }))
                                .sort((e, t) => f(e.diff) - f(t.diff))[0];
                            return { index: i, distance: r };
                          })(l),
                          p = !e && o(l);
                        if (!r || p) return { index: a, distance: n };
                        let m = n + s(t[a] - d, 0);
                        return { index: a, distance: m };
                      },
                      byIndex: function (e, n) {
                        let r = s(t[e] - i.get(), n);
                        return { index: e, distance: r };
                      },
                      shortcut: s,
                    };
                  })(I, ei, et, eo, eh),
                  eb = (function (e, t, n, r, i, o, u) {
                    function c(i) {
                      let c = i.distance,
                        l = i.index !== t.get();
                      (o.add(c),
                        c &&
                          (r.duration()
                            ? e.start()
                            : (e.update(), e.render(1), e.update())),
                        l &&
                          (n.set(t.get()), t.set(i.index), u.emit("select")));
                    }
                    return {
                      distance: function (e, t) {
                        c(i.byDistance(e, t));
                      },
                      index: function (e, n) {
                        let r = t.clone().set(e);
                        c(i.byIndex(r.get(), n));
                      },
                    };
                  })(ef, eu, ec, ey, ev, eh, u),
                  ex = (function (e) {
                    let { max: t, length: n } = e;
                    return {
                      get: function (e) {
                        return n ? -((e - t) / n) : 0;
                      },
                    };
                  })(eo),
                  ew = b(),
                  eE = (function (e, t, n, r) {
                    let i;
                    let o = {},
                      u = null,
                      c = null,
                      l = !1;
                    return {
                      init: function () {
                        ((i = new IntersectionObserver(
                          (e) => {
                            l ||
                              (e.forEach((e) => {
                                o[t.indexOf(e.target)] = e;
                              }),
                              (u = null),
                              (c = null),
                              n.emit("slidesInView"));
                          },
                          { root: e.parentElement, threshold: r },
                        )),
                          t.forEach((e) => i.observe(e)));
                      },
                      destroy: function () {
                        (i && i.disconnect(), (l = !0));
                      },
                      get: function (e = !0) {
                        if (e && u) return u;
                        if (!e && c) return c;
                        let t = y(o).reduce((t, n) => {
                          let r = parseInt(n),
                            { isIntersecting: i } = o[r];
                          return (((e && i) || (!e && !i)) && t.push(r), t);
                        }, []);
                        return (e && (u = t), e || (c = t), t);
                      },
                    };
                  })(t, n, u, j),
                  { slideRegistry: eS } = (function (e, t, n, r, i, o) {
                    let { groupSlides: u } = i,
                      { min: c, max: l } = r;
                    return {
                      slideRegistry: (function () {
                        let r = u(o);
                        return 1 === n.length
                          ? [o]
                          : e && "keepSnaps" !== t
                            ? r.slice(c, l).map((e, t, n) => {
                                let r = t === g(n);
                                return t
                                  ? r
                                    ? h(g(o) - m(n)[0] + 1, m(n)[0])
                                    : e
                                  : h(m(n[0]) + 1);
                              })
                            : r;
                      })(),
                    };
                  })(X, R, ei, er, G, el),
                  eO = (function (e, t, n, r, i, o, u, l) {
                    let a = { passive: !0, capture: !0 },
                      f = 0;
                    function d(e) {
                      "Tab" === e.code && (f = new Date().getTime());
                    }
                    return {
                      init: function (p) {
                        l &&
                          (o.add(document, "keydown", d, !1),
                          t.forEach((t, d) => {
                            o.add(
                              t,
                              "focus",
                              (t) => {
                                (s(l) || l(p, t)) &&
                                  (function (t) {
                                    if (new Date().getTime() - f > 10) return;
                                    (u.emit("slideFocusStart"),
                                      (e.scrollLeft = 0));
                                    let o = n.findIndex((e) => e.includes(t));
                                    c(o) &&
                                      (i.useDuration(0),
                                      r.index(o, 0),
                                      u.emit("slideFocus"));
                                  })(d);
                              },
                              a,
                            );
                          }));
                      },
                    };
                  })(e, n, eS, eb, ey, ew, u, H),
                  ek = {
                    ownerDocument: r,
                    ownerWindow: i,
                    eventHandler: u,
                    containerRect: $,
                    slideRects: B,
                    animation: ef,
                    axis: U,
                    dragHandler: (function (
                      e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      u,
                      c,
                      l,
                      a,
                      p,
                      m,
                      g,
                      h,
                      y,
                      w,
                      E,
                      S,
                      O,
                    ) {
                      let { cross: k, direction: M } = e,
                        D = ["INPUT", "SELECT", "TEXTAREA"],
                        I = { passive: !1 },
                        L = b(),
                        A = b(),
                        P = x(50, 225).constrain(h.measure(20)),
                        j = { mouse: 300, touch: 400 },
                        F = { mouse: 500, touch: 600 },
                        C = y ? 43 : 25,
                        R = !1,
                        T = 0,
                        N = 0,
                        z = !1,
                        H = !1,
                        V = !1,
                        $ = !1;
                      function B(e) {
                        if (!v(e, r) && e.touches.length >= 2) return U(e);
                        let t = o.readPoint(e),
                          n = o.readPoint(e, k),
                          u = f(t - T),
                          l = f(n - N);
                        if (!H && !$ && (!e.cancelable || !(H = u > l)))
                          return U(e);
                        let s = o.pointerMove(e);
                        (u > w && (V = !0),
                          a.useFriction(0.3).useDuration(0.75),
                          c.start(),
                          i.add(M(s)),
                          e.preventDefault());
                      }
                      function U(e) {
                        let t = p.byDistance(0, !1).index !== m.get(),
                          n =
                            o.pointerUp(e) * (y ? F : j)[$ ? "mouse" : "touch"],
                          r = (function (e, t) {
                            let n = m.add(-1 * d(e)),
                              r = p.byDistance(e, !y).distance;
                            return y || f(e) < P
                              ? r
                              : E && t
                                ? 0.5 * r
                                : p.byIndex(n.get(), 0).distance;
                          })(M(n), t),
                          i = (function (e, t) {
                            var n, r;
                            if (0 === e || 0 === t || f(e) <= f(t)) return 0;
                            let i = ((n = f(e)), (r = f(t)), f(n - r));
                            return f(i / e);
                          })(n, r);
                        ((H = !1),
                          (z = !1),
                          A.clear(),
                          a.useDuration(C - 10 * i).useFriction(0.68 + i / 50),
                          l.distance(r, !y),
                          ($ = !1),
                          g.emit("pointerUp"));
                      }
                      function q(e) {
                        V &&
                          (e.stopPropagation(), e.preventDefault(), (V = !1));
                      }
                      return {
                        init: function (e) {
                          O &&
                            L.add(t, "dragstart", (e) => e.preventDefault(), I)
                              .add(t, "touchmove", () => void 0, I)
                              .add(t, "touchend", () => void 0)
                              .add(t, "touchstart", c)
                              .add(t, "mousedown", c)
                              .add(t, "touchcancel", U)
                              .add(t, "contextmenu", U)
                              .add(t, "click", q, !0);
                          function c(c) {
                            (s(O) || O(e, c)) &&
                              (function (e) {
                                let c = v(e, r);
                                (($ = c),
                                  (V = y && c && !e.buttons && R),
                                  (R = f(i.get() - u.get()) >= 2),
                                  (c && 0 !== e.button) ||
                                    (function (e) {
                                      let t = e.nodeName || "";
                                      return D.includes(t);
                                    })(e.target) ||
                                    ((z = !0),
                                    o.pointerDown(e),
                                    a.useFriction(0).useDuration(0),
                                    i.set(u),
                                    (function () {
                                      let e = $ ? n : t;
                                      A.add(e, "touchmove", B, I)
                                        .add(e, "touchend", U)
                                        .add(e, "mousemove", B, I)
                                        .add(e, "mouseup", U);
                                    })(),
                                    (T = o.readPoint(e)),
                                    (N = o.readPoint(e, k)),
                                    g.emit("pointerDown")));
                              })(c);
                          }
                        },
                        destroy: function () {
                          (L.clear(), A.clear());
                        },
                        pointerDown: function () {
                          return z;
                        },
                      };
                    })(
                      U,
                      e,
                      r,
                      i,
                      eh,
                      (function (e, t) {
                        let n, r;
                        function i(e) {
                          return e.timeStamp;
                        }
                        function o(n, r) {
                          let i = r || e.scroll,
                            o = `client${"x" === i ? "X" : "Y"}`;
                          return (v(n, t) ? n : n.touches[0])[o];
                        }
                        return {
                          pointerDown: function (e) {
                            return ((n = e), (r = e), o(e));
                          },
                          pointerMove: function (e) {
                            let t = o(e) - o(r),
                              u = i(e) - i(n) > 170;
                            return ((r = e), u && (n = e), t);
                          },
                          pointerUp: function (e) {
                            if (!n || !r) return 0;
                            let t = o(r) - o(n),
                              u = i(e) - i(n),
                              c = i(e) - i(r) > 170,
                              l = t / u;
                            return u && !c && f(l) > 0.1 ? l : 0;
                          },
                          readPoint: o,
                        };
                      })(U, i),
                      ep,
                      ef,
                      eb,
                      ey,
                      ev,
                      eu,
                      u,
                      _,
                      A,
                      P,
                      C,
                      0,
                      z,
                    ),
                    eventStore: ew,
                    percentOfView: _,
                    index: eu,
                    indexPrevious: ec,
                    limit: eo,
                    location: ep,
                    offsetLocation: eg,
                    previousLocation: em,
                    options: o,
                    resizeHandler: (function (e, t, n, r, i, o, u) {
                      let c, l;
                      let a = [e].concat(r),
                        d = [],
                        p = !1;
                      function m(e) {
                        return i.measureSize(u.measure(e));
                      }
                      return {
                        init: function (i) {
                          o &&
                            ((l = m(e)),
                            (d = r.map(m)),
                            (c = new ResizeObserver((n) => {
                              (s(o) || o(i, n)) &&
                                (function (n) {
                                  for (let o of n) {
                                    if (p) return;
                                    let n = o.target === e,
                                      u = r.indexOf(o.target),
                                      c = n ? l : d[u];
                                    if (f(m(n ? e : r[u]) - c) >= 0.5) {
                                      (i.reInit(), t.emit("resize"));
                                      break;
                                    }
                                  }
                                })(n);
                            })),
                            n.requestAnimationFrame(() => {
                              a.forEach((e) => c.observe(e));
                            }));
                        },
                        destroy: function () {
                          ((p = !0), c && c.disconnect());
                        },
                      };
                    })(t, u, i, n, U, T, V),
                    scrollBody: ey,
                    scrollBounds: (function (e, t, n, r, i) {
                      let o = i.measure(10),
                        u = i.measure(50),
                        c = x(0.1, 0.99),
                        l = !1;
                      function s() {
                        return !!(
                          !l &&
                          e.reachedAny(n.get()) &&
                          e.reachedAny(t.get())
                        );
                      }
                      return {
                        shouldConstrain: s,
                        constrain: function (i) {
                          if (!s()) return;
                          let l = e.reachedMin(t.get()) ? "min" : "max",
                            a = f(e[l] - t.get()),
                            d = n.get() - t.get(),
                            p = c.constrain(a / u);
                          (n.subtract(d * p),
                            !i &&
                              f(d) < o &&
                              (n.set(e.constrain(n.get())),
                              r.useDuration(25).useBaseFriction()));
                        },
                        toggleActive: function (e) {
                          l = !e;
                        },
                      };
                    })(eo, eg, eh, ey, _),
                    scrollLooper: (function (e, t, n, r) {
                      let { reachedMin: i, reachedMax: o } = x(
                        t.min + 0.1,
                        t.max + 0.1,
                      );
                      return {
                        loop: function (t) {
                          if (!(1 === t ? o(n.get()) : -1 === t && i(n.get())))
                            return;
                          let u = -1 * t * e;
                          r.forEach((e) => e.add(u));
                        },
                      };
                    })(et, eo, eg, [ep, eg, em, eh]),
                    scrollProgress: ex,
                    scrollSnapList: ei.map(ex.get),
                    scrollSnaps: ei,
                    scrollTarget: ev,
                    scrollTo: eb,
                    slideLooper: (function (e, t, n, r, i, o, u, c, l) {
                      let s = p(i),
                        a = m(d(p(i).reverse(), u[0]), n, !1).concat(
                          m(d(s, t - u[0] - 1), -n, !0),
                        );
                      function f(e, t) {
                        return e.reduce((e, t) => e - i[t], t);
                      }
                      function d(e, t) {
                        return e.reduce(
                          (e, n) => (f(e, t) > 0 ? e.concat([n]) : e),
                          [],
                        );
                      }
                      function m(i, u, s) {
                        let a = o.map((e, n) => ({
                          start: e - r[n] + 0.5 + u,
                          end: e + t - 0.5 + u,
                        }));
                        return i.map((t) => {
                          let r = s ? 0 : -n,
                            i = s ? n : 0,
                            o = a[t][s ? "end" : "start"];
                          return {
                            index: t,
                            loopPoint: o,
                            slideLocation: w(-1),
                            translate: E(e, l[t]),
                            target: () => (c.get() > o ? r : i),
                          };
                        });
                      }
                      return {
                        canLoop: function () {
                          return a.every(
                            ({ index: e }) =>
                              0.1 >=
                              f(
                                s.filter((t) => t !== e),
                                t,
                              ),
                          );
                        },
                        clear: function () {
                          a.forEach((e) => e.translate.clear());
                        },
                        loop: function () {
                          a.forEach((e) => {
                            let {
                                target: t,
                                translate: n,
                                slideLocation: r,
                              } = e,
                              i = t();
                            i !== r.get() && (n.to(i), r.set(i));
                          });
                        },
                        loopPoints: a,
                      };
                    })(U, q, et, Q, W, K, ei, eg, n),
                    slideFocus: eO,
                    slidesHandler:
                      ((S = !1),
                      {
                        init: function (e) {
                          N &&
                            (a = new MutationObserver((t) => {
                              !S &&
                                (s(N) || N(e, t)) &&
                                (function (t) {
                                  for (let n of t)
                                    if ("childList" === n.type) {
                                      (e.reInit(), u.emit("slidesChanged"));
                                      break;
                                    }
                                })(t);
                            })).observe(t, { childList: !0 });
                        },
                        destroy: function () {
                          (a && a.disconnect(), (S = !0));
                        },
                      }),
                    slidesInView: eE,
                    slideIndexes: el,
                    slideRegistry: eS,
                    slidesToScroll: G,
                    target: eh,
                    translate: E(U, t),
                  };
                return ek;
              })(e, o, u, M, D, n, P);
              return n.loop && !r.slideLooper.canLoop()
                ? t(Object.assign({}, n, { loop: !1 }))
                : r;
            })(V)),
            C([H, ...$.map(({ options: e }) => e)]).forEach((e) =>
              A.add(e, "change", U),
            ),
            V.active &&
              (r.translate.to(r.location.get()),
              r.animation.init(),
              r.slidesInView.init(),
              r.slideFocus.init(X),
              r.eventHandler.init(X),
              r.resizeHandler.init(X),
              r.slidesHandler.init(X),
              r.options.loop && r.slideLooper.loop(),
              o.offsetParent && u.length && r.dragHandler.init(X),
              (i = L.init(X, $))));
        }
        function U(e, t) {
          let n = J();
          (q(), B(j({ startIndex: n }, e), t), P.emit("reInit"));
        }
        function q() {
          (r.dragHandler.destroy(),
            r.eventStore.clear(),
            r.translate.clear(),
            r.slideLooper.clear(),
            r.resizeHandler.destroy(),
            r.slidesHandler.destroy(),
            r.slidesInView.destroy(),
            r.animation.destroy(),
            L.destroy(),
            A.clear());
        }
        function _(e, t, n) {
          V.active &&
            !z &&
            (r.scrollBody
              .useBaseFriction()
              .useDuration(!0 === t ? 0 : V.duration),
            r.scrollTo.index(e, n || 0));
        }
        function J() {
          return r.index.get();
        }
        let X = {
          canScrollNext: function () {
            return r.index.add(1).get() !== J();
          },
          canScrollPrev: function () {
            return r.index.add(-1).get() !== J();
          },
          containerNode: function () {
            return o;
          },
          internalEngine: function () {
            return r;
          },
          destroy: function () {
            z || ((z = !0), A.clear(), q(), P.emit("destroy"), P.clear());
          },
          off: T,
          on: R,
          emit: N,
          plugins: function () {
            return i;
          },
          previousScrollSnap: function () {
            return r.indexPrevious.get();
          },
          reInit: U,
          rootNode: function () {
            return e;
          },
          scrollNext: function (e) {
            _(r.index.add(1).get(), e, -1);
          },
          scrollPrev: function (e) {
            _(r.index.add(-1).get(), e, 1);
          },
          scrollProgress: function () {
            return r.scrollProgress.get(r.offsetLocation.get());
          },
          scrollSnapList: function () {
            return r.scrollSnapList;
          },
          scrollTo: _,
          selectedScrollSnap: J,
          slideNodes: function () {
            return u;
          },
          slidesInView: function () {
            return r.slidesInView.get();
          },
          slidesNotInView: function () {
            return r.slidesInView.get(!1);
          },
        };
        return (B(t, n), setTimeout(() => P.emit("init"), 0), X);
      }
      function k(e = {}, t = []) {
        let n = (0, r.useRef)(e),
          i = (0, r.useRef)(t),
          [c, l] = (0, r.useState)(),
          [s, a] = (0, r.useState)(),
          f = (0, r.useCallback)(() => {
            c && c.reInit(n.current, i.current);
          }, [c]);
        return (
          (0, r.useEffect)(() => {
            o(n.current, e) || ((n.current = e), f());
          }, [e, f]),
          (0, r.useEffect)(() => {
            !(function (e, t) {
              if (e.length !== t.length) return !1;
              let n = u(e),
                r = u(t);
              return n.every((e, t) => o(e, r[t]));
            })(i.current, t) && ((i.current = t), f());
          }, [t, f]),
          (0, r.useEffect)(() => {
            if (
              "undefined" != typeof window &&
              window.document &&
              window.document.createElement &&
              s
            ) {
              O.globalOptions = k.globalOptions;
              let e = O(s, n.current, i.current);
              return (l(e), () => e.destroy());
            }
            l(void 0);
          }, [s, l]),
          [a, c]
        );
      }
      ((O.globalOptions = void 0), (k.globalOptions = void 0));
    },
    13114: function (e, t, n) {
      n.d(t, {
        M: function () {
          return y;
        },
      });
      var r = n(85893),
        i = n(67294),
        o = n(25364),
        u = n(96681),
        c = n(240),
        l = n(16014);
      class s extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            ((e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function a({ children: e, isPresent: t }) {
        let n = (0, i.useId)(),
          o = (0, i.useRef)(null),
          u = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: c } = (0, i.useContext)(l._);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: r, top: i, left: l } = u.current;
            if (t || !o.current || !e || !r) return;
            o.current.dataset.motionPopId = n;
            let s = document.createElement("style");
            return (
              c && (s.nonce = c),
              document.head.appendChild(s),
              s.sheet &&
                s.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${l}px !important;
          }
        `),
              () => {
                document.head.removeChild(s);
              }
            );
          }, [t]),
          (0, r.jsx)(s, {
            isPresent: t,
            childRef: o,
            sizeRef: u,
            children: i.cloneElement(e, { ref: o }),
          })
        );
      }
      let f = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: o,
        custom: l,
        presenceAffectsLayout: s,
        mode: f,
      }) => {
        let p = (0, u.h)(d),
          m = (0, i.useId)(),
          g = (0, i.useCallback)(
            (e) => {
              for (let t of (p.set(e, !0), p.values())) if (!t) return;
              o && o();
            },
            [p, o],
          ),
          h = (0, i.useMemo)(
            () => ({
              id: m,
              initial: t,
              isPresent: n,
              custom: l,
              onExitComplete: g,
              register: (e) => (p.set(e, !1), () => p.delete(e)),
            }),
            s ? [Math.random(), g] : [n, g],
          );
        return (
          (0, i.useMemo)(() => {
            p.forEach((e, t) => p.set(t, !1));
          }, [n]),
          i.useEffect(() => {
            n || p.size || !o || o();
          }, [n]),
          "popLayout" === f &&
            (e = (0, r.jsx)(a, { isPresent: n, children: e })),
          (0, r.jsx)(c.O.Provider, { value: h, children: e })
        );
      };
      function d() {
        return new Map();
      }
      var p = n(15947);
      let m = (e) => e.key || "";
      function g(e) {
        let t = [];
        return (
          i.Children.forEach(e, (e) => {
            (0, i.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var h = n(58868);
      let y = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: c,
        presenceAffectsLayout: l = !0,
        mode: s = "sync",
        propagate: a = !1,
      }) => {
        let [d, y] = (0, p.oO)(a),
          v = (0, i.useMemo)(() => g(e), [e]),
          b = a && !d ? [] : v.map(m),
          x = (0, i.useRef)(!0),
          w = (0, i.useRef)(v),
          E = (0, u.h)(() => new Map()),
          [S, O] = (0, i.useState)(v),
          [k, M] = (0, i.useState)(v);
        (0, h.L)(() => {
          ((x.current = !1), (w.current = v));
          for (let e = 0; e < k.length; e++) {
            let t = m(k[e]);
            b.includes(t) ? E.delete(t) : !0 !== E.get(t) && E.set(t, !1);
          }
        }, [k, b.length, b.join("-")]);
        let D = [];
        if (v !== S) {
          let e = [...v];
          for (let t = 0; t < k.length; t++) {
            let n = k[t],
              r = m(n);
            b.includes(r) || (e.splice(t, 0, n), D.push(n));
          }
          ("wait" === s && D.length && (e = D), M(g(e)), O(v));
          return;
        }
        let { forceRender: I } = (0, i.useContext)(o.p);
        return (0, r.jsx)(r.Fragment, {
          children: k.map((e) => {
            let i = m(e),
              o = (!a || !!d) && (v === k || b.includes(i));
            return (0, r.jsx)(
              f,
              {
                isPresent: o,
                initial: (!x.current || !!n) && void 0,
                custom: o ? void 0 : t,
                presenceAffectsLayout: l,
                mode: s,
                onExitComplete: o
                  ? void 0
                  : () => {
                      if (!E.has(i)) return;
                      E.set(i, !0);
                      let e = !0;
                      (E.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == I || I(),
                          M(w.current),
                          a && (null == y || y()),
                          c && c()));
                    },
                children: e,
              },
              i,
            );
          }),
        });
      };
    },
  },
]);
