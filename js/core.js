"use strict";
var PARALLAX;
PARALLAX = function() {
    function c() {
        var u, r, t;
        if (n) {
            for ($("body").addClass("touch-device"), t = 0; t < i.length; t++) navigator.userAgent.indexOf(i[t]) > -1 && $("body").addClass(i[t]);
            r = function() {
                var t = $("meta[name=viewport]"),
                    n;
                switch (window.orientation) {
                    case -90:
                    case 90:
                        n = "device-width";
                        break;
                    default:
                        n = 640
                }
                t.attr("content", t.attr("content").replace(/width=[^,]+/, "width=" + n)), g()
            }, u = "onorientationchange" in window, f = u ? "orientationchange" : "resize", window.addEventListener(f, function() {
                r()
            }, !1), r(), $(window).width() < 656 && $("h1").fitText(1.2, {
                minFontSize: "60px",
                maxFontSize: "96px"
            })
        }
        h && ($('embed[type="application/x-shockwave-flash"]').parent().hide(), l())
    }

    function l() {
        var n = $("body"),
            i = $("input, textarea"),
            t = "ios-fixed-fix";
        i.focus(function() {
            n.addClass(t)
        }).blur(function() {
            n.removeClass(t)
        }), n.bind("touchmove", function() {
            i.blur(), $(this).removeClass(t)
        })
    }

    function u() {
        return window.innerHeight || document.documentElement.offsetHeight || document.documentElement.clientHeight
    }

    function a() {
        function l() {
            return r = window.pageYOffset, f = r > h ? "down" : "up", h = r, f
        }

        function e(i) {
            return i ? $("body").bind("touchmove", function(n) {
                n.preventDefault()
            }) : ($("body").unbind("touchmove"), n.addClass("closing"), clearTimeout(o), o = setTimeout(function() {
                n.removeClass("closing")
            }, 450)), n.toggleClass("open", i), t.attr("tabindex", i ? 0 : -1), setTimeout(function() {
                $("body").toggleClass("clip", i)
            }, 600), !1
        }

        function c() {
            var n = u(),
                i = n / t.length,
                r = Math.min(i / 2, 60);
            t.css("font-size", r)
        }
        var n = $("body > nav"),
            i = !1,
            o, t = n.find("li a"),
            h = 0,
            r, f;
        t.attr("tabindex", -1), s(c), $("#toggle").click(function(n) {
            n.preventDefault(), c(), e(i = !i)
        }), $(document).keyup(function(n) {
            n.keyCode === 27 && e(!1)
        });
        $(".nav-background").on("click", function() {
            e(i = !1)
        });
        $(window).bind("scroll", function() {
            if (!n.hasClass("open")) {
                var t = l(),
                    i = window.pageYOffset;
                i > 460 && t == "down" ? n.addClass("hide-it") : n.removeClass("hide-it"), t == "up" && i > 500 ? n.addClass("solid") : n.removeClass("solid")
            }
        })
    }

    function e(n) {
        function r() {
            t.removeClass("engage"), i.removeClass("clip"), i.trigger("PARALLAX.close")
        }
        var t = $(n),
            i = $("body");
        $(n).on("touchstart", function() {});
        t.addClass("engage"), i.addClass("clip"), t.find(".close").click(r);
        $(document).on("keyup.overlay", function(n) {
            n.keyCode === 27 && r()
        })
    }




    function d() {
        var t = $("main"),
            i = $("aside"),
            n = 144,
            r = i.find(".container > *");
        r.each(function() {
            n += $(this).outerHeight(!0)
        }), n > t.height() && t.height(n)
    }

    function s(n) {
        t.push(n)
    }

    function g() {
        for (var n = 0; n < t.length; n++) t[n].call()
    }

    var t = [],
        n = navigator.userAgent.match(/(iPad|iPhone|iPod|Android)/g),
        i = ["iPad", "iPhone", "iPod", "Android"],
        h = navigator.userAgent.match(/(iPad|iPhone|iPod)/g),
        r = function() {
            var n = function() {
                var n, i = document.createElement("fake"),
                    t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        MSTransition: "msTransitionEnd",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (n in t)
                    if (i.style[n] !== undefined) return t[n]
            }();
            return n && {
                end: n
            }
        }();
    return {
        init: function() {
            window.console || (console = {
                log: function() {}
            }), c(), a()
        },
        showOverlay: e,
        registerOrientationMethods: s,
        transitionSupport: r,
        getWindowHeight: u,
        equalizeHeights: d,
        isTouchDevice: n,
        iOSDevices: ["iPad", "iPhone"]
    }
}(), $(PARALLAX.init)