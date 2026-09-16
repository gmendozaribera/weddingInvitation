"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3957],
  {
    31134: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return v;
        },
      });
      var r = t(72253),
        o = t(47702),
        u = t(67294),
        i = function (n) {
          var e = n.replace(/^([A-Z])|[\s-_]+(\w)/g, function (n, e, t) {
            return t ? t.toUpperCase() : e.toLowerCase();
          });
          return e.charAt(0).toUpperCase() + e.slice(1);
        },
        a = function () {
          for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
            e[t] = arguments[t];
          return e
            .filter(function (n, e, t) {
              return !!n && "" !== n.trim() && t.indexOf(n) === e;
            })
            .join(" ")
            .trim();
        },
        c = t(14932),
        l = t(24043),
        f = t(248),
        s = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        d = (0, u.forwardRef)(function (n, e) {
          var t = n.color,
            i = n.size,
            d = void 0 === i ? 24 : i,
            v = n.strokeWidth,
            m = void 0 === v ? 2 : v,
            h = n.absoluteStrokeWidth,
            y = n.className,
            p = n.children,
            g = n.iconNode,
            E = (0, o._)(n, [
              "color",
              "size",
              "strokeWidth",
              "absoluteStrokeWidth",
              "className",
              "children",
              "iconNode",
            ]);
          return (0, u.createElement)(
            "svg",
            (0, r._)(
              (0, c._)((0, r._)({ ref: e }, s), {
                width: d,
                height: d,
                stroke: void 0 === t ? "currentColor" : t,
                strokeWidth: h ? (24 * Number(m)) / Number(d) : m,
                className: a("lucide", void 0 === y ? "" : y),
              }),
              E,
            ),
            (0, f._)(
              g.map(function (n) {
                var e = (0, l._)(n, 2),
                  t = e[0],
                  r = e[1];
                return (0, u.createElement)(t, r);
              }),
            ).concat((0, f._)(Array.isArray(p) ? p : [p])),
          );
        }),
        v = function (n, e) {
          var t = (0, u.forwardRef)(function (t, c) {
            var l = t.className,
              f = (0, o._)(t, ["className"]);
            return (0, u.createElement)(
              d,
              (0, r._)(
                {
                  ref: c,
                  iconNode: e,
                  className: a(
                    "lucide-".concat(
                      i(n)
                        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                        .toLowerCase(),
                    ),
                    "lucide-".concat(n),
                    l,
                  ),
                },
                f,
              ),
            );
          });
          return ((t.displayName = i(n)), t);
        };
    },
    62190: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var r = (0, t(31134).Z)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    71237: function (n, e, t) {
      t.d(e, {
        R: function () {
          return o;
        },
      });
      var r,
        o =
          (((r = o || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r);
    },
    23811: function (n, e, t) {
      t.d(e, {
        h: function () {
          return b;
        },
        k: function () {
          return w;
        },
      });
      var r = t(47702),
        o = t(24043),
        u = t(67294),
        i = t(73935),
        a = t(68354),
        c = t(57110),
        l = t(68916),
        f = t(99523),
        s = t(77563),
        d = t(40947),
        v = t(89834),
        m = t(83659),
        h = t(83619),
        y = u.Fragment,
        p = u.Fragment,
        g = (0, u.createContext)(null),
        E = (0, u.createContext)(null);
      function w() {
        var n = (0, u.useContext)(E),
          e = (0, u.useRef)([]),
          t = (0, a.z)(function (t) {
            return (
              e.current.push(t),
              n && n.register(t),
              function () {
                return r(t);
              }
            );
          }),
          r = (0, a.z)(function (t) {
            var r = e.current.indexOf(t);
            (-1 !== r && e.current.splice(r, 1), n && n.unregister(t));
          }),
          o = (0, u.useMemo)(
            function () {
              return { register: t, unregister: r, portals: e };
            },
            [t, r, e],
          );
        return [
          e,
          (0, u.useMemo)(
            function () {
              return function (n) {
                var e = n.children;
                return u.createElement(E.Provider, { value: o }, e);
              };
            },
            [o],
          ),
        ];
      }
      var b = Object.assign(
        (0, h.yV)(function (n, e) {
          var t,
            r,
            a,
            p,
            w,
            b,
            N = (0, u.useRef)(null),
            A = (0, d.T)(
              (0, d.h)(function (n) {
                N.current = n;
              }),
              e,
            ),
            S = (0, f.i)(N),
            _ =
              ((t = (0, v.n)()),
              (r = (0, u.useContext)(g)),
              (a = (0, f.i)(N)),
              (w = (p = (0, o._)(
                (0, u.useState)(function () {
                  if ((!t && null !== r) || m.O.isServer) return null;
                  var n =
                    null == a
                      ? void 0
                      : a.getElementById("headlessui-portal-root");
                  if (n) return n;
                  if (null === a) return null;
                  var e = a.createElement("div");
                  return (
                    e.setAttribute("id", "headlessui-portal-root"),
                    a.body.appendChild(e)
                  );
                }),
                2,
              ))[0]),
              (b = p[1]),
              (0, u.useEffect)(
                function () {
                  null !== w &&
                    ((null != a && a.body.contains(w)) ||
                      null == a ||
                      a.body.appendChild(w));
                },
                [w, a],
              ),
              (0, u.useEffect)(
                function () {
                  t || (null !== r && b(r.current));
                },
                [r, b, t],
              ),
              w),
            O = (0, o._)(
              (0, u.useState)(function () {
                var n;
                return m.O.isServer
                  ? null
                  : null != (n = null == S ? void 0 : S.createElement("div"))
                    ? n
                    : null;
              }),
              1,
            )[0],
            x = (0, u.useContext)(E),
            k = (0, s.H)();
          return (
            (0, c.e)(
              function () {
                !_ ||
                  !O ||
                  _.contains(O) ||
                  (O.setAttribute("data-headlessui-portal", ""),
                  _.appendChild(O));
              },
              [_, O],
            ),
            (0, c.e)(
              function () {
                if (O && x) return x.register(O);
              },
              [x, O],
            ),
            (0, l.L)(function () {
              var n;
              _ &&
                O &&
                (O instanceof Node && _.contains(O) && _.removeChild(O),
                _.childNodes.length <= 0 &&
                  (null == (n = _.parentElement) || n.removeChild(_)));
            }),
            k && _ && O
              ? (0, i.createPortal)(
                  (0, h.sY)({
                    ourProps: { ref: A },
                    theirProps: n,
                    defaultTag: y,
                    name: "Portal",
                  }),
                  O,
                )
              : null
          );
        }),
        {
          Group: (0, h.yV)(function (n, e) {
            var t = n.target,
              o = (0, r._)(n, ["target"]),
              i = { ref: (0, d.T)(e) };
            return u.createElement(
              g.Provider,
              { value: t },
              (0, h.sY)({
                ourProps: i,
                theirProps: o,
                defaultTag: p,
                name: "Popover.Group",
              }),
            );
          }),
        },
      );
    },
    32784: function (n, e, t) {
      t.d(e, {
        O: function () {
          return u;
        },
      });
      var r = t(67294),
        o = t(39438);
      function u(n, e, t, u) {
        var i = (0, o.E)(t);
        (0, r.useEffect)(
          function () {
            function t(n) {
              i.current(n);
            }
            return (
              (n = null != n ? n : window).addEventListener(e, t, u),
              function () {
                return n.removeEventListener(e, t, u);
              }
            );
          },
          [n, e, u],
        );
      }
    },
    68354: function (n, e, t) {
      t.d(e, {
        z: function () {
          return i;
        },
      });
      var r = t(248),
        o = t(67294),
        u = t(39438),
        i = function (n) {
          var e,
            t = (0, u.E)(n);
          return o.useCallback(
            function () {
              for (var n = arguments.length, o = Array(n), u = 0; u < n; u++)
                o[u] = arguments[u];
              return (e = t).current.apply(e, (0, r._)(o));
            },
            [t],
          );
        };
    },
    59656: function (n, e, t) {
      t.d(e, {
        M: function () {
          return l;
        },
      });
      var r,
        o = t(24043),
        u = t(67294),
        i = t(83659),
        a = t(57110),
        c = t(77563),
        l =
          null != (r = u.useId)
            ? r
            : function () {
                var n = (0, c.H)(),
                  e = (0, o._)(
                    u.useState(
                      n
                        ? function () {
                            return i.O.nextId();
                          }
                        : null,
                    ),
                    2,
                  ),
                  t = e[0],
                  r = e[1];
                return (
                  (0, a.e)(
                    function () {
                      null === t && r(i.O.nextId());
                    },
                    [t],
                  ),
                  null != t ? "" + t : void 0
                );
              };
    },
    57110: function (n, e, t) {
      t.d(e, {
        e: function () {
          return u;
        },
      });
      var r = t(67294),
        o = t(83659),
        u = function (n, e) {
          o.O.isServer ? (0, r.useEffect)(n, e) : (0, r.useLayoutEffect)(n, e);
        };
    },
    39438: function (n, e, t) {
      t.d(e, {
        E: function () {
          return u;
        },
      });
      var r = t(67294),
        o = t(57110);
      function u(n) {
        var e = (0, r.useRef)(n);
        return (
          (0, o.e)(
            function () {
              e.current = n;
            },
            [n],
          ),
          e
        );
      }
    },
    68916: function (n, e, t) {
      t.d(e, {
        L: function () {
          return i;
        },
      });
      var r = t(67294),
        o = t(27378),
        u = t(68354);
      function i(n) {
        var e = (0, u.z)(n),
          t = (0, r.useRef)(!1);
        (0, r.useEffect)(
          function () {
            return (
              (t.current = !1),
              function () {
                ((t.current = !0),
                  (0, o.Y)(function () {
                    t.current && e();
                  }));
              }
            );
          },
          [e],
        );
      }
    },
    382: function (n, e, t) {
      t.d(e, {
        O: function () {
          return l;
        },
      });
      var r = t(67294),
        o = t(58766),
        u = t(66061),
        i = t(39438);
      function a(n, e, t) {
        var o = (0, i.E)(e);
        (0, r.useEffect)(
          function () {
            function e(n) {
              o.current(n);
            }
            return (
              document.addEventListener(n, e, t),
              function () {
                return document.removeEventListener(n, e, t);
              }
            );
          },
          [n, t],
        );
      }
      var c = t(5495);
      function l(n, e) {
        var t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          i = (0, r.useRef)(!1);
        function l(t, r) {
          if (i.current && !t.defaultPrevented) {
            var u = r(t);
            if (null !== u && u.getRootNode().contains(u) && u.isConnected) {
              var a = (function n(e) {
                  return "function" == typeof e
                    ? n(e())
                    : Array.isArray(e) || e instanceof Set
                      ? e
                      : [e];
                })(n),
                c = !0,
                l = !1,
                f = void 0;
              try {
                for (
                  var s, d = a[Symbol.iterator]();
                  !(c = (s = d.next()).done);
                  c = !0
                ) {
                  var v = s.value;
                  if (null !== v) {
                    var m = v instanceof HTMLElement ? v : v.current;
                    if (
                      (null != m && m.contains(u)) ||
                      (t.composed && t.composedPath().includes(m))
                    )
                      return;
                  }
                }
              } catch (n) {
                ((l = !0), (f = n));
              } finally {
                try {
                  c || null == d.return || d.return();
                } finally {
                  if (l) throw f;
                }
              }
              return (
                (0, o.sP)(u, o.tJ.Loose) ||
                  -1 === u.tabIndex ||
                  t.preventDefault(),
                e(t, u)
              );
            }
          }
        }
        (0, r.useEffect)(
          function () {
            requestAnimationFrame(function () {
              i.current = t;
            });
          },
          [t],
        );
        var f = (0, r.useRef)(null);
        (a(
          "pointerdown",
          function (n) {
            var e, t;
            i.current &&
              (f.current =
                (null == (t = null == (e = n.composedPath) ? void 0 : e.call(n))
                  ? void 0
                  : t[0]) || n.target);
          },
          !0,
        ),
          a(
            "mousedown",
            function (n) {
              var e, t;
              i.current &&
                (f.current =
                  (null ==
                  (t = null == (e = n.composedPath) ? void 0 : e.call(n))
                    ? void 0
                    : t[0]) || n.target);
            },
            !0,
          ),
          a(
            "click",
            function (n) {
              (0, u.tq)() ||
                (f.current &&
                  (l(n, function () {
                    return f.current;
                  }),
                  (f.current = null)));
            },
            !0,
          ),
          a(
            "touchend",
            function (n) {
              return l(n, function () {
                return n.target instanceof HTMLElement ? n.target : null;
              });
            },
            !0,
          ),
          (0, c.s)(
            "blur",
            function (n) {
              return l(n, function () {
                return window.document.activeElement instanceof
                  HTMLIFrameElement
                  ? window.document.activeElement
                  : null;
              });
            },
            !0,
          ));
      }
    },
    99523: function (n, e, t) {
      t.d(e, {
        i: function () {
          return i;
        },
      });
      var r = t(248),
        o = t(67294),
        u = t(23233);
      function i() {
        for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        return (0, o.useMemo)(
          function () {
            return u.r.apply(void 0, (0, r._)(e));
          },
          (0, r._)(e),
        );
      }
    },
    85272: function (n, e, t) {
      t.d(e, {
        H: function () {
          return c;
        },
        v: function () {
          return a;
        },
      });
      var r = t(67294),
        o = t(51228),
        u = t(68354),
        i = t(99523);
      function a() {
        var n,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.defaultContainers,
          a = void 0 === t ? [] : t,
          c = e.portals,
          l = e.mainTreeNodeRef,
          f = (0, r.useRef)(
            null != (n = null == l ? void 0 : l.current) ? n : null,
          ),
          s = (0, i.i)(f),
          d = (0, u.z)(function () {
            var n = [],
              e = !0,
              t = !1,
              r = void 0;
            try {
              for (
                var o, u, i, l, d = a[Symbol.iterator]();
                !(e = (l = d.next()).done);
                e = !0
              ) {
                var v = l.value;
                null !== v &&
                  (v instanceof HTMLElement
                    ? n.push(v)
                    : "current" in v &&
                      v.current instanceof HTMLElement &&
                      n.push(v.current));
              }
            } catch (n) {
              ((t = !0), (r = n));
            } finally {
              try {
                e || null == d.return || d.return();
              } finally {
                if (t) throw r;
              }
            }
            var m = !0,
              h = !1,
              y = void 0;
            if (null != c && c.current)
              try {
                for (
                  var p, g = c.current[Symbol.iterator]();
                  !(m = (p = g.next()).done);
                  m = !0
                ) {
                  var E = p.value;
                  n.push(E);
                }
              } catch (n) {
                ((h = !0), (y = n));
              } finally {
                try {
                  m || null == g.return || g.return();
                } finally {
                  if (h) throw y;
                }
              }
            var w = !0,
              b = !1,
              N = void 0;
            try {
              for (
                var A,
                  S = (
                    null !=
                    (o =
                      null == s
                        ? void 0
                        : s.querySelectorAll("html > *, body > *"))
                      ? o
                      : []
                  )[Symbol.iterator]();
                !(w = (A = S.next()).done);
                w = !0
              )
                !(function () {
                  var e = A.value;
                  e !== document.body &&
                    e !== document.head &&
                    e instanceof HTMLElement &&
                    "headlessui-portal-root" !== e.id &&
                    (e.contains(f.current) ||
                      e.contains(
                        null ==
                          (i =
                            null == (u = f.current) ? void 0 : u.getRootNode())
                          ? void 0
                          : i.host,
                      ) ||
                      n.some(function (n) {
                        return e.contains(n);
                      }) ||
                      n.push(e));
                })();
            } catch (n) {
              ((b = !0), (N = n));
            } finally {
              try {
                w || null == S.return || S.return();
              } finally {
                if (b) throw N;
              }
            }
            return n;
          });
        return {
          resolveContainers: d,
          contains: (0, u.z)(function (n) {
            return d().some(function (e) {
              return e.contains(n);
            });
          }),
          mainTreeNodeRef: f,
          MainTreeNode: (0, r.useMemo)(
            function () {
              return function () {
                return null != l
                  ? null
                  : r.createElement(o._, { features: o.A.Hidden, ref: f });
              };
            },
            [f, l],
          ),
        };
      }
      function c() {
        var n = (0, r.useRef)(null);
        return {
          mainTreeNodeRef: n,
          MainTreeNode: (0, r.useMemo)(
            function () {
              return function () {
                return r.createElement(o._, { features: o.A.Hidden, ref: n });
              };
            },
            [n],
          ),
        };
      }
    },
    77563: function (n, e, t) {
      t.d(e, {
        H: function () {
          return a;
        },
      });
      var r,
        o = t(24043),
        u = t(67294),
        i = t(83659);
      function a() {
        var n,
          e =
            ((n = "undefined" == typeof document),
            (r || (r = t.t(u, 2))).useSyncExternalStore(
              function () {
                return function () {};
              },
              function () {
                return !1;
              },
              function () {
                return !n;
              },
            )),
          a = (0, o._)(u.useState(i.O.isHandoffComplete), 2),
          c = a[0],
          l = a[1];
        return (
          c && !1 === i.O.isHandoffComplete && l(!1),
          u.useEffect(
            function () {
              !0 !== c && l(!0);
            },
            [c],
          ),
          u.useEffect(function () {
            return i.O.handoff();
          }, []),
          !e && c
        );
      }
    },
    40947: function (n, e, t) {
      t.d(e, {
        T: function () {
          return c;
        },
        h: function () {
          return a;
        },
      });
      var r = t(75766),
        o = t(67294),
        u = t(68354),
        i = Symbol();
      function a(n) {
        var e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return Object.assign(n, (0, r._)({}, i, e));
      }
      function c() {
        for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        var r = (0, o.useRef)(e);
        (0, o.useEffect)(
          function () {
            r.current = e;
          },
          [e],
        );
        var a = (0, u.z)(function (n) {
          var e = !0,
            t = !1,
            o = void 0;
          try {
            for (
              var u, i = r.current[Symbol.iterator]();
              !(e = (u = i.next()).done);
              e = !0
            ) {
              var a = u.value;
              null != a && ("function" == typeof a ? a(n) : (a.current = n));
            }
          } catch (n) {
            ((t = !0), (o = n));
          } finally {
            try {
              e || null == i.return || i.return();
            } finally {
              if (t) throw o;
            }
          }
        });
        return e.every(function (n) {
          return null == n || (null == n ? void 0 : n[i]);
        })
          ? void 0
          : a;
      }
    },
    54751: function (n, e, t) {
      t.d(e, {
        N: function () {
          return i;
        },
        l: function () {
          return a;
        },
      });
      var r,
        o = t(67294),
        u = t(5495),
        i =
          (((r = i || {})[(r.Forwards = 0)] = "Forwards"),
          (r[(r.Backwards = 1)] = "Backwards"),
          r);
      function a() {
        var n = (0, o.useRef)(0);
        return (
          (0, u.s)(
            "keydown",
            function (e) {
              "Tab" === e.key && (n.current = e.shiftKey ? 1 : 0);
            },
            !0,
          ),
          n
        );
      }
    },
    5495: function (n, e, t) {
      t.d(e, {
        s: function () {
          return u;
        },
      });
      var r = t(67294),
        o = t(39438);
      function u(n, e, t) {
        var u = (0, o.E)(e);
        (0, r.useEffect)(
          function () {
            function e(n) {
              u.current(n);
            }
            return (
              window.addEventListener(n, e, t),
              function () {
                return window.removeEventListener(n, e, t);
              }
            );
          },
          [n, t],
        );
      }
    },
    51228: function (n, e, t) {
      t.d(e, {
        A: function () {
          return a;
        },
        _: function () {
          return c;
        },
      });
      var r,
        o = t(72253),
        u = t(47702),
        i = t(83619),
        a =
          (((r = a || {})[(r.None = 1)] = "None"),
          (r[(r.Focusable = 2)] = "Focusable"),
          (r[(r.Hidden = 4)] = "Hidden"),
          r),
        c = (0, i.yV)(function (n, e) {
          var t,
            r = n.features,
            a = void 0 === r ? 1 : r,
            c = (0, u._)(n, ["features"]),
            l = {
              ref: e,
              "aria-hidden":
                (2 & a) == 2 || (null != (t = c["aria-hidden"]) ? t : void 0),
              hidden: (4 & a) == 4 || void 0,
              style: (0, o._)(
                {
                  position: "fixed",
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: -1,
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: "0",
                },
                (4 & a) == 4 && (2 & a) != 2 && { display: "none" },
              ),
            };
          return (0, i.sY)({
            ourProps: l,
            theirProps: c,
            slot: {},
            defaultTag: "div",
            name: "Hidden",
          });
        });
    },
    1365: function (n, e, t) {
      t.d(e, {
        ZM: function () {
          return i;
        },
        oJ: function () {
          return a;
        },
        up: function () {
          return c;
        },
      });
      var r,
        o = t(67294),
        u = (0, o.createContext)(null);
      u.displayName = "OpenClosedContext";
      var i =
        (((r = i || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function a() {
        return (0, o.useContext)(u);
      }
      function c(n) {
        var e = n.value,
          t = n.children;
        return o.createElement(u.Provider, { value: e }, t);
      }
    },
    89834: function (n, e, t) {
      t.d(e, {
        O: function () {
          return i;
        },
        n: function () {
          return u;
        },
      });
      var r = t(67294),
        o = (0, r.createContext)(!1);
      function u() {
        return (0, r.useContext)(o);
      }
      function i(n) {
        return r.createElement(o.Provider, { value: n.force }, n.children);
      }
    },
    67257: function (n, e, t) {
      function r(n) {
        for (
          var e = n.parentElement, t = null;
          e && !(e instanceof HTMLFieldSetElement);
        )
          (e instanceof HTMLLegendElement && (t = e), (e = e.parentElement));
        var r = (null == e ? void 0 : e.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (n) {
              if (!n) return !1;
              for (var e = n.previousElementSibling; null !== e; ) {
                if (e instanceof HTMLLegendElement) return !1;
                e = e.previousElementSibling;
              }
              return !0;
            })(t)
          ) && r
        );
      }
      t.d(e, {
        P: function () {
          return r;
        },
      });
    },
    51573: function (n, e, t) {
      t.d(e, {
        A: function () {
          return r;
        },
      });
      function r() {
        for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        return Array.from(
          new Set(
            e.flatMap(function (n) {
              return "string" == typeof n ? n.split(" ") : [];
            }),
          ),
        )
          .filter(Boolean)
          .join(" ");
      }
    },
    47122: function (n, e, t) {
      t.d(e, {
        k: function () {
          return function n() {
            var e = [],
              t = {
                addEventListener: function (n, e, r, o) {
                  return (
                    n.addEventListener(e, r, o),
                    t.add(function () {
                      return n.removeEventListener(e, r, o);
                    })
                  );
                },
                requestAnimationFrame: function () {
                  for (
                    var n = arguments.length, e = Array(n), r = 0;
                    r < n;
                    r++
                  )
                    e[r] = arguments[r];
                  var u = requestAnimationFrame.apply(void 0, (0, o._)(e));
                  return t.add(function () {
                    return cancelAnimationFrame(u);
                  });
                },
                nextFrame: function () {
                  for (
                    var n, e = arguments.length, r = Array(e), u = 0;
                    u < e;
                    u++
                  )
                    r[u] = arguments[u];
                  return t.requestAnimationFrame(function () {
                    return (n = t).requestAnimationFrame.apply(n, (0, o._)(r));
                  });
                },
                setTimeout: function () {
                  for (
                    var n = arguments.length, e = Array(n), r = 0;
                    r < n;
                    r++
                  )
                    e[r] = arguments[r];
                  var u = setTimeout.apply(void 0, (0, o._)(e));
                  return t.add(function () {
                    return clearTimeout(u);
                  });
                },
                microTask: function () {
                  for (
                    var n = arguments.length, e = Array(n), r = 0;
                    r < n;
                    r++
                  )
                    e[r] = arguments[r];
                  var o = { current: !0 };
                  return (
                    (0, u.Y)(function () {
                      o.current && e[0]();
                    }),
                    t.add(function () {
                      o.current = !1;
                    })
                  );
                },
                style: function (n, e, t) {
                  var o = n.style.getPropertyValue(e);
                  return (
                    Object.assign(n.style, (0, r._)({}, e, t)),
                    this.add(function () {
                      Object.assign(n.style, (0, r._)({}, e, o));
                    })
                  );
                },
                group: function (e) {
                  var t = n();
                  return (
                    e(t),
                    this.add(function () {
                      return t.dispose();
                    })
                  );
                },
                add: function (n) {
                  return (
                    e.push(n),
                    function () {
                      var t = e.indexOf(n),
                        r = !0,
                        o = !1,
                        u = void 0;
                      if (t >= 0)
                        try {
                          for (
                            var i, a = e.splice(t, 1)[Symbol.iterator]();
                            !(r = (i = a.next()).done);
                            r = !0
                          )
                            (0, i.value)();
                        } catch (n) {
                          ((o = !0), (u = n));
                        } finally {
                          try {
                            r || null == a.return || a.return();
                          } finally {
                            if (o) throw u;
                          }
                        }
                    }
                  );
                },
                dispose: function () {
                  var n = !0,
                    t = !1,
                    r = void 0;
                  try {
                    for (
                      var o, u = e.splice(0)[Symbol.iterator]();
                      !(n = (o = u.next()).done);
                      n = !0
                    )
                      (0, o.value)();
                  } catch (n) {
                    ((t = !0), (r = n));
                  } finally {
                    try {
                      n || null == u.return || u.return();
                    } finally {
                      if (t) throw r;
                    }
                  }
                },
              };
            return t;
          };
        },
      });
      var r = t(75766),
        o = t(248),
        u = t(27378);
    },
    83659: function (n, e, t) {
      t.d(e, {
        O: function () {
          return c;
        },
      });
      var r = t(48564),
        o = t(2267),
        u = t(88421),
        i = Object.defineProperty,
        a = function (n, e, t) {
          var r;
          return (
            (r =
              (void 0 === e ? "undefined" : (0, u._)(e)) != "symbol"
                ? e + ""
                : e) in n
              ? i(n, r, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (n[r] = t),
            t
          );
        },
        c = new ((function () {
          function n() {
            ((0, r._)(this, n),
              a(this, "current", this.detect()),
              a(this, "handoffState", "pending"),
              a(this, "currentId", 0));
          }
          return (
            (0, o._)(n, [
              {
                key: "set",
                value: function (n) {
                  this.current !== n &&
                    ((this.handoffState = "pending"),
                    (this.currentId = 0),
                    (this.current = n));
                },
              },
              {
                key: "reset",
                value: function () {
                  this.set(this.detect());
                },
              },
              {
                key: "nextId",
                value: function () {
                  return ++this.currentId;
                },
              },
              {
                key: "isServer",
                get: function () {
                  return "server" === this.current;
                },
              },
              {
                key: "isClient",
                get: function () {
                  return "client" === this.current;
                },
              },
              {
                key: "detect",
                value: function () {
                  return "undefined" == typeof document ? "server" : "client";
                },
              },
              {
                key: "handoff",
                value: function () {
                  "pending" === this.handoffState &&
                    (this.handoffState = "complete");
                },
              },
              {
                key: "isHandoffComplete",
                get: function () {
                  return "complete" === this.handoffState;
                },
              },
            ]),
            n
          );
        })())();
    },
    58766: function (n, e, t) {
      t.d(e, {
        C5: function () {
          return b;
        },
        EO: function () {
          return A;
        },
        GO: function () {
          return y;
        },
        TO: function () {
          return v;
        },
        fE: function () {
          return m;
        },
        jA: function () {
          return S;
        },
        sP: function () {
          return g;
        },
        tJ: function () {
          return p;
        },
        wI: function () {
          return E;
        },
        z2: function () {
          return N;
        },
      });
      var r,
        o,
        u,
        i,
        a,
        c = t(75766),
        l = t(47122),
        f = t(16116),
        s = t(23233),
        d = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
        ]
          .map(function (n) {
            return "".concat(n, ":not([tabindex='-1'])");
          })
          .join(","),
        v =
          (((r = v || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          r),
        m =
          (((o = m || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        h =
          (((u = h || {})[(u.Previous = -1)] = "Previous"),
          (u[(u.Next = 1)] = "Next"),
          u);
      function y() {
        var n =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document.body;
        return null == n
          ? []
          : Array.from(n.querySelectorAll(d)).sort(function (n, e) {
              return Math.sign(
                (n.tabIndex || Number.MAX_SAFE_INTEGER) -
                  (e.tabIndex || Number.MAX_SAFE_INTEGER),
              );
            });
      }
      var p =
        (((i = p || {})[(i.Strict = 0)] = "Strict"),
        (i[(i.Loose = 1)] = "Loose"),
        i);
      function g(n) {
        var e,
          t,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (
          n !== (null == (e = (0, s.r)(n)) ? void 0 : e.body) &&
          (0, f.E)(
            r,
            ((t = {}),
            (0, c._)(t, 0, function () {
              return n.matches(d);
            }),
            (0, c._)(t, 1, function () {
              for (var e = n; null !== e; ) {
                if (e.matches(d)) return !0;
                e = e.parentElement;
              }
              return !1;
            }),
            t),
          )
        );
      }
      function E(n) {
        var e = (0, s.r)(n);
        (0, l.k)().nextFrame(function () {
          e && !g(e.activeElement, 0) && b(n);
        });
      }
      var w =
        (((a = w || {})[(a.Keyboard = 0)] = "Keyboard"),
        (a[(a.Mouse = 1)] = "Mouse"),
        a);
      function b(n) {
        null == n || n.focus({ preventScroll: !0 });
      }
      function N(n) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function (n) {
                return n;
              };
        return n.slice().sort(function (n, t) {
          var r = e(n),
            o = e(t);
          if (null === r || null === o) return 0;
          var u = r.compareDocumentPosition(o);
          return u & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : u & Node.DOCUMENT_POSITION_PRECEDING
              ? 1
              : 0;
        });
      }
      function A(n, e) {
        return S(y(), e, { relativeTo: n });
      }
      function S(n, e) {
        var t,
          r,
          o,
          u =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = u.sorted,
          a = u.relativeTo,
          c = void 0 === a ? null : a,
          l = u.skipElements,
          f = void 0 === l ? [] : l,
          s = Array.isArray(n)
            ? n.length > 0
              ? n[0].ownerDocument
              : document
            : n.ownerDocument,
          d = Array.isArray(n) ? (void 0 === i || i ? N(n) : n) : y(n);
        (f.length > 0 &&
          d.length > 1 &&
          (d = d.filter(function (n) {
            return !f.includes(n);
          })),
          (c = null != c ? c : s.activeElement));
        var v,
          m = (function () {
            if (5 & e) return 1;
            if (10 & e) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
            );
          })(),
          h = (function () {
            if (1 & e) return 0;
            if (2 & e) return Math.max(0, d.indexOf(c)) - 1;
            if (4 & e) return Math.max(0, d.indexOf(c)) + 1;
            if (8 & e) return d.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last",
            );
          })(),
          p = 32 & e ? { preventScroll: !0 } : {},
          g = 0,
          E = d.length;
        do {
          if (g >= E || g + E <= 0) return 0;
          var w = h + g;
          if (16 & e) w = (w + E) % E;
          else {
            if (w < 0) return 3;
            if (w >= E) return 1;
          }
          (null == (v = d[w]) || v.focus(p), (g += m));
        } while (v !== s.activeElement);
        return (
          6 & e &&
            null !=
              (o =
                null == (r = null == (t = v) ? void 0 : t.matches)
                  ? void 0
                  : r.call(t, "textarea,input")) &&
            o &&
            v.select(),
          2
        );
      }
      "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          function (n) {
            n.metaKey ||
              n.altKey ||
              n.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0,
        ),
        document.addEventListener(
          "click",
          function (n) {
            1 === n.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === n.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0,
        ));
    },
    16116: function (n, e, t) {
      t.d(e, {
        E: function () {
          return o;
        },
      });
      var r = t(248);
      function o(n, e) {
        for (
          var t = arguments.length, u = Array(t > 2 ? t - 2 : 0), i = 2;
          i < t;
          i++
        )
          u[i - 2] = arguments[i];
        if (n in e) {
          var a = e[n];
          return "function" == typeof a ? a.apply(void 0, (0, r._)(u)) : a;
        }
        var c = Error(
          'Tried to handle "'
            .concat(
              n,
              '" but there is no handler defined. Only defined handlers are: ',
            )
            .concat(
              Object.keys(e)
                .map(function (n) {
                  return '"'.concat(n, '"');
                })
                .join(", "),
              ".",
            ),
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(c, o), c);
      }
    },
    27378: function (n, e, t) {
      t.d(e, {
        Y: function () {
          return r;
        },
      });
      function r(n) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(n)
          : Promise.resolve()
              .then(n)
              .catch(function (n) {
                return setTimeout(function () {
                  throw n;
                });
              });
      }
    },
    23233: function (n, e, t) {
      t.d(e, {
        r: function () {
          return o;
        },
      });
      var r = t(83659);
      function o(n) {
        return r.O.isServer
          ? null
          : n instanceof Node
            ? n.ownerDocument
            : null != n &&
                n.hasOwnProperty("current") &&
                n.current instanceof Node
              ? n.current.ownerDocument
              : document;
      }
    },
    66061: function (n, e, t) {
      function r() {
        return (
          /iPhone/gi.test(window.navigator.platform) ||
          (/Mac/gi.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 0)
        );
      }
      function o() {
        return r() || /Android/gi.test(window.navigator.userAgent);
      }
      t.d(e, {
        gn: function () {
          return r;
        },
        tq: function () {
          return o;
        },
      });
    },
    83619: function (n, e, t) {
      t.d(e, {
        AN: function () {
          return m;
        },
        Y2: function () {
          return g;
        },
        l4: function () {
          return h;
        },
        sY: function () {
          return y;
        },
        yV: function () {
          return b;
        },
      });
      var r,
        o,
        u = t(75766),
        i = t(72253),
        a = t(14932),
        c = t(47702),
        l = t(24043),
        f = t(248),
        s = t(67294),
        d = t(51573),
        v = t(16116),
        m =
          (((r = m || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        h =
          (((o = h || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function y(n) {
        var e = n.ourProps,
          t = n.theirProps,
          r = n.slot,
          o = n.defaultTag,
          l = n.features,
          f = n.visible,
          s = n.name,
          d = n.mergeRefs;
        d = null != d ? d : E;
        var m = w(t, e);
        if (void 0 === f || f) return p(m, r, o, s, d);
        var h = null != l ? l : 0;
        if (2 & h) {
          var y = m.static,
            g = (0, c._)(m, ["static"]);
          if (void 0 !== y && y) return p(g, r, o, s, d);
        }
        if (1 & h) {
          var b,
            N = m.unmount,
            A = (0, c._)(m, ["unmount"]);
          return (0, v.E)(
            void 0 === N || N ? 0 : 1,
            ((b = {}),
            (0, u._)(b, 0, function () {
              return null;
            }),
            (0, u._)(b, 1, function () {
              return p(
                (0, a._)((0, i._)({}, A), {
                  hidden: !0,
                  style: { display: "none" },
                }),
                r,
                o,
                s,
                d,
              );
            }),
            b),
          );
        }
        return p(m, r, o, s, d);
      }
      function p(n) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = arguments.length > 2 ? arguments[2] : void 0,
          r = arguments.length > 3 ? arguments[3] : void 0,
          o = arguments.length > 4 ? arguments[4] : void 0,
          i = A(n, ["unmount", "static"]),
          a = i.as,
          v = void 0 === a ? t : a,
          m = i.children,
          h = i.refName,
          y = (0, c._)(i, ["as", "children", "refName"]),
          p =
            void 0 !== n.ref
              ? (0, u._)({}, void 0 === h ? "ref" : h, n.ref)
              : {},
          g = "function" == typeof m ? m(e) : m;
        "className" in y &&
          y.className &&
          "function" == typeof y.className &&
          (y.className = y.className(e));
        var E = {};
        if (e) {
          var b = !1,
            S = [],
            _ = !0,
            O = !1,
            x = void 0;
          try {
            for (
              var k, P = Object.entries(e)[Symbol.iterator]();
              !(_ = (k = P.next()).done);
              _ = !0
            ) {
              var T = (0, l._)(k.value, 2),
                C = T[0],
                F = T[1];
              ("boolean" == typeof F && (b = !0), !0 === F && S.push(C));
            }
          } catch (n) {
            ((O = !0), (x = n));
          } finally {
            try {
              _ || null == P.return || P.return();
            } finally {
              if (O) throw x;
            }
          }
          b && (E["data-headlessui-state"] = S.join(" "));
        }
        if (v === s.Fragment && Object.keys(N(y)).length > 0) {
          if (!(0, s.isValidElement)(g) || (Array.isArray(g) && g.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                "The current component <".concat(
                  r,
                  ' /> is rendering a "Fragment".',
                ),
                "However we need to passthrough the following props:",
                Object.keys(y)
                  .map(function (n) {
                    return "  - ".concat(n);
                  })
                  .join("\n"),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ]
                  .map(function (n) {
                    return "  - ".concat(n);
                  })
                  .join("\n"),
              ].join("\n"),
            );
          var L,
            M = g.props,
            R =
              "function" == typeof (null == M ? void 0 : M.className)
                ? function () {
                    for (
                      var n = arguments.length, e = Array(n), t = 0;
                      t < n;
                      t++
                    )
                      e[t] = arguments[t];
                    return (0, d.A)(
                      null == M
                        ? void 0
                        : (L = M).className.apply(L, (0, f._)(e)),
                      y.className,
                    );
                  }
                : (0, d.A)(null == M ? void 0 : M.className, y.className);
          return (0, s.cloneElement)(
            g,
            Object.assign(
              {},
              w(g.props, N(A(y, ["ref"]))),
              E,
              p,
              { ref: o(g.ref, p.ref) },
              R ? { className: R } : {},
            ),
          );
        }
        return (0, s.createElement)(
          v,
          Object.assign(
            {},
            A(y, ["ref"]),
            v !== s.Fragment && p,
            v !== s.Fragment && E,
          ),
          g,
        );
      }
      function g() {
        var n = (0, s.useRef)([]),
          e = (0, s.useCallback)(function (e) {
            var t = !0,
              r = !1,
              o = void 0;
            try {
              for (
                var u, i = n.current[Symbol.iterator]();
                !(t = (u = i.next()).done);
                t = !0
              ) {
                var a = u.value;
                null != a && ("function" == typeof a ? a(e) : (a.current = e));
              }
            } catch (n) {
              ((r = !0), (o = n));
            } finally {
              try {
                t || null == i.return || i.return();
              } finally {
                if (r) throw o;
              }
            }
          }, []);
        return function () {
          for (var t = arguments.length, r = Array(t), o = 0; o < t; o++)
            r[o] = arguments[o];
          if (
            !r.every(function (n) {
              return null == n;
            })
          )
            return ((n.current = r), e);
        };
      }
      function E() {
        for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        return e.every(function (n) {
          return null == n;
        })
          ? void 0
          : function (n) {
              var t = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var u, i = e[Symbol.iterator]();
                  !(t = (u = i.next()).done);
                  t = !0
                ) {
                  var a = u.value;
                  null != a &&
                    ("function" == typeof a ? a(n) : (a.current = n));
                }
              } catch (n) {
                ((r = !0), (o = n));
              } finally {
                try {
                  t || null == i.return || i.return();
                } finally {
                  if (r) throw o;
                }
              }
            };
      }
      function w() {
        for (
          var n = function (n) {
              Object.assign(
                o,
                (0, u._)({}, n, function (e) {
                  for (
                    var t = arguments.length,
                      r = Array(t > 1 ? t - 1 : 0),
                      o = 1;
                    o < t;
                    o++
                  )
                    r[o - 1] = arguments[o];
                  var u = i[n],
                    a = !0,
                    c = !1,
                    l = void 0;
                  try {
                    for (
                      var s, d = u[Symbol.iterator]();
                      !(a = (s = d.next()).done);
                      a = !0
                    ) {
                      var v = s.value;
                      if (
                        (e instanceof Event ||
                          (null == e ? void 0 : e.nativeEvent) instanceof
                            Event) &&
                        e.defaultPrevented
                      )
                        return;
                      v.apply(void 0, [e].concat((0, f._)(r)));
                    }
                  } catch (n) {
                    ((c = !0), (l = n));
                  } finally {
                    try {
                      a || null == d.return || d.return();
                    } finally {
                      if (c) throw l;
                    }
                  }
                }),
              );
            },
            e = arguments.length,
            t = Array(e),
            r = 0;
          r < e;
          r++
        )
          t[r] = arguments[r];
        if (0 === t.length) return {};
        if (1 === t.length) return t[0];
        var o = {},
          i = {},
          a = !0,
          c = !1,
          l = void 0;
        try {
          for (
            var s, d = t[Symbol.iterator]();
            !(a = (s = d.next()).done);
            a = !0
          ) {
            var v = s.value;
            for (var m in v)
              m.startsWith("on") && "function" == typeof v[m]
                ? (null != i[m] || (i[m] = []), i[m].push(v[m]))
                : (o[m] = v[m]);
          }
        } catch (n) {
          ((c = !0), (l = n));
        } finally {
          try {
            a || null == d.return || d.return();
          } finally {
            if (c) throw l;
          }
        }
        if (o.disabled || o["aria-disabled"])
          return Object.assign(
            o,
            Object.fromEntries(
              Object.keys(i).map(function (n) {
                return [n, void 0];
              }),
            ),
          );
        for (var h in i) n(h);
        return o;
      }
      function b(n) {
        var e;
        return Object.assign((0, s.forwardRef)(n), {
          displayName: null != (e = n.displayName) ? e : n.name,
        });
      }
      function N(n) {
        var e = Object.assign({}, n);
        for (var t in e) void 0 === e[t] && delete e[t];
        return e;
      }
      function A(n) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          t = Object.assign({}, n),
          r = !0,
          o = !1,
          u = void 0;
        try {
          for (
            var i, a = e[Symbol.iterator]();
            !(r = (i = a.next()).done);
            r = !0
          ) {
            var c = i.value;
            c in t && delete t[c];
          }
        } catch (n) {
          ((o = !0), (u = n));
        } finally {
          try {
            r || null == a.return || a.return();
          } finally {
            if (o) throw u;
          }
        }
        return t;
      }
    },
  },
]);
