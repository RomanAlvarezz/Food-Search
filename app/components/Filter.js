import api from '../helpers/api.js';

const d = document;

export function Filter() {
    const $filter = d.createElement('div');
    $filter.classList.add('filter');

    $filter.innerHTML = `
    <div class="filter__categories">
        <h3 class="filter__category filter__category-active">cuisine</h3>
        <h3 class="filter__category">type</h3>
        <h3 class="filter__category">diet</h3>
        <h3 class="filter__category">intolerances</h3>
    </div> 
    <div class="filter__content">
        <button class="filter__btn-info"><p>diet</p><p>info</p></button>
        <span class="filter__option filter__option-active" data-state="active">african</span>
        <span class="filter__option" data-state="inactive">american</span>
        <span class="filter__option" data-state="inactive">british</span>
        <span class="filter__option" data-state="inactive">cajun</span>
        <span class="filter__option" data-state="inactive">caribbean</span>
        <span class="filter__option" data-state="inactive">chinese</span>
        <span class="filter__option" data-state="inactive">eastern</span>
        <span class="filter__option" data-state="inactive">european</span>
        <span class="filter__option" data-state="inactive">french</span>
        <span class="filter__option" data-state="inactive">greek</span>
        <span class="filter__option" data-state="inactive">indian</span>
        <span class="filter__option" data-state="inactive">irish</span>
        <span class="filter__option" data-state="inactive">italian</span>
        <span class="filter__option" data-state="inactive">japanese</span>
        <span class="filter__option" data-state="inactive">jewish</span>
        <span class="filter__option" data-state="inactive">korean</span>
        <span class="filter__option" data-state="inactive">latin american</span>
        <span class="filter__option" data-state="inactive">mediterranean</span>
        <span class="filter__option" data-state="inactive">mexican</span>
        <span class="filter__option" data-state="inactive">middle eastern</span>
        <span class="filter__option" data-state="inactive">nordic</span>
        <span class="filter__option" data-state="inactive">southern</span>
        <span class="filter__option" data-state="inactive">spanish</span>
        <span class="filter__option" data-state="inactive">thai</span>
        <span class="filter__option" data-state="inactive">vietnamese</span>
    </div>    
    `;

    return $filter;
}



function categorySelected(category) {
    let html = '';
    const $filterContent = d.querySelector('.filter__content');

    switch (category) {
        case 'CUISINE':
            api[category].forEach(textItem => html += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
            break;
        case 'DIET':
            api[category].forEach(textItem => html += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
            break;
        case 'TYPE':
            api[category].forEach(textItem => html += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
            break;
        case 'INTOLERANCES':
            api[category].forEach(textItem => html += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
            break;
    }

    $filterContent.innerHTML = html;
}

function optionSelected($op) {
    if ($op.matches('.filter__option-active')) {
        $op.classList.remove('filter__option-active');
    } else {
        $op.classList.add('filter__option-active');
    }
}

d.addEventListener('click', e => {
    let $element = e.target;

    if ($element.matches('.filter__btn-info') || $element.matches('.filter__btn-info *')){
        d.querySelector('.diets__modal').style.transform = 'translateX(0)';
        return;
    }

    if ($element.classList.contains('filter__category') &&
    !($element.classList.contains('filter__category-active'))) {
        d.querySelector('.filter__category-active').classList.remove('filter__category-active');
        $element.classList.add('filter__category-active');

        categorySelected($element.textContent.toUpperCase());

        return;
    }

    if ($element.matches('.filter__option')){
        optionSelected($element);
    }
})