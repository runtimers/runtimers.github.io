//$(document).ready(function(){
//   $('.hamburger').click(function(){
//        $(this).toggleClass('open');
//        $('.menu-overlay').toggleClass('open');
//     });
//});

$('.hamburger').on('click', function () {
  $('.menu-overlay').addClass('open');
});

$( '.menu-overlay' ).on("click", function(){
  $('.menu-overlay').removeClass('open');
});
