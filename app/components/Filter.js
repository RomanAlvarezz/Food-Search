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
    </div>    
    `;

    setTimeout(()=>{
        let initialContent = '';
        api.CUISINE.forEach(textItem => initialContent += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
        d.querySelector('.filter__content').innerHTML = initialContent;
    }, 10);

    return $filter;
}

function categorySelected(category) {
    let html = '';
    const $filterContent = d.querySelector('.filter__content');
    $filterContent.innerHTML = '';

    switch (category) {
        case 'CUISINE':
            api[category].forEach(textItem => html += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
            break;
        case 'DIET':
            api[category].forEach(textItem => html += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
            $filterContent.insertAdjacentHTML('afterbegin', `
            <button class="filter__btn-info"><p>diet</p><p>info</p></button>`);
            break;
        case 'TYPE':
            api[category].forEach(textItem => html += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
            break;
        case 'INTOLERANCES':
            api[category].forEach(textItem => html += `<span class="filter__option" data-state="inactive">${textItem}</span>`);
            break;
    }

    $filterContent.insertAdjacentHTML('afterbegin', html);
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