new WOW().init();

var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  allowTouchMove: false,
})

ready();

function sendRequest() {
  alert('Запрос на подписку новостей был отправлен.')
}

$(document).ready(function (){
  $("#goto-contact-form").click(function (){
      $('html, body').animate({
          scrollTop: $("#contact-form").offset().top
      }, 1500);
  });
});

