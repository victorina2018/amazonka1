$(document).ready(function() {
  $(".feedback-cards").slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

function goToAnchor(anchor) {
    var loc = document.location.toString().split('#')[0];
    document.location = loc + '#' + anchor;
    return false;
}