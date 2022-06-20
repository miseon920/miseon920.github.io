$(function () {
  $(".topBanner i").click(function () {
    $(".topBanner").slideUp();
  });
  $(".mainSlider").on(
    "init afterChange",
    function (event, slick, currentSlide) {
      var current = $(".slick-current");
      //console.log(currentSlide);
      current.addClass("on").siblings().removeClass("on");
      //num _ slideNum
      //console.log(slick);
      var total = slick.slideCount;
      $(".slideNum span").text(
        currentSlide ? currentSlide + 1 + "/" + total : 1 + "/" + total
      );
    }
  );
  $(".mainSlider").slick({
    // autoplay: true,
    dots: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  $(".mainArrow i:first-child").click(function () {
    $(".mainSlider").slick("slickPrev");
  });
  $(".mainArrow i:last-child").click(function () {
    $(".mainSlider").slick("slickNext");
  });
});

function searchAction() {
  //console.log("gggg?");
  var searchValue = $('#searchForm input[type="text"]').val();
  //console.log(searchValue.length);
  if (searchValue.length < 5 || searchValue == "") {
    alert("최소 5자 이상 입력해 주세요");
    $('#searchForm input[type="text"]').focus();
  } else {
    alert(searchValue);
  }
}
