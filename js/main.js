$(function () {
  $('.header-slider').slick({
    arrows: false,
    vertical: true,
    dots: true,
    autoplay: 3000,
  });

  $('.menu-btn').on('click', function () {
    $('.menu-list').slideToggle();
  })
});