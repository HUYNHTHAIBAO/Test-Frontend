const menu = document.querySelector(".menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menuBg = document.querySelector(".menu-bg");
menuToggle.addEventListener("click", function (e) {
  menu.classList.add("is-active");
  menuBg.classList.add("is-active");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("is-active");
    menuBg.classList.remove("is-active");
  }
});
menuClose.addEventListener("click", function (e) {
  menu.classList.remove("is-active");
  menuBg.classList.remove("is-active");
});

$(".banner-list").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
});
// service
$(".service-list").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 800,
    slidesToScroll: 4,
    slidesToShow: 4,
    responsive: [
        {
          breakpoint: 1080,
          settings: {
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 3,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            infinite: true,
            slidesToScroll: 2,
            dots: false,
            autoplay: true,
            autoplaySpeed: 800,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplaySpeed: 800,
            arrows: false,
          },
        },
  ]
  });