$(function() {
  // ハンバーガーメニュー
$('.burger-btn').on('click', function() {
  $('.header-nav').toggleClass('open');
  $('.burger-musk').fadeToggle(300);
  $('.bar').toggleClass('cross');
});
// パララックス
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('#header-img').css({
    transform:'scale('+(100+scroll/10)/100+')',
    top:-(scroll/50) + "%",
  });
});
// aos
AOS.init({
  offset: 100,
  duration: 1000,
  easing: 'ease',
  delay: 200,
  once: true,
  anchorPlacement: 'bottom-center',
});
})