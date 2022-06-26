$(document).ready(function () {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<i class="icon-arrow-right" aria-hidden="true"></i>',
    prevArrow: '<i class="icon-arrow-left" aria-hidden="true"></i>',
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.slider-about').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    nextArrow: '<i class="icon-arrow-right" aria-hidden="true"></i>',
    prevArrow: '<i class="icon-arrow-left" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'dots',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
          dots: false/* ТУТ */
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.slider-courses').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    nextArrow: '<i class="icon-arrow-right" aria-hidden="true"></i>',
    prevArrow: '<i class="icon-arrow-left" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'dots',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
});



$(document).ready(function () {
  $('.slider-teachers').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    nextArrow: '<i class="icon-arrow-right" aria-hidden="true"></i>',
    prevArrow: '<i class="icon-arrow-left" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'dots-teachers',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          dots: false

        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.campus-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    nextArrow: '<i class="icon-arrow-right" aria-hidden="true"></i>',
    prevArrow: '<i class="icon-arrow-left" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'campus-dots',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          infinite: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          dots: false

        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.faqs-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: '<i class="icon-arrow-right" aria-hidden="true"></i>',
    prevArrow: '<i class="icon-arrow-left" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'faqs__dots',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: true

        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
});


$(document).ready(function () {
  $('.item-inside_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: '<i class="icon-arrow-right" aria-hidden="true"></i>',
    prevArrow: '<i class="icon-arrow-left" aria-hidden="true"></i>',
    dots: true,
    dotsClass: 'inside-faqs__dots',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: true

        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
});