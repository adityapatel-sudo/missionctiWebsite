_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [10],
  {
    "/EDR": function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t("23aj");
        },
      ]);
    },
    "23aj": function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t("q1tI"),
        i = t.n(n),
        r = t("xXss"),
        s = t("ZMKu");

      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var a = 1; a < arguments.length; a++) {
              var t = arguments[a];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var c = new Map(),
        l = new Map(),
        m = 0;

      function p(e) {
        return Object.keys(e)
          .sort()
          .filter(function (a) {
            return void 0 !== e[a];
          })
          .map(function (a) {
            return (
              a +
              "_" +
              ("root" === a ?
                (t = e.root) ?
                (l.has(t) || ((m += 1), l.set(t, m.toString())), l.get(t)) :
                "0" :
                e[a])
            );
            var t;
          })
          .toString();
      }

      function u(e, a, t) {
        if ((void 0 === t && (t = {}), !e)) return function () {};
        var n = (function (e) {
            var a = p(e),
              t = c.get(a);
            if (!t) {
              var n = new Map(),
                i = new IntersectionObserver(function (a) {
                  a.forEach(function (a) {
                    var t,
                      r =
                      a.isIntersecting &&
                      i.thresholds.some(function (e) {
                        return a.intersectionRatio >= e;
                      });
                    e.trackVisibility &&
                      "undefined" === typeof a.isVisible &&
                      (a.isVisible = r),
                      null == (t = n.get(a.target)) ||
                      t.forEach(function (e) {
                        e(r, a);
                      });
                  });
                }, e);
              (t = {
                id: a,
                observer: i,
                elements: n
              }), c.set(a, t);
            }
            return t;
          })(t),
          i = n.id,
          r = n.observer,
          s = n.elements,
          o = s.get(e) || [];
        return (
          s.has(e) || s.set(e, o),
          o.push(a),
          r.observe(e),
          function () {
            o.splice(o.indexOf(a), 1),
              0 === o.length && (s.delete(e), r.unobserve(e)),
              0 === s.size && (r.disconnect(), c.delete(i));
          }
        );
      }

      function h(e) {
        return "function" !== typeof e.children;
      }
      var d = (function (e) {
        var a, t;

        function i(a) {
          var t;
          return (
            ((t = e.call(this, a) || this).node = null),
            (t._unobserveCb = null),
            (t.handleNode = function (e) {
              t.node &&
                (t.unobserve(),
                  e ||
                  t.props.triggerOnce ||
                  t.props.skip ||
                  t.setState({
                    inView: !!t.props.initialInView,
                    entry: void 0,
                  })),
                (t.node = e || null),
                t.observeNode();
            }),
            (t.handleChange = function (e, a) {
              e && t.props.triggerOnce && t.unobserve(),
                h(t.props) || t.setState({
                  inView: e,
                  entry: a
                }),
                t.props.onChange && t.props.onChange(e, a);
            }),
            (t.state = {
              inView: !!a.initialInView,
              entry: void 0
            }),
            t
          );
        }
        (t = e),
        ((a = i).prototype = Object.create(t.prototype)),
        (a.prototype.constructor = a),
        (a.__proto__ = t);
        var r = i.prototype;
        return (
          (r.componentDidUpdate = function (e) {
            (e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
            (this.unobserve(), this.observeNode());
          }),
          (r.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (r.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                a = e.threshold,
                t = e.root,
                n = e.rootMargin,
                i = e.trackVisibility,
                r = e.delay;
              this._unobserveCb = u(this.node, this.handleChange, {
                threshold: a,
                root: t,
                rootMargin: n,
                trackVisibility: i,
                delay: r,
              });
            }
          }),
          (r.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (r.render = function () {
            if (!h(this.props)) {
              var e = this.state,
                a = e.inView,
                t = e.entry;
              return this.props.children({
                inView: a,
                entry: t,
                ref: this.handleNode,
              });
            }
            var i = this.props,
              r = i.children,
              s = i.as,
              c = i.tag,
              l = (function (e, a) {
                if (null == e) return {};
                var t,
                  n,
                  i = {},
                  r = Object.keys(e);
                for (n = 0; n < r.length; n++)
                  (t = r[n]), a.indexOf(t) >= 0 || (i[t] = e[t]);
                return i;
              })(i, [
                "children",
                "as",
                "tag",
                "triggerOnce",
                "threshold",
                "root",
                "rootMargin",
                "onChange",
                "skip",
                "trackVisibility",
                "delay",
                "initialInView",
              ]);
            return Object(n.createElement)(
              s || c || "div",
              o({
                ref: this.handleNode
              }, l),
              r
            );
          }),
          i
        );
      })(n.Component);
      (d.displayName = "InView"),
      (d.defaultProps = {
        threshold: 0,
        triggerOnce: !1,
        initialInView: !1
      });
      var g = t("TSYQ"),
        f = t.n(g),
        _ = t("Au3V"),
        v = t("hYpE"),
        y = n.createElement,
        b = function (e) {
          var a = e.id,
            t = e.hackathonKey;
          return (
            n.useEffect(function () {}, []),
            y(
              _.a, {
                id: a,
                style: {
                  height: 50
                }
              },
              y(
                "svg", {

                  fill: "#fff",
                  viewBox: "0 0 115.46 123.46",
                  style: {
                    height: 24,
                    width: 24,
                    marginRight: 8
                  },
                  
                },
              ),
              "Sign Up Today!"
            )
          );
        };
      b.defaultProps = {
        hackathonKey: v.a.hackathonSlug
      };
      var k = function (e) {
          return new Promise(function (a, t) {
            var n = document.createElement("script");
            (n.src = e),
            n.addEventListener("load", function () {
                a();
              }),
              n.addEventListener("error", function (e) {
                t(e);
              }),
              document.body.appendChild(n);
          });
        },
        N = b,
        w = t("OF+g"),
        S = t.n(w),
        C = n.createElement,
        j = {
          full: {
            y: 0
          },
          half: {
            y: -120
          },
          hide: {
            y: -256
          }
        },
        I = function (e) {
          var a = e.animate;
          return C(
            s.c.div, {
              initial: "hide",
              animate: a,
              variants: j,
              className: S.a.backdrop,
              transition: {
                ease: "backOut",
                duration: 0.4
              },
            },
            C(
              "div", {
                className: S.a.info
              },
              C(
                "div",
                null,
                C(
                  "p", {
                    className: f()("h4", S.a.date)
                  },
                  "Apr. 4 - Apr. 10,"
                ),
                C("p", {
                  className: f()("h4", S.a.button)
                }, "Completed")
              ),
              C("img", {
                className: S.a.virtualSticker,
                src: "/pure-virtual-sticker.svg",
                width: 120,
                height: 80,
                alt: "",
              })
            ),
          );
        },
        x = n.memo(I),
        O = t("rePB"),
        E = t("wx14"),
        z = t("Ff2n"),
        A = t("YFqc"),
        M = t.n(A),
        V = t("KqkP"),
        P = t.n(V),
        B = i.a.createElement,
        L = function (e) {
          var a = e.children,
            t = e.className,
            n = void 0 === t ? null : t,
            i = e.href,
            r = e.external,
            s = void 0 !== r && r,
            o = Object(z.a)(e, ["children", "className", "href", "external"]);
          return s ?
            B(
              "a",
              Object(E.a)({
                  href: i,
                  className: f()("p", "fixed", P.a.link, P.a.external, n),
                  target: "_blank",
                  rel: "noreferrer noopener",
                },
                o
              ),
              a,
              B(
                "svg", {
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                B("path", {
                  d: "M7 17L17 7",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                B("path", {
                  d: "M7 7H17V17",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            ) :
            B(
              M.a,
              Object(E.a)({
                href: i
              }, o),
              B("a", {
                className: f()("p", "fixed", P.a.link, n)
              }, a)
            );
        },
        D = t("mLUF"),
        T = t("JMTo"),
        F = t.n(T),
        H = i.a.createElement,
        R = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.16
            }
          },
        },
        q = {
          hidden: {
            opacity: 0
          },
          show: {
            opacity: 1
          }
        },
        G = function () {
          return H(
            "div", {
              className: F.a.menuContainer
            },
            H(
              "nav", {
                className: F.a.menu
              },
              H(
                s.c.ul, {
                  className: F.a.list,
                  variants: R,
                  initial: "hidden",
                  animate: "show",
                  transition: {
                    ease: [0.25, 0.98, 0.25, 0.98],
                    duration: 0.8
                  },
                },
                H(
                  s.c.li, {
                    className: F.a.listItem,
                    variants: q
                  },
                  H(L, {
                    href: "index.html"
                  },"Return to Main Page")
                ),
                
                H(
                  s.c.li, {
                    className: F.a.listItem,
                    variants: q
                  },
                  H(L, {
                    href: "_next/static/media/schedule.jpg"
                  },"Schedule")
                ),
                H(
                  s.c.li, {
                    className: F.a.listItem,
                    variants: q
                  },
                  H(L, {
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSdw7K-CDoj3U1dWqr0ucbM4tY6PTPTWR3RNSjq3xao83HXSEQ/viewform"
                  },"Register Here!")
                ),
              )
            )
          );
        },
        W = {
          closed: {
            height: 0,
            transitionEnd: {
              display: "none"
            }
          },
          open: {
            height: 412,
            display: "flex"
          },
        },
        K = q,
        J = function () {
          var e = Object(n.useState)(!1),
            a = e[0],
            t = e[1],
            i = Object(n.useCallback)(function () {
              t(function (e) {
                return !e;
              });
            }, []);
          return H(
            "div", {
              className: F.a.mobileMenuContainer
            },
            H(
              "button", {
                className: f()(
                  F.a.controlButton,
                  Object(O.a)({}, F.a.isOpen, a)
                ),
                type: "button",
                onClick: i,
              },
              H("img", {
                src: a ? "/x.svg" : "/menu.svg",
                alt: "",
                height: 24,
                width: 24,
              })
            ),
            H(
              s.c.nav, {
                className: f()(F.a.mobileMenu, Object(O.a)({}, F.a.isOpen, a)),
                variants: W,
                animate: a ? "open" : "closed",
                transition: {
                  duration: 0.4,
                  ease: [0.22, 0.98, 0.36, 0.98]
                },
              },
              H(
                s.c.div, {
                  variants: K,
                  animate: a ? "show" : "hidden"
                },
                H(D.a, {
                  className: F.a.logo,
                  variant: "detailed",
                  height: 82,
                  width: 296,
                })
              ),
              H(
                s.c.ul, {
                  className: F.a.mobileList,
                  variants: R,
                  animate: a ? "show" : "hidden",
                  transition: {
                    ease: [0.25, 0.98, 0.25, 0.98],
                    duration: 0.8
                  },
                },
                H(
                  s.c.li, {
                    className: F.a.mobileListItem,
                    variants: q
                  },
                  H(L, {
                    href: "/summit"
                  }, "Summits")
                ),
                H(
                  s.c.li, {
                    className: F.a.mobileListItem,
                    variants: q
                  },
                  H(
                    L, {
                      className: F.a.external,
                      external: !0,
                    },
                    "Register Here!"
                  )
                ),
                H(
                  s.c.li, {
                    className: F.a.mobileListItem,
                    variants: q
                  },
                  H(
                    L, {
                      className: F.a.external,
                      external: !0,
                    },
                  )
                )
              )
            )
          );
        },
        Q = function () {
          return H(i.a.Fragment, null, H(G, null), H(J, null));
        },
        Y = t("mAMY"),
        U = t("gFmV"),
        Z = t.n(U),
        X = i.a.createElement,
        $ = function (e) {
          var a = e.name,
            t = e.value,
            n = Object(z.a)(e, ["name", "value"]);
          return X(
            s.c.div,
            n,
            X("p", {
              className: f()(Z.a.value, "h2", "fixed")
            }, t),
            X("p", {
              className: f()(Z.a.name, "p", "fixed")
            }, a)
          );
        },
        ee = t("IrLP"),
        ae = t.n(ee),
        te = i.a.createElement,
        ne = function () {
          var e = (function (e) {
              var a = void 0 === e ? {} : e,
                t = a.threshold,
                i = a.delay,
                r = a.trackVisibility,
                s = a.rootMargin,
                o = a.root,
                c = a.triggerOnce,
                l = a.skip,
                m = a.initialInView,
                p = Object(n.useRef)(),
                h = Object(n.useState)({
                  inView: !!m
                }),
                d = h[0],
                g = h[1],
                f = Object(n.useCallback)(
                  function (e) {
                    void 0 !== p.current && (p.current(), (p.current = void 0)),
                      l ||
                      (e &&
                        (p.current = u(
                          e,
                          function (e, a) {
                            g({
                                inView: e,
                                entry: a
                              }),
                              a.isIntersecting &&
                              c &&
                              p.current &&
                              (p.current(), (p.current = void 0));
                          }, {
                            root: o,
                            rootMargin: s,
                            threshold: t,
                            trackVisibility: r,
                            delay: i,
                          }
                        )));
                  },
                  [Array.isArray(t) ? t.toString() : t, o, s, c, l, r, i]
                );
              Object(n.useEffect)(function () {
                p.current || !d.entry || c || l || g({
                  inView: !!m
                });
              });
              var _ = [f, d.inView, d.entry];
              return (_.ref = _[0]), (_.inView = _[1]), (_.entry = _[2]), _;
            })({
              threshold: 0,
              initialInView: !0
            }),
            a = e.ref,
            t = e.inView;
          return te(
            "header", {
              ref: a
            },
            te(Y.a, {
              className: ae.a.menuSection
            }, te(Q, null)),
            te(
              Y.a, {
                fluid: !0
              },
              te(x, {
                animate: t ? "full" : "half"
              }),
              te(
                "div", {
                  className: ae.a.hero
                },
                te(
                  "div", {
                    className: ae.a.statistics
                  },
                  te($, {
                    name: "In prizes",
                    value: "$2400+",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: {
                      delay: 0.4
                    },
                  }),
                  te($, {
                    name: "Days",
                    value: "7",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: {
                      delay: 0.5
                    },
                  })
                ),
                te(
                  "div", {
                    className: ae.a.logo
                  },
                  te(s.c.img, {
                    src: "/inout-7.svg",
                    alt: "InOut 7 logo",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: {
                      delay: 0.2
                    },
                  }),
                  te(
                    s.c.h1, {
                      className: f()(ae.a.headline, "p"),
                      initial: {
                        opacity: 0,
                        y: 4
                      },
                      animate: {
                        opacity: 1,
                        y: 0
                      },
                      transition: {
                        delay: 0.3
                      },
                    },
                  )
                ),
                te(
                  "div", {
                    className: ae.a.virtualSticker
                  },
                  te("img", {
                    src: "/pure-virtual-sticker.svg",
                    height: 135,
                    width: 203,
                    alt: "",
                  })
                )
              )
            )
          );
        },
        ie = t("pw1z"),
        re = t("EGGI"),
        se = t("ODXe"),
        oe = n.createElement,
        ce = n.useLayoutEffect,
        le = function (e) {
          var a = e.children,
            t = e.speed,
            i = n.useRef(),
            r = n.useState(!1),
            o = Object(se.a)(r, 2),
            c = o[0],
            l = o[1],
            m = n.useState(0),
            p = Object(se.a)(m, 2),
            u = p[0],
            h = p[1],
            d = Object(s.e)().scrollY,
            g = Object(s.d)(d, [u, u + 1], [0, 1 - t], {
              clamp: !1
            });
          return (
            ce(
              function () {
                i.current && h(i.current.offsetTop);
              },
              [i]
            ),
            n.useEffect(function () {
              var e = function () {
                null !== i.current && l(i.current.clientWidth < 992);
              };
              return (
                window.addEventListener("load", e),
                window.addEventListener("resize", e),
                function () {
                  window.removeEventListener("load", e),
                    window.removeEventListener("resize", e);
                }
              );
            }),
            oe(
              "div", {
                ref: i
              },
              oe(s.c.div, {
                className: "overlay",
                style: c ? {} : {
                  y: g
                }
              }, a)
            )
          );
        },
        me = n.memo(le),
        pe = t("yBw5"),
        ue = t.n(pe),
        he = i.a.createElement,
        de = function () {
          return he(
            Y.a, {
              fluid: !0
            },
            he(
              "div", {
                className: ue.a.container
              },
              he(
                "div", {
                  className: ue.a.art
                },
                he(
                  me, {
                    speed: 1.1
                  },
                  he(re.a, {
                    className: ue.a.left,
                    src: "/left.png",
                    loading: "eager",
                  })
                ),
                he(
                  me, {
                    speed: 1.04
                  },
                  he(re.a, {
                    className: ue.a.code,
                    src: "/code.png",
                    loading: "eager",
                  })
                ),
                he(
                  me, {
                    speed: 0.98
                  },
                  he(re.a, {
                    className: ue.a.right,
                    src: "/right.png",
                    loading: "eager",
                  })
                )
              ),
              he(
                ie.a, {
                  className: ue.a.calloutOne,
                  halftonePlacement: "right",
                  initial: {
                    opacity: 0,
                    top: "8%"
                  },
                  animate: {
                    opacity: 1,
                    top: "6%"
                  },
                  transition: {
                    delay: 0.7,
                    type: "spring",
                    damping: 9.8,
                    mass: 0.72,
                  },
                },
                "Health Hacks is a week-long virtual hackathon open to students…"
              ),
              he(
                ie.a, {
                  className: ue.a.calloutTwo,
                  initial: {
                    opacity: 0,
                    bottom: "45%"
                  },
                  animate: {
                    opacity: 1,
                    bottom: "47%"
                  },
                  transition: {
                    delay: 0.86,
                    type: "spring",
                    damping: 9.88,
                    mass: 0.72,
                  },
                },
                "...across the U.S. to create and present their own awesome projects!"
              )
            )
          );
        },
        ge = t("Fu1w"),
        fe = t.n(ge),
        _e = i.a.createElement,
        ve = function (e) {
          var a = e.children,
            t = e.imgName,
            n = e.imgAlt;
          return _e(
            "div", {
              className: fe.a.panel
            },
            _e(
              "div", {
                className: fe.a.imgContainer
              },
              _e(
                "picture",
                null,
                _e("source", {
                  srcSet: "".concat(t, "@2x.webp 2x, ").concat(t, ".webp 1x"),
                  type: "image/webp",
                }),
                _e("img", {
                  loading: "lazy",
                  className: fe.a.img,
                  srcSet: "".concat(t, "@2x.jpg 2x, ").concat(t, ".jpg 1x"),
                  src: "".concat(t, ".jpg"),
                  alt: n,
                })
              )
            ),
            _e("p", {
              className: f()("p", fe.a.description)
            }, a)
          );
        },
        ye = t("5dkx"),
        be = t.n(ye),
        ke = i.a.createElement,
        Ne = function () {
          return ke(
            Y.a, {
              fluid: !0
            },
            ke(
              "div", {
                className: be.a.container
              },
              ke(
                "h2", {
                  className: f()("h3", be.a.headline)
                },
                "Join us for HealthHacks, hosted by ",

                ke("span", {
                  className: be.a.accent
                }, "Coding Tomorrow Initiative! "),

                "Build innovative projects that could help those in ",
                ke("span", {
                  className: be.a.accent
                }, "the field of medicine "),
                "and earn ",
                ke("span", {
                  className: be.a.accent
                }, "great prizes!")
              ),
            )
          );
        },
        we = t("9GEP"),
        Se = t.n(we),
        Ce = i.a.createElement,
        je = [{
            name: "Art of Problem Solving",
            href: "https://artofproblemsolving.com/",
            imgSrc: "/sponsors/artofproblemsolving.png",
          },
          {
            name: "Product Hunt",
            href: "https://www.producthunt.com/",
            imgSrc: "/sponsors/producthunt.png",
          },
          {
            name: "Balsamiq",
            href: "https://balsamiq.com/",
            imgSrc: "/sponsors/balsamiq.png",
          },
          {
            name: "Glimpse",
            href: "https://www.joinglimpse.com/",
            imgSrc: "/sponsors/glimpse.png",
          },
          {
            name: "Magoosh",
            href: "https://magoosh.com/",
            imgSrc: "/sponsors/magoosh.png",
          },
          {
            name: "Berbawy Makers",
            href: "https://berbawymakers.com/",
            imgSrc: "/sponsors/berbawymakers.png",
          },
        ],
        Ie = function () {
          return Ce(
            "div", {
              className: Se.a.container
            },
            Ce(
              Y.a,
              null,
              Ce(
                "div",
                null,
                Ce(
                  "div", {
                    className: Se.a.header
                  },
                  Ce(
                    "div",
                    null,
                    Ce("p", {
                      className: f()("h3", Se.a.overline)
                    }, "Our"),
                    Ce("p", {
                      className: f()("h1", Se.a.accent)
                    }, "Sponsors")
                  ),
                  Ce(
                    "div", {
                      className: Se.a.calloutContainer
                    },
                    Ce(
                      ie.a, {
                        halftonePlacement: "right"
                      },
                      "Want to get involved?"
                    ),
                    Ce(
                      "div",
                      null,
                      Ce(
                        "a", {
                          href: "mailto:healthhacks2021@gmail.com"
                        },
                        Ce(
                          _.a, {
                            className: Se.a.calloutCta,
                            variant: "BIF"
                          },
                          "Contact us"
                        )
                      )
                    )
                  )
                ),
                Ce(
                  "div", {
                    className: Se.a.sponsorsContainer
                  },
                  je.map(function (e, a) {
                    var t = e.name,
                      n = e.href,
                      i = e.imgSrc;
                    return Ce(
                      "a", {
                        className: Se.a.sponsor,
                        key: "".concat(t, "-").concat(a),
                        href: n,
                        target: "_blank",
                        rel: "noreferrer noopener",
                      },
                      Ce("img", {
                        loading: "lazy",
                        className: Se.a.sponsorImg,
                        src: i,
                        alt: t,
                      })
                    );
                  })
                ),
                Ce(
                  "div", {
                    className: Se.a.ctaContainer
                  },
                  Ce(
                    "p", {
                      className: f()("h4")
                    },
                    "Did you miss the big black button above?"
                  ),
                  Ce(
                    "div",
                    null,
                    Ce(
                      "a", {
                        href: "mailto:healthhacks2021@gmail.com"
                      },
                      Ce(
                        _.a, {
                          variant: "BIF",
                          className: Se.a.cta
                        },
                        "HERE IT IS AGAIN. SPONSOR US!"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        xe = t("PSIK"),
        Oe = t.n(xe),
        Ee = i.a.createElement,
        ze = [
          {
            firstName: "Sanjhee",
            lastName: "Gupta",
            href: "https://www.linkedin.com/in/sanjhee-gupta",
            imgSrc: "/speakers/sanjhee_hackathon.jpg",
          },
          {
            firstName: "Jyothi",
            lastName: "Shankar",
            href: "https://www.facebook.com/jyothi.shankar.1238/",
            imgSrc: "/speakers/jyothi_hackathon.jpg",
          },
          {
            firstName: "Lakshana",
            lastName: "Viswa",
            href: "https://www.linkedin.com/in/lakshana-viswa-46b454174/",
            imgSrc: "/speakers/lakshana_hackathon.jpg",
          },
          {
            firstName: "Mithil",
            lastName: "Srungarapu",
            href: "https://www.linkedin.com/in/srungarapumithil/",
            imgSrc: "/speakers/mithil_hackathon.jpg"
          },
          {
            firstName: "Nathan",
            lastName: "Lintu",
            href: "https://www.linkedin.com/in/nathanlintu/",
            imgSrc: "/speakers/nathan_hackathon.jpg"
          },
          {
            firstName: "Praneet",
            lastName: "Joshi",
            href: "https://www.linkedin.com/in/praneet-joshi-5718221b3",
            imgSrc: "/speakers/praneet_hackathon.jpg",
          },
          {
            firstName: "Charlotte",
            lastName: "Chau",
            href: "https://www.linkedin.com/in/charlotte-chau-bab3421a3/",
            imgSrc: "/speakers/charlotte_hackathon.jpg",
            speaker: !0,
          },
          {
            firstName: "Kristin",
            lastName: "Berbawy",
            href: "https://www.linkedin.com/in/kristin-berbawy-10a55a33/",
            imgSrc: "/speakers/kristin_berbawy_hackathon.jpeg"
          },
          {
            firstName: "Cheuk Ting",
            lastName: "Ho",
            href: "https://www.linkedin.com/in/cheukting-ho/",
            imgSrc: "/speakers/cheukting_hackathon.jpg"
          },
          {
            firstName: "Vineet",
            lastName: "Gupta",
            href: "https://www.linkedin.com/in/vineet-gupta-a8a7b81/",
            imgSrc: "/speakers/vineet_gupta_hackathon.jpg"
          },
        ],
        Ae = function () {
          return Ee(
            "div", {
              className: Oe.a.container
            },
            Ee(
              Y.a,
              null,
              Ee(
                "div",
                null,
                Ee(
                  "div", {
                    className: Oe.a.header
                  },
                  Ee(
                    "div",
                    null,
                    Ee(
                      "p", {
                        className: f()("h3", Oe.a.overline)
                      },
                      "Meet our"
                    ),
                    Ee(
                      "p", {
                        className: f()("h1", Oe.a.accent)
                      },
                      "Speakers and Judges"
                    )
                  )
                ),
                Ee(
                  "div", {
                    className: Oe.a.speakersContainer
                  },
                  ze.sort(function (e, a) {
                    return e.firstName.localeCompare(a.firstName);
                  }) &&
                  ze.map(function (e, a) {
                    var t = e.firstName,
                      n = e.lastName,
                      i = e.company,
                      r = e.href,
                      s = e.imgSrc,
                      o = e.speaker;
                    return Ee(
                      "a", {
                        className: Oe.a.speaker,
                        key: "".concat(t, "-").concat(a),
                        href: r,
                        target: "_blank",
                        rel: "noreferrer noopener",
                      },
                      Ee(
                        "div", {
                          className: Oe.a.speakerImg
                        },
                        Ee(re.a, {
                          src: s,
                          alt: t,
                          loading: "lazy"
                        })
                      ),
                      Ee(
                        "div", {
                          className: Oe.a.wrapper
                        },
                        Ee(
                          "div", {
                            className: Oe.a.speakerInfo
                          },
                          Ee(
                            "div",
                            { className: Oe.a.speakerInfo },
                            Ee(
                              "div",
                              null,
                              Ee("h3", null, t),
                              Ee("h4", null, n)
                            ),
                            Ee("h4", { className: Oe.a.right }, i)
                          )
                        )
                      )
                    );
                  })
                ),
                Ee(
                  "div", {
                    className: Oe.a.calloutContainer
                  },
                  Ee(
                    ie.a, {
                      halftonePlacement: "right"
                    },
                    "Want to speak at HealthHacks or nominate someone?"
                  ),
                  Ee(
                    "div",
                    null,
                    Ee(
                      "a", {
                        href: "mailto:healthhacks2021@gmail.com",
                        target: "_blank",
                      },
                      Ee(
                        _.a, {
                          className: Oe.a.calloutCta,
                          variant: "BIF"
                        },
                        "Contact us"
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Me = t("wpIj"),
        Ve = t.n(Me),
        Pe = i.a.createElement,
        Be = {
          over: {
            y: 0
          },
          out: {
            y: 16
          }
        },
        Le = {
          over: {
            opacity: 1
          },
          out: {
            opacity: 0
          }
        },
        De = function (e) {
          var a = e.href,
            t = e.imgSrc,
            i = e.imgAlt,
            r = e.message,
            o = e.backgroundColor,
            c = Object(n.useState)(!1),
            l = c[0],
            m = c[1];
          return Pe(
            "a", {
              href: a,
              className: Ve.a.social,
              target: "_blank",
              rel: "noreferrer noopener",
              style: {
                backgroundColor: o
              },
              onMouseOver: function () {
                m(!0);
              },
              onMouseOut: function () {
                m(!1);
              },
            },
            Pe(s.c.img, {
              initial: "out",
              animate: l ? "over" : "out",
              variants: Be,
              className: Ve.a.socialImg,
              loading: "lazy",
              src: t,
              alt: i,
            }),
            Pe(
              s.c.p, {
                initial: "out",
                animate: l ? "over" : "out",
                variants: Le,
                className: f()("h4", Ve.a.message),
              },
              r
            )
          );
        },
        Te = t("EUy/"),
        Fe = t.n(Te),
        He = i.a.createElement,
        Re = function () {
          return He(
            "div", {
              className: Fe.a.container
            },
            He(De, {
              href: "https://discord.gg/cumz6YcDpv",
              imgAlt: "Discord",
              imgSrc: "/discord.svg",
              message: "Join the HealthHacks Discord Server",
              backgroundColor: "var(--discord)",
            }),
            He(De, {
              href: "https://www.instagram.com/irvingtoncti/",
              imgAlt: "Twitter",
              imgSrc: "/instagram.svg",
              message: "Follow us on Instagram for updates",
              backgroundColor: "var(--twitter)",
            })
          );
        },
        qe = t("LZxE"),
        Ge = t.n(qe),
        We = i.a.createElement,
        Ke = function () {
          return null 
        },
        Je = t("dApW"),
        Qe = t("WKcy"),
        Ye = t.n(Qe),
        Ue = i.a.createElement,
        Ze = function (e) {
          var a = e.overline,
            t = e.title,
            n = e.children,
            i = e.imgSrc,
            r = e.imgAlt,
            s = e.reverse;
          return Ue(
            "div", {
              className: s ? Ye.a.containerReverse : Ye.a.container
            },
            Ue(
              "div", {
                className: Ye.a.infoContainer
              },
              Ue(
                "div",
                null,
                Ue("p", {
                  className: f()("p", "fixed", Ye.a.overline)
                }, a),
                Ue("h3", {
                  className: f()("h2", Ye.a.title)
                }, t)
              ),
              Ue(
                "div",
                null,
                Ue("p", {
                  className: f()("p", "fixed", Ye.a.description)
                }, n)
              )
            ),
            Ue(
              "div", {
                className: Ye.a.imageContainer
              },
              Ue(re.a, {
                loading: "lazy",
                className: Ye.a.image,
                src: i,
                alt: r,
              }),
              Ue("img", {
                loading: "lazy",
                className: Ye.a.halftone,
                src: "/halftone.png",
                alt: "",
              })
            )
          );
        },
        Xe = t("gnR3"),
        $e = t.n(Xe),
        ea = i.a.createElement,
        aa = function () {
          return ea(
            "div",
            { className: $e.a.features },
            ea(
              "div",
              { className: $e.a.years },
              ea(
                "div",
                { className: $e.a.year },
                ea(
                  "div",
                  { className: $e.a.fifteen },
                  ea("h3", { className: f()("h2", "fixed") }, "Beginner"),
                  ea(
                    "p",
                    { className: f()("p", $e.a.description) },
                    "Unlike other virtual hackathons, we want to accommodate younger members too— those who have little experience in computer science and coding. Here, we will use this hackathon as a learning experience for students."
                  )
                )
              ),
              ea(
                "div",
                { className: $e.a.year },
                ea(
                  "div",
                  { className: $e.a.twenty },
                  ea("h3", { className: f()("h2", "fixed") }, "Advanced"),
                  ea(
                    "p",
                    { className: f()("p", $e.a.description) },
                    "All at no costs, Health Hacks is still keeping a traditional hackathon approach and every attendee will have the best experience possible when building their projects!"
                  ),
                  ea(re.a, { className: $e.a.brace, src: "/opening-brace.png" })
                )
              )
            ),
            ea(
              Y.a,
              null,
              ea(
                Ze, {
                  overline: "Learning",
                  title: "Opportunities",
                  imgSrc: "/meet.jpg",
                  imgAlt: "Coding",
                  reverse: !0,
                },
                "This hackathon is perfect for beginners and veterans alike! We offer challenging issues to tackle while also offering full support for those who need a little extra help. No matter how much experience you have, we hope that HealthHacks will be a fun and enjoyable experience for you!"
              ),
              ea(
                Ze, {
                  overline: "Learn from",
                  title: "The best",
                  imgSrc: "/learn.jpg",
                  imgAlt: "Mentorship session",
                },
                "Our judgers, admins, mentors, and volunteers have extensive experience in both programming and competitions! We will hold workshops and help sessions so that you can get the most out of your spring break."
              ),
              ea(
                Ze, {
                  overline: "Make",
                  title: "Creative Projects",
                  imgSrc: "/build.jpg",
                  imgAlt: "Ideate and build",
                  reverse: !0,
                },
                "The main goal of HealthHacks is for you and your team to make creative and interesting projects that can impact the world around you. It doesn't matter how experienced you are in the field of computer science, just make sure to bring a passion for learning and creativity!"
              )
            )
          );
        },
        ta = i.a.createElement;
      a.default = function () {
        return ta(
          r.a,
          null,
          ta(ne, null),
          ta(de, null),
          ta(Ne, null),
          ta(aa, null),
          ta(Ae, null),
          ta(Ie, null),
          ta(Re, null),
          ta(Ke, null),
          ta(Je.a, null)
        );
      };
    },
    "5dkx": function (e, a, t) {
      e.exports = {
        container: "innovate-home_container__18LGi",
        headline: "innovate-home_headline__2Qdwc",
        accent: "innovate-home_accent__jITrA",
        panels: "innovate-home_panels__UJESP",
      };
    },
    "9GEP": function (e, a, t) {
      e.exports = {
        container: "sponsors_container__icjgq",
        header: "sponsors_header__a7jxs",
        overline: "sponsors_overline__2eWHo",
        accent: "sponsors_accent__2GG2v",
        calloutContainer: "sponsors_calloutContainer__yKZ7E",
        calloutCta: "sponsors_calloutCta__1pGqV",
        ctaContainer: "sponsors_ctaContainer__3AuAB",
        cta: "sponsors_cta__MmATe",
        sponsorsContainer: "sponsors_sponsorsContainer__hZfg7",
        sponsorImg: "sponsors_sponsorImg__2TRo0",
      };
    },
    "EUy/": function (e, a, t) {
      e.exports = {
        container: "social_container__3hm_J"
      };
    },
    Fu1w: function (e, a, t) {
      e.exports = {
        panel: "comic-panel_panel__2hOlU",
        imgContainer: "comic-panel_imgContainer__1MA3a",
        img: "comic-panel_img__3gaea",
        description: "comic-panel_description__2NCQx",
      };
    },
    IrLP: function (e, a, t) {
      e.exports = {
        hero: "hero_hero__2uWtA",
        logo: "hero_logo__1IVLR",
        headline: "hero_headline__3lRgn",
        statistics: "hero_statistics__3Il2i",
        virtualSticker: "hero_virtualSticker__2aYd8",
        menuSection: "hero_menuSection__3xtqy",
      };
    },
    JMTo: function (e, a, t) {
      e.exports = {
        menu: "menu_menu__1hJbP",
        menuContainer: "menu_menuContainer__37M0D",
        mobileMenuContainer: "menu_mobileMenuContainer__1N5Gg",
        mobileMenu: "menu_mobileMenu__1eAHr",
        controlButton: "menu_controlButton__3jfD_",
        isOpen: "menu_isOpen__2wha6",
        logo: "menu_logo__Edv21",
        mobileList: "menu_mobileList__1nOxS",
        list: "menu_list__1heNv",
        listItem: "menu_listItem__2fatv",
        mobileListItem: "menu_mobileListItem__1jIyD",
        external: "menu_external__1ZdZ0",
      };
    },
    KqkP: function (e, a, t) {
      e.exports = {
        link: "link_link__3wj2w",
        external: "link_external__3ew0u",
      };
    },
    LZxE: function (e, a, t) {
      e.exports = {
        container: "build-india_container__34h0E",
        yellowStripe: "build-india_yellowStripe__1N0xf",
        closingSquareBrace: "build-india_closingSquareBrace__20R7o",
        sticker: "build-india_sticker__1Zwj4",
        bodyContainer: "build-india_bodyContainer__2WrE-",
        ctaContainer: "build-india_ctaContainer__1ekVI",
        puzzlePieceOutline: "build-india_puzzlePieceOutline__2HajQ",
        puzzleBoard: "build-india_puzzleBoard__3v7vr",
        rightHand: "build-india_rightHand__10-7h",
        track: "build-india_track__24CS7",
        bottomHand: "build-india_bottomHand__bsT-D",
        bottomHandMobile: "build-india_bottomHandMobile__3VuRy",
        description: "build-india_description__10PY1",
      };
    },
    "OF+g": function (e, a, t) {
      e.exports = {
        backdrop: "apply-panel_backdrop__2UptN",
        date: "apply-panel_date__lT_7j",
        mode: "apply-panel_mode__1T5vc",
        button: "apply-panel_button__ZodCR",
        virtualSticker: "apply-panel_virtualSticker__1ZgQz",
        info: "apply-panel_info__3k9DP",
      };
    },
    PSIK: function (e, a, t) {
      e.exports = {
        container: "speakers_container__1Y5EF",
        header: "speakers_header__1Lv5z",
        overline: "speakers_overline__1N_Yv",
        accent: "speakers_accent__Yqif_",
        calloutContainer: "speakers_calloutContainer__om0jm",
        calloutCta: "speakers_calloutCta__2IBup",
        ctaContainer: "speakers_ctaContainer__2T0ut",
        cta: "speakers_cta__1j6mp",
        speakersContainer: "speakers_speakersContainer__1E-59",
        speaker: "speakers_speaker__2-2oT",
        speakerImg: "speakers_speakerImg__2dPy6",
        wrapper: "speakers_wrapper__1A--4",
        speakerInfo: "speakers_speakerInfo__KbuGd",
        microphone: "speakers_microphone__3AHyT",
        right: "speakers_right__3HtuQ",
      };
    },
    WKcy: function (e, a, t) {
      e.exports = {
        overline: "feature_overline__1Xwrm",
        title: "feature_title__IxHRi",
        description: "feature_description__2IAEl",
        container: "feature_container__2wxqB",
        containerReverse: "feature_containerReverse__U2rC-",
        infoContainer: "feature_infoContainer__2vvXE",
        imageContainer: "feature_imageContainer__ZqxB2",
        image: "feature_image__39s2V",
        halftone: "feature_halftone__3zaHe",
      };
    },
    gFmV: function (e, a, t) {
      e.exports = {
        name: "statistic_name__Mnsi3",
        value: "statistic_value__tG887",
      };
    },
    gnR3: function (e, a, t) {
      e.exports = {
        features: "features_features__vFe05",
        years: "features_years__LYcwq",
        year: "features_year__37PzA",
        fifteen: "features_fifteen__-RzZf",
        twenty: "features_twenty__2aQMQ",
        description: "features_description__21JpV",
        brace: "features_brace__3XCyQ",
      };
    },
    wpIj: function (e, a, t) {
      e.exports = {
        social: "social-cta_social__2TK55",
        socialImg: "social-cta_socialImg__39X4h",
        message: "social-cta_message__2BmQ3",
      };
    },
    yBw5: function (e, a, t) {
      e.exports = {
        container: "premise_container__2KcMF",
        art: "premise_art__3xtrS",
        left: "premise_left__NigEh",
        code: "premise_code__3w0NV",
        right: "premise_right__1Fefb",
        codeMobile: "premise_codeMobile__2NhEB",
        calloutOne: "premise_calloutOne__LDBBI",
        calloutTwo: "premise_calloutTwo__2pU50",
      };
    },
  },
  [
    ["/EDR", 0, 2, 3, 1, 4]
  ],
]);