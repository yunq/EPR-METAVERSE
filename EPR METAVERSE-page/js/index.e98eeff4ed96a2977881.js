!function(t) {
    var i = {};
    function n(e) {
        if (i[e])
            return i[e].exports;
        var o = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    n.m = t,
    n.c = i,
    n.d = function(t, i, e) {
        n.o(t, i) || Object.defineProperty(t, i, {
            enumerable: !0,
            get: e
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, i) {
        if (1 & i && (t = n(t)),
        8 & i)
            return t;
        if (4 & i && "object" == typeof t && t && t.__esModule)
            return t;
        var e = Object.create(null);
        if (n.r(e),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }),
        2 & i && "string" != typeof t)
            for (var o in t)
                n.d(e, o, function(i) {
                    return t[i]
                }
                .bind(null, o));
        return e
    }
    ,
    n.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(i, "a", i),
        i
    }
    ,
    n.o = function(t, i) {
        return Object.prototype.hasOwnProperty.call(t, i)
    }
    ,
    n.p = "/assets/",
    n(n.s = 362)
}({
    362: function(t, i, n) {
        "use strict";
        n.r(i);
        var e = function() {
            return window.innerWidth <= 768
        }
          , o = function() {
            return window.innerWidth <= 1023
        }
          , s = (/iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream,
        window.$);
        var a = function() {
            function t(t, i) {
                for (var n = 0; n < i.length; n++) {
                    var e = i[n];
                    e.enumerable = e.enumerable || !1,
                    e.configurable = !0,
                    "value"in e && (e.writable = !0),
                    Object.defineProperty(t, e.key, e)
                }
            }
            return function(i, n, e) {
                return n && t(i.prototype, n),
                e && t(i, e),
                i
            }
        }();
        function r(t, i) {
            if (!(t instanceof i))
                throw new TypeError("Cannot call a class as a function")
        }
        var c = window
          , l = c.$
          , h = c.tns
          , d = function() {
            function t(i, n) {
                var e = this;
                r(this, t),
                this.handleClick = function(t) {
                    var i = e.selectors.index(t.target);
                    if (i !== e.highlight) {
                        var n = l(t.target).children("img");
                        e.selectors.eq(e.highlight).removeClass("highlight"),
                        e.target.eq(e.highlight).removeClass("active"),
                        l(t.target).addClass("highlight"),
                        e.highlight = i;
                        var o = e.target.eq(i).children("img");
                        o.onload = function() {
                            e.cb && e.cb(e.highlight)
                        }
                        ,
                        e.target.eq(i).addClass("active"),
                        o.attr("src", n.attr("src"))
                    }
                }
                ,
                this.el = l(i),
                this.cb = n,
                this.selectors = this.el.find(".image-gallery-selector > div"),
                this.target = this.el.find(".image-gallery-current > div"),
                this.highlight = 0;
                for (var o = 0; o < this.selectors.length; o++)
                    if (this.selectors.eq(o).hasClass("highlight")) {
                        this.highlight = o;
                        break
                    }
            }
            return a(t, [{
                key: "init",
                value: function() {
                    e() ? this.selectors.css("cursor", "default") : this.selectors.on("click", this.handleClick)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.selectors.off("click", this.handleClick)
                }
            }]),
            t
        }()
          , u = function t(i) {
            var n = this;
            r(this, t),
            this.init = function() {
                n.el.removeClass("hidden"),
                n.items.length <= 1 ? n.el.css("padding", "0 32px") : (n.slider = h({
                    container: n.el[0],
                    items: 1,
                    slideBy: "page",
                    controls: !1,
                    nav: !1,
                    speed: 300,
                    gutter: 16,
                    swipeAngle: 30,
                    edgePadding: 24,
                    loop: !1
                }),
                n.slider.events.on("indexChanged", n.handleChange))
            }
            ,
            this.handleChange = function(t) {
                t.index !== t.indexCached && (l(t.slideItems[t.index]).addClass("active"),
                l(t.slideItems[t.indexCached]).removeClass("active"))
            }
            ,
            this.el = l(i),
            this.el.length && (this.items = this.el.children("div"))
        }
          , m = window
          , g = m.$
          , f = m.tns;
        (function() {
            var t = g(".mobile-nav-toggle")
              , i = g(".mobile-nav-list-container");
            t.length && (t.click((function(n) {
                t.hasClass("open") ? (t.removeClass("open"),
                i.removeClass("open"),
                g("body").css("overflow", "auto")) : (t.addClass("open"),
                i.addClass("open"),
                g("body").css("overflow", "hidden"))
            }
            )),
            i.delegate(".mobile-nav-list-mask", "click", (function() {
                t.removeClass("open"),
                i.removeClass("open"),
                g("body").css("overflow", "auto")
            }
            )))
        }
        )();
        var v = {
            items: null,
            init: function() {
                this.items = g(".mobile-nav-list-item.has-children"),
                this.items.length && this.items.each((function(t, i) {
                    g(i).delegate(".mobile-nav-list-item-header", "click", (function() {
                        g(i).toggleClass("open")
                    }
                    ))
                }
                ))
            }
        }
          , p = {
            items: null,
            init: function() {
                this.items = g(".mobile-nav-list-item-footer.has-children"),
                this.items.length && this.items.each((function(t, i) {
                    g(i).delegate(".mobile-nav-list-item-header-footer", "click", (function() {
                        g(i).toggleClass("open")
                    }
                    ))
                }
                ))
            }
        }
          , b = {
            items: null,
            charts: null,
            highlight: 0,
            init: function() {
                var t = this;
                if (this.items = g(".techs-list-item"),
                this.charts = g(".techs-detail-list-item"),
                this.items.length) {
                    var i = this;
                    this.highlight = 0,
                    this.items.each((function(n, e) {
                        var o = g(e);
                        o.click((function(e) {
                            var s = n;
                            s !== i.highlight && (t.charts.eq(i.highlight).removeClass("highlight"),
                            i.items.eq(i.highlight).removeClass("highlight"),
                            o.addClass("highlight"),
                            i.highlight = s,
                            t.charts.eq(i.highlight).addClass("highlight"))
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , y = {
            items: null,
            init: function() {
                if (this.items = g(".techs-list-item-m"),
                this.items.length) {
                    this.items.each((function(t, i) {
                        var n = g(i);
                        n.click((function(t) {
                            n.hasClass("highlight") ? n.removeClass("highlight") : n.addClass("highlight")
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , w = {
            items: null,
            init: function() {
                if (this.items = g(".home-section-solution-list-item-m"),
                this.items.length) {
                    this.items.each((function(t, i) {
                        var n = g(i);
                        n.find(".home-section-solution-list-item-m-header").click((function(t) {
                            n.hasClass("highlight") ? n.removeClass("highlight") : n.addClass("highlight")
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , C = {
            items: null,
            subItems: null,
            detail: null,
            highlight: 0,
            init: function() {
                var t = this;
                if (this.items = g(".home-section-solution-cate-list-item"),
                this.subItems = g(".home-section-solution-product-list"),
                this.detail = g(".home-section-solution-product-detail"),
                this.detailLeft = this.detail.find(".home-section-solution-product-detail-left"),
                this.detailRight = this.detail.find(".home-section-solution-product-detail-right"),
                this.cover = g(".home-section-solution-desk-bg"),
                this.items.length && this.subItems.length) {
                    var i = this;
                    this.subItems.each((function(i, n) {
                        var e = g(n)
                          , o = g(e).find(".home-section-solution-product-list-item");
                        g(e).click((function(i) {
                            if ("home-section-solution-product-list-item" === i.target.id) {
                                var n = g(i.target);
                                o.each((function(t, i) {
                                    g(i).removeClass("highlight")
                                }
                                ));
                                var e = n.data("first")
                                  , s = n.data("index")
                                  , a = solutionData[e].children[s];
                                n.addClass("highlight");
                                for (var r = "", c = 0; c < a.cases.length; c++)
                                    r += '<div class="product-cases-list-item">' + a.cases[c] + "</div>";
                                t.detail.removeClass("normal"),
                                t.detailLeft.html("\n                <p>" + a.des + '</p>\n                <div>\n                  <div class="small-split-line ' + (r ? "" : "white") + '">\n                  </div><div class="product-cases">\n                  <div class="product-cases-title ' + (r ? "" : "no-cases") + '">客户案例</div>\n                  <div class="product-cases-list">\n                    ' + r + "\n                  </div><a href=" + a.link + ' class="detail-button">了解方案详情</a></div>\n                </div>\n            ');
                                var l = new Image;
                                l.src = a.coverPath,
                                l.onload = function() {
                                    t.cover.css("background-image", "url(" + a.coverPath + ")"),
                                    t.detailRight.css("background-image", "url(" + a.coverPath + ")"),
                                    t.detail.addClass("normal")
                                }
                            }
                        }
                        ))
                    }
                    )),
                    this.items.each((function(n, e) {
                        var o = g(e);
                        o.click((function(e) {
                            var s = n;
                            s !== i.highlight && (i.items.eq(i.highlight).removeClass("highlight"),
                            t.subItems.eq(i.highlight).removeClass("highlight"),
                            o.addClass("highlight"),
                            t.subItems.eq(s).addClass("highlight"),
                            g(t.subItems.get(n)).find(".home-section-solution-product-list-item").get(0).click(),
                            i.highlight = s)
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , k = {
            highlight: 0,
            init: function() {
                var t = g(".home-section-users-cate-list")
                  , i = g(".home-users-parent");
                if (t.length) {
                    f({
                        container: i[0],
                        items: 1,
                        slideBy: "page",
                        preventScrollOnTouch: "auto",
                        controls: !1,
                        nav: !0,
                        navContainer: t[0],
                        speed: 300,
                        loop: !1
                    }).events.on("indexChanged", (function(t) {
                        var i = g(t.navItems[t.index]).text()
                          , n = g(t.slideItems[t.index]);
                        n.children().length || g.get("/logo/" + i, (function(t) {
                            for (var i = "", e = 0; e < t.length; e++) {
                                var o = t[e];
                                i += '<div class="home-user"> \n                  <img src=' + o.logo.imagePath + " alt=合作客户-" + o.logo.name + " title=合作客户-" + o.logo.name + " class='pure-img'/> \n               </div>"
                            }
                            n.html(i)
                        }
                        ))
                    }
                    ));
                    var n = this;
                    t.each((function(i, e) {
                        var o = g(e);
                        o.click((function(e) {
                            var s = i;
                            if (s !== n.highlight) {
                                t.eq(n.highlight).removeClass("highlight"),
                                o.addClass("highlight"),
                                n.highlight = s;
                                o.text()
                            }
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , x = function() {
            var t = g(".home-users-parent-en-controls")
              , i = g(".home-users-parent-en");
            if (t.length)
                f({
                    container: i[0],
                    items: 1,
                    slideBy: "page",
                    preventScrollOnTouch: "auto",
                    controls: !1,
                    nav: !0,
                    navContainer: t[0],
                    speed: 300,
                    loop: !0,
                    autoplay: !0,
                    autoplayButtonOutput: !1,
                    autoplayTimeout: 3e3
                })
        }
          , E = {
            container: null,
            step: 0,
            init: function() {
                this.container = g(".home-tech-three-cards"),
                this.animate()
            },
            animate: function() {
                var t = this;
                5 !== this.step && this.container && this.container.length && (this.container.isOnScreen(150) && 0 === this.step && (this.step = 1,
                g(".home-tech-three-cards .line-level-1.left > .diamond").addClass("animation"),
                g(".home-tech-three-cards .line-level-1.right > .diamond").addClass("animation"),
                setTimeout((function() {
                    t.step = 2,
                    t.animate(),
                    g(".home-tech-three-cards .home-tech-card:nth-child(2)").css("opacity", 1),
                    g(".home-tech-three-cards .home-tech-card:nth-child(3)").css("opacity", 1)
                }
                ), 1100)),
                this.container.isOnScreen(450) && 2 === this.step && (this.step = 3,
                g(".home-tech-three-cards .line-level-2.left > .diamond").addClass("animation"),
                g(".home-tech-three-cards .line-level-2.right > .diamond").addClass("animation"),
                g(".home-tech-three-cards .line-level-2-middle > .diamond").addClass("animation"),
                setTimeout((function() {
                    t.step = 4,
                    t.animate(),
                    g(".home-tech-three-cards .platform.gradient-blue-card").css("opacity", 1)
                }
                ), 1100)),
                this.container.isOnScreen(820) && 4 === this.step && (this.step = 5,
                g(".home-tech-three-cards .line-level-3.left > .diamond").addClass("animation"),
                g(".home-tech-three-cards .line-level-3.right > .diamond").addClass("animation"),
                g(".home-tech-three-cards .line-level-3-middle > .diamond").addClass("animation")))
            }
        }
          , S = {
            container: null,
            triggered: !1,
            init: function() {
                this.container = g(".home-users"),
                this.container.length && (this.targets = this.container.find("img"),
                this.container && this.container.isOnScreen() && this.animate())
            },
            animate: function() {
                this.container.length && !this.triggered && this.container.isOnScreen() && (this.triggered = !0,
                this.targets.each((function(t, i) {
                    var n = new Image
                      , e = i.getAttribute("data-src");
                    n.src = e,
                    n.onload = function() {
                        i.src = e
                    }
                }
                )))
            }
        }
          , O = {
            list: null,
            init: function() {
                this.list = g(".home-services-card.with-video"),
                this.list.length && this.list.each((function(t, i) {
                    g(i).on("mouseover", (function() {
                        g(i).find("video")[0].play()
                    }
                    ))
                }
                ))
            }
        }
          , P = {
            containers: null,
            navContainer: null,
            init: function() {
                this.containers = g(".home-services"),
                this.navContainer = g(".home-services-nav"),
                this.containers.length && (this.slider = f({
                    container: this.containers[0],
                    items: 1,
                    edgePadding: 24,
                    slideBy: "page",
                    preventScrollOnTouch: "auto",
                    controls: !1,
                    nav: !0,
                    navContainer: this.navContainer[0],
                    speed: 300,
                    loop: !1
                }))
            }
        }
          , T = {
            containers: null,
            navContainer: null,
            init: function() {
                if (this.containers = g(".banner-info-container > div"),
                this.containers.length)
                    var t = f({
                        container: this.containers[0],
                        mode: "carousel",
                        items: 1,
                        axis: "horizontal",
                        controls: !1,
                        touch: !1,
                        speed: 300,
                        nav: !0,
                        rewind: !0,
                        navPosition: "top",
                        loop: !0,
                        autoplay: !0,
                        autoplayTimeout: 5e3,
                        preventActionWhenRunning: !0,
                        autoplayButtonOutput: !1,
                        onInit: function(i) {
                            document.getElementsByClassName("tns-nav")[0].addEventListener("click", (function() {
                                t.play()
                            }
                            ))
                        }
                    })
            }
        }
          , A = {
            containers: null,
            navContainer: null,
            init: function() {
                this.containers = g(".banner-info-container-mobile > div"),
                this.containers.length && f({
                    container: this.containers[0],
                    mode: "carousel",
                    items: 1,
                    axis: "horizontal",
                    controls: !1,
                    touch: !0,
                    speed: 300,
                    nav: !0,
                    rewind: !0,
                    navPosition: "top",
                    loop: !0,
                    autoplay: !0,
                    autoplayTimeout: 5e3,
                    autoplayButtonOutput: !1
                })
            }
        }
          , B = {
            containers: null,
            navContainer: null,
            init: function() {
                this.containers = g(".banner-info-container-en-item-wraper");
                var t = g(".banner-info-container-en-item-nav");
                if (this.containers.length)
                    f({
                        container: this.containers[0],
                        mode: "carousel",
                        items: 1,
                        controls: !1,
                        speed: 300,
                        navContainer: t[0],
                        loop: !0,
                        preventScrollOnTouch: "auto",
                        autoplay: !0,
                        autoplayTimeout: 5e3,
                        autoplayButtonOutput: !1
                    })
            }
        }
          , I = {
            container: null,
            cards: [],
            index: 0,
            init: function() {
                var t = this;
                this.container = g("div.platform .content .inner"),
                this.cards = g("div.platform .content .card"),
                g("div.platform .arrow.left").css("visibility", "hidden"),
                this.cards.length <= 4 ? g("div.platform .arrow.right").css("visibility", "hidden") : (g("div.platform .arrow.left").on("click", (function() {
                    t.index > 0 && (t.index -= 1,
                    t.container.css("transform", "translateX(" + -240 * t.index + "px)")),
                    g("div.platform .arrow.left").css("visibility", 0 === t.index ? "hidden" : "visible"),
                    g("div.platform .arrow.right").css("visibility", t.index === t.cards.length - 4 ? "hidden" : "visible")
                }
                )),
                g("div.platform .arrow.right").on("click", (function() {
                    t.index < t.cards.length - 4 && (t.index += 1,
                    t.container.css("transform", "translateX(" + -240 * t.index + "px)")),
                    g("div.platform .arrow.left").css("visibility", 0 === t.index ? "hidden" : "visible"),
                    g("div.platform .arrow.right").css("visibility", t.index === t.cards.length - 4 ? "hidden" : "visible")
                }
                )))
            }
        }
          , q = {
            backgroundDivLi: null,
            items: [],
            titleEl: null,
            descEl: null,
            btnEl: null,
            emptyEl: null,
            notEmptyEl: null,
            imgContainer: null,
            counter: 0,
            category: "",
            init: function() {
                var t = this;
                this.backgroundDivList = g(".section-home.industry > img"),
                this.items = g("div.industry .item2"),
                this.titleEl = g("div.industry div.desc > h2"),
                this.descEl = g("div.industry div.desc > .text"),
                this.btnEl = g("div.industry div.desc > .btn"),
                this.emptyEl = g("#emptyCustomer"),
                this.notEmptyEl = g("div.industry div.desc div.customer"),
                this.imgContainer = g("div.industry div.desc .customer > div"),
                this.items.length && this.titleEl && this.descEl && this.btnEl && (this.items.on("click", (function(i) {
                    t.items.removeClass("highlight"),
                    g(i.target).addClass("highlight");
                    var n = i.target.dataset;
                    t.changeBg(n.category),
                    t.category = n.category,
                    t.titleEl.text(n.title || "-"),
                    t.descEl.text(n.desc || "-"),
                    t.btnEl.attr("href", n.link || void 0);
                    var e = n.cases;
                    try {
                        e = JSON.parse(e)
                    } catch (t) {
                        e = []
                    }
                    if (Array.isArray(e) && e.length) {
                        t.imgContainer.empty();
                        for (var o = 0; o < e.length; o++)
                            t.imgContainer.append('<img src="' + e[o].imagePath + '"alt="' + e[o].name + '" />');
                        t.notEmptyEl.show(),
                        t.emptyEl.hide()
                    } else
                        t.notEmptyEl.hide(),
                        t.emptyEl.attr("src", n.emptyIcon),
                        t.emptyEl.show()
                }
                )),
                this.items[0].click())
            },
            changeBg: function(t) {
                if (this.category !== t) {
                    var i = g(this.backgroundDivList[(this.counter + 1) % 2])
                      , n = g(this.backgroundDivList[this.counter % 2]);
                    n.css("background-image", "url(/assets/images/home/industry/" + t + ".jpg);"),
                    n.css("opacity", 1),
                    i.css("opacity", 0),
                    this.counter++
                }
            }
        };
        ({
            containers: null,
            index: 0,
            init: function() {
                var t = this;
                if (this.containers = g(".banner-big-title-en"),
                this.containers.length) {
                    var i = this.containers.find("span.keyword")
                      , n = ["scalable", "credible", "high-performance"];
                    setInterval((function() {
                        i.text(n[t.index]),
                        t.index += 1,
                        t.index === n.length && (t.index = 0)
                    }
                    ), 2e3)
                }
            }
        }).init();
        var L = {
            containers: null,
            init: function() {
                this.containers = g(".home-section-honor-list");
                var t = g(".home-section-honor-list-control")
                  , i = g(".home-section-honor-list-nav");
                this.containers.length && (this.slider = f({
                    container: this.containers[0],
                    items: 1,
                    slideBy: "page",
                    gutter: 32,
                    controls: !1,
                    nav: !0,
                    loop: !0,
                    controlsContainer: t.get(0),
                    navContainer: i.get(0),
                    preventScrollOnTouch: "auto",
                    responsive: {
                        1023: {
                            items: 2,
                            controls: !0,
                            nav: !1
                        },
                        1280: {
                            items: 3,
                            controls: !0,
                            nav: !1
                        }
                    }
                }))
            }
        };
        ({
            containers: null,
            multipleItemPosition: [{
                top: "30px",
                left: "-25px",
                right: "auto",
                bottom: "auto"
            }, {
                top: "65px",
                left: "136px",
                right: "auto",
                bottom: "auto"
            }, {
                top: "30px",
                left: "300px",
                right: "auto",
                bottom: "auto"
            }, {
                top: "auto",
                left: "236px",
                right: "auto",
                bottom: "-25px"
            }, {
                top: "auto",
                left: "138px",
                right: "auto",
                bottom: "-15px"
            }, {
                top: "auto",
                left: "40px",
                right: "auto",
                bottom: "-25px"
            }],
            meteData: {
                top: {
                    positionArrIndex: [0, 1, 2, 3, 5],
                    timer: null,
                    offset: 1
                },
                left: {
                    positionArrIndex: [0, 1, 2, 4],
                    timer: null,
                    offset: 1
                },
                right: {
                    positionArrIndex: [0, 1, 2, 3, 4, 5],
                    timer: null,
                    offset: 1
                },
                bottom: {
                    positionArrIndex: [0, 2],
                    timer: null,
                    offset: 1
                }
            },
            newLottieAnimation: function(t) {
                var i = t.container
                  , n = t.loop
                  , e = void 0 === n || n
                  , o = t.autoplay
                  , s = void 0 === o || o
                  , a = t.path;
                return lottie.loadAnimation({
                    container: i,
                    renderer: "svg",
                    loop: e,
                    autoplay: s,
                    path: a,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid meet"
                    }
                })
            },
            removeHoverAndMove: function(t, i) {
                var n = this;
                t.addClass("slience"),
                this.meteData[i].timer = setTimeout((function() {
                    n.move(t, i)
                }
                ), 1e3)
            },
            resumeHoverAndStop: function(t, i) {
                setTimeout((function() {
                    t.removeClass("slience")
                }
                ), 100),
                clearTimeout(this.meteData[i].timer)
            },
            move: function(t, i) {
                var n = this
                  , e = t.find(".block-children-item")
                  , o = this.meteData[i].positionArrIndex
                  , s = this.meteData[i].offset
                  , a = o.map((function(t) {
                    return n.multipleItemPosition[t]
                }
                ))
                  , r = [];
                e.each((function(t, i) {
                    var n = g(i)
                      , o = (t + s) % a.length
                      , c = a[o];
                    if (n.css(c),
                    n.hasClass("back")) {
                        n.removeClass("back");
                        var l = t - 1;
                        l < 0 && (l = e.length - 1),
                        r.push(l)
                    }
                }
                )),
                r.forEach((function(t) {
                    g(e[t]).addClass("back")
                }
                )),
                this.meteData[i].offset += 1,
                this.meteData[i].timer = setTimeout((function() {
                    n.move(t, i)
                }
                ), 2e3)
            },
            firstPositionItem: function(t, i) {
                var n = this
                  , e = t.find(".block-children-item")
                  , o = this.meteData[i].positionArrIndex.map((function(t) {
                    return n.multipleItemPosition[t]
                }
                ));
                e.each((function(t, i) {
                    var n = g(i)
                      , e = o[t];
                    n.css(e),
                    t > 2 && n.addClass("back")
                }
                ))
            },
            start: function(t) {
                t.playSegments([0, 120], !0)
            },
            stop: function(t) {
                t.setSpeed(1.2),
                t.playSegments([120, 160], !0)
            },
            init: function() {
                var t = this;
                if (this.containers = g(".home-section-animation-wraper"),
                this.containers.length) {
                    var i = document.getElementById("bottom-animation")
                      , n = document.getElementById("top-animation")
                      , e = document.getElementById("left-animation")
                      , o = document.getElementById("right-animation")
                      , s = document.querySelector(".home-section-block-item-circle.bottom")
                      , a = document.querySelector(".home-section-block-item-circle.top")
                      , r = document.querySelector(".home-section-block-item-circle.left")
                      , c = document.querySelector(".home-section-block-item-circle.right")
                      , l = g(".block-children-item-wraper.bottom")
                      , h = g(".block-children-item-wraper.top")
                      , d = g(".block-children-item-wraper.left")
                      , u = g(".block-children-item-wraper.right");
                    this.firstPositionItem(h, "top"),
                    this.firstPositionItem(d, "left"),
                    this.firstPositionItem(u, "right"),
                    this.firstPositionItem(l, "bottom");
                    var m = this.newLottieAnimation({
                        container: i,
                        path: "/assets/json/bottom.json",
                        loop: !1,
                        autoplay: !1
                    })
                      , f = this.newLottieAnimation({
                        container: n,
                        path: "/assets/json/top.json",
                        loop: !1,
                        autoplay: !1
                    })
                      , v = this.newLottieAnimation({
                        container: e,
                        path: "/assets/json/left.json",
                        loop: !1,
                        autoplay: !1
                    })
                      , p = this.newLottieAnimation({
                        container: o,
                        path: "/assets/json/right.json",
                        loop: !1,
                        autoplay: !1
                    });
                    a.addEventListener("mouseenter", (function() {
                        t.start(f),
                        t.removeHoverAndMove(h, "top")
                    }
                    )),
                    s.addEventListener("mouseenter", (function() {
                        t.start(m)
                    }
                    )),
                    r.addEventListener("mouseenter", (function() {
                        t.start(v),
                        t.removeHoverAndMove(d, "left")
                    }
                    )),
                    c.addEventListener("mouseenter", (function() {
                        t.start(p),
                        t.removeHoverAndMove(u, "right")
                    }
                    )),
                    a.addEventListener("mouseleave", (function() {
                        t.stop(f),
                        t.resumeHoverAndStop(h, "top")
                    }
                    )),
                    s.addEventListener("mouseleave", (function() {
                        t.stop(m)
                    }
                    )),
                    r.addEventListener("mouseleave", (function() {
                        t.stop(v),
                        t.resumeHoverAndStop(d, "left")
                    }
                    )),
                    c.addEventListener("mouseleave", (function() {
                        t.stop(p),
                        t.resumeHoverAndStop(u, "right")
                    }
                    ))
                }
            }
        }).init();
        var H = function() {
            g("#pagination").paging({
                pageNum: g("#pagination").data("total"),
                buttonNum: 7,
                nowPage: g("#pagination").data("page"),
                callback: function(t) {
                    var i = function(t) {
                        var i = location.toString().split("?");
                        if (i.length > 1) {
                            for (var n, e = i[1].split("&"), o = 0; o < e.length; o++)
                                if (null != (n = e[o].split("=")) && n[0] == t)
                                    return n[1];
                            return ""
                        }
                        return ""
                    }
                      , n = {
                        isVideo: i("isVideo"),
                        label: i("label"),
                        pageSize: i("pageSize"),
                        sort: i("sort"),
                        keyword: i("keyword")
                    }
                      , e = "";
                    for (var o in n)
                        n[o] && (e += o + "=" + n[o] + "&");
                    e ? e += "page=" + t : e = "page=" + t,
                    window.location.href = "" + location.origin + location.pathname + "?" + e
                }
            })
        };
        e() && (g(".home-introduce-link a").addClass("can-touch"),
        g(".home-news-titlebar a").addClass("can-touch"),
        g(".home-news").addClass("can-touch"));
        var M = {
            containers: null,
            init: function() {
                if (this.containers = g(".banner-bg"),
                this.containers.length) {
                    var t = this.containers.find("video");
                    window.ActiveXObject || "ActiveXObject"in window ? (t.css("display", "none"),
                    this.containers.html("<div class='banner-bg-cover' style='background-image:url(https://upload.hyperchain.cn/%E9%A6%96%E9%A1%B5banner%20121604562210051.png)' ></div>")) : t.one("canplay", (function() {
                        t.css({
                            opacity: 1
                        })
                    }
                    ))
                }
            }
        }
          , j = function() {
            E.init(),
            S.init(),
            H(),
            b.init(),
            C.init(),
            k.init(),
            T.init(),
            A.init(),
            I.init(),
            q.init(),
            O.init(),
            M.init(),
            x(),
            L.init(),
            o() && (y.init(),
            w.init(),
            v.init(),
            p.init()),
            e() && (P.init(),
            B.init())
        }
          , D = function() {
            E.animate(),
            S.animate()
        }
          , $ = window
          , R = $.$
          , _ = $.tns
          , z = {
            container: null,
            init: function() {
                this.container = R(".solution-section-pain-list"),
                this.container.length && (this.container.children().length <= 3 || (this.container.css("display", "block"),
                this.container.each((function(t, i) {
                    var n = R(i).parent()
                      , e = R(n).find(".solution-section-pain-controls");
                    e.css("display", "block"),
                    _({
                        container: i,
                        items: 3,
                        slideBy: "page",
                        nav: !1,
                        speed: 300,
                        loop: !1,
                        controlsContainer: e.get(0)
                    })
                }
                ))))
            }
        }
          , N = {
            container: null,
            init: function() {
                this.container = R(".industry-section-scene-wraper"),
                this.nav = R(".industry-section-scene-wraper-nav"),
                this.container.length && _({
                    container: this.container[0],
                    items: 1,
                    slideBy: "page",
                    nav: !0,
                    controls: !1,
                    speed: 300,
                    loop: !1,
                    navContainer: this.nav.get(0)
                })
            }
        };
        ({
            containers: null,
            init: function() {
                var t = this;
                this.containers = R(".solution-animation-id"),
                this.containers.length && (window.addEventListener("scroll", (function() {
                    return t.scrollListener()
                }
                )),
                this.scrollListener())
            },
            animate: function(t, i) {
                if (t.length && t.isOnScreen(i) && !t.hasClass("findished-animation")) {
                    var n = t.children();
                    t.addClass("findished-animation"),
                    n.each((function(t, i) {
                        setTimeout((function() {
                            R(i).css({
                                animation: "slide-top ease 0.4s both"
                            })
                        }
                        ), 300 * t)
                    }
                    ))
                }
            },
            scrollListener: function() {
                var t = this;
                this.timeout && (clearTimeout(this.timeout),
                this.timeout = null),
                this.timeout = setTimeout((function() {
                    t.containers.each((function(i, n) {
                        var e = R(n)
                          , o = 100 * i;
                        e && e.isOnScreen(o) && t.animate(e, o)
                    }
                    ))
                }
                ), 50)
            }
        }).init(),
        o() || z.init(),
        e() && N.init();
        var X = window.$;
        ({
            items: null,
            charts: null,
            highlight: 0,
            init: function() {
                var t = this;
                if (this.items = X(".core-title-list-item"),
                this.charts = X(".core-content-list-item"),
                this.items.length) {
                    var i = this;
                    this.items.each((function(n, e) {
                        var o = X(e);
                        o.click((function(e) {
                            var s = n;
                            s !== i.highlight && (t.charts.eq(i.highlight).removeClass("highlight"),
                            i.items.eq(i.highlight).removeClass("highlight"),
                            o.addClass("highlight"),
                            i.highlight = s,
                            t.charts.eq(i.highlight).addClass("highlight"))
                        }
                        ))
                    }
                    ))
                }
            }
        }).init();
        var F = {
            items: null,
            init: function() {
                if (this.items = X(".core-list-item-m"),
                this.items.length) {
                    this.items.each((function(t, i) {
                        var n = X(i);
                        n.click((function(t) {
                            n.hasClass("highlight") ? n.removeClass("highlight") : n.addClass("highlight")
                        }
                        ))
                    }
                    ))
                }
            }
        }
          , W = {
            containerHot: null,
            init: function() {
                this.containerHot = X(".product-section-history-list");
                var t = X(".product-section-history-controls");
                if (this.containerHot.length) {
                    var i = tns({
                        container: this.containerHot.get(0),
                        items: 1,
                        edgePadding: 92,
                        nav: !1,
                        controls: !0,
                        controlsContainer: t[0],
                        preventScrollOnTouch: "auto",
                        loop: !1,
                        responsive: {
                            1023: {
                                items: 3,
                                edgePadding: 0
                            }
                        }
                    });
                    o() || i.goTo(3)
                }
            }
        }
          , U = {
            containerHot: null,
            init: function() {
                this.containerHot = X(".home-services");
                var t = X(".home-services-controls");
                if (this.containerHot.length)
                    tns({
                        container: this.containerHot.get(0),
                        items: 4,
                        nav: !1,
                        controls: !0,
                        controlsContainer: t[0],
                        preventScrollOnTouch: "auto",
                        loop: !1
                    })
            }
        }
          , V = {
            items: null,
            init: function() {
                this.items = X(".product-feature"),
                this.items.length && this.items.each((function(t, i) {
                    for (var n = 0, e = X(i).find(".product-feature-selector > div"), o = X(i).find(".product-feature-chart > div"), s = 0; s < e.length; s++)
                        if (e.eq(s).hasClass("highlight")) {
                            n = s;
                            break
                        }
                    e.click((function(t) {
                        var i = e.index(t.target);
                        i !== n && (o.eq(n).removeClass("highlight"),
                        e.eq(n).removeClass("highlight"),
                        X(t.target).addClass("highlight"),
                        n = i,
                        o.eq(n).addClass("highlight"))
                    }
                    ))
                }
                ))
            }
        }
          , Y = {
            container: null,
            triggered: !1,
            init: function() {
                this.container = X(".illustrate-container"),
                this.container.length && (this.targets = this.container.first().find(".illustrate-left-item"),
                this.otherTargets = this.container.first().find(".illustrate-right-item"),
                this.container && this.container.isOnScreen(300) && this.animate())
            },
            animate: function() {
                var t = this;
                this.container.length && !this.triggered && this.container.isOnScreen(300) && (this.triggered = !0,
                this.targets.each((function(i, n) {
                    setTimeout((function() {
                        X(n).addClass("animation"),
                        t.otherTargets.length && i === t.targets.length - 1 && t.otherTargets.addClass("animation")
                    }
                    ), 400 * i)
                }
                )))
            }
        }
          , J = {
            container: null,
            triggered: !1,
            init: function() {
                this.container = X(".illustrate-container-second"),
                this.container.length && (this.middle = this.container.find(".illustrate-container-center"),
                this.top = this.container.find(".illustrate-container-side-top"),
                this.bottom = this.container.find(".illustrate-container-side-bottom"),
                this.icon = this.container.find(".center-wraper-left-icon"),
                this.container && this.container.isOnScreen(300) && this.animate())
            },
            animate: function() {
                this.container.length && !this.triggered && this.container.isOnScreen(300) && (this.triggered = !0,
                this.middle.each((function(t, i) {
                    setTimeout((function() {
                        X(i).addClass("animation")
                    }
                    ), 350 * t)
                }
                )),
                this.top.each((function(t, i) {
                    setTimeout((function() {
                        X(i).addClass("animation")
                    }
                    ), 1500)
                }
                )),
                this.bottom.each((function(t, i) {
                    setTimeout((function() {
                        X(i).addClass("animation")
                    }
                    ), 1500)
                }
                )),
                this.icon.each((function(t, i) {
                    setTimeout((function() {
                        X(i).addClass("animation")
                    }
                    ), 1500)
                }
                )))
            }
        }
          , G = {
            video: null,
            videoM: null,
            startBtn: null,
            closeBtn: null,
            mask: null,
            hasSource: !1,
            hasSourceM: !1,
            init: function() {
                var t = this;
                this.video = X(".section-video-player-mask video"),
                this.startBtn = X("#platform-service-video-start"),
                this.closeBtn = X(".section-video-player-mask i"),
                this.mask = X(".section-video-player-mask"),
                this.videoM = X("#platform-service-video-m");
                var i = '<source src="https://upload.hyperchain.cn/%E8%B6%A3%E9%93%BE%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B01014.mp4" type="video/mp4" >';
                if (this.videoM && this.videoM.on("click", (function() {
                    t.hasSourceM || (t.hasSourceM = 1,
                    t.videoM.append(i),
                    t.videoM.attr("controls", !0),
                    t.videoM.attr("autoplay", !0),
                    t.videoM.play())
                }
                )),
                this.video && this.startBtn && this.closeBtn && this.mask) {
                    var n = function() {
                        t.mask.hide(),
                        t.video.get(0).pause()
                    };
                    this.startBtn.on("click", (function() {
                        t.hasSource || (t.hasSource = 1,
                        t.video.append(i)),
                        t.mask.show(),
                        t.video.get(0).play()
                    }
                    )),
                    this.closeBtn.on("click", n),
                    this.mask.on("click", n),
                    this.mask.on("wheel", (function(t) {
                        t.preventDefault(),
                        t.stopPropagation()
                    }
                    )),
                    this.mask.on("touchmove", (function(t) {
                        t.preventDefault(),
                        t.stopPropagation()
                    }
                    )),
                    this.video.on("click", (function(t) {
                        t.stopPropagation()
                    }
                    ))
                }
            }
        }
          , K = {
            ele: null,
            init: function() {
                if (this.ele = X("#register-baas-btn"),
                this.ele.length) {
                    var t = window.isProduction ? "http://hoc.hyperchain.cn/" : "http://devhoc.hyperchain.cn/";
                    this.ele.attr("href", t + "register?loginUrl=" + window.location.origin + "/UnifiedLogin&redirect=home"),
                    this.ele.on("click", (function() {
                        window._czc && window._czc.push(["_trackEvent", "首页", "注册"])
                    }
                    ))
                }
            }
        }
          , Q = function() {
            W.init(),
            Y.init(),
            J.init(),
            G.init(),
            K.init(),
            e() || (U.init(),
            V.init()),
            o() && F.init()
        }
          , Z = function() {
            Y.animate(),
            J.animate()
        }
          , tt = window
          , it = tt.$
          , nt = tt.tns;
        ({
            input: null,
            btn: null,
            init: function() {
                var t = this;
                this.input = it("#search-news"),
                this.input.length && (this.input.on("keypress", (function(t) {
                    if (13 !== t.which)
                        return !0;
                    var i = window.escape(t.target.value);
                    return i = i.replace(/\+/g, "%2B"),
                    window.location.href = "/news/search?keyword=" + i,
                    !1
                }
                )),
                this.btn = it("#search-news-btn"),
                this.btn.length && this.btn.on("click", (function() {
                    if (0 !== t.input.val().length) {
                        var i = window.escape(t.input.get(0).value);
                        i = i.replace(/\+/g, "%2B"),
                        window.location.href = "/news/search?keyword=" + i
                    }
                }
                )))
            }
        }).init(),
        {
            input: null,
            btn: null,
            init: function() {
                var t = this;
                this.input = it("#search-news-m"),
                this.input.length && (this.input.on("keypress", (function(t) {
                    if (13 !== t.which)
                        return !0;
                    var i = window.escape(t.target.value);
                    return i = i.replace(/\+/g, "%2B"),
                    window.location.href = "/news/search?keyword=" + i,
                    !1
                }
                )),
                this.btn = it("#search-news-btn-m"),
                this.btn.length && this.btn.on("click", (function() {
                    if (0 !== t.input.val().length) {
                        var i = window.escape(t.input.get(0).value);
                        i = i.replace(/\+/g, "%2B"),
                        window.location.href = "/news/search?keyword=" + i
                    }
                }
                )))
            }
        }.init(),
        {
            select: null,
            init: function() {
                if (this.select = it("#sort-news"),
                this.select.length) {
                    var t = this.select.attr("data-url");
                    this.select.on("change", (function(i) {
                        "desc" === i.target.value ? window.location.href = t : window.location.href = t + "sort=1"
                    }
                    ))
                }
            }
        }.init(),
        {
            targets: null,
            init: function() {
                this.targets = it(".home-news-info > p"),
                this.targets.each((function(t, i) {
                    var n = it(i).children("a");
                    if (!(n.height() <= 48)) {
                        var e = n.text()
                          , o = Math.floor(n.width() / 16);
                        n.text(e.substr(0, 2 * o - 1) + "...")
                    }
                }
                ))
            }
        }.init(),
        {
            targets: null,
            init: function() {
                this.targets = it(".news-content-summary-content-m  p"),
                this.targets.each((function(t, i) {
                    var n = it(i);
                    if (!(n.height() <= 60)) {
                        var e = n.text()
                          , o = Math.floor(n.width() / 16);
                        n.text(e.substr(0, 3 * o - 1) + "...")
                    }
                }
                ))
            }
        }.init(),
        {
            containerHot: null,
            init: function() {
                if (this.containerHot = it(".news-content-area-hot-banner"),
                this.containerHot.length) {
                    this.items = it(".news-content-area-hot-banner-item");
                    nt({
                        loop: !0,
                        container: this.containerHot.get(0),
                        items: 1,
                        gutter: 0,
                        nav: !0,
                        navPosition: "bottom",
                        controls: !1,
                        autoplay: !0,
                        autoplayHoverPause: !0,
                        autoplayButtonOutput: !1,
                        preventScrollOnTouch: "auto"
                    })
                }
            }
        }.init(),
        {
            containerHot: null,
            containerRecommend: null,
            targets: null,
            init: function() {
                this.targets = it(".news-summary-content"),
                this.targets.each((function(t, i) {
                    var n = it(i).children("p");
                    if (!(n.height() <= 72)) {
                        var e = n.text()
                          , o = Math.floor(n.width() / 16);
                        n.text(e.substr(0, 3 * o - 1) + "...")
                    }
                }
                ))
            }
        }.init(),
        {
            containerHot: null,
            controls: null,
            init: function() {
                if (this.containerHot = it(".new-hot-container"),
                this.controls = it(".new-hot-controls"),
                this.containerHot.length) {
                    this.items = it(".hot-item");
                    nt({
                        loop: !1,
                        container: this.containerHot.get(0),
                        items: 2,
                        nav: !1,
                        controlsContainer: this.controls.get(0),
                        responsive: {
                            1023: {
                                items: 3
                            }
                        }
                    })
                }
            }
        }.init();
        var et = window
          , ot = et.$;
        et.tns;
        ({
            input: null,
            btn: null,
            init: function() {
                var t = this;
                this.input = ot("#search-blogs"),
                this.input.length && (this.input.on("keypress", (function(t) {
                    if (13 !== t.which)
                        return !0;
                    var i = window.escape(t.target.value);
                    return i = i.replace(/\+/g, "%2B"),
                    window.location.href = "/blogs/search?keyword=" + i,
                    !1
                }
                )),
                this.btn = ot("#search-blogs-btn"),
                this.btn.length && this.btn.on("click", (function() {
                    if (0 !== t.input.val().length) {
                        var i = window.escape(t.input.get(0).value);
                        i = i.replace(/\+/g, "%2B"),
                        window.location.href = "/blogs/search?keyword=" + i
                    }
                }
                )))
            }
        }).init();
        var st = function() {
            function t(t, i) {
                for (var n = 0; n < i.length; n++) {
                    var e = i[n];
                    e.enumerable = e.enumerable || !1,
                    e.configurable = !0,
                    "value"in e && (e.writable = !0),
                    Object.defineProperty(t, e.key, e)
                }
            }
            return function(i, n, e) {
                return n && t(i.prototype, n),
                e && t(i, e),
                i
            }
        }();
        function at(t, i, n) {
            return i in t ? Object.defineProperty(t, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[i] = n,
            t
        }
        var rt = window
          , ct = rt.$
          , lt = rt.tns;
        ct(".about-activity").find(".image-gallery").each((function(t, i) {
            new d(i).init()
        }
        )),
        {
            items: [],
            init: function() {
                this.items = ct(".about-members"),
                this.items.length && this.items.each((function(t, i) {
                    ct(i).click((function(t) {
                        if ("member-data" === t.target.id) {
                            var i = ct(t.target).data("user").split("@@")
                              , n = ct(".about-member-extra-mask");
                            n.delegate("#close-person-detail-button", "click", (function() {
                                n.css("display", "none")
                            }
                            )),
                            n.html('\n          <div class="about-member-extra">\n            <img class="bg" src="/assets/images/about/team/b2.png">\n            <div class="about-member-extra-top">\n            <div class="user-icon">\n              <img  class="user-icon-img" src=' + i[0] + '>\n              <img class="icon-two" src="/assets/images/about/team/i1.png">\n              <img class="icon-one" src="/assets/images/about/team/i2.png">\n            </div>\n           \n           \n            <div><div class="name">' + i[1] + '</div>\n            <div class="position">' + i[2] + ' </div>\n            </div>\n            <div id="close-person-detail-button" class=\'close\'>\n              <img   src="/assets/images/icon/close-grey.png">\n            </div>\n            \n            </div>\n            <div class="about-member-extra-bottom">\n            <div class="des" >\n              ' + i[3] + "\n            </div>\n            </div>\n          </div>\n        "),
                            n.css("display", "block")
                        }
                    }
                    ))
                }
                ))
            }
        }.init();
        var ht = {
            items: null,
            highlight: 0,
            positionArr: [],
            timeout: 0,
            parent: null,
            top: 0,
            init: function() {
                var t = this
                  , i = ct("#about-section-bar-position")
                  , n = ct(".about-section-bar-wraper");
                if (this.parent = n,
                this.items = n.find("a"),
                this.items.length) {
                    this.top = i.offset().top;
                    location.hash;
                    window.addEventListener("scroll", (function() {
                        return t.scrollListener()
                    }
                    ));
                    this.updatePositionArray(),
                    this.scrollListener()
                }
            },
            updatePositionArray: function() {
                var t = this;
                this.positionArr = [],
                this.items.each((function(i, n) {
                    var e = ct(n)
                      , o = ct(e.attr("href"));
                    t.positionArr.push(o.offset().top - 30)
                }
                ))
            },
            scrollListener: function() {
                var t = this;
                this.timeout && (clearTimeout(this.timeout),
                this.timeout = null);
                var i = this;
                this.timeout = setTimeout((function() {
                    var n = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    n > t.top ? i.parent.addClass("fixed") : i.parent.removeClass("fixed");
                    var e = 0;
                    (t.positionArr.forEach((function(t, i) {
                        n >= t && (e = i)
                    }
                    )),
                    e !== i.highlight) && (i.items.eq(i.highlight).removeClass("highlight"),
                    ct(i.items[e]).addClass("highlight"),
                    i.highlight = e)
                }
                ), 10)
            }
        };
        (function() {
            if (ct(".about-historys").length) {
                var t = {};
                ct(".about-histroy-year").each((function(i, n) {
                    var e = ct(n)
                      , o = e.text() + "-" + e.data("month");
                    t[o] ? (e.parent().css("visibility", "hidden"),
                    e.parent().parent().prev().addClass("has-same")) : t[o] = !0
                }
                ))
            }
        }
        )(),
        {
            containers: null,
            controls: null,
            navContainer: null,
            init: function() {
                var t = this;
                this.containers = ct(".about-historys-container"),
                this.anchor = ct(".about-section-history"),
                this.controls = ct(".about-historys-controls"),
                this.navContainer = ct(".about-historys-overview"),
                this.containers.length && (this.slider = lt({
                    container: this.containers[0],
                    items: 1,
                    axis: "vertical",
                    controls: !0,
                    controlsContainer: this.controls[0],
                    touch: !1,
                    speed: 250,
                    nav: !0,
                    navContainer: this.navContainer[0],
                    loop: !1,
                    onInit: function() {
                        ht.init()
                    }
                }),
                this.slider.events.on("indexChanged", (function() {
                    setTimeout((function() {
                        window.scrollTo(0, t.anchor.offset().top - 100)
                    }
                    ), 0),
                    setTimeout((function() {
                        ht.updatePositionArray(),
                        ht.scrollListener()
                    }
                    ), 400)
                }
                )))
            }
        }.init(),
        {
            items: null,
            init: function() {
                if (this.items = ct(".about-section-workaround-item"),
                this.items.length) {
                    this.items.each((function(t, i) {
                        var n = ct(i);
                        n.delegate(".mask.right-mask", "click", (function() {
                            var t = n.find(".mask.right-mask")
                              , i = n.find(".mask.left-mask")
                              , e = n.find(".right")
                              , o = n.find(".left");
                            e.css("width", "67%"),
                            o.css("width", "33%"),
                            t.css("opacity", "0"),
                            i.css("opacity", "1")
                        }
                        )),
                        n.delegate(".mask.left-mask", "click", (function() {
                            var t = n.find(".mask.right-mask")
                              , i = n.find(".mask.left-mask")
                              , e = n.find(".right");
                            n.find(".left").css("width", "67%"),
                            e.css("width", "33%"),
                            i.css("opacity", "0"),
                            t.css("opacity", "1")
                        }
                        ))
                    }
                    ))
                }
            }
        }.init(),
        {
            container: null,
            init: function() {
                this.container = ct(".about-section-acticity-right-list"),
                this.container.length && this.container.each((function(t, i) {
                    var n, e = ct(i).parent(), o = ct(e).find(".about-section-acticity-right-controls"), s = ct(e).find(".about-section-acticity-right-nav");
                    lt((at(n = {
                        container: i,
                        items: 1,
                        slideBy: "page",
                        nav: !1,
                        speed: 300,
                        loop: !1
                    }, "nav", !0),
                    at(n, "controlsContainer", o.get(0)),
                    at(n, "navContainer", s.get(0)),
                    at(n, "preventScrollOnTouch", "auto"),
                    n))
                }
                ))
            }
        }.init();
        var dt = {
            container: null,
            init: function() {
                this.container = ct(".about-section-workaround-item-img-mobile-container"),
                this.container.length && this.container.each((function(t, i) {
                    var n, e = ct(i).parent(), o = ct(e).find(".about-section-workaround-item-img-controls"), s = ct(e).find(".about-section-workaround-item-img-nav");
                    lt((at(n = {
                        container: i,
                        items: 1,
                        slideBy: "page",
                        nav: !1,
                        speed: 300,
                        loop: !1
                    }, "nav", !0),
                    at(n, "controlsContainer", o.get(0)),
                    at(n, "navContainer", s.get(0)),
                    at(n, "preventScrollOnTouch", "auto"),
                    n))
                }
                ))
            }
        };
        ({
            container: [],
            init: function() {
                var t = this;
                this.container = ct(".about-comments"),
                this.navContainer = ct(".about-comments-nav"),
                this.container.length && this.container.each((function(i, n) {
                    var e, o = ct(".about-comments-controls");
                    lt((at(e = {
                        container: n,
                        items: 1,
                        edgePadding: 24,
                        slideBy: "page",
                        nav: !1,
                        speed: 300,
                        loop: !1
                    }, "nav", !0),
                    at(e, "navContainer", t.navContainer[0]),
                    at(e, "controlsContainer", o.get(0)),
                    at(e, "preventScrollOnTouch", "auto"),
                    at(e, "responsive", {
                        1023: {
                            edgePadding: 0
                        }
                    }),
                    e))
                }
                ))
            }
        }).init(),
        {
            target: null,
            page: 1,
            itemNum: 0,
            container: null,
            waiting: !1,
            init: function() {
                var t = this;
                this.target = ct("#load-more-activity"),
                this.target.length && (this.itemNum = ct(".about-activity").length,
                this.container = ct(".about-activities"),
                this.target.click((function() {
                    if (!t.waiting) {
                        var i = ++t.page;
                        t.waiting = !0,
                        ct.get("/about/atmosphere/activity?page=" + i + "&pageSize=4", (function(n) {
                            t.waiting = !1;
                            var o = [];
                            (t.itemNum += n.data.length,
                            t.itemNum === n.total && t.target.addClass("hidden"),
                            n.data.forEach((function(t) {
                                var n = ""
                                  , s = t.date.substr(0, 4)
                                  , a = t.date.substr(5, 2)
                                  , r = "";
                                if (t.imagePaths.length > 0) {
                                    var c = "";
                                    if (t.imagePaths) {
                                        c += '<div class="image-gallery-selector' + (1 === t.imagePaths.length ? " hidden" : "") + '" data-type="carousel">';
                                        for (var l = 0; l < t.imagePaths.length; l++)
                                            c += '<div class="' + (0 === l ? "highlight" : "") + '"><img src="' + t.imagePaths[l] + '" /></div>';
                                        c += "</div>"
                                    }
                                    r += '<div class="gallery-section"><div class="image-gallery"><div class="image-gallery-current"><img src="' + t.imagePaths[0] + '" /></div>' + c + "</div></div>"
                                }
                                n += '<div class="about-activity" data-page=\'' + i + "'><span>" + s + "年" + a + "月</span><h3>" + t.title + "</h3><p>" + t.content + "</h3>" + r + "</div>";
                                var h = ct(n);
                                o.push(h),
                                e() || new d(h).init()
                            }
                            )),
                            t.container.append(o),
                            e()) && ct(".about-activity[data-page='" + i + "']").find(".image-gallery-selector[data-type=carousel]").each((function(t, i) {
                                new u(i).init()
                            }
                            ))
                        }
                        ))
                    }
                }
                )))
            }
        }.init();
        var ut = function() {
            function t(i) {
                var n = this;
                !function(t, i) {
                    if (!(t instanceof i))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.handleClick = function() {
                    var t = n.isOpen ? 0 : n.detailContent.height();
                    n.isOpen = !n.isOpen,
                    n.el.toggleClass("open"),
                    n.detailContainer.css("height", t + "px")
                }
                ,
                this.destroy = function() {
                    n.target.off("click", n.handleClick)
                }
                ,
                this.el = ct(i),
                this.el.length && (this.target = this.el.children(".about-hiring-item-header"),
                this.detailContainer = this.el.find(".about-hiring-item-detail"),
                this.detailContent = this.detailContainer.children("div"),
                this.isOpen = !1)
            }
            return st(t, [{
                key: "init",
                value: function() {
                    this.target.on("click", this.handleClick)
                }
            }]),
            t
        }();
        ct(".about-hiring-item").each((function(t, i) {
            new ut(i).init()
        }
        )),
        {
            items: [],
            target: null,
            init: function() {
                var t = this;
                if (this.items = ct(".about-contact-btns span"),
                this.items.length) {
                    var i = ct(".about-banner")
                      , n = ""
                      , e = 0;
                    this.items.each((function(o, s) {
                        var a = ct(s);
                        a.on("click", (function() {
                            var o = a.data("place")
                              , s = t.items.index(a);
                            s !== e && ("hz" === o ? n = "关于我们-联系@2x.png" : "sh" === o && (n = "关于我们-联系-上海.png"),
                            i.css("background-image", "url(/assets/images/banner/" + n),
                            t.items.eq(e).removeClass("highlight"),
                            a.addClass("highlight"),
                            e = s)
                        }
                        ))
                    }
                    ))
                }
            }
        }.init(),
        {
            container: null,
            init: function() {
                this.container = ct(".about-comments-m");
                var t = this.container.find(".about-comment-m");
                1 === t.length && this.container.css("padding", "0 32px"),
                this.container.length && 1 !== t.length && lt({
                    container: this.container.get(0),
                    items: 1,
                    slideBy: "page",
                    controls: !1,
                    nav: !1,
                    swipeAngle: 30,
                    speed: 300,
                    gutter: t.length > 1 ? 16 : 0,
                    edgePadding: t.length > 1 ? 16 : 0,
                    loop: !1,
                    preventScrollOnTouch: "auto"
                })
            }
        }.init(),
        {
            items: [],
            init: function() {
                var t = this;
                this.items = ct(".core-product-item"),
                this.items.each((function(i, n) {
                    var e = ct(n);
                    e.on("click", (function() {
                        e.hasClass("highlight") || (t.items.each((function() {
                            ct(this).removeClass("highlight")
                        }
                        )),
                        e.addClass("highlight"))
                    }
                    ))
                }
                ))
            }
        }.init(),
        {
            items: [],
            init: function() {
                this.items = ct(".mobile-address-wraper-item"),
                this.items.each((function(t, i) {
                    var n = ct(i);
                    n.on("click", (function() {
                        n.toggleClass("open")
                    }
                    ))
                }
                ))
            }
        }.init(),
        e() && ct(".about-nav a").addClass("can-touch"),
        o() && dt.init();
        var mt = function() {
            function t(t, i) {
                for (var n = 0; n < i.length; n++) {
                    var e = i[n];
                    e.enumerable = e.enumerable || !1,
                    e.configurable = !0,
                    "value"in e && (e.writable = !0),
                    Object.defineProperty(t, e.key, e)
                }
            }
            return function(i, n, e) {
                return n && t(i.prototype, n),
                e && t(i, e),
                i
            }
        }();
        var gt = window.$;
        ({
            target: null,
            el: null,
            container: null,
            isShow: !1,
            init: function() {
                var t = this;
                this.container = gt(".train-books"),
                this.el = gt(".train-book-pur-list"),
                this.target = gt("#purchase"),
                this.target.on("click", (function(i) {
                    t.isShow ? t.hidden() : t.show(),
                    i.preventDefault(),
                    i.stopPropagation()
                }
                )),
                this.hidden = this.hidden.bind(this)
            },
            show: function() {
                this.isShow = !0;
                var t = this.container.offset()
                  , i = this.target.offset();
                this.target.children("svg").attr("transform", "rotate(180 0 0)"),
                this.el.css({
                    left: i.left - t.left,
                    top: i.top - t.top + i.height
                }),
                this.el.removeClass("hidden"),
                gt(document.body).on("click", this.hidden),
                gt(document.body).on("touch", this.hidden)
            },
            hidden: function() {
                this.el.addClass("hidden"),
                this.target.children("svg").attr("transform", "rotate(0 0 0)"),
                this.isShow = !1,
                gt(document.body).off("click", this.hidden),
                gt(document.body).off("touch", this.hidden)
            }
        }).init();
        var ft = function() {
            function t(i) {
                var n = this;
                !function(t, i) {
                    if (!(t instanceof i))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.container = gt(i),
                this.isOpen = this.container.hasClass("open"),
                this.target = gt(i).find(".train-class-meta"),
                this.displayHeight = 100,
                this.isOpen && this.open(),
                this.target.on("click", (function() {
                    n.isOpen ? n.close() : n.open()
                }
                ))
            }
            return mt(t, [{
                key: "open",
                value: function() {
                    this.container.addClass("open"),
                    this.container.css("max-height", "500px"),
                    this.isOpen = !0
                }
            }, {
                key: "close",
                value: function() {
                    this.container.removeClass("open"),
                    this.container.css("max-height", this.displayHeight + "px"),
                    this.isOpen = !1
                }
            }]),
            t
        }();
        gt(".train-class").each((function(t, i) {
            return new ft(i)
        }
        )),
        gt(".train-sec-cases").find(".image-gallery").each((function(t, i) {
            new d(i).init()
        }
        ));
        var vt = window
          , pt = vt.$
          , bt = vt.tns;
        ({
            containers: null,
            init: function() {
                this.containers = pt(".tabs"),
                this.containers.length && this.containers.each((function(t, i) {
                    var n = pt(i).find(".image-gallery")
                      , e = !!pt(i).data("animate")
                      , o = [];
                    n.length > 0 && n.each((function(t, i) {
                        var n = new d(i);
                        n.init(),
                        o.push(n)
                    }
                    ));
                    var s = pt(i).find(".tabs-container")[0]
                      , a = bt({
                        container: s,
                        items: 1,
                        slideBy: "page",
                        controls: !1,
                        nav: !1,
                        speed: e ? 0 : 300,
                        touch: !e,
                        preventScrollOnTouch: "auto",
                        loop: !1,
                        onInit: function(t) {
                            e && pt(t.slideItems[t.index]).addClass("fadein"),
                            o.forEach((function(t) {
                                t.cb = function() {
                                    var t = a.getInfo()
                                      , n = t.slideItems[t.index]
                                      , e = pt(n).height();
                                    pt(i).find("#tns1-iw").css("height", e + "px")
                                }
                            }
                            ))
                        }
                    });
                    pt(i).find(".tabs-item").css({
                        opacity: 1
                    });
                    var r = pt(i).find(".tabs-selector")
                      , c = pt(r).children("div").children("span");
                    1 === c.length ? c.css("cursor", "default") : c.each((function(t) {
                        c.eq(t).on("click", (function() {
                            a.goTo(t)
                        }
                        ))
                    }
                    )),
                    a.events.on("indexChanged", (function(t) {
                        t.index !== t.indexCached && (c.eq(t.index).addClass("highlight"),
                        c.eq(t.indexCached).removeClass("highlight"),
                        e && (pt(t.slideItems[t.index]).addClass("fadein"),
                        pt(t.slideItems[t.indexCached]).removeClass("fadein")))
                    }
                    ))
                }
                ))
            }
        }).init();
        var yt = window.$;
        yt.fn.isOnScreen = function(t) {
            var i = t || 0
              , n = yt(window)
              , e = {
                top: n.scrollTop()
            };
            e.bottom = e.top + n.height();
            var o = this.offset();
            return o.bottom = o.top + this.first().offsetHeight,
            !(e.bottom < o.top + i || e.top > o.bottom)
        }
        ,
        j(),
        Q(),
        e() && yt(".image-gallery-current[data-type=carousel]").each((function(t, i) {
            new u(i).init()
        }
        ));
        var wt = new function t(i) {
            var n = this;
            !function(t, i) {
                if (!(t instanceof i))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t),
            this.handler = function() {
                n.isRunning || (n.isRunning = !0,
                window.requestAnimationFrame ? window.requestAnimationFrame(n.run) : setTimeout(n.run, 66))
            }
            ,
            this.run = function() {
                n.callbacks.forEach((function(t) {
                    return t()
                }
                )),
                n.isRunning = !1
            }
            ,
            this.add = function(t) {
                t && n.callbacks.push(t)
            }
            ,
            this.callbacks = [],
            this.isRunning = !1,
            s(window).on(i, this.handler)
        }
        ("scroll");
        wt.add(D),
        wt.add(Z)
    }
});
