var templateUrl = wp_theme_root_path.templateUrl,
	theme = function (a, b, c) {
	    "use strict";

	    function f(b) {
	        b = void 0 === b ? a : b, e.documentReady.forEach(function (a) {
	            a(b)
	        })
	    }
	    function g(b) {
	        b = "object" == typeof b ? a : b, e.pageLoaded.forEach(function (a) {
	            a(b)
	        })
	    }
	    var d = {},
			e = {
			    documentReady: [],
			    pageLoaded: []
			};
	    return a("body").waitForImages(g), a(c).ready(f), d.setContext = function (b) {
	        var c = a;
	        return void 0 !== b ?
			function (c) {
			    return a(b).find(c)
			} : c
	    }, d.components = e, d.documentReady = f, d.pageLoaded = g, d
	} (jQuery, window, document);
theme = function (a, b, c, d) {
    "use strict";
    var e = function () {
        function a() {
            b(".header-inner.auto-height").css("height", b(".header-area").outerHeight() + "px")
        }
        a(), b(c).on("resize", function () {
            a()
        })
    };
    return a.header = {
        pageLoaded: e
    }, a.components.pageLoaded.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function () {
        b(".loader").delay(1500).fadeOut(), setTimeout(function () {
            b(".svg-logo").addClass("active"), b(".tech-line-1").addClass("line-show"), b("html").css("overflow-y", "auto")
        }, 1500), setTimeout(function () { }, 2300)
    };
    return a.loader = {
        pageLoaded: e
    }, a.components.pageLoaded.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function () {
        function g() {
            var a = b(c).scrollTop();
            b('[data-section="true"]').each(function () {
                var c = b(this).attr("id");
                a > b(this).offset().top - 20 && (b(".menu-main li.active").removeClass("active"), b('.menu-main li a[data-go-href^="#' + c + '"]').parent().addClass("active"))
            }), b(".header-area").hasClass("fixed") ? b('a[data-go-href^="#"]').on("click", function (a) {
                a.preventDefault();
                var c = b(this),
						d = c.data("go-href"),
						e = b(d).data("parallax-top"),
						f = 0;
                void 0 !== e && (f = e), b(d).length && b("html, body").stop().animate({
                    scrollTop: b(d).offset().top + f
                }, 1e3)
            }) : (e > 768 && b('a[data-go-href^="#"]').off("click"), b(".menu-wrapper a").on("click", function (a) {
                a.preventDefault(), b("html, body").stop().animate({
                    scrollTop: f
                }, 1e3)
            }))
        }
        var a = b(c),
				e = a.width(),
				f = a.height();
        b(d).UItoTop({
            easingType: "easeOutQuart",
            scrollSpeed: 500
        }), g(), b(c).on("scroll", function () {
            g()
        })
    };
    return a.scrolltop = {
        pageLoaded: e
    }, a.components.pageLoaded.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function () {
        function f() {
            b(".parallax").each(function () {
                var c = b(this),
						d = c.data("parallax"),
						e = c.data("height"),
						f = c.data("width"),
						g = c.data("image-src"),
						h = c.data("skew"),
						i = c.data("speed");
                if (void 0 === d && (d = "fixed"), void 0 !== f && c.css({
                    width: f
                }), void 0 !== e && (c.addClass("cover"), c.css({
                    height: e
                }), c.find(".parallax-img").css({
                    "max-height": e
                })), void 0 === i && (i = 0), c.hasClass("height-10") || c.hasClass("height-20") || c.hasClass("height-30") || c.hasClass("height-40") || c.hasClass("height-50") || c.hasClass("height-60") || c.hasClass("height-70") || c.hasClass("height-80") || c.hasClass("height-90") || c.hasClass("height-100")) {
                    var j = c.height();
                    c.css({
                        height: j + "px"
                    }), c.find(".parallax-img").css({
                        "max-height": j + "px"
                    })
                }
                void 0 !== g && c.css({
                    background: "url(" + g + ") 50% 0 no-repeat " + d
                }), void 0 !== h && c.css({
                    "-ms-transform": "skew(0deg, " + h + "deg)",
                    "-webkit-transform": "skew(0deg, " + h + "deg)",
                    transform: "skew(0deg, " + h + "deg)"
                }), c.bgParallax("50%", i), a.on("scroll", function () {
                    var b = a.scrollTop();
                    c.find(".parallax-element").css("margin-top", b * i + "px")
                })
            })
        }
        var a = b(c);
        a.width(), a.height();
        f(), a.on("resize", function () {
            f()
        })
    };
    return a.parallax = {
        pageLoaded: e
    }, a.components.pageLoaded.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".overlay-bg").each(function () {
            var b = a(this).data("overlay-bg"),
					c = a(this).data("overlay-opacity");
            void 0 !== b && (void 0 === c && a(this).attr("data-overlay-opacity", 1), a(this).animate({
                opacity: a(this).data("overlay-opacity")
            }, 0), a(this).css({
                "background-color": a(this).data("overlay-bg")
            }))
        })
    };
    return a.overlay = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        c.sr = new scrollReveal({
            reset: !1,
            delay: "always",
            vFactor: .1,
            mobile: !1
        })
    };
    return a.scrollReveal = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function () {
        function h() {
            b(".sidr-class-menu-main > li").each(function () {
                b(this).find("ul").length > 0 && (b(this).find(".sidr-nav-arrow").length < 1 && b(this).prepend('<em class="sidr-nav-arrow">+</em>'), b(this).find("ul ul").addClass("sidr-class-sub-sub"), b(this).find(" > a").attr("href", "javascript:void(0)"))
            })
        }
        var a = b(c),
				d = a.width(),
				e = a.height();
        b("ul.menu-main li").on("mouseenter", function () {
            b(this).find(" > ul.sub-menu").show()
        }).on("mouseleave", function () {
            b(this).find(" > ul.sub-menu").hide()
        }), b("ul.menu-main li").find("ul").each(function () {
            b(this).parent("li:first").prepend('<span class="nav-arrow"></span>')
        }), 0 == b(".brand img").length && b(".mobile-brand").html('<img src=" ' + templateUrl + '/assets/images/blank.gif" alt="">');
        var f = b(".menu-toggle"),
				g = b("body");
        f.sidr({
            name: "sidr-left",
            side: "left",
            source: ".menu-wrapper",
            body: g,
            onOpen: function (a) {
                f.addClass("open"), b('a[data-go-href^="#"]').on("click", function (a) {
                    a.preventDefault();
                    var c = b(this),
							d = c.data("go-href"),
							e = b(d).data("parallax-top"),
							f = 0;
                    void 0 !== e && (f = e), b(d).length && b("html, body").stop().animate({
                        scrollTop: b(d).offset().top + f
                    }, 1e3)
                })
            },
            onClose: function () {
                f.removeClass("open")
            }
        }), b(".sidr li").on("click", function () {
            var a = b(this).find(".sidr-nav-arrow").text().replace(/(.).*\1/g, "$1");
            b(this).find("> .sidr-class-sub-menu:not(.sidr-class-sub-sub)").toggle(), "-" != a ? b(this).find(".sidr-nav-arrow").text("-") : b(this).find(".sidr-nav-arrow").text("+")
        }), a.on("resize", function () {
            d = a.width(), b.sidr("close", "sidr-left"), b(".menu-toggle").removeClass("open"), d <= 768 && h()
        }), d <= 768 && h();
        var i = 0;
        a.on("scroll", function () {
            b("body").hasClass("sub-page") || (a.scrollTop() > e - 5 ? b(".header-area").addClass("fixed") : b(".header-area").removeClass("fixed"));
            var c = b(this).scrollTop();
            Math.abs(i - c) >= 5 && (i = c)
        }), b("a").each(function () {
            var a = b(this).attr("href");
            void 0 !== a && !1 !== a && (b(this).attr("href").indexOf("/#") >= 0 || "#" == b(this).attr("href")) && b(this).attr("data-normal", 1)
        })
    };
    return a.navigation = {
        pageLoaded: e
    }, a.components.pageLoaded.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".portfolio-container").each(function () {
            var b = a(this).data("show-type");
            b.indexOf("masonry") >= 0 && (a(this).addClass("masonry-container"), a(this).find(".portfolio-item").addClass("masonry-item")), b.indexOf("filter") >= 0 && (a(this).addClass("filter-container"), a(this).find(".portfolio-item").addClass("filter-item"))
        });
        var b = a(".masonry-container .portfolio-tiles");
        imagesLoaded(b).on("always", function () {
            b.masonry({
                itemSelector: ".masonry-item"
            })
        }), a("[data-show-type]").length > 0 && (a("[data-show-type]").data("show-type").indexOf("filter") >= 0 ? a(".portfolio-container").each(function () {
            var b = a(this).data("filter-id"),
					c = a(this).find(".portfolio-tiles"),
					d = a(b);
            imagesLoaded(c).on("always", function () {
                c.shuffle({
                    itemSelector: ".filter-item",
                    speed: 550,
                    easing: "ease-out",
                    sizer: null
                }), d.find("li > a").on("click", function () {
                    var b = a(this),
							e = "current-cat",
							f = b.hasClass(e),
							g = f ? "all" : b.data("group");
                    return f || d.find("." + e).removeClass(e), b.toggleClass(e), c.shuffle("shuffle", g), !1
                })
            })
        }) : a('[data-group="all"]').parent("li").hide())
    };
    return a.gridList = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function () {
        function a(a) { }
        b(".custom-theme-flexslider:not(.custom-primary-flexslider):not(.custom-controls)").each(function (c) {
            var d = b(this),
					e = d.data("speed"),
					f = d.data("timing"),
					g = d.data("loop"),
					h = d.data("prev"),
					i = d.data("next"),
					j = d.data("animation"),
					k = d.data("paging"),
					l = d.data("arrows");
            void 0 === e && (e = 600), void 0 === f && (f = 1e4), void 0 === g && (g = !0), void 0 === h && (h = "<i class='fa fa-chevron-left'></i>"), void 0 === i && (i = "<i class='fa fa-chevron-right'></i>"), void 0 === j && (j = "slide"), void 0 === k && (k = !0), void 0 === l && (l = !0), d.flexslider({
                namespace: "custom-theme-flex-",
                animation: j,
                selector: ".custom-theme-slides > div.item",
                controlNav: k,
                smoothHeight: !0,
                prevText: h,
                nextText: i,
                animationSpeed: e,
                slideshowSpeed: f,
                slideshow: !0,
                animationLoop: g,
                directionNav: l,
                start: a,
                before: a
            })
        }), b(".custom-theme-flexslider.custom-controls").each(function (c) {
            var d = b(this),
					e = d.data("speed"),
					f = d.data("timing"),
					g = d.data("loop"),
					h = d.data("prev"),
					i = d.data("next"),
					j = d.data("animation"),
					k = d.data("paging"),
					l = d.data("arrows");
            void 0 === e && (e = 600), void 0 === f && (f = 1e4), void 0 === g && (g = !0), void 0 === h && (h = "<i class='fa fa-chevron-left'></i>"), void 0 === i && (i = "<i class='fa fa-chevron-right'></i>"), void 0 === j && (j = "slide"), void 0 === k && (k = !0), void 0 === l && (l = !0), d.flexslider({
                namespace: "custom-theme-flex-",
                animation: j,
                selector: ".custom-theme-slides > div.item",
                controlNav: k,
                smoothHeight: !0,
                prevText: h,
                nextText: i,
                animationSpeed: e,
                slideshowSpeed: f,
                slideshow: !0,
                animationLoop: g,
                directionNav: l,
                start: a,
                before: a,
                controlsContainer: b(".custom-controls-container"),
                customDirectionNav: b(".custom-navigation a")
            })
        }), b(".custom-primary-flexslider").flexslider({
            namespace: "custom-theme-flex-",
            animation: "slide",
            selector: ".custom-theme-slides > div.item",
            controlNav: !0,
            smoothHeight: !0,
            prevText: "<i class='fa fa-chevron-left custom-primary-flexslider-prev'></i>",
            nextText: "<i class='fa fa-chevron-right custom-primary-flexslider-next'></i>",
            animationSpeed: 600,
            slideshowSpeed: 1e4,
            slideshow: !0,
            animationLoop: !0
        }), b(".custom-controls-container-certificate-text .custom-theme-flex-control-nav li").each(function (a) {
            var c = a;
            b(this).on("click", function (a) {
                b(".certificate-text .custom-theme-flex-control-paging li:eq(" + c + ") a").trigger("click")
            })
        })
    };
    return a.flexSlider = {
        pageLoaded: e
    }, a.components.pageLoaded.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".float-label").each(function () {
            var b = a(this);
            b.focus(function () {
                b.next().addClass("active")
            }), b.blur(function () {
                "" !== b.val() && "blank" !== b.val() || b.next().removeClass()
            }), "" != b.val() && "blank" != b.val() && b.next().addClass("active")
        }), a(".wp-search-submit").on("click", function () {
            a(this).parent().parent("form").submit()
        })
    };
    return a.forms = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a("#main-section").videoBG({
            mp4: templateUrl + "/assets/video/bg.mp4",
            ogv: templateUrl + "/assets/video/bg.ogv",
            webm: templateUrl + "/assets/video/bg.webm",
            poster: templateUrl + "/assets/video/bg.jpg",
            scale: !0,
            position: "relative",
            zIndex: 1
        })
    };
    return a.videoBG = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        var b = !1,
				d = "undefined" == typeof exports ? c : exports;
        (d.devicePixelRatio > 1 || d.matchMedia && d.matchMedia("(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)").matches) && (b = !0), b && a("[data-retina]").each(function () {
            a(this).attr({
                src: a(this).data("retina")
            })
        })
    };
    return a.retina = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".tech-line .line").each(function () {
            var b = a(this).data("rotate"),
					c = a(this).data("height"),
					d = a(this).data("left"),
					e = a(this).data("top"),
					f = a(this).data("width");
            a(this).css({
                "-ms-transform": "rotate(" + b + "deg)",
                "-webkit-transform": "rotate(" + b + "deg)",
                transform: "rotate(" + b + "deg)",
                height: c + "px",
                "margin-left": d + "px",
                "margin-top": e + "px"
            }), void 0 !== f && a(this).css({
                width: f + "px"
            })
        }), a(".tech-line").each(function () {
            var b = a(this).data("rotate"),
					c = a(this).data("left"),
					d = a(this).data("top");
            a(this).css({
                "-ms-transform": "rotate(" + b + "deg)",
                "-webkit-transform": "rotate(" + b + "deg)",
                transform: "rotate(" + b + "deg)",
                "margin-left": c + "px",
                "margin-top": d + "px"
            })
        }), a(".dot").each(function () {
            var b = a(this).data("left"),
					c = a(this).data("top");
            void 0 !== b && a(this).css({
                "margin-left": b + "px"
            }), void 0 !== c && a(this).css({
                "margin-top": c + "px"
            })
        }), a(".tech-line-10").css("left", "0")
    };
    return a.line = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".ripple-eff").on("click", function (b) {
            var c = a(this).data("effect"),
					d = "";
            void 0 !== c && (d = c), a(".ripple" + d).remove();
            var e = a(this).offset().left,
					f = a(this).offset().top,
					g = a(this).width(),
					h = a(this).height();
            a(this).prepend("<span class='ripple" + d + "'></span>"), g >= h ? h = g : g = h;
            var i = b.pageX - e - g / 2,
					j = b.pageY - f - h / 2;
            a(".ripple" + d).css({
                width: g,
                height: h,
                top: j + "px",
                left: i + "px"
            }).addClass("rippleEffect" + d)
        }), a("#section-features-list:not(.none-eff) .transition").on("mouseenter", function (b) {
            var c = a(this).data("effect"),
					d = "";
            void 0 !== c && (d = c), a(".ripple" + d).remove();
            var e = a(this).offset().left,
					f = a(this).offset().top,
					g = a(this).width(),
					h = a(this).height();
            a(this).prepend("<span class='ripple" + d + "'></span>"), g >= h ? h = g : g = h;
            var i = b.pageX - e - g / 2,
					j = b.pageY - f - h / 2;
            a(".ripple" + d).css({
                width: g,
                height: h,
                top: j + "px",
                left: i + "px"
            }).addClass("rippleEffect" + d)
        }).on("mouseleave", function (a) { })
    };
    return a.button = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        function b(b) {
            var c, d, e, g;
            if (c = a(b), 0 === c.length) return !1;
            c = a(c[0]);
            var h = c.css("transition-duration");
            return void 0 === h && (h = "0.5s"), d = h.toLowerCase(), e = d.indexOf("ms") >= 0, g = d.replace("ms", "").replace("s", ""), e ? g : 1e3 * g
        }
        a("body").prepend('<div class="modal-mask"></div>'), a("[data-modal-id]").on("click", function () {
            var c = a(this).data("modal-id"),
					d = a(this).data("modal-height"),
					e = a(this).data("modal-width"),
					f = a(".modal-box#" + c);
            a(this).attr("href", "javascript:void(0)"), f.find(".content").css("overflow-y", "hidden"), f.length > 0 && (void 0 !== d && "" != d && f.css({
                height: d
            }), void 0 !== e && "" != e && f.css({
                width: e,
                left: "calc( (100% - " + e + ")/2 )"
            }), a(".modal-mask").fadeIn("fast"), f.addClass("active")), f.hasClass("fullscreen") && setTimeout(function () {
                a("html").css("overflow-y", "hidden"), f.find(".content").css("overflow-y", "scroll")
            }, b(".modal-box#" + c))
        }), a(".modal-box .close-btn").on("click", function () {
            a(this).parent().removeClass("active")
        }), a(".modal-box .close-btn, .modal-mask").on("click", function () {
            a(".modal-box").removeClass("active"), a(".modal-mask").fadeOut("fast"), a(".modal-box").find(".content").css("overflow-y", "hidden"), a("html").css("overflow-y", "auto"), setTimeout(function () { }, b(".modal-box:first"))
        })
    };
    return a.modalbox = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a("#section-products a").each(function () {
            var b = a(this),
					c = b.data("src"),
					d = b.data("manual");
            void 0 !== c && b.attr("href", templateUrl + "/product-" + c + ".html"), void 0 !== d && b.attr("href", templateUrl + "/product-" + d)
        })
    };
    return a.products = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".tabs").each(function (b) {
            var c = a(this),
					d = c.find(".nav li"),
					e = d.length,
					f = c.find(".content"),
					g = c.data("fullwidth"),
					h = b;
            void 0 !== g && 1 == g && d.css("width", 100 / e + "%"), a(d).each(function (b) {
                b += 1, a(this).attr("href", "javascript:"), a(this).attr("data-tab", h + "-tabs-show" + b)
            }), a(f).each(function (b) {
                b += 1, a(this).attr("id", h + "-tabs-show" + b)
            }), c.on("click", "li", function (b) {
                var d = a(this).attr("data-tab");
                c.find("li").removeClass("active"), c.find(".content").removeClass("active"), a(this).addClass("active"), a("#" + d).addClass("active")
            })
        })
    };
    return a.tabs = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a(".honeycombs").honeycombs({
            combWidth: 112,
            margin: 15
        })
    };
    return a.clients = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        var b = new ScrollMagic.Controller,
				c = a(d.body).height(),
				e = a(d.body).width();
        if (e > 768 && Modernizr.cssanimations) {
            a("#section-features-title").css({
                top: "115px"
            });
            var f = TweenMax.to("#section-features-title", .5, {
                top: 0
            });
            new ScrollMagic.Scene({
                offset: -a("#section-features").height() / 2,
                triggerElement: "#section-features",
                duration: a("#section-features").height()
            }).setTween(f).addTo(b);
            a("#section-features-list").css({
                "margin-top": "115px"
            });
            var h = TweenMax.to("#section-features-list", .5, {
                marginTop: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#section-features",
                duration: a("#section-features").height() / 2
            }).setTween(h).addTo(b);
            a(".tech-line-2").css({
                height: "0"
            });
            var j = TweenMax.to(".tech-line-2", .5, {
                height: 218
            });
            new ScrollMagic.Scene({
                offset: 0,
                duration: c
            }).setTween(j).addTo(b);
            a(".tech-line-3").css({
                height: "0"
            });
            var l = TweenMax.to(".tech-line-3", .5, {
                height: 275
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#section-property-title",
                duration: c / 2
            }).setTween(l).addTo(b);
            a("#section-property-table").css({
                "margin-right": 0
            });
            var n = TweenMax.to("#section-property-table", .5, {
                marginRight: (e - 650) / 2 + "px"
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#section-property-title",
                duration: 500
            }).setTween(n).addTo(b);
            a(".tech-line-5").css({
                height: "0"
            });
            var p = TweenMax.to(".tech-line-5", .5, {
                height: 2150
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#section-app-title",
                duration: 2 * a("#section-app").height()
            }).setTween(p).addTo(b);
            a(".tech-line-5_2").css({
                height: "0"
            });
            var r = TweenMax.to(".tech-line-5_2", .5, {
                height: 150
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#applist-show-7",
                duration: 200
            }).setTween(r).addTo(b);
            a("#applist-show-1").css({
                left: -e / 2 + "px"
            });
            var t = TweenMax.to("#applist-show-1", .5, {
                left: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".tech-line-4",
                duration: 500
            }).setTween(t).addTo(b);
            a("#applist-show-2").css({
                right: -e / 2 + "px"
            });
            var v = TweenMax.to("#applist-show-2", .5, {
                right: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".tech-line-4",
                duration: 550
            }).setTween(v).addTo(b);
            a("#applist-show-3").css({
                left: -e / 2 + "px"
            });
            var x = TweenMax.to("#applist-show-3", .5, {
                left: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".tech-line-4",
                duration: 580
            }).setTween(x).addTo(b);
            a("#applist-show-4").css({
                right: -e / 2 + "px"
            });
            var z = TweenMax.to("#applist-show-4", .5, {
                right: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".tech-line-4",
                duration: 620
            }).setTween(z).addTo(b);
            a("#applist-show-5").css({
                left: -e / 2 + "px"
            });
            var B = TweenMax.to("#applist-show-5", .5, {
                left: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".tech-line-4",
                duration: 660
            }).setTween(B).addTo(b);
            a("#applist-show-6").css({
                right: -e / 2 + "px"
            });
            var D = TweenMax.to("#applist-show-6", .5, {
                right: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".tech-line-4",
                duration: 700
            }).setTween(D).addTo(b);
            a("#applist-show-7").css({
                left: -e / 2 + "px"
            });
            var F = TweenMax.to("#applist-show-7", .5, {
                left: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: ".tech-line-4",
                duration: 720
            }).setTween(F).addTo(b);
            a(".tech-line-6").css({
                height: "0"
            });
            var H = TweenMax.to(".tech-line-6", .5, {
                height: 165
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#section-products-title",
                duration: 350
            }).setTween(H).addTo(b);
            a(".tech-line-7").css({
                height: "0"
            });
            var J = TweenMax.to(".tech-line-7", .5, {
                height: 165
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#secondary-grid-trigger",
                duration: 350
            }).setTween(J).addTo(b);
            a(".section-title-little, .coming").css({
                opacity: "0"
            });
            var L = TweenMax.to(".section-title-little, .coming", .5, {
                autoAlpha: 1
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#secondary-grid-trigger",
                duration: 350
            }).setTween(L).addTo(b);
            a("#section-certificates").css({
                "margin-top": "215px"
            });
            var N = TweenMax.to("#section-certificates", .5, {
                marginTop: 0
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#section-awards",
                duration: a("#section-awards").height() / 2
            }).setTween(N).addTo(b);
            a(".tech-line-8").css({
                height: "0"
            });
            var P = TweenMax.to(".tech-line-8", .5, {
                height: 265
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#section-clients",
                duration: 350
            }).setTween(P).addTo(b);
            a(".tech-line-9").css({
                height: "0"
            });
            var R = TweenMax.to(".tech-line-9", .5, {
                height: 265
            });
            new ScrollMagic.Scene({
                offset: 0,
                triggerElement: "#section-clients-list",
                duration: a("#section-clients-list").height()
            }).setTween(R).addTo(b)
        }
    };
    return a.scenes = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function (a) {
        a("#section-features-list .col-md-2").on("mouseenter", function () {
            var b = "?" + (new Date).getTime() + "a" + Math.random();
            a(this).find(" span img").attr("src", a(this).find(" span img").attr("src") + b), a(this).find(" img").hide(), a(this).find(" span").show(), a(this).find(" span img").show()
        }).on("mouseleave", function () {
            a(this).find(" img").show(), a(this).find(" span").hide(), a(this).find(" span img").hide()
        })
    };
    return a.icons = {
        documentReady: e
    }, a.components.documentReady.push(e), a
} (theme, jQuery, window, document), theme = function (a, b, c, d) {
    "use strict";
    var e = function () { };
    return a.SmoothScroll = {
        pageLoaded: e
    }, a.components.pageLoaded.push(e), a
} (theme, jQuery, window, document);