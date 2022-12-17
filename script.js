$(document).ready(function(){
   $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
         $('.navbar').removeClass("sticky");    
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
});

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
   $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });


// typing animation script
var typed = new Typed(".typing",{
  strings:["Developer", "freelancer", "Designer", "Photographer"],
  typeSpeed:100,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typing-2",{
  strings:["Developer", "freelancer", "Designer", "Photographer"],
  typeSpeed:100,
  backSpeed: 60,
  loop: true,
});
    
}); 
    // owl carousel script
   //$(".carousel").owlCarousel({
     //   margine: 20,
      //  loop: true,
       // autoplayTimeOut:2000,
        //autoplayHoverPause: true,
       // responsive:{
         //   0%{
           //     items: 1,
             //   nav: false
               // }
      //  }
 // });





// Read more script
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}