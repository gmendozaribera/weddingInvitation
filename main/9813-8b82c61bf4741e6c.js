(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9813],
  {
    81510: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var l = (0, n(31134).Z)("mail-check", [
        [
          "path",
          {
            d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
            key: "12jkf8",
          },
        ],
        [
          "path",
          { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
        ],
        ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }],
      ]);
    },
    23944: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var l = (0, n(31134).Z)("scroll-text", [
        ["path", { d: "M15 12h-5", key: "r7krc0" }],
        ["path", { d: "M15 8h-5", key: "1khuty" }],
        ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
        [
          "path",
          {
            d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
            key: "1ph1d7",
          },
        ],
      ]);
    },
    40398: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return l;
        },
      });
      var l = (0, n(31134).Z)("send-horizontal", [
        [
          "path",
          {
            d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
            key: "117uat",
          },
        ],
        ["path", { d: "M6 12h16", key: "s4cdu5" }],
      ]);
    },
    22114: function (t, e, n) {
      "use strict";
      var l = n(72253),
        i = n(14932),
        o = n(47702),
        a = n(24043),
        s = n(85893),
        c = n(67294),
        r = n(89382),
        u = n(30143),
        d = n(51734),
        m = n.n(d),
        f = function (t) {
          var e = (0, a._)((0, c.useState)(0), 2),
            n = e[0],
            l = e[1],
            i = (0, a._)((0, c.useState)([]), 2),
            o = i[0],
            s = i[1],
            r = (0, c.useCallback)(
              function (e) {
                t && t.scrollTo(e);
              },
              [t],
            ),
            u = (0, c.useCallback)(function (t) {
              s(t.scrollSnapList());
            }, []),
            d = (0, c.useCallback)(function (t) {
              l(t.selectedScrollSnap());
            }, []);
          return (
            (0, c.useEffect)(
              function () {
                t &&
                  (u(t),
                  d(t),
                  t.on("reInit", u).on("reInit", d).on("select", d));
              },
              [t, u, d],
            ),
            { selectedIndex: n, scrollSnaps: o, onDotButtonClick: r }
          );
        },
        p = function (t) {
          var e = t.children,
            n = (0, o._)(t, ["children"]);
          return (0, s.jsx)(
            "button",
            (0, i._)((0, l._)({ type: "button" }, n), { children: e }),
          );
        };
      e.Z = function (t) {
        var e = t.blocks,
          n = void 0 === e ? [] : e,
          l = t.defaultImgSrc,
          i = void 0 === l ? "/templates/classic/icons/room.png" : l,
          o = t.t,
          d = t.imgClass,
          h = void 0 === d ? "mx-auto mt-2 animate-lightbounce icon" : d,
          g = t.titleClass,
          x = void 0 === g ? void 0 : g,
          v = t.textClass,
          b = void 0 === v ? void 0 : v,
          y = t.footerClass,
          j = void 0 === y ? void 0 : y,
          N = t.clicClass,
          C = void 0 === N ? void 0 : N,
          S = t.carouselClass,
          k = void 0 === S ? void 0 : S,
          w = t.dotsActiveClass,
          _ = void 0 === w ? void 0 : w,
          I = (0, a._)((0, c.useState)(!1), 2),
          O = I[0],
          E = I[1],
          M = (0, a._)((0, c.useState)(null), 2),
          T = M[0],
          D = M[1],
          L = (0, a._)((0, r.Z)({ align: "start", loop: !0 }), 2),
          Z = L[0],
          H = L[1],
          F = f(H),
          z = F.selectedIndex,
          U = F.scrollSnaps,
          V = F.onDotButtonClick,
          B = function (t) {
            (E(!0), D(t));
          };
        return (0, s.jsxs)("div", {
          className: "relative",
          children: [
            (0, s.jsx)("div", {
              className: m().embla,
              ref: n.length > 1 ? Z : null,
              children: (0, s.jsx)("div", {
                className: m().emblaContainer,
                children: n.map(function (t, e) {
                  var n = t.title || null,
                    l = t.text || null,
                    a = t.footer || null,
                    c = t.url || null,
                    r = !1 !== t.withImg,
                    u = t.clic || o("invitation.clic.to.see"),
                    d = t.htmlContent || null,
                    f =
                      t.url &&
                      (t.url.includes("/embed?") || t.url.includes("/embed/")),
                    p = void 0 !== t.dialogContent && null !== t.dialogContent,
                    g = f || p;
                  return (0, s.jsxs)(
                    "div",
                    {
                      className: ""
                        .concat(m().emblaSlide, " ")
                        .concat(k || "py-5", " text group w-full"),
                      children: [
                        n &&
                          (0, s.jsx)("p", {
                            className:
                              t.titleClass || "text-center ".concat(x || ""),
                            children: n,
                          }),
                        l &&
                          (0, s.jsx)("div", {
                            className:
                              t.textClass ||
                              "py-1 text-center ".concat(b || ""),
                            dangerouslySetInnerHTML: { __html: l },
                          }),
                        a
                          ? (0, s.jsx)("div", {
                              className: t.textClass || "pb-2 ".concat(j || ""),
                              dangerouslySetInnerHTML: { __html: a },
                            })
                          : null,
                        c &&
                          !g &&
                          (0, s.jsxs)("a", {
                            href: c,
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "flex flex-col items-center justify-center gap-1 text-center ".concat(
                                b || "",
                              ),
                            children: [
                              r
                                ? (0, s.jsx)("img", {
                                    className:
                                      "icon mx-auto animate-lightbounce ".concat(
                                        t.imgClass || "",
                                      ),
                                    src: t.imgSrc || i,
                                    alt: "url",
                                    width: 80,
                                    height: 80,
                                  })
                                : null,
                              u
                                ? (0, s.jsx)("span", {
                                    className: C || "text font-light",
                                    children: u,
                                  })
                                : null,
                            ],
                          }),
                        c &&
                          g &&
                          (0, s.jsxs)("button", {
                            onClick: function () {
                              return B(e);
                            },
                            className:
                              "mx-auto flex flex-col items-center justify-center gap-1 text-center ".concat(
                                b || "",
                              ),
                            children: [
                              r
                                ? (0, s.jsx)("img", {
                                    className: t.imgClass
                                      ? "icon mx-auto animate-lightbounce ".concat(
                                          t.imgClass,
                                        )
                                      : h ||
                                        "icon mx-auto animate-lightbounce ".concat(
                                          t.imgClass || "",
                                        ),
                                    src: t.imgSrc || i,
                                    alt: "url",
                                    width: 80,
                                    height: 80,
                                  })
                                : null,
                              u
                                ? (0, s.jsx)("span", {
                                    className: C || "text font-light",
                                    children: u,
                                  })
                                : null,
                            ],
                          }),
                        !c &&
                          (0, s.jsxs)("div", {
                            className:
                              "mx-auto flex flex-col items-center justify-center gap-1 text-center ".concat(
                                b || "",
                              ),
                            children: [
                              r
                                ? (0, s.jsx)("img", {
                                    className: t.imgClass
                                      ? "icon mx-auto ".concat(t.imgClass || "")
                                      : h ||
                                        "iconmx-auto ".concat(t.imgClass || ""),
                                    src: t.imgSrc || i,
                                    alt: "url",
                                    width: 80,
                                    height: 80,
                                  })
                                : null,
                              null !== t.clic && void 0 !== t.clic
                                ? (0, s.jsx)("span", {
                                    className: C || "text font-light",
                                    children: u,
                                  })
                                : null,
                            ],
                          }),
                        d
                          ? (0, s.jsx)("div", {
                              dangerouslySetInnerHTML: { __html: d },
                            })
                          : null,
                      ],
                    },
                    e,
                  );
                }),
              }),
            }),
            n.length > 1
              ? (0, s.jsx)("div", {
                  className:
                    "pointer-events-none absolute bottom-0 left-0 right-0 top-0 flex items-center",
                  children: (0, s.jsxs)("div", {
                    className: "mb-4 flex w-full justify-between",
                    children: [
                      (0, s.jsx)("button", {
                        className:
                          "pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-md",
                        onClick: function () {
                          return null == H ? void 0 : H.scrollPrev();
                        },
                        children: (0, s.jsx)("img", {
                          className: "p-1.5 opacity-70",
                          width: 32,
                          height: 32,
                          src: "/svg/arrow-left.svg",
                          alt: "<",
                        }),
                      }),
                      (0, s.jsx)("button", {
                        className:
                          "pointer-events-auto flex h-8 w-8 animate-marquee-right items-center justify-center rounded-full border bg-white shadow-md",
                        onClick: function () {
                          return null == H ? void 0 : H.scrollNext();
                        },
                        children: (0, s.jsx)("img", {
                          className: "p-1.5 opacity-70",
                          width: 32,
                          height: 32,
                          src: "/svg/arrow-right.svg",
                          alt: ">",
                        }),
                      }),
                    ],
                  }),
                })
              : null,
            n.length > 1
              ? (0, s.jsx)("div", {
                  className: "mt-1 flex justify-center",
                  children: (0, s.jsx)("div", {
                    className: "flex flex-wrap items-center justify-end gap-1",
                    children: U.map(function (t, e) {
                      return (0, s.jsx)(
                        p,
                        {
                          onClick: function () {
                            return V(e);
                          },
                          className: "h-4 w-4",
                          children: (0, s.jsx)("div", {
                            className: "h-3 w-3 rounded-full ".concat(
                              e === z
                                ? "".concat(_ || "bg-black/80")
                                : "scale-75 border-2 border-black bg-gray-400",
                            ),
                          }),
                        },
                        e,
                      );
                    }),
                  }),
                })
              : null,
            (0, s.jsx)(u.Z, {
              url: null !== T ? n[T].url : "",
              placeTitle: "",
              title: null !== T ? n[T].title : "",
              setShowDialog: E,
              showDialog: !1 !== O,
              htmlContent: null !== T ? n[T].dialogContent : void 0,
            }),
          ],
        });
      };
    },
    51734: function (t) {
      t.exports = {
        embla: "embla-carousel_embla__wD71s",
        emblaContainer: "embla-carousel_emblaContainer__NX79x",
        emblaSlide: "embla-carousel_emblaSlide__FEH4l",
      };
    },
    9008: function (t, e, n) {
      t.exports = n(23867);
    },
    77451: function (t, e, n) {
      "use strict";
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      let l = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null,
      };
      function i(t = {}) {
        let e, n, o, a;
        let s = null,
          c = 0,
          r = !1,
          u = !1,
          d = !1,
          m = !1;
        function f() {
          if (!o) {
            if (g()) {
              d = !0;
              return;
            }
            (r || n.emit("autoplay:play"),
              (function () {
                let { ownerWindow: t } = n.internalEngine();
                (t.clearTimeout(c),
                  (c = t.setTimeout(j, a[n.selectedScrollSnap()])),
                  (s = new Date().getTime()),
                  n.emit("autoplay:timerset"));
              })(),
              (r = !0));
          }
        }
        function p() {
          o ||
            (r && n.emit("autoplay:stop"),
            (function () {
              let { ownerWindow: t } = n.internalEngine();
              (t.clearTimeout(c),
                (c = 0),
                (s = null),
                n.emit("autoplay:timerstopped"));
            })(),
            (r = !1));
        }
        function h() {
          if (g()) return ((d = r), p());
          d && f();
        }
        function g() {
          let { ownerDocument: t } = n.internalEngine();
          return "hidden" === t.visibilityState;
        }
        function x() {
          u || p();
        }
        function v() {
          u || f();
        }
        function b() {
          ((u = !0), p());
        }
        function y() {
          ((u = !1), f());
        }
        function j() {
          let { index: t } = n.internalEngine(),
            l = t.clone().add(1).get(),
            i = n.scrollSnapList().length - 1,
            o = e.stopOnLastSnap && l === i;
          if (
            (n.canScrollNext() ? n.scrollNext(m) : n.scrollTo(0, m),
            n.emit("autoplay:select"),
            o)
          )
            return p();
          f();
        }
        return {
          name: "autoplay",
          options: t,
          init: function (s, c) {
            n = s;
            let { mergeOptions: r, optionsAtMedia: u } = c,
              d = r(l, i.globalOptions);
            if (((e = u(r(d, t))), n.scrollSnapList().length <= 1)) return;
            ((m = e.jump),
              (o = !1),
              (a = (function (t, e) {
                let n = t.scrollSnapList();
                return "number" == typeof e ? n.map(() => e) : e(n, t);
              })(n, e.delay)));
            let { eventStore: g, ownerDocument: j } = n.internalEngine(),
              N = !!n.internalEngine().options.watchDrag,
              C = (function (t, e) {
                let n = t.rootNode();
                return (e && e(n)) || n;
              })(n, e.rootNode);
            (g.add(j, "visibilitychange", h),
              N && n.on("pointerDown", x),
              N && !e.stopOnInteraction && n.on("pointerUp", v),
              e.stopOnMouseEnter && g.add(C, "mouseenter", b),
              e.stopOnMouseEnter &&
                !e.stopOnInteraction &&
                g.add(C, "mouseleave", y),
              e.stopOnFocusIn && n.on("slideFocusStart", p),
              e.stopOnFocusIn &&
                !e.stopOnInteraction &&
                g.add(n.containerNode(), "focusout", f),
              e.playOnInit && f());
          },
          destroy: function () {
            (n
              .off("pointerDown", x)
              .off("pointerUp", v)
              .off("slideFocusStart", p),
              p(),
              (o = !0),
              (r = !1));
          },
          play: function (t) {
            (void 0 !== t && (m = t), f());
          },
          stop: function () {
            r && p();
          },
          reset: function () {
            r && f();
          },
          isPlaying: function () {
            return r;
          },
          timeUntilNext: function () {
            return s
              ? a[n.selectedScrollSnap()] - (new Date().getTime() - s)
              : null;
          },
        };
      }
      i.globalOptions = void 0;
    },
  },
]);
