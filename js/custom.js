/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  ? ((document.getElementsByClassName("infinityChrome")[0].style.display =
      "block"),
    (document.getElementsByClassName("infinity")[0].style.display = "none"))
  : ((document.getElementsByClassName("infinityChrome")[0].style.display =
      "none"),
    (document.getElementsByClassName("infinity")[0].style.display = "block")),
  $(window).on("load", function () {
    "use strict";
    $("#preloader").delay(350).fadeOut("slow"),
      setTimeout(function () {
        new WOW().init();
      }, 0);
    var e = [200, 400, 600, 800, 1e3, 1200, 1400, 1600, 1800, 2e3];
    $(".blog-item.wow").each(function (t) {
      $(this).attr("data-wow-delay", void 0 === e[t] ? "200ms" : e[t] + "ms");
    }),
      $(".portfolio-filter").on("click", "li", function () {
        var e = $(this).attr("data-filter");
        t.isotope({ filter: e });
      }),
      $(".portfolio-filter").each(function (e, t) {
        var o = $(t);
        o.on("click", "li", function () {
          o.find(".current").removeClass("current"),
            $(this).addClass("current");
        });
      });
    var t = $(".portfolio-wrapper");
    t.imagesLoaded(function () {
      $(".portfolio-wrapper").isotope({
        itemSelector: '[class*="col-"]',
        percentPosition: !0,
        masonry: { columnWidth: '[class*="col-"]' },
      });
    });
    var o = function () {
      $(".work-image").magnificPopup({
        type: "image",
        closeBtnInside: !1,
        mainClass: "my-mfp-zoom-in",
      }),
        $(".work-content").magnificPopup({
          type: "inline",
          fixedContentPos: !0,
          fixedBgPos: !0,
          overflowY: "auto",
          closeBtnInside: !1,
          preloader: !1,
          midClick: !0,
          removalDelay: 300,
          mainClass: "my-mfp-zoom-in",
        }),
        $(".work-video").magnificPopup({
          type: "iframe",
          closeBtnInside: !1,
          iframe: {
            markup:
              '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>',
            patterns: {
              youtube: {
                index: "youtube.com/",
                id: "v=",
                src: "https://www.youtube.com/embed/%id%?autoplay=1",
              },
              vimeo: {
                index: "vimeo.com/",
                id: "/",
                src: "//player.vimeo.com/video/%id%?autoplay=1",
              },
              gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
            srcAction: "iframe_src",
          },
        }),
        $(".gallery-link").on("click", function () {
          $(this).next().magnificPopup("open");
        }),
        $(".gallery").each(function () {
          $(this).magnificPopup({
            delegate: "a",
            type: "image",
            closeBtnInside: !1,
            gallery: { enabled: !0, navigateByImgClick: !0 },
            fixedContentPos: !1,
            mainClass: "my-mfp-zoom-in",
          });
        });
    };
    o();
    var n = 1,
      i = $(".portfolio-pagination").find("li a:last").text();
    t.infinitescroll(
      {
        itemSelector: ".grid-item",
        nextSelector: ".portfolio-pagination li a",
        navSelector: ".portfolio-pagination",
        extraScrollPx: 0,
        bufferPx: 0,
        maxPage: 6,
        loading: {
          finishedMsg: "No more works",
          msgText: "",
          speed: "slow",
          selector: ".load-more",
        },
      },
      function (e) {
        var a = $(e);
        a.imagesLoaded(function () {
          a.animate({ opacity: 1 }), t.isotope("appended", a);
        }),
          o(),
          ++n == i && $(".load-more").remove();
      }
    ),
      t.infinitescroll("unbind"),
      $(".load-more .btn").on("click", function () {
        return (
          t.infinitescroll("retrieve"),
          $(".load-more .btn i").css("display", "inline-block"),
          $(".load-more .btn i").addClass("fa-spin"),
          $(document).ajaxStop(function () {
            setTimeout(function () {
              $(".load-more .btn i").hide();
            }, 1e3);
          }),
          !1
        );
      }),
      $(".portfolio-filter-mobile").on("change", function () {
        var e = this.value;
        (e = a[e] || e), t.isotope({ filter: e });
      });
    var a = {
      numberGreaterThan50: function () {
        var e = $(this).find(".number").text();
        return parseInt(e, 10) > 50;
      },
      ium: function () {
        return $(this).find(".name").text().match(/ium$/);
      },
    };
  }),
  $(document).on("ready", function () {
    "use strict";
    $(".testimonials-wrapper").slick({
      dots: !0,
      arrows: !1,
      autoplay: !0,
      autoplaySpeed: 3e3,
    });
  }),
  $(function () {
    "use strict";
    if (
      ($(".menu-icon button").on("click", function () {
        $(
          "header.desktop-header-1, main.content, header.mobile-header-1"
        ).toggleClass("open");
      }),
      $("main.content").on("click", function () {
        $(
          "header.desktop-header-1, main.content, header.mobile-header-1"
        ).removeClass("open");
      }),
      $(".vertical-menu li a").on("click", function () {
        $(
          "header.desktop-header-1, main.content, header.mobile-header-1"
        ).removeClass("open");
      }),
      $(".menu-icon button").on("click", function () {
        $(
          "header.desktop-header-2, main.content-2, header.mobile-header-2"
        ).toggleClass("open");
      }),
      $("main.content-2").on("click", function () {
        $(
          "header.desktop-header-2, main.content-2, header.mobile-header-2"
        ).removeClass("open");
      }),
      $(".vertical-menu li a").on("click", function () {
        $(
          "header.desktop-header-2, main.content-2, header.mobile-header-2"
        ).removeClass("open");
      }),
      $('a[href^="#"]:not([href="#"]').on("click", function (e) {
        var t = $(this);
        $("html, body")
          .stop()
          .animate(
            { scrollTop: $(t.attr("href")).offset().top },
            800,
            "easeInOutQuad"
          ),
          e.preventDefault();
      }),
      $(".parallax").length > 0)
    ) {
      var e = $(".parallax").get(0);
      new Parallax(e, { relativeInput: !0 });
    }
    $(".text-rotating").Morphext({
      animation: "bounceIn",
      separator: ",",
      speed: 4e3,
      complete: function () {},
    }),
      $(".vertical-menu li a").addClass("nav-link"),
      $("body").scrollspy({ target: ".scrollspy" }),
      $(".count").counterUp({ delay: 10, time: 2e3 }),
      $(".skill-item").length > 0 &&
        new Waypoint({
          element: document.getElementsByClassName("skill-item"),
          handler: function (e) {
            $(".progress-bar").each(function () {
              var e = $(this).attr("aria-valuenow") + "%";
              $(this).animate({ width: e }, { easing: "linear" });
            }),
              this.destroy();
          },
          offset: "50%",
        });
    for (
      var t = document.getElementsByClassName("spacer"), o = 0;
      o < t.length;
      o++
    ) {
      var n = t[o].getAttribute("data-height");
      t[o].style.height = n + "px";
    }
    for (
      t = document.getElementsByClassName("data-background"), o = 0;
      o < t.length;
      o++
    ) {
      var i = t[o].getAttribute("data-color");
      t[o].style.backgroundColor = "" + i;
    }
    $(".submenu").before('<i class="ion-md-add switch"></i>'),
      $(".vertical-menu li i.switch").on("click", function () {
        var e = $(this).next(".submenu");
        e.slideToggle(300), e.parent().toggleClass("openmenu");
      }),
      $(window).scroll(function () {
        $(this).scrollTop() >= 350
          ? $("#return-to-top").fadeIn(200)
          : $("#return-to-top").fadeOut(200);
      }),
      $("#return-to-top").on("click", function (e) {
        e.preventDefault(), $("body,html").animate({ scrollTop: 0 }, 400);
      });
  }),
  $(document).ready(function () {
    $("#autoWidth").lightSlider({
      autoWidth: !0,
      loop: !0,
      onSliderLoad: function () {
        $("#autoWidth").removeClass("cS-hidden");
      },
    });
  });
