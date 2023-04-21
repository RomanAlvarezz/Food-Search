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
        renderOptions('cuisine');
    }, 10);

    return $filter;
}

function renderOptions(category){
    let html = '';
    const $filterContent = d.querySelector('.filter__content');
    $filterContent.innerHTML = '';
    const filterObj = JSON.parse(localStorage.getItem('filter')) || {};

    if(!(filterObj[category])) {
        filterObj[category] = []; 
    }

    if(filterObj[category].length === 0){
        api[category].forEach(option => html += `<span class="filter__option" data-state="inactive">${option}</span>`);
    } else {
        api[category].forEach(option => {
            if (filterObj[category].includes(option)) {
                html += `<span class="filter__option filter__option-active" data-state="inactive">${option}</span>`;
            } else {
                html += `<span class="filter__option" data-state="inactive">${option}</span>`;
            }
        })
    }


    $filterContent.insertAdjacentHTML('afterbegin', html);
}

function optionSelected($op) {
    const category = d.querySelector('.filter__category-active').textContent;
    const filterObj = JSON.parse(localStorage.getItem('filter')) || {};

    if ($op.matches('.filter__option-active')) {
        $op.classList.remove('filter__option-active');

        const index = filterObj[category].indexOf($op.textContent);
        filterObj[category].splice(index, 1);
    } else {
        $op.classList.add('filter__option-active');

        if(!(filterObj[category])){
            filterObj[category] = []; 
        }
        filterObj[category].push($op.textContent);
    }

    localStorage.setItem('filter', JSON.stringify(filterObj));
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

        renderOptions($element.textContent);

        return;
    }

    if ($element.matches('.filter__option')){
        optionSelected($element);
    }
})