"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7513],
  {
    28621: function (e, t, n) {
      n.d(t, {
        w: function () {
          return i;
        },
      });
      var a = n(72253),
        s = n(85893),
        l = n(46354),
        r = n(94777);
      function i(e) {
        var t = e.children,
          n = e.as,
          i = e.className,
          o = e.duration,
          c = void 0 === o ? 1 : o,
          d = e.zDistance,
          u = void 0 === d ? 10 : d,
          m = e.xDistance,
          g = void 0 === m ? 2 : m,
          x = e.yDistance,
          p = void 0 === x ? -2 : x,
          h = e.spread,
          f = void 0 === h ? 1 : h,
          b = e.scaleDistance,
          v = void 0 === b ? 1.1 : b,
          y = e.rotateYDistance,
          j = void 0 === y ? 10 : y,
          k = e.transition,
          w = l.E.create(void 0 === n ? "p" : n);
        return (0, s.jsx)(w, {
          className: (0, r.cn)(
            "relative inline-block [perspective:500px]",
            "[--base-color:#a1a1aa] [--base-gradient-color:#000]",
            "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff]",
            i,
          ),
          style: { color: "var(--base-color)" },
          children: t.split("").map(function (e, n) {
            var i = (n * c * (1 / f)) / t.length;
            return (0, s.jsx)(
              l.E.span,
              {
                className: (0, r.cn)(
                  "inline-block whitespace-pre [transform-style:preserve-3d]",
                ),
                initial: {
                  translateZ: 0,
                  scale: 1,
                  rotateY: 0,
                  color: "var(--base-color)",
                },
                animate: {
                  translateZ: [0, u, 0],
                  translateX: [0, g, 0],
                  translateY: [0, p, 0],
                  scale: [1, v, 1],
                  rotateY: [0, j, 0],
                  color: [
                    "var(--base-color)",
                    "var(--base-gradient-color)",
                    "var(--base-color)",
                  ],
                },
                transition: (0, a._)(
                  {
                    duration: c,
                    repeat: 1 / 0,
                    repeatDelay: (0.05 * t.length) / f,
                    delay: i,
                    ease: "easeInOut",
                  },
                  k,
                ),
                children: e,
              },
              n,
            );
          }),
        });
      }
      n(67294);
    },
    87513: function (e, t, n) {
      n.d(t, {
        u: function () {
          return w;
        },
      });
      var a = n(11010),
        s = n(75766),
        l = n(72253),
        r = n(14932),
        i = n(24043),
        o = n(248),
        c = n(97582),
        d = n(85893),
        u = n(67294),
        m = n(89121),
        g = n(16241),
        x = n(23944),
        p = n(62190),
        h = n(40398),
        f = n(81510),
        b = n(67353),
        v = n(28621),
        y = n(30461),
        j = n(3662),
        k = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
        ];
      function w(e) {
        var t,
          n = e.admin,
          w = void 0 !== n && n,
          N = e.buttonChild,
          C = e.textClassName,
          _ = e.uid,
          S = e.assistForm,
          F = e.customData,
          L = e.fake,
          I = void 0 !== L && L,
          T = e.dateLimit,
          D = void 0 === T ? void 0 : T,
          O = e.resetOnSubmit,
          q = void 0 !== O && O,
          E = e.callback,
          M = void 0 === E ? void 0 : E,
          A = e.locale,
          H = void 0 === A ? void 0 : A,
          Z = e.group,
          Y = void 0 === Z ? null : Z,
          V = e.token,
          z = void 0 === V ? null : V,
          P = (0, y.$)(F.customLabels || {}, H),
          U = P.t,
          W = P.locale,
          K = function () {
            var e,
              t = { name: "", allergics: "" };
            return (
              Object.keys(
                (null == S
                  ? void 0
                  : null === (e = S.adultsCount) || void 0 === e
                    ? void 0
                    : e.relatedFields) || {},
              ).length > 0 &&
                Object.entries(S.adultsCount.relatedFields).map(function (e) {
                  var n = (0, i._)(e, 2),
                    a = n[0],
                    s = n[1],
                    l = s.options,
                    r = s.required,
                    o = s.type;
                  return (
                    r && l && l.length > 0
                      ? "select" === o && (t[a] = l[0])
                      : (t[a] = ""),
                    null
                  );
                }),
              t
            );
          },
          R = function () {
            var e,
              t = { name: "", allergics: "", age: "0" };
            return (
              Object.keys(
                (null == S
                  ? void 0
                  : null === (e = S.kidsCount) || void 0 === e
                    ? void 0
                    : e.relatedFields) || {},
              ).length > 0 &&
                Object.entries(S.kidsCount.relatedFields).map(function (e) {
                  var n = (0, i._)(e, 2),
                    a = n[0],
                    s = n[1],
                    l = s.options,
                    r = s.required,
                    o = s.type;
                  return (
                    r && l && l.length > 0
                      ? "select" === o && (t[a] = l[0])
                      : (t[a] = ""),
                    null
                  );
                }),
              t
            );
          },
          $ = function () {
            var e = {};
            return (
              Object.entries(S).map(function (t, n) {
                var a = (0, i._)(t, 2),
                  s = a[0];
                if ((a[1], "adultsCount" === s || "kidsCount" === s))
                  return null;
                e[s] = "";
              }),
              e
            );
          },
          B = (0, i._)((0, u.useState)(!1), 2),
          J = B[0],
          G = B[1],
          Q = (0, i._)((0, u.useState)(!1), 2),
          X = Q[0],
          ee = Q[1],
          et = (0, i._)((0, u.useState)(null), 2),
          en = et[0],
          ea = et[1],
          es = (0, i._)((0, u.useState)(!1), 2),
          el = es[0],
          er = es[1],
          ei = (0, i._)((0, u.useState)(""), 2),
          eo = ei[0],
          ec = ei[1],
          ed = (0, i._)((0, u.useState)(1), 2),
          eu = ed[0],
          em = ed[1],
          eg = (0, i._)((0, u.useState)([K()]), 2),
          ex = eg[0],
          ep = eg[1],
          eh = (0, i._)((0, u.useState)(0), 2),
          ef = eh[0],
          eb = eh[1],
          ev = (0, i._)((0, u.useState)([]), 2),
          ey = ev[0],
          ej = ev[1],
          ek = (0, i._)((0, u.useState)((0, l._)({}, $())), 2),
          ew = ek[0],
          eN = ek[1],
          eC = function (e) {
            var t = parseInt(e.target.value, 10);
            (em(t),
              t > ex.length
                ? ep(
                    (0, o._)(ex).concat(
                      (0, o._)(Array.from({ length: t - ex.length }, K)),
                    ),
                  )
                : ep(ex.slice(0, t)));
          },
          e_ = function (e, t, n) {
            var a = (0, o._)(ex);
            ((a[e][t] = n), ep(a));
          },
          eS = function (e) {
            var t = parseInt(e.target.value, 10);
            (eb(t),
              t > ey.length
                ? ej(
                    (0, o._)(ey).concat(
                      (0, o._)(Array.from({ length: t - ey.length }, R)),
                    ),
                  )
                : ej(ey.slice(0, t)));
          },
          eF = function (e, t, n) {
            var a = (0, o._)(ey);
            ((a[e][t] = n), ej(a));
          },
          eL = function (e) {
            var t = e.target,
              n = t.name,
              a = t.value;
            eN((0, r._)((0, l._)({}, ew), (0, s._)({}, n, a)));
          },
          eI = function (e) {
            (ea(e), ee(!0));
          },
          eT =
            ((t = (0, a._)(function (e) {
              var t, n, a, s, r, o, d;
              return (0, c.Jh)(this, function (c) {
                switch (c.label) {
                  case 0:
                    if ((e.preventDefault(), "OK" !== eo)) return [3, 1];
                    return (G(!1), [3, 9]);
                  case 1:
                    if ((er(!0), !I)) return [3, 2];
                    return (
                      setTimeout(function () {
                        (ec("OK"), er(!1));
                      }, 2e3),
                      [3, 9]
                    );
                  case 2:
                    return (
                      c.trys.push([2, 8, , 9]),
                      (t = { assist: ew.assist }),
                      (n = Object.entries(S)
                        .sort(function (e, t) {
                          var n = (0, i._)(e, 2)[1],
                            a = (0, i._)(t, 2)[1];
                          return n.order - a.order;
                        })
                        .map(function (e) {
                          return (0, i._)(e, 1)[0];
                        })),
                      S.adultsCount &&
                        ((t.adultsCount = ex.length),
                        (t.adults = ex),
                        -1 !== (a = n.indexOf("adultsCount")) &&
                          n.splice(a + 1, 0, "adults")),
                      S.kidsCount &&
                        ((t.kidsCount = ey.length),
                        (t.kids = ey),
                        -1 !== (s = n.indexOf("kidsCount")) &&
                          n.splice(s + 1, 0, "kids")),
                      Object.entries(S).map(function (e, n) {
                        var a = (0, i._)(e, 2),
                          s = a[0];
                        if ((a[1], "adultsCount" === s || "kidsCount" === s))
                          return null;
                        t[s] = ew[s] || "";
                      }),
                      [
                        4,
                        fetch("/api/guests/create", {
                          method: "POST",
                          body: JSON.stringify({
                            uid: _,
                            responses: t,
                            lang: H || W,
                            group: Y,
                            token: z,
                          }),
                          headers: { "Content-Type": "application/json" },
                        }),
                      ]
                    );
                  case 3:
                    if (201 !== (r = c.sent()).status) throw Error("Error 500");
                    if (!q) return [3, 6];
                    if (
                      (em(1),
                      ep([K()]),
                      eb(0),
                      ej([]),
                      eN((0, l._)({}, $())),
                      er(!1),
                      G(!1),
                      !M)
                    )
                      return [3, 5];
                    return [4, r.json()];
                  case 4:
                    ((o = c.sent()),
                      M({ responses: t, rowIdx: o.guestId }),
                      (c.label = 5));
                  case 5:
                    return [3, 7];
                  case 6:
                    (ec("OK"), er(!1), (c.label = 7));
                  case 7:
                    return [3, 9];
                  case 8:
                    return (
                      (d = c.sent()),
                      er(!1),
                      alert(U("assist.dialog.error.sending")),
                      console.error("Error submitting form:", d),
                      [3, 9]
                    );
                  case 9:
                    return [2];
                }
              });
            })),
            function (e) {
              return t.apply(this, arguments);
            }),
          eD = function (e, t) {
            var n,
              a =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              s =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              l =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              r = !0 === s,
              o =
                (null == a ? void 0 : a.length) <= 2
                  ? "".concat(
                      0 === t
                        ? U("assist.dialog.adults.name.label")
                        : U(
                            "assist.dialog.adults.companion.name.label",
                            "Acompa\xf1ante",
                          ),
                    )
                  : ""
                      .concat(U("assist.dialog.adults.name.label"), " ")
                      .concat(t + 1);
            return (
              l &&
                (o =
                  0 === t
                    ? U("assist.dialog.adults.name.label")
                    : ""
                        .concat(
                          U(
                            "assist.dialog.adults.companion.name.label",
                            "Acompa\xf1ante",
                          ),
                          " ",
                        )
                        .concat(t)),
              (0, d.jsxs)(
                "div",
                {
                  className:
                    "mt-6 grid grid-cols-1 gap-2 border-t border-dashed border-gray-300 md:grid-cols-7 md:items-end",
                  children: [
                    (0, d.jsxs)("div", {
                      className: r
                        ? "col-span-1 md:col-span-7"
                        : "col-span-1 md:col-span-4",
                      children: [
                        (0, d.jsx)("label", {
                          className: "block text-lg font-semibold",
                          children: o,
                        }),
                        (0, d.jsx)("input", {
                          type: "text",
                          name: "adults.".concat(t, ".name"),
                          onChange: function (e) {
                            return e_(t, "name", e.target.value);
                          },
                          value: e.name,
                          className:
                            "form-input mt-1 block w-full rounded-md border border-gray-400 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                          pattern: ".*\\S.*",
                          title: U("assist.dialog.name.not.empty"),
                          placeholder: U(
                            "assist.dialog.adults.name.placeholder",
                            null,
                          ),
                          required: !0,
                          maxLength: 90,
                        }),
                      ],
                    }),
                    (0, d.jsxs)("div", {
                      className: r ? "hidden" : "col-span-1 md:col-span-3",
                      children: [
                        (0, d.jsx)("label", {
                          className:
                            (null == S
                              ? void 0
                              : null === (n = S.adultsCount) || void 0 === n
                                ? void 0
                                : n.inputAllergicsLabelClassName) ||
                            "block text-lg font-semibold",
                          children: "".concat(
                            U("assist.dialog.adults.allergics.label"),
                          ),
                        }),
                        (0, d.jsx)("input", {
                          type: "text",
                          name: "adults.".concat(t, ".allergics"),
                          onChange: function (e) {
                            return e_(t, "allergics", e.target.value);
                          },
                          value: e.allergics,
                          placeholder: U("assist.dialog.placeholder.allergics"),
                          className:
                            "form-input mt-1 block w-full rounded-md border border-gray-400 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                          maxLength: 90,
                        }),
                      ],
                    }),
                    S.adultsCount.relatedFields &&
                      Object.entries(S.adultsCount.relatedFields).map(
                        function (n) {
                          var a = (0, i._)(n, 2),
                            s = a[0],
                            l = a[1],
                            r = l.type,
                            o = l.options,
                            c = l.required,
                            u = l.className,
                            m = l.inputClassName,
                            g = "assist.dialog.adults.".concat(
                              (0, j.Lf)(s),
                              ".label",
                            ),
                            p = U(
                              "assist.dialog.adults.".concat(
                                (0, j.Lf)(s),
                                ".helper.label",
                              ),
                              null,
                            ),
                            h = U(
                              "assist.dialog.adults.".concat(
                                (0, j.Lf)(s),
                                ".pre.options.label",
                              ),
                              null,
                            ),
                            f = U(
                              "assist.dialog.adults.".concat(
                                (0, j.Lf)(s),
                                ".dialog.button",
                              ),
                              null,
                            ),
                            b = "adults.".concat(t, ".").concat(s);
                          return (0, d.jsxs)(
                            "div",
                            {
                              className: u || "col-span-1 md:col-span-7",
                              children: [
                                "radio" === r &&
                                  (0, d.jsxs)(d.Fragment, {
                                    children: [
                                      (0, d.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [
                                          (0, d.jsx)("label", {
                                            className:
                                              "block text-lg font-semibold",
                                            children: U(g),
                                          }),
                                          f
                                            ? (0, d.jsxs)("button", {
                                                type: "button",
                                                className:
                                                  "mb-2 flex items-center gap-1",
                                                onClick: function () {
                                                  return eI(
                                                    "adults.".concat(
                                                      (0, j.Lf)(s),
                                                    ),
                                                  );
                                                },
                                                children: [
                                                  (0, d.jsx)(x.Z, {
                                                    strokeWidth: 1.5,
                                                    className:
                                                      "h-5 w-5 animate-pulsetext",
                                                  }),
                                                  (0, d.jsx)("span", {
                                                    className: "underline",
                                                    children: f,
                                                  }),
                                                ],
                                              })
                                            : null,
                                        ],
                                      }),
                                      p &&
                                        (0, d.jsx)("div", {
                                          dangerouslySetInnerHTML: {
                                            __html: p,
                                          },
                                          className:
                                            "mb-2 text-sm text-gray-800",
                                        }),
                                      h &&
                                        (0, d.jsx)("div", {
                                          className:
                                            "block py-2 text-lg font-semibold",
                                          dangerouslySetInnerHTML: {
                                            __html: h,
                                          },
                                        }),
                                      (0, d.jsx)("div", {
                                        className:
                                          m ||
                                          (o.length > 2
                                            ? "flex flex-col gap-1"
                                            : "flex gap-4"),
                                        children: o.map(function (n, a) {
                                          return (0, d.jsxs)(
                                            "label",
                                            {
                                              className:
                                                "inline-flex items-center",
                                              children: [
                                                (0, d.jsx)("input", {
                                                  type: "radio",
                                                  name: b,
                                                  checked: e[s] === n,
                                                  onChange: function (e) {
                                                    return e_(
                                                      t,
                                                      s,
                                                      e.target.value,
                                                    );
                                                  },
                                                  value: n,
                                                  className:
                                                    "form-radio h-4 w-4 border-gray-300 text-black accent-black focus:ring-black",
                                                  required: c,
                                                }),
                                                (0, d.jsx)("span", {
                                                  className: "ml-2",
                                                  children: U(
                                                    "assist.dialog.adults."
                                                      .concat(
                                                        (0, j.Lf)(s),
                                                        ".option.",
                                                      )
                                                      .concat(a + 1),
                                                  ),
                                                }),
                                              ],
                                            },
                                            a,
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                                "select" === r &&
                                  (0, d.jsxs)(d.Fragment, {
                                    children: [
                                      (0, d.jsx)("label", {
                                        className:
                                          "block text-lg font-semibold",
                                        children: U(g),
                                      }),
                                      (0, d.jsx)("select", {
                                        name: b,
                                        onChange: function (e) {
                                          return e_(t, s, e.target.value);
                                        },
                                        value: e[s],
                                        className:
                                          "form-select mt-1 block h-[38px] ".concat(
                                            m || "w-full min-w-full max-w-xs",
                                            " rounded-md border border-gray-400 bg-white py-1.5 text-black ring-1 ring-inset ring-white focus:ring-2 focus:ring-black sm:text-sm sm:leading-6",
                                          ),
                                        required: c,
                                        children: o.map(function (e, t) {
                                          return (0, d.jsx)(
                                            "option",
                                            {
                                              value: e,
                                              children: U(
                                                "assist.dialog.adults."
                                                  .concat(
                                                    (0, j.Lf)(s),
                                                    ".option.",
                                                  )
                                                  .concat(t + 1),
                                              ),
                                            },
                                            t,
                                          );
                                        }),
                                      }),
                                    ],
                                  }),
                                "string" === r &&
                                  (0, d.jsxs)(d.Fragment, {
                                    children: [
                                      (0, d.jsx)("label", {
                                        className:
                                          "block text-lg font-semibold",
                                        children: U(g),
                                      }),
                                      (0, d.jsx)("input", {
                                        type: "text",
                                        name: b,
                                        onChange: function (e) {
                                          return e_(t, s, e.target.value);
                                        },
                                        value: e[s],
                                        placeholder: c
                                          ? ""
                                          : U(
                                              "assist.dialog.placeholder.optional",
                                            ),
                                        className:
                                          "form-input mt-1 block w-full rounded-md border border-gray-400 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                                        required: c,
                                      }),
                                    ],
                                  }),
                              ],
                            },
                            b,
                          );
                        },
                      ),
                  ],
                },
                "adult" + t,
              )
            );
          },
          eO = function (e, t) {
            var n,
              a,
              s =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              l = !0 === s,
              r =
                (null == S
                  ? void 0
                  : null === (n = S.kidsCount) || void 0 === n
                    ? void 0
                    : n.ages) || k;
            return (0, d.jsxs)(
              "div",
              {
                className:
                  "mt-6 grid grid-cols-1 gap-2 border-t border-dashed border-gray-300 md:grid-cols-7 md:items-end",
                children: [
                  (0, d.jsxs)("div", {
                    className: l
                      ? "col-span-1 md:col-span-6"
                      : "col-span-1 md:col-span-3",
                    children: [
                      (0, d.jsx)("label", {
                        className: "block text-lg font-semibold",
                        children: ""
                          .concat(U("assist.dialog.kids.name.label"), " ")
                          .concat(t + 1),
                      }),
                      (0, d.jsx)("input", {
                        type: "text",
                        name: "kids.".concat(t, ".name"),
                        onChange: function (e) {
                          return eF(t, "name", e.target.value);
                        },
                        value: e.name,
                        className:
                          "form-input mt-1 block w-full rounded-md border border-gray-400 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                        pattern: ".*\\S.*",
                        title: U("assist.dialog.name.not.empty"),
                        required: !0,
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: "col-span-1 md:col-span-1",
                    children: [
                      (0, d.jsx)("label", {
                        className: "block text-lg font-semibold",
                        children: U("assist.dialog.kids.age.label"),
                      }),
                      (0, d.jsx)("select", {
                        name: "kids.".concat(t, ".age"),
                        onChange: function (e) {
                          return eF(t, "age", e.target.value);
                        },
                        value: e.age,
                        className:
                          "form-select mt-1 block h-[38px] w-full min-w-full max-w-xs rounded-md border border-gray-400 bg-white py-1.5 text-black ring-1 ring-inset ring-white focus:ring-2 focus:ring-black sm:text-sm sm:leading-6",
                        required: !0,
                        children: r.map(function (e, t) {
                          return (0, d.jsx)(
                            "option",
                            {
                              value: e,
                              children: U(
                                "assist.dialog.kids.age.option.".concat(t + 1),
                              ),
                            },
                            "age.".concat(e),
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)("div", {
                    className: l ? "hidden" : "col-span-1 md:col-span-3",
                    children: [
                      (0, d.jsx)("label", {
                        className:
                          (null == S
                            ? void 0
                            : null === (a = S.kidsCount) || void 0 === a
                              ? void 0
                              : a.inputAllergicsLabelClassName) ||
                          "block text-lg font-semibold",
                        children: "".concat(
                          U("assist.dialog.kids.allergics.label"),
                        ),
                      }),
                      (0, d.jsx)("input", {
                        type: "text",
                        name: "kids.".concat(t, ".allergics"),
                        onChange: function (e) {
                          return eF(t, "allergics", e.target.value);
                        },
                        value: e.allergics,
                        placeholder: U("assist.dialog.placeholder.allergics"),
                        className:
                          "form-input mt-1 block w-full rounded-md border border-gray-400 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                      }),
                    ],
                  }),
                  S.kidsCount.relatedFields &&
                    Object.entries(S.kidsCount.relatedFields).map(function (n) {
                      var a = (0, i._)(n, 2),
                        s = a[0],
                        l = a[1],
                        r = l.type,
                        o = l.options,
                        c = l.required,
                        u = l.className,
                        m = l.inputClassName,
                        g = "assist.dialog.kids.".concat(
                          (0, j.Lf)(s),
                          ".label",
                        ),
                        x = "kids.".concat(t, ".").concat(s);
                      return (0, d.jsxs)(
                        "div",
                        {
                          className: u || "col-span-1 md:col-span-4",
                          children: [
                            "radio" === r &&
                              (0, d.jsxs)(d.Fragment, {
                                children: [
                                  (0, d.jsx)("label", {
                                    className: "block text-lg font-semibold",
                                    children: U(g),
                                  }),
                                  (0, d.jsx)("div", {
                                    className:
                                      m ||
                                      (o.length > 2
                                        ? "flex flex-col gap-1"
                                        : "flex gap-4"),
                                    children: o.map(function (n, a) {
                                      return (0, d.jsxs)(
                                        "label",
                                        {
                                          className: "inline-flex items-center",
                                          children: [
                                            (0, d.jsx)("input", {
                                              type: "radio",
                                              name: x,
                                              checked: e[s] === n,
                                              onChange: function (e) {
                                                return eF(t, s, e.target.value);
                                              },
                                              value: n,
                                              className:
                                                "form-radio h-4 w-4 border-gray-300 text-black accent-black focus:ring-black",
                                              required: c,
                                            }),
                                            (0, d.jsx)("span", {
                                              className: "ml-2",
                                              children: U(
                                                "assist.dialog.kids."
                                                  .concat(
                                                    (0, j.Lf)(s),
                                                    ".option.",
                                                  )
                                                  .concat(a + 1),
                                              ),
                                            }),
                                          ],
                                        },
                                        a,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            "select" === r &&
                              (0, d.jsxs)(d.Fragment, {
                                children: [
                                  (0, d.jsx)("label", {
                                    className: "block text-lg font-semibold",
                                    children: U(g),
                                  }),
                                  (0, d.jsx)("select", {
                                    name: x,
                                    onChange: function (e) {
                                      return eF(t, s, e.target.value);
                                    },
                                    value: e[s],
                                    className:
                                      "form-select mt-1 block h-[38px] w-full min-w-full max-w-xs rounded-md border border-gray-400 bg-white py-1.5 text-black ring-1 ring-inset ring-white focus:ring-2 focus:ring-black sm:text-sm sm:leading-6",
                                    required: c,
                                    children: o.map(function (e, t) {
                                      return (0, d.jsx)(
                                        "option",
                                        {
                                          value: e,
                                          children: U(
                                            "assist.dialog.kids."
                                              .concat((0, j.Lf)(s), ".option.")
                                              .concat(t + 1),
                                          ),
                                        },
                                        t,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            "string" === r &&
                              (0, d.jsxs)(d.Fragment, {
                                children: [
                                  (0, d.jsx)("label", {
                                    className: "block text-lg font-semibold",
                                    children: U(g),
                                  }),
                                  (0, d.jsx)("input", {
                                    type: "text",
                                    name: x,
                                    onChange: function (e) {
                                      return eF(t, s, e.target.value);
                                    },
                                    value: e[s],
                                    placeholder: c
                                      ? ""
                                      : U("assist.dialog.placeholder.optional"),
                                    className:
                                      "form-input mt-1 block w-full rounded-md border border-gray-400 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                                    required: c,
                                  }),
                                ],
                              }),
                          ],
                        },
                        x,
                      );
                    }),
                ],
              },
              "kid" + t,
            );
          },
          eq = U("assist.dialog.subtitle", null);
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)("button", {
              type: "button",
              onClick: function () {
                if (D) {
                  if (new Date() <= new Date(D)) G(!0);
                  else {
                    alert(U("assist.dialog.date.limit.expired"));
                    return;
                  }
                } else G(!0);
              },
              children: N,
            }),
            (0, d.jsx)(m.u, {
              show: J,
              as: u.Fragment,
              children: (0, d.jsxs)(g.V, {
                onClose: function () {
                  return G(!0);
                },
                className: "relative z-40",
                children: [
                  (0, d.jsx)(m.u.Child, {
                    as: u.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0, d.jsx)("div", {
                      className:
                        "inset-0-oldbrowsers fixed inset-0 bg-black/30",
                    }),
                  }),
                  (0, d.jsx)(m.u.Child, {
                    as: u.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, d.jsx)("div", {
                      className:
                        "inset-0-oldbrowsers fixed inset-0 w-screen overflow-y-auto p-4",
                      children: (0, d.jsxs)(g.V.Panel, {
                        className: "".concat(
                          C,
                          " mx-auto min-w-full rounded bg-white p-4 pt-2 md:min-w-[70%] lg:min-w-[50%] lg:max-w-screen-lg",
                        ),
                        children: [
                          (0, d.jsx)("div", {
                            className: "sticky -top-4 bg-white",
                            children: (0, d.jsxs)("div", {
                              className:
                                "mb-2 flex justify-between border-b pb-2 pt-1",
                              children: [
                                (0, d.jsx)("span", {
                                  children: U("assist.dialog.title"),
                                }),
                                (0, d.jsx)("button", {
                                  className: el
                                    ? "pointer-events-none opacity-70"
                                    : "",
                                  onClick: function () {
                                    return G(!1);
                                  },
                                  children: (0, d.jsx)(p.Z, {
                                    className:
                                      "h-5 w-5 text-black hover:scale-110",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          eq
                            ? (0, d.jsx)("div", {
                                dangerouslySetInnerHTML: { __html: eq },
                                className: "",
                              })
                            : null,
                          "OK" !== eo
                            ? (0, d.jsxs)("form", {
                                onSubmit: function (e) {
                                  return eT(e);
                                },
                                children: [
                                  Object.entries(S).map(function (e, t) {
                                    var n = (0, i._)(e, 2),
                                      a = n[0],
                                      s = n[1],
                                      l = s.type,
                                      r = s.options,
                                      o = s.required,
                                      c = s.hidden,
                                      u = s.hiddenAllergics,
                                      m = s.companions,
                                      g = s.className,
                                      x = c && !0 !== w,
                                      p = "assist.dialog.".concat(
                                        (0, j.Lf)(a),
                                        ".label",
                                      ),
                                      h = U(
                                        "assist.dialog.".concat(
                                          (0, j.Lf)(a),
                                          ".helper.label",
                                        ),
                                        null,
                                      );
                                    if ("adultsCount" === a) {
                                      var f = r.length > 1;
                                      return (0, d.jsxs)(
                                        "div",
                                        {
                                          className: "flex flex-col ".concat(
                                            t > 0 && f ? "mt-8" : "mt-0",
                                          ),
                                          children: [
                                            (0, d.jsxs)("div", {
                                              className: f ? "" : "hidden",
                                              children: [
                                                (0, d.jsx)("label", {
                                                  className:
                                                    "block text-lg font-semibold",
                                                  children: U(p),
                                                }),
                                                (0, d.jsx)("select", {
                                                  name: a,
                                                  value: String(eu),
                                                  onChange: eC,
                                                  className:
                                                    "form-select mt-1 block w-12 max-w-xs rounded-md border border-gray-400 bg-white py-1.5 text-black ring-1 ring-inset ring-white focus:ring-2 focus:ring-black sm:text-sm sm:leading-6",
                                                  required: o,
                                                  children: r.map(
                                                    function (e, t) {
                                                      return (0, d.jsx)(
                                                        "option",
                                                        {
                                                          value: e,
                                                          children: e,
                                                        },
                                                        t,
                                                      );
                                                    },
                                                  ),
                                                }),
                                              ],
                                            }),
                                            ex.map(function (e, t) {
                                              return eD(e, t, r, u, m);
                                            }),
                                          ],
                                        },
                                        a,
                                      );
                                    }
                                    return "kidsCount" === a
                                      ? 1 === s.options.length &&
                                        "0" === s.options[0]
                                        ? null
                                        : (0, d.jsxs)(
                                            "div",
                                            {
                                              className: "flex flex-col "
                                                .concat(
                                                  t > 0 ? "mt-8" : "mt-0",
                                                  " ",
                                                )
                                                .concat(x ? "hidden" : ""),
                                              children: [
                                                (0, d.jsxs)("div", {
                                                  children: [
                                                    (0, d.jsx)("label", {
                                                      className:
                                                        "block text-lg font-semibold",
                                                      children: U(p),
                                                    }),
                                                    h &&
                                                      (0, d.jsx)("div", {
                                                        dangerouslySetInnerHTML:
                                                          { __html: h },
                                                        className:
                                                          "mb-2 text-sm text-gray-800",
                                                      }),
                                                    (0, d.jsx)("select", {
                                                      name: a,
                                                      value: String(ef),
                                                      onChange: eS,
                                                      className:
                                                        "form-select mt-1 block w-12 max-w-xs rounded-md border border-gray-400 bg-white py-1.5 text-black ring-1 ring-inset ring-white focus:ring-2 focus:ring-black sm:text-sm sm:leading-6",
                                                      required: o,
                                                      children: r.map(
                                                        function (e, t) {
                                                          return (0, d.jsx)(
                                                            "option",
                                                            {
                                                              value: e,
                                                              children: e,
                                                            },
                                                            t,
                                                          );
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                ey.map(function (e, t) {
                                                  return eO(e, t, u);
                                                }),
                                              ],
                                            },
                                            a,
                                          )
                                      : (0, d.jsxs)(
                                          "div",
                                          {
                                            className:
                                              "mt-8 flex flex-col ".concat(
                                                x ? "hidden" : "",
                                              ),
                                            children: [
                                              "radio" === l &&
                                                (0, d.jsxs)("div", {
                                                  children: [
                                                    (0, d.jsx)("label", {
                                                      className:
                                                        "block text-lg font-semibold",
                                                      children: U(p),
                                                    }),
                                                    h &&
                                                      (0, d.jsx)("div", {
                                                        dangerouslySetInnerHTML:
                                                          { __html: h },
                                                        className:
                                                          "mb-2 text-sm text-gray-800",
                                                      }),
                                                    (0, d.jsx)("div", {
                                                      className:
                                                        g ||
                                                        (r.length > 2
                                                          ? "flex flex-col gap-2"
                                                          : "flex gap-4"),
                                                      children: r.map(
                                                        function (e, t) {
                                                          return (0, d.jsxs)(
                                                            "label",
                                                            {
                                                              className:
                                                                "inline-flex items-center",
                                                              children: [
                                                                (0, d.jsx)(
                                                                  "input",
                                                                  {
                                                                    type: "radio",
                                                                    name: a,
                                                                    value: e,
                                                                    checked:
                                                                      ew[a] ===
                                                                      e,
                                                                    onChange:
                                                                      eL,
                                                                    className:
                                                                      "form-radio h-4 w-4 border-gray-300 text-black accent-black focus:ring-black",
                                                                    required: o,
                                                                  },
                                                                ),
                                                                (0, d.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "ml-2 flex-1",
                                                                    children: U(
                                                                      "assist.dialog."
                                                                        .concat(
                                                                          (0,
                                                                          j.Lf)(
                                                                            a,
                                                                          ),
                                                                          ".option.",
                                                                        )
                                                                        .concat(
                                                                          t + 1,
                                                                        ),
                                                                    ),
                                                                  },
                                                                ),
                                                              ],
                                                            },
                                                            t,
                                                          );
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              "select" === l &&
                                                (0, d.jsxs)("div", {
                                                  children: [
                                                    (0, d.jsx)("label", {
                                                      className:
                                                        "block text-lg font-semibold",
                                                      children: U(p),
                                                    }),
                                                    h &&
                                                      (0, d.jsx)("div", {
                                                        dangerouslySetInnerHTML:
                                                          { __html: h },
                                                        className:
                                                          "mb-2 text-sm text-gray-800",
                                                      }),
                                                    (0, d.jsx)("select", {
                                                      name: a,
                                                      value: ew[a],
                                                      onChange: eL,
                                                      className:
                                                        "form-select mt-1 block h-[38px] ".concat(
                                                          g ||
                                                            "w-full min-w-full max-w-xs",
                                                          " rounded-md border border-gray-400 bg-white py-1.5 text-black ring-1 ring-inset ring-white focus:ring-2 focus:ring-black sm:text-sm sm:leading-6",
                                                        ),
                                                      required: o,
                                                      children: r.map(
                                                        function (e, t) {
                                                          return (0, d.jsx)(
                                                            "option",
                                                            {
                                                              value: e,
                                                              children: e,
                                                            },
                                                            t,
                                                          );
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              "string" === l &&
                                                (0, d.jsxs)("div", {
                                                  children: [
                                                    (0, d.jsx)("label", {
                                                      className:
                                                        "block text-lg font-semibold",
                                                      children: U(p),
                                                    }),
                                                    h &&
                                                      (0, d.jsx)("div", {
                                                        dangerouslySetInnerHTML:
                                                          { __html: h },
                                                        className:
                                                          "mb-2 text-sm text-gray-800",
                                                      }),
                                                    (0, d.jsx)("input", {
                                                      type: "text",
                                                      name: a,
                                                      value: ew[a],
                                                      onChange: eL,
                                                      placeholder: o
                                                        ? ""
                                                        : U(
                                                            "assist.dialog.placeholder.optional",
                                                          ),
                                                      className:
                                                        "form-input mt-1 block w-full rounded-md border border-gray-400 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                                                      required: o,
                                                    }),
                                                  ],
                                                }),
                                              "textarea" === l &&
                                                (0, d.jsxs)("div", {
                                                  children: [
                                                    (0, d.jsx)("label", {
                                                      className:
                                                        "block text-lg font-semibold",
                                                      children: U(p),
                                                    }),
                                                    h &&
                                                      (0, d.jsx)("div", {
                                                        dangerouslySetInnerHTML:
                                                          { __html: h },
                                                        className:
                                                          "mb-2 text-sm text-gray-800",
                                                      }),
                                                    (0, d.jsx)("textarea", {
                                                      type: "text",
                                                      name: a,
                                                      value: ew[a],
                                                      onChange: eL,
                                                      placeholder: o
                                                        ? ""
                                                        : U(
                                                            "assist.dialog.placeholder.optional",
                                                          ),
                                                      className:
                                                        "form-input mt-1 block w-full rounded-md border border-gray-400 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6",
                                                      required: o,
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          },
                                          a,
                                        );
                                  }),
                                  (0, d.jsxs)("button", {
                                    type: "submit",
                                    disabled: el,
                                    className:
                                      "mt-4 flex items-center rounded-lg border border-[#9aa5a5] bg-black px-4 text-white ".concat(
                                        el
                                          ? "pointer-events-none opacity-70"
                                          : "",
                                      ),
                                    children: [
                                      (0, d.jsx)(h.Z, {
                                        strokeWidth: 1.5,
                                        className:
                                          "h-5 w-5 animate-marquee-right",
                                      }),
                                      el
                                        ? (0, d.jsx)(v.w, {
                                            className:
                                              "px-3 py-4 [--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]",
                                            duration: 1,
                                            spread: 1,
                                            zDistance: 1,
                                            scaleDistance: 1.1,
                                            rotateYDistance: 20,
                                            children: U(
                                              "assist.dialog.sending",
                                            ),
                                          })
                                        : (0, d.jsx)("span", {
                                            className: "px-3 py-4",
                                            children: U("assist.dialog.submit"),
                                          }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, d.jsxs)("button", {
                                type: "button",
                                onClick: function () {
                                  return G(!1);
                                },
                                id: "close-btn",
                                className:
                                  "mt-4 flex flex-col items-center gap-2",
                                children: [
                                  (0, d.jsxs)(b.E.div, {
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                      },
                                    },
                                    viewport: { once: !0, amount: "some" },
                                    className:
                                      "flex flex-col rounded-lg border border-green-200 bg-green-100 px-4 py-1.5",
                                    children: [
                                      (0, d.jsxs)("div", {
                                        className:
                                          "flex items-center justify-start gap-2",
                                        children: [
                                          (0, d.jsx)(f.Z, {
                                            strokeWidth: 1.5,
                                            className: "h-5 w-5",
                                          }),
                                          (0, d.jsx)("span", {
                                            className: "text-sm",
                                            children: U("assist.dialog.thanks"),
                                          }),
                                        ],
                                      }),
                                      (0, d.jsx)("p", {
                                        className: "text-start text-sm",
                                        children: U(
                                          "assist.dialog.send.success",
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, d.jsxs)(b.E.div, {
                                    initial: { opacity: 0, y: 20 },
                                    whileInView: {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 1,
                                      },
                                    },
                                    viewport: { once: !0, amount: "some" },
                                    className:
                                      "flex items-center justify-start gap-2 self-start rounded-lg border-[#9aa5a5] bg-black px-4 py-1 text-white",
                                    children: [
                                      (0, d.jsx)("span", {
                                        className: "animate-pulsetext",
                                        children: U(
                                          "assist.dialog.clic.to.close",
                                        ),
                                      }),
                                      (0, d.jsx)(p.Z, {
                                        className: "h-5 w-5",
                                        strokeWidth: 2,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, d.jsx)(m.u, {
              show: X,
              as: u.Fragment,
              children: (0, d.jsxs)(g.V, {
                onClose: function () {
                  return ee(!1);
                },
                className: "relative z-50",
                children: [
                  (0, d.jsx)(m.u.Child, {
                    as: u.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0, d.jsx)("div", {
                      className:
                        "inset-0-oldbrowsers fixed inset-0 bg-black/30",
                    }),
                  }),
                  (0, d.jsx)(m.u.Child, {
                    as: u.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, d.jsx)("div", {
                      className:
                        "inset-0-oldbrowsers fixed inset-0 flex w-screen items-center justify-center overflow-y-auto p-4",
                      children: (0, d.jsxs)(g.V.Panel, {
                        className: "".concat(
                          C,
                          " mx-auto min-w-full rounded bg-white p-4 pt-2 md:min-w-[70%] lg:min-w-[50%] lg:max-w-screen-lg",
                        ),
                        children: [
                          (0, d.jsx)("div", {
                            className: "sticky -top-4 bg-white",
                            children: (0, d.jsxs)("div", {
                              className:
                                "mb-2 flex justify-between border-b pb-2 pt-1",
                              children: [
                                (0, d.jsx)("span", {
                                  children: U(
                                    "assist.dialog.".concat(en, ".title"),
                                  ),
                                }),
                                (0, d.jsx)("button", {
                                  type: "button",
                                  onClick: function () {
                                    return ee(!1);
                                  },
                                  children: (0, d.jsx)(p.Z, {
                                    className:
                                      "h-5 w-5 text-black hover:scale-110",
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, d.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: "".concat(
                                U("assist.dialog.".concat(en, ".text")),
                              ),
                            },
                            className: "max-h-[70vh] overflow-y-auto",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    3662: function (e, t, n) {
      n.d(t, {
        Gp: function () {
          return c;
        },
        HL: function () {
          return p;
        },
        Lf: function () {
          return r;
        },
        Qm: function () {
          return i;
        },
        dD: function () {
          return o;
        },
        mg: function () {
          return g;
        },
        nY: function () {
          return m;
        },
        p6: function () {
          return d;
        },
        tb: function () {
          return u;
        },
        v: function () {
          return x;
        },
      });
      var a = n(24043),
        s = n(85893),
        l = n(67294),
        r = function (e) {
          return e.replace(/([a-z])([A-Z])/g, "$1.$2").toLowerCase();
        },
        i = function (e) {
          try {
            if (!e) return "";
            return e
              .trim()
              .split(/\s+/)
              .filter(function (e) {
                return e.length > 0;
              })
              .map(function (e) {
                return e[0].toUpperCase();
              })
              .join("");
          } catch (n) {
            var t;
            return (
              console.error("Error getting initials:", n),
              (null == e
                ? void 0
                : null === (t = e.charAt(0)) || void 0 === t
                  ? void 0
                  : t.toUpperCase()) || e
            );
          }
        },
        o = function (e) {
          return e
            ? e.split("&").reduce(function (e, t) {
                var n = (0, a._)(t.split("="), 2),
                  s = n[0],
                  l = n[1];
                return (
                  s && (e[decodeURIComponent(s)] = decodeURIComponent(l || "")),
                  e
                );
              }, {})
            : {};
        },
        c = function (e, t) {
          var n = new RegExp("".concat(t, "(\\d+)_(.+)")),
            s = Object.entries(e).reduce(function (e, t) {
              var s = (0, a._)(t, 2),
                l = s[0],
                r = s[1],
                i = l.match(n);
              if (i) {
                var o = (0, a._)(i, 3),
                  c = o[1],
                  d = o[2];
                (e[c] || (e[c] = {}), (e[c][d] = r));
              }
              return e;
            }, {});
          return Object.keys(s)
            .sort(function (e, t) {
              return e - t;
            })
            .map(function (e) {
              return s[e];
            });
        },
        d = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ".",
            n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "es",
            s = new Date(e),
            l = String(s.getDate()).padStart(2, "0"),
            r = String(s.getMonth() + 1).padStart(2, "0"),
            i = s.getFullYear();
          return ""
            .concat("es" === a ? l : r)
            .concat(t)
            .concat("es" === a ? r : l)
            .concat(t)
            .concat(n ? i : i.toString().slice(2));
        },
        u = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "es-ES",
            n = new Date(e);
          return {
            day: String(n.getDate()).padStart(2, "0"),
            month: n
              .toLocaleString(t, { month: "short" })
              .replace(".", "")
              .toUpperCase(),
            year: String(n.getFullYear()),
          };
        },
        m = function (e, t) {
          var n = new Date(e);
          return new Intl.DateTimeFormat(t, {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(n);
        },
        g = function (e, t) {
          var n = (0, a._)((0, l.useState)(""), 2),
            s = n[0],
            r = n[1];
          return (
            (0, l.useEffect)(
              function () {
                var n = new Date(e);
                r(
                  new Intl.DateTimeFormat(t, {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }).format(n),
                );
              },
              [e, t],
            ),
            s
          );
        },
        x = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "h",
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "es";
          if ("PM" === t || "en" === n) {
            var s = (0, a._)(e.split("T")[1].split(":").slice(0, 2), 2),
              l = s[0],
              r = s[1],
              i = parseInt(l, 10);
            return (
              (i = i % 12 || 12),
              ""
                .concat(i, ":")
                .concat(r, " ")
                .concat(l > 12 ? "PM" : "AM")
            );
          }
          return ""
            .concat(e.split("T")[1].split(":").slice(0, 2).join(":"), " ")
            .concat(t);
        },
        p = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "start",
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : void 0,
            l = e.match(/<(.*?)>/);
          if (!l) return e;
          var r = e.slice(0, l.index),
            i = l[1],
            o = e.slice(l.index + l[0].length);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              r,
              (0, s.jsx)("a", {
                href: "#".concat(t),
                className: "text-pink-700 underline underline-offset-2",
                onClick: function (e) {
                  var s;
                  (e.preventDefault(),
                    null === (s = document.getElementById(t)) ||
                      void 0 === s ||
                      s.scrollIntoView({ behavior: "smooth", block: n }),
                    a && a(),
                    setTimeout(function () {
                      history.replaceState(
                        null,
                        null,
                        window.location.pathname,
                      );
                    }, 1e3));
                },
                children: i,
              }),
              o,
            ],
          });
        };
    },
    94777: function (e, t, n) {
      n.d(t, {
        cn: function () {
          return l;
        },
      });
      var a = n(90512),
        s = n(98388);
      function l() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, s.m6)((0, a.W)(t));
      }
    },
  },
]);
