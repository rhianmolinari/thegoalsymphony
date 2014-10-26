"use strict";
var PARALLAX = PARALLAX || {};
PARALLAX.Home = function(n) {
        function tt() {
            n(window).on({
                "DOMMouseScroll mousewheel": ft,
                keydown: et,
                resize: lt
            });
            p.on({
                touchstart: it,
                touchmove: rt,
                touchend: ut
            })
        }

        function it(n) {
            c === null && (n.originalEvent.touches && (n = n.originalEvent.touches[0]), c = n.clientY, l = i.eq(t)[0], l.classList.add("no-animation"), u = i.eq(t - 1)[0], u.classList.add("no-animation"))
        }

        function rt(n) {
            if (g, !s) return !0;
            if (c !== null) {
                if (n.originalEvent.touches && (n = n.originalEvent.touches[0]), r = c - n.clientY, f = r / o, f > 0) {
                    if (t === h) return a(!1, !0), !0;
                    l.style.height = 100 - f * 100 + "%", u && (u.style.height = "")
                } else u && (u.style.height = -f * 100 + "%", l.style.height = "");
                return !1
            }
        }

        function ut() {
            if (c = null, l.classList.remove("no-animation"), u && u.classList.remove("no-animation"), !s) {
                var t = n("#wrap")[0].getBoundingClientRect().top;
                return t >= 0 ? (a(!0, !0), !1) : !0
            }
            f >= d ? b() : Math.abs(f) >= d ? w() : y(), f = 0
        }

        function ft(i) {
            if (e) return !1;
            if (i.originalEvent.detail < 0 || i.originalEvent.wheelDelta > 0) {
                if (t === 0) return !1;
                if (r--, Math.abs(r) >= k)
                    if (s) w();
                    else {
                        var u = n("#main")[0].getBoundingClientRect().top;
                        return u === 0 ? (a(!0), !1) : !0
                    }
            } else {
                if (!s) return !0;
                r++, r >= k && b()
            }
            return !1
        }

        function et(n) {
            (n.keyCode === 37 || n.keyCode === 38) && w(), (n.keyCode === 39 || n.keyCode === 40) && b()
        }


        function y() {
            r = 0, e = !0, i.each(function(i, r) {
                r.style.height = "", n(r).toggleClass("active", i >= t)
            }), v.removeClass("active").eq(t).addClass("active")
        }

        function w() {
            t--, t < 0 && (t = 0), y()
        }

        function b() {
            if (t === h) return a(!1), !1;
            t++, t > h && (t = h), y()
        }

        function ot() {
            PARALLAX.isTouchDevice || (t = i.length - 1, a(!1), setTimeout(function() {
                i.removeClass("active").last().addClass("active"), v.removeClass("active").last().addClass("active")
            }, 1e3))
        }

        function st() {
            if (!g && PARALLAX.transitionSupport) {
                p = n("#projects"), i = p.find(".slide"), h = i.length - 1, v = n("#projects nav span").not(".mosaic-link"), n("body").addClass("gallery"), PARALLAX.registerOrientationMethods(nt), tt(), ht(), nt(), i.each(function() {
                    n(this).on(PARALLAX.transitionSupport.end, function(n) {
                        n.stopPropagation(), n.target == this && (e = !1)
                    })
                });
                n("#wrap").on(PARALLAX.transitionSupport.end, function(n) {
                    n.target == this && (e = !1)
                });
                setTimeout(scrollTo, 1e3, 0, 0)
            }
        }

        function ht() {
            v.each(function(i) {
                n(this).click(function() {
                    t = i, y()
                })
            }), n("nav .mosaic-link, button").click(function() {
                ot()
            })
        }

        function lt() {
            PARALLAX.isTouchDevice && (o = PARALLAX.getWindowHeight(), n("body").css("height", o))
        }

        function nt() {
            var t;
            if (PARALLAX.isTouchDevice) {
                setTimeout(scrollTo, 0, 0, 1), n(window).resize(), o = PARALLAX.getWindowHeight(), t = o - 100, n("body").css("height", o);
                switch (window.orientation) {
                    case -90:
                    case 90:
                        n(".slide").css("-webkit-background-size", "auto " + t + "px"), n(".slide").css("background-size", "auto " + t + "px");
                        break;
                    default:
                        n(".slide").css("-webkit-background-size", "auto " + t + "px"), n(".slide").css("background-size", "auto " + t + "px")
                }
            }
        }
        var e = !1,
            s = !0,
            p, i, v, t = 0,
            h, o = PARALLAX.getWindowHeight(),
            k = 5,
            d = .15,
            r = 0,
            c = null,
            f = 0,
            g = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion),
            l, u;
        return {
            init: function() {
                st()
            }
        }
    }(jQuery)