"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1623],
  {
    16241: function (e, n, t) {
      t.d(n, {
        V: function () {
          return ev;
        },
      });
      var r,
        o,
        i,
        a,
        u,
        l,
        c,
        s,
        f = t(75766),
        d = t(72253),
        v = t(14932),
        p = t(47702),
        m = t(24043),
        h = t(248),
        g = t(67294),
        E = t.t(g, 2),
        y = t(5655),
        b = t(68354),
        _ = t(32784),
        w = t(55729),
        T = t(68916),
        C = t(99523),
        L = t(77563),
        S = t(40947),
        F = t(54751);
      function P(e, n) {
        var t = (0, g.useRef)([]),
          r = (0, b.z)(e);
        (0, g.useEffect)(
          function () {
            var e = (0, h._)(t.current),
              o = !0,
              i = !1,
              a = void 0;
            try {
              for (
                var u, l = n.entries()[Symbol.iterator]();
                !(o = (u = l.next()).done);
                o = !0
              ) {
                var c = (0, m._)(u.value, 2),
                  s = c[0],
                  f = c[1];
                if (t.current[s] !== f) {
                  var d = r(n, e);
                  return ((t.current = n), d);
                }
              }
            } catch (e) {
              ((i = !0), (a = e));
            } finally {
              try {
                o || null == l.return || l.return();
              } finally {
                if (i) throw a;
              }
            }
          },
          [r].concat((0, h._)(n)),
        );
      }
      var R = t(51228),
        M = [];
      !(function (e) {
        function n() {
          "loading" !== document.readyState &&
            (e(), document.removeEventListener("DOMContentLoaded", n));
        }
        "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", n), n());
      })(function () {
        function e(e) {
          e.target instanceof HTMLElement &&
            e.target !== document.body &&
            M[0] !== e.target &&
            (M.unshift(e.target),
            (M = M.filter(function (e) {
              return null != e && e.isConnected;
            })).splice(10));
        }
        (window.addEventListener("click", e, { capture: !0 }),
          window.addEventListener("mousedown", e, { capture: !0 }),
          window.addEventListener("focus", e, { capture: !0 }),
          document.body.addEventListener("click", e, { capture: !0 }),
          document.body.addEventListener("mousedown", e, { capture: !0 }),
          document.body.addEventListener("focus", e, { capture: !0 }));
      });
      var D = t(58766),
        O = t(16116),
        k = t(27378),
        A = t(83619);
      function x(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        var n = new Set(),
          t = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var i, a = e.current[Symbol.iterator]();
            !(t = (i = a.next()).done);
            t = !0
          ) {
            var u = i.value;
            u.current instanceof HTMLElement && n.add(u.current);
          }
        } catch (e) {
          ((r = !0), (o = e));
        } finally {
          try {
            t || null == a.return || a.return();
          } finally {
            if (r) throw o;
          }
        }
        return n;
      }
      var N =
          (((r = N || {})[(r.None = 1)] = "None"),
          (r[(r.InitialFocus = 2)] = "InitialFocus"),
          (r[(r.TabLock = 4)] = "TabLock"),
          (r[(r.FocusLock = 8)] = "FocusLock"),
          (r[(r.RestoreFocus = 16)] = "RestoreFocus"),
          (r[(r.All = 30)] = "All"),
          r),
        H = Object.assign(
          (0, A.yV)(function (e, n) {
            var t,
              r,
              o,
              i,
              a,
              u,
              l,
              c,
              s,
              d,
              v,
              h,
              E,
              N,
              H,
              z,
              V,
              I,
              B = (0, g.useRef)(null),
              Z = (0, S.T)(B, n),
              W = e.initialFocus,
              j = e.containers,
              U = e.features,
              G = void 0 === U ? 30 : U,
              q = (0, p._)(e, ["initialFocus", "containers", "features"]);
            (0, L.H)() || (G = 1);
            var J = (0, C.i)(B);
            ((t = { ownerDocument: J }),
              (r = !!(16 & G)),
              (o = t.ownerDocument),
              (i = (function () {
                var e =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0],
                  n = (0, g.useRef)(M.slice());
                return (
                  P(
                    function (e, t) {
                      var r = (0, m._)(e, 1)[0],
                        o = (0, m._)(t, 1)[0];
                      (!0 === o &&
                        !1 === r &&
                        (0, k.Y)(function () {
                          n.current.splice(0);
                        }),
                        !1 === o && !0 === r && (n.current = M.slice()));
                    },
                    [e, M, n],
                  ),
                  (0, b.z)(function () {
                    var e;
                    return null !=
                      (e = n.current.find(function (e) {
                        return null != e && e.isConnected;
                      }))
                      ? e
                      : null;
                  })
                );
              })(r)),
              P(
                function () {
                  r ||
                    ((null == o ? void 0 : o.activeElement) ===
                      (null == o ? void 0 : o.body) &&
                      (0, D.C5)(i()));
                },
                [r],
              ),
              (0, T.L)(function () {
                r && (0, D.C5)(i());
              }));
            var K =
              ((a = { ownerDocument: J, container: B, initialFocus: W }),
              (u = !!(2 & G)),
              (l = a.ownerDocument),
              (c = a.container),
              (s = a.initialFocus),
              (d = (0, g.useRef)(null)),
              (v = (0, w.t)()),
              P(
                function () {
                  if (u) {
                    var e = c.current;
                    e &&
                      (0, k.Y)(function () {
                        if (v.current) {
                          var n = null == l ? void 0 : l.activeElement;
                          if (null != s && s.current) {
                            if ((null == s ? void 0 : s.current) === n) {
                              d.current = n;
                              return;
                            }
                          } else if (e.contains(n)) {
                            d.current = n;
                            return;
                          }
                          (null != s && s.current
                            ? (0, D.C5)(s.current)
                            : (0, D.jA)(e, D.TO.First) === D.fE.Error &&
                              console.warn(
                                "There are no focusable elements inside the <FocusTrap />",
                              ),
                            (d.current = null == l ? void 0 : l.activeElement));
                        }
                      });
                  }
                },
                [u],
              ),
              d);
            ((h = {
              ownerDocument: J,
              container: B,
              containers: j,
              previousActiveElement: K,
            }),
              (E = !!(8 & G)),
              (N = h.ownerDocument),
              (H = h.container),
              (z = h.containers),
              (V = h.previousActiveElement),
              (I = (0, w.t)()),
              (0, _.O)(
                null == N ? void 0 : N.defaultView,
                "focus",
                function (e) {
                  if (E && I.current) {
                    var n = x(z);
                    H.current instanceof HTMLElement && n.add(H.current);
                    var t = V.current;
                    if (t) {
                      var r = e.target;
                      r && r instanceof HTMLElement
                        ? Y(n, r)
                          ? ((V.current = r), (0, D.C5)(r))
                          : (e.preventDefault(),
                            e.stopPropagation(),
                            (0, D.C5)(t))
                        : (0, D.C5)(V.current);
                    }
                  }
                },
                !0,
              ));
            var Q = (0, F.l)(),
              X = (0, b.z)(function (e) {
                var n,
                  t = B.current;
                t &&
                  (0, O.E)(
                    Q.current,
                    ((n = {}),
                    (0, f._)(n, F.N.Forwards, function () {
                      (0, D.jA)(t, D.TO.First, {
                        skipElements: [e.relatedTarget],
                      });
                    }),
                    (0, f._)(n, F.N.Backwards, function () {
                      (0, D.jA)(t, D.TO.Last, {
                        skipElements: [e.relatedTarget],
                      });
                    }),
                    n),
                  );
              }),
              $ = (0, y.G)(),
              ee = (0, g.useRef)(!1);
            return g.createElement(
              g.Fragment,
              null,
              !!(4 & G) &&
                g.createElement(R._, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: X,
                  features: R.A.Focusable,
                }),
              (0, A.sY)({
                ourProps: {
                  ref: Z,
                  onKeyDown: function (e) {
                    "Tab" == e.key &&
                      ((ee.current = !0),
                      $.requestAnimationFrame(function () {
                        ee.current = !1;
                      }));
                  },
                  onBlur: function (e) {
                    var n,
                      t = x(j);
                    B.current instanceof HTMLElement && t.add(B.current);
                    var r = e.relatedTarget;
                    r instanceof HTMLElement &&
                      "true" !== r.dataset.headlessuiFocusGuard &&
                      (Y(t, r) ||
                        (ee.current
                          ? (0, D.jA)(
                              B.current,
                              (0, O.E)(
                                Q.current,
                                ((n = {}),
                                (0, f._)(n, F.N.Forwards, function () {
                                  return D.TO.Next;
                                }),
                                (0, f._)(n, F.N.Backwards, function () {
                                  return D.TO.Previous;
                                }),
                                n),
                              ) | D.TO.WrapAround,
                              { relativeTo: e.target },
                            )
                          : e.target instanceof HTMLElement &&
                            (0, D.C5)(e.target)));
                  },
                },
                theirProps: q,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              !!(4 & G) &&
                g.createElement(R._, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: X,
                  features: R.A.Focusable,
                }),
            );
          }),
          { features: N },
        );
      function Y(e, n) {
        var t = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var i, a = e[Symbol.iterator]();
            !(t = (i = a.next()).done);
            t = !0
          )
            if (i.value.contains(n)) return !0;
        } catch (e) {
          ((r = !0), (o = e));
        } finally {
          try {
            t || null == a.return || a.return();
          } finally {
            if (r) throw o;
          }
        }
        return !1;
      }
      var z = t(23811);
      (g.useState,
        g.useEffect,
        g.useLayoutEffect,
        g.useDebugValue,
        void 0 !== window.document && window.document.createElement);
      var V = E.useSyncExternalStore,
        I = t(57110),
        B = t(47122),
        Z = t(66061),
        W =
          ((o = function () {
            return new Map();
          }),
          (i = {
            PUSH: function (e, n) {
              var t,
                r =
                  null != (t = this.get(e))
                    ? t
                    : { doc: e, count: 0, d: (0, B.k)(), meta: new Set() };
              return (r.count++, r.meta.add(n), this.set(e, r), this);
            },
            POP: function (e, n) {
              var t = this.get(e);
              return (t && (t.count--, t.meta.delete(n)), this);
            },
            SCROLL_PREVENT: function (e) {
              var n,
                t = {
                  doc: e.doc,
                  d: e.d,
                  meta: (function (e) {
                    var n = {},
                      t = !0,
                      r = !1,
                      o = void 0;
                    try {
                      for (
                        var i, a = e[Symbol.iterator]();
                        !(t = (i = a.next()).done);
                        t = !0
                      ) {
                        var u = i.value;
                        Object.assign(n, u(n));
                      }
                    } catch (e) {
                      ((r = !0), (o = e));
                    } finally {
                      try {
                        t || null == a.return || a.return();
                      } finally {
                        if (r) throw o;
                      }
                    }
                    return n;
                  })(e.meta),
                },
                r = [
                  (0, Z.gn)()
                    ? {
                        before: function (e) {
                          var n = e.doc,
                            t = e.d,
                            r = e.meta;
                          function o(e) {
                            return r.containers
                              .flatMap(function (e) {
                                return e();
                              })
                              .some(function (n) {
                                return n.contains(e);
                              });
                          }
                          t.microTask(function () {
                            if (
                              "auto" !==
                              window.getComputedStyle(n.documentElement)
                                .scrollBehavior
                            ) {
                              var e,
                                r = (0, B.k)();
                              (r.style(
                                n.documentElement,
                                "scrollBehavior",
                                "auto",
                              ),
                                t.add(function () {
                                  return t.microTask(function () {
                                    return r.dispose();
                                  });
                                }));
                            }
                            var i =
                                null != (e = window.scrollY)
                                  ? e
                                  : window.pageYOffset,
                              a = null;
                            (t.addEventListener(
                              n,
                              "click",
                              function (e) {
                                if (e.target instanceof HTMLElement)
                                  try {
                                    var t = e.target.closest("a");
                                    if (!t) return;
                                    var r = new URL(t.href).hash,
                                      i = n.querySelector(r);
                                    i && !o(i) && (a = i);
                                  } catch (e) {}
                              },
                              !0,
                            ),
                              t.addEventListener(n, "touchstart", function (e) {
                                if (e.target instanceof HTMLElement) {
                                  if (o(e.target)) {
                                    for (
                                      var n = e.target;
                                      n.parentElement && o(n.parentElement);
                                    )
                                      n = n.parentElement;
                                    t.style(n, "overscrollBehavior", "contain");
                                  } else
                                    t.style(e.target, "touchAction", "none");
                                }
                              }),
                              t.addEventListener(
                                n,
                                "touchmove",
                                function (e) {
                                  if (e.target instanceof HTMLElement) {
                                    if (o(e.target)) {
                                      for (
                                        var n = e.target;
                                        n.parentElement &&
                                        "" !== n.dataset.headlessuiPortal &&
                                        !(
                                          n.scrollHeight > n.clientHeight ||
                                          n.scrollWidth > n.clientWidth
                                        );
                                      )
                                        n = n.parentElement;
                                      "" === n.dataset.headlessuiPortal &&
                                        e.preventDefault();
                                    } else e.preventDefault();
                                  }
                                },
                                { passive: !1 },
                              ),
                              t.add(function () {
                                var e;
                                (i !==
                                  (null != (e = window.scrollY)
                                    ? e
                                    : window.pageYOffset) &&
                                  window.scrollTo(0, i),
                                  a &&
                                    a.isConnected &&
                                    (a.scrollIntoView({ block: "nearest" }),
                                    (a = null)));
                              }));
                          });
                        },
                      }
                    : {},
                  {
                    before: function (e) {
                      var t,
                        r = e.doc,
                        o = r.documentElement;
                      n =
                        (null != (t = r.defaultView) ? t : window).innerWidth -
                        o.clientWidth;
                    },
                    after: function (e) {
                      var t = e.doc,
                        r = e.d,
                        o = t.documentElement,
                        i = o.clientWidth - o.offsetWidth,
                        a = n - i;
                      r.style(o, "paddingRight", "".concat(a, "px"));
                    },
                  },
                  {
                    before: function (e) {
                      var n = e.doc;
                      e.d.style(n.documentElement, "overflow", "hidden");
                    },
                  },
                ];
              (r.forEach(function (e) {
                var n = e.before;
                return null == n ? void 0 : n(t);
              }),
                r.forEach(function (e) {
                  var n = e.after;
                  return null == n ? void 0 : n(t);
                }));
            },
            SCROLL_ALLOW: function (e) {
              e.d.dispose();
            },
            TEARDOWN: function (e) {
              var n = e.doc;
              this.delete(n);
            },
          }),
          (a = o()),
          (u = new Set()),
          {
            getSnapshot: function () {
              return a;
            },
            subscribe: function (e) {
              return (
                u.add(e),
                function () {
                  return u.delete(e);
                }
              );
            },
            dispatch: function (e) {
              for (
                var n,
                  t = arguments.length,
                  r = Array(t > 1 ? t - 1 : 0),
                  o = 1;
                o < t;
                o++
              )
                r[o - 1] = arguments[o];
              var l = (n = i[e]).call.apply(n, [a].concat((0, h._)(r)));
              l &&
                ((a = l),
                u.forEach(function (e) {
                  return e();
                }));
            },
          });
      W.subscribe(function () {
        var e = W.getSnapshot(),
          n = new Map(),
          t = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var i, a = e[Symbol.iterator]();
            !(t = (i = a.next()).done);
            t = !0
          ) {
            var u = (0, m._)(i.value, 1)[0];
            n.set(u, u.documentElement.style.overflow);
          }
        } catch (e) {
          ((r = !0), (o = e));
        } finally {
          try {
            t || null == a.return || a.return();
          } finally {
            if (r) throw o;
          }
        }
        var l = !0,
          c = !1,
          s = void 0;
        try {
          for (
            var f, d = e.values()[Symbol.iterator]();
            !(l = (f = d.next()).done);
            l = !0
          ) {
            var v = f.value,
              p = "hidden" === n.get(v.doc),
              h = 0 !== v.count;
            (((h && !p) || (!h && p)) &&
              W.dispatch(v.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", v),
              0 === v.count && W.dispatch("TEARDOWN", v));
          }
        } catch (e) {
          ((c = !0), (s = e));
        } finally {
          try {
            l || null == d.return || d.return();
          } finally {
            if (c) throw s;
          }
        }
      });
      var j = t(59656),
        U = new Map(),
        G = new Map();
      function q(e) {
        var n =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        (0, I.e)(
          function () {
            if (n) {
              var t,
                r = "function" == typeof e ? e() : e.current;
              if (r) {
                var o = null != (t = G.get(r)) ? t : 0;
                return (
                  G.set(r, o + 1),
                  0 !== o ||
                    (U.set(r, {
                      "aria-hidden": r.getAttribute("aria-hidden"),
                      inert: r.inert,
                    }),
                    r.setAttribute("aria-hidden", "true"),
                    (r.inert = !0)),
                  function () {
                    if (r) {
                      var e,
                        n = null != (e = G.get(r)) ? e : 1;
                      if ((1 === n ? G.delete(r) : G.set(r, n - 1), 1 === n)) {
                        var t = U.get(r);
                        t &&
                          (null === t["aria-hidden"]
                            ? r.removeAttribute("aria-hidden")
                            : r.setAttribute("aria-hidden", t["aria-hidden"]),
                          (r.inert = t.inert),
                          U.delete(r));
                      }
                    }
                  }
                );
              }
            }
          },
          [e, n],
        );
      }
      var J = t(382),
        K = t(85272),
        Q = t(1365),
        X = t(89834),
        $ = (0, g.createContext)(function () {});
      $.displayName = "StackContext";
      var ee =
        (((l = ee || {})[(l.Add = 0)] = "Add"),
        (l[(l.Remove = 1)] = "Remove"),
        l);
      function en(e) {
        var n = e.children,
          t = e.onUpdate,
          r = e.type,
          o = e.element,
          i = e.enabled,
          a = (0, g.useContext)($),
          u = (0, b.z)(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            (null == t || t.apply(void 0, (0, h._)(n)),
              a.apply(void 0, (0, h._)(n)));
          });
        return (
          (0, I.e)(
            function () {
              var e = void 0 === i || !0 === i;
              return (
                e && u(0, r, o),
                function () {
                  e && u(1, r, o);
                }
              );
            },
            [u, r, o, i],
          ),
          g.createElement($.Provider, { value: u }, n)
        );
      }
      var et = t(67257),
        er = (0, g.createContext)(null),
        eo = Object.assign(
          (0, A.yV)(function (e, n) {
            var t = (0, j.M)(),
              r = e.id,
              o = void 0 === r ? "headlessui-description-".concat(t) : r,
              i = (0, p._)(e, ["id"]),
              a = (function e() {
                var n = (0, g.useContext)(er);
                if (null === n) {
                  var t = Error(
                    "You used a <Description /> component, but it is not inside a relevant parent.",
                  );
                  throw (
                    Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t
                  );
                }
                return n;
              })(),
              u = (0, S.T)(n);
            (0, I.e)(
              function () {
                return a.register(o);
              },
              [o, a.register],
            );
            var l = (0, v._)((0, d._)({ ref: u }, a.props), { id: o });
            return (0, A.sY)({
              ourProps: l,
              theirProps: i,
              slot: a.slot || {},
              defaultTag: "p",
              name: a.name || "Description",
            });
          }),
          {},
        ),
        ei = t(71237),
        ea =
          (((c = ea || {})[(c.Open = 0)] = "Open"),
          (c[(c.Closed = 1)] = "Closed"),
          c),
        eu = (((s = eu || {})[(s.SetTitleId = 0)] = "SetTitleId"), s),
        el = (0, f._)({}, 0, function (e, n) {
          return e.titleId === n.id
            ? e
            : (0, v._)((0, d._)({}, e), { titleId: n.id });
        }),
        ec = (0, g.createContext)(null);
      function es(e) {
        var n = (0, g.useContext)(ec);
        if (null === n) {
          var t = Error(
            "<".concat(e, " /> is missing a parent <Dialog /> component."),
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, es), t);
        }
        return n;
      }
      function ef(e, n) {
        return (0, O.E)(n.type, el, e, n);
      }
      ec.displayName = "DialogContext";
      var ed = A.AN.RenderStrategy | A.AN.Static,
        ev = Object.assign(
          (0, A.yV)(function (e, n) {
            var t,
              r,
              o,
              i = (0, j.M)(),
              a = e.id,
              u = e.open,
              l = e.onClose,
              c = e.initialFocus,
              s = e.role,
              d = void 0 === s ? "dialog" : s,
              v = e.__demoMode,
              E = (0, p._)(e, [
                "id",
                "open",
                "onClose",
                "initialFocus",
                "role",
                "__demoMode",
              ]),
              y = (0, m._)((0, g.useState)(0), 2),
              w = y[0],
              T = y[1],
              F = (0, g.useRef)(!1);
            d =
              "dialog" === d || "alertdialog" === d
                ? d
                : (F.current ||
                    ((F.current = !0),
                    console.warn(
                      "Invalid role [".concat(
                        d,
                        "] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead.",
                      ),
                    )),
                  "dialog");
            var P = (0, Q.oJ)();
            void 0 === u && null !== P && (u = (P & Q.ZM.Open) === Q.ZM.Open);
            var R = (0, g.useRef)(null),
              M = (0, S.T)(R, n),
              D = (0, C.i)(R),
              k = e.hasOwnProperty("open") || null !== P,
              x = e.hasOwnProperty("onClose");
            if (!k && !x)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component.",
              );
            if (!k)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.",
              );
            if (!x)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.",
              );
            if ("boolean" != typeof u)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(
                  u,
                ),
              );
            if ("function" != typeof l)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(
                  l,
                ),
              );
            var N = u ? 0 : 1,
              Y = (0, m._)(
                (0, g.useReducer)(ef, {
                  titleId: null,
                  descriptionId: null,
                  panelRef: (0, g.createRef)(),
                }),
                2,
              ),
              B = Y[0],
              Z = Y[1],
              U = (0, b.z)(function () {
                return l(!1);
              }),
              G = (0, b.z)(function (e) {
                return Z({ type: 0, id: e });
              }),
              $ = !!(0, L.H)() && !(void 0 !== v && v) && 0 === N,
              et = w > 1,
              eo = null !== (0, g.useContext)(ec),
              ea = (0, m._)((0, z.k)(), 2),
              eu = ea[0],
              el = ea[1],
              es = (0, K.v)({
                portals: eu,
                defaultContainers: [
                  {
                    get current() {
                      var ev;
                      return null != (ev = B.panelRef.current) ? ev : R.current;
                    },
                  },
                ],
              }),
              ep = es.resolveContainers,
              em = es.mainTreeNodeRef,
              eh = es.MainTreeNode,
              eg = null !== P && (P & Q.ZM.Closing) === Q.ZM.Closing,
              eE = !eo && !eg && $;
            q(
              (0, g.useCallback)(
                function () {
                  var e, n;
                  return null !=
                    (n = Array.from(
                      null !=
                        (e =
                          null == D ? void 0 : D.querySelectorAll("body > *"))
                        ? e
                        : [],
                    ).find(function (e) {
                      return (
                        "headlessui-portal-root" !== e.id &&
                        e.contains(em.current) &&
                        e instanceof HTMLElement
                      );
                    }))
                    ? n
                    : null;
                },
                [em],
              ),
              eE,
            );
            var ey = !!et || $;
            q(
              (0, g.useCallback)(
                function () {
                  var e, n;
                  return null !=
                    (n = Array.from(
                      null !=
                        (e =
                          null == D
                            ? void 0
                            : D.querySelectorAll("[data-headlessui-portal]"))
                        ? e
                        : [],
                    ).find(function (e) {
                      return e.contains(em.current) && e instanceof HTMLElement;
                    }))
                    ? n
                    : null;
                },
                [em],
              ),
              ey,
            );
            var eb = !(!$ || et);
            (0, J.O)(
              ep,
              function (e) {
                (e.preventDefault(), U());
              },
              eb,
            );
            var e_ = !(et || 0 !== N);
            ((0, _.O)(
              null == D ? void 0 : D.defaultView,
              "keydown",
              function (e) {
                e_ &&
                  (e.defaultPrevented ||
                    (e.key === ei.R.Escape &&
                      (e.preventDefault(), e.stopPropagation(), U())));
              },
            ),
              (function (e, n) {
                var t,
                  r,
                  o,
                  i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : function () {
                          return [document.body];
                        };
                ((t = function (e) {
                  var n;
                  return {
                    containers: (0, h._)(
                      null != (n = e.containers) ? n : [],
                    ).concat([i]),
                  };
                }),
                  (r = V(W.subscribe, W.getSnapshot, W.getSnapshot)),
                  (o = e ? r.get(e) : void 0) && o.count,
                  (0, I.e)(
                    function () {
                      if (!(!e || !n))
                        return (
                          W.dispatch("PUSH", e, t),
                          function () {
                            return W.dispatch("POP", e, t);
                          }
                        );
                    },
                    [n, e],
                  ));
              })(D, !(eg || 0 !== N || eo), ep),
              (0, g.useEffect)(
                function () {
                  if (0 === N && R.current) {
                    var e = new ResizeObserver(function (e) {
                      var n = !0,
                        t = !1,
                        r = void 0;
                      try {
                        for (
                          var o, i = e[Symbol.iterator]();
                          !(n = (o = i.next()).done);
                          n = !0
                        ) {
                          var a = o.value.target.getBoundingClientRect();
                          0 === a.x &&
                            0 === a.y &&
                            0 === a.width &&
                            0 === a.height &&
                            U();
                        }
                      } catch (e) {
                        ((t = !0), (r = e));
                      } finally {
                        try {
                          n || null == i.return || i.return();
                        } finally {
                          if (t) throw r;
                        }
                      }
                    });
                    return (
                      e.observe(R.current),
                      function () {
                        return e.disconnect();
                      }
                    );
                  }
                },
                [N, R, U],
              ));
            var ew = (0, m._)(
                ((r = (t = (0, m._)((0, g.useState)([]), 2))[0]),
                (o = t[1]),
                [
                  r.length > 0 ? r.join(" ") : void 0,
                  (0, g.useMemo)(
                    function () {
                      return function (e) {
                        var n = (0, b.z)(function (e) {
                            return (
                              o(function (n) {
                                return (0, h._)(n).concat([e]);
                              }),
                              function () {
                                return o(function (n) {
                                  var t = n.slice(),
                                    r = t.indexOf(e);
                                  return (-1 !== r && t.splice(r, 1), t);
                                });
                              }
                            );
                          }),
                          t = (0, g.useMemo)(
                            function () {
                              return {
                                register: n,
                                slot: e.slot,
                                name: e.name,
                                props: e.props,
                              };
                            },
                            [n, e.slot, e.name, e.props],
                          );
                        return g.createElement(
                          er.Provider,
                          { value: t },
                          e.children,
                        );
                      };
                    },
                    [o],
                  ),
                ]),
                2,
              ),
              eT = ew[0],
              eC = ew[1],
              eL = (0, g.useMemo)(
                function () {
                  return [{ dialogState: N, close: U, setTitleId: G }, B];
                },
                [N, B, U, G],
              ),
              eS = (0, g.useMemo)(
                function () {
                  return { open: 0 === N };
                },
                [N],
              ),
              eF = {
                ref: M,
                id: void 0 === a ? "headlessui-dialog-".concat(i) : a,
                role: d,
                "aria-modal": 0 === N || void 0,
                "aria-labelledby": B.titleId,
                "aria-describedby": eT,
              };
            return g.createElement(
              en,
              {
                type: "Dialog",
                enabled: 0 === N,
                element: R,
                onUpdate: (0, b.z)(function (e, n) {
                  var t;
                  "Dialog" === n &&
                    (0, O.E)(
                      e,
                      ((t = {}),
                      (0, f._)(t, ee.Add, function () {
                        return T(function (e) {
                          return e + 1;
                        });
                      }),
                      (0, f._)(t, ee.Remove, function () {
                        return T(function (e) {
                          return e - 1;
                        });
                      }),
                      t),
                    );
                }),
              },
              g.createElement(
                X.O,
                { force: !0 },
                g.createElement(
                  z.h,
                  null,
                  g.createElement(
                    ec.Provider,
                    { value: eL },
                    g.createElement(
                      z.h.Group,
                      { target: R },
                      g.createElement(
                        X.O,
                        { force: !1 },
                        g.createElement(
                          eC,
                          { slot: eS, name: "Dialog.Description" },
                          g.createElement(
                            H,
                            {
                              initialFocus: c,
                              containers: ep,
                              features: $
                                ? (0, O.E)(et ? "parent" : "leaf", {
                                    parent: H.features.RestoreFocus,
                                    leaf:
                                      H.features.All & ~H.features.FocusLock,
                                  })
                                : H.features.None,
                            },
                            g.createElement(
                              el,
                              null,
                              (0, A.sY)({
                                ourProps: eF,
                                theirProps: E,
                                slot: eS,
                                defaultTag: "div",
                                features: ed,
                                visible: 0 === N,
                                name: "Dialog",
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              g.createElement(eh, null),
            );
          }),
          {
            Backdrop: (0, A.yV)(function (e, n) {
              var t = (0, j.M)(),
                r = e.id,
                o = (0, p._)(e, ["id"]),
                i = (0, m._)(es("Dialog.Backdrop"), 2),
                a = i[0].dialogState,
                u = i[1],
                l = (0, S.T)(n);
              (0, g.useEffect)(
                function () {
                  if (null === u.panelRef.current)
                    throw Error(
                      "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.",
                    );
                },
                [u.panelRef],
              );
              var c = (0, g.useMemo)(
                function () {
                  return { open: 0 === a };
                },
                [a],
              );
              return g.createElement(
                X.O,
                { force: !0 },
                g.createElement(
                  z.h,
                  null,
                  (0, A.sY)({
                    ourProps: {
                      ref: l,
                      id:
                        void 0 === r
                          ? "headlessui-dialog-backdrop-".concat(t)
                          : r,
                      "aria-hidden": !0,
                    },
                    theirProps: o,
                    slot: c,
                    defaultTag: "div",
                    name: "Dialog.Backdrop",
                  }),
                ),
              );
            }),
            Panel: (0, A.yV)(function (e, n) {
              var t = (0, j.M)(),
                r = e.id,
                o = (0, p._)(e, ["id"]),
                i = (0, m._)(es("Dialog.Panel"), 2),
                a = i[0].dialogState,
                u = i[1],
                l = (0, S.T)(n, u.panelRef),
                c = (0, g.useMemo)(
                  function () {
                    return { open: 0 === a };
                  },
                  [a],
                ),
                s = (0, b.z)(function (e) {
                  e.stopPropagation();
                });
              return (0, A.sY)({
                ourProps: {
                  ref: l,
                  id: void 0 === r ? "headlessui-dialog-panel-".concat(t) : r,
                  onClick: s,
                },
                theirProps: o,
                slot: c,
                defaultTag: "div",
                name: "Dialog.Panel",
              });
            }),
            Overlay: (0, A.yV)(function (e, n) {
              var t = (0, j.M)(),
                r = e.id,
                o = (0, p._)(e, ["id"]),
                i = (0, m._)(es("Dialog.Overlay"), 1)[0],
                a = i.dialogState,
                u = i.close,
                l = (0, S.T)(n),
                c = (0, b.z)(function (e) {
                  if (e.target === e.currentTarget) {
                    if ((0, et.P)(e.currentTarget)) return e.preventDefault();
                    (e.preventDefault(), e.stopPropagation(), u());
                  }
                }),
                s = (0, g.useMemo)(
                  function () {
                    return { open: 0 === a };
                  },
                  [a],
                );
              return (0, A.sY)({
                ourProps: {
                  ref: l,
                  id: void 0 === r ? "headlessui-dialog-overlay-".concat(t) : r,
                  "aria-hidden": !0,
                  onClick: c,
                },
                theirProps: o,
                slot: s,
                defaultTag: "div",
                name: "Dialog.Overlay",
              });
            }),
            Title: (0, A.yV)(function (e, n) {
              var t = (0, j.M)(),
                r = e.id,
                o = void 0 === r ? "headlessui-dialog-title-".concat(t) : r,
                i = (0, p._)(e, ["id"]),
                a = (0, m._)(es("Dialog.Title"), 1)[0],
                u = a.dialogState,
                l = a.setTitleId,
                c = (0, S.T)(n);
              (0, g.useEffect)(
                function () {
                  return (
                    l(o),
                    function () {
                      return l(null);
                    }
                  );
                },
                [o, l],
              );
              var s = (0, g.useMemo)(
                function () {
                  return { open: 0 === u };
                },
                [u],
              );
              return (0, A.sY)({
                ourProps: { ref: c, id: o },
                theirProps: i,
                slot: s,
                defaultTag: "h2",
                name: "Dialog.Title",
              });
            }),
            Description: eo,
          },
        );
    },
    89121: function (e, n, t) {
      t.d(n, {
        u: function () {
          return Y;
        },
      });
      var r,
        o = t(75766),
        i = t(72253),
        a = t(14932),
        u = t(47702),
        l = t(24043),
        c = t(248),
        s = t(67294),
        f = t(5655),
        d = t(68354),
        v = t(55729),
        p = t(57110),
        m = t(39438),
        h = t(77563),
        g = t(40947),
        E = t(47122),
        y = t(16116);
      function b(e) {
        for (
          var n, t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o];
        e && r.length > 0 && (n = e.classList).add.apply(n, (0, c._)(r));
      }
      function _(e) {
        for (
          var n, t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1;
          o < t;
          o++
        )
          r[o - 1] = arguments[o];
        e && r.length > 0 && (n = e.classList).remove.apply(n, (0, c._)(r));
      }
      var w = t(1365),
        T = t(51573),
        C = t(83619);
      function L() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.split(/\s+/).filter(function (e) {
          return e.length > 1;
        });
      }
      var S = (0, s.createContext)(null);
      S.displayName = "TransitionContext";
      var F = (((r = F || {}).Visible = "visible"), (r.Hidden = "hidden"), r),
        P = (0, s.createContext)(null);
      function R(e) {
        return "children" in e
          ? R(e.children)
          : e.current
              .filter(function (e) {
                return null !== e.el.current;
              })
              .filter(function (e) {
                return "visible" === e.state;
              }).length > 0;
      }
      function M(e, n) {
        var t = (0, m.E)(e),
          r = (0, s.useRef)([]),
          i = (0, v.t)(),
          a = (0, f.G)(),
          u = (0, d.z)(function (e) {
            var n,
              u =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : C.l4.Hidden,
              l = r.current.findIndex(function (n) {
                return n.el === e;
              });
            -1 !== l &&
              ((0, y.E)(
                u,
                ((n = {}),
                (0, o._)(n, C.l4.Unmount, function () {
                  r.current.splice(l, 1);
                }),
                (0, o._)(n, C.l4.Hidden, function () {
                  r.current[l].state = "hidden";
                }),
                n),
              ),
              a.microTask(function () {
                var e;
                !R(r) && i.current && (null == (e = t.current) || e.call(t));
              }));
          }),
          c = (0, d.z)(function (e) {
            var n = r.current.find(function (n) {
              return n.el === e;
            });
            return (
              n
                ? "visible" !== n.state && (n.state = "visible")
                : r.current.push({ el: e, state: "visible" }),
              function () {
                return u(e, C.l4.Unmount);
              }
            );
          }),
          p = (0, s.useRef)([]),
          h = (0, s.useRef)(Promise.resolve()),
          g = (0, s.useRef)({ enter: [], leave: [], idle: [] }),
          E = (0, d.z)(function (e, t, r) {
            (p.current.splice(0),
              n &&
                (n.chains.current[t] = n.chains.current[t].filter(function (n) {
                  return (0, l._)(n, 1)[0] !== e;
                })),
              null == n ||
                n.chains.current[t].push([
                  e,
                  new Promise(function (e) {
                    p.current.push(e);
                  }),
                ]),
              null == n ||
                n.chains.current[t].push([
                  e,
                  new Promise(function (e) {
                    Promise.all(
                      g.current[t].map(function (e) {
                        var n = (0, l._)(e, 2);
                        return (n[0], n[1]);
                      }),
                    ).then(function () {
                      return e();
                    });
                  }),
                ]),
              "enter" === t
                ? (h.current = h.current
                    .then(function () {
                      return null == n ? void 0 : n.wait.current;
                    })
                    .then(function () {
                      return r(t);
                    }))
                : r(t));
          }),
          b = (0, d.z)(function (e, n, t) {
            Promise.all(
              g.current[n].splice(0).map(function (e) {
                var n = (0, l._)(e, 2);
                return (n[0], n[1]);
              }),
            )
              .then(function () {
                var e;
                null == (e = p.current.shift()) || e();
              })
              .then(function () {
                return t(n);
              });
          });
        return (0, s.useMemo)(
          function () {
            return {
              children: r,
              register: c,
              unregister: u,
              onStart: E,
              onStop: b,
              wait: h,
              chains: g,
            };
          },
          [c, u, r, E, b, g, h],
        );
      }
      function D() {}
      P.displayName = "NestingContext";
      var O = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function k(e) {
        var n = {},
          t = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var i, a, u = O[Symbol.iterator]();
            !(t = (a = u.next()).done);
            t = !0
          ) {
            var l = a.value;
            n[l] = null != (i = e[l]) ? i : D;
          }
        } catch (e) {
          ((r = !0), (o = e));
        } finally {
          try {
            t || null == u.return || u.return();
          } finally {
            if (r) throw o;
          }
        }
        return n;
      }
      var A = C.AN.RenderStrategy,
        x = (0, C.yV)(function (e, n) {
          var t = e.show,
            r = e.appear,
            o = void 0 !== r && r,
            c = e.unmount,
            f = (0, u._)(e, ["show", "appear", "unmount"]),
            v = (0, s.useRef)(null),
            m = (0, g.T)(v, n);
          (0, h.H)();
          var E = (0, w.oJ)();
          if (
            (void 0 === t && null !== E && (t = (E & w.ZM.Open) === w.ZM.Open),
            ![!0, !1].includes(t))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop.",
            );
          var y = (0, l._)((0, s.useState)(t ? "visible" : "hidden"), 2),
            b = y[0],
            _ = y[1],
            T = M(function () {
              _("hidden");
            }),
            L = (0, l._)((0, s.useState)(!0), 2),
            F = L[0],
            D = L[1],
            O = (0, s.useRef)([t]);
          (0, p.e)(
            function () {
              !1 !== F &&
                O.current[O.current.length - 1] !== t &&
                (O.current.push(t), D(!1));
            },
            [O, t],
          );
          var k = (0, s.useMemo)(
            function () {
              return { show: t, appear: o, initial: F };
            },
            [t, o, F],
          );
          (0, s.useEffect)(
            function () {
              if (t) _("visible");
              else if (R(T)) {
                var e = v.current;
                if (!e) return;
                var n = e.getBoundingClientRect();
                0 === n.x &&
                  0 === n.y &&
                  0 === n.width &&
                  0 === n.height &&
                  _("hidden");
              } else _("hidden");
            },
            [t, T],
          );
          var x = { unmount: void 0 === c || c },
            H = (0, d.z)(function () {
              var n;
              (F && D(!1), null == (n = e.beforeEnter) || n.call(e));
            }),
            Y = (0, d.z)(function () {
              var n;
              (F && D(!1), null == (n = e.beforeLeave) || n.call(e));
            });
          return s.createElement(
            P.Provider,
            { value: T },
            s.createElement(
              S.Provider,
              { value: k },
              (0, C.sY)({
                ourProps: (0, a._)((0, i._)({}, x), {
                  as: s.Fragment,
                  children: s.createElement(
                    N,
                    (0, a._)((0, i._)({ ref: m }, x, f), {
                      beforeEnter: H,
                      beforeLeave: Y,
                    }),
                  ),
                }),
                theirProps: {},
                defaultTag: s.Fragment,
                features: A,
                visible: "visible" === b,
                name: "Transition",
              }),
            ),
          );
        }),
        N = (0, C.yV)(function (e, n) {
          var t,
            r,
            F,
            D,
            O,
            x,
            N,
            H,
            Y,
            z,
            V,
            I,
            B,
            Z,
            W,
            j = e.beforeEnter,
            U = e.afterEnter,
            G = e.beforeLeave,
            q = e.afterLeave,
            J = e.enter,
            K = e.enterFrom,
            Q = e.enterTo,
            X = e.entered,
            $ = e.leave,
            ee = e.leaveFrom,
            en = e.leaveTo,
            et = (0, u._)(e, [
              "beforeEnter",
              "afterEnter",
              "beforeLeave",
              "afterLeave",
              "enter",
              "enterFrom",
              "enterTo",
              "entered",
              "leave",
              "leaveFrom",
              "leaveTo",
            ]),
            er = (0, s.useRef)(null),
            eo = (0, g.T)(er, n),
            ei = null == (B = et.unmount) || B ? C.l4.Unmount : C.l4.Hidden,
            ea = (function () {
              var e = (0, s.useContext)(S);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return e;
            })(),
            eu = ea.show,
            el = ea.appear,
            ec = ea.initial,
            es = (0, l._)((0, s.useState)(eu ? "visible" : "hidden"), 2),
            ef = es[0],
            ed = es[1],
            ev = (function () {
              var e = (0, s.useContext)(P);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.",
                );
              return e;
            })(),
            ep = ev.register,
            em = ev.unregister;
          ((0, s.useEffect)(
            function () {
              return ep(er);
            },
            [ep, er],
          ),
            (0, s.useEffect)(
              function () {
                if (ei === C.l4.Hidden && er.current) {
                  var e;
                  if (eu && "visible" !== ef) {
                    ed("visible");
                    return;
                  }
                  return (0, y.E)(
                    ef,
                    ((e = {}),
                    (0, o._)(e, "hidden", function () {
                      return em(er);
                    }),
                    (0, o._)(e, "visible", function () {
                      return ep(er);
                    }),
                    e),
                  );
                }
              },
              [ef, er, ep, em, eu, ei],
            ));
          var eh = (0, m.E)({
              base: L(et.className),
              enter: L(J),
              enterFrom: L(K),
              enterTo: L(Q),
              entered: L(X),
              leave: L($),
              leaveFrom: L(ee),
              leaveTo: L(en),
            }),
            eg =
              ((t = {
                beforeEnter: j,
                afterEnter: U,
                beforeLeave: G,
                afterLeave: q,
              }),
              (r = (0, s.useRef)(k(t))),
              (0, s.useEffect)(
                function () {
                  r.current = k(t);
                },
                [t],
              ),
              r),
            eE = (0, h.H)();
          (0, s.useEffect)(
            function () {
              if (eE && "visible" === ef && null === er.current)
                throw Error(
                  "Did you forget to passthrough the `ref` to the actual DOM node?",
                );
            },
            [er, ef, eE],
          );
          var ey = el && eu && ec,
            eb = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                n = (0, l._)((0, s.useState)(e), 2),
                t = n[0],
                r = n[1],
                o = (0, v.t)(),
                i = (0, s.useCallback)(
                  function (e) {
                    o.current &&
                      r(function (n) {
                        return n | e;
                      });
                  },
                  [t, o],
                ),
                a = (0, s.useCallback)(
                  function (e) {
                    return !!(t & e);
                  },
                  [t],
                );
              return {
                flags: t,
                addFlag: i,
                hasFlag: a,
                removeFlag: (0, s.useCallback)(
                  function (e) {
                    o.current &&
                      r(function (n) {
                        return n & ~e;
                      });
                  },
                  [r, o],
                ),
                toggleFlag: (0, s.useCallback)(
                  function (e) {
                    o.current &&
                      r(function (n) {
                        return n ^ e;
                      });
                  },
                  [r],
                ),
              };
            })(0),
            e_ = (0, d.z)(function (e) {
              return (0, y.E)(e, {
                enter: function () {
                  (eb.addFlag(w.ZM.Opening), eg.current.beforeEnter());
                },
                leave: function () {
                  (eb.addFlag(w.ZM.Closing), eg.current.beforeLeave());
                },
                idle: function () {},
              });
            }),
            ew = (0, d.z)(function (e) {
              return (0, y.E)(e, {
                enter: function () {
                  (eb.removeFlag(w.ZM.Opening), eg.current.afterEnter());
                },
                leave: function () {
                  (eb.removeFlag(w.ZM.Closing), eg.current.afterLeave());
                },
                idle: function () {},
              });
            }),
            eT = M(function () {
              (ed("hidden"), em(er));
            }, ev),
            eC = (0, s.useRef)(!1);
          ((D = (F = {
            immediate: ey,
            container: er,
            classes: eh,
            direction: eE && (!ec || el) ? (eu ? "enter" : "leave") : "idle",
            onStart: (0, m.E)(function (e) {
              ((eC.current = !0), eT.onStart(er, e, e_));
            }),
            onStop: (0, m.E)(function (e) {
              ((eC.current = !1),
                eT.onStop(er, e, ew),
                "leave" !== e || R(eT) || (ed("hidden"), em(er)));
            }),
          }).immediate),
            (O = F.container),
            (x = F.direction),
            (N = F.classes),
            (H = F.onStart),
            (Y = F.onStop),
            (z = (0, v.t)()),
            (V = (0, f.G)()),
            (I = (0, m.E)(x)),
            (0, p.e)(
              function () {
                D && (I.current = "enter");
              },
              [D],
            ),
            (0, p.e)(
              function () {
                var e,
                  n,
                  t,
                  r,
                  o,
                  i,
                  a,
                  u,
                  s,
                  f,
                  d = (0, E.k)();
                V.add(d.dispose);
                var v = O.current;
                if (v && "idle" !== I.current && z.current)
                  return (
                    d.dispose(),
                    H.current(I.current),
                    d.add(
                      ((e = N.current),
                      (n = "enter" === I.current),
                      (t = function () {
                        (d.dispose(), Y.current(I.current));
                      }),
                      (o = n ? "enter" : "leave"),
                      (i = (0, E.k)()),
                      (a =
                        void 0 !== t
                          ? ((r = { called: !1 }),
                            function () {
                              for (
                                var e = arguments.length, n = Array(e), o = 0;
                                o < e;
                                o++
                              )
                                n[o] = arguments[o];
                              if (!r.called)
                                return (
                                  (r.called = !0),
                                  t.apply(void 0, (0, c._)(n))
                                );
                            })
                          : function () {}),
                      "enter" === o &&
                        (v.removeAttribute("hidden"), (v.style.display = "")),
                      (u = (0, y.E)(o, {
                        enter: function () {
                          return e.enter;
                        },
                        leave: function () {
                          return e.leave;
                        },
                      })),
                      (s = (0, y.E)(o, {
                        enter: function () {
                          return e.enterTo;
                        },
                        leave: function () {
                          return e.leaveTo;
                        },
                      })),
                      (f = (0, y.E)(o, {
                        enter: function () {
                          return e.enterFrom;
                        },
                        leave: function () {
                          return e.leaveFrom;
                        },
                      })),
                      _.apply(
                        void 0,
                        [v].concat(
                          (0, c._)(e.base),
                          (0, c._)(e.enter),
                          (0, c._)(e.enterTo),
                          (0, c._)(e.enterFrom),
                          (0, c._)(e.leave),
                          (0, c._)(e.leaveFrom),
                          (0, c._)(e.leaveTo),
                          (0, c._)(e.entered),
                        ),
                      ),
                      b.apply(
                        void 0,
                        [v].concat((0, c._)(e.base), (0, c._)(u), (0, c._)(f)),
                      ),
                      i.nextFrame(function () {
                        (_.apply(
                          void 0,
                          [v].concat(
                            (0, c._)(e.base),
                            (0, c._)(u),
                            (0, c._)(f),
                          ),
                        ),
                          b.apply(
                            void 0,
                            [v].concat(
                              (0, c._)(e.base),
                              (0, c._)(u),
                              (0, c._)(s),
                            ),
                          ),
                          (function (e, n) {
                            var t = (0, E.k)();
                            if (!e) return t.dispose;
                            var r = getComputedStyle(e),
                              o = r.transitionDuration,
                              i = r.transitionDelay,
                              a = (0, l._)(
                                [o, i].map(function (e) {
                                  var n = (0, l._)(
                                    e
                                      .split(",")
                                      .filter(Boolean)
                                      .map(function (e) {
                                        return e.includes("ms")
                                          ? parseFloat(e)
                                          : 1e3 * parseFloat(e);
                                      })
                                      .sort(function (e, n) {
                                        return n - e;
                                      }),
                                    1,
                                  )[0];
                                  return void 0 === n ? 0 : n;
                                }),
                                2,
                              ),
                              u = a[0] + a[1];
                            if (0 !== u) {
                              t.group(function (t) {
                                (t.setTimeout(function () {
                                  (n(), t.dispose());
                                }, u),
                                  t.addEventListener(
                                    e,
                                    "transitionrun",
                                    function (e) {
                                      e.target === e.currentTarget &&
                                        t.dispose();
                                    },
                                  ));
                              });
                              var c = t.addEventListener(
                                e,
                                "transitionend",
                                function (e) {
                                  e.target === e.currentTarget && (n(), c());
                                },
                              );
                            } else n();
                            (t.add(function () {
                              return n();
                            }),
                              t.dispose);
                          })(v, function () {
                            return (
                              _.apply(
                                void 0,
                                [v].concat((0, c._)(e.base), (0, c._)(u)),
                              ),
                              b.apply(
                                void 0,
                                [v].concat(
                                  (0, c._)(e.base),
                                  (0, c._)(e.entered),
                                ),
                              ),
                              a()
                            );
                          }));
                      }),
                      i.dispose),
                    ),
                    d.dispose
                  );
              },
              [x],
            ));
          var eL = et;
          return (
            ey
              ? (eL = (0, a._)((0, i._)({}, eL), {
                  className: T.A.apply(
                    void 0,
                    [et.className].concat(
                      (0, c._)(eh.current.enter),
                      (0, c._)(eh.current.enterFrom),
                    ),
                  ),
                }))
              : eC.current &&
                ((eL.className = (0, T.A)(
                  et.className,
                  null == (Z = er.current) ? void 0 : Z.className,
                )),
                "" === eL.className && delete eL.className),
            s.createElement(
              P.Provider,
              { value: eT },
              s.createElement(
                w.up,
                {
                  value:
                    (0, y.E)(
                      ef,
                      ((W = {}),
                      (0, o._)(W, "visible", w.ZM.Open),
                      (0, o._)(W, "hidden", w.ZM.Closed),
                      W),
                    ) | eb.flags,
                },
                (0, C.sY)({
                  ourProps: { ref: eo },
                  theirProps: eL,
                  defaultTag: "div",
                  features: A,
                  visible: "visible" === ef,
                  name: "Transition.Child",
                }),
              ),
            )
          );
        }),
        H = (0, C.yV)(function (e, n) {
          var t = null !== (0, s.useContext)(S),
            r = null !== (0, w.oJ)();
          return s.createElement(
            s.Fragment,
            null,
            !t && r
              ? s.createElement(x, (0, i._)({ ref: n }, e))
              : s.createElement(N, (0, i._)({ ref: n }, e)),
          );
        }),
        Y = Object.assign(x, { Child: H, Root: x });
    },
    5655: function (e, n, t) {
      t.d(n, {
        G: function () {
          return a;
        },
      });
      var r = t(24043),
        o = t(67294),
        i = t(47122);
      function a() {
        var e = (0, r._)((0, o.useState)(i.k), 1)[0];
        return (
          (0, o.useEffect)(
            function () {
              return function () {
                return e.dispose();
              };
            },
            [e],
          ),
          e
        );
      }
    },
    55729: function (e, n, t) {
      t.d(n, {
        t: function () {
          return i;
        },
      });
      var r = t(67294),
        o = t(57110);
      function i() {
        var e = (0, r.useRef)(!1);
        return (
          (0, o.e)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          e
        );
      }
    },
  },
]);
