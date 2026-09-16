(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [345],
  {
    92385: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      var n = (0, i(31134).Z)("link", [
        [
          "path",
          {
            d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
            key: "1cjeqo",
          },
        ],
        [
          "path",
          {
            d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
            key: "19qd67",
          },
        ],
      ]);
    },
    40586: function (e, t, i) {
      "use strict";
      i.d(t, {
        R: function () {
          return P;
        },
      });
      var n = i(72253),
        a = i(14932),
        l = i(24043),
        s = i(85893),
        o = i(67294),
        c = i(67353),
        r = i(13114),
        d = i(92385),
        m = i(98130),
        v = i(87513),
        u = i(28621),
        x = i(22114),
        p = i(48572),
        h = i(30143),
        g = i(96627),
        f = i(43381),
        w = i(51671),
        b = i(93996),
        j = i(3662),
        y = i(66982),
        N = { opacity: 0, translateY: 30 },
        I = {
          opacity: 1,
          translateY: 0,
          transition: { duration: 1.5, delay: 0.3 },
        },
        C = { once: !0, amount: 0.8 },
        k = { opacity: 0, transition: { duration: 1.5, delay: 0.3 } },
        _ = { opacity: 1, transition: { duration: 1.5, delay: 0.3 } },
        E = "text-7xl",
        S = "text-base font-bold tracking-wider",
        V = "text-base",
        F = {
          olive: "bg-[#9aa5a5]",
          beige: "bg-[#c3bcb4]",
          mint: "bg-[#b7c8bc]",
          pastel: "bg-[#93b4d4]",
        },
        z = {
          olive: "text-[#879696] title",
          beige: "text-[#86786a] title",
          mint: "text-[#80a594] title",
          pastel: "text-[#96afc8] title",
          gold: "text-[#c2aa85] title",
        },
        A = {
          olive: "text-[#212121] text",
          beige: "text-[#212121] text",
          mint: "text-[#212121] text",
          pastel: "text-[#212121] text",
        },
        T = {
          olive: "text-[#252525] text",
          beige: "text-[#252525] text",
          mint: "text-[#252525] text",
          pastel: "text-[#252525] text",
        },
        L = {
          olive: "text-white text-alt",
          beige: "text-white text-alt",
          mint: "text-white text-alt",
          pastel: "text-white text-alt",
        },
        M = {
          olive:
            "radial-gradient(circle, rgb(132 130 128) 20%, rgb(83 88 83) 80%)",
          beige:
            "radial-gradient(circle, rgb(150 150 150) 20%, rgb(119 119 119) 80%)",
          mint: "radial-gradient(circle, rgb(132 130 128) 20%, rgb(83 88 83) 80%)",
          pastel:
            "radial-gradient(circle, rgb(237 237 237) 20%, rgb(210 210 210) 80%)",
        },
        D = { olive: "olive", mint: "olive", beige: "beige", pastel: "pastel" },
        H = {
          "center-center": "flex flex-col items-center justify-center",
          "center-left": "flex flex-col items-start justify-center text-left",
          "center-right": "flex flex-col items-end justify-center text-right",
        },
        q = function (e) {
          var t = e.inverse,
            i = void 0 !== t && t,
            n = e.theme,
            a = e.decoration;
          return a
            ? "right" === a
              ? (0, s.jsxs)("div", {
                  className: "relative overflow-visible ".concat(
                    i ? "relative -top-0.5" : "relative -bottom-0.5",
                  ),
                  children: [
                    (0, s.jsx)("img", {
                      src: "/templates/classic/".concat(n, "/divisor.png"),
                      alt: "divisor-top",
                      className: i ? "-scale-y-100" : "",
                    }),
                    (0, s.jsx)(c.E.div, {
                      initial: {
                        rotate: "-118deg",
                        opacity: 0,
                        scale: 0.5,
                        translateX: 15,
                      },
                      whileInView: {
                        rotate: "-135deg",
                        opacity: 1,
                        scale: 1.2,
                        translateX: 0,
                        transition: { duration: 2, delay: 1.5 },
                      },
                      viewport: C,
                      className: "absolute -bottom-[16px] right-[4px] w-[87px]",
                      style: { filter: "beige" === n ? "sepia(0.25)" : "none" },
                      alt: "flower",
                      children: (0, s.jsx)("img", {
                        className: "animate-wind",
                        src: "/templates/classic/".concat(
                          D[n],
                          "/decoration/flower5.png",
                        ),
                        alt: "flower",
                      }),
                    }),
                    (0, s.jsx)(c.E.div, {
                      initial: {
                        rotate: "-108deg",
                        scale: 0.5,
                        translateX: 25,
                      },
                      whileInView: {
                        rotate: "-138deg",
                        scale: 1.2,
                        translateX: 0,
                        transition: { duration: 2, delay: 0.25 },
                      },
                      viewport: { once: !0, amount: "some" },
                      className:
                        "absolute -bottom-[10px] -right-[25px] w-[70px]",
                      style: { filter: "beige" === n ? "sepia(0.25)" : "none" },
                      alt: "flower",
                      children: (0, s.jsx)("img", {
                        className: "animate-windy",
                        src: "/templates/classic/".concat(
                          D[n],
                          "/decoration/flower1.png",
                        ),
                        alt: "flower",
                      }),
                    }),
                  ],
                })
              : (0, s.jsxs)("div", {
                  className: "relative overflow-visible ".concat(
                    i ? "relative -top-0.5" : "relative -bottom-0.5",
                  ),
                  children: [
                    (0, s.jsx)("img", {
                      src: "/templates/classic/".concat(n, "/divisor.png"),
                      alt: "divisor-top",
                      className: i ? "-scale-y-100" : "",
                    }),
                    (0, s.jsx)(c.E.div, {
                      initial: {
                        rotate: "-118deg",
                        opacity: 0,
                        scale: 0.5,
                        translateX: -15,
                      },
                      whileInView: {
                        rotate: "-135deg",
                        opacity: 1,
                        scale: 1.2,
                        translateX: 0,
                        transition: { duration: 2, delay: 1.5 },
                      },
                      viewport: C,
                      className: "absolute -bottom-[12px] left-[8px] w-[87px]",
                      style: { filter: "beige" === n ? "sepia(0.25)" : "none" },
                      alt: "flower",
                      children: (0, s.jsx)("img", {
                        className: "animate-wind",
                        src: "/templates/classic/".concat(
                          D[n],
                          "/decoration/flower2.png",
                        ),
                        alt: "flower",
                      }),
                    }),
                    (0, s.jsx)(c.E.div, {
                      initial: { rotate: "8deg", scale: 0.5, translateX: -25 },
                      whileInView: {
                        rotate: "18deg",
                        scale: 1.2,
                        translateX: 0,
                        transition: { duration: 2, delay: 0.25 },
                      },
                      viewport: { once: !0, amount: "some" },
                      className:
                        "absolute -bottom-[10px] -left-[20px] z-20 w-[75px]",
                      style: { filter: "beige" === n ? "sepia(0.25)" : "none" },
                      alt: "flower",
                      children: (0, s.jsx)("img", {
                        className: "animate-wind",
                        src: "/templates/classic/".concat(
                          D[n],
                          "/decoration/flower1.png",
                        ),
                        alt: "flower",
                      }),
                    }),
                  ],
                })
            : (0, s.jsx)("img", {
                src: "/templates/classic/".concat(n, "/divisor.png"),
                alt: "divisor-top",
                className: i
                  ? "relative -top-0.5 -scale-y-100"
                  : "relative -bottom-0.5",
              });
        },
        B = {
          coupleName: function (e) {
            var t = e.data,
              i = e.t,
              n = e.theme,
              a = void 0 === n ? "olive" : n,
              l = e.fonts,
              o = void 0 === l ? {} : l,
              r = e.ring,
              d = e.styles;
            return (0, s.jsxs)("div", {
              className: "relative my-8",
              children: [
                (0, s.jsx)("img", {
                  src: "/templates/classic/".concat(
                    "silver" === (void 0 === r ? "gold" : r)
                      ? "silver"
                      : "gold",
                    "-ring.png",
                  ),
                  alt: "outer-ring",
                  className: "mx-auto w-72 animate-pulse",
                }),
                (0, s.jsxs)("div", {
                  className: ""
                    .concat(o.titleFont, " ")
                    .concat(
                      z[a],
                      " absolute bottom-0 left-0 right-0 top-0 z-20 flex w-full flex-col items-center justify-center text-6xl",
                    ),
                  style: (void 0 === d ? {} : d).coupleName || {},
                  children: [
                    (0, s.jsx)("h2", {
                      className: "mt-2 w-full overflow-visible",
                      children: null == t ? void 0 : t.person1,
                    }),
                    (0, s.jsx)("span", {
                      className:
                        "w-full scale-75 overflow-visible leading-[0.7] ".concat(
                          o.coverFont,
                        ),
                      children: i("invitation.ampersand"),
                    }),
                    (0, s.jsx)("h2", {
                      className: "w-full overflow-visible",
                      children: null == t ? void 0 : t.person2,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "absolute bottom-0 left-0 right-0 top-0 mx-auto h-full w-72",
                  children: [
                    (0, s.jsx)("div", {
                      className: "absolute -left-0.5 top-1",
                      children: (0, s.jsx)(c.E.img, {
                        src: "/templates/classic/".concat(
                          D[a],
                          "/decoration/flower1.png",
                        ),
                        alt: "flower",
                        className: "w-24",
                        style: { transformOrigin: "bottom left" },
                        animate: {
                          rotate: [0, 1, -1, 1, -1, 0],
                          x: [0, 0, -1, 0, -1, 0],
                        },
                        transition: {
                          duration: 5,
                          repeat: 1 / 0,
                          repeatType: "mirror",
                          ease: "easeInOut",
                        },
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "absolute bottom-0 right-0",
                      children: (0, s.jsx)(c.E.img, {
                        src: "/templates/classic/".concat(
                          D[a],
                          "/decoration/flower2.png",
                        ),
                        alt: "flower",
                        className: "w-40",
                        style: { transformOrigin: "top right" },
                        animate: {
                          rotate: [0, 2, -2, 1, -1, 0],
                          x: [0, 2, -2, 1, -1, 0],
                        },
                        transition: {
                          duration: 5,
                          repeat: 1 / 0,
                          repeatType: "mirror",
                          ease: "easeInOut",
                        },
                      }),
                    }),
                  ],
                }),
              ],
            });
          },
          date: function (e) {
            var t = e.data,
              i = e.t,
              a = e.theme,
              c = e.locale,
              r = void 0 === c ? "es" : c,
              d = e.fonts,
              m = e.layout,
              v =
                void 0 === m
                  ? { position: "center-center", datePosition: "bot" }
                  : m,
              x = e.customClasses,
              p = void 0 === x ? {} : x,
              h = e.styles,
              g = void 0 === h ? {} : h,
              f = (0, l._)((0, o.useState)(!1), 2),
              w = f[0],
              b = f[1];
            (0, o.useEffect)(function () {
              b(!0);
            }, []);
            var N = (0, y.Wl)(i),
              I = "![--base-color:#393939] ![--base-gradient-color:#393939]";
            return (0, s.jsxs)("div", {
              className: ""
                .concat((void 0 === d ? {} : d).contentFont, " not-inverse ")
                .concat(A[void 0 === a ? "olive" : a], " px-4 py-4 ")
                .concat(H[v.position] || H["center-center"]),
              style: (0, n._)({}, g.general),
              children: [
                "top" === v.datePosition && w
                  ? (0, s.jsx)("div", {
                      className: "text text-xl tracking-widest",
                      style: g.date || {},
                      children: (0, s.jsx)(u.w, {
                        className: I,
                        duration: 2,
                        spread: 1,
                        zDistance: 1,
                        scaleDistance: 1.05,
                        rotateYDistance: 2,
                        children:
                          p.dateText ||
                          "— ".concat(
                            (0, j.p6)(
                              null == t ? void 0 : t.date,
                              " \xb7 ",
                              !0,
                              r,
                            ),
                            " —",
                          ),
                      }),
                    })
                  : null,
                N.weMarry &&
                  (0, s.jsx)("p", {
                    className: "text text-2xl",
                    style: g.title || {},
                    children: N.weMarry,
                  }),
                "bot" === v.datePosition && w
                  ? (0, s.jsx)("div", {
                      className: "text text-xl tracking-widest",
                      style: g.date || {},
                      children: (0, s.jsx)(u.w, {
                        className: I,
                        duration: 2,
                        spread: 1,
                        zDistance: 1,
                        scaleDistance: 1.05,
                        rotateYDistance: 2,
                        children:
                          p.dateText ||
                          "— ".concat(
                            (0, j.p6)(
                              null == t ? void 0 : t.date,
                              " \xb7 ",
                              !0,
                              r,
                            ),
                            " —",
                          ),
                      }),
                    })
                  : null,
              ],
            });
          },
          mainPhoto: function (e) {
            var t = e.data,
              i = e.index,
              n = void 0 === i ? void 0 : i,
              a = e.decoration,
              r = void 0 === a ? "default" : a,
              d = e.decorationLine,
              m = void 0 !== d && d,
              v = e.customClasses,
              u = void 0 === v ? {} : v,
              x = (0, l._)((0, o.useState)(!1), 2),
              p = x[0],
              h = x[1];
            return (0, s.jsx)("div", {
              className:
                u.wrapper ||
                "relative overflow-hidden ".concat(
                  {
                    default: 0 === n ? "pb-8" : "py-8",
                    bot: "pb-8",
                    top: "pt-8",
                  }[r],
                ),
              children: (0, s.jsxs)("div", {
                className:
                  "relative z-10 bg-gradient-to-br from-[#d7d7d7] to-[#d2d2d2] ",
                children: [
                  "default" === r || "top" === r
                    ? (0, s.jsx)("img", {
                        className: "absolute "
                          .concat(
                            0 === n ? "opacity-0" : "",
                            " -top-[25px] z-20 ",
                          )
                          .concat(m ? "" : "rotate-3", " scale-x-[1.1]"),
                        src: "/templates/classic/divisor-line-inverse.png",
                        alt: "img border",
                      })
                    : null,
                  (0, s.jsx)(c.E.div, {
                    initial: { opacity: 0.5, filter: "blur(2px)" },
                    whileInView: {
                      opacity: 1,
                      filter: "blur(0)",
                      transition: { duration: 0.5 },
                    },
                    viewport: { once: !0, amount: 0.9 },
                    onAnimationStart: function () {
                      return h(!0);
                    },
                    className: "relative overflow-hidden",
                    children: (0, s.jsx)(c.E.img, {
                      animate: p
                        ? { scale: u.scale || 1, transition: { duration: 8 } }
                        : { scale: 1.1 },
                      className: "h-auto w-full object-cover",
                      src: null == t ? void 0 : t.coupleImg,
                      alt: "img-cover",
                    }),
                  }),
                  "default" === r || "bot" === r
                    ? (0, s.jsx)("img", {
                        className: "absolute -bottom-[25px] z-20 ".concat(
                          m ? "" : "rotate-3",
                          " -scale-y-100 scale-x-[1.1]",
                        ),
                        src: "/templates/classic/divisor-line-inverse.png",
                        alt: "img border",
                      })
                    : null,
                ],
              }),
            });
          },
          divisor: q,
          quote: function (e) {
            var t = e.t,
              i = e.i,
              n = e.inverse,
              a = void 0 !== n && n,
              l = e.theme,
              o = e.fonts,
              r = void 0 === o ? {} : o,
              d = e.customClasses,
              m = void 0 === d ? {} : d,
              v = e.divisor,
              u = void 0 === v ? void 0 : v,
              x = e.layout,
              p = void 0 === x ? { textAlign: "right", decorationAlt: !1 } : x,
              h = e.styles,
              g = a ? "".concat(F[l], " ").concat(L[l]) : "".concat(A[l]),
              f = {
                right: "text-right",
                left: "text-left",
                center: "text-center",
              };
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: ""
                    .concat(
                      a ? "inverse" : "not-inverse",
                      " relative z-20 space-y-4 p-5 ",
                    )
                    .concat(
                      p.decorationAlt || "top-right" !== p.decorationPosition
                        ? ""
                        : "pt-0",
                      " ",
                    )
                    .concat(g, " ")
                    .concat(r.coverFont, " ")
                    .concat(r.quoteSize || "text-3xl"),
                  children: [
                    p.decorationAlt || "top-right" !== p.decorationPosition
                      ? null
                      : (0, s.jsx)("div", {
                          className: "flex justify-end",
                          children: (0, s.jsx)(c.E.div, {
                            initial: {
                              scale: 0.6,
                              rotate: "-60deg",
                              translateX: "80%",
                            },
                            whileInView: m.inview || {
                              scale: 1,
                              translateX: "20%",
                              rotate: "-40deg",
                              transition: { duration: 2 },
                            },
                            viewport: { once: !0, amount: "some" },
                            className: "relative",
                            children: (0, s.jsx)("img", {
                              className: m.decoration || "w-28 animate-wind",
                              src: "/templates/classic/".concat(
                                D[l],
                                "/decoration/flower3.png",
                              ),
                              alt: "flower",
                            }),
                          }),
                        }),
                    p.decorationAlt && "top-right" === p.decorationPosition
                      ? (0, s.jsx)("div", {
                          className: "flex justify-end",
                          children: (0, s.jsx)(c.E.div, {
                            initial: { scale: 0.6 },
                            whileInView: m.inview || {
                              scale: 1.2,
                              transition: { duration: 2 },
                            },
                            viewport: { once: !0, amount: "some" },
                            className: "relative pr-2",
                            children: (0, s.jsx)("img", {
                              className: m.decoration || "w-28 -scale-x-100",
                              src: "/templates/classic/flower1.png",
                              alt: "flower",
                            }),
                          }),
                        })
                      : null,
                    (0, s.jsx)(c.E.div, {
                      initial: N,
                      whileInView: I,
                      className: ""
                        .concat(r.coverFont, " ")
                        .concat(f[p.textAlign] || f.right, " ")
                        .concat(
                          a ? "text-alt" : "text",
                          " overflow-visible break-words [&_a]:underline [&_ol]:inline-block [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:text-start [&_ul]:inline-block [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-start",
                        ),
                      viewport: { once: !0, amount: 0.5 },
                      dangerouslySetInnerHTML: {
                        __html: t("invitation.quote.text.".concat(i), null),
                      },
                      style: (void 0 === h ? {} : h).quote || {},
                    }),
                    p.decorationAlt || "bot-center" !== p.decorationPosition
                      ? null
                      : (0, s.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, s.jsx)(c.E.div, {
                            initial: { scale: 0.6, rotate: "8deg" },
                            whileInView: m.inview || {
                              scale: 1,
                              rotate: "8deg",
                              transition: { duration: 2 },
                            },
                            viewport: { once: !0, amount: "some" },
                            className: "relative",
                            children: (0, s.jsx)(c.E.img, {
                              className: m.decoration || "w-44",
                              src: "/templates/classic/".concat(
                                D[l],
                                "/decoration/flower4.png",
                              ),
                              alt: "flower",
                              style: { transformOrigin: "top left" },
                              animate: {
                                rotate: [0, 1, -1, 1, -1, 0],
                                x: [0, 1, -1, 1, -1, 0],
                              },
                              transition: {
                                duration: 5,
                                repeat: 1 / 0,
                                repeatType: "mirror",
                                ease: "easeInOut",
                              },
                            }),
                          }),
                        }),
                    p.decorationAlt && "bot-center" === p.decorationPosition
                      ? (0, s.jsx)("div", {
                          className: "flex justify-center",
                          children: (0, s.jsx)(c.E.div, {
                            initial: { scale: 0.6 },
                            whileInView: m.inview || {
                              scale: 1,
                              transition: { duration: 2 },
                            },
                            viewport: { once: !0, amount: "some" },
                            className: "relative",
                            children: (0, s.jsx)("img", {
                              className: m.decoration || "w-36",
                              src: "/templates/classic/flower2.png",
                              alt: "flower",
                            }),
                          }),
                        })
                      : null,
                  ],
                }),
                null !== u &&
                  (0, s.jsx)(q, { theme: l, inverse: a, decoration: u }),
              ],
            });
          },
          place: function (e) {
            var t = e.t,
              i = e.i,
              n = e.theme,
              a = e.fonts,
              r = void 0 === a ? {} : a,
              d = e.inverse,
              m = void 0 !== d && d,
              v = e.type,
              u = e.divisor,
              x = void 0 === u ? void 0 : u,
              p = e.imgDecoration,
              g = e.iconSrc,
              w = void 0 === g ? void 0 : g,
              b = e.customClasses,
              j = void 0 === b ? {} : b,
              N = (0, y.bt)(
                "place" !== v ? { ceremony: 1, celebration: 2 }[v] : i,
                t,
              ),
              I = (0, l._)((0, o.useState)(!1), 2),
              V = I[0],
              T = I[1],
              M = m ? r.textColorAlt || L[n] : r.titleColor || z[n],
              D = r.subtitleSize || S,
              H = N.addressHref && N.addressHref.includes("/embed?");
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: "".concat(
                    m ? "".concat(F[n], " inverse") : "not-inverse",
                  ),
                  children: [
                    N.title &&
                      (0, s.jsx)(c.E.h2, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        className: ""
                          .concat(M, " ")
                          .concat(r.titleFont, " ")
                          .concat(r.titleSize || E, " ")
                          .concat(j.title || "mb-4 font-normal"),
                        children: N.title,
                      }),
                    N.addressTitle &&
                      (0, s.jsx)(c.E.p, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        className: ""
                          .concat(r.contentFont, " ")
                          .concat(A[n], " ")
                          .concat(r.subtitleSize || D, " ")
                          .concat(j.addressTitle || "mb-2 mt-4 px-4"),
                        children: N.addressTitle,
                      }),
                    N.addressImgSrc &&
                      (0, s.jsx)(f.G, {
                        src: N.addressImgSrc,
                        decoration: void 0 === p ? "classic" : p,
                        inverse: m,
                        theme: n,
                      }),
                    N.address &&
                      (0, s.jsx)(c.E.p, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        className: "text mt-2 px-4 tracking-wider",
                        children: N.address,
                      }),
                    N.addressSub &&
                      (0, s.jsx)(c.E.p, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        className: "text px-4 tracking-wider",
                        children: N.addressSub,
                      }),
                    N.hourLabel &&
                      (0, s.jsx)(c.E.p, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        className: "mt-2 px-4 ".concat(
                          A[n],
                          " font-bold tracking-wider",
                        ),
                        children: N.hourLabel,
                      }),
                    N.addressHref &&
                      !H &&
                      (0, s.jsxs)(c.E.a, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        href: N.addressHref,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "flex flex-col items-center justify-center gap-3",
                        children: [
                          (0, s.jsx)("img", {
                            src:
                              w || "/templates/classic/icons/map-locator.png",
                            className: j.icon || "icon animate-lightbounce",
                            alt: "pin",
                            width: 80,
                          }),
                          N.clicMaps &&
                            (0, s.jsx)("p", {
                              className: "text relative -top-3",
                              children: N.clicMaps,
                            }),
                        ],
                      }),
                    N.addressHref &&
                      H &&
                      (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsxs)(c.E.button, {
                            initial: k,
                            whileInView: _,
                            viewport: C,
                            onClick: function () {
                              return T(!0);
                            },
                            className:
                              "mx-auto flex flex-col items-center justify-center gap-3",
                            children: [
                              (0, s.jsx)("img", {
                                src:
                                  w ||
                                  "/templates/classic/icons/map-locator.png",
                                className: j.icon || "icon animate-lightbounce",
                                alt: "pin",
                                width: 80,
                              }),
                              N.clicMaps &&
                                (0, s.jsx)("p", {
                                  className: "text relative -top-3",
                                  children: N.clicMaps,
                                }),
                            ],
                          }),
                          (0, s.jsx)(h.Z, {
                            url: N.addressHref,
                            placeTitle: N.addressTitle,
                            title: N.title,
                            setShowDialog: T,
                            showDialog: V,
                          }),
                        ],
                      }),
                    N.footer &&
                      (0, s.jsx)(c.E.div, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        className: "text mt-2 px-4 tracking-wider",
                        dangerouslySetInnerHTML: { __html: N.footer },
                      }),
                  ],
                }),
                null !== x &&
                  (0, s.jsx)(q, { theme: n, inverse: m, decoration: x }),
              ],
            });
          },
          hotels: function (e) {
            var t = e.t,
              i = e.i,
              n = e.inverse,
              a = void 0 !== n && n,
              l = e.theme,
              o = e.divisor,
              r = void 0 === o ? void 0 : o,
              d = e.blocks,
              m = void 0 === d ? [] : d,
              v = e.imgSrc,
              u = e.customClasses,
              p = e.fonts,
              h = void 0 === p ? {} : p,
              g = (0, y.hU)(i, t),
              f = a ? h.textColorAlt || L[l] : h.titleColor || z[l],
              w = h.subtitleSize || S;
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: "".concat(
                    a ? "".concat(F[l], " inverse") : "not-inverse",
                    " py-1",
                  ),
                  children: [
                    g.title
                      ? (0, s.jsx)(c.E.h2, {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: ""
                            .concat(f, " ")
                            .concat(h.titleFont, " ")
                            .concat(h.titleSize || E, " ")
                            .concat(
                              (void 0 === u ? {} : u).h1 || "mb-4 font-normal",
                            ),
                          children: g.title,
                        })
                      : null,
                    (0, s.jsxs)(c.E.div, {
                      initial: N,
                      whileInView: I,
                      viewport: C,
                      children: [
                        g.subtitle &&
                          (0, s.jsx)("p", {
                            className: "".concat(w, " text"),
                            children: g.subtitle,
                          }),
                        g.text &&
                          (0, s.jsx)("div", {
                            className: "text px-4 text-base",
                            dangerouslySetInnerHTML: { __html: g.text },
                          }),
                        0 === m.length
                          ? (0, s.jsx)("img", {
                              src: v || "/templates/classic/icons/room.png",
                              alt: "hotel",
                              width: 80,
                              height: 80,
                              className: "icon mx-auto",
                            })
                          : null,
                      ],
                    }),
                    (0, s.jsx)(c.E.div, {
                      initial: N,
                      whileInView: I,
                      viewport: C,
                      children:
                        m.length > 0
                          ? (0, s.jsx)("div", {
                              className: "relative w-full px-3 pb-3",
                              children:
                                m &&
                                (0, s.jsx)(x.Z, {
                                  carouselClass: "py-3",
                                  titleClass: "".concat(w, " ").concat(A[l]),
                                  footerClass: ""
                                    .concat(w, " ")
                                    .concat(A[l], " pb-3"),
                                  blocks: m,
                                  t: t,
                                }),
                            })
                          : null,
                    }),
                    g.footer &&
                      (0, s.jsx)(c.E.div, {
                        initial: N,
                        whileInView: I,
                        viewport: C,
                        children: (0, s.jsx)("div", {
                          className: "px-4 text-base",
                          dangerouslySetInnerHTML: { __html: g.footer },
                        }),
                      }),
                  ],
                }),
                null !== r &&
                  (0, s.jsx)(q, { theme: l, inverse: a, decoration: r }),
              ],
            });
          },
          bus: function (e) {
            var t = e.t,
              i = e.i,
              l = e.inverse,
              o = void 0 !== l && l,
              r = e.theme,
              d = e.divisor,
              m = void 0 === d ? void 0 : d,
              v = e.blocks,
              u = void 0 === v ? [] : v,
              p = e.imgSrc,
              h = e.customClasses,
              g = e.fonts,
              f = void 0 === g ? {} : g,
              w = (0, y.X1)(i, t),
              b = o ? f.textColorAlt || L[r] : f.titleColor || z[r],
              j = f.subtitleSize || S;
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: "".concat(
                    o ? "".concat(F[r], " inverse") : "not-inverse",
                    " -mt-0.5 py-1",
                  ),
                  children: [
                    w.title
                      ? (0, s.jsx)(c.E.h2, {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: ""
                            .concat(b, " ")
                            .concat(f.titleFont, " ")
                            .concat(f.titleSize || E, " ")
                            .concat(
                              (void 0 === h ? {} : h).h1 || "mb-4 font-normal",
                            ),
                          children: w.title,
                        })
                      : null,
                    (0, s.jsxs)(c.E.div, {
                      initial: N,
                      whileInView: I,
                      viewport: C,
                      children: [
                        w.subtitle &&
                          (0, s.jsx)("p", {
                            className: j,
                            children: w.subtitle,
                          }),
                        w.text &&
                          (0, s.jsx)("div", {
                            className: "text px-4 text-base",
                            dangerouslySetInnerHTML: { __html: w.text },
                          }),
                        0 === u.length &&
                          (0, s.jsx)("img", {
                            src: p || "/templates/classic/icons/bus2.png",
                            alt: "bus",
                            width: 80,
                            height: 80,
                            className: "icon mx-auto my-4",
                          }),
                      ],
                    }),
                    u.length > 0
                      ? (0, s.jsx)(c.E.div, {
                          initial: N,
                          whileInView: I,
                          viewport: C,
                          children: (0, s.jsx)("div", {
                            className: "relative w-full px-3 pb-3",
                            children:
                              u &&
                              (0, s.jsx)(x.Z, {
                                carouselClass: "py-3",
                                titleClass: "".concat(j, " ").concat(A[r]),
                                footerClass: ""
                                  .concat(j, " ")
                                  .concat(A[r], " pb-3"),
                                blocks: u.map(function (e) {
                                  return (0, a._)((0, n._)({}, e), {
                                    imgSrc:
                                      p || "/templates/classic/icons/bus2.png",
                                  });
                                }),
                                t: t,
                              }),
                          }),
                        })
                      : null,
                    w.footer &&
                      (0, s.jsx)(c.E.div, {
                        initial: N,
                        whileInView: I,
                        viewport: C,
                        children: (0, s.jsx)("div", {
                          className: "px-4 text-base",
                          dangerouslySetInnerHTML: { __html: w.footer },
                        }),
                      }),
                  ],
                }),
                null !== m &&
                  (0, s.jsx)(q, { theme: r, inverse: o, decoration: m }),
              ],
            });
          },
          qr: function (e) {
            var t = e.t,
              i = e.i,
              n = e.inverse,
              a = void 0 !== n && n,
              l = e.theme,
              o = e.divisor,
              r = void 0 === o ? void 0 : o,
              d = e.imgSrc,
              m = e.imgUrl,
              v = e.customClasses,
              u = void 0 === v ? {} : v,
              x = e.fonts,
              p = void 0 === x ? {} : x,
              h = (0, y.DU)(i, t),
              g = a ? p.textColorAlt || L[l] : p.titleColor || z[l],
              f = p.subtitleSize || S;
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: ""
                    .concat(
                      a ? "".concat(F[l], " inverse") : "not-inverse",
                      " py-1 pb-4 ",
                    )
                    .concat(u.div || ""),
                  children: [
                    h.title
                      ? (0, s.jsx)(c.E.h2, {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: ""
                            .concat(g, " ")
                            .concat(p.titleFont, " ")
                            .concat(p.titleSize || E, " ")
                            .concat(u.h1 || "mb-4 font-normal"),
                          children: h.title,
                        })
                      : null,
                    (0, s.jsxs)(c.E.div, {
                      initial: N,
                      whileInView: I,
                      viewport: C,
                      children: [
                        h.subtitle &&
                          (0, s.jsx)("p", {
                            className: "".concat(f, " ").concat(A[l]),
                            children: h.subtitle,
                          }),
                        (0, s.jsx)("img", {
                          className: "icon mx-auto",
                          alt: "cam",
                          src: "/icons/news/photo-camera-2.png",
                          width: "80",
                          height: "80",
                        }),
                        h.text &&
                          (0, s.jsx)("div", {
                            className: "text px-4 pb-4 text-base",
                            dangerouslySetInnerHTML: { __html: h.text },
                          }),
                      ],
                    }),
                    d &&
                      m &&
                      (0, s.jsx)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: m,
                        children: (0, s.jsx)(c.E.img, {
                          initial: N,
                          whileInView: I,
                          viewport: C,
                          src: d,
                          alt: "qr",
                          width: 250,
                          className: "mx-auto w-[150px]",
                        }),
                      }),
                    (0, s.jsxs)(c.E.div, {
                      initial: N,
                      whileInView: I,
                      viewport: C,
                      children: [
                        h.codeLabel &&
                          (0, s.jsx)("p", {
                            className: ""
                              .concat(A[l], " ")
                              .concat(f, " px-4 pb-1 pt-3 text-base"),
                            children: h.codeLabel,
                          }),
                        h.code &&
                          (0, s.jsxs)("button", {
                            onClick: function () {
                              var e = document.getElementById(
                                "qr-".concat(i),
                              ).innerText;
                              (navigator.clipboard.writeText(e),
                                alert(
                                  t("invitation.gift.number.copy.success"),
                                ));
                            },
                            className:
                              "text mx-auto flex items-center justify-center",
                            children: [
                              (0, s.jsx)("img", {
                                className: "animate-lightpulse",
                                width: 24,
                                src: "/classic/icons/copy.svg",
                                alt: "copy",
                              }),
                              (0, s.jsx)("span", {
                                id: "qr-".concat(i),
                                className: "ml-2",
                                children: h.code,
                              }),
                            ],
                          }),
                      ],
                    }),
                    h.footer &&
                      (0, s.jsx)(c.E.div, {
                        className: "text px-4 pb-4 text-base ",
                        initial: N,
                        whileInView: I,
                        viewport: C,
                        dangerouslySetInnerHTML: { __html: h.footer },
                      }),
                  ],
                }),
                null !== r &&
                  (0, s.jsx)(q, { theme: l, inverse: a, decoration: r }),
              ],
            });
          },
          dressCode: function (e) {
            var t = e.t,
              i = e.i,
              n = e.theme,
              a = e.inverse,
              l = void 0 !== a && a,
              o = e.divisor,
              r = void 0 === o ? void 0 : o,
              d = e.customClasses,
              m = e.fonts,
              v = void 0 === m ? {} : m,
              u = e.dressCodes,
              x =
                void 0 === u
                  ? [{ icons: [{ src: "default" }, { src: "default" }] }]
                  : u,
              p = (0, y.Gm)(i, t, x),
              h = l ? v.textColorAlt || L[n] : v.titleColor || z[n],
              g = v.subtitleSize || S;
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: "py-1 ".concat(
                    l ? "".concat(F[n], " inverse") : "not-inverse",
                  ),
                  children: [
                    p.title &&
                      (0, s.jsx)(c.E.h2, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        className: ""
                          .concat(h, " ")
                          .concat(v.titleFont, " ")
                          .concat(v.titleSize || E, " ")
                          .concat(
                            (void 0 === d ? {} : d).title || "mb-4 font-normal",
                          ),
                        children: p.title,
                      }),
                    x.map(function (e, t) {
                      var i,
                        a = p.dresscodes[t].type,
                        l = p.dresscodes[t].text;
                      return (0, s.jsxs)(
                        c.E.div,
                        {
                          initial: N,
                          whileInView: I,
                          viewport: C,
                          children: [
                            a &&
                              (0, s.jsx)("div", {
                                className:
                                  "break-words px-4 pb-2 font-bold tracking-wider "
                                    .concat(g, " ")
                                    .concat(A[n]),
                                children: a,
                              }),
                            l &&
                              (0, s.jsx)("div", {
                                className:
                                  "text break-words px-4 text-base [&_a]:underline [&_ol]:inline-block [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:text-start [&_ul]:inline-block [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-start",
                                dangerouslySetInnerHTML: { __html: l },
                              }),
                            (null === (i = e.icons) || void 0 === i
                              ? void 0
                              : i.length) > 0 &&
                              (0, s.jsxs)("div", {
                                className:
                                  "mx-auto flex items-center justify-center gap-0.5 py-4",
                                children: [
                                  e.icons[0] &&
                                    (0, s.jsx)("img", {
                                      src:
                                        "default" === e.icons[0].src
                                          ? "/templates/classic/icons/tie.png"
                                          : e.icons[0].src,
                                      alt: "dc".concat(t + 1, "-1"),
                                      className:
                                        "icon h-20 w-20 object-contain",
                                      style: {
                                        width: e.icons[0].size || void 0,
                                        height: e.icons[0].size || void 0,
                                      },
                                    }),
                                  e.icons[1] &&
                                    (0, s.jsx)("img", {
                                      src:
                                        "default" === e.icons[1].src
                                          ? "/templates/classic/icons/dress.png"
                                          : e.icons[1].src,
                                      alt: "dc".concat(t + 1, "-2"),
                                      className:
                                        "icon h-20 w-20 object-contain",
                                      style: {
                                        width: e.icons[1].size || void 0,
                                        height: e.icons[1].size || void 0,
                                      },
                                    }),
                                ],
                              }),
                          ],
                        },
                        t,
                      );
                    }),
                  ],
                }),
                null !== r &&
                  (0, s.jsx)(q, { theme: n, inverse: l, decoration: r }),
              ],
            });
          },
          assist: function (e) {
            var t,
              i,
              n,
              a,
              l = e.t,
              o = e.i,
              r = e.inverse,
              d = void 0 !== r && r,
              m = e.coupleData,
              u = e.theme,
              x = e.divisor,
              p = e.iconSrc,
              h = e.dateLimit,
              g = e.customClasses,
              f = void 0 === g ? {} : g,
              w = e.fonts,
              b = void 0 === w ? {} : w,
              j = e.locale,
              V = (0, y.vR)(o, l),
              T = d ? b.textColorAlt || L[u] : b.titleColor || z[u],
              M = b.subtitleSize || S;
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: ""
                    .concat(
                      d ? "".concat(F[u], " inverse") : "not-inverse",
                      " ",
                    )
                    .concat(f.div || ""),
                  children: [
                    (0, s.jsx)("div", {
                      className: "relative -scale-x-100 pt-8",
                      children: (0, s.jsx)(c.E.img, {
                        initial: { width: "4rem" },
                        whileInView: {
                          width: "6rem",
                          transition: { duration: 2 },
                        },
                        viewport: C,
                        className:
                          "absolute right-[0px] top-[-35px] -rotate-12 -scale-x-100 animate-wind",
                        src: "/templates/classic/".concat(
                          D[u],
                          "/decoration/flower3.png",
                        ),
                        alt: "\uD83C\uDF3F",
                      }),
                    }),
                    V.title
                      ? (0, s.jsx)(c.E.h2, {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: ""
                            .concat(T, " ")
                            .concat(b.titleFont, " ")
                            .concat(b.titleSize || E, " ")
                            .concat(
                              f.title || "mb-4 font-normal leading-[0.8]",
                            ),
                          children:
                            V.title &&
                            V.title.split("\n").map(function (e, t) {
                              return (0, s.jsx)("p", { children: e }, t);
                            }),
                        })
                      : null,
                    V.subtitle
                      ? (0, s.jsx)(c.E.p, {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: "text "
                            .concat(M, " ")
                            .concat(A[u], " ")
                            .concat(
                              f.subtitle || "mb-2 mt-4 px-4 tracking-wider",
                            ),
                          children: V.subtitle,
                        })
                      : null,
                    V.text
                      ? (0, s.jsx)(c.E.div, {
                          initial: N,
                          whileInView: I,
                          viewport: C,
                          children: (0, s.jsx)("div", {
                            className: "text px-4 text-base",
                            dangerouslySetInnerHTML: { __html: V.text },
                          }),
                        })
                      : null,
                    (0, s.jsx)(v.u, {
                      uid: m.uid,
                      locale:
                        (null == m
                          ? void 0
                          : null === (t = m.nominativeData) || void 0 === t
                            ? void 0
                            : t.lang) ||
                        j ||
                        null,
                      group:
                        (null == m
                          ? void 0
                          : null === (i = m.nominativeData) || void 0 === i
                            ? void 0
                            : i.group) || null,
                      token:
                        (null == m
                          ? void 0
                          : null === (n = m.nominativeData) || void 0 === n
                            ? void 0
                            : n.token) || null,
                      buttonChild: (0, s.jsxs)(c.E.div, {
                        initial: N,
                        whileInView: I,
                        viewport: C,
                        children: [
                          (0, s.jsx)("img", {
                            src:
                              (void 0 === p ? void 0 : p) ||
                              "/icons/news/love-letter.png",
                            alt: "letter icon",
                            width: 80,
                            className: "icon mx-auto mt-4 animate-lightbounce",
                          }),
                          (0, s.jsx)("span", {
                            className: "text mt-2",
                            children: V.clic,
                          }),
                        ],
                      }),
                      textClassName: b.contentFont,
                      assistForm: m.assistForm,
                      fake:
                        (null === (a = m.invitation) || void 0 === a
                          ? void 0
                          : a.demo) === !0,
                      customData: m,
                      dateLimit: void 0 === h ? void 0 : h,
                    }),
                    V.footer
                      ? (0, s.jsx)(c.E.div, {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: "".concat(f.footer || "px-4 text-base"),
                          dangerouslySetInnerHTML: { __html: V.footer },
                        })
                      : null,
                  ],
                }),
                null !== (void 0 === x ? void 0 : x) &&
                  (0, s.jsx)(q, { theme: u, inverse: d, decoration: "right" }),
              ],
            });
          },
          itinerary: function (e) {
            var t = e.t,
              i = e.i,
              n = e.inverse,
              a = void 0 !== n && n,
              l = e.theme,
              r = e.divisor,
              d = void 0 === r ? void 0 : r,
              m = e.blocks,
              v = e.customClasses,
              u = e.fonts,
              x = void 0 === u ? {} : u,
              p = (0, y.W8)(i, t),
              h = a ? x.textColorAlt || L[l] : x.titleColor || z[l],
              g = x.subtitleSize || S,
              f = {
                opacity: 0,
                translateX: "-50px",
                transition: { duration: 1.5, delay: 0.25 },
              },
              w = {
                opacity: 1,
                translateX: 0,
                transition: { duration: 1.5, delay: 0.25 },
              },
              b = {
                opacity: 0,
                translateX: "50px",
                transition: { duration: 1.5, delay: 0.25 },
              },
              j = {
                opacity: 1,
                translateX: 0,
                transition: { duration: 1.5, delay: 0.25 },
              };
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: "".concat(
                    a ? "".concat(F[l], " inverse") : "not-inverse",
                    " relative",
                  ),
                  children: [
                    p.title
                      ? (0, s.jsx)(c.E.h2, {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: ""
                            .concat(h, " ")
                            .concat(x.titleFont, " ")
                            .concat(x.titleSize || E, " ")
                            .concat(
                              (void 0 === v ? {} : v).h1 || "mb-4 font-normal",
                            ),
                          children: p.title,
                        })
                      : null,
                    (0, s.jsx)("div", {
                      className: "relative w-full pb-6",
                      children:
                        m &&
                        m.map(function (e, i) {
                          var n = i % 2 == 0,
                            a =
                              e.text ||
                              t(
                                "invitation.".concat(
                                  e.type.replaceAll("-", "."),
                                  ".label",
                                ),
                                null,
                              ),
                            r = e.hour || null,
                            d =
                              e.textSub ||
                              t(
                                "invitation.".concat(
                                  e.type.replaceAll("-", "."),
                                  ".sub.label",
                                ),
                                null,
                              );
                          return (0, s.jsxs)(
                            o.Fragment,
                            {
                              children: [
                                null !== e.imgSrc
                                  ? (0, s.jsx)(c.E.img, {
                                      className: e.imgClass || "mx-auto",
                                      initial: n ? f : b,
                                      whileInView: n ? w : j,
                                      viewport: C,
                                      src:
                                        e.imgSrc ||
                                        "/templates/classic/icons/".concat(
                                          e.type,
                                          ".png",
                                        ),
                                      alt: e.type,
                                      width: 100,
                                    })
                                  : null,
                                (0, s.jsxs)(c.E.div, {
                                  initial: n ? f : b,
                                  whileInView: n ? w : j,
                                  viewport: C,
                                  className: "mb-6 px-4 pt-3 tracking-wider",
                                  children: [
                                    r &&
                                      (0, s.jsx)("p", {
                                        className: ""
                                          .concat(A[l], " ")
                                          .concat(g),
                                        children: r,
                                      }),
                                    a && (0, s.jsx)("p", { children: a }),
                                    d && (0, s.jsx)("p", { children: d }),
                                  ],
                                }),
                              ],
                            },
                            i,
                          );
                        }),
                    }),
                  ],
                }),
                null !== d &&
                  (0, s.jsx)(q, { theme: l, inverse: a, decoration: d }),
              ],
            });
          },
          photoCarousel: function (e) {
            var t = e.photos,
              i = e.theme,
              n = e.inverse,
              a = void 0 !== n && n,
              l = e.line,
              o = void 0 === l || l;
            return (0, s.jsxs)("div", {
              className: "relative overflow-hidden ".concat(
                o ? "py-4" : "",
                " -mt-0.5",
              ),
              children: [
                (0, s.jsxs)("div", {
                  className: "absolute flex h-full w-full flex-col",
                  children: [
                    (0, s.jsx)("div", {
                      className: "h-1/2 flex-1 ".concat(a ? F[i] : ""),
                    }),
                    (0, s.jsx)("div", {
                      className: "h-1/2 flex-1 ".concat(a ? "" : F[i]),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "relative ".concat(o ? "py-3" : ""),
                  children: [
                    a
                      ? (0, s.jsx)("img", {
                          className: "pointer-events-none absolute ".concat(
                            o ? "-top-[32px]" : "-top-3",
                            "  z-10 -scale-y-100",
                          ),
                          src: o
                            ? "/templates/classic/".concat(
                                i,
                                "/divisor-line.png",
                              )
                            : "/templates/classic/".concat(i, "/divisor.png"),
                          alt: "".concat(o ? "divisor-line" : "divisor-top"),
                        })
                      : (0, s.jsx)("img", {
                          className:
                            "pointer-events-none absolute -top-[10px] z-20 scale-x-[1.1]",
                          src: "/templates/classic/divisor-line-inverse.png",
                          alt: "img border",
                        }),
                    (0, s.jsx)("div", {
                      className: "relative py-0.5",
                      children: (0, s.jsx)(p.Z, {
                        photos: void 0 === t ? [] : t,
                      }),
                    }),
                    a
                      ? (0, s.jsx)("img", {
                          className:
                            "pointer-events-none absolute -bottom-[20px] z-20 -scale-y-100 scale-x-[1.1]",
                          src: "/templates/classic/divisor-line-inverse.png",
                          alt: "img border",
                        })
                      : (0, s.jsx)("img", {
                          src: o
                            ? "/templates/classic/".concat(
                                i,
                                "/divisor-line.png",
                              )
                            : "/templates/classic/".concat(i, "/divisor.png"),
                          alt: "".concat(o ? "divisor-line" : "divisor-top"),
                          className: "pointer-events-none absolute ".concat(
                            o ? "-bottom-[30px]" : "-bottom-3",
                            " -scale-x-100",
                          ),
                        }),
                  ],
                }),
              ],
            });
          },
          gift: function (e) {
            var t = e.t,
              i = e.i,
              n = e.inverse,
              a = void 0 !== n && n,
              l = e.theme,
              o = e.divisor,
              r = void 0 === o ? void 0 : o,
              m = (e.iconSrc, e.accounts),
              v = e.accountsLarge,
              u = void 0 === v ? [] : v,
              x = e.telephones,
              p = void 0 === x ? [] : x,
              h = e.wishlist,
              g = e.customClasses,
              f = void 0 === g ? {} : g,
              w = e.fonts,
              b = void 0 === w ? {} : w,
              j = (0, y.UC)(i, t),
              S = a ? b.textColorAlt || L[l] : b.titleColor || z[l],
              V = function (e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "account",
                  a = document.getElementById(
                    ""
                      .concat("phone" === n ? "phone" : "gift", "-num-")
                      .concat("large" === n ? "large-" : "")
                      .concat(i, "-")
                      .concat(e),
                  ).innerText;
                (navigator.clipboard.writeText(a),
                  alert(t("invitation.gift.number.copy.success")));
              };
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsxs)("div", {
                  className: ""
                    .concat(
                      a ? "".concat(F[l], " inverse") : "not-inverse",
                      " ",
                    )
                    .concat(f.div || "", " -mt-0.5 py-1"),
                  children: [
                    j.title
                      ? (0, s.jsx)(c.E.h2, {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: ""
                            .concat(S, " ")
                            .concat(b.titleFont, " ")
                            .concat(b.titleSize || E, " ")
                            .concat(f.h1 || "mb-2 font-normal"),
                          children: j.title,
                        })
                      : null,
                    (0, s.jsx)(c.E.img, {
                      initial: k,
                      whileInView: _,
                      viewport: C,
                      src: "/templates/classic/icons/gift.png",
                      alt: "gift",
                      width: 80,
                      className: "icon mx-auto my-2 w-20",
                    }),
                    j.text
                      ? (0, s.jsx)(c.E.div, {
                          dangerouslySetInnerHTML: { __html: j.text },
                          initial: N,
                          whileInView: I,
                          viewport: C,
                          className: f.text || "text px-4",
                        })
                      : null,
                    (void 0 === m ? [] : m).map(function (e, n) {
                      var a = t(
                        "invitation.gift.account.title."
                          .concat(i, ".")
                          .concat(n + 1),
                        null,
                      );
                      return (0, s.jsx)(
                        c.E.div,
                        {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: "mt-2 px-4",
                          children: (0, s.jsxs)("button", {
                            className:
                              "text mx-auto flex items-center justify-center gap-2",
                            onClick: function () {
                              return V(n + 1, "account");
                            },
                            children: [
                              (0, s.jsx)("img", {
                                className: "animate-lightpulse",
                                width: 24,
                                src: "/classic/icons/copy.svg",
                                alt: "copy",
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  a
                                    ? (0, s.jsx)("p", {
                                        className:
                                          "text-left text-sm font-bold ".concat(
                                            A[l],
                                          ),
                                        children: a,
                                      })
                                    : null,
                                  (0, s.jsx)("p", {
                                    id: "gift-num-"
                                      .concat(i, "-")
                                      .concat(n + 1),
                                    children: t(
                                      "invitation.gift.account."
                                        .concat(i, ".")
                                        .concat(n + 1),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        "g.".concat(i, ".").concat(n),
                      );
                    }),
                    (0, s.jsx)("div", {
                      className:
                        0 === u.length
                          ? "hidden"
                          : "mt-2 flex flex-col gap-3 px-4",
                      children: u.map(function (e, n) {
                        var a = t(
                          "invitation.gift.account.large.title."
                            .concat(i, ".")
                            .concat(n + 1),
                          null,
                        );
                        return (0, s.jsx)(
                          c.E.div,
                          {
                            initial: k,
                            whileInView: _,
                            viewport: C,
                            className: "",
                            children: (0, s.jsxs)("button", {
                              className:
                                "text flex items-center justify-center gap-2",
                              onClick: function () {
                                return V(n + 1, "large");
                              },
                              children: [
                                (0, s.jsx)("img", {
                                  className: "animate-lightpulse",
                                  width: 30,
                                  src: "/classic/icons/copy.svg",
                                  alt: "copy",
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    a
                                      ? (0, s.jsx)("div", {
                                          className:
                                            "text-left text-sm font-bold ".concat(
                                              A[l],
                                            ),
                                          dangerouslySetInnerHTML: {
                                            __html: a,
                                          },
                                        })
                                      : null,
                                    (0, s.jsx)("div", {
                                      id: "gift-num-large-"
                                        .concat(i, "-")
                                        .concat(n + 1),
                                      dangerouslySetInnerHTML: {
                                        __html: t(
                                          "invitation.gift.account.large."
                                            .concat(i, ".")
                                            .concat(n + 1),
                                        ),
                                      },
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          },
                          "g.".concat(i, ".").concat(n),
                        );
                      }),
                    }),
                    (void 0 === h ? [] : h).map(function (e, n) {
                      var a = t(
                        "invitation.gift.wishlist.title."
                          .concat(i, ".")
                          .concat(n + 1),
                        null,
                      );
                      return (0, s.jsx)(
                        c.E.div,
                        {
                          initial: k,
                          whileInView: _,
                          viewport: C,
                          className: "mt-2 px-4",
                          children: (0, s.jsxs)("a", {
                            href: t(
                              "invitation.gift.wishlist.url."
                                .concat(i, ".")
                                .concat(n + 1),
                            ),
                            target: "_blank",
                            rel: "noreferrer",
                            className:
                              "mx-auto flex items-center justify-center gap-2",
                            children: [
                              (0, s.jsx)(d.Z, {
                                className:
                                  "h-7 w-7 animate-lightpulse text-black/80",
                                strokeWidth: 1.5,
                                alt: "link",
                              }),
                              (0, s.jsxs)("div", {
                                className: "text",
                                children: [
                                  a
                                    ? (0, s.jsx)("p", {
                                        className: "text-left text-sm ".concat(
                                          A[l],
                                        ),
                                        children: a,
                                      })
                                    : null,
                                  (0, s.jsx)("p", {
                                    children: t(
                                      "invitation.gift.wishlist."
                                        .concat(i, ".")
                                        .concat(n + 1),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        },
                        "g.".concat(i, ".").concat(n),
                      );
                    }),
                    j.phonesTitle
                      ? (0, s.jsx)(c.E.div, {
                          dangerouslySetInnerHTML: { __html: j.phonesTitle },
                          initial: N,
                          whileInView: I,
                          viewport: C,
                          className: f.text || "px-4 pt-4 ",
                        })
                      : null,
                    p.length > 0
                      ? (0, s.jsx)("div", {
                          className: "flex flex-wrap justify-center gap-4",
                          children: p.map(function (e, n) {
                            return (0, s.jsx)(
                              c.E.div,
                              {
                                initial: k,
                                whileInView: _,
                                viewport: C,
                                className: "flex px-4 py-4",
                                children: (0, s.jsxs)("div", {
                                  className: "text relative",
                                  children: [
                                    (0, s.jsx)("p", {
                                      className: "font-bold",
                                      children: t(
                                        "invitation.phone.number.title."
                                          .concat(i, ".")
                                          .concat(n + 1),
                                        "",
                                      ),
                                    }),
                                    (0, s.jsx)("div", {
                                      className: "flex items-center gap-1",
                                      children: (0, s.jsxs)(c.E.button, {
                                        onClick: function () {
                                          return V(n + 1, "phone");
                                        },
                                        initial: k,
                                        whileInView: _,
                                        viewport: C,
                                        className:
                                          "mx-auto flex items-center justify-center gap-1",
                                        children: [
                                          (0, s.jsx)("img", {
                                            className: "animate-lightpulse",
                                            width: 20,
                                            src: "/classic/icons/copy.svg",
                                            alt: "copy",
                                          }),
                                          (0, s.jsx)("p", {
                                            id: "phone-num-"
                                              .concat(i, "-")
                                              .concat(n + 1),
                                            children: t(
                                              "invitation.phone.number."
                                                .concat(i, ".")
                                                .concat(n + 1),
                                              e,
                                            ),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              e,
                            );
                          }),
                        })
                      : null,
                  ],
                }),
                null !== r &&
                  (0, s.jsx)(q, { theme: l, inverse: a, decoration: r }),
              ],
            });
          },
          timer: function (e) {
            var t = e.t,
              i = e.i,
              n = e.inverse,
              a = void 0 !== n && n,
              r = e.data,
              d = e.theme,
              v = e.fonts,
              u = void 0 === v ? {} : v,
              x = e.customClasses,
              p = e.divisor,
              h = void 0 === p ? void 0 : p,
              g = (0, l._)((0, o.useState)(!1), 2),
              f = g[0],
              w = g[1],
              b = a ? u.textColorAlt || L[d] : u.titleColor || z[d];
            return (
              (0, o.useEffect)(function () {
                w(!0);
              }, []),
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsxs)("div", {
                    className: "".concat(
                      a ? "".concat(F[d], " inverse") : "not-inverse",
                      " -mt-0.5 py-2",
                    ),
                    children: [
                      (0, s.jsx)(c.E.h2, {
                        initial: k,
                        whileInView: _,
                        viewport: C,
                        className: "".concat(
                          (void 0 === x ? {} : x).title ||
                            "px-4 "
                              .concat(u.titleFont, " ")
                              .concat(u.titleSize || E, " ")
                              .concat(b),
                        ),
                        children: t("invitation.counter.title.".concat(i)),
                      }),
                      (0, s.jsx)("img", {
                        className: "icon mx-auto animate-lightrotation",
                        width: 80,
                        src: "/templates/classic/icons/timer.png",
                        alt: "timer",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "text relative grid grid-cols-1 place-items-center justify-center gap-4 px-8 pb-8",
                        children: f
                          ? (0, s.jsx)(m.ZP, {
                              date: r.date,
                              renderer: function (e) {
                                var i = e.days,
                                  n = e.hours,
                                  a = e.minutes,
                                  l = e.seconds;
                                return e.completed
                                  ? (0, s.jsx)("span", {
                                      className: "text-3xl",
                                      children: t(
                                        "invitation.counter.finished",
                                      ),
                                    })
                                  : (0, s.jsxs)("div", {
                                      className: "flex justify-center py-4",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-col border-r px-4",
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "text-3xl",
                                              children: i,
                                            }),
                                            (0, s.jsx)("span", {
                                              children: t(
                                                "invitation.counter.days",
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-col border-r px-4",
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "text-3xl",
                                              children: n,
                                            }),
                                            (0, s.jsx)("span", {
                                              children: t(
                                                "invitation.counter.hours",
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-col border-r px-4",
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "text-3xl",
                                              children: a,
                                            }),
                                            (0, s.jsx)("span", {
                                              children: t(
                                                "invitation.counter.mins",
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className: "flex flex-col px-4",
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "text-3xl",
                                              children: l,
                                            }),
                                            (0, s.jsx)("span", {
                                              children: t(
                                                "invitation.counter.secs",
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    });
                              },
                            })
                          : null,
                      }),
                    ],
                  }),
                  null !== h &&
                    (0, s.jsx)(q, { theme: d, inverse: a, decoration: h }),
                ],
              })
            );
          },
          default: function (e) {
            var t = e.type;
            return (0, s.jsxs)("p", {
              className: "bg-red-300 py-11 uppercase",
              children: ["TODO: ", t, " BLOCK!"],
            });
          },
        },
        Z = function (e) {
          var t = e.data,
            i = e.onClick,
            n = e.theme,
            a = e.customClasses,
            l = e.t,
            o = e.fonts,
            r = void 0 === o ? {} : o,
            d = e.baseColor,
            m = void 0 === d ? "broken-white" : d,
            v = {
              white: "#fff",
              "bone-white": "#F6F1E7",
              "broken-white": "#FAFAF8",
              pink: "#E8CFC6",
              aqua: "#88abb4",
              green: "#7A8F7A",
              grey: "#A0A0A0",
              kraft: "#C2A77A",
            },
            u = {
              white: "#d9d9d9",
              "bone-white": "#cfc9c1",
              "broken-white": "#d8d8d6",
              aqua: "#75939b",
              pink: "#c7b2aa",
              green: "#647664",
              grey: "#838383",
              kraft: "#97815e",
            },
            x = {
              aqua: "#41565b",
              pink: "#78635c",
              green: "#404940",
              grey: "#313131",
              kraft: "#605038",
            },
            p = m ? v[m] : v["broken-white"],
            h = m ? u[m] : u["broken-white"];
          return (0, s.jsx)(c.E.button, {
            viewport: { once: !0, amount: "some" },
            onClick: i,
            className:
              "fixed top-0 z-50 mx-auto h-[100vh] w-full max-w-md overflow-hidden",
            children: (0, s.jsxs)("div", {
              className:
                "absolute bottom-0 left-0 right-0 top-0 z-40 flex h-full w-full flex-col justify-center",
              children: [
                (0, s.jsxs)(c.E.div, {
                  initial: { bottom: "0%" },
                  exit: {
                    bottom: "-100%",
                    transition: {
                      duration: 2.5,
                      delay: 0.5,
                      ease: "easeInOut",
                    },
                  },
                  className:
                    "absolute block h-[75vh] w-full will-change-transform",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "invitation absolute block h-[70vh] w-[70vh] border",
                      style: {
                        top: "10%",
                        left: "50%",
                        transform: "translate(-100%, 5%) rotate(45deg)",
                        backgroundColor: p,
                        borderColor: h,
                      },
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "invitation absolute block h-[70vh] w-[70vh] border",
                      style: {
                        top: "10%",
                        left: "50%",
                        transform: "translate(0%, 5%) rotate(45deg)",
                        backgroundColor: p,
                        borderColor: h,
                      },
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "invitation absolute block h-[70vh] w-[70vh] rounded-3xl border-2",
                      style: {
                        bottom: "10%",
                        left: "50%",
                        transform: "translate(-50%, 55%) rotate(45deg)",
                        backgroundColor: p,
                        borderColor: h,
                        zIndex: 2,
                      },
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 right-0 flex h-1/2 w-full items-center justify-center",
                      style: { zIndex: 3 },
                      children: (0, s.jsxs)(c.E.div, {
                        initial: { opacity: 0 },
                        whileInView: {
                          opacity: 1,
                          transition: {
                            duration: 1.5,
                            ease: "easeInOut",
                            delay: 0.5,
                          },
                        },
                        viewport: { once: !0, amount: "some" },
                        className: ""
                          .concat(r.contentFont, " ")
                          .concat(V, " not-inverse"),
                        children: [
                          (0, s.jsx)("p", {
                            className: "text",
                            children: l("invitation.we.have.a.notice"),
                          }),
                          (0, s.jsx)("p", {
                            className: "text animate-lightpulse",
                            children: l("invitation.clic.to.enter"),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)(
                  c.E.div,
                  {
                    className:
                      "invitation absolute flex h-[70vh] w-[70vh] items-end justify-end rounded-3xl border-2 will-change-transform",
                    initial: {
                      opacity: 1,
                      translateX: "-50%",
                      translateY: "-50%",
                      rotate: "45deg",
                    },
                    viewport: { once: !0, amount: "some" },
                    exit: {
                      opacity: 1,
                      translateX: "-50%",
                      translateY: "-200%",
                      rotate: "45deg",
                      transition: { duration: 3, ease: "easeInOut" },
                    },
                    style: {
                      top: "10%",
                      left: "50%",
                      backgroundColor: p,
                      borderColor: h,
                      zIndex: 3,
                      boxShadow:
                        "7px 3px 14px 1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.15)",
                    },
                    children: [
                      (0, s.jsx)(c.E.div, {
                        initial: { opacity: 0 },
                        whileInView: {
                          opacity: 1,
                          transition: { duration: 1.5, ease: "easeInOut" },
                        },
                        viewport: { once: !0, amount: "some" },
                        className:
                          "absolute bottom-0 left-0 right-0 top-0 ".concat(
                            z[n],
                            " z-30 flex h-full w-full translate-x-1/4 translate-y-1/4 -rotate-45 flex-col items-center justify-start pt-16",
                          ),
                        style:
                          a.envelopeColor && x[a.envelopeColor]
                            ? { color: x[a.envelopeColor] }
                            : {},
                        children:
                          (null == a ? void 0 : a.envelopeNames) === !1
                            ? null
                            : (0, s.jsxs)(s.Fragment, {
                                children: [
                                  t.person1
                                    ? (0, s.jsx)("p", {
                                        className: ""
                                          .concat(r.titleFont, " ")
                                          .concat(r.coverSize || E),
                                        children: t.person1,
                                      })
                                    : null,
                                  t.person2
                                    ? (0, s.jsxs)(s.Fragment, {
                                        children: [
                                          (0, s.jsx)("p", {
                                            className:
                                              a.coverAmpersand ||
                                              "".concat(
                                                r.coverFont,
                                                " text-4xl",
                                              ),
                                            children: l("invitation.ampersand"),
                                          }),
                                          (0, s.jsx)("p", {
                                            className: ""
                                              .concat(r.titleFont, " ")
                                              .concat(r.coverSize || E),
                                            children: t.person2,
                                          }),
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "relative z-30 translate-x-1/4 translate-y-1/4 -rotate-45",
                        children: (0, s.jsx)(c.E.img, {
                          initial: { opacity: 0 },
                          whileInView: {
                            opacity: 1,
                            transition: { duration: 1.5, ease: "easeInOut" },
                          },
                          viewport: { once: !0, amount: "some" },
                          alt: "stamp",
                          src: "/templates/common/stamp.png",
                          className: "block w-28 object-cover",
                        }),
                      }),
                    ],
                  },
                  "corner-top",
                ),
              ],
            }),
          });
        };
      function P(e) {
        var t,
          i,
          c,
          d,
          m,
          v,
          u,
          x = e.t,
          p = e.data,
          h = e.blocks,
          f = e.theme,
          j = void 0 === f ? "olive" : f,
          y = e.customClasses,
          N = void 0 === y ? {} : y,
          I = e.CustomCover,
          C = void 0 === I ? void 0 : I,
          k = e.showCover,
          _ = e.nominativeData,
          S = void 0 === _ ? { invitees: [] } : _,
          z = e.fonts,
          A =
            void 0 === z
              ? {
                  coverFont: "",
                  titleFont: "",
                  subtitleFont: "",
                  contentFont: "",
                }
              : z,
          L = (0, l._)((0, o.useState)(void 0 === k || k), 2),
          D = L[0],
          H = L[1],
          q = (0, l._)((0, o.useState)(!1), 2),
          P = q[0],
          X = q[1],
          O = (0, l._)((0, o.useState)(!1), 2),
          R = O[0],
          W = O[1],
          Y = (0, o.useRef)(!1),
          G = (0, b.W)(),
          U = {
            olive: "broken-white",
            beige: "broken-white",
            mint: "broken-white",
            pastel: "broken-white",
          },
          J =
            null !==
              (u = { 0: E, 1: "text-4xl", 2: "text-4xl", 3: "text-3xl" }[
                (null == S
                  ? void 0
                  : null === (t = S.invitees) || void 0 === t
                    ? void 0
                    : t.length) || 0
              ]) && void 0 !== u
              ? u
              : "text-2xl";
        ((0, o.useEffect)(
          function () {
            G &&
              !Y.current &&
              ((Y.current = !0),
              (function (e) {
                var t = document.createElement("style");
                if (
                  ((t.id = "samsung-light-fix"),
                  (t.innerHTML =
                    "\n    .invitation {\n      background-image: url(\"data:image/svg+xml;utf8,      <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>      <rect width='100%' height='100%' fill='rgb(250,250,248)'/>      </svg>\");\n      background-repeat: repeat;\n    }\n    .inverse {\n      background-image: url(\"data:image/svg+xml;utf8,      <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>      <rect width='100%' height='100%' fill='"
                      .concat(
                        {
                          mint: "rgb(206, 218, 210)",
                          pastel: "rgb(155, 175, 189)",
                          olive: "rgb(203, 213, 213)",
                        }[e],
                        "'/>      </svg>\");        \n      background-repeat: repeat;\n      background-color: transparent !important;\n    }\n    ",
                      )
                      .concat(
                        {
                          mint: ".title { color: rgb(180, 192, 184) !important; filter: brightness(1) !important; }",
                          pastel: ".title {}",
                          olive:
                            ".title { color: rgb(180, 192, 184) !important; filter: brightness(0.8) !important; }",
                        }[e],
                        "\n    .not-inverse .text {\n      color: #78350f !important;\n      filter: brightness(0.1) contrast(1.2) saturate(1.2) !important;\n    }\n    .inverse .text {\n      color: #78350f !important;\n      filter: brightness(0.1) contrast(1.2) saturate(1.2) !important;\n    }\n    .icon {\n      width: 100px;\n      height: 100px;\n    }\n  ",
                      )),
                  "pastel" === e)
                ) {
                  var i = document.querySelectorAll('img[alt="divisor-top"]'),
                    n = document.querySelectorAll('img[alt="divisor-line"]');
                  (i.forEach(function (t) {
                    t.src = "/templates/classic/".concat(
                      e,
                      "/divisor-samsung.png",
                    );
                  }),
                    n.forEach(function (t) {
                      t.src = "/templates/classic/".concat(
                        e,
                        "/divisor-line-samsung.png",
                      );
                    }));
                }
                document.head.appendChild(t);
              })(j));
          },
          [G],
        ),
          (0, o.useEffect)(
            function () {
              if (D) document.querySelector("body").style.overflow = "hidden";
              else {
                var e, t;
                ((document.querySelector("body").style.overflow = "auto"),
                  (null === (e = p.invitation) || void 0 === e
                    ? void 0
                    : e.song) &&
                    (null === (t = document.getElementById("song")) ||
                      void 0 === t ||
                      t.play()));
              }
              var i = function () {
                (window.pageYOffset || document.documentElement.scrollTop) >
                  300 && X(!0);
              };
              return (
                window.addEventListener("scroll", i),
                function () {
                  window.removeEventListener("scroll", i);
                  var e = document.getElementById("song");
                  e && (e.pause(), (e.currentTime = 0));
                }
              );
            },
            [D],
          ),
          (0, o.useEffect)(function () {
            var e = function () {
                var e = document.getElementById("song");
                e &&
                  (document.hidden
                    ? e.pause()
                    : e.play().catch(function () {}));
              },
              t = function () {
                var e = document.getElementById("song");
                e && e.pause();
              };
            return (
              document.addEventListener("visibilitychange", e),
              window.addEventListener("blur", t),
              function () {
                (document.removeEventListener("visibilitychange", e),
                  window.removeEventListener("blur", t));
              }
            );
          }, []));
        var K = function () {
            H(!1);
          },
          Q = ["coupleName", "date", "mainPhoto"],
          $ = -1,
          ee = !1,
          et = {},
          ei = !0,
          en = 0,
          ea = !1,
          el = !1;
        return (0, s.jsxs)("main", {
          children: [
            (0, s.jsx)("div", {
              className: "fixed top-0 max-h-screen min-h-screen w-full",
              style: { background: M[j] },
            }),
            (0, s.jsxs)("section", {
              className: "".concat(
                D ? "overflow-hidden" : "",
                " relative z-20 mx-auto h-full min-h-screen w-full max-w-md overflow-x-clip sm:shadow-xl",
              ),
              children: [
                (0, s.jsxs)(r.M, {
                  children: [
                    D &&
                      !C &&
                      (null === (i = p.invitation) || void 0 === i
                        ? void 0
                        : i.envelope) !== !0 &&
                      (0, s.jsx)(Z, {
                        data: null == p ? void 0 : p.invitation,
                        onClick: K,
                        customClasses: N,
                        t: x,
                        theme: j,
                        fonts: A,
                        baseColor: N.envelopeBaseColor || U[j],
                      }),
                    D &&
                      !C &&
                      (null === (c = p.invitation) || void 0 === c
                        ? void 0
                        : c.envelope) === !0 &&
                      (0, s.jsx)(w.w, {
                        onClick: K,
                        baseColor: N.envelopeBaseColor || U[j],
                        fonts: (0, a._)((0, n._)({}, A), {
                          titleFont: A.titleFont,
                          titleSize: J,
                        }),
                        data: null == p ? void 0 : p.invitation,
                        nominativeData: null == p ? void 0 : p.nominativeData,
                        t: x,
                      }),
                    D &&
                      C &&
                      (0, s.jsx)(C, {
                        data: null == p ? void 0 : p.invitation,
                        onClick: K,
                        t: x,
                        theme: j,
                        fonts: A,
                        nominativeData: null == p ? void 0 : p.nominativeData,
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "invitation "
                    .concat(D ? "hidden" : "block", " ")
                    .concat(T[j], " ")
                    .concat(A.contentFont, " ")
                    .concat(
                      A.contentSize || V,
                      " relative w-full items-center justify-center overflow-hidden bg-white text-center dark:bg-white",
                    ),
                  children: [
                    h.map(function (e, t) {
                      var i = Q.includes(e.type);
                      (ee && $++,
                        i &&
                          !h.slice(t + 1).some(function (e) {
                            return Q.includes(e.type);
                          }) &&
                          ((ee = !0), ($ = 0)));
                      var a = e.renderer ? e.renderer : B[e.type] || B.default;
                      et[e.type] = (et[e.type] || 0) + 1;
                      var l = et[e.type],
                        o = "".concat(e.type, "-").concat(l),
                        c = h[t + 1] && "photoCarousel" === h[t + 1].type,
                        r = h[t + 1] && "assist" === h[t + 1].type,
                        d = ea ? $ % 2 != 0 : $ % 2 == 0,
                        m = t === h.length - 1;
                      c && (ea = !ea);
                      var v = void 0;
                      return (
                        0 === en && (v = ei ? "left" : "right"),
                        2 == ++en && ((en = 0), (ei = !ei)),
                        r && ((en = 0), (ei = !1), (v = void 0)),
                        m &&
                          ((el = "photoCarousel" !== e.type ? d : !d),
                          (v = null)),
                        (0, s.jsx)(
                          a,
                          (0, n._)(
                            {
                              i: l,
                              t: x,
                              data: p.invitation,
                              theme: j,
                              fonts: A,
                              index: t,
                              sortableIndex: ee ? $ : void 0,
                              styles: e.styles || {},
                              divisor: c ? null : v,
                              inverse: d,
                            },
                            e,
                          ),
                          o,
                        )
                      );
                    }),
                    (0, s.jsx)("div", {
                      className: "".concat(
                        el ? F[j] : "bg-transparent",
                        " relative -top-0.5 w-full overflow-hidden",
                      ),
                    }),
                    (null === (d = p.invitation) || void 0 === d
                      ? void 0
                      : d.song) &&
                      (0, s.jsxs)("audio", {
                        id: "song",
                        loop: !0,
                        controls: !0,
                        className: "invisible fixed",
                        children: [
                          (0, s.jsx)("source", {
                            src:
                              null === (m = p.invitation) || void 0 === m
                                ? void 0
                                : m.song,
                            type: "audio/mpeg",
                          }),
                          (0, s.jsx)("track", { kind: "captions" }),
                        ],
                      }),
                  ],
                }),
                (0, s.jsx)(g.Z, {
                  arrowLeft: !0,
                  firstStep: D,
                  hideArrow: P,
                  songMuted: R,
                  onClickSound: function () {
                    R
                      ? (document.getElementById("song").play(), W(!1))
                      : (document.getElementById("song").pause(), W(!0));
                  },
                  hasSong: !!(null === (v = p.invitation) || void 0 === v
                    ? void 0
                    : v.song),
                  t: x,
                }),
              ],
            }),
          ],
        });
      }
    },
    48572: function (e, t, i) {
      "use strict";
      var n = i(72253),
        a = i(14932),
        l = i(47702),
        s = i(24043),
        o = i(85893),
        c = i(67294),
        r = i(89382),
        d = i(77451),
        m = i(80312),
        v = i.n(m),
        u = function (e) {
          var t = (0, s._)((0, c.useState)(0), 2),
            i = t[0],
            n = t[1],
            a = (0, s._)((0, c.useState)([]), 2),
            l = a[0],
            o = a[1],
            r = (0, c.useCallback)(
              function (t) {
                e && e.scrollTo(t);
              },
              [e],
            ),
            d = (0, c.useCallback)(function (e) {
              o(e.scrollSnapList());
            }, []),
            m = (0, c.useCallback)(function (e) {
              n(e.selectedScrollSnap());
            }, []);
          return (
            (0, c.useEffect)(
              function () {
                e &&
                  (d(e),
                  m(e),
                  e.on("reInit", d).on("reInit", m).on("select", m));
              },
              [e, d, m],
            ),
            { selectedIndex: i, scrollSnaps: l, onDotButtonClick: r }
          );
        },
        x = function (e) {
          var t = e.children,
            i = (0, l._)(e, ["children"]);
          return (0, o.jsx)(
            "button",
            (0, a._)((0, n._)({ type: "button" }, i), { children: t }),
          );
        };
      t.Z = function (e) {
        var t = e.photos,
          i = void 0 === t ? [] : t,
          n = e.imgClassName,
          a = void 0 === n ? "relative w-full" : n,
          l = e.dots,
          c = e.dotsActiveClass,
          m = void 0 === c ? void 0 : c,
          p = e.options,
          h = (0, s._)(
            (0, r.Z)(void 0 === p ? { acive: !0, loop: !0 } : p, [
              (0, d.Z)({ delay: 2500, stopOnInteraction: !1 }),
            ]),
            2,
          ),
          g = h[0],
          f = h[1],
          w = u(f),
          b = w.selectedIndex,
          j = w.scrollSnaps,
          y = w.onDotButtonClick;
        return (0, o.jsxs)("div", {
          className: "relative",
          children: [
            (0, o.jsx)("div", {
              className: v().embla,
              ref: i.length > 1 ? g : null,
              children: (0, o.jsx)("div", {
                className: v().emblaContainer,
                children: i.map(function (e, t) {
                  return (0, o.jsx)(
                    "div",
                    {
                      className: "".concat(
                        v().emblaSlide,
                        " relative w-full overflow-hidden",
                      ),
                      children: (0, o.jsx)("img", {
                        src:
                          e.src ||
                          "/invitations/nuria-y-juan-test/nuria-y-juan (1).jpg",
                        className: a,
                        alt: "img",
                      }),
                    },
                    t,
                  );
                }),
              }),
            }),
            i.length > 1
              ? (0, o.jsx)("div", {
                  className:
                    "pointer-events-none absolute bottom-0 left-0 right-0 top-0 z-20 flex items-center",
                  children: (0, o.jsxs)("div", {
                    className: "mb-4 flex w-full justify-between px-2",
                    children: [
                      (0, o.jsx)("button", {
                        className:
                          "pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-md",
                        onClick: function () {
                          return null == f ? void 0 : f.scrollPrev();
                        },
                        children: (0, o.jsx)("img", {
                          className: "p-1.5 opacity-70",
                          width: 32,
                          height: 32,
                          src: "/svg/arrow-left.svg",
                          alt: "<",
                        }),
                      }),
                      (0, o.jsx)("button", {
                        className:
                          "pointer-events-auto flex h-8 w-8 animate-marquee-right items-center justify-center rounded-full border bg-white shadow-md",
                        onClick: function () {
                          return null == f ? void 0 : f.scrollNext();
                        },
                        children: (0, o.jsx)("img", {
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
            void 0 !== l && l && i.length > 1
              ? (0, o.jsx)("div", {
                  className: "mt-1 flex justify-center",
                  children: (0, o.jsx)("div", {
                    className: "flex flex-wrap items-center justify-end gap-1",
                    children: j.map(function (e, t) {
                      return (0, o.jsx)(
                        x,
                        {
                          onClick: function () {
                            return y(t);
                          },
                          className: "h-4 w-4",
                          children: (0, o.jsx)("div", {
                            className: "h-3 w-3 rounded-full ".concat(
                              t === b
                                ? "".concat(m || "bg-black/80")
                                : "scale-75 border-2 border-black bg-gray-400",
                            ),
                          }),
                        },
                        t,
                      );
                    }),
                  }),
                })
              : null,
          ],
        });
      };
    },
    43381: function (e, t, i) {
      "use strict";
      i.d(t, {
        G: function () {
          return l;
        },
      });
      var n = i(85893),
        a = i(67353),
        l = function (e) {
          var t = e.src,
            i = e.decoration,
            l = e.inverse,
            s = e.theme,
            o = e.className;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              "classic" === i &&
                (0, n.jsx)(a.E.img, {
                  className: "h-auto w-full rounded-3xl object-cover p-4",
                  initial: { opacity: 0, translateY: 30 },
                  whileInView: {
                    opacity: 1,
                    translateY: 0,
                    transition: { duration: 1.5, delay: 0.3 },
                  },
                  viewport: { once: !0 },
                  src: t,
                  alt: "img-top",
                }),
              "elegant" === i &&
                (0, n.jsx)(a.E.img, {
                  className: "h-auto w-full object-cover ".concat(o),
                  initial: { opacity: 0, x: -25 },
                  whileInView: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1.5, delay: 0.3 },
                  },
                  viewport: { once: !0, amount: "some" },
                  src: t,
                  alt: "img-top",
                }),
              "vintage" === i &&
                (0, n.jsxs)("div", {
                  className: "relative overflow-hidden",
                  children: [
                    (0, n.jsx)(a.E.img, {
                      className: "w-full object-cover px-2 py-3",
                      initial: { opacity: 0.5 },
                      whileInView: {
                        opacity: 1,
                        transition: { duration: 2.5 },
                      },
                      viewport: { once: !0, amount: 0.6 },
                      src: t,
                      alt: "img-top",
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute bottom-0 left-0 right-0 top-0 h-full w-full",
                      children: (0, n.jsx)("img", {
                        className: "h-full w-full object-fill",
                        src: l
                          ? "/templates/classic/".concat(
                              s,
                              "/vintage-frame.png",
                            )
                          : "/templates/common/vintage-frame-neutral.png",
                        alt: "border",
                      }),
                    }),
                  ],
                }),
              "aquarelle" === i &&
                (0, n.jsx)("div", {
                  className: "relative mx-auto overflow-hidden ".concat(
                    o || "w-[90%]",
                  ),
                  style: {
                    maskImage:
                      "url('/templates/common/aquarelle-frame-mask.png')",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "100% 100%",
                  },
                  children: (0, n.jsx)(a.E.img, {
                    initial: { filter: "blur(12px)", opacity: 0 },
                    whileInView: {
                      filter: "blur(0px)",
                      opacity: 1,
                      transition: { duration: 2.5 },
                    },
                    viewport: { once: !0, amount: "some" },
                    src: t,
                    alt: "place",
                    className: "h-full w-full",
                  }),
                }),
            ],
          });
        };
    },
    93996: function (e, t, i) {
      "use strict";
      i.d(t, {
        W: function () {
          return l;
        },
      });
      var n = i(24043),
        a = i(67294),
        l = function () {
          var e = (0, n._)((0, a.useState)(!1), 2),
            t = e[0],
            i = e[1];
          return (
            (0, a.useEffect)(function () {
              var e = /SamsungBrowser/i.test(navigator.userAgent),
                t =
                  window.matchMedia &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches;
              if (e && !t) {
                var a = new Image();
                ((a.onload = function () {
                  var e = document.createElement("canvas");
                  ((e.width = 1), (e.height = 1));
                  var t = e.getContext("2d", { willReadFrequently: !0 });
                  if (t) {
                    t.drawImage(a, 0, 0);
                    var l = t.getImageData(0, 0, 1, 1).data,
                      s = (0, n._)(l, 3),
                      o = s[0],
                      c = s[1],
                      r = s[2];
                    (o < 255 || c < 255 || r < 255) && i(!0);
                  }
                }),
                  (a.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IndoaXRlIi8+PC9zdmc+"));
              }
            }, []),
            t
          );
        };
    },
    80312: function (e) {
      e.exports = {
        embla: "carousel-album_embla__mfewC",
        emblaContainer: "carousel-album_emblaContainer__nBGH0",
        emblaSlide: "carousel-album_emblaSlide__GppdZ",
        embla__dots: "carousel-album_embla__dots__Ujt5y",
        embla__dot: "carousel-album_embla__dot__fR9BJ",
      };
    },
    82322: function () {},
  },
]);
