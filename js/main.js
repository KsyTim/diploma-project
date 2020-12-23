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
    spaceBetween: 8,
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

  var bookmarkOnFirst = $(".bookmark-on-first");
  bookmarkOnFirst.on("click", function (event) {
    bookmarkOnFirst.toggleClass("bookmark-off");
  });
  var bookmarkOnSecond = $(".bookmark-on-second");
  bookmarkOnSecond.on("click", function (event) {
    bookmarkOnSecond.toggleClass("bookmark-off");    
  });
  $('.bookmark-on-second').click();
  var bookmarkOnThird = $(".bookmark-on-third");
  bookmarkOnThird.on("click", function (event) {
    bookmarkOnThird.toggleClass("bookmark-off");
  });
  var bookmarkOnFourth = $(".bookmark-on-fourth");
  bookmarkOnFourth.on("click", function (event) {
    bookmarkOnFourth.toggleClass("bookmark-off");
  });
  var bookmarkOnFifth = $(".bookmark-on-fifth");
  bookmarkOnFifth.on("click", function (event) {
    bookmarkOnFifth.toggleClass("bookmark-off");
  });
  var bookmarkOnSixth = $(".bookmark-on-sixth");
  bookmarkOnSixth.on("click", function (event) {
    bookmarkOnSixth.toggleClass("bookmark-off");
  });
  var bookmarkOnArticleFirst = $(".bookmark-on-article_first");
  bookmarkOnArticleFirst.on("click", function (event) {
    bookmarkOnArticleFirst.toggleClass("bookmark-off-article_first");
  });

  var readersSwiper = new Swiper('.readers-choice', {
  // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
    },
    effect: 'fade',
    keyboard: {
        enabled: true,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
    },
  });

  $('.readers-choice').on({
    mouseenter: function () {
      readersSwiper.autoplay.stop();
    },
    mouseleave: function () {
      readersSwiper.autoplay.start();
    }
  });

    $(".subscribe-form").validate({
    errorClass: "subscribe-invalid",
    messages: {
      'subscription-input': {
        required: "Пожалуйста введите Ваш email",
        email: "Необходимо ввести email в формате name@domain.com"
      },
    },
  });
  $(".modal-window-form").validate({
    errorClass: "modal-invalid",
    messages: {
      'modal-accept': {
        required: "Для того, чтобы отправить обращение, необходимо дать согласие на обработку персональных данных",
      },
      'direction': {
        required: "Пожалуйста выберите тему обращения",
      },
      'input-email': {
        required: "Пожалуйста введите Ваш email",
        email: "Необходимо ввести email в формате name@domain.com"
      },
    },
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal-close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  $(document).on('keydown', closeByButton);
  $('.modal-overlay').on('click', closeModal);

  function openModal(e) {
    e.preventDefault();
    var modalOverlay = $('.modal-overlay');
    var modalWindow = $('.modal-window');
    modalOverlay.addClass('modal-overlay--visible');
    modalWindow.addClass('modal-window--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal-overlay');
    var modalWindow = $('.modal-window');
    modalOverlay.removeClass('modal-overlay--visible');
    modalWindow.removeClass('modal-window--visible');
  }

  function closeByButton(e) {
    var modalOverlay = $('.modal-overlay');
    var modalWindow = $('.modal-window');
    var key = e.which;

    if (key == 27) {
      modalOverlay.removeClass('modal-overlay--visible');
      modalWindow.removeClass('modal-window--visible');
    } else {
      false;
    }
  };
  var articleSwiper = new Swiper('.article-slider', {
    loop: true,
    effect: 'fade',

    // Navigation arrows
    navigation: {
      nextEl: '.article-slider-next',
      prevEl: '.article-slider-prev',
    },

    keyboard: {
      enabled: true,
    },
  });

  var extraComments = $('.comments-section_button');
    extraComments.on("click", function (event) {       
    $(".comments-section-container_hidden").toggleClass("comments-section-container_visible");
  });

  $(".comments-section-form").validate({
    errorClass: "comments-invalid",
    messages: {
      'comments-section-form_message': {
        required: "* Пожалуйста напишите сообщение",
        minlength: "* Минимальное количество символов - 100"
      },
    },
  });

  $(function(){

  $('.page-up-arrow').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#page-up').offset().top }, 3000);
    e.preventDefault();
  });

  });

});
