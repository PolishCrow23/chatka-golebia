import Swiper from "swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// Now you can use Swiper
const swiper1 = new Swiper(".blog-highlight-swiper", {
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: ".blog-highlight-swiper-button-next",
    prevEl: ".blog-highlight-swiper-button-prev",
  },
  // ...
});

const swiper2 = new Swiper(".our-stories-swiper", {
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: ".our-stories-swiper-button-next",
    prevEl: ".our-stories-swiper-button-prev",
  },
  // ...
});

const swiper3 = new Swiper(".news-swiper", {
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: ".news-swiper-button-next",
    prevEl: ".news-swiper-button-prev",
  },
  // ...
});
