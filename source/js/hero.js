import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('#swiper-hero', {
  navigation: {
    nextEl: '.hero__button-next',
    prevEl: '.hero__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 0,
      allowTouchMove: false,
    }
  }
});