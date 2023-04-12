const d = document;

export function Fridge() {
    const $fridge = d.createElement('div');
    $fridge.classList.add('fridge');

    $fridge.innerHTML = `
    <div class="fridge__text">
        <h1 class="fridge__title">Cook with what you have!</h1>
        <p class="fridge__info">Don't want to go to the store? No problem! Enter the ingredients you have on hand, and we'll show you recipes you could make. For best results, enter 10 or more ingredients below, including staples like salt, pepper, and olive oil. The ingredients you add here will sync with your Virtual Pantry on Android. Any changes in one will update the other</p>
    </div>
    <div class="fridge__mid">
        <div class="fridge__input-container">
            <input class="fridge__input" placeholder="Enter your ingredient..." type="text">
            <button class="fridge__input-btn">+</button>
        </div>
        <button class="fridge__btn">get recipe</button>
    </div>
    <div class="fridge__ingredients__container">
        <h2 class="fridge__ingredients__title">your pantry ingredients</h2>
        <div class="fridge__ingredients">
            <span class="fridge__ingredient">Tomato<i class="fa-solid fa-xmark fridge__ingredient-xmark"></i></span>
            <span class="fridge__ingredient">Pepper<i class="fa-solid fa-xmark fridge__ingredient-xmark"></i></span>
            <span class="fridge__ingredient">Meat<i class="fa-solid fa-xmark fridge__ingredient-xmark"></i></span>
        </div>
    </div>
    `;

    return $fridge;
}

d.addEventListener('click', e => {
    let $element = e.target;

    if($element.matches('.fridge__ingredient-xmark')) {
        $element.parentElement.remove();
    }

    if ($element.matches('.fridge__input-btn')) {
        const $input = d.querySelector('.fridge__input')
        let ingredient = $input.value.trim();
        if (ingredient) {
            const $ingredients = d.querySelector('.fridge__ingredients');
            $ingredients.insertAdjacentHTML('afterbegin', `<span class="fridge__ingredient">${ingredient}<i class="fa-solid fa-xmark fridge__ingredient-xmark"></i></span>`);
        }
    }
})