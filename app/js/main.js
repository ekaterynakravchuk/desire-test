$(function() {

  $('.header__btn').on('click', function() {
      $('.rightside-menu').removeClass('rightside-menu--close')
  });
  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close')
  });
  
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.contact__slider-items').slick({
    dots: true,
    slidesToShow: 10,
    slidesToScroll: 10,
    arrows: false
  });

  let mixer = mixitup('.gallery__inner', {
    load: {
        filter: '.living'
    }
  });

  

})