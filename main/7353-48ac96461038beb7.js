"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7353],
  {
    81356: function (t, e, i) {
      i.d(e, {
        v: function () {
          return tl;
        },
      });
      var n = i(62777),
        r = i(14400),
        s = i(26166),
        o = i(22081);
      let a = { current: !1 };
      var l = i(27726);
      let u = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function h(t, e, i, n) {
        if (t === e && i === n) return l.Z;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = u((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : u(r(t), e, n));
      }
      var c = i(90415),
        d = i(75129);
      let p = h(0.33, 1.53, 0.69, 0.99),
        m = (0, d.M)(p),
        f = (0, c.o)(m),
        v = (t) =>
          (t *= 2) < 1 ? 0.5 * m(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      var g = i(27255),
        y = i(20204),
        x = i(1117),
        P = i(41568),
        w = i(25386),
        T = i(56737);
      let b = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (T.P.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        A = (t) => null !== t;
      function S(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(A),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      class D {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          ((this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = x.X.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise());
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, P.m)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          ((this.resolvedAt = x.X.now()), (this.hasAttemptedResolve = !0));
          let {
            name: i,
            type: r,
            velocity: s,
            delay: o,
            onComplete: l,
            onUpdate: u,
            isGenerator: h,
          } = this.options;
          if (
            !h &&
            !(function (t, e, i, r) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let o = t[t.length - 1],
                a = b(s, e),
                l = b(o, e);
              return (
                (0, w.K)(
                  a === l,
                  `You are trying to animate ${e} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`,
                ),
                !!a &&
                  !!l &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || (0, n.xD)(i)) && r))
              );
            })(t, i, r, s)
          ) {
            if (a.current || !o) {
              (u && u(S(t, this.options, e)),
                l && l(),
                this.resolveFinishedPromise());
              return;
            }
            this.options.duration = 0;
          }
          let c = this.initPlayback(t, e);
          !1 !== c &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...c }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          ((this.options.type = "keyframes"), (this.options.ease = "linear"));
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var V = i(24169),
        E = i(79976),
        M = i(83624),
        C = i(3038);
      function R(t, e, i) {
        let n = Math.max(e - 5, 0);
        return (0, C.R)(i - t(n), e - n);
      }
      let k = {
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
      function L(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let j = ["duration", "bounce"],
        F = ["stiffness", "damping", "mass"];
      function B(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function O(t = k.visualDuration, e = k.bounce) {
        let i;
        let s =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: o, restDelta: a } = s,
          l = s.keyframes[0],
          u = s.keyframes[s.keyframes.length - 1],
          h = { done: !1, value: l },
          {
            stiffness: c,
            damping: d,
            mass: p,
            duration: m,
            velocity: f,
            isResolvedFromDuration: v,
          } = (function (t) {
            let e = {
              velocity: k.velocity,
              stiffness: k.stiffness,
              damping: k.damping,
              mass: k.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!B(t, F) && B(t, j)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  r = 2 * (0, V.u)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: k.mass, stiffness: n, damping: r };
              } else {
                let i = (function ({
                  duration: t = k.duration,
                  bounce: e = k.bounce,
                  velocity: i = k.velocity,
                  mass: n = k.mass,
                }) {
                  let s, o;
                  (0, w.K)(
                    t <= (0, r.w)(k.maxDuration),
                    "Spring duration must be 10 seconds or less",
                  );
                  let a = 1 - e;
                  ((a = (0, V.u)(k.minDamping, k.maxDamping, a)),
                    (t = (0, V.u)(k.minDuration, k.maxDuration, (0, r.X)(t))),
                    a < 1
                      ? ((s = (e) => {
                          let n = e * a,
                            r = n * t;
                          return 0.001 - ((n - i) / L(e, a)) * Math.exp(-r);
                        }),
                        (o = (e) => {
                          let n = e * a * t,
                            r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = L(Math.pow(e, 2), a);
                          return (
                            ((n * i + i - r) *
                              Math.exp(-n) *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            o
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (o = (e) => t * t * (i - e) * Math.exp(-e * t))));
                  let l = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(s, o, 5 / t);
                  if (((t = (0, r.w)(t)), isNaN(l)))
                    return {
                      stiffness: k.stiffness,
                      damping: k.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(l, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: k.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...s, velocity: -(0, r.X)(s.velocity || 0) }),
          g = f || 0,
          y = d / (2 * Math.sqrt(c * p)),
          x = u - l,
          P = (0, r.X)(Math.sqrt(c / p)),
          T = 5 > Math.abs(x);
        if (
          (o || (o = T ? k.restSpeed.granular : k.restSpeed.default),
          a || (a = T ? k.restDelta.granular : k.restDelta.default),
          y < 1)
        ) {
          let t = L(P, y);
          i = (e) =>
            u -
            Math.exp(-y * P * e) *
              (((g + y * P * x) / t) * Math.sin(t * e) + x * Math.cos(t * e));
        } else if (1 === y)
          i = (t) => u - Math.exp(-P * t) * (x + (g + P * x) * t);
        else {
          let t = P * Math.sqrt(y * y - 1);
          i = (e) => {
            let i = Math.exp(-y * P * e),
              n = Math.min(t * e, 300);
            return (
              u -
              (i * ((g + y * P * x) * Math.sinh(n) + t * x * Math.cosh(n))) / t
            );
          };
        }
        let b = {
          calculatedDuration: (v && m) || null,
          next: (t) => {
            let e = i(t);
            if (v) h.done = t >= m;
            else {
              let n = 0;
              y < 1 && (n = 0 === t ? (0, r.w)(g) : R(i, t, e));
              let s = Math.abs(n) <= o,
                l = Math.abs(u - e) <= a;
              h.done = s && l;
            }
            return ((h.value = h.done ? u : e), h);
          },
          toString: () => {
            let t = Math.min((0, n.iI)(b), n.EO),
              e = (0, n.wk)((e) => b.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return b;
      }
      function $({
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
        let c, d;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - t) < Math.abs(l - t)
                  ? a
                  : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / n),
          w = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = w(t);
            ((m.done = Math.abs(e) <= u), (m.value = m.done ? x : i));
          },
          b = (t) => {
            f(m.value) &&
              ((c = t),
              (d = O({
                keyframes: [m.value, v(m.value)],
                velocity: R(w, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), T(t), b(t)),
              void 0 !== c && t >= c)
                ? d.next(t - c)
                : (e || T(t), m);
            },
          }
        );
      }
      let W = h(0.42, 0, 1, 1),
        I = h(0, 0, 0.58, 1),
        U = h(0.42, 0, 0.58, 1),
        N = (t) => Array.isArray(t) && "number" != typeof t[0],
        X = {
          linear: l.Z,
          easeIn: W,
          easeInOut: U,
          easeOut: I,
          circIn: g.Z7,
          circInOut: g.X7,
          circOut: g.Bn,
          backIn: m,
          backInOut: f,
          backOut: p,
          anticipate: v,
        },
        z = (t) => {
          if ((0, n.qE)(t)) {
            (0, w.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [e, i, n, r] = t;
            return h(e, i, n, r);
          }
          return "string" == typeof t
            ? ((0, w.k)(void 0 !== X[t], `Invalid easing type '${t}'`), X[t])
            : t;
        };
      var Y = i(71884),
        K = i(30533);
      function Z({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = N(n) ? n.map(z) : z(n),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, K.Y)(e)).map((e) => e * t),
          a = (0, Y.s)(o, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || U).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      let H = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => s.Wi.update(e, !0),
            stop: () => (0, s.Pn)(e),
            now: () =>
              s.frameData.isProcessing ? s.frameData.timestamp : x.X.now(),
          };
        },
        q = { decay: $, inertia: $, tween: Z, keyframes: Z, spring: O },
        _ = (t) => t / 100;
      class G extends D {
        constructor(t) {
          (super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            }));
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || P.e;
          ((this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n,
          )),
            this.resolver.scheduleResolve());
        }
        flatten() {
          (super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes),
              ));
        }
        initPlayback(t) {
          let e, i;
          let {
              type: r = "keyframes",
              repeat: s = 0,
              repeatDelay: o = 0,
              repeatType: a,
              velocity: l = 0,
            } = this.options,
            u = (0, n.xD)(r) ? r : q[r] || Z;
          u !== Z &&
            "number" != typeof t[0] &&
            ((e = (0, M.z)(_, (0, E.C)(t[0], t[1]))), (t = [0, 100]));
          let h = u({ ...this.options, keyframes: t });
          ("mirror" === a &&
            (i = u({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -l,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (0, n.iI)(h)));
          let { calculatedDuration: c } = h,
            d = c + o;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: c,
            resolvedDuration: d,
            totalDuration: d * (s + 1) - o,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          (this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause());
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: d,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
                ? (this.currentTime = this.holdTime)
                : (this.currentTime =
                    Math.round(t - this.startTime) * this.speed));
          let v = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          ((this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u));
          let y = this.currentTime,
            x = r;
          if (d) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (x = s)),
              (y = (0, V.u)(0, 1, i) * h));
          }
          let P = g ? { done: !1, value: a[0] } : x.next(y);
          o && (P.value = o(P.value));
          let { done: w } = P;
          g ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let T =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            T && void 0 !== n && (P.value = S(a, this.options, n)),
            f && f(P.value),
            T && this.finish(),
            P
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, r.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(t) {
          ((t = (0, r.w)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          ((this.playbackSpeed = t),
            e && (this.time = (0, r.X)(this.currentTime)));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = H, onPlay: e, startTime: i } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))), e && e());
          let n = this.driver.now();
          (null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
              ? "finished" === this.state && (this.startTime = n)
              : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          ((this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          (this.teardown(), (this.state = "finished"));
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          (null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise());
        }
        teardown() {
          ((this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel());
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return ((this.startTime = 0), this.tick(t, !0));
        }
      }
      let J = new Set(["opacity", "clipPath", "filter", "transform"]),
        Q = (0, i(70942).X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate"),
        ),
        tt = { anticipate: v, backInOut: f, circInOut: g.X7 };
      class te extends D {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          ((this.resolver = new y.s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n,
          )),
            this.resolver.scheduleResolve());
        }
        initPlayback(t, e) {
          var i;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!l.owner || !l.owner.current) return !1;
          if (
            ("string" == typeof o && (0, n.Vc)() && o in tt && (o = tt[o]),
            (i = this.options),
            (0, n.xD)(i.type) || "spring" === i.type || !(0, n.hR)(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new G({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  (r.push((n = i.sample(s)).value), (s += 10));
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            (1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes"));
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: r = 0,
              duration: s = 300,
              repeat: o = 0,
              repeatType: a = "loop",
              ease: l = "easeInOut",
              times: u,
            } = {},
          ) {
            let h = { [e]: i };
            u && (h.offset = u);
            let c = (0, n.eB)(l, s);
            return (
              Array.isArray(c) && (h.easing = c),
              t.animate(h, {
                delay: r,
                duration: s,
                easing: Array.isArray(c) ? "linear" : c,
                fill: "both",
                iterations: o + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (c.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((0, n._F)(c, this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  (l.set(S(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise());
                }),
            {
              animation: c,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, r.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, r.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, r.w)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return l.Z;
            let { animation: i } = e;
            (0, n._F)(i, t);
          } else this.pendingTimeline = t;
          return l.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          ("finished" === e.playState && this.updateFinishedPromise(),
            e.play());
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          (this.resolveFinishedPromise(), this.updateFinishedPromise());
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: s,
            ease: o,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              c = new G({
                ...h,
                keyframes: i,
                duration: n,
                type: s,
                ease: o,
                times: a,
                isGenerator: !0,
              }),
              d = (0, r.w)(this.time);
            t.setWithVelocity(c.sample(d - 10).value, c.sample(d).value, 10);
          }
          let { onStop: l } = this.options;
          (l && l(), this.cancel());
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            Q() &&
            i &&
            J.has(i) &&
            !a &&
            !l &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      var ti = i(27598);
      let tn = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        tr = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ts = { type: "keyframes", duration: 0.8 },
        to = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ta = (t, { keyframes: e }) =>
          e.length > 2
            ? ts
            : ti.G.has(t)
              ? t.startsWith("scale")
                ? tr(e[1])
                : tn
              : to,
        tl =
          (t, e, i, l = {}, u, h) =>
          (c) => {
            let d = (0, n.ev)(l, t) || {},
              p = d.delay || l.delay || 0,
              { elapsed: m = 0 } = l;
            m -= (0, r.w)(p);
            let f = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...d,
              delay: -m,
              onUpdate: (t) => {
                (e.set(t), d.onUpdate && d.onUpdate(t));
              },
              onComplete: () => {
                (c(), d.onComplete && d.onComplete());
              },
              name: t,
              motionValue: e,
              element: h ? void 0 : u,
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
            })(d) && (f = { ...f, ...ta(t, f) }),
              f.duration && (f.duration = (0, r.w)(f.duration)),
              f.repeatDelay && (f.repeatDelay = (0, r.w)(f.repeatDelay)),
              void 0 !== f.from && (f.keyframes[0] = f.from));
            let v = !1;
            if (
              ((!1 !== f.type && (0 !== f.duration || f.repeatDelay)) ||
                ((f.duration = 0), 0 !== f.delay || (v = !0)),
              (a.current || o.c.skipAnimations) &&
                ((v = !0), (f.duration = 0), (f.delay = 0)),
              v && !h && void 0 !== e.get())
            ) {
              let t = S(f.keyframes, d);
              if (void 0 !== t)
                return (
                  s.Wi.update(() => {
                    (f.onUpdate(t), f.onComplete());
                  }),
                  new n.sP([])
                );
            }
            return !h && te.supports(f) ? new te(f) : new G(f);
          };
    },
    76432: function (t, e, i) {
      i.d(e, {
        d: function () {
          return m;
        },
      });
      var n = i(52248),
        r = i(62777),
        s = i(83845),
        o = i(66803),
        a = i(30607),
        l = i(93785),
        u = i(81356),
        h = i(26166);
      function c(t, e, { delay: i = 0, transitionOverride: n, type: c } = {}) {
        var d;
        let {
          transition: p = t.getDefaultTransition(),
          transitionEnd: m,
          ...f
        } = e;
        n && (p = n);
        let v = [],
          g = c && t.animationState && t.animationState.getState()[c];
        for (let e in f) {
          let n = t.getValue(
              e,
              null !== (d = t.latestValues[e]) && void 0 !== d ? d : null,
            ),
            o = f[e];
          if (
            void 0 === o ||
            (g &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return ((e[i] = !1), n);
              })(g, e))
          )
            continue;
          let c = { delay: i, ...(0, r.ev)(p || {}, e) },
            m = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, l.s)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, h.Wi);
              null !== t && ((c.startTime = t), (m = !0));
            }
          }
          ((0, a.K)(t, e),
            n.start(
              (0, u.v)(
                e,
                n,
                o,
                t.shouldReduceMotion && s.z.has(e) ? { type: !1 } : c,
                t,
                m,
              ),
            ));
          let y = n.animation;
          y && v.push(y);
        }
        return (
          m &&
            Promise.all(v).then(() => {
              h.Wi.update(() => {
                m && (0, o.C)(t, m);
              });
            }),
          v
        );
      }
      function d(t, e, i = {}) {
        var r;
        let s = (0, n.x)(
            t,
            e,
            "exit" === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0,
          ),
          { transition: o = t.getDefaultTransition() || {} } = s || {};
        i.transitionOverride && (o = i.transitionOverride);
        let a = s ? () => Promise.all(c(t, s, i)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = o;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(p)
                        .forEach((t, n) => {
                          (t.notify("AnimationStart", e),
                            o.push(
                              d(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e),
                              ),
                            ));
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, s, a, i);
                }
              : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([a(), l(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
          return t().then(() => e());
        }
      }
      function p(t, e) {
        return t.sortNodePosition(e);
      }
      function m(t, e, i = {}) {
        let r;
        if ((t.notify("AnimationStart", e), Array.isArray(e)))
          r = Promise.all(e.map((e) => d(t, e, i)));
        else if ("string" == typeof e) r = d(t, e, i);
        else {
          let s = "function" == typeof e ? (0, n.x)(t, e, i.custom) : e;
          r = Promise.all(c(t, s, i));
        }
        return r.then(() => {
          t.notify("AnimationComplete", e);
        });
      }
    },
    68588: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = "data-" + (0, i(93193).D)("framerAppearId");
    },
    93785: function (t, e, i) {
      i.d(e, {
        s: function () {
          return r;
        },
      });
      var n = i(68588);
      function r(t) {
        return t.props[n.M];
      }
    },
    48488: function (t, e, i) {
      i.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    15947: function (t, e, i) {
      i.d(e, {
        oO: function () {
          return s;
        },
      });
      var n = i(67294),
        r = i(240);
      function s(t = !0) {
        let e = (0, n.useContext)(r.O);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: s, register: o } = e,
          a = (0, n.useId)();
        (0, n.useEffect)(() => {
          t && o(a);
        }, [t]);
        let l = (0, n.useCallback)(() => t && s && s(a), [a, s, t]);
        return !i && s ? [!1, l] : [!0];
      }
    },
    25364: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(67294).createContext)({});
    },
    16014: function (t, e, i) {
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
    240: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(67294).createContext)(null);
    },
    27255: function (t, e, i) {
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = i(90415),
        r = i(75129);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, r.M)(s),
        a = (0, n.o)(s);
    },
    90415: function (t, e, i) {
      i.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    75129: function (t, e, i) {
      i.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    89727: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return s;
        },
      });
      var n = i(22081);
      let r = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (i = !0),
          l = r.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  (s.has(e) && (l.schedule(e), t()), e(o));
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return (r && s.add(t), a.has(t) || a.add(t), t);
                  },
                  cancel: (t) => {
                    (i.delete(t), s.delete(t));
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    ((n = !0),
                      ([e, i] = [i, e]),
                      e.forEach(a),
                      e.clear(),
                      (n = !1),
                      r && ((r = !1), l.process(t)));
                  },
                };
                return l;
              })(a)),
              t
            ),
            {},
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: c,
            preRender: d,
            render: p,
            postRender: m,
          } = l,
          f = () => {
            let r = n.c.useManualTiming ? o.timestamp : performance.now();
            ((i = !1),
              (o.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              u.process(o),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              m.process(o),
              (o.isProcessing = !1),
              i && e && ((s = !1), t(f)));
          },
          v = () => {
            ((i = !0), (s = !0), o.isProcessing || t(f));
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = l[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || v(), n.schedule(t, e, r))),
              t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) l[r[e]].cancel(t);
          },
          state: o,
          steps: l,
        };
      }
    },
    26166: function (t, e, i) {
      i.d(e, {
        Pn: function () {
          return s;
        },
        Wi: function () {
          return r;
        },
        frameData: function () {
          return o;
        },
        yL: function () {
          return a;
        },
      });
      var n = i(27726);
      let {
        schedule: r,
        cancel: s,
        state: o,
        steps: a,
      } = (0, i(89727).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.Z,
        !0,
      );
    },
    1117: function (t, e, i) {
      let n;
      i.d(e, {
        X: function () {
          return a;
        },
      });
      var r = i(22081),
        s = i(26166);
      function o() {
        n = void 0;
      }
      let a = {
        now: () => (
          void 0 === n &&
            a.set(
              s.frameData.isProcessing || r.c.useManualTiming
                ? s.frameData.timestamp
                : performance.now(),
            ),
          n
        ),
        set: (t) => {
          ((n = t), queueMicrotask(o));
        },
      };
    },
    67353: function (t, e, i) {
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return i5;
        },
      });
      var r,
        s,
        o,
        a = i(48488);
      function l(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function u(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      var h = i(52248);
      let c = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        d = ["initial", ...c];
      var p = i(76432);
      let m = d.length,
        f = [...c].reverse(),
        v = c.length;
      function g(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function y() {
        return {
          animate: g(!0),
          whileInView: g(),
          whileHover: g(),
          whileTap: g(),
          whileDrag: g(),
          whileFocus: g(),
          exit: g(),
        };
      }
      class x {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      class P extends x {
        constructor(t) {
          (super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (0, p.d)(t, e, i),
                      ),
                    ),
                  i = y(),
                  r = !0,
                  s = (e) => (i, n) => {
                    var r;
                    let s = (0, h.x)(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0,
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function o(o) {
                  let { props: h } = t,
                    c =
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
                        for (let t = 0; t < m; t++) {
                          let n = d[t],
                            r = e.props[n];
                          (u(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    g = new Set(),
                    y = {},
                    x = 1 / 0;
                  for (let e = 0; e < v; e++) {
                    var P;
                    let d = f[e],
                      m = i[d],
                      v = void 0 !== h[d] ? h[d] : c[d],
                      w = u(v),
                      T = d === o ? m.isActive : null;
                    !1 === T && (x = e);
                    let b = v === c[d] && v !== h[d] && w;
                    if (
                      (b && r && t.manuallyAnimateOnMount && (b = !1),
                      (m.protectedKeys = { ...y }),
                      (!m.isActive && null === T) ||
                        (!v && !m.prevProp) ||
                        n(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let A =
                        ((P = m.prevProp),
                        "string" == typeof v
                          ? v !== P
                          : !!Array.isArray(v) && !l(v, P)),
                      S =
                        A || (d === o && m.isActive && !b && w) || (e > x && w),
                      D = !1,
                      V = Array.isArray(v) ? v : [v],
                      E = V.reduce(s(d), {});
                    !1 === T && (E = {});
                    let { prevResolvedValues: M = {} } = m,
                      C = { ...M, ...E },
                      R = (e) => {
                        ((S = !0),
                          g.has(e) && ((D = !0), g.delete(e)),
                          (m.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in C) {
                      let e = E[t],
                        i = M[t];
                      if (!y.hasOwnProperty(t))
                        ((0, a.C)(e) && (0, a.C)(i) ? l(e, i) : e === i)
                          ? void 0 !== e && g.has(t)
                            ? R(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                            ? R(t)
                            : g.add(t);
                    }
                    ((m.prevProp = v),
                      (m.prevResolvedValues = E),
                      m.isActive && (y = { ...y, ...E }),
                      r && t.blockInitialAnimation && (S = !1));
                    let k = !(b && A) || D;
                    S &&
                      k &&
                      p.push(
                        ...V.map((t) => ({
                          animation: t,
                          options: { type: d },
                        })),
                      );
                  }
                  if (g.size) {
                    let e = {};
                    (g.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      (r && (r.liveStyle = !0), (e[i] = null != n ? n : null));
                    }),
                      p.push({ animation: e }));
                  }
                  let w = !!p.length;
                  return (
                    r &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (w = !1),
                    (r = !1),
                    w ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    (null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n));
                    let s = o(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    ((i = y()), (r = !0));
                  },
                };
              })(t)));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
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
          var t;
          (this.node.animationState.reset(),
            null === (t = this.unmountControls) ||
              void 0 === t ||
              t.call(this));
        }
      }
      let w = 0;
      class T extends x {
        constructor() {
          (super(...arguments), (this.id = w++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      var b = i(27726),
        A = i(25386),
        S = i(62777),
        D = i(14400);
      function V(t, e, i, n = { passive: !0 }) {
        return (t.addEventListener(e, i, n), () => t.removeEventListener(e, i));
      }
      function E(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let M = (t) => (e) => (0, S.DJ)(e) && t(e, E(e));
      function C(t, e, i, n) {
        return V(t, e, M(i), n);
      }
      let R = (t, e) => Math.abs(t - e);
      var k = i(83624),
        L = i(26166);
      class j {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
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
              let i = O(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(R(t.x, e.x) ** 2 + R(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = L.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              (n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = F(e, this.transformPagePoint)),
                L.Wi.update(this.updatePoint, !0));
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
              let s = O(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : F(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, s), n && n(t, s));
            }),
            !(0, S.DJ)(t))
          )
            return;
          ((this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window));
          let s = F(E(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = L.frameData;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          (l && l(t, O(s, this.history)),
            (this.removeListeners = (0, k.z)(
              C(this.contextWindow, "pointermove", this.handlePointerMove),
              C(this.contextWindow, "pointerup", this.handlePointerUp),
              C(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            (0, L.Pn)(this.updatePoint));
        }
      }
      function F(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function B(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function O({ point: t }, e) {
        return {
          point: t,
          delta: B(t, $(e)),
          offset: B(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = $(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, D.w)(0.1)));
            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, D.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
          })(e, 0),
        };
      }
      function $(t) {
        return t[t.length - 1];
      }
      function W(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var I = i(58946),
        U = i(40179);
      function N(t) {
        return t.max - t.min;
      }
      function X(t, e, i, n = 0.5) {
        ((t.origin = n),
          (t.originPoint = (0, U.t)(e.min, e.max, t.origin)),
          (t.scale = N(i) / N(e)),
          (t.translate = (0, U.t)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function z(t, e, i, n) {
        (X(t.x, e.x, i.x, n ? n.originX : void 0),
          X(t.y, e.y, i.y, n ? n.originY : void 0));
      }
      function Y(t, e, i) {
        ((t.min = i.min + e.min), (t.max = t.min + N(e)));
      }
      function K(t, e, i) {
        ((t.min = e.min - i.min), (t.max = t.min + N(e)));
      }
      function Z(t, e, i) {
        (K(t.x, e.x, i.x), K(t.y, e.y, i.y));
      }
      var H = i(24169);
      function q(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function _(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
          { min: i, max: n }
        );
      }
      function G(t, e, i) {
        return { min: J(t, e), max: J(t, i) };
      }
      function J(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let Q = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        tt = () => ({ x: Q(), y: Q() }),
        te = () => ({ min: 0, max: 0 }),
        ti = () => ({ x: te(), y: te() });
      function tn(t) {
        return [t("x"), t("y")];
      }
      function tr({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function ts(t) {
        return void 0 === t || 1 === t;
      }
      function to({ scale: t, scaleX: e, scaleY: i }) {
        return !ts(t) || !ts(e) || !ts(i);
      }
      function ta(t) {
        return (
          to(t) ||
          tl(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function tl(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function tu(t, e, i, n, r) {
        return (void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e);
      }
      function th(t, e = 0, i = 1, n, r) {
        ((t.min = tu(t.min, e, i, n, r)), (t.max = tu(t.max, e, i, n, r)));
      }
      function tc(t, { x: e, y: i }) {
        (th(t.x, e.translate, e.scale, e.originPoint),
          th(t.y, i.translate, i.scale, i.originPoint));
      }
      function td(t, e) {
        ((t.min = t.min + e), (t.max = t.max + e));
      }
      function tp(t, e, i, n, r = 0.5) {
        let s = (0, U.t)(t.min, t.max, r);
        th(t, e, i, s, n);
      }
      function tm(t, e) {
        (tp(t.x, e.x, e.scaleX, e.scale, e.originX),
          tp(t.y, e.y, e.scaleY, e.scale, e.originY));
      }
      function tf(t, e) {
        return tr(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      var tv = i(96190),
        tg = i(81356);
      let ty = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var tx = i(30607);
      let tP = new WeakMap();
      class tw {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ti()),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new j(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                (i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(E(t).point));
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
                  (this.openDragLock = (0, S.KV)(i)),
                  !this.openDragLock)
                )
                  return;
                ((this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  tn((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tv.aQ.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = N(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && L.Wi.postRender(() => r(t, e)),
                  (0, tx.K)(this.visualElement, "transform"));
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
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
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                tn((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: ty(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && L.Wi.postRender(() => r(t, e));
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
          if (!i || !tT(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, U.t)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, U.t)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s));
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                  ? void 0
                  : t.layout,
            r = this.constraints;
          (e && W(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: r },
                ) {
                  return { x: q(t.x, i, r), y: q(t.y, e, n) };
                })(n.layoutBox, e))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: G(t, "left", "right"), y: G(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tn((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !W(e)) return !1;
          let n = e.current;
          (0, A.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = tf(t, i),
                { scroll: r } = e;
              return (r && (td(n.x, r.offset.x), td(n.y, r.offset.y)), n);
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: _((t = r.layout.layoutBox).x, s.x), y: _(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o),
            );
            ((this.hasMutatedConstraints = !!t), t && (o = tr(t)));
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
            tn((o) => {
              if (!tT(o, e, this.currentDirection)) return;
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
            (0, tx.K)(this.visualElement, t),
            i.start((0, tg.v)(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          tn((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          tn((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
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
          tn((e) => {
            let { drag: i } = this.getProps();
            if (!tT(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - (0, U.t)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!W(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          tn((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = N(t),
                  r = N(e);
                return (
                  r > n
                    ? (i = (0, I.Y)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, I.Y)(t.min, t.max - r, e.min)),
                  (0, H.u)(0, 1, i)
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
            tn((e) => {
              if (!tT(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, U.t)(r, s, n[e]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tP.set(this.visualElement, this);
          let t = C(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              W(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          (i &&
            !i.layout &&
            (i.root && i.root.updateScroll(), i.updateLayout()),
            L.Wi.read(e));
          let r = V(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tn((e) => {
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
      function tT(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class tb extends x {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = b.Z),
            (this.removeListeners = b.Z),
            (this.controls = new tw(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || b.Z));
        }
        unmount() {
          (this.removeGroupControls(), this.removeListeners());
        }
      }
      let tA = (t) => (e, i) => {
        t && L.Wi.postRender(() => t(e, i));
      };
      class tS extends x {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = b.Z));
        }
        onPointerDown(t) {
          this.session = new j(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ty(this.node),
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
            onSessionStart: tA(t),
            onStart: tA(e),
            onMove: i,
            onEnd: (t, e) => {
              (delete this.session, n && L.Wi.postRender(() => n(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = C(
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
      var tD = i(85893),
        tV = i(67294),
        tE = i(15947),
        tM = i(25364);
      let tC = (0, tV.createContext)({}),
        tR = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function tk(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tL = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tv.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = tk(t, e.target.x),
            n = tk(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var tj = i(56737);
      let tF = {},
        { schedule: tB, cancel: tO } = (0, i(89727).Z)(queueMicrotask, !1);
      class t$ extends tV.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          (Object.assign(tF, tI),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (tR.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    L.Wi.postRender(() => {
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
            tB.postRender(() => {
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
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function tW(t) {
        let [e, i] = (0, tE.oO)(),
          n = (0, tV.useContext)(tM.p);
        return (0, tD.jsx)(t$, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, tV.useContext)(tC),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let tI = {
        borderRadius: {
          ...tL,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tL,
        borderTopRightRadius: tL,
        borderBottomLeftRadius: tL,
        borderBottomRightRadius: tL,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = tj.P.parse(t);
            if (n.length > 5) return t;
            let r = tj.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            ((n[0 + s] /= o), (n[1 + s] /= a));
            let l = (0, U.t)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              r(n)
            );
          },
        },
      };
      var tU = i(33234),
        tN = i(40406),
        tX = i(93785),
        tz = i(1117),
        tY = i(10010);
      let tK = (t, e) => t.depth - e.depth;
      class tZ {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          ((0, tY.y4)(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          ((0, tY.cl)(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(tK),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      var tH = i(21560),
        tq = i(8715);
      function t_(t) {
        let e = (0, tN.i)(t) ? t.get() : t;
        return (0, tq.p)(e) ? e.toValue() : e;
      }
      var tG = i(27255);
      let tJ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        tQ = tJ.length,
        t0 = (t) => ("string" == typeof t ? parseFloat(t) : t),
        t1 = (t) => "number" == typeof t || tv.px.test(t);
      function t2(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let t6 = t3(0, 0.5, tG.Bn),
        t5 = t3(0.5, 0.95, b.Z);
      function t3(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, I.Y)(t, e, n)));
      }
      function t9(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function t4(t, e) {
        (t9(t.x, e.x), t9(t.y, e.y));
      }
      function t8(t, e) {
        ((t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin));
      }
      function t7(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function et(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (tv.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, U.t)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, U.t)(s.min, s.max, n);
          (t === s && (a -= e),
            (t.min = t7(t.min, e, i, a, r)),
            (t.max = t7(t.max, e, i, a, r)));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let ee = ["x", "scaleX", "originX"],
        ei = ["y", "scaleY", "originY"];
      function en(t, e, i, n) {
        (et(t.x, e, ee, i ? i.x : void 0, n ? n.x : void 0),
          et(t.y, e, ei, i ? i.y : void 0, n ? n.y : void 0));
      }
      function er(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function es(t) {
        return er(t.x) && er(t.y);
      }
      function eo(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function ea(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function el(t, e) {
        return ea(t.x, e.x) && ea(t.y, e.y);
      }
      function eu(t) {
        return N(t.x) / N(t.y);
      }
      function eh(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class ec {
        constructor() {
          this.members = [];
        }
        add(t) {
          ((0, tY.y4)(this.members, t), t.scheduleRender());
        }
        remove(t) {
          if (
            ((0, tY.cl)(this.members, t),
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
      let ed = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        ep = "undefined" != typeof window && void 0 !== window.MotionDebug,
        em = ["", "X", "Y", "Z"],
        ef = { visibility: "hidden" },
        ev = 0;
      function eg(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function ey({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            ((this.id = ev++),
              (this.animationId = 0),
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
                  ep &&
                    (ed.totalNodes =
                      ed.resolvedTargetDeltas =
                      ed.recalculatedProjection =
                        0),
                  this.nodes.forEach(ew),
                  this.nodes.forEach(eE),
                  this.nodes.forEach(eM),
                  this.nodes.forEach(eT),
                  ep && window.MotionDebug.record(ed));
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
            this.root === this && (this.nodes = new tZ());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new tH.L()),
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
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            ((this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e));
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                ((this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = tz.X.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && ((0, L.Pn)(n), t(r - 250));
                      };
                    return (L.Wi.read(n, !0), () => (0, L.Pn)(n));
                  })(n, 0)),
                  tR.hasAnimatedSinceResize &&
                    ((tR.hasAnimatedSinceResize = !1), this.nodes.forEach(eV)));
              });
            }
            (n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        eF,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !el(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      (this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u));
                      let e = {
                        ...(0, S.ev)(r, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      ((s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e));
                    } else
                      (e || eV(this),
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
              (0, L.Pn)(this.updateProjection));
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
              this.nodes && this.nodes.forEach(eC),
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
                  let n = (0, tX.s)(i);
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      L.Wi,
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
                this.nodes.forEach(eA));
              return;
            }
            (this.isUpdating || this.nodes.forEach(eS),
              (this.isUpdating = !1),
              this.nodes.forEach(eD),
              this.nodes.forEach(ex),
              this.nodes.forEach(eP),
              this.clearAllSnapshots());
            let t = tz.X.now();
            ((L.frameData.delta = (0, H.u)(
              0,
              1e3 / 60,
              t - L.frameData.timestamp,
            )),
              (L.frameData.timestamp = t),
              (L.frameData.isProcessing = !0),
              L.yL.update.process(L.frameData),
              L.yL.preRender.process(L.frameData),
              L.yL.render.process(L.frameData),
              (L.frameData.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), tB.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(eb), this.sharedNodes.forEach(eR));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              L.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            L.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
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
              (this.layoutCorrected = ti()),
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
              e)
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
              e = this.projectionDelta && !es(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || ta(this.latestValues) || s) &&
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
              e$((e = n).x),
              e$(e.y),
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
            var t;
            let { visualElement: e } = this.options;
            if (!e) return ti();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(eI)
              )
            ) {
              let { scroll: t } = this.root;
              t && (td(i.x, t.offset.x), td(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = ti();
            if (
              (t4(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && t4(i, t),
                td(i.x, r.offset.x),
                td(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = ti();
            t4(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              (!e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                tm(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                ta(n.latestValues) && tm(i, n.latestValues));
            }
            return (ta(this.latestValues) && tm(i, this.latestValues), i);
          }
          removeTransform(t) {
            let e = ti();
            t4(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !ta(i.latestValues)) continue;
              to(i.latestValues) && i.updateSnapshot();
              let n = ti();
              (t4(n, i.measurePageBox()),
                en(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n,
                ));
            }
            return (ta(this.latestValues) && en(e, this.latestValues), e);
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
              this.relativeParent.resolvedRelativeTargetAt !==
                L.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty));
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = L.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = ti()),
                    (this.relativeTargetOrigin = ti()),
                    Z(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    t4(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = ti()), (this.targetWithTransforms = ti())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      Y(i.x, n.x, r.x),
                      Y(i.y, n.y, r.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : t4(this.target, this.layout.layoutBox),
                        tc(this.target, this.targetDelta))
                      : t4(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = ti()),
                      (this.relativeTargetOrigin = ti()),
                      Z(this.relativeTargetOrigin, this.target, t.target),
                      t4(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                ep && ed.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              to(this.parent.latestValues) ||
              tl(this.parent.latestValues)
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
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === L.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            t4(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
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
                      tm(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), tc(t, s)),
                    n && ta(r.latestValues) && tm(t, r.latestValues));
                }
                (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = ti())));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (t8(this.prevProjectionDelta.x, this.projectionDelta.x),
                t8(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              z(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues,
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                eh(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                eh(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              ep && ed.recalculatedProjection++);
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = tt()),
              (this.projectionDelta = tt()),
              (this.projectionDeltaWithTransform = tt()));
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = tt();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let a = ti(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(ej)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (ek(o.x, t.x, n),
                  ek(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, m;
                  (Z(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    eL(p.x, m.x, a.x, n),
                    eL(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      eo(u.x, d.x) && eo(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = ti()),
                    t4(i, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, U.t)(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          t6(n),
                        )),
                        (t.opacityExit = (0, U.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          t5(n),
                        )))
                      : s &&
                        (t.opacity = (0, U.t)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n,
                        ));
                    for (let r = 0; r < tQ; r++) {
                      let s = `border${tJ[r]}Radius`,
                        o = t2(e, s),
                        a = t2(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || t1(o) === t1(a)
                          ? ((t[s] = Math.max((0, U.t)(t0(o), t0(a), n), 0)),
                            (tv.aQ.test(a) || tv.aQ.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, U.t)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n));
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
          }
          startAnimation(t) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, L.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = L.Wi.update(() => {
                ((tR.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, tN.i)(0) ? 0 : (0, tU.BX)(0);
                    return (n.start((0, tg.v)("", n, 1e3, i)), n.animation);
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                    },
                    onComplete: () => {
                      (t.onComplete && t.onComplete(),
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
                eW(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox,
                )
              ) {
                i = this.target || ti();
                let e = N(this.layout.layoutBox.x);
                ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                let n = N(this.layout.layoutBox.y);
                ((i.y.min = t.target.y.min), (i.y.max = i.y.min + n));
              }
              (t4(e, i),
                tm(e, r),
                z(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new ec()),
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
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
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
            i.z && eg("z", t, n, this.animationValues);
            for (let e = 0; e < em.length; e++)
              (eg(`rotate${em[e]}`, t, n, this.animationValues),
                eg(`skew${em[e]}`, t, n, this.animationValues));
            for (let e in (t.render(), n))
              (t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]));
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ef;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  t_(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    t_(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !ta(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            (this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
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
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform)));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${100 * l.origin}% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                      ? o.opacityExit
                      : 0),
            tF)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = tF[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? t_(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eA),
              this.root.sharedNodes.clear());
          }
        };
      }
      function ex(t) {
        t.updateLayout();
      }
      function eP(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? tn((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = N(n);
                ((n.min = e[t].min), (n.max = n.min + r));
              })
            : eW(r, i.layoutBox, e) &&
              tn((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = N(e[n]);
                ((r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o)));
              });
          let o = tt();
          z(o, e, i.layoutBox);
          let a = tt();
          s
            ? z(a, t.applyTransform(n, !0), i.measuredBox)
            : z(a, e, i.layoutBox);
          let l = !es(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = ti();
                Z(o, i.layoutBox, r.layoutBox);
                let a = ti();
                (Z(a, e, s.layoutBox),
                  el(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function ew(t) {
        (ep && ed.totalNodes++,
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
      function eT(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function eb(t) {
        t.clearSnapshot();
      }
      function eA(t) {
        t.clearMeasurements();
      }
      function eS(t) {
        t.isLayoutDirty = !1;
      }
      function eD(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function eV(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function eE(t) {
        t.resolveTargetDelta();
      }
      function eM(t) {
        t.calcProjection();
      }
      function eC(t) {
        t.resetSkewAndRotation();
      }
      function eR(t) {
        t.removeLeadSnapshot();
      }
      function ek(t, e, i) {
        ((t.translate = (0, U.t)(e.translate, 0, i)),
          (t.scale = (0, U.t)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function eL(t, e, i, n) {
        ((t.min = (0, U.t)(e.min, i.min, n)),
          (t.max = (0, U.t)(e.max, i.max, n)));
      }
      function ej(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eF = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        eB = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        eO = eB("applewebkit/") && !eB("chrome/") ? Math.round : b.Z;
      function e$(t) {
        ((t.min = eO(t.min)), (t.max = eO(t.max)));
      }
      function eW(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(eu(e) - eu(i))))
        );
      }
      function eI(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let eU = ey({
          attachResizeListener: (t, e) => V(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        eN = { current: void 0 },
        eX = ey({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!eN.current) {
              let t = new eU({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (eN.current = t));
            }
            return eN.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function ez(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && L.Wi.postRender(() => r(e, E(e)));
      }
      class eY extends x {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, S.Mr)(
              t,
              (t) => (
                ez(this.node, t, "Start"),
                (t) => ez(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      class eK extends x {
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
          this.unmount = (0, k.z)(
            V(this.node.current, "focus", () => this.onFocus()),
            V(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      function eZ(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && L.Wi.postRender(() => r(e, E(e)));
      }
      class eH extends x {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (0, S.OD)(
              t,
              (t) => (
                eZ(this.node, t, "Start"),
                (t, { success: e }) => eZ(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let eq = new WeakMap(),
        e_ = new WeakMap(),
        eG = (t) => {
          let e = eq.get(t.target);
          e && e(t);
        },
        eJ = (t) => {
          t.forEach(eG);
        },
        eQ = { some: 0, all: 1 };
      class e0 extends x {
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
              threshold: "number" == typeof n ? n : eQ[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              e_.has(i) || e_.set(i, {});
              let n = e_.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(eJ, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              eq.set(t, i),
              n.observe(t),
              () => {
                (eq.delete(t), n.unobserve(t));
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
      let e1 = (0, tV.createContext)({ strict: !1 });
      var e2 = i(16014);
      let e6 = (0, tV.createContext)({});
      function e5(t) {
        return n(t.animate) || d.some((e) => u(t[e]));
      }
      function e3(t) {
        return !!(e5(t) || t.variants);
      }
      function e9(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var e4 = i(11741);
      let e8 = {
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
        e7 = {};
      for (let t in e8) e7[t] = { isEnabled: (e) => e8[t].some((t) => !!e[t]) };
      let it = Symbol.for("motionComponentSymbol");
      var ie = i(240),
        ii = i(58868),
        ir = i(68588);
      let is = [
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
      function io(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (is.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ia = i(79432),
        il = i(96681);
      let iu = (t) => (e, i) => {
        let r = (0, tV.useContext)(e6),
          s = (0, tV.useContext)(ie.O),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onUpdate: i,
              },
              r,
              s,
              o,
            ) {
              let a = {
                latestValues: (function (t, e, i, r) {
                  let s = {},
                    o = r(t, {});
                  for (let t in o) s[t] = t_(o[t]);
                  let { initial: a, animate: l } = t,
                    u = e5(t),
                    h = e3(t);
                  e &&
                    h &&
                    !u &&
                    !1 !== t.inherit &&
                    (void 0 === a && (a = e.initial),
                    void 0 === l && (l = e.animate));
                  let c = !!i && !1 === i.initial,
                    d = (c = c || !1 === a) ? l : a;
                  if (d && "boolean" != typeof d && !n(d)) {
                    let e = Array.isArray(d) ? d : [d];
                    for (let i = 0; i < e.length; i++) {
                      let n = (0, ia.o)(t, e[i]);
                      if (n) {
                        let { transitionEnd: t, transition: e, ...i } = n;
                        for (let t in i) {
                          let e = i[t];
                          if (Array.isArray(e)) {
                            let t = c ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (s[t] = e);
                        }
                        for (let e in t) s[e] = t[e];
                      }
                    }
                  }
                  return s;
                })(r, s, o, t),
                renderState: e(),
              };
              return (
                i &&
                  ((a.onMount = (t) => i({ props: r, current: t, ...a })),
                  (a.onUpdate = (t) => i(t))),
                a
              );
            })(t, e, r, s);
        return i ? o() : (0, il.h)(o);
      };
      var ih = i(27598),
        ic = i(57630);
      let id = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var ip = i(6592);
      let im = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        iv = ih._.length;
      function ig(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (ih.G.has(t)) {
            o = !0;
            continue;
          }
          if ((0, ic.f)(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = id(i, ip.j[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let s = 0; s < iv; s++) {
                    let o = ih._[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = id(a, ip.j[o]);
                      if (!l) {
                        r = !1;
                        let e = im[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let iy = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        ix = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function iP(t, e, i) {
        return "string" == typeof t ? t : tv.px.transform(e + i * t);
      }
      function iw(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
      ) {
        if ((ig(t, u, c), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        ((t.attrs = t.style), (t.style = {}));
        let { attrs: d, style: p, dimensions: m } = t;
        (d.transform && (m && (p.transform = d.transform), delete d.transform),
          m &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = iP(e, t.x, t.width),
                r = iP(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? iy : ix;
              t[s.offset] = tv.px.transform(-n);
              let o = tv.px.transform(e),
                a = tv.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, o, a, l, !1));
      }
      let iT = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        ib = () => ({ ...iT(), attrs: {} }),
        iA = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var iS = i(93193);
      function iD(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let iV = new Set([
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
      ]);
      function iE(t, e, i, n) {
        for (let i in (iD(t, e, void 0, n), e.attrs))
          t.setAttribute(iV.has(i) ? i : (0, iS.D)(i), e.attrs[i]);
      }
      function iM(t, { layout: e, layoutId: i }) {
        return (
          ih.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!tF[t] || "opacity" === t))
        );
      }
      function iC(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          ((0, tN.i)(r[o]) ||
            (e.style && (0, tN.i)(e.style[o])) ||
            iM(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      function iR(t, e, i) {
        let n = iC(t, e, i);
        for (let i in t)
          ((0, tN.i)(t[i]) || (0, tN.i)(e[i])) &&
            (n[
              -1 !== ih._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      let ik = ["x", "y", "width", "height", "cx", "cy", "r"],
        iL = {
          useVisualState: iu({
            scrapeMotionValuesFromProps: iR,
            createRenderState: ib,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: i,
              renderState: n,
              latestValues: r,
            }) => {
              if (!i) return;
              let s = !!t.drag;
              if (!s) {
                for (let t in r)
                  if (ih.G.has(t)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let o = !e;
              if (e)
                for (let i = 0; i < ik.length; i++) {
                  let n = ik[i];
                  t[n] !== e[n] && (o = !0);
                }
              o &&
                L.Wi.read(() => {
                  (!(function (t, e) {
                    try {
                      e.dimensions =
                        "function" == typeof t.getBBox
                          ? t.getBBox()
                          : t.getBoundingClientRect();
                    } catch (t) {
                      e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                    }
                  })(i, n),
                    L.Wi.render(() => {
                      (iw(n, r, iA(i.tagName), t.transformTemplate), iE(i, n));
                    }));
                });
            },
          }),
        },
        ij = {
          useVisualState: iu({
            scrapeMotionValuesFromProps: iC,
            createRenderState: iT,
          }),
        };
      function iF(t, e, i) {
        for (let n in e) (0, tN.i)(e[n]) || iM(n, i) || (t[n] = e[n]);
      }
      let iB = new Set([
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
      function iO(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          iB.has(t)
        );
      }
      let i$ = (t) => !iO(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (i$ = (t) => (t.startsWith("on") ? !iO(t) : r(t)));
      } catch (t) {}
      var iW = i(33441),
        iI = i(30681);
      let iU = { current: null },
        iN = { current: !1 };
      var iX = i(79135),
        iz = i(85385),
        iY = i(56440),
        iK = i(88340);
      let iZ = [...iY.$, iz.$, tj.P],
        iH = (t) => iZ.find((0, iK.l)(t)),
        iq = new WeakMap();
      var i_ = i(41568);
      let iG = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class iJ {
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
            (this.KeyframeResolver = i_.e),
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
              let t = tz.X.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                L.Wi.render(this.render, !1, !0));
            }));
          let { latestValues: a, renderState: l, onUpdate: u } = s;
          ((this.onUpdate = u),
            (this.latestValues = a),
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
            (this.isControllingVariants = e5(e)),
            (this.isVariantNode = e3(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: h, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in c) {
            let e = c[t];
            void 0 !== a[t] && (0, tN.i)(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          ((this.current = t),
            iq.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iN.current ||
              (function () {
                if (((iN.current = !0), e4.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iU.current = t.matches);
                    (t.addListener(e), e());
                  } else iU.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iU.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let t in (iq.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, L.Pn)(this.notifyUpdate),
          (0, L.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = ih.G.has(t),
            r = e.on("change", (e) => {
              ((this.latestValues[t] = e),
                this.props.onUpdate && L.Wi.preRender(this.notifyUpdate),
                n &&
                  this.projection &&
                  (this.projection.isTransformDirty = !0));
            }),
            s = e.on("renderRequest", this.scheduleRender);
          (window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (r(), s(), i && i(), e.owner && e.stop());
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
          for (t in e7) {
            let e = e7[t];
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
            : ti();
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
          for (let e = 0; e < iG.length; e++) {
            let i = iG[e];
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
              if ((0, tN.i)(r)) t.addValue(n, r);
              else if ((0, tN.i)(s)) t.addValue(n, (0, tU.BX)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, tU.BX)(void 0 !== e ? e : r, { owner: t }));
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
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this));
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
              ((i = (0, tU.BX)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && ((0, iW.P)(n) || (0, iI.W)(n))
                ? (n = parseFloat(n))
                : !iH(n) && tj.P.test(e) && (n = (0, iX.T)(t, e)),
              this.setBaseTarget(t, (0, tN.i)(n) ? n.get() : n)),
            (0, tN.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = (0, ia.o)(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom,
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, tN.i)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new tH.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var iQ = i(20204);
      class i0 extends iJ {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = iQ.s));
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
          (0, tN.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var i1 = i(2728);
      class i2 extends i0 {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = iD));
        }
        readValueFromInstance(t, e) {
          if (ih.G.has(e)) {
            let t = (0, i1.A)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, ic.f)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return tf(t, e);
        }
        build(t, e, i) {
          ig(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return iC(t, e, i);
        }
      }
      class i6 extends i0 {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ti));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (ih.G.has(e)) {
            let t = (0, i1.A)(e);
            return (t && t.default) || 0;
          }
          return ((e = iV.has(e) ? e : (0, iS.D)(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return iR(t, e, i);
        }
        build(t, e, i) {
          iw(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          iE(t, e, i, n);
        }
        mount(t) {
          ((this.isSVGTag = iA(t.tagName)), super.mount(t));
        }
      }
      let i5 = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((s = {
          animation: { Feature: P },
          exit: { Feature: T },
          inView: { Feature: e0 },
          tap: { Feature: eH },
          focus: { Feature: eK },
          hover: { Feature: eY },
          pan: { Feature: tS },
          drag: { Feature: tb, ProjectionNode: eX, MeasureLayout: tW },
          layout: { ProjectionNode: eX, MeasureLayout: tW },
        }),
        (o = (t, e) =>
          io(t)
            ? new i6(e)
            : new i2(e, { allowProjection: t !== tV.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function ({
            preloadedFeatures: t,
            createVisualElement: e,
            useRender: i,
            useVisualState: n,
            Component: r,
          }) {
            var s, o;
            function a(t, s) {
              var o;
              let a;
              let l = {
                  ...(0, tV.useContext)(e2._),
                  ...t,
                  layoutId: (function ({ layoutId: t }) {
                    let e = (0, tV.useContext)(tM.p).id;
                    return e && void 0 !== t ? e + "-" + t : t;
                  })(t),
                },
                { isStatic: h } = l,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (e5(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || u(e) ? e : void 0,
                        animate: u(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, tV.useContext)(e6));
                  return (0, tV.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [e9(e), e9(i)],
                  );
                })(t),
                d = n(t, h);
              if (!h && e4.j) {
                (0, tV.useContext)(e1).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = e7;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(l);
                ((a = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, n, r) {
                    var s, o;
                    let { visualElement: a } = (0, tV.useContext)(e6),
                      l = (0, tV.useContext)(e1),
                      u = (0, tV.useContext)(ie.O),
                      h = (0, tV.useContext)(e2._).reducedMotion,
                      c = (0, tV.useRef)(null);
                    ((n = n || l.renderer),
                      !c.current &&
                        n &&
                        (c.current = n(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        })));
                    let d = c.current,
                      p = (0, tV.useContext)(tC);
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
                            alwaysMeasureLayout: !!o || (a && W(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          }));
                      })(c.current, i, r, p);
                    let m = (0, tV.useRef)(!1);
                    (0, tV.useInsertionEffect)(() => {
                      d && m.current && d.update(i, u);
                    });
                    let f = i[ir.M],
                      v = (0, tV.useRef)(
                        !!f &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f)),
                      );
                    return (
                      (0, ii.L)(() => {
                        d &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          d.updateFeatures(),
                          tB.render(d.render),
                          v.current &&
                            d.animationState &&
                            d.animationState.animateChanges());
                      }),
                      (0, tV.useEffect)(() => {
                        d &&
                          (!v.current &&
                            d.animationState &&
                            d.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (v.current = !1)));
                      }),
                      d
                    );
                  })(r, d, l, e, t.ProjectionNode)));
              }
              return (0, tD.jsxs)(e6.Provider, {
                value: c,
                children: [
                  a && c.visualElement
                    ? (0, tD.jsx)(a, { visualElement: c.visualElement, ...l })
                    : null,
                  i(
                    r,
                    t,
                    ((o = c.visualElement),
                    (0, tV.useCallback)(
                      (t) => {
                        (t && d.onMount && d.onMount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          s &&
                            ("function" == typeof s
                              ? s(t)
                              : W(s) && (s.current = t)));
                      },
                      [o],
                    )),
                    d,
                    h,
                    c.visualElement,
                  ),
                ],
              });
            }
            (t &&
              (function (t) {
                for (let e in t) e7[e] = { ...e7[e], ...t[e] };
              })(t),
              (a.displayName = `motion.${"string" == typeof r ? r : `create(${null !== (o = null !== (s = r.displayName) && void 0 !== s ? s : r.name) && void 0 !== o ? o : ""})`}`));
            let l = (0, tV.forwardRef)(a);
            return ((l[it] = r), l);
          })({
            ...(io(t) ? iL : ij),
            preloadedFeatures: s,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    io(e)
                      ? function (t, e, i, n) {
                          let r = (0, tV.useMemo)(() => {
                            let i = ib();
                            return (
                              iw(i, e, iA(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            (iF(e, t.style, t),
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
                                iF(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, tV.useMemo)(() => {
                                      let i = iT();
                                      return (
                                        ig(i, e, t),
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
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (i$(r) ||
                          (!0 === i && iO(r)) ||
                          (!e && !iO(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== tV.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, tV.useMemo)(() => ((0, tN.i)(u) ? u.get() : u), [u]);
                return (0, tV.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: o,
            Component: t,
          });
        }),
      );
    },
    20204: function (t, e, i) {
      i.d(e, {
        s: function () {
          return f;
        },
      });
      var n = i(30681),
        r = i(83845),
        s = i(56737),
        o = i(79135);
      let a = new Set(["auto", "none", "0"]);
      var l = i(41568),
        u = i(25386),
        h = i(33441),
        c = i(57630);
      let d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var p = i(6383),
        m = i(56440);
      class f extends l.e {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, c.t)(n))) {
              let r = (function t(e, i, n = 1) {
                (0, u.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [r, s] = (function (t) {
                  let e = d.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return (0, h.P)(t) ? parseFloat(t) : t;
                }
                return (0, c.t)(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              (void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !r.z.has(i) || 2 !== t.length))
            return;
          let [n, s] = t,
            o = (0, m.C)(n),
            a = (0, m.C)(s);
          if (o !== a) {
            if ((0, p.mP)(o) && (0, p.mP)(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            ("number" == typeof (r = t[e])
              ? 0 === r
              : null === r || "none" === r || "0" === r || (0, n.W)(r)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                ("string" == typeof e &&
                  !a.has(e) &&
                  (0, s.V)(e).values.length &&
                  (n = t[r]),
                  r++);
              }
              if (n && i) for (let r of e) t[r] = (0, o.T)(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = p.lw[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin));
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          ((n[s] = p.lw[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current),
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes());
        }
      }
    },
    93193: function (t, e, i) {
      i.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    57630: function (t, e, i) {
      i.d(e, {
        f: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        o = (t) => !!s(t) && a.test(t.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    6383: function (t, e, i) {
      i.d(e, {
        Ei: function () {
          return c;
        },
        lw: function () {
          return d;
        },
        mP: function () {
          return o;
        },
      });
      var n = i(61649),
        r = i(96190),
        s = i(27598);
      let o = (t) => t === n.Rx || t === r.px,
        a = (t, e) => parseFloat(t.split(", ")[e]),
        l =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return a(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? a(e[1], t) : 0;
            }
          },
        u = new Set(["x", "y", "z"]),
        h = s._.filter((t) => !u.has(t));
      function c(t) {
        let e = [];
        return (
          h.forEach((i) => {
            let n = t.getValue(i);
            void 0 !== n &&
              (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let d = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: l(4, 13),
        y: l(5, 14),
      };
      ((d.translateX = d.x), (d.translateY = d.y));
    },
    79135: function (t, e, i) {
      i.d(e, {
        T: function () {
          return o;
        },
      });
      var n = i(56737),
        r = i(97197),
        s = i(2728);
      function o(t, e) {
        let i = (0, s.A)(t);
        return (
          i !== r.h && (i = n.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    2728: function (t, e, i) {
      i.d(e, {
        A: function () {
          return o;
        },
      });
      var n = i(85385),
        r = i(97197);
      let s = {
          ...i(6592).j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: r.h,
          WebkitFilter: r.h,
        },
        o = (t) => s[t];
    },
    56440: function (t, e, i) {
      i.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = i(61649),
        r = i(96190),
        s = i(88340);
      let o = [
          n.Rx,
          r.px,
          r.aQ,
          r.RW,
          r.vw,
          r.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    6592: function (t, e, i) {
      i.d(e, {
        j: function () {
          return l;
        },
      });
      var n = i(61649),
        r = i(96190);
      let s = {
          borderWidth: r.px,
          borderTopWidth: r.px,
          borderRightWidth: r.px,
          borderBottomWidth: r.px,
          borderLeftWidth: r.px,
          borderRadius: r.px,
          radius: r.px,
          borderTopLeftRadius: r.px,
          borderTopRightRadius: r.px,
          borderBottomRightRadius: r.px,
          borderBottomLeftRadius: r.px,
          width: r.px,
          maxWidth: r.px,
          height: r.px,
          maxHeight: r.px,
          top: r.px,
          right: r.px,
          bottom: r.px,
          left: r.px,
          padding: r.px,
          paddingTop: r.px,
          paddingRight: r.px,
          paddingBottom: r.px,
          paddingLeft: r.px,
          margin: r.px,
          marginTop: r.px,
          marginRight: r.px,
          marginBottom: r.px,
          marginLeft: r.px,
          backgroundPositionX: r.px,
          backgroundPositionY: r.px,
        },
        o = {
          rotate: r.RW,
          rotateX: r.RW,
          rotateY: r.RW,
          rotateZ: r.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: r.RW,
          skewX: r.RW,
          skewY: r.RW,
          distance: r.px,
          translateX: r.px,
          translateY: r.px,
          translateZ: r.px,
          x: r.px,
          y: r.px,
          z: r.px,
          perspective: r.px,
          transformPerspective: r.px,
          opacity: n.Fq,
          originX: r.$C,
          originY: r.$C,
          originZ: r.px,
        },
        a = { ...n.Rx, transform: Math.round },
        l = {
          ...s,
          ...o,
          zIndex: a,
          size: r.px,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: a,
        };
    },
    88340: function (t, e, i) {
      i.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    83845: function (t, e, i) {
      i.d(e, {
        z: function () {
          return n;
        },
      });
      let n = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...i(27598)._,
      ]);
    },
    27598: function (t, e, i) {
      i.d(e, {
        G: function () {
          return r;
        },
        _: function () {
          return n;
        },
      });
      let n = [
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
        r = new Set(n);
    },
    41568: function (t, e, i) {
      i.d(e, {
        e: function () {
          return c;
        },
        m: function () {
          return h;
        },
      });
      var n = i(6383),
        r = i(26166);
      let s = new Set(),
        o = !1,
        a = !1;
      function l() {
        if (a) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          (e.forEach((t) => {
            let e = (0, n.Ei)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((a = !1), (o = !1), s.forEach((t) => t.complete()), s.clear());
      }
      function u() {
        s.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (a = !0));
        });
      }
      function h() {
        (u(), l());
      }
      class c {
        constructor(t, e, i, n, r, s = !1) {
          ((this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s));
        }
        scheduleResolve() {
          ((this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                o || ((o = !0), r.Wi.read(u), r.Wi.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                (void 0 === t[0] && (t[0] = s),
                  n && void 0 === r && n.set(t[0]));
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          ((this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this));
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    52248: function (t, e, i) {
      i.d(e, {
        x: function () {
          return r;
        },
      });
      var n = i(79432);
      function r(t, e, i) {
        let r = t.getProps();
        return (0, n.o)(r, e, void 0 !== i ? i : r.custom, t);
      }
    },
    79432: function (t, e, i) {
      function n(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
            }),
          e
        );
      }
      function r(t, e, i, r) {
        if ("function" == typeof e) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, o] = n(r);
          e = e(void 0 !== i ? i : t.custom, s, o);
        }
        return e;
      }
      i.d(e, {
        o: function () {
          return r;
        },
      });
    },
    66803: function (t, e, i) {
      i.d(e, {
        C: function () {
          return o;
        },
      });
      var n = i(8715),
        r = i(33234),
        s = i(52248);
      function o(t, e) {
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...a
        } = (0, s.x)(t, e) || {};
        for (let e in (a = { ...a, ...i })) {
          let i = (0, n.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, r.BX)(i));
        }
      }
    },
    22081: function (t, e, i) {
      i.d(e, {
        c: function () {
          return n;
        },
      });
      let n = { skipAnimations: !1, useManualTiming: !1 };
    },
    10010: function (t, e, i) {
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return r;
        },
        y4: function () {
          return n;
        },
      });
    },
    24169: function (t, e, i) {
      i.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    71884: function (t, e, i) {
      i.d(e, {
        s: function () {
          return u;
        },
      });
      var n = i(27726),
        r = i(25386),
        s = i(58946),
        o = i(24169),
        a = i(79976),
        l = i(83624);
      function u(t, e, { clamp: i = !0, ease: u, mixer: h } = {}) {
        let c = t.length;
        if (
          ((0, r.k)(
            c === e.length,
            "Both input and output ranges must be the same length",
          ),
          1 === c)
        )
          return () => e[0];
        if (2 === c && e[0] === e[1]) return () => e[1];
        let d = t[0] === t[1];
        t[0] > t[c - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let p = (function (t, e, i) {
            let r = [],
              s = i || a.C,
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let o = s(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || n.Z : e;
                o = (0, l.z)(t, o);
              }
              r.push(o);
            }
            return r;
          })(e, u, h),
          m = p.length,
          f = (i) => {
            if (d && i < t[0]) return e[0];
            let n = 0;
            if (m > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
            let r = (0, s.Y)(t[n], t[n + 1], i);
            return p[n](r);
          };
        return i ? (e) => f((0, o.u)(t[0], t[c - 1], e)) : f;
      }
    },
    11741: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    33441: function (t, e, i) {
      i.d(e, {
        P: function () {
          return n;
        },
      });
      let n = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    30681: function (t, e, i) {
      i.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/u.test(t);
    },
    79976: function (t, e, i) {
      i.d(e, {
        C: function () {
          return S;
        },
      });
      var n = i(40179),
        r = i(25386);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var o = i(26382),
        a = i(40819),
        l = i(93184);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        c = [o.$, a.m, l.J],
        d = (t) => c.find((e) => e.test(t));
      function p(t) {
        let e = d(t);
        if (
          ((0, r.K)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              ((t /= 360), (i /= 100));
              let r = 0,
                o = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - n;
                ((r = s(l, n, t + 1 / 3)),
                  (o = s(l, n, t)),
                  (a = s(l, n, t - 1 / 3)));
              } else r = o = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let m = (t, e) => {
        let i = p(t),
          r = p(e);
        if (!i || !r) return u(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = h(i.red, r.red, t)),
          (s.green = h(i.green, r.green, t)),
          (s.blue = h(i.blue, r.blue, t)),
          (s.alpha = (0, n.t)(i.alpha, r.alpha, t)),
          a.m.transform(s)
        );
      };
      var f = i(83624),
        v = i(85385),
        g = i(56737),
        y = i(57630);
      let x = new Set(["none", "hidden"]);
      function P(t, e) {
        return (i) => (0, n.t)(t, e, i);
      }
      function w(t) {
        return "number" == typeof t
          ? P
          : "string" == typeof t
            ? (0, y.t)(t)
              ? u
              : v.$.test(t)
                ? m
                : A
            : Array.isArray(t)
              ? T
              : "object" == typeof t
                ? v.$.test(t)
                  ? m
                  : b
                : u;
      }
      function T(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => w(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function b(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = w(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let A = (t, e) => {
        let i = g.P.createTransformer(e),
          n = (0, g.V)(t),
          s = (0, g.V)(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (x.has(t) && !s.values.length) || (x.has(e) && !n.values.length)
            ? x.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : (0, f.z)(
                T(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      ((n[s] = l), r[o]++);
                    }
                    return n;
                  })(n, s),
                  s.values,
                ),
                i,
              )
          : ((0, r.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            u(t, e));
      };
      function S(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, n.t)(t, e, i)
          : w(t)(t, e);
      }
    },
    40179: function (t, e, i) {
      i.d(e, {
        t: function () {
          return n;
        },
      });
      let n = (t, e, i) => t + (e - t) * i;
    },
    30533: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
      });
      var n = i(58946),
        r = i(40179);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, n.Y)(0, e, s);
              t.push((0, r.t)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    83624: function (t, e, i) {
      i.d(e, {
        z: function () {
          return r;
        },
      });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    8715: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return r;
        },
      });
      var n = i(48488);
      let r = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    21560: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(10010);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
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
    },
    96681: function (t, e, i) {
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
    58868: function (t, e, i) {
      i.d(e, {
        L: function () {
          return r;
        },
      });
      var n = i(67294);
      let r = i(11741).j ? n.useLayoutEffect : n.useEffect;
    },
    3038: function (t, e, i) {
      i.d(e, {
        R: function () {
          return n;
        },
      });
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    33234: function (t, e, i) {
      i.d(e, {
        BX: function () {
          return h;
        },
        S1: function () {
          return l;
        },
      });
      var n = i(1117),
        r = i(21560),
        s = i(3038),
        o = i(26166);
      let a = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          ((this.version = "11.18.2"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = n.X.now();
              (this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current));
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner));
        }
        setCurrent(t) {
          ((this.current = t),
            (this.updatedAt = n.X.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = a(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new r.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                (i(),
                  o.Wi.read(() => {
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
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
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
        get() {
          return (l.current && l.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = n.X.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, s.R)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
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
          (this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    26382: function (t, e, i) {
      i.d(e, {
        $: function () {
          return r;
        },
      });
      var n = i(40819);
      let r = {
        test: (0, i(69940).i)("#"),
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
        transform: n.m.transform,
      };
    },
    93184: function (t, e, i) {
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var n = i(61649),
        r = i(96190),
        s = i(93609),
        o = i(69940);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.aQ.transform((0, s.N)(e)) +
          ", " +
          r.aQ.transform((0, s.N)(i)) +
          ", " +
          (0, s.N)(n.Fq.transform(o)) +
          ")",
      };
    },
    85385: function (t, e, i) {
      i.d(e, {
        $: function () {
          return o;
        },
      });
      var n = i(26382),
        r = i(93184),
        s = i(40819);
      let o = {
        test: (t) => s.m.test(t) || n.$.test(t) || r.J.test(t),
        parse: (t) =>
          s.m.test(t)
            ? s.m.parse(t)
            : r.J.test(t)
              ? r.J.parse(t)
              : n.$.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
              ? s.m.transform(t)
              : r.J.transform(t),
      };
    },
    40819: function (t, e, i) {
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var n = i(24169),
        r = i(61649),
        s = i(93609),
        o = i(69940);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...r.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.N)(r.Fq.transform(n)) +
            ")",
        };
    },
    69940: function (t, e, i) {
      i.d(e, {
        i: function () {
          return s;
        },
        d: function () {
          return o;
        },
      });
      var n = i(68054);
      let r =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (i) =>
          !!(
            ("string" == typeof i && r.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        o = (t, e, i) => (r) => {
          if ("string" != typeof r) return r;
          let [s, o, a, l] = r.match(n.K);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    97197: function (t, e, i) {
      i.d(e, {
        h: function () {
          return l;
        },
      });
      var n = i(56737),
        r = i(68054);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(r.K) || [];
        if (!n) return t;
        let o = i.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return (n !== i && (a *= 100), e + "(" + a + o + ")");
      }
      let a = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    56737: function (t, e, i) {
      i.d(e, {
        V: function () {
          return h;
        },
        P: function () {
          return m;
        },
      });
      var n = i(85385);
      let r =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = i(68054),
        o = i(93609);
      let a = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          s = [],
          o = 0,
          h = e
            .replace(
              u,
              (t) => (
                n.$.test(t)
                  ? (r.color.push(o), s.push(l), i.push(n.$.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(o), s.push("var"), i.push(t))
                    : (r.number.push(o), s.push(a), i.push(parseFloat(t))),
                ++o,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: s };
      }
      function c(t) {
        return h(t).values;
      }
      function d(t) {
        let { split: e, types: i } = h(t),
          r = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < r; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === a
                ? (s += (0, o.N)(t[u]))
                : e === l
                  ? (s += n.$.transform(t[u]))
                  : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) => ("number" == typeof t ? 0 : t),
        m = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(s.K)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(r)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: c,
          createTransformer: d,
          getAnimatableNone: function (t) {
            let e = c(t);
            return d(t)(e.map(p));
          },
        };
    },
    61649: function (t, e, i) {
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return r;
        },
        bA: function () {
          return o;
        },
      });
      var n = i(24169);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...r, default: 1 };
    },
    96190: function (t, e, i) {
      i.d(e, {
        $C: function () {
          return u;
        },
        RW: function () {
          return r;
        },
        aQ: function () {
          return s;
        },
        px: function () {
          return o;
        },
        vh: function () {
          return a;
        },
        vw: function () {
          return l;
        },
      });
      let n = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        r = n("deg"),
        s = n("%"),
        o = n("px"),
        a = n("vh"),
        l = n("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    68054: function (t, e, i) {
      i.d(e, {
        K: function () {
          return n;
        },
      });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    93609: function (t, e, i) {
      i.d(e, {
        N: function () {
          return n;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5;
    },
    30607: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
      });
      var n = i(40406);
      function r(t, e) {
        let i = t.getValue("willChange");
        if ((0, n.i)(i) && i.add) return i.add(e);
      }
    },
    40406: function (t, e, i) {
      i.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
    62777: function (t, e, i) {
      i.d(e, {
        sP: function () {
          return o;
        },
        _F: function () {
          return c;
        },
        iI: function () {
          return u;
        },
        wk: function () {
          return v;
        },
        ev: function () {
          return a;
        },
        Mr: function () {
          return A;
        },
        qE: function () {
          return d;
        },
        xD: function () {
          return h;
        },
        DJ: function () {
          return D;
        },
        hR: function () {
          return g;
        },
        eB: function () {
          return function t(e, i) {
            if (e)
              return "function" == typeof e && m()
                ? v(e, i)
                : d(e)
                  ? y(e)
                  : Array.isArray(e)
                    ? e.map((e) => t(e, i) || x.easeOut)
                    : x[e];
          };
        },
        EO: function () {
          return l;
        },
        OD: function () {
          return L;
        },
        IG: function () {
          return w;
        },
        KV: function () {
          return j;
        },
        Vc: function () {
          return m;
        },
        tn: function () {
          return r;
        },
      });
      var n = i(70942);
      let r = (0, n.X)(() => void 0 !== window.ScrollTimeline);
      class s {
        constructor(t) {
          ((this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean)));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t)),
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            r() && i.attachTimeline
              ? i.attachTimeline(t)
              : "function" == typeof e
                ? e(i)
                : void 0,
          );
          return () => {
            i.forEach((t, e) => {
              (t && t(), this.animations[e].stop());
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class o extends s {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function a(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let l = 2e4;
      function u(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < l; ) ((e += 50), (i = t.next(e)));
        return e >= l ? 1 / 0 : e;
      }
      function h(t) {
        return "function" == typeof t;
      }
      function c(t, e) {
        ((t.timeline = e), (t.onfinish = null));
      }
      let d = (t) => Array.isArray(t) && "number" == typeof t[0],
        p = { linearEasing: void 0 },
        m = (function (t, e) {
          let i = (0, n.X)(t);
          return () => {
            var t;
            return null !== (t = p[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var f = i(58946);
      let v = (t, e, i = 10) => {
        let n = "",
          r = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < r; e++) n += t((0, f.Y)(0, r - 1, e)) + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
      };
      function g(t) {
        return !!(
          ("function" == typeof t && m()) ||
          !t ||
          ("string" == typeof t && (t in x || m())) ||
          d(t) ||
          (Array.isArray(t) && t.every(g))
        );
      }
      let y = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        x = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: y([0, 0.65, 0.55, 1]),
          circOut: y([0.55, 0, 1, 0.45]),
          backIn: y([0.31, 0.01, 0.66, -0.59]),
          backOut: y([0.33, 1.53, 0.69, 0.99]),
        },
        P = { x: !1, y: !1 };
      function w(t, e, i) {
        var n;
        if (t instanceof Element) return [t];
        if ("string" == typeof t) {
          let r = document;
          e && (r = e.current);
          let s =
            null !== (n = null == i ? void 0 : i[t]) && void 0 !== n
              ? n
              : r.querySelectorAll(t);
          return s ? Array.from(s) : [];
        }
        return Array.from(t);
      }
      function T(t, e) {
        let i = w(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function b(t) {
        return (e) => {
          "touch" === e.pointerType || P.x || P.y || t(e);
        };
      }
      function A(t, e, i = {}) {
        let [n, r, s] = T(t, i),
          o = b((t) => {
            let { target: i } = t,
              n = e(t);
            if ("function" != typeof n || !i) return;
            let s = b((t) => {
              (n(t), i.removeEventListener("pointerleave", s));
            });
            i.addEventListener("pointerleave", s, r);
          });
        return (
          n.forEach((t) => {
            t.addEventListener("pointerenter", o, r);
          }),
          s
        );
      }
      let S = (t, e) => !!e && (t === e || S(t, e.parentElement)),
        D = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        V = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        E = new WeakSet();
      function M(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function C(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      let R = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = M(() => {
          if (E.has(i)) return;
          C(i, "down");
          let t = M(() => {
            C(i, "up");
          });
          (i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => C(i, "cancel"), e));
        });
        (i.addEventListener("keydown", n, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", n),
            e,
          ));
      };
      function k(t) {
        return D(t) && !(P.x || P.y);
      }
      function L(t, e, i = {}) {
        let [n, r, s] = T(t, i),
          o = (t) => {
            let n = t.currentTarget;
            if (!k(t) || E.has(n)) return;
            E.add(n);
            let s = e(t),
              o = (t, e) => {
                (window.removeEventListener("pointerup", a),
                  window.removeEventListener("pointercancel", l),
                  k(t) &&
                    E.has(n) &&
                    (E.delete(n),
                    "function" == typeof s && s(t, { success: e })));
              },
              a = (t) => {
                o(t, i.useGlobalTarget || S(n, t.target));
              },
              l = (t) => {
                o(t, !1);
              };
            (window.addEventListener("pointerup", a, r),
              window.addEventListener("pointercancel", l, r));
          };
        return (
          n.forEach((t) => {
            (V.has(t.tagName) ||
              -1 !== t.tabIndex ||
              null !== t.getAttribute("tabindex") ||
              (t.tabIndex = 0),
              (i.useGlobalTarget ? window : t).addEventListener(
                "pointerdown",
                o,
                r,
              ),
              t.addEventListener("focus", (t) => R(t, r), r));
          }),
          s
        );
      }
      function j(t) {
        return "x" === t || "y" === t
          ? P[t]
            ? null
            : ((P[t] = !0),
              () => {
                P[t] = !1;
              })
          : P.x || P.y
            ? null
            : ((P.x = P.y = !0),
              () => {
                P.x = P.y = !1;
              });
      }
      (i(14400), i(27726));
    },
    25386: function (t, e, i) {
      i.d(e, {
        K: function () {
          return r;
        },
        k: function () {
          return s;
        },
      });
      var n = i(27726);
      let r = n.Z,
        s = n.Z;
    },
    70942: function (t, e, i) {
      i.d(e, {
        X: function () {
          return n;
        },
      });
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
    },
    27726: function (t, e, i) {
      i.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    58946: function (t, e, i) {
      i.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    14400: function (t, e, i) {
      i.d(e, {
        X: function () {
          return r;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
  },
]);
