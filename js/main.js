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

  });