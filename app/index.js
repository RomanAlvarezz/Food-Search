const $root = document.querySelector('.root'),
$btnMobile = document.querySelector('.btn-mobile'),
$btnDesktop = document.querySelector('.btn-desktop');

document.addEventListener('click', e => {
    if (e.target.matches('.btn-mobile')) {
        e.target.classList.add('btn-selected');
        $btnDesktop.classList.remove('btn-selected');
        $root.style.maxWidth = '320px';
    }
    if (e.target.matches('.btn-desktop')) {
        e.target.classList.add('btn-selected');
        $btnMobile.classList.remove('btn-selected');
        $root.style.maxWidth = '950px';
    }
    console.log(e.target)
})

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