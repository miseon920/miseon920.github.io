$(function () {
    $('.main_slicder').slick({
        //setting-name: setting-value
        dots: false,
        infinite: true,
        autoplay: false,
        speed: 600,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false
    });
    var slide_item = $('.main_slicder figure');
    slide_item.eq(0).addClass("on");
    $('.main_slicder').on("afterChange", function (event, slick, current) {
        slide_item.eq(current).addClass("on").siblings().removeClass("on");
    });
});