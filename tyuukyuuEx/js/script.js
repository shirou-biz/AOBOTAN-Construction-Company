$(function(){
    $('.header-nav_section').find('ul').hide();

    $('.header-nav_section').hover(
        function() {
            $(this).children('.header-nav_section-itemlist').stop().slideDown(500);
            $(this).find('.plus-height').stop().fadeOut(300); 
        },
        function() {
            $(this).children('.header-nav_section-itemlist').stop().slideUp(500);
            $(this).find('.plus-height').stop().fadeIn(300); 
        }
    );

    $('#hamburger').click(function(){
        $(this).toggleClass("is-active");
        $('.sp-global-menu').toggleClass("is-active");
    });

    $('.fv__slider-box').slick({
        autoplay: true,       // 自動再生
        autoplaySpeed: 0,  // 3秒ごとに切り替え
        dots: false,           // ドットナビゲーションを表示
        arrows: false,         // 前後の矢印を表示
        infinite: true,       // 無限ループ
        speed: 8000,           // アニメーション速度
        slidesToShow: 2,      // 一度に表示するスライド数
        slidesToScroll: 1,     // 一度にスクロールするスライド数
        cssEase: 'linear',

        responsive: [
            {
              breakpoint: 700, // 1024px以下の時
              settings: {
                slidesToShow: 1
              }
            },
          ]
    });

    $('.more-btn').hover(
        function() {
            $(this).stop().toggleClass("is-active");
            $('.more-btn-dot').stop().toggleClass("is-active");
        },
        function() {
            $(this).stop().toggleClass("is-active");
            $('.more-btn-dot').stop().toggleClass("is-active");
        }
    );

});