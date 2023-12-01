$(document).ready(function () {
    $('.speakers-carousel').slick({
      infinite: true,
      slidesToShow: 3, // Adjust the number of speakers shown at once
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
    });
  });