$(document).ready(function(){

    // Search Button Settings
    $(".header__search").click(function(e) {
        e.preventDefault();
        $(".search-modal").addClass('active');
    });

    $(".search-block-close").click(function() {
        $(".search-modal").removeClass('active');
    });


    // Hamburger Menu Settings

    $('.menu-btn').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn-active');
        $('.mobile-menu').toggleClass('active');
    });


    $(".banners").slick({
        nextArrow: `<a href="#" class="next-btn">
                        <img src="img/next.svg" alt="">
                    </a>`,
        prevArrow: `<a href="#" class="prev-btn">
                        <img src="img//prev.svg" alt="">
                    </a>`,
        fade: true,
        responsive: [
            {
              breakpoint: 1008,
              settings: {
                arrows: false,
              }
            },
          ]
        
    });

});