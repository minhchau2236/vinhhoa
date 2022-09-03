// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  progressBar();
};
function scrollFunction() {
  //Get the button
  var mybutton = document.getElementById("btn--go-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$(document).ready(function () {
  const owlBanner = $(".page__banner .owl-carousel");
  if (owlBanner.length > 0) {
    owlBanner.owlCarousel({
      autoplay: true,
      margin: 30,
      loop: true,
      items: 1,
      nav: false,
      dots: false,
    });
  }

  const owlTestimonial = $("#page__testimonial .owl-carousel");
  if (owlTestimonial.length > 0) {
    owlTestimonial.owlCarousel({
      autoplay: true,
      margin: 30,
      loop: true,
      items: 2,
      nav: false,
      dots: false,
      responsive: {
        // breakpoint from 0 up
        0: {
          items: 1,
        },
        // breakpoint from 768 up
        992: {
          items: 2,
        },
      },
    });
  }
});
