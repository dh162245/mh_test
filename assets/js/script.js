      // Menu-toggle button

      $(document).ready(function() {
        $(".menu-icon").on("click", function() {
              $("nav ul").toggleClass("showing");
        });
  });

  // Scrolling Effect

  $(window).on("scroll", function() {
        if($(window).scrollTop()) {
              $('nav').addClass('black');
        }

        else {
              $('nav').removeClass('black');
        }
  })

  TweenMax.staggerFrom(
      ".title h1, .title h2, .title > a",
      2,
      {
        opacity: 0,
        y: 30,
        ease: Expo.easeInOut,
        delay: 1,
      },
      0.06
    );

    TweenMax.staggerFrom(
      ".block",
      0.8,
      {
        width: "0%",
        ease: Power1.easeIn,
        delay: 2,
      },
      0.04
    );