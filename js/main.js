$(document).ready(function () {
  var dropdowmMenu = $('.menu-arrow');
    dropdowmMenu.on("click", function (event) {
      $(".navbar-tablet").toggleClass("navbar-tablet--visible");
  });

  var searchButton = $('.search-icon-mobile');
  searchButton.on("click", function (event) {
    $(".search-form").toggleClass("search-form--visible");
  });

  var menuButton = $('.menu-s');
  menuButton.on("click", function (event) {
    $(".header-container_mobile").toggleClass("header-container_mobile--visible");
  });

  $('.tabs-triggers__item').click(function (e) {
    e.preventDefault();
    $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
    $('.tabs-content__item').removeClass('tabs-content__item--active');

    $(this).addClass('tabs-triggers__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');
  });

  $('.tabs-triggers__item:first').click();

    function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 766 ? 'vertical' : 'horizontal';

    return direction;
  }  

   var usefulSwiper = new Swiper('.useful-slider', {
    // Optional parameters 
    loop: true,
    direction: getDirection(),
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
    },
    on: {
        resize: function () {
          usefulSwiper.changeDirection(getDirection());
        }
      },

    keyboard: {
      enabled: true,
    },
  });
  $('.useful-slider').on({
    mouseenter: function () {
      usefulSwiper.autoplay.stop();
    },
    mouseleave: function () {
      usefulSwiper.autoplay.start();
    }
  });

  });

  // var mySwiper = new Swiper('.swiper-container', {
  //   // Optional parameters
  //   loop: true,

  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });