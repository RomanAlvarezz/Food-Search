
const swiper = new Swiper('.swiper', {
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        750: {
            slidesPerView: 3,
            spaceBetween: 15
        }
    }
  });