import SliderMovement from '../helpers/swiper.js';

const d = document;

export function Slider(title, recipes) {
    const $section = d.createElement('section');
    $section.classList.add('section');

    const $title = d.createElement('h2');
    $title.classList.add('section__title');
    $title.textContent = title;

    const $sliderContainer = d.createElement('div');
    $sliderContainer.classList.add('slider__container');

    let $slides = '';
    recipes.forEach(recipe => $slides += `
    <div class="swiper-slide">
        <a class="slider__card" href="#/recipe?id=${recipe.id}">
            <h3 class="slider__card__title">${recipe.title}</h3>
            <img class="slider__card__img" src="${recipe.image}" alt="">
        </a>
    </div>
    `);

    $sliderContainer.innerHTML = `
    <div class="swiper">
        <div class="swiper-wrapper">
            ${$slides}
        </div>
    </div>
    <div class="swiper-button-prev"><img src="./app/assets/icon-prev.svg"></div>
    <div class="swiper-button-next"><img src="./app/assets/icon-next.svg"></div> 
    `;

   /*$sliderContainer.innerHTML = `
    <div class="swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <a class="slider__card" href="#10">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/10/300" alt="">
            </a>
        </div>
        <div class="swiper-slide">
            <a class="slider__card" href="#11">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/11/300" alt="">
            </a>
        </div>
        <div class="swiper-slide">
            <a class="slider__card" href="#12">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/12/300" alt="">
            </a>
        </div>
        <div class="swiper-slide">
            <a class="slider__card" href="#13">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/13/300" alt="">
            </a>
        </div>
        <div class="swiper-slide">
            <a class="slider__card" href="#14">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/14/300" alt="">
            </a>
        </div>
        <div class="swiper-slide">
            <a class="slider__card" href="#15">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/15/300" alt="">
            </a>
        </div>
        <div class="swiper-slide">
            <a class="slider__card" href="#16">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/16/300" alt="">
            </a>
        </div>
        <div class="swiper-slide">
            <a class="slider__card" href="#17">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/17/300" alt="">
            </a>
        </div>
        <div class="swiper-slide">
            <a class="slider__card" href="#18">
                <h3 class="slider__card__title">Coconouts with salad rice from Colombia</h3>
                <img class="slider__card__img" src="https://picsum.photos/id/19/300" alt="">
            </a>
        </div>
    </div>
    </div>
    <div class="swiper-button-prev"><img src="./app/assets/icon-prev.svg"></div>
    <div class="swiper-button-next"><img src="./app/assets/icon-next.svg"></div> 
    `;*/

    $section.appendChild($title);
    $section.appendChild($sliderContainer);

    setTimeout(SliderMovement, 10);

    return $section;
}