$(function(){
    $('.header-nav_section').find('ul').hide();

    $('.header-nav_section').hover(
        function() {
            $(this).children('.header-nav_section-itemlist').stop().slideDown(500);
            $(this).find('.plus-height').stop().fadeOut(300);; 
        },
        function() {
            $(this).children('.header-nav_section-itemlist').stop().slideUp(500);
            $(this).find('.plus-height').stop().fadeIn(300);; 
        }
    );

    $('#hamburger').click(function(){
        $(this).toggleClass("is-active");
        $('.sp-global-menu').toggleClass("is-active");
    });

    $('.fv__slider-box').slick({
        autoplay: true,       // 自動再生
        autoplaySpeed: 3000,  // 3秒ごとに切り替え
        dots: false,           // ドットナビゲーションを表示
        arrows: false,         // 前後の矢印を表示
        infinite: true,       // 無限ループ
        speed: 500,           // アニメーション速度
        slidesToShow: 2.7,      // 一度に表示するスライド数
        slidesToScroll: 1,     // 一度にスクロールするスライド数
        rtl: true,
    });
});