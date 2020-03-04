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
  // email = $('#input-email').val()
  // ValidateEmail(email)
  alert('Запрос на подписку сообщений был отправлен.')
}


// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }


$(document).ready(function (){
  $("#goto-contact-form").click(function (){
      $('html, body').animate({
          scrollTop: $("#contact-form").offset().top
      }, 1500);
  });
});