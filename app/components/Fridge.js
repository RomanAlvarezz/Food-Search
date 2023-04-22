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
            
        </div>
    </div>
    `;


    setTimeout(renderIngredients, 10);
    return $fridge;
}


function renderIngredients() {
    let html = '';
    const $ingredientsContainer = d.querySelector('.fridge__ingredients');
    console.log($ingredientsContainer);
    $ingredientsContainer.innerHTML = '';
    const fridgeArr = JSON.parse(localStorage.getItem('fridge')) || [];

    if (!(fridgeArr.length === 0)) {
        fridgeArr.forEach(ingredient => html += `
        <span class="fridge__ingredient">
            ${ingredient}
            <i data-ingredient="${ingredient}" class="fa-solid fa-xmark fridge__ingredient-xmark"></i>
        </span>`);
    }

    $ingredientsContainer.innerHTML = html;
}

d.addEventListener('click', e => {
    let $element = e.target;

    if($element.matches('.fridge__ingredient-xmark')) {
        const fridgeArr = JSON.parse(localStorage.getItem('fridge')) || [];
        const index = fridgeArr.indexOf($element.dataset.ingredient);
        fridgeArr.splice(index,1);
        localStorage.setItem('fridge', JSON.stringify(fridgeArr));
        //renderIngredients();
        $element.parentElement.remove();
    }

    if ($element.matches('.fridge__input-btn')) {
        const $input = d.querySelector('.fridge__input')
        let ingredient = $input.value.trim();

        if (ingredient) {
            const fridgeArr = JSON.parse(localStorage.getItem('fridge')) || [];
            fridgeArr.push(ingredient);
            localStorage.setItem('fridge', JSON.stringify(fridgeArr));
            //renderIngredients();
            const $ingredients = d.querySelector('.fridge__ingredients');
            $ingredients.insertAdjacentHTML('afterbegin', `<span class="fridge__ingredient">${ingredient}<i class="fa-solid fa-xmark fridge__ingredient-xmark"></i></span>`);
        }
    }
})