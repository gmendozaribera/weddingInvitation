"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3657],
  {
    90512: function (t, e, i) {
      i.d(e, {
        W: function () {
          return n;
        },
      });
      function n() {
        for (var t, e, i = 0, n = "", r = arguments.length; i < r; i++)
          (t = arguments[i]) &&
            (e = (function t(e) {
              var i,
                n,
                r = "";
              if ("string" == typeof e || "number" == typeof e) r += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var s = e.length;
                  for (i = 0; i < s; i++)
                    e[i] && (n = t(e[i])) && (r && (r += " "), (r += n));
                } else for (n in e) e[n] && (r && (r += " "), (r += n));
              }
              return r;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      }
    },
    74201: function (t, e, i) {
      i.d(e, {
        oO: function () {
          return s;
        },
      });
      var n = i(67294),
        r = i(34050);
      function s(t = !0) {
        let e = (0, n.useContext)(r.O);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: s, register: o } = e,
          a = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return o(a);
        }, [t]);
        let l = (0, n.useCallback)(() => t && s && s(a), [a, s, t]);
        return !i && s ? [!1, l] : [!0];
      }
    },
    45741: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(67294).createContext)({});
    },
    37051: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(67294).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    34050: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(67294).createContext)(null);
    },
    46354: function (t, e, i) {
      let n;
      i.d(e, {
        E: function () {
          return sE;
        },
      });
      var r,
        s = i(67294);
      let o = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        a = new Set(o),
        l = (t) => (180 * t) / Math.PI,
        u = (t) => d(l(Math.atan2(t[1], t[0]))),
        h = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: u,
          rotateZ: u,
          skewX: (t) => l(Math.atan(t[1])),
          skewY: (t) => l(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        d = (t) => ((t %= 360) < 0 && (t += 360), t),
        c = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        p = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        m = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: c,
          scaleY: p,
          scale: (t) => (c(t) + p(t)) / 2,
          rotateX: (t) => d(l(Math.atan2(t[6], t[5]))),
          rotateY: (t) => d(l(Math.atan2(-t[2], t[0]))),
          rotateZ: u,
          rotate: u,
          skewX: (t) => l(Math.atan(t[4])),
          skewY: (t) => l(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function f(t) {
        return t.includes("scale") ? 1 : 0;
      }
      function g(t, e) {
        let i, n;
        if (!t || "none" === t) return f(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) ((i = m), (n = r));
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          ((i = h), (n = e));
        }
        if (!n) return f(e);
        let s = i[e],
          o = n[1].split(",").map(v);
        return "function" == typeof s ? s(o) : o[s];
      }
      let y = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return g(i, e);
      };
      function v(t) {
        return parseFloat(t.trim());
      }
      let b = (t) => (e) => "string" == typeof e && e.startsWith(t),
        x = b("--"),
        w = b("var(--"),
        k = (t) => !!w(t) && T.test(t.split("/*")[0].trim()),
        T =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function P({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      let S = (t, e, i) => t + (e - t) * i;
      function A(t) {
        return void 0 === t || 1 === t;
      }
      function M({ scale: t, scaleX: e, scaleY: i }) {
        return !A(t) || !A(e) || !A(i);
      }
      function V(t) {
        return (
          M(t) ||
          E(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function E(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function C(t, e, i, n, r) {
        return (void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e);
      }
      function D(t, e = 0, i = 1, n, r) {
        ((t.min = C(t.min, e, i, n, r)), (t.max = C(t.max, e, i, n, r)));
      }
      function j(t, { x: e, y: i }) {
        (D(t.x, e.translate, e.scale, e.originPoint),
          D(t.y, i.translate, i.scale, i.originPoint));
      }
      function R(t, e) {
        ((t.min = t.min + e), (t.max = t.max + e));
      }
      function L(t, e, i, n, r = 0.5) {
        let s = S(t.min, t.max, r);
        D(t, e, i, s, n);
      }
      function F(t, e) {
        (L(t.x, e.x, e.scaleX, e.scale, e.originX),
          L(t.y, e.y, e.scaleY, e.scale, e.originY));
      }
      function B(t, e) {
        return P(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      let O = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...o,
        ]),
        I = (t, e, i) => (i > e ? e : i < t ? t : i),
        z = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        U = { ...z, transform: (t) => I(0, 1, t) },
        N = { ...z, default: 1 },
        $ = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        W = $("deg"),
        Y = $("%"),
        H = $("px"),
        X = $("vh"),
        K = $("vw"),
        G = {
          ...Y,
          parse: (t) => Y.parse(t) / 100,
          transform: (t) => Y.transform(100 * t),
        },
        q = (t) => (e) => e.test(t),
        _ = [z, H, Y, W, K, X, { test: (t) => "auto" === t, parse: (t) => t }],
        Z = (t) => _.find(q(t)),
        J = () => {},
        Q = () => {},
        tt = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        te = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ti = (t) => t === z || t === H,
        tn = new Set(["x", "y", "z"]),
        tr = o.filter((t) => !tn.has(t)),
        ts = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => g(e, "x"),
          y: (t, { transform: e }) => g(e, "y"),
        };
      ((ts.translateX = ts.x), (ts.translateY = ts.y));
      let to = (t) => t,
        ta = {},
        tl = [
          "setup",
          "read",
          "resolveKeyframes",
          "preUpdate",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        tu = { value: null, addProjectionMetrics: null };
      function th(t, e) {
        let i = !1,
          n = !0,
          r = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (i = !0),
          o = tl.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  n = new Set(),
                  r = !1,
                  s = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function u(e) {
                  (o.has(e) && (h.schedule(e), t()), l++, e(a));
                }
                let h = {
                  schedule: (t, e = !1, s = !1) => {
                    let a = s && r ? i : n;
                    return (e && o.add(t), a.has(t) || a.add(t), t);
                  },
                  cancel: (t) => {
                    (n.delete(t), o.delete(t));
                  },
                  process: (t) => {
                    if (((a = t), r)) {
                      s = !0;
                      return;
                    }
                    ((r = !0),
                      ([i, n] = [n, i]),
                      i.forEach(u),
                      e && tu.value && tu.value.frameloop[e].push(l),
                      (l = 0),
                      i.clear(),
                      (r = !1),
                      s && ((s = !1), h.process(t)));
                  },
                };
                return h;
              })(s, e ? i : void 0)),
              t
            ),
            {},
          ),
          {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: h,
            update: d,
            preRender: c,
            render: p,
            postRender: m,
          } = o,
          f = () => {
            let s = ta.useManualTiming ? r.timestamp : performance.now();
            ((i = !1),
              ta.useManualTiming ||
                (r.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(s - r.timestamp, 40), 1)),
              (r.timestamp = s),
              (r.isProcessing = !0),
              a.process(r),
              l.process(r),
              u.process(r),
              h.process(r),
              d.process(r),
              c.process(r),
              p.process(r),
              m.process(r),
              (r.isProcessing = !1),
              i && e && ((n = !1), t(f)));
          },
          g = () => {
            ((i = !0), (n = !0), r.isProcessing || t(f));
          };
        return {
          schedule: tl.reduce((t, e) => {
            let n = o[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || g(), n.schedule(t, e, r))),
              t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < tl.length; e++) o[tl[e]].cancel(t);
          },
          state: r,
          steps: o,
        };
      }
      let {
          schedule: td,
          cancel: tc,
          state: tp,
          steps: tm,
        } = th(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : to,
          !0,
        ),
        tf = new Set(),
        tg = !1,
        ty = !1,
        tv = !1;
      function tb() {
        if (ty) {
          let t = Array.from(tf).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          (e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tr.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((ty = !1), (tg = !1), tf.forEach((t) => t.complete(tv)), tf.clear());
      }
      function tx() {
        tf.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (ty = !0));
        });
      }
      class tw {
        constructor(t, e, i, n, r, s = !1) {
          ((this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s));
        }
        scheduleResolve() {
          ((this.state = "scheduled"),
            this.isAsync
              ? (tf.add(this),
                tg || ((tg = !0), td.read(tx), td.resolveKeyframes(tb)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          if (null === t[0]) {
            let r = n?.get(),
              s = t[t.length - 1];
            if (void 0 !== r) t[0] = r;
            else if (i && e) {
              let n = i.readValue(e, s);
              null != n && (t[0] = n);
            }
            (void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]));
          }
          !(function (t) {
            for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
          })(t);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          ((this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tf.delete(this));
        }
        cancel() {
          "scheduled" === this.state &&
            (tf.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let tk = (t) => /^0[^.\s]+$/u.test(t),
        tT = (t) => Math.round(1e5 * t) / 1e5,
        tP = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tS =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tA = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tS.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tM = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [r, s, o, a] = n.match(tP);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tV = (t) => I(0, 255, t),
        tE = { ...z, transform: (t) => Math.round(tV(t)) },
        tC = {
          test: tA("rgb", "red"),
          parse: tM("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            tE.transform(t) +
            ", " +
            tE.transform(e) +
            ", " +
            tE.transform(i) +
            ", " +
            tT(U.transform(n)) +
            ")",
        },
        tD = {
          test: tA("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: tC.transform,
        },
        tj = {
          test: tA("hsl", "hue"),
          parse: tM("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            Y.transform(tT(e)) +
            ", " +
            Y.transform(tT(i)) +
            ", " +
            tT(U.transform(n)) +
            ")",
        },
        tR = {
          test: (t) => tC.test(t) || tD.test(t) || tj.test(t),
          parse: (t) =>
            tC.test(t) ? tC.parse(t) : tj.test(t) ? tj.parse(t) : tD.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
                ? tC.transform(t)
                : tj.transform(t),
          getAnimatableNone: (t) => {
            let e = tR.parse(t);
            return ((e.alpha = 0), tR.transform(e));
          },
        },
        tL =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tF = "number",
        tB = "color",
        tO =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tI(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          s = 0,
          o = e
            .replace(
              tO,
              (t) => (
                tR.test(t)
                  ? (n.color.push(s), r.push(tB), i.push(tR.parse(t)))
                  : t.startsWith("var(")
                    ? (n.var.push(s), r.push("var"), i.push(t))
                    : (n.number.push(s), r.push(tF), i.push(parseFloat(t))),
                ++s,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: r };
      }
      function tz(t) {
        return tI(t).values;
      }
      function tU(t) {
        let { split: e, types: i } = tI(t),
          n = e.length;
        return (t) => {
          let r = "";
          for (let s = 0; s < n; s++)
            if (((r += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === tF
                ? (r += tT(t[s]))
                : e === tB
                  ? (r += tR.transform(t[s]))
                  : (r += t[s]);
            }
          return r;
        };
      }
      let tN = (t) =>
          "number" == typeof t ? 0 : tR.test(t) ? tR.getAnimatableNone(t) : t,
        t$ = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(tP)?.length || 0) + (t.match(tL)?.length || 0) > 0
            );
          },
          parse: tz,
          createTransformer: tU,
          getAnimatableNone: function (t) {
            let e = tz(t);
            return tU(t)(e.map(tN));
          },
        },
        tW = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tY(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tP) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = tW.has(e) ? 1 : 0;
        return (n !== i && (s *= 100), e + "(" + s + r + ")");
      }
      let tH = /\b([a-z-]*)\(.*?\)/gu,
        tX = {
          ...t$,
          getAnimatableNone: (t) => {
            let e = t.match(tH);
            return e ? e.map(tY).join(" ") : t;
          },
        },
        tK = { ...z, transform: Math.round },
        tG = {
          borderWidth: H,
          borderTopWidth: H,
          borderRightWidth: H,
          borderBottomWidth: H,
          borderLeftWidth: H,
          borderRadius: H,
          radius: H,
          borderTopLeftRadius: H,
          borderTopRightRadius: H,
          borderBottomRightRadius: H,
          borderBottomLeftRadius: H,
          width: H,
          maxWidth: H,
          height: H,
          maxHeight: H,
          top: H,
          right: H,
          bottom: H,
          left: H,
          padding: H,
          paddingTop: H,
          paddingRight: H,
          paddingBottom: H,
          paddingLeft: H,
          margin: H,
          marginTop: H,
          marginRight: H,
          marginBottom: H,
          marginLeft: H,
          backgroundPositionX: H,
          backgroundPositionY: H,
          rotate: W,
          rotateX: W,
          rotateY: W,
          rotateZ: W,
          scale: N,
          scaleX: N,
          scaleY: N,
          scaleZ: N,
          skew: W,
          skewX: W,
          skewY: W,
          distance: H,
          translateX: H,
          translateY: H,
          translateZ: H,
          x: H,
          y: H,
          z: H,
          perspective: H,
          transformPerspective: H,
          opacity: U,
          originX: G,
          originY: G,
          originZ: H,
          zIndex: tK,
          fillOpacity: U,
          strokeOpacity: U,
          numOctaves: tK,
        },
        tq = {
          ...tG,
          color: tR,
          backgroundColor: tR,
          outlineColor: tR,
          fill: tR,
          stroke: tR,
          borderColor: tR,
          borderTopColor: tR,
          borderRightColor: tR,
          borderBottomColor: tR,
          borderLeftColor: tR,
          filter: tX,
          WebkitFilter: tX,
        },
        t_ = (t) => tq[t];
      function tZ(t, e) {
        let i = t_(t);
        return (
          i !== tX && (i = t$),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let tJ = new Set(["auto", "none", "0"]);
      class tQ extends tw {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && k((n = n.trim()))) {
              let r = (function t(e, i, n = 1) {
                Q(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  "max-css-var-depth",
                );
                let [r, s] = (function (t) {
                  let e = te.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${i ?? n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return tt(t) ? parseFloat(t) : t;
                }
                return k(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              (void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !O.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = Z(n),
            o = Z(r);
          if (s !== o) {
            if (ti(s) && ti(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else ts[i] && (this.needsMeasurement = !0);
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            (null === t[e] ||
              ("number" == typeof (n = t[e])
                ? 0 === n
                : null === n || "none" === n || "0" === n || tk(n))) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                ("string" == typeof e &&
                  !tJ.has(e) &&
                  tI(e).values.length &&
                  (n = t[r]),
                  r++);
              }
              if (n && i) for (let r of e) t[r] = tZ(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = ts[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin));
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let n = t.getValue(e);
          n && n.jump(this.measuredOrigin, !1);
          let r = i.length - 1,
            s = i[r];
          ((i[r] = ts[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes());
        }
      }
      let t0 = (t) => !!(t && t.getVelocity);
      function t1() {
        n = void 0;
      }
      let t5 = {
        now: () => (
          void 0 === n &&
            t5.set(
              tp.isProcessing || ta.useManualTiming
                ? tp.timestamp
                : performance.now(),
            ),
          n
        ),
        set: (t) => {
          ((n = t), queueMicrotask(t1));
        },
      };
      function t2(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function t3(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class t4 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (t2(this.subscriptions, t), () => t3(this.subscriptions, t));
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let t9 = (t) => !isNaN(parseFloat(t)),
        t6 = { current: void 0 };
      class t7 {
        constructor(t, e = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = t5.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner));
        }
        setCurrent(t) {
          ((this.current = t),
            (this.updatedAt = t5.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = t9(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new t4());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                (i(),
                  td.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          ((this.passiveEffect = t), (this.stopPassiveEffect = e));
        }
        set(t) {
          this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, i) {
          (this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i));
        }
        jump(t, e = !0) {
          (this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          (this.dependents || (this.dependents = new Set()),
            this.dependents.add(t));
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return (t6.current && t6.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = t5.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              ((this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function t8(t, e) {
        return new t7(t, e);
      }
      let et = [..._, tR, t$],
        ee = (t) => et.find(q(t)),
        { schedule: ei, cancel: en } = th(queueMicrotask, !1),
        er = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        es = {};
      for (let t in er) es[t] = { isEnabled: (e) => er[t].some((t) => !!e[t]) };
      let eo = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ea = () => ({ x: eo(), y: eo() }),
        el = () => ({ min: 0, max: 0 }),
        eu = () => ({ x: el(), y: el() });
      var eh = i(55513);
      let ed = { current: null },
        ec = { current: !1 },
        ep = new WeakMap();
      function em(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function ef(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let eg = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        ey = ["initial", ...eg];
      function ev(t) {
        return em(t.animate) || ey.some((e) => ef(t[e]));
      }
      function eb(t) {
        return !!(ev(t) || t.variants);
      }
      function ex(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, i) => {
            ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
          }),
          e
        );
      }
      function ew(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, s] = ex(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = ex(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      let ek = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class eT {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tw),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t5.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), td.render(this.render, !1, !0));
            }));
          let { latestValues: a, renderState: l } = s;
          ((this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = ev(e)),
            (this.isVariantNode = eb(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && t0(e) && e.set(a[t]);
          }
        }
        mount(t) {
          ((this.current = t),
            ep.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            ec.current ||
              (function () {
                if (((ec.current = !0), eh.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (ed.current = t.matches);
                    (t.addEventListener("change", e), e());
                  } else ed.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || ed.current)),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          tc(this.notifyUpdate),
          tc(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          (this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t));
        }
        removeChild(t) {
          (this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t));
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = a.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
            ((this.latestValues[t] = e),
              this.props.onUpdate && td.preRender(this.notifyUpdate),
              n && this.projection && (this.projection.isTransformDirty = !0),
              this.scheduleRender());
          });
          (window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (r(), i && i(), e.owner && e.stop());
            }));
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in es) {
            let e = es[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : eu();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          ((t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e));
          for (let e = 0; e < ek.length; e++) {
            let i = ek[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          ((this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if (t0(r)) t.addValue(n, r);
              else if (t0(s)) t.addValue(n, t8(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, t8(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          (e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState));
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = t8(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? (this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options))
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && (tt(i) || tk(i))
                ? (i = parseFloat(i))
                : !ee(i) && t$.test(e) && (i = tZ(t, e)),
              this.setBaseTarget(t, t0(i) ? i.get() : i)),
            t0(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = ew(this.props, i, this.presenceContext?.custom);
            n && (e = n[t]);
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || t0(n)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new t4()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          ei.render(this.render);
        }
      }
      class eP extends eT {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = tQ));
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          (delete e[t], delete i[t]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          t0(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      let eS = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        eA = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        eM = o.length;
      function eV(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          l = !1,
          u = !1;
        for (let t in e) {
          let i = e[t];
          if (a.has(t)) {
            l = !0;
            continue;
          }
          if (x(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = eS(i, tG[t]);
            t.startsWith("origin") ? ((u = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (l || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let s = 0; s < eM; s++) {
                    let a = o[s],
                      l = t[a];
                    if (void 0 === l) continue;
                    let u = !0;
                    if (
                      !(u =
                        "number" == typeof l
                          ? l === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(l)) ||
                      i
                    ) {
                      let t = eS(l, tG[a]);
                      if (!u) {
                        r = !1;
                        let e = eA[a] || a;
                        n += `${e}(${t}) `;
                      }
                      i && (e[a] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function eE(t, { style: e, vars: i }, n, r) {
        let s;
        let o = t.style;
        for (s in e) o[s] = e[s];
        for (s in (r?.applyProjectionStyles(o, n), i)) o.setProperty(s, i[s]);
      }
      let eC = {};
      function eD(t, { layout: e, layoutId: i }) {
        return (
          a.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!eC[t] || "opacity" === t))
        );
      }
      function ej(t, e, i) {
        let { style: n } = t,
          r = {};
        for (let s in n)
          (t0(n[s]) ||
            (e.style && t0(e.style[s])) ||
            eD(s, t) ||
            i?.getValue(s)?.liveStyle !== void 0) &&
            (r[s] = n[s]);
        return r;
      }
      class eR extends eP {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = eE));
        }
        readValueFromInstance(t, e) {
          if (a.has(e)) return this.projection?.isProjecting ? f(e) : y(t, e);
          {
            let i = window.getComputedStyle(t),
              n = (x(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return B(t, e);
        }
        build(t, e, i) {
          eV(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return ej(t, e, i);
        }
      }
      let eL = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        eF = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        eB = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function eO(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          pathLength: r,
          pathSpacing: s = 1,
          pathOffset: o = 0,
          ...a
        },
        l,
        u,
        h,
      ) {
        if ((eV(t, a, u), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        ((t.attrs = t.style), (t.style = {}));
        let { attrs: d, style: c } = t;
        (d.transform && ((c.transform = d.transform), delete d.transform),
          (c.transform || d.transformOrigin) &&
            ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
            delete d.transformOrigin),
          c.transform &&
            ((c.transformBox = h?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== r &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? eF : eB;
              t[s.offset] = H.transform(-n);
              let o = H.transform(e),
                a = H.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, r, s, o, !1));
      }
      let eI = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        ez = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function eU(t, e, i) {
        let n = ej(t, e, i);
        for (let i in t)
          (t0(t[i]) || t0(e[i])) &&
            (n[
              -1 !== o.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      class eN extends eP {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = eu));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (a.has(e)) {
            let t = t_(e);
            return (t && t.default) || 0;
          }
          return ((e = eI.has(e) ? e : eL(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eU(t, e, i);
        }
        build(t, e, i) {
          eO(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, n) {
          !(function (t, e, i, n) {
            for (let i in (eE(t, e, void 0, n), e.attrs))
              t.setAttribute(eI.has(i) ? i : eL(i), e.attrs[i]);
          })(t, e, 0, n);
        }
        mount(t) {
          ((this.isSVGTag = ez(t.tagName)), super.mount(t));
        }
      }
      let e$ = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function eW(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (e$.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var eY = i(85893),
        eH = i(45741);
      let eX = (0, s.createContext)({ strict: !1 });
      var eK = i(37051);
      let eG = (0, s.createContext)({});
      function eq(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let e_ = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function eZ(t, e, i) {
        for (let n in e) t0(e[n]) || eD(n, i) || (t[n] = e[n]);
      }
      let eJ = () => ({ ...e_(), attrs: {} }),
        eQ = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
      function e0(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          eQ.has(t)
        );
      }
      let e1 = (t) => !e0(t);
      try {
        ((r = require("@emotion/is-prop-valid").default),
          "function" == typeof r &&
            (e1 = (t) => (t.startsWith("on") ? !e0(t) : r(t))));
      } catch {}
      var e5 = i(34050),
        e2 = i(42752);
      function e3(t) {
        return t0(t) ? t.get() : t;
      }
      let e4 = (t) => (e, i) => {
          let n = (0, s.useContext)(eG),
            r = (0, s.useContext)(e5.O),
            o = () =>
              (function (
                { scrapeMotionValuesFromProps: t, createRenderState: e },
                i,
                n,
                r,
              ) {
                return {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      s = n(t, {});
                    for (let t in s) r[t] = e3(s[t]);
                    let { initial: o, animate: a } = t,
                      l = ev(t),
                      u = eb(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let h = !!i && !1 === i.initial,
                      d = (h = h || !1 === o) ? a : o;
                    if (d && "boolean" != typeof d && !em(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let i = 0; i < e.length; i++) {
                        let n = ew(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = h ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (r[t] = e);
                          }
                          for (let e in t) r[e] = t[e];
                        }
                      }
                    }
                    return r;
                  })(i, n, r, t),
                  renderState: e(),
                };
              })(t, e, n, r);
          return i ? o() : (0, e2.h)(o);
        },
        e9 = e4({ scrapeMotionValuesFromProps: ej, createRenderState: e_ }),
        e6 = e4({ scrapeMotionValuesFromProps: eU, createRenderState: eJ }),
        e7 = Symbol.for("motionComponentSymbol");
      function e8(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let it = "data-" + eL("framerAppearId"),
        ie = (0, s.createContext)({});
      var ii = i(18465);
      function ir(t, { forwardMotionProps: e = !1 } = {}, i, n) {
        i &&
          (function (t) {
            for (let e in t) es[e] = { ...es[e], ...t[e] };
          })(i);
        let r = eW(t) ? e6 : e9;
        function o(i, o) {
          var a;
          let l;
          let u = {
              ...(0, s.useContext)(eK._),
              ...i,
              layoutId: (function ({ layoutId: t }) {
                let e = (0, s.useContext)(eH.p).id;
                return e && void 0 !== t ? e + "-" + t : t;
              })(i),
            },
            { isStatic: h } = u,
            d = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if (ev(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || ef(e) ? e : void 0,
                    animate: ef(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, s.useContext)(eG));
              return (0, s.useMemo)(
                () => ({ initial: e, animate: i }),
                [eq(e), eq(i)],
              );
            })(i),
            c = r(i, h);
          if (!h && eh.j) {
            (0, s.useContext)(eX).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = es;
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout:
                  e?.isEnabled(t) || i?.isEnabled(t) ? n.MeasureLayout : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(u);
            ((l = e.MeasureLayout),
              (d.visualElement = (function (t, e, i, n, r) {
                let { visualElement: o } = (0, s.useContext)(eG),
                  a = (0, s.useContext)(eX),
                  l = (0, s.useContext)(e5.O),
                  u = (0, s.useContext)(eK._).reducedMotion,
                  h = (0, s.useRef)(null);
                ((n = n || a.renderer),
                  !h.current &&
                    n &&
                    (h.current = n(t, {
                      visualState: e,
                      parent: o,
                      props: i,
                      presenceContext: l,
                      blockInitialAnimation: !!l && !1 === l.initial,
                      reducedMotionConfig: u,
                    })));
                let d = h.current,
                  c = (0, s.useContext)(ie);
                d &&
                  !d.projection &&
                  r &&
                  ("html" === d.type || "svg" === d.type) &&
                  (function (t, e, i, n) {
                    let {
                      layoutId: r,
                      layout: s,
                      drag: o,
                      dragConstraints: a,
                      layoutScroll: l,
                      layoutRoot: u,
                      layoutCrossfade: h,
                    } = e;
                    ((t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent),
                    )),
                      t.projection.setOptions({
                        layoutId: r,
                        layout: s,
                        alwaysMeasureLayout: !!o || (a && e8(a)),
                        visualElement: t,
                        animationType: "string" == typeof s ? s : "both",
                        initialPromotionConfig: n,
                        crossfade: h,
                        layoutScroll: l,
                        layoutRoot: u,
                      }));
                  })(h.current, i, r, c);
                let p = (0, s.useRef)(!1);
                (0, s.useInsertionEffect)(() => {
                  d && p.current && d.update(i, l);
                });
                let m = i[it],
                  f = (0, s.useRef)(
                    !!m &&
                      !window.MotionHandoffIsComplete?.(m) &&
                      window.MotionHasOptimisedAnimation?.(m),
                  );
                return (
                  (0, ii.L)(() => {
                    d &&
                      ((p.current = !0),
                      (window.MotionIsMounted = !0),
                      d.updateFeatures(),
                      d.scheduleRenderMicrotask(),
                      f.current &&
                        d.animationState &&
                        d.animationState.animateChanges());
                  }),
                  (0, s.useEffect)(() => {
                    d &&
                      (!f.current &&
                        d.animationState &&
                        d.animationState.animateChanges(),
                      f.current &&
                        (queueMicrotask(() => {
                          window.MotionHandoffMarkAsComplete?.(m);
                        }),
                        (f.current = !1)),
                      (d.enteringChildren = void 0));
                  }),
                  d
                );
              })(t, c, u, n, e.ProjectionNode)));
          }
          return (0, eY.jsxs)(eG.Provider, {
            value: d,
            children: [
              l && d.visualElement
                ? (0, eY.jsx)(l, { visualElement: d.visualElement, ...u })
                : null,
              (function (t, e, i, { latestValues: n }, r, o = !1) {
                let a = (
                    eW(t)
                      ? function (t, e, i, n) {
                          let r = (0, s.useMemo)(() => {
                            let i = eJ();
                            return (
                              eO(i, e, ez(n), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            (eZ(e, t.style, t),
                              (r.style = { ...e, ...r.style }));
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                eZ(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, s.useMemo)(() => {
                                      let i = e_();
                                      return (
                                        eV(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e),
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(e, n, r, t),
                  l = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (e1(r) ||
                          (!0 === i && e0(r)) ||
                          (!e && !e0(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(e, "string" == typeof t, o),
                  u = t !== s.Fragment ? { ...l, ...a, ref: i } : {},
                  { children: h } = e,
                  d = (0, s.useMemo)(() => (t0(h) ? h.get() : h), [h]);
                return (0, s.createElement)(t, { ...u, children: d });
              })(
                t,
                i,
                ((a = d.visualElement),
                (0, s.useCallback)(
                  (t) => {
                    (t && c.onMount && c.onMount(t),
                      a && (t ? a.mount(t) : a.unmount()),
                      o &&
                        ("function" == typeof o
                          ? o(t)
                          : e8(o) && (o.current = t)));
                  },
                  [a],
                )),
                c,
                h,
                e,
              ),
            ],
          });
        }
        o.displayName = `motion.${"string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        let a = (0, s.forwardRef)(o);
        return ((a[e7] = t), a);
      }
      function is(t, e, i) {
        let n = t.getProps();
        return ew(n, e, void 0 !== i ? i : n.custom, t);
      }
      function io(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      let ia = (t) => Array.isArray(t);
      function il(t, e) {
        let i = t.getValue("willChange");
        if (t0(i) && i.add) return i.add(e);
        if (!i && ta.WillChange) {
          let i = new ta.WillChange("auto");
          (t.addValue("willChange", i), i.add(e));
        }
      }
      function iu(t) {
        ((t.duration = 0), (t.type = "keyframes"));
      }
      let ih = (t, e) => (i) => e(t(i)),
        id = (...t) => t.reduce(ih),
        ic = (t) => 1e3 * t,
        ip = (t) => t / 1e3,
        im = { layout: 0, mainThread: 0, waapi: 0 };
      function ig(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      function iy(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let iv = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        ib = [tD, tC, tj],
        ix = (t) => ib.find((e) => e.test(t));
      function iw(t) {
        let e = ix(t);
        if (
          (J(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            "color-not-animatable",
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tj &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              ((t /= 360), (i /= 100));
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                ((r = ig(a, n, t + 1 / 3)),
                  (s = ig(a, n, t)),
                  (o = ig(a, n, t - 1 / 3)));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let ik = (t, e) => {
          let i = iw(t),
            n = iw(e);
          if (!i || !n) return iy(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = iv(i.red, n.red, t)),
            (r.green = iv(i.green, n.green, t)),
            (r.blue = iv(i.blue, n.blue, t)),
            (r.alpha = S(i.alpha, n.alpha, t)),
            tC.transform(r)
          );
        },
        iT = new Set(["none", "hidden"]);
      function iP(t, e) {
        return (i) => S(t, e, i);
      }
      function iS(t) {
        return "number" == typeof t
          ? iP
          : "string" == typeof t
            ? k(t)
              ? iy
              : tR.test(t)
                ? ik
                : iV
            : Array.isArray(t)
              ? iA
              : "object" == typeof t
                ? tR.test(t)
                  ? ik
                  : iM
                : iy;
      }
      function iA(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => iS(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function iM(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = iS(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let iV = (t, e) => {
        let i = t$.createTransformer(e),
          n = tI(t),
          r = tI(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (iT.has(t) && !r.values.length) || (iT.has(e) && !n.values.length)
            ? iT.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : id(
                iA(
                  (function (t, e) {
                    let i = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let s = e.types[r],
                        o = t.indexes[s][n[s]],
                        a = t.values[o] ?? 0;
                      ((i[r] = a), n[s]++);
                    }
                    return i;
                  })(n, r),
                  r.values,
                ),
                i,
              )
          : (J(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              "complex-values-different",
            ),
            iy(t, e));
      };
      function iE(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? S(t, e, i)
          : iS(t)(t, e);
      }
      let iC = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: (t = !0) => td.update(e, t),
            stop: () => tc(e),
            now: () => (tp.isProcessing ? tp.timestamp : t5.now()),
          };
        },
        iD = (t, e, i = 10) => {
          let n = "",
            r = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < r; e++)
            n += Math.round(1e4 * t(e / (r - 1))) / 1e4 + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        };
      function ij(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) ((e += 50), (i = t.next(e)));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function iR(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return ((n = i - t(s)), (r = e - s) ? (1e3 / r) * n : 0);
      }
      let iL = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function iF(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let iB = ["duration", "bounce"],
        iO = ["stiffness", "damping", "mass"];
      function iI(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function iz(t = iL.visualDuration, e = iL.bounce) {
        let i;
        let n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: r, restDelta: s } = n,
          o = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: iL.velocity,
              stiffness: iL.stiffness,
              damping: iL.damping,
              mass: iL.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!iI(t, iO) && iI(t, iB)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  r = 2 * I(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: iL.mass, stiffness: n, damping: r };
              } else {
                let i = (function ({
                  duration: t = iL.duration,
                  bounce: e = iL.bounce,
                  velocity: i = iL.velocity,
                  mass: n = iL.mass,
                }) {
                  let r, s;
                  J(
                    t <= ic(iL.maxDuration),
                    "Spring duration must be 10 seconds or less",
                    "spring-duration-limit",
                  );
                  let o = 1 - e;
                  ((o = I(iL.minDamping, iL.maxDamping, o)),
                    (t = I(iL.minDuration, iL.maxDuration, ip(t))),
                    o < 1
                      ? ((r = (e) => {
                          let n = e * o,
                            r = n * t;
                          return 0.001 - ((n - i) / iF(e, o)) * Math.exp(-r);
                        }),
                        (s = (e) => {
                          let n = e * o * t,
                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = iF(Math.pow(e, 2), o);
                          return (
                            ((n * i + i - s) *
                              Math.exp(-n) *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t))));
                  let a = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(r, s, 5 / t);
                  if (((t = ic(t)), isNaN(a)))
                    return {
                      stiffness: iL.stiffness,
                      damping: iL.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: iL.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -ip(n.velocity || 0) }),
          f = p || 0,
          g = h / (2 * Math.sqrt(u * d)),
          y = a - o,
          v = ip(Math.sqrt(u / d)),
          b = 5 > Math.abs(y);
        if (
          (r || (r = b ? iL.restSpeed.granular : iL.restSpeed.default),
          s || (s = b ? iL.restDelta.granular : iL.restDelta.default),
          g < 1)
        ) {
          let t = iF(v, g);
          i = (e) =>
            a -
            Math.exp(-g * v * e) *
              (((f + g * v * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          i = (t) => a - Math.exp(-v * t) * (y + (f + v * y) * t);
        else {
          let t = v * Math.sqrt(g * g - 1);
          i = (e) => {
            let i = Math.exp(-g * v * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (i * ((f + g * v * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        let x = {
          calculatedDuration: (m && c) || null,
          next: (t) => {
            let e = i(t);
            if (m) l.done = t >= c;
            else {
              let n = 0 === t ? f : 0;
              g < 1 && (n = 0 === t ? ic(f) : iR(i, t, e));
              let o = Math.abs(n) <= r,
                u = Math.abs(a - e) <= s;
              l.done = o && u;
            }
            return ((l.value = l.done ? a : e), l);
          },
          toString: () => {
            let t = Math.min(ij(x), 2e4),
              e = iD((e) => x.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return x;
      }
      function iU({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - t) < Math.abs(l - t)
                  ? a
                  : l,
          y = i * e,
          v = p + y,
          b = void 0 === o ? v : o(v);
        b !== v && (y = b - p);
        let x = (t) => -y * Math.exp(-t / n),
          w = (t) => b + x(t),
          k = (t) => {
            let e = x(t),
              i = w(t);
            ((m.done = Math.abs(e) <= u), (m.value = m.done ? b : i));
          },
          T = (t) => {
            f(m.value) &&
              ((d = t),
              (c = iz({
                keyframes: [m.value, g(m.value)],
                velocity: iR(w, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), k(t), T(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || k(t), m);
            },
          }
        );
      }
      iz.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let n = i({ ...t, keyframes: [0, e] }),
            r = Math.min(ij(n), 2e4);
          return {
            type: "keyframes",
            ease: (t) => n.next(r * t).value / e,
            duration: ip(r),
          };
        })(t, 100, iz);
        return (
          (t.ease = e.ease),
          (t.duration = ic(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let iN = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function i$(t, e, i, n) {
        if (t === e && i === n) return to;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = iN((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : iN(r(t), e, n));
      }
      let iW = i$(0.42, 0, 1, 1),
        iY = i$(0, 0, 0.58, 1),
        iH = i$(0.42, 0, 0.58, 1),
        iX = (t) => Array.isArray(t) && "number" != typeof t[0],
        iK = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
        iG = (t) => (e) => 1 - t(1 - e),
        iq = i$(0.33, 1.53, 0.69, 0.99),
        i_ = iG(iq),
        iZ = iK(i_),
        iJ = (t) =>
          (t *= 2) < 1 ? 0.5 * i_(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        iQ = (t) => 1 - Math.sin(Math.acos(t)),
        i0 = iG(iQ),
        i1 = iK(iQ),
        i5 = (t) => Array.isArray(t) && "number" == typeof t[0],
        i2 = {
          linear: to,
          easeIn: iW,
          easeInOut: iH,
          easeOut: iY,
          circIn: iQ,
          circInOut: i1,
          circOut: i0,
          backIn: i_,
          backInOut: iZ,
          backOut: iq,
          anticipate: iJ,
        },
        i3 = (t) => "string" == typeof t,
        i4 = (t) => {
          if (i5(t)) {
            Q(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
              "cubic-bezier-length",
            );
            let [e, i, n, r] = t;
            return i$(e, i, n, r);
          }
          return i3(t)
            ? (Q(
                void 0 !== i2[t],
                `Invalid easing type '${t}'`,
                "invalid-easing-type",
              ),
              i2[t])
            : t;
        },
        i9 = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        };
      function i6({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = iX(n) ? n.map(i4) : i4(n),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              (Q(
                s === e.length,
                "Both input and output ranges must be the same length",
                "range-length",
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let a = (function (t, e, i) {
                let n = [],
                  r = i || ta.mix || iE,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  (e && (s = id(Array.isArray(e) ? e[i] || to : e, s)),
                    n.push(s));
                }
                return n;
              })(e, n, r),
              l = a.length,
              u = (i) => {
                if (o && i < t[0]) return e[0];
                let n = 0;
                if (l > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                let r = i9(t[n], t[n + 1], i);
                return a[n](r);
              };
            return i ? (e) => u(I(t[0], t[s - 1], e)) : u;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = i9(0, e, n);
                        t.push(S(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || iH).splice(0, e.length - 1),
            },
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      let i7 = (t) => null !== t;
      function i8(t, { repeat: e, repeatType: i = "loop" }, n, r = 1) {
        let s = t.filter(i7),
          o = r < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : s.length - 1;
        return o && void 0 !== n ? n : s[o];
      }
      let nt = { decay: iU, inertia: iU, tween: i6, keyframes: i6, spring: iz };
      function ne(t) {
        "string" == typeof t.type && (t.type = nt[t.type]);
      }
      class ni {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      let nn = (t) => t / 100;
      class nr extends ni {
        constructor(t) {
          (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              (t && t.updatedAt !== t5.now() && this.tick(t5.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.()));
            }),
            im.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause());
        }
        initAnimation() {
          let { options: t } = this;
          ne(t);
          let {
              type: e = i6,
              repeat: i = 0,
              repeatDelay: n = 0,
              repeatType: r,
              velocity: s = 0,
            } = t,
            { keyframes: o } = t,
            a = e || i6;
          a !== i6 &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = id(nn, iE(o[0], o[1]))), (o = [0, 100]));
          let l = a({ ...t, keyframes: o });
          ("mirror" === r &&
            (this.mirroredGenerator = a({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -s,
            })),
            null === l.calculatedDuration && (l.calculatedDuration = ij(l)));
          let { calculatedDuration: u } = l;
          ((this.calculatedDuration = u),
            (this.resolvedDuration = u + n),
            (this.totalDuration = this.resolvedDuration * (i + 1) - n),
            (this.generator = l));
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: n,
            mixKeyframes: r,
            mirroredGenerator: s,
            resolvedDuration: o,
            calculatedDuration: a,
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: l = 0,
            keyframes: u,
            repeat: h,
            repeatType: d,
            repeatDelay: c,
            type: p,
            onUpdate: m,
            finalKeyframe: f,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - n / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t));
          let g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? g < 0 : g > n;
          ((this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = n));
          let v = this.currentTime,
            b = i;
          if (h) {
            let t = Math.min(this.currentTime, n) / o,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, h + 1)) % 2 &&
                ("reverse" === d
                  ? ((i = 1 - i), c && (i -= c / o))
                  : "mirror" === d && (b = s)),
              (v = I(0, 1, i) * o));
          }
          let x = y ? { done: !1, value: u[0] } : b.next(v);
          r && (x.value = r(x.value));
          let { done: w } = x;
          y ||
            null === a ||
            (w =
              this.playbackSpeed >= 0
                ? this.currentTime >= n
                : this.currentTime <= 0);
          let k =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            k && p !== iU && (x.value = i8(u, this.options, f, this.speed)),
            m && m(x.value),
            k && this.finish(),
            x
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return ip(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + ip(t);
        }
        get time() {
          return ip(this.currentTime);
        }
        set time(t) {
          ((t = ic(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(t5.now());
          let e = this.playbackSpeed !== t;
          ((this.playbackSpeed = t), e && (this.time = ip(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = iC, startTime: e } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.());
          let i = this.driver.now();
          ("finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
              ? (this.startTime = i - this.holdTime)
              : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          ((this.state = "paused"),
            this.updateTime(t5.now()),
            (this.holdTime = this.currentTime));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            im.mainThread--);
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return ((this.startTime = 0), this.tick(t, !0));
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      let ns = (t) => t.startsWith("--");
      function no(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let na = no(() => void 0 !== window.ScrollTimeline),
        nl = {},
        nu = (function (t, e) {
          let i = no(t);
          return () => nl[e] ?? i();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        nh = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        nd = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: nh([0, 0.65, 0.55, 1]),
          circOut: nh([0.55, 0, 1, 0.45]),
          backIn: nh([0.31, 0.01, 0.66, -0.59]),
          backOut: nh([0.33, 1.53, 0.69, 0.99]),
        };
      function nc(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class np extends ni {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          let {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: r,
            allowFlatten: s = !1,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          ((this.isPseudoElement = !!r),
            (this.allowFlatten = s),
            (this.options = t),
            Q(
              "string" != typeof t.type,
              'Mini animate() doesn\'t support "type" as a string.',
              "mini-spring",
            ));
          let l = (function ({ type: t, ...e }) {
            return nc(t) && nu()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          ((this.animation = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeOut",
              times: l,
            } = {},
            u,
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? nu()
                    ? iD(e, i)
                    : "ease-out"
                  : i5(e)
                    ? nh(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || nd.easeOut)
                      : nd[e];
            })(a, r);
            (Array.isArray(d) && (h.easing = d), tu.value && im.waapi++);
            let c = {
              delay: n,
              duration: r,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            u && (c.pseudoElement = u);
            let p = t.animate(h, c);
            return (
              tu.value &&
                p.finished.finally(() => {
                  im.waapi--;
                }),
              p
            );
          })(e, i, n, l, r)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !r)) {
                let t = i8(n, this.options, o, this.speed);
                (this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : ns(i)
                    ? e.style.setProperty(i, t)
                    : (e.style[i] = t),
                  this.animation.cancel());
              }
              (a?.(), this.notifyFinished());
            }));
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          return ip(
            Number(this.animation.effect?.getComputedTiming?.().duration || 0),
          );
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + ip(t);
        }
        get time() {
          return ip(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          ((this.finishedTime = null), (this.animation.currentTime = ic(t)));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          (t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t));
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && na())
            ? ((this.animation.timeline = t), to)
            : e(this);
        }
      }
      let nm = { anticipate: iJ, backInOut: iZ, circInOut: i1 };
      class nf extends np {
        constructor(t) {
          ("string" == typeof t.ease && t.ease in nm && (t.ease = nm[t.ease]),
            ne(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t));
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: n,
            element: r,
            ...s
          } = this.options;
          if (!e) return;
          if (void 0 !== t) {
            e.set(t);
            return;
          }
          let o = new nr({ ...s, autoplay: !1 }),
            a = ic(this.finishedTime ?? this.time);
          (e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10),
            o.stop());
        }
      }
      let ng = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (t$.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        ny = new Set(["opacity", "clipPath", "filter", "transform"]),
        nv = no(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class nb extends ni {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          keyframes: o,
          name: a,
          motionValue: l,
          element: u,
          ...h
        }) {
          (super(),
            (this.stop = () => {
              (this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = t5.now()));
          let d = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              name: a,
              motionValue: l,
              element: u,
              ...h,
            },
            c = u?.KeyframeResolver || tw;
          ((this.keyframeResolver = new c(
            o,
            (t, e, i) => this.onKeyframesResolved(t, e, d, !i),
            a,
            l,
            u,
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(t, e, i, n) {
          this.keyframeResolver = void 0;
          let {
            name: r,
            type: s,
            velocity: o,
            delay: a,
            isHandoff: l,
            onUpdate: u,
          } = i;
          ((this.resolvedAt = t5.now()),
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = ng(r, e),
                a = ng(s, e);
              return (
                J(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". "${o ? s : r}" is not an animatable value.`,
                  "value-not-animatable",
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || nc(i)) && n))
              );
            })(t, r, s, o) &&
              ((ta.instantAnimations || !a) && u?.(i8(t, i, e)),
              (t[0] = t[t.length - 1]),
              iu(i),
              (i.repeat = 0)));
          let h = {
              startTime: n
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t,
            },
            d =
              !l &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: n,
                  repeatType: r,
                  damping: s,
                  type: o,
                } = t;
                if (!(e?.owner?.current instanceof HTMLElement)) return !1;
                let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
                return (
                  nv() &&
                  i &&
                  ny.has(i) &&
                  ("transform" !== i || !l) &&
                  !a &&
                  !n &&
                  "mirror" !== r &&
                  0 !== s &&
                  "inertia" !== o
                );
              })(h)
                ? new nf({ ...h, element: h.motionValue.owner.current })
                : new nr(h);
          (d.finished.then(() => this.notifyFinished()).catch(to),
            this.pendingTimeline &&
              ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = d));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(),
              (tv = !0),
              tx(),
              tb(),
              (tv = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel());
        }
      }
      let nx = (t) => null !== t,
        nw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        nk = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        nT = { type: "keyframes", duration: 0.8 },
        nP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        nS = (t, { keyframes: e }) =>
          e.length > 2
            ? nT
            : a.has(t)
              ? t.startsWith("scale")
                ? nk(e[1])
                : nw
              : nP,
        nA =
          (t, e, i, n = {}, r, s) =>
          (o) => {
            let a = io(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= ic(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                (e.set(t), a.onUpdate && a.onUpdate(t));
              },
              onComplete: () => {
                (o(), a.onComplete && a.onComplete());
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && Object.assign(h, nS(t, h)),
              h.duration && (h.duration = ic(h.duration)),
              h.repeatDelay && (h.repeatDelay = ic(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from));
            let d = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                (iu(h), 0 !== h.delay || (d = !0)),
              (ta.instantAnimations || ta.skipAnimations) &&
                ((d = !0), iu(h), (h.delay = 0)),
              (h.allowFlatten = !a.type && !a.ease),
              d && !s && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, n) {
                let r = t.filter(nx),
                  s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return r[s];
              })(h.keyframes, a);
              if (void 0 !== t) {
                td.update(() => {
                  (h.onUpdate(t), h.onComplete());
                });
                return;
              }
            }
            return a.isSync ? new nr(h) : new nb(h);
          };
      function nM(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: o,
          ...a
        } = e;
        n && (s = n);
        let l = [],
          u = r && t.animationState && t.animationState.getState()[r];
        for (let e in a) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            r = a[e];
          if (
            void 0 === r ||
            (u &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return ((e[i] = !1), n);
              })(u, e))
          )
            continue;
          let o = { delay: i, ...io(s || {}, e) },
            h = n.get();
          if (
            void 0 !== h &&
            !n.isAnimating &&
            !Array.isArray(r) &&
            r === h &&
            !o.velocity
          )
            continue;
          let d = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[it];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, td);
              null !== t && ((o.startTime = t), (d = !0));
            }
          }
          (il(t, e),
            n.start(
              nA(
                e,
                n,
                r,
                t.shouldReduceMotion && O.has(e) ? { type: !1 } : o,
                t,
                d,
              ),
            ));
          let c = n.animation;
          c && l.push(c);
        }
        return (
          o &&
            Promise.all(l).then(() => {
              td.update(() => {
                o &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = is(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      var s;
                      let i = ia((s = r[e])) ? s[s.length - 1] || 0 : s;
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, t8(i));
                    }
                  })(t, o);
              });
            }),
          l
        );
      }
      function nV(t, e, i, n = 0, r = 1) {
        let s = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          o = t.size,
          a = (o - 1) * n;
        return "function" == typeof i ? i(s, o) : 1 === r ? s * n : a - s * n;
      }
      function nE(t, e, i = {}) {
        let n = is(
            t,
            e,
            "exit" === i.type ? t.presenceContext?.custom : void 0,
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let s = n ? () => Promise.all(nM(t, n, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, n = 0, r = 0, s = 1, o) {
                    let a = [];
                    for (let l of t.variantChildren)
                      (l.notify("AnimationStart", e),
                        a.push(
                          nE(l, e, {
                            ...o,
                            delay:
                              i +
                              ("function" == typeof n ? 0 : n) +
                              nV(t.variantChildren, l, n, r, s),
                          }).then(() => l.notify("AnimationComplete", e)),
                        ));
                    return Promise.all(a);
                  })(t, e, n, s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = r;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function nC(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let nD = ey.length,
        nj = [...eg].reverse(),
        nR = eg.length;
      function nL(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function nF() {
        return {
          animate: nL(!0),
          whileInView: nL(),
          whileHover: nL(),
          whileTap: nL(),
          whileDrag: nL(),
          whileFocus: nL(),
          exit: nL(),
        };
      }
      class nB {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      class nO extends nB {
        constructor(t) {
          (super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => nE(t, e, i)));
                          else if ("string" == typeof e) n = nE(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? is(t, e, i.custom) : e;
                            n = Promise.all(nM(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i),
                      ),
                    ),
                  i = nF(),
                  n = !0,
                  r = (e) => (i, n) => {
                    let r = is(
                      t,
                      n,
                      "exit" === e ? t.presenceContext?.custom : void 0,
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...n } = r;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let { props: o } = t,
                    a =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < nD; t++) {
                          let n = ey[t],
                            r = e.props[n];
                          (ef(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    d = 1 / 0;
                  for (let e = 0; e < nR; e++) {
                    var c;
                    let p = nj[e],
                      m = i[p],
                      f = void 0 !== o[p] ? o[p] : a[p],
                      g = ef(f),
                      y = p === s ? m.isActive : null;
                    !1 === y && (d = e);
                    let v = f === a[p] && f !== o[p] && g;
                    if (
                      (v && n && t.manuallyAnimateOnMount && (v = !1),
                      (m.protectedKeys = { ...h }),
                      (!m.isActive && null === y) ||
                        (!f && !m.prevProp) ||
                        em(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let b =
                        ((c = m.prevProp),
                        "string" == typeof f
                          ? f !== c
                          : !!Array.isArray(f) && !nC(f, c)),
                      x =
                        b || (p === s && m.isActive && !v && g) || (e > d && g),
                      w = !1,
                      k = Array.isArray(f) ? f : [f],
                      T = k.reduce(r(p), {});
                    !1 === y && (T = {});
                    let { prevResolvedValues: P = {} } = m,
                      S = { ...P, ...T },
                      A = (e) => {
                        ((x = !0),
                          u.has(e) && ((w = !0), u.delete(e)),
                          (m.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in S) {
                      let e = T[t],
                        i = P[t];
                      if (!h.hasOwnProperty(t))
                        (ia(e) && ia(i) ? nC(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? A(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                            ? A(t)
                            : u.add(t);
                    }
                    ((m.prevProp = f),
                      (m.prevResolvedValues = T),
                      m.isActive && (h = { ...h, ...T }),
                      n && t.blockInitialAnimation && (x = !1));
                    let M = v && b,
                      V = !M || w;
                    x &&
                      V &&
                      l.push(
                        ...k.map((e) => {
                          let i = { type: p };
                          if (
                            "string" == typeof e &&
                            n &&
                            !M &&
                            t.manuallyAnimateOnMount &&
                            t.parent
                          ) {
                            let { parent: n } = t,
                              r = is(n, e);
                            if (n.enteringChildren && r) {
                              let { delayChildren: e } = r.transition || {};
                              i.delay = nV(n.enteringChildren, t, e);
                            }
                          }
                          return { animation: e, options: i };
                        }),
                      );
                  }
                  if (u.size) {
                    let e = {};
                    if ("boolean" != typeof o.initial) {
                      let i = is(
                        t,
                        Array.isArray(o.initial) ? o.initial[0] : o.initial,
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    (u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      (r && (r.liveStyle = !0), (e[i] = n ?? null));
                    }),
                      l.push({ animation: e }));
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    if (i[e].isActive === n) return Promise.resolve();
                    (t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, n),
                    ),
                      (i[e].isActive = n));
                    let r = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    i = nF();
                  },
                };
              })(t)));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          em(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }
      let nI = 0;
      class nz extends nB {
        constructor() {
          (super(...arguments), (this.id = nI++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          (e && e(this.id), t && (this.unmount = t(this.id)));
        }
        unmount() {}
      }
      let nU = { x: !1, y: !1 };
      function nN(t, e, i, n = { passive: !0 }) {
        return (t.addEventListener(e, i, n), () => t.removeEventListener(e, i));
      }
      let n$ = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function nW(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let nY = (t) => (e) => n$(e) && t(e, nW(e));
      function nH(t, e, i, n) {
        return nN(t, e, nY(i), n);
      }
      function nX(t) {
        return t.max - t.min;
      }
      function nK(t, e, i, n = 0.5) {
        ((t.origin = n),
          (t.originPoint = S(e.min, e.max, t.origin)),
          (t.scale = nX(i) / nX(e)),
          (t.translate = S(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function nG(t, e, i, n) {
        (nK(t.x, e.x, i.x, n ? n.originX : void 0),
          nK(t.y, e.y, i.y, n ? n.originY : void 0));
      }
      function nq(t, e, i) {
        ((t.min = i.min + e.min), (t.max = t.min + nX(e)));
      }
      function n_(t, e, i) {
        ((t.min = e.min - i.min), (t.max = t.min + nX(e)));
      }
      function nZ(t, e, i) {
        (n_(t.x, e.x, i.x), n_(t.y, e.y, i.y));
      }
      function nJ(t) {
        return [t("x"), t("y")];
      }
      let nQ = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        n0 = (t, e) => Math.abs(t - e);
      class n1 {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: r = !1,
            distanceThreshold: s = 3,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = n3(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(n0(t.x, e.x) ** 2 + n0(t.y, e.y) ** 2) >=
                    this.distanceThreshold);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = tp;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              (n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = n5(e, this.transformPagePoint)),
                td.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = n3(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : n5(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, s), n && n(t, s));
            }),
            !n$(t))
          )
            return;
          ((this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = s),
            (this.contextWindow = n || window));
          let o = n5(nW(t), this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = tp;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: u } = e;
          (u && u(t, n3(o, this.history)),
            (this.removeListeners = id(
              nH(this.contextWindow, "pointermove", this.handlePointerMove),
              nH(this.contextWindow, "pointerup", this.handlePointerUp),
              nH(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            tc(this.updatePoint));
        }
      }
      function n5(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function n2(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function n3({ point: t }, e) {
        return {
          point: t,
          delta: n2(t, n4(e)),
          offset: n2(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = n4(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > ic(0.1)));
            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = ip(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
          })(e, 0),
        };
      }
      function n4(t) {
        return t[t.length - 1];
      }
      function n9(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function n6(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
          { min: i, max: n }
        );
      }
      function n7(t, e, i) {
        return { min: n8(t, e), max: n8(t, i) };
      }
      function n8(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let rt = new WeakMap();
      class re {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = eu()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new n1(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                (i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(nW(t).point));
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === i || "y" === i
                      ? nU[i]
                        ? null
                        : ((nU[i] = !0),
                          () => {
                            nU[i] = !1;
                          })
                      : nU.x || nU.y
                        ? null
                        : ((nU.x = nU.y = !0),
                          () => {
                            nU.x = nU.y = !1;
                          })),
                  !this.openDragLock)
                )
                  return;
                ((this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  nJ((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (Y.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = nX(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && td.postRender(() => r(t, e)),
                  il(this.visualElement, "transform"));
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                ((this.latestPointerEvent = t), (this.latestPanInfo = e));
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  ((this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection));
                  return;
                }
                (this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e));
              },
              onSessionEnd: (t, e) => {
                ((this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  this.stop(t, e),
                  (this.latestPointerEvent = null),
                  (this.latestPanInfo = null));
              },
              resumeAnimation: () =>
                nJ(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play(),
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              distanceThreshold: i,
              contextWindow: nQ(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            n = e || this.latestPanInfo,
            r = this.isDragging;
          if ((this.cancel(), !r || !n || !i)) return;
          let { velocity: s } = n;
          this.startAnimation(s);
          let { onDragEnd: o } = this.getProps();
          o && td.postRender(() => o(i, n));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          (t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0));
          let { dragPropagation: i } = this.getProps();
          (!i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1));
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !ri(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? S(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? S(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s));
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            n = this.constraints;
          (t && e8(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: r },
                ) {
                  return { x: n9(t.x, i, r), y: n9(t.y, e, n) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: n7(t, "left", "right"), y: n7(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nJ((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !e8(e)) return !1;
          let n = e.current;
          Q(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref",
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = B(t, i),
                { scroll: r } = e;
              return (r && (R(n.x, r.offset.x), R(n.y, r.offset.y)), n);
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: n6((t = r.layout.layoutBox).x, s.x), y: n6(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o),
            );
            ((this.hasMutatedConstraints = !!t), t && (o = P(t)));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            nJ((o) => {
              if (!ri(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            il(this.visualElement, t),
            i.start(nA(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          nJ((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          nJ((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          nJ((e) => {
            let { drag: i } = this.getProps();
            if (!ri(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - S(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!e8(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          nJ((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = nX(t),
                  r = nX(e);
                return (
                  r > n
                    ? (i = i9(e.min, e.max - n, t.min))
                    : n > r && (i = i9(t.min, t.max - r, e.min)),
                  I(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = r
            ? r({}, "")
            : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            nJ((e) => {
              if (!ri(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set(S(r, s, n[e]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rt.set(this.visualElement, this);
          let t = nH(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              e8(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          (i &&
            !i.layout &&
            (i.root && i.root.updateScroll(), i.updateLayout()),
            td.read(e));
          let r = nN(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (nJ((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (r(), t(), n(), s && s());
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function ri(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class rn extends nB {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = to),
            (this.removeListeners = to),
            (this.controls = new re(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || to));
        }
        unmount() {
          (this.removeGroupControls(), this.removeListeners());
        }
      }
      let rr = (t) => (e, i) => {
        t && td.postRender(() => t(e, i));
      };
      class rs extends nB {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = to));
        }
        onPointerDown(t) {
          this.session = new n1(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nQ(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: rr(t),
            onStart: rr(e),
            onMove: i,
            onEnd: (t, e) => {
              (delete this.session, n && td.postRender(() => n(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = nH(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(),
            this.session && this.session.end());
        }
      }
      var ro = i(74201);
      let ra = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rl(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ru = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!H.test(t)) return t;
              t = parseFloat(t);
            }
            let i = rl(t, e.target.x),
              n = rl(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        rh = !1;
      class rd extends s.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          (!(function (t) {
            for (let e in t)
              ((eC[e] = t[e]), x(e) && (eC[e].isCSSVariable = !0));
          })(rp),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              rh && r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ra.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            { projection: s } = i;
          return (
            s &&
              ((s.isPresent = r),
              (rh = !0),
              n || t.layoutDependency !== e || void 0 === e || t.isPresent !== r
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    td.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ei.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          ((rh = !0),
            n &&
              (n.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(n),
              i && i.deregister && i.deregister(n)));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function rc(t) {
        let [e, i] = (0, ro.oO)(),
          n = (0, s.useContext)(eH.p);
        return (0, eY.jsx)(rd, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(ie),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let rp = {
        borderRadius: {
          ...ru,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ru,
        borderTopRightRadius: ru,
        borderBottomLeftRadius: ru,
        borderBottomRightRadius: ru,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = t$.parse(t);
            if (n.length > 5) return t;
            let r = t$.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            ((n[0 + s] /= o), (n[1 + s] /= a));
            let l = S(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var rm = i(71255);
      function rf(t) {
        return (0, rm.K)(t) && "ownerSVGElement" in t;
      }
      let rg = (t, e) => t.depth - e.depth;
      class ry {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          (t2(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          (t3(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(rg),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      let rv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rb = rv.length,
        rx = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rw = (t) => "number" == typeof t || H.test(t);
      function rk(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rT = rS(0, 0.5, i0),
        rP = rS(0.5, 0.95, to);
      function rS(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(i9(t, e, n)));
      }
      function rA(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function rM(t, e) {
        (rA(t.x, e.x), rA(t.y, e.y));
      }
      function rV(t, e) {
        ((t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin));
      }
      function rE(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function rC(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (Y.test(e) &&
              ((e = parseFloat(e)), (e = S(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = S(s.min, s.max, n);
          (t === s && (a -= e),
            (t.min = rE(t.min, e, i, a, r)),
            (t.max = rE(t.max, e, i, a, r)));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let rD = ["x", "scaleX", "originX"],
        rj = ["y", "scaleY", "originY"];
      function rR(t, e, i, n) {
        (rC(t.x, e, rD, i ? i.x : void 0, n ? n.x : void 0),
          rC(t.y, e, rj, i ? i.y : void 0, n ? n.y : void 0));
      }
      function rL(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rF(t) {
        return rL(t.x) && rL(t.y);
      }
      function rB(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function rO(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function rI(t, e) {
        return rO(t.x, e.x) && rO(t.y, e.y);
      }
      function rz(t) {
        return nX(t.x) / nX(t.y);
      }
      function rU(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class rN {
        constructor() {
          this.members = [];
        }
        add(t) {
          (t2(this.members, t), t.scheduleRender());
        }
        remove(t) {
          if (
            (t3(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            (i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            (e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete());
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let r$ = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        rW = ["", "X", "Y", "Z"],
        rY = 0;
      function rH(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function rX({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            ((this.id = rY++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  tu.value &&
                    (r$.nodes =
                      r$.calculatedTargetDeltas =
                      r$.calculatedProjections =
                        0),
                  this.nodes.forEach(rq),
                  this.nodes.forEach(r5),
                  this.nodes.forEach(r2),
                  this.nodes.forEach(r_),
                  tu.addProjectionMetrics && tu.addProjectionMetrics(r$));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0));
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ry());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new t4()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            ((this.isSVG = rf(e) && !(rf(e) && "svg" === e.tagName)),
              (this.instance = e));
            let { layoutId: i, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (n || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = 0,
                r = () => (this.root.updateBlockedByResize = !1);
              (td.read(() => {
                n = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  t !== n &&
                    ((n = t),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (i = (function (t, e) {
                      let i = t5.now(),
                        n = ({ timestamp: e }) => {
                          let r = e - i;
                          r >= 250 && (tc(n), t(r - 250));
                        };
                      return (td.setup(n, !0), () => tc(n));
                    })(r, 0)),
                    ra.hasAnimatedSinceResize &&
                      ((ra.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(r1)));
                }));
            }
            (i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                r &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let s =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        r8,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !rI(this.targetLayout, n),
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...io(s, "layout"), onPlay: o, onComplete: a };
                      ((r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, u));
                    } else
                      (e || r1(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = n;
                  },
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this));
            let t = this.getStack();
            (t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              tc(this.updateProjection));
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(r3),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[it];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      td,
                      !(t || i),
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              ((e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1));
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              (this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rJ));
              return;
            }
            if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(rQ);
              return;
            }
            ((this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(r0),
                  this.nodes.forEach(rK),
                  this.nodes.forEach(rG))
                : this.nodes.forEach(rQ),
              this.clearAllSnapshots());
            let t = t5.now();
            ((tp.delta = I(0, 1e3 / 60, t - tp.timestamp)),
              (tp.timestamp = t),
              (tp.isProcessing = !0),
              tm.update.process(tp),
              tm.preRender.process(tp),
              tm.render.process(tp),
              (tp.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ei.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(rZ), this.sharedNodes.forEach(r4));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              td.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            td.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                nX(this.snapshot.measuredBox.x) ||
                nX(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            ((this.layout = this.measure(!1)),
              (this.layoutCorrected = eu()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !rF(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || V(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              si((e = n).x),
              si(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return eu();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(sr))) {
              let { scroll: t } = this.root;
              t && (R(e.x, t.offset.x), R(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = eu();
            if ((rM(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && rM(e, t), R(e.x, r.offset.x), R(e.y, r.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = eu();
            rM(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              (!e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                F(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                V(n.latestValues) && F(i, n.latestValues));
            }
            return (V(this.latestValues) && F(i, this.latestValues), i);
          }
          removeTransform(t) {
            let e = eu();
            rM(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !V(i.latestValues)) continue;
              M(i.latestValues) && i.updateSnapshot();
              let n = eu();
              (rM(n, i.measurePageBox()),
                rR(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n,
                ));
            }
            return (V(this.latestValues) && rR(e, this.latestValues), e);
          }
          setTargetDelta(t) {
            ((this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tp.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty));
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (this.layout && (n || r)) {
              if (
                ((this.resolvedRelativeTargetAt = tp.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = eu()),
                    (this.relativeTargetOrigin = eu()),
                    nZ(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    rM(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = eu()), (this.targetWithTransforms = eu())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var s, o, a;
                  (this.forceRelativeParentToResolveTarget(),
                    (s = this.target),
                    (o = this.relativeTarget),
                    (a = this.relativeParent.target),
                    nq(s.x, o.x, a.x),
                    nq(s.y, o.y, a.y));
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox,
                          ))
                        : rM(this.target, this.layout.layoutBox),
                      j(this.target, this.targetDelta))
                    : rM(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = eu()),
                      (this.relativeTargetOrigin = eu()),
                      nZ(this.relativeTargetOrigin, this.target, t.target),
                      rM(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tu.value && r$.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              M(this.parent.latestValues) ||
              E(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === tp.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            rM(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              o = this.treeScale.y;
            (!(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      F(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), j(t, s)),
                    n && V(r.latestValues) && F(t, r.latestValues));
                }
                (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = eu())));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (rV(this.prevProjectionDelta.x, this.projectionDelta.x),
                rV(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              nG(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues,
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === o &&
                rU(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                rU(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a)),
              tu.value && r$.calculatedProjections++);
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = ea()),
              (this.projectionDelta = ea()),
              (this.projectionDeltaWithTransform = ea()));
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = ea();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let a = eu(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(r7)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (r9(o.x, t.x, n),
                  r9(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  (nZ(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    r6(p.x, m.x, a.x, n),
                    r6(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      rB(u.x, c.x) && rB(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = eu()),
                    rM(i, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = S(0, i.opacity ?? 1, rT(n))),
                        (t.opacityExit = S(e.opacity ?? 1, 0, rP(n))))
                      : s && (t.opacity = S(e.opacity ?? 1, i.opacity ?? 1, n));
                    for (let r = 0; r < rb; r++) {
                      let s = `border${rv[r]}Radius`,
                        o = rk(e, s),
                        a = rk(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || rw(o) === rw(a)
                          ? ((t[s] = Math.max(S(rx(o), rx(a), n), 0)),
                            (Y.test(a) || Y.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = S(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n));
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
          }
          startAnimation(t) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                (tc(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = td.update(() => {
                ((ra.hasAnimatedSinceResize = !0),
                  im.layout++,
                  this.motionValue || (this.motionValue = t8(0)),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = t0(t) ? t : t8(t);
                    return (n.start(nA("", n, e, i)), n.animation);
                  })(this.motionValue, [0, 1e3], {
                    ...t,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (e) => {
                      (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                    },
                    onStop: () => {
                      im.layout--;
                    },
                    onComplete: () => {
                      (im.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation());
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            (t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete"));
          }
          finishAnimation() {
            (this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                sn(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox,
                )
              ) {
                i = this.target || eu();
                let e = nX(this.layout.layoutBox.x);
                ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                let n = nX(this.layout.layoutBox.y);
                ((i.y.min = t.target.y.min), (i.y.max = i.y.min + n));
              }
              (rM(e, i),
                F(e, r),
                nG(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new rN()),
              this.sharedNodes.get(t).add(e));
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            (n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e }));
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && rH("z", t, n, this.animationValues);
            for (let e = 0; e < rW.length; e++)
              (rH(`rotate${rW[e]}`, t, n, this.animationValues),
                rH(`skew${rW[e]}`, t, n, this.animationValues));
            for (let e in (t.render(), n))
              (t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]));
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              ((this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = e3(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none"));
              return;
            }
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              (this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = e3(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !V(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)));
              return;
            }
            t.visibility = "";
            let r = n.animationValues || n.latestValues;
            this.applyTransformsToTarget();
            let s = (function (t, e, i) {
              let n = "",
                r = t.x.translate / e.x,
                s = t.y.translate / e.y,
                o = i?.z || 0;
              if (
                ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: r,
                  rotateY: s,
                  skewX: o,
                  skewY: a,
                } = i;
                (t && (n = `perspective(${t}px) ${n}`),
                  e && (n += `rotate(${e}deg) `),
                  r && (n += `rotateX(${r}deg) `),
                  s && (n += `rotateY(${s}deg) `),
                  o && (n += `skewX(${o}deg) `),
                  a && (n += `skewY(${a}deg) `));
              }
              let a = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                n || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, r);
            (i && (s = i(r, s)), (t.transform = s));
            let { x: o, y: a } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * o.origin}% ${100 * a.origin}% 0`),
            n.animationValues
              ? (t.opacity =
                  n === this
                    ? (r.opacity ?? this.latestValues.opacity ?? 1)
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : r.opacityExit)
              : (t.opacity =
                  n === this
                    ? void 0 !== r.opacity
                      ? r.opacity
                      : ""
                    : void 0 !== r.opacityExit
                      ? r.opacityExit
                      : 0),
            eC)) {
              if (void 0 === r[e]) continue;
              let { correct: i, applyTo: o, isCSSVariable: a } = eC[e],
                l = "none" === s ? r[e] : i(r[e], n);
              if (o) {
                let e = o.length;
                for (let i = 0; i < e; i++) t[o[i]] = l;
              } else
                a
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                n === this ? e3(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(rJ),
              this.root.sharedNodes.clear());
          }
        };
      }
      function rK(t) {
        t.updateLayout();
      }
      function rG(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = e.source !== t.layout.source;
          "size" === r
            ? nJ((t) => {
                let n = s ? e.measuredBox[t] : e.layoutBox[t],
                  r = nX(n);
                ((n.min = i[t].min), (n.max = n.min + r));
              })
            : sn(r, e.layoutBox, i) &&
              nJ((n) => {
                let r = s ? e.measuredBox[n] : e.layoutBox[n],
                  o = nX(i[n]);
                ((r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o)));
              });
          let o = ea();
          nG(o, i, e.layoutBox);
          let a = ea();
          s
            ? nG(a, t.applyTransform(n, !0), e.measuredBox)
            : nG(a, i, e.layoutBox);
          let l = !rF(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = eu();
                nZ(o, e.layoutBox, r.layoutBox);
                let a = eu();
                (nZ(a, i, s.layoutBox),
                  rI(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rq(t) {
        (tu.value && r$.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty)));
      }
      function r_(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rZ(t) {
        t.clearSnapshot();
      }
      function rJ(t) {
        t.clearMeasurements();
      }
      function rQ(t) {
        t.isLayoutDirty = !1;
      }
      function r0(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function r1(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function r5(t) {
        t.resolveTargetDelta();
      }
      function r2(t) {
        t.calcProjection();
      }
      function r3(t) {
        t.resetSkewAndRotation();
      }
      function r4(t) {
        t.removeLeadSnapshot();
      }
      function r9(t, e, i) {
        ((t.translate = S(e.translate, 0, i)),
          (t.scale = S(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function r6(t, e, i, n) {
        ((t.min = S(e.min, i.min, n)), (t.max = S(e.max, i.max, n)));
      }
      function r7(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let r8 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        st = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        se = st("applewebkit/") && !st("chrome/") ? Math.round : to;
      function si(t) {
        ((t.min = se(t.min)), (t.max = se(t.max)));
      }
      function sn(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(rz(e) - rz(i))))
        );
      }
      function sr(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let ss = rX({
          attachResizeListener: (t, e) => nN(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        so = { current: void 0 },
        sa = rX({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!so.current) {
              let t = new ss({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (so.current = t));
            }
            return so.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function sl(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document,
                i = void 0 ?? e.querySelectorAll(t);
              return i ? Array.from(i) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function su(t) {
        return !("touch" === t.pointerType || nU.x || nU.y);
      }
      function sh(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && td.postRender(() => r(e, nW(e)));
      }
      class sd extends nB {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = sl(t, i),
                o = (t) => {
                  if (!su(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ("function" != typeof n || !i) return;
                  let s = (t) => {
                    su(t) && (n(t), i.removeEventListener("pointerleave", s));
                  };
                  i.addEventListener("pointerleave", s, r);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", o, r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                sh(this.node, e, "Start"),
                (t) => sh(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      class sc extends nB {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = id(
            nN(this.node.current, "focus", () => this.onFocus()),
            nN(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      var sp = i(61380);
      let sm = (t, e) => !!e && (t === e || sm(t, e.parentElement)),
        sf = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        sg = new WeakSet();
      function sy(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function sv(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      let sb = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = sy(() => {
          if (sg.has(i)) return;
          sv(i, "down");
          let t = sy(() => {
            sv(i, "up");
          });
          (i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => sv(i, "cancel"), e));
        });
        (i.addEventListener("keydown", n, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", n),
            e,
          ));
      };
      function sx(t) {
        return n$(t) && !(nU.x || nU.y);
      }
      function sw(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && td.postRender(() => r(e, nW(e)));
      }
      class sk extends nB {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = sl(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!sx(t)) return;
                  sg.add(n);
                  let s = e(n, t),
                    o = (t, e) => {
                      (window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        sg.has(n) && sg.delete(n),
                        sx(t) &&
                          "function" == typeof s &&
                          s(t, { success: e }));
                    },
                    a = (t) => {
                      o(
                        t,
                        n === window ||
                          n === document ||
                          i.useGlobalTarget ||
                          sm(n, t.target),
                      );
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  (window.addEventListener("pointerup", a, r),
                    window.addEventListener("pointercancel", l, r));
                };
              return (
                n.forEach((t) => {
                  ((i.useGlobalTarget ? window : t).addEventListener(
                    "pointerdown",
                    o,
                    r,
                  ),
                    (0, sp.R)(t) &&
                      (t.addEventListener("focus", (t) => sb(t, r)),
                      sf.has(t.tagName) ||
                        -1 !== t.tabIndex ||
                        t.hasAttribute("tabindex") ||
                        (t.tabIndex = 0)));
                }),
                s
              );
            })(
              t,
              (t, e) => (
                sw(this.node, e, "Start"),
                (t, { success: e }) => sw(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let sT = new WeakMap(),
        sP = new WeakMap(),
        sS = (t) => {
          let e = sT.get(t.target);
          e && e(t);
        },
        sA = (t) => {
          t.forEach(sS);
        },
        sM = { some: 0, all: 1 };
      class sV extends nB {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : sM[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              sP.has(i) || sP.set(i, {});
              let n = sP.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(sA, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              sT.set(t, i),
              n.observe(t),
              () => {
                (sT.delete(t), n.unobserve(t));
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            (e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e));
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      let sE = (function (t, e) {
        if ("undefined" == typeof Proxy) return ir;
        let i = new Map(),
          n = (i, n) => ir(i, n, t, e);
        return new Proxy((t, e) => n(t, e), {
          get: (r, s) =>
            "create" === s
              ? n
              : (i.has(s) || i.set(s, ir(s, void 0, t, e)), i.get(s)),
        });
      })(
        {
          animation: { Feature: nO },
          exit: { Feature: nz },
          inView: { Feature: sV },
          tap: { Feature: sk },
          focus: { Feature: sc },
          hover: { Feature: sd },
          pan: { Feature: rs },
          drag: { Feature: rn, ProjectionNode: sa, MeasureLayout: rc },
          layout: { ProjectionNode: sa, MeasureLayout: rc },
        },
        (t, e) =>
          eW(t) ? new eN(e) : new eR(e, { allowProjection: t !== s.Fragment }),
      );
    },
    55513: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    42752: function (t, e, i) {
      i.d(e, {
        h: function () {
          return r;
        },
      });
      var n = i(67294);
      function r(t) {
        let e = (0, n.useRef)(null);
        return (null === e.current && (e.current = t()), e.current);
      }
    },
    18465: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(67294);
      let r = i(55513).j ? n.useLayoutEffect : n.useEffect;
    },
    61380: function (t, e, i) {
      i.d(e, {
        R: function () {
          return r;
        },
      });
      var n = i(71255);
      function r(t) {
        return (0, n.K)(t) && "offsetHeight" in t;
      }
    },
    71255: function (t, e, i) {
      i.d(e, {
        K: function () {
          return n;
        },
      });
      function n(t) {
        return "object" == typeof t && null !== t;
      }
    },
    98388: function (t, e, i) {
      i.d(e, {
        m6: function () {
          return tb;
        },
      });
      let n = (t, e) => {
          let i = Array(t.length + e.length);
          for (let e = 0; e < t.length; e++) i[e] = t[e];
          for (let n = 0; n < e.length; n++) i[t.length + n] = e[n];
          return i;
        },
        r = (t, e) => ({ classGroupId: t, validator: e }),
        s = (t = new Map(), e = null, i) => ({
          nextPart: t,
          validators: e,
          classGroupId: i,
        }),
        o = [],
        a = (t) => {
          let e = h(t),
            { conflictingClassGroups: i, conflictingClassGroupModifiers: r } =
              t;
          return {
            getClassGroupId: (t) => {
              if (t.startsWith("[") && t.endsWith("]")) return u(t);
              let i = t.split("-"),
                n = "" === i[0] && i.length > 1 ? 1 : 0;
              return l(i, n, e);
            },
            getConflictingClassGroupIds: (t, e) => {
              if (e) {
                let e = r[t],
                  s = i[t];
                return e ? (s ? n(s, e) : e) : s || o;
              }
              return i[t] || o;
            },
          };
        },
        l = (t, e, i) => {
          if (0 == t.length - e) return i.classGroupId;
          let n = t[e],
            r = i.nextPart.get(n);
          if (r) {
            let i = l(t, e + 1, r);
            if (i) return i;
          }
          let s = i.validators;
          if (null === s) return;
          let o = 0 === e ? t.join("-") : t.slice(e).join("-"),
            a = s.length;
          for (let t = 0; t < a; t++) {
            let e = s[t];
            if (e.validator(o)) return e.classGroupId;
          }
        },
        u = (t) =>
          -1 === t.slice(1, -1).indexOf(":")
            ? void 0
            : (() => {
                let e = t.slice(1, -1),
                  i = e.indexOf(":"),
                  n = e.slice(0, i);
                return n ? "arbitrary.." + n : void 0;
              })(),
        h = (t) => {
          let { theme: e, classGroups: i } = t;
          return d(i, e);
        },
        d = (t, e) => {
          let i = s();
          for (let n in t) c(t[n], i, n, e);
          return i;
        },
        c = (t, e, i, n) => {
          let r = t.length;
          for (let s = 0; s < r; s++) p(t[s], e, i, n);
        },
        p = (t, e, i, n) => {
          if ("string" == typeof t) {
            m(t, e, i);
            return;
          }
          if ("function" == typeof t) {
            f(t, e, i, n);
            return;
          }
          g(t, e, i, n);
        },
        m = (t, e, i) => {
          ("" === t ? e : y(e, t)).classGroupId = i;
        },
        f = (t, e, i, n) => {
          if (v(t)) {
            c(t(n), e, i, n);
            return;
          }
          (null === e.validators && (e.validators = []),
            e.validators.push(r(i, t)));
        },
        g = (t, e, i, n) => {
          let r = Object.entries(t),
            s = r.length;
          for (let t = 0; t < s; t++) {
            let [s, o] = r[t];
            c(o, y(e, s), i, n);
          }
        },
        y = (t, e) => {
          let i = t,
            n = e.split("-"),
            r = n.length;
          for (let t = 0; t < r; t++) {
            let e = n[t],
              r = i.nextPart.get(e);
            (r || ((r = s()), i.nextPart.set(e, r)), (i = r));
          }
          return i;
        },
        v = (t) => "isThemeGetter" in t && !0 === t.isThemeGetter,
        b = (t) => {
          if (t < 1) return { get: () => void 0, set: () => {} };
          let e = 0,
            i = Object.create(null),
            n = Object.create(null),
            r = (r, s) => {
              ((i[r] = s),
                ++e > t && ((e = 0), (n = i), (i = Object.create(null))));
            };
          return {
            get(t) {
              let e = i[t];
              return void 0 !== e
                ? e
                : void 0 !== (e = n[t])
                  ? (r(t, e), e)
                  : void 0;
            },
            set(t, e) {
              t in i ? (i[t] = e) : r(t, e);
            },
          };
        },
        x = [],
        w = (t, e, i, n, r) => ({
          modifiers: t,
          hasImportantModifier: e,
          baseClassName: i,
          maybePostfixModifierPosition: n,
          isExternal: r,
        }),
        k = (t) => {
          let { prefix: e, experimentalParseClassName: i } = t,
            n = (t) => {
              let e;
              let i = [],
                n = 0,
                r = 0,
                s = 0,
                o = t.length;
              for (let a = 0; a < o; a++) {
                let o = t[a];
                if (0 === n && 0 === r) {
                  if (":" === o) {
                    (i.push(t.slice(s, a)), (s = a + 1));
                    continue;
                  }
                  if ("/" === o) {
                    e = a;
                    continue;
                  }
                }
                "[" === o
                  ? n++
                  : "]" === o
                    ? n--
                    : "(" === o
                      ? r++
                      : ")" === o && r--;
              }
              let a = 0 === i.length ? t : t.slice(s),
                l = a,
                u = !1;
              return (
                a.endsWith("!")
                  ? ((l = a.slice(0, -1)), (u = !0))
                  : a.startsWith("!") && ((l = a.slice(1)), (u = !0)),
                w(i, u, l, e && e > s ? e - s : void 0)
              );
            };
          if (e) {
            let t = e + ":",
              i = n;
            n = (e) =>
              e.startsWith(t) ? i(e.slice(t.length)) : w(x, !1, e, void 0, !0);
          }
          if (i) {
            let t = n;
            n = (e) => i({ className: e, parseClassName: t });
          }
          return n;
        },
        T = (t) => {
          let e = new Map();
          return (
            t.orderSensitiveModifiers.forEach((t, i) => {
              e.set(t, 1e6 + i);
            }),
            (t) => {
              let i = [],
                n = [];
              for (let r = 0; r < t.length; r++) {
                let s = t[r],
                  o = "[" === s[0],
                  a = e.has(s);
                o || a
                  ? (n.length > 0 && (n.sort(), i.push(...n), (n = [])),
                    i.push(s))
                  : n.push(s);
              }
              return (n.length > 0 && (n.sort(), i.push(...n)), i);
            }
          );
        },
        P = (t) => ({
          cache: b(t.cacheSize),
          parseClassName: k(t),
          sortModifiers: T(t),
          ...a(t),
        }),
        S = /\s+/,
        A = (t, e) => {
          let {
              parseClassName: i,
              getClassGroupId: n,
              getConflictingClassGroupIds: r,
              sortModifiers: s,
            } = e,
            o = [],
            a = t.trim().split(S),
            l = "";
          for (let t = a.length - 1; t >= 0; t -= 1) {
            let e = a[t],
              {
                isExternal: u,
                modifiers: h,
                hasImportantModifier: d,
                baseClassName: c,
                maybePostfixModifierPosition: p,
              } = i(e);
            if (u) {
              l = e + (l.length > 0 ? " " + l : l);
              continue;
            }
            let m = !!p,
              f = n(m ? c.substring(0, p) : c);
            if (!f) {
              if (!m || !(f = n(c))) {
                l = e + (l.length > 0 ? " " + l : l);
                continue;
              }
              m = !1;
            }
            let g =
                0 === h.length ? "" : 1 === h.length ? h[0] : s(h).join(":"),
              y = d ? g + "!" : g,
              v = y + f;
            if (o.indexOf(v) > -1) continue;
            o.push(v);
            let b = r(f, m);
            for (let t = 0; t < b.length; ++t) {
              let e = b[t];
              o.push(y + e);
            }
            l = e + (l.length > 0 ? " " + l : l);
          }
          return l;
        },
        M = (...t) => {
          let e,
            i,
            n = 0,
            r = "";
          for (; n < t.length; )
            (e = t[n++]) && (i = V(e)) && (r && (r += " "), (r += i));
          return r;
        },
        V = (t) => {
          let e;
          if ("string" == typeof t) return t;
          let i = "";
          for (let n = 0; n < t.length; n++)
            t[n] && (e = V(t[n])) && (i && (i += " "), (i += e));
          return i;
        },
        E = [],
        C = (t) => {
          let e = (e) => e[t] || E;
          return ((e.isThemeGetter = !0), e);
        },
        D = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        j = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        R = /^\d+\/\d+$/,
        L = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        F =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        B = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        O = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        I =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        z = (t) => R.test(t),
        U = (t) => !!t && !Number.isNaN(Number(t)),
        N = (t) => !!t && Number.isInteger(Number(t)),
        $ = (t) => t.endsWith("%") && U(t.slice(0, -1)),
        W = (t) => L.test(t),
        Y = () => !0,
        H = (t) => F.test(t) && !B.test(t),
        X = () => !1,
        K = (t) => O.test(t),
        G = (t) => I.test(t),
        q = (t) => !Z(t) && !tn(t),
        _ = (t) => th(t, tm, X),
        Z = (t) => D.test(t),
        J = (t) => th(t, tf, H),
        Q = (t) => th(t, tg, U),
        tt = (t) => th(t, tc, X),
        te = (t) => th(t, tp, G),
        ti = (t) => th(t, tv, K),
        tn = (t) => j.test(t),
        tr = (t) => td(t, tf),
        ts = (t) => td(t, ty),
        to = (t) => td(t, tc),
        ta = (t) => td(t, tm),
        tl = (t) => td(t, tp),
        tu = (t) => td(t, tv, !0),
        th = (t, e, i) => {
          let n = D.exec(t);
          return !!n && (n[1] ? e(n[1]) : i(n[2]));
        },
        td = (t, e, i = !1) => {
          let n = j.exec(t);
          return !!n && (n[1] ? e(n[1]) : i);
        },
        tc = (t) => "position" === t || "percentage" === t,
        tp = (t) => "image" === t || "url" === t,
        tm = (t) => "length" === t || "size" === t || "bg-size" === t,
        tf = (t) => "length" === t,
        tg = (t) => "number" === t,
        ty = (t) => "family-name" === t,
        tv = (t) => "shadow" === t,
        tb = ((t, ...e) => {
          let i, n, r, s;
          let o = (t) => {
            let e = n(t);
            if (e) return e;
            let s = A(t, i);
            return (r(t, s), s);
          };
          return (
            (s = (a) => (
              (n = (i = P(e.reduce((t, e) => e(t), t()))).cache.get),
              (r = i.cache.set),
              (s = o),
              o(a)
            )),
            (...t) => s(M(...t))
          );
        })(() => {
          let t = C("color"),
            e = C("font"),
            i = C("text"),
            n = C("font-weight"),
            r = C("tracking"),
            s = C("leading"),
            o = C("breakpoint"),
            a = C("container"),
            l = C("spacing"),
            u = C("radius"),
            h = C("shadow"),
            d = C("inset-shadow"),
            c = C("text-shadow"),
            p = C("drop-shadow"),
            m = C("blur"),
            f = C("perspective"),
            g = C("aspect"),
            y = C("ease"),
            v = C("animate"),
            b = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            x = () => [
              "center",
              "top",
              "bottom",
              "left",
              "right",
              "top-left",
              "left-top",
              "top-right",
              "right-top",
              "bottom-right",
              "right-bottom",
              "bottom-left",
              "left-bottom",
            ],
            w = () => [...x(), tn, Z],
            k = () => ["auto", "hidden", "clip", "visible", "scroll"],
            T = () => ["auto", "contain", "none"],
            P = () => [tn, Z, l],
            S = () => [z, "full", "auto", ...P()],
            A = () => [N, "none", "subgrid", tn, Z],
            M = () => ["auto", { span: ["full", N, tn, Z] }, N, tn, Z],
            V = () => [N, "auto", tn, Z],
            E = () => ["auto", "min", "max", "fr", tn, Z],
            D = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
              "baseline",
              "center-safe",
              "end-safe",
            ],
            j = () => [
              "start",
              "end",
              "center",
              "stretch",
              "center-safe",
              "end-safe",
            ],
            R = () => ["auto", ...P()],
            L = () => [
              z,
              "auto",
              "full",
              "dvw",
              "dvh",
              "lvw",
              "lvh",
              "svw",
              "svh",
              "min",
              "max",
              "fit",
              ...P(),
            ],
            F = () => [t, tn, Z],
            B = () => [...x(), to, tt, { position: [tn, Z] }],
            O = () => [
              "no-repeat",
              { repeat: ["", "x", "y", "space", "round"] },
            ],
            I = () => ["auto", "cover", "contain", ta, _, { size: [tn, Z] }],
            H = () => [$, tr, J],
            X = () => ["", "none", "full", u, tn, Z],
            K = () => ["", U, tr, J],
            G = () => ["solid", "dashed", "dotted", "double"],
            th = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            td = () => [U, $, to, tt],
            tc = () => ["", "none", m, tn, Z],
            tp = () => ["none", U, tn, Z],
            tm = () => ["none", U, tn, Z],
            tf = () => [U, tn, Z],
            tg = () => [z, "full", ...P()];
          return {
            cacheSize: 500,
            theme: {
              animate: ["spin", "ping", "pulse", "bounce"],
              aspect: ["video"],
              blur: [W],
              breakpoint: [W],
              color: [Y],
              container: [W],
              "drop-shadow": [W],
              ease: ["in", "out", "in-out"],
              font: [q],
              "font-weight": [
                "thin",
                "extralight",
                "light",
                "normal",
                "medium",
                "semibold",
                "bold",
                "extrabold",
                "black",
              ],
              "inset-shadow": [W],
              leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
              perspective: [
                "dramatic",
                "near",
                "normal",
                "midrange",
                "distant",
                "none",
              ],
              radius: [W],
              shadow: [W],
              spacing: ["px", U],
              text: [W],
              "text-shadow": [W],
              tracking: [
                "tighter",
                "tight",
                "normal",
                "wide",
                "wider",
                "widest",
              ],
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", z, Z, tn, g] }],
              container: ["container"],
              columns: [{ columns: [U, Z, tn, a] }],
              "break-after": [{ "break-after": b() }],
              "break-before": [{ "break-before": b() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              sr: ["sr-only", "not-sr-only"],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: w() }],
              overflow: [{ overflow: k() }],
              "overflow-x": [{ "overflow-x": k() }],
              "overflow-y": [{ "overflow-y": k() }],
              overscroll: [{ overscroll: T() }],
              "overscroll-x": [{ "overscroll-x": T() }],
              "overscroll-y": [{ "overscroll-y": T() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: S() }],
              "inset-x": [{ "inset-x": S() }],
              "inset-y": [{ "inset-y": S() }],
              start: [{ start: S() }],
              end: [{ end: S() }],
              top: [{ top: S() }],
              right: [{ right: S() }],
              bottom: [{ bottom: S() }],
              left: [{ left: S() }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: [N, "auto", tn, Z] }],
              basis: [{ basis: [z, "full", "auto", a, ...P()] }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
              flex: [{ flex: [U, z, "auto", "initial", "none", Z] }],
              grow: [{ grow: ["", U, tn, Z] }],
              shrink: [{ shrink: ["", U, tn, Z] }],
              order: [{ order: [N, "first", "last", "none", tn, Z] }],
              "grid-cols": [{ "grid-cols": A() }],
              "col-start-end": [{ col: M() }],
              "col-start": [{ "col-start": V() }],
              "col-end": [{ "col-end": V() }],
              "grid-rows": [{ "grid-rows": A() }],
              "row-start-end": [{ row: M() }],
              "row-start": [{ "row-start": V() }],
              "row-end": [{ "row-end": V() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": E() }],
              "auto-rows": [{ "auto-rows": E() }],
              gap: [{ gap: P() }],
              "gap-x": [{ "gap-x": P() }],
              "gap-y": [{ "gap-y": P() }],
              "justify-content": [{ justify: [...D(), "normal"] }],
              "justify-items": [{ "justify-items": [...j(), "normal"] }],
              "justify-self": [{ "justify-self": ["auto", ...j()] }],
              "align-content": [{ content: ["normal", ...D()] }],
              "align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
              "align-self": [
                { self: ["auto", ...j(), { baseline: ["", "last"] }] },
              ],
              "place-content": [{ "place-content": D() }],
              "place-items": [{ "place-items": [...j(), "baseline"] }],
              "place-self": [{ "place-self": ["auto", ...j()] }],
              p: [{ p: P() }],
              px: [{ px: P() }],
              py: [{ py: P() }],
              ps: [{ ps: P() }],
              pe: [{ pe: P() }],
              pt: [{ pt: P() }],
              pr: [{ pr: P() }],
              pb: [{ pb: P() }],
              pl: [{ pl: P() }],
              m: [{ m: R() }],
              mx: [{ mx: R() }],
              my: [{ my: R() }],
              ms: [{ ms: R() }],
              me: [{ me: R() }],
              mt: [{ mt: R() }],
              mr: [{ mr: R() }],
              mb: [{ mb: R() }],
              ml: [{ ml: R() }],
              "space-x": [{ "space-x": P() }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": P() }],
              "space-y-reverse": ["space-y-reverse"],
              size: [{ size: L() }],
              w: [{ w: [a, "screen", ...L()] }],
              "min-w": [{ "min-w": [a, "screen", "none", ...L()] }],
              "max-w": [
                {
                  "max-w": [
                    a,
                    "screen",
                    "none",
                    "prose",
                    { screen: [o] },
                    ...L(),
                  ],
                },
              ],
              h: [{ h: ["screen", "lh", ...L()] }],
              "min-h": [{ "min-h": ["screen", "lh", "none", ...L()] }],
              "max-h": [{ "max-h": ["screen", "lh", ...L()] }],
              "font-size": [{ text: ["base", i, tr, J] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [{ font: [n, tn, Q] }],
              "font-stretch": [
                {
                  "font-stretch": [
                    "ultra-condensed",
                    "extra-condensed",
                    "condensed",
                    "semi-condensed",
                    "normal",
                    "semi-expanded",
                    "expanded",
                    "extra-expanded",
                    "ultra-expanded",
                    $,
                    Z,
                  ],
                },
              ],
              "font-family": [{ font: [ts, Z, e] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
              tracking: [{ tracking: [r, tn, Z] }],
              "line-clamp": [{ "line-clamp": [U, "none", tn, Q] }],
              leading: [{ leading: [s, ...P()] }],
              "list-image": [{ "list-image": ["none", tn, Z] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "list-style-type": [{ list: ["disc", "decimal", "none", tn, Z] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "placeholder-color": [{ placeholder: F() }],
              "text-color": [{ text: F() }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...G(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: [U, "from-font", "auto", tn, J] },
              ],
              "text-decoration-color": [{ decoration: F() }],
              "underline-offset": [{ "underline-offset": [U, "auto", tn, Z] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: P() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    tn,
                    Z,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", tn, Z] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: B() }],
              "bg-repeat": [{ bg: O() }],
              "bg-size": [{ bg: I() }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      linear: [
                        { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                        N,
                        tn,
                        Z,
                      ],
                      radial: ["", tn, Z],
                      conic: [N, tn, Z],
                    },
                    tl,
                    te,
                  ],
                },
              ],
              "bg-color": [{ bg: F() }],
              "gradient-from-pos": [{ from: H() }],
              "gradient-via-pos": [{ via: H() }],
              "gradient-to-pos": [{ to: H() }],
              "gradient-from": [{ from: F() }],
              "gradient-via": [{ via: F() }],
              "gradient-to": [{ to: F() }],
              rounded: [{ rounded: X() }],
              "rounded-s": [{ "rounded-s": X() }],
              "rounded-e": [{ "rounded-e": X() }],
              "rounded-t": [{ "rounded-t": X() }],
              "rounded-r": [{ "rounded-r": X() }],
              "rounded-b": [{ "rounded-b": X() }],
              "rounded-l": [{ "rounded-l": X() }],
              "rounded-ss": [{ "rounded-ss": X() }],
              "rounded-se": [{ "rounded-se": X() }],
              "rounded-ee": [{ "rounded-ee": X() }],
              "rounded-es": [{ "rounded-es": X() }],
              "rounded-tl": [{ "rounded-tl": X() }],
              "rounded-tr": [{ "rounded-tr": X() }],
              "rounded-br": [{ "rounded-br": X() }],
              "rounded-bl": [{ "rounded-bl": X() }],
              "border-w": [{ border: K() }],
              "border-w-x": [{ "border-x": K() }],
              "border-w-y": [{ "border-y": K() }],
              "border-w-s": [{ "border-s": K() }],
              "border-w-e": [{ "border-e": K() }],
              "border-w-t": [{ "border-t": K() }],
              "border-w-r": [{ "border-r": K() }],
              "border-w-b": [{ "border-b": K() }],
              "border-w-l": [{ "border-l": K() }],
              "divide-x": [{ "divide-x": K() }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": K() }],
              "divide-y-reverse": ["divide-y-reverse"],
              "border-style": [{ border: [...G(), "hidden", "none"] }],
              "divide-style": [{ divide: [...G(), "hidden", "none"] }],
              "border-color": [{ border: F() }],
              "border-color-x": [{ "border-x": F() }],
              "border-color-y": [{ "border-y": F() }],
              "border-color-s": [{ "border-s": F() }],
              "border-color-e": [{ "border-e": F() }],
              "border-color-t": [{ "border-t": F() }],
              "border-color-r": [{ "border-r": F() }],
              "border-color-b": [{ "border-b": F() }],
              "border-color-l": [{ "border-l": F() }],
              "divide-color": [{ divide: F() }],
              "outline-style": [{ outline: [...G(), "none", "hidden"] }],
              "outline-offset": [{ "outline-offset": [U, tn, Z] }],
              "outline-w": [{ outline: ["", U, tr, J] }],
              "outline-color": [{ outline: F() }],
              shadow: [{ shadow: ["", "none", h, tu, ti] }],
              "shadow-color": [{ shadow: F() }],
              "inset-shadow": [{ "inset-shadow": ["none", d, tu, ti] }],
              "inset-shadow-color": [{ "inset-shadow": F() }],
              "ring-w": [{ ring: K() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: F() }],
              "ring-offset-w": [{ "ring-offset": [U, J] }],
              "ring-offset-color": [{ "ring-offset": F() }],
              "inset-ring-w": [{ "inset-ring": K() }],
              "inset-ring-color": [{ "inset-ring": F() }],
              "text-shadow": [{ "text-shadow": ["none", c, tu, ti] }],
              "text-shadow-color": [{ "text-shadow": F() }],
              opacity: [{ opacity: [U, tn, Z] }],
              "mix-blend": [
                { "mix-blend": [...th(), "plus-darker", "plus-lighter"] },
              ],
              "bg-blend": [{ "bg-blend": th() }],
              "mask-clip": [
                {
                  "mask-clip": [
                    "border",
                    "padding",
                    "content",
                    "fill",
                    "stroke",
                    "view",
                  ],
                },
                "mask-no-clip",
              ],
              "mask-composite": [
                { mask: ["add", "subtract", "intersect", "exclude"] },
              ],
              "mask-image-linear-pos": [{ "mask-linear": [U] }],
              "mask-image-linear-from-pos": [{ "mask-linear-from": td() }],
              "mask-image-linear-to-pos": [{ "mask-linear-to": td() }],
              "mask-image-linear-from-color": [{ "mask-linear-from": F() }],
              "mask-image-linear-to-color": [{ "mask-linear-to": F() }],
              "mask-image-t-from-pos": [{ "mask-t-from": td() }],
              "mask-image-t-to-pos": [{ "mask-t-to": td() }],
              "mask-image-t-from-color": [{ "mask-t-from": F() }],
              "mask-image-t-to-color": [{ "mask-t-to": F() }],
              "mask-image-r-from-pos": [{ "mask-r-from": td() }],
              "mask-image-r-to-pos": [{ "mask-r-to": td() }],
              "mask-image-r-from-color": [{ "mask-r-from": F() }],
              "mask-image-r-to-color": [{ "mask-r-to": F() }],
              "mask-image-b-from-pos": [{ "mask-b-from": td() }],
              "mask-image-b-to-pos": [{ "mask-b-to": td() }],
              "mask-image-b-from-color": [{ "mask-b-from": F() }],
              "mask-image-b-to-color": [{ "mask-b-to": F() }],
              "mask-image-l-from-pos": [{ "mask-l-from": td() }],
              "mask-image-l-to-pos": [{ "mask-l-to": td() }],
              "mask-image-l-from-color": [{ "mask-l-from": F() }],
              "mask-image-l-to-color": [{ "mask-l-to": F() }],
              "mask-image-x-from-pos": [{ "mask-x-from": td() }],
              "mask-image-x-to-pos": [{ "mask-x-to": td() }],
              "mask-image-x-from-color": [{ "mask-x-from": F() }],
              "mask-image-x-to-color": [{ "mask-x-to": F() }],
              "mask-image-y-from-pos": [{ "mask-y-from": td() }],
              "mask-image-y-to-pos": [{ "mask-y-to": td() }],
              "mask-image-y-from-color": [{ "mask-y-from": F() }],
              "mask-image-y-to-color": [{ "mask-y-to": F() }],
              "mask-image-radial": [{ "mask-radial": [tn, Z] }],
              "mask-image-radial-from-pos": [{ "mask-radial-from": td() }],
              "mask-image-radial-to-pos": [{ "mask-radial-to": td() }],
              "mask-image-radial-from-color": [{ "mask-radial-from": F() }],
              "mask-image-radial-to-color": [{ "mask-radial-to": F() }],
              "mask-image-radial-shape": [
                { "mask-radial": ["circle", "ellipse"] },
              ],
              "mask-image-radial-size": [
                {
                  "mask-radial": [
                    {
                      closest: ["side", "corner"],
                      farthest: ["side", "corner"],
                    },
                  ],
                },
              ],
              "mask-image-radial-pos": [{ "mask-radial-at": x() }],
              "mask-image-conic-pos": [{ "mask-conic": [U] }],
              "mask-image-conic-from-pos": [{ "mask-conic-from": td() }],
              "mask-image-conic-to-pos": [{ "mask-conic-to": td() }],
              "mask-image-conic-from-color": [{ "mask-conic-from": F() }],
              "mask-image-conic-to-color": [{ "mask-conic-to": F() }],
              "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
              "mask-origin": [
                {
                  "mask-origin": [
                    "border",
                    "padding",
                    "content",
                    "fill",
                    "stroke",
                    "view",
                  ],
                },
              ],
              "mask-position": [{ mask: B() }],
              "mask-repeat": [{ mask: O() }],
              "mask-size": [{ mask: I() }],
              "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
              "mask-image": [{ mask: ["none", tn, Z] }],
              filter: [{ filter: ["", "none", tn, Z] }],
              blur: [{ blur: tc() }],
              brightness: [{ brightness: [U, tn, Z] }],
              contrast: [{ contrast: [U, tn, Z] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", p, tu, ti] }],
              "drop-shadow-color": [{ "drop-shadow": F() }],
              grayscale: [{ grayscale: ["", U, tn, Z] }],
              "hue-rotate": [{ "hue-rotate": [U, tn, Z] }],
              invert: [{ invert: ["", U, tn, Z] }],
              saturate: [{ saturate: [U, tn, Z] }],
              sepia: [{ sepia: ["", U, tn, Z] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none", tn, Z] }],
              "backdrop-blur": [{ "backdrop-blur": tc() }],
              "backdrop-brightness": [{ "backdrop-brightness": [U, tn, Z] }],
              "backdrop-contrast": [{ "backdrop-contrast": [U, tn, Z] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": ["", U, tn, Z] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [U, tn, Z] }],
              "backdrop-invert": [{ "backdrop-invert": ["", U, tn, Z] }],
              "backdrop-opacity": [{ "backdrop-opacity": [U, tn, Z] }],
              "backdrop-saturate": [{ "backdrop-saturate": [U, tn, Z] }],
              "backdrop-sepia": [{ "backdrop-sepia": ["", U, tn, Z] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": P() }],
              "border-spacing-x": [{ "border-spacing-x": P() }],
              "border-spacing-y": [{ "border-spacing-y": P() }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "",
                    "all",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    "none",
                    tn,
                    Z,
                  ],
                },
              ],
              "transition-behavior": [{ transition: ["normal", "discrete"] }],
              duration: [{ duration: [U, "initial", tn, Z] }],
              ease: [{ ease: ["linear", "initial", y, tn, Z] }],
              delay: [{ delay: [U, tn, Z] }],
              animate: [{ animate: ["none", v, tn, Z] }],
              backface: [{ backface: ["hidden", "visible"] }],
              perspective: [{ perspective: [f, tn, Z] }],
              "perspective-origin": [{ "perspective-origin": w() }],
              rotate: [{ rotate: tp() }],
              "rotate-x": [{ "rotate-x": tp() }],
              "rotate-y": [{ "rotate-y": tp() }],
              "rotate-z": [{ "rotate-z": tp() }],
              scale: [{ scale: tm() }],
              "scale-x": [{ "scale-x": tm() }],
              "scale-y": [{ "scale-y": tm() }],
              "scale-z": [{ "scale-z": tm() }],
              "scale-3d": ["scale-3d"],
              skew: [{ skew: tf() }],
              "skew-x": [{ "skew-x": tf() }],
              "skew-y": [{ "skew-y": tf() }],
              transform: [{ transform: [tn, Z, "", "none", "gpu", "cpu"] }],
              "transform-origin": [{ origin: w() }],
              "transform-style": [{ transform: ["3d", "flat"] }],
              translate: [{ translate: tg() }],
              "translate-x": [{ "translate-x": tg() }],
              "translate-y": [{ "translate-y": tg() }],
              "translate-z": [{ "translate-z": tg() }],
              "translate-none": ["translate-none"],
              accent: [{ accent: F() }],
              appearance: [{ appearance: ["none", "auto"] }],
              "caret-color": [{ caret: F() }],
              "color-scheme": [
                {
                  scheme: [
                    "normal",
                    "dark",
                    "light",
                    "light-dark",
                    "only-dark",
                    "only-light",
                  ],
                },
              ],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    tn,
                    Z,
                  ],
                },
              ],
              "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
              "pointer-events": [{ "pointer-events": ["auto", "none"] }],
              resize: [{ resize: ["none", "", "y", "x"] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": P() }],
              "scroll-mx": [{ "scroll-mx": P() }],
              "scroll-my": [{ "scroll-my": P() }],
              "scroll-ms": [{ "scroll-ms": P() }],
              "scroll-me": [{ "scroll-me": P() }],
              "scroll-mt": [{ "scroll-mt": P() }],
              "scroll-mr": [{ "scroll-mr": P() }],
              "scroll-mb": [{ "scroll-mb": P() }],
              "scroll-ml": [{ "scroll-ml": P() }],
              "scroll-p": [{ "scroll-p": P() }],
              "scroll-px": [{ "scroll-px": P() }],
              "scroll-py": [{ "scroll-py": P() }],
              "scroll-ps": [{ "scroll-ps": P() }],
              "scroll-pe": [{ "scroll-pe": P() }],
              "scroll-pt": [{ "scroll-pt": P() }],
              "scroll-pr": [{ "scroll-pr": P() }],
              "scroll-pb": [{ "scroll-pb": P() }],
              "scroll-pl": [{ "scroll-pl": P() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": [
                    "auto",
                    "scroll",
                    "contents",
                    "transform",
                    tn,
                    Z,
                  ],
                },
              ],
              fill: [{ fill: ["none", ...F()] }],
              "stroke-w": [{ stroke: [U, tr, J, Q] }],
              stroke: [{ stroke: ["none", ...F()] }],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-x",
                "border-w-y",
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-x",
                "border-color-y",
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              translate: ["translate-x", "translate-y", "translate-none"],
              "translate-none": [
                "translate",
                "translate-x",
                "translate-y",
                "translate-z",
              ],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
            orderSensitiveModifiers: [
              "*",
              "**",
              "after",
              "backdrop",
              "before",
              "details-content",
              "file",
              "first-letter",
              "first-line",
              "marker",
              "placeholder",
              "selection",
            ],
          };
        });
    },
  },
]);
