(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8130],
  {
    92703: function (t, e, n) {
      "use strict";
      var o = n(50414);
      function r() {}
      function i() {}
      ((i.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, n, r, i, a) {
            if (a !== o) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: r,
          };
          return ((n.PropTypes = n), n);
        }));
    },
    45697: function (t, e, n) {
      t.exports = n(92703)();
    },
    50414: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    98130: function (t, e, n) {
      "use strict";
      var o = n(67294),
        r = n(45697);
      function i(t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          ((o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o));
        }
      }
      function s(t, e, n) {
        return (e && a(t.prototype, e), n && a(t, n), t);
      }
      function c(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError("Super expression must either be null or a function");
        ((t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && l(t, e));
      }
      function u(t) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function l(t, e) {
        return (l =
          Object.setPrototypeOf ||
          function (t, e) {
            return ((t.__proto__ = e), t);
          })(t, e);
      }
      function p(t) {
        var e = (function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            o = u(t);
          return (
            (n = e
              ? Reflect.construct(o, arguments, u(this).constructor)
              : o.apply(this, arguments)),
            n && ("object" == typeof n || "function" == typeof n)
              ? n
              : (function (t) {
                  if (void 0 === t)
                    throw ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return t;
                })(this)
          );
        };
      }
      function f(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      function m(t) {
        var e,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          o = String(t);
        if (0 === n) return o;
        var r = o.match(/(.*?)([0-9]+)(.*)/),
          i = r ? r[1] : "",
          a = r ? r[3] : "",
          s = r ? r[2] : o,
          c =
            s.length >= n
              ? s
              : (
                  (
                    (function (t) {
                      if (Array.isArray(t)) return f(t);
                    })((e = Array(n))) ||
                    (function (t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(t)
                      )
                        return Array.from(t);
                    })(e) ||
                    (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return f(t, void 0);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        if (
                          ("Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n)
                        )
                          return Array.from(t);
                        if (
                          "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                          return f(t, void 0);
                      }
                    })(e) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })()
                  )
                    .map(function () {
                      return "0";
                    })
                    .join("") + s
                ).slice(-1 * n);
        return "".concat(i).concat(c).concat(a);
      }
      var d = { daysInHours: !1, zeroPadTime: 2 },
        h = (function (t) {
          c(n, t);
          var e = p(n);
          function n() {
            var t;
            return (
              i(this, n),
              (t = e.apply(this, arguments)),
              (t.state = { count: t.props.count || 3 }),
              (t.startCountdown = function () {
                t.interval = window.setInterval(function () {
                  0 == t.state.count - 1
                    ? (t.stopCountdown(),
                      t.props.onComplete && t.props.onComplete())
                    : t.setState(function (t) {
                        return { count: t.count - 1 };
                      });
                }, 1e3);
              }),
              (t.stopCountdown = function () {
                clearInterval(t.interval);
              }),
              (t.addTime = function (e) {
                (t.stopCountdown(),
                  t.setState(function (t) {
                    return { count: t.count + e };
                  }, t.startCountdown));
              }),
              t
            );
          }
          return (
            s(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.startCountdown();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  clearInterval(this.interval);
                },
              },
              {
                key: "render",
                value: function () {
                  return this.props.children
                    ? (0, o.cloneElement)(this.props.children, {
                        count: this.state.count,
                      })
                    : null;
                },
              },
            ]),
            n
          );
        })(o.Component);
      h.propTypes = {
        count: r.number,
        children: r.element,
        onComplete: r.func,
      };
      var y = (function (t) {
        c(n, t);
        var e = p(n);
        function n(t) {
          var o;
          if (
            (i(this, n),
            ((o = e.call(this, t)).mounted = !1),
            (o.initialTimestamp = o.calcOffsetStartTimestamp()),
            (o.offsetStartTimestamp = o.props.autoStart
              ? 0
              : o.initialTimestamp),
            (o.offsetTime = 0),
            (o.legacyMode = !1),
            (o.legacyCountdownRef = null),
            (o.tick = function () {
              var t = o.calcTimeDelta(),
                e = t.completed && !o.props.overtime ? void 0 : o.props.onTick;
              o.setTimeDeltaState(t, void 0, e);
            }),
            (o.setLegacyCountdownRef = function (t) {
              o.legacyCountdownRef = t;
            }),
            (o.start = function () {
              if (!o.isStarted()) {
                var t = o.offsetStartTimestamp;
                ((o.offsetStartTimestamp = 0),
                  (o.offsetTime += t ? o.calcOffsetStartTimestamp() - t : 0));
                var e = o.calcTimeDelta();
                (o.setTimeDeltaState(e, "STARTED", o.props.onStart),
                  o.props.controlled ||
                    (e.completed && !o.props.overtime) ||
                    (o.clearTimer(),
                    (o.interval = window.setInterval(
                      o.tick,
                      o.props.intervalDelay,
                    ))));
              }
            }),
            (o.pause = function () {
              o.isPaused() ||
                (o.clearTimer(),
                (o.offsetStartTimestamp = o.calcOffsetStartTimestamp()),
                o.setTimeDeltaState(
                  o.state.timeDelta,
                  "PAUSED",
                  o.props.onPause,
                ));
            }),
            (o.stop = function () {
              o.isStopped() ||
                (o.clearTimer(),
                (o.offsetStartTimestamp = o.calcOffsetStartTimestamp()),
                (o.offsetTime = o.offsetStartTimestamp - o.initialTimestamp),
                o.setTimeDeltaState(
                  o.calcTimeDelta(),
                  "STOPPED",
                  o.props.onStop,
                ));
            }),
            (o.isStarted = function () {
              return o.isStatus("STARTED");
            }),
            (o.isPaused = function () {
              return o.isStatus("PAUSED");
            }),
            (o.isStopped = function () {
              return o.isStatus("STOPPED");
            }),
            (o.isCompleted = function () {
              return o.isStatus("COMPLETED");
            }),
            t.date)
          ) {
            var r = o.calcTimeDelta();
            o.state = {
              timeDelta: r,
              status: r.completed ? "COMPLETED" : "STOPPED",
            };
          } else o.legacyMode = !0;
          return o;
        }
        return (
          s(n, [
            {
              key: "componentDidMount",
              value: function () {
                !this.legacyMode &&
                  ((this.mounted = !0),
                  this.props.onMount &&
                    this.props.onMount(this.calcTimeDelta()),
                  this.props.autoStart && this.start());
              },
            },
            {
              key: "componentDidUpdate",
              value: function (t) {
                this.legacyMode ||
                  this.props.date === t.date ||
                  ((this.initialTimestamp = this.calcOffsetStartTimestamp()),
                  (this.offsetStartTimestamp = this.initialTimestamp),
                  (this.offsetTime = 0),
                  this.setTimeDeltaState(this.calcTimeDelta()));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.legacyMode || ((this.mounted = !1), this.clearTimer());
              },
            },
            {
              key: "calcTimeDelta",
              value: function () {
                var t = this.props,
                  e = t.date,
                  n = t.now,
                  o = t.precision,
                  r = t.controlled,
                  i = t.overtime;
                return (function (t) {
                  var e,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    o = n.now,
                    r = void 0 === o ? Date.now : o,
                    i = n.precision,
                    a = n.controlled,
                    s = n.offsetTime,
                    c = n.overtime;
                  ((e =
                    "string" == typeof t
                      ? new Date(t).getTime()
                      : t instanceof Date
                        ? t.getTime()
                        : t),
                    a || (e += void 0 === s ? 0 : s));
                  var u = a ? e : e - r(),
                    l = Math.round(
                      1e3 *
                        parseFloat(
                          ((c ? u : Math.max(0, u)) / 1e3).toFixed(
                            Math.min(20, Math.max(0, void 0 === i ? 0 : i)),
                          ),
                        ),
                    ),
                    p = Math.abs(l) / 1e3;
                  return {
                    total: l,
                    days: Math.floor(p / 86400),
                    hours: Math.floor((p / 3600) % 24),
                    minutes: Math.floor((p / 60) % 60),
                    seconds: Math.floor(p % 60),
                    milliseconds: Number(((p % 1) * 1e3).toFixed()),
                    completed: l <= 0,
                  };
                })(e, {
                  now: n,
                  precision: o,
                  controlled: r,
                  offsetTime: this.offsetTime,
                  overtime: i,
                });
              },
            },
            {
              key: "calcOffsetStartTimestamp",
              value: function () {
                return Date.now();
              },
            },
            {
              key: "addTime",
              value: function (t) {
                this.legacyCountdownRef.addTime(t);
              },
            },
            {
              key: "clearTimer",
              value: function () {
                window.clearInterval(this.interval);
              },
            },
            {
              key: "isStatus",
              value: function (t) {
                return this.state.status === t;
              },
            },
            {
              key: "setTimeDeltaState",
              value: function (t, e, n) {
                var o = this;
                if (this.mounted) {
                  var r = t.completed && !this.state.timeDelta.completed,
                    i = t.completed && "STARTED" === e;
                  return (
                    r && !this.props.overtime && this.clearTimer(),
                    this.setState(
                      function (n) {
                        var r = e || n.status;
                        return (
                          t.completed && !o.props.overtime
                            ? (r = "COMPLETED")
                            : e || "COMPLETED" !== r || (r = "STOPPED"),
                          { timeDelta: t, status: r }
                        );
                      },
                      function () {
                        (n && n(o.state.timeDelta),
                          o.props.onComplete &&
                            (r || i) &&
                            o.props.onComplete(t, i));
                      },
                    )
                  );
                }
              },
            },
            {
              key: "getApi",
              value: function () {
                return (this.api = this.api || {
                  start: this.start,
                  pause: this.pause,
                  stop: this.stop,
                  isStarted: this.isStarted,
                  isPaused: this.isPaused,
                  isStopped: this.isStopped,
                  isCompleted: this.isCompleted,
                });
              },
            },
            {
              key: "getRenderProps",
              value: function () {
                var t,
                  e,
                  n,
                  o,
                  r,
                  i,
                  a,
                  s,
                  c,
                  u,
                  l,
                  p,
                  f = this.props,
                  h = f.daysInHours,
                  y = f.zeroPadTime,
                  v = f.zeroPadDays,
                  T = this.state.timeDelta;
                return Object.assign(Object.assign({}, T), {
                  api: this.getApi(),
                  props: this.props,
                  formatted:
                    ((t = { daysInHours: h, zeroPadTime: y, zeroPadDays: v }),
                    (e = T.days),
                    (n = T.hours),
                    (o = T.minutes),
                    (r = T.seconds),
                    (a = (i = Object.assign(Object.assign({}, d), t))
                      .daysInHours),
                    (s = i.zeroPadTime),
                    (u = void 0 === (c = i.zeroPadDays) ? s : c),
                    (l = Math.min(2, s)),
                    (p = a ? m(n + 24 * e, s) : m(n, l)),
                    {
                      days: a ? "" : m(e, u),
                      hours: p,
                      minutes: m(o, l),
                      seconds: m(r, l),
                    }),
                });
              },
            },
            {
              key: "render",
              value: function () {
                if (this.legacyMode) {
                  var t = this.props,
                    e = t.count,
                    n = t.children,
                    r = t.onComplete;
                  return (0, o.createElement)(
                    h,
                    {
                      ref: this.setLegacyCountdownRef,
                      count: e,
                      onComplete: r,
                    },
                    n,
                  );
                }
                var i = this.props,
                  a = i.className,
                  s = i.overtime,
                  c = i.children,
                  u = i.renderer,
                  l = this.getRenderProps();
                if (u) return u(l);
                if (c && this.state.timeDelta.completed && !s)
                  return (0, o.cloneElement)(c, { countdown: l });
                var p = l.formatted,
                  f = p.days,
                  m = p.hours,
                  d = p.minutes,
                  y = p.seconds;
                return (0, o.createElement)(
                  "span",
                  { className: a },
                  l.total < 0 ? "-" : "",
                  f,
                  f ? ":" : "",
                  m,
                  ":",
                  d,
                  ":",
                  y,
                );
              },
            },
          ]),
          n
        );
      })(o.Component);
      ((y.defaultProps = Object.assign(Object.assign({}, d), {
        controlled: !1,
        intervalDelay: 1e3,
        precision: 0,
        autoStart: !0,
      })),
        (y.propTypes = {
          date: (0, r.oneOfType)([(0, r.instanceOf)(Date), r.string, r.number]),
          daysInHours: r.bool,
          zeroPadTime: r.number,
          zeroPadDays: r.number,
          controlled: r.bool,
          intervalDelay: r.number,
          precision: r.number,
          autoStart: r.bool,
          overtime: r.bool,
          className: r.string,
          children: r.element,
          renderer: r.func,
          now: r.func,
          onMount: r.func,
          onStart: r.func,
          onPause: r.func,
          onStop: r.func,
          onTick: r.func,
          onComplete: r.func,
        }),
        (e.ZP = y));
    },
  },
]);
