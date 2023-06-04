import Swiper, { Navigation, Scrollbar, Pagination } from "swiper";

Swiper.use([Navigation, Scrollbar, Pagination]);

const swiper = new Swiper(".swiper-container", {
  //slidesPerView: 7,
  spaceBetween: 20,
  //количество пролистываемых слайдов
  //slidesPerGroup: 4,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 7,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    //currentClass: "swiper-pagination-current",

    //буллеты (точки)
    clickable: true,
    //динамические буллеты
    //dynamicBullets: true,
    //кастомные буллеты
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  scrollbar: {
    el: ".swiper-slide",
    dragSize: 6,
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev",
  },
});
