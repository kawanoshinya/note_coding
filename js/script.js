// ハンバーガーメニュー
$(function () {
    $(".gnav-btn").on("click", function () {
        $("#global-nav").toggleClass("open");
        $("#bglayer").toggleClass("open");
        $(this).toggleClass("open");
    });
});
$(function () {
    $("#bglayer").on("click", function () {
        $("#global-nav").toggleClass("open");
        $(".gnav-btn").toggleClass("open");
        $(this).toggleClass("open");
    });
});

// アコーディオンメニュー
$(function () {
    $('.js-menu__item__link').each(function () {
        $(this).on('click', function () {
            $(this).toggleClass('on');
            $("+.submenu", this).slideToggle();
            return false;
        });
    });
});

// スライダー
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
        897: {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 56,
        },
        481: {
            slidesPerView: 3,
            centeredSlides: true,
        },
    },
});

// スムーススクロール(header考慮)
var scroll = new SmoothScroll('a[href*="#"]', {
    header: '#header',
});

// ・スクロールアニメーション
AOS.init()


