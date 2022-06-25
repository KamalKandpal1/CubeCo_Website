let bars = document.querySelector(".fa-bars");
let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let mouseDown = true;



bars.addEventListener("click", () => {
  if (mouseDown === true) {
  bars.classList.add("active");
  menu.classList.add("active");
  toggle.classList.add("active");
  mouseDown = false;
  } else {
     bars.classList.remove("active"); 
      menu.classList.remove("active");
    toggle.classList.remove("active");
    mouseDown = true;
  }
})
// Scroll to reveal HTML elements
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }

}

// Specifically for the JQuery Owl Carousel 
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})