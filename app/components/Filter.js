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
        <span class="filter__option filter__option-active">african</span>
        <span class="filter__option">american</span>
        <span class="filter__option">british</span>
        <span class="filter__option">cajun</span>
        <span class="filter__option">caribbean</span>
        <span class="filter__option">chinese</span>
        <span class="filter__option">eastern</span>
        <span class="filter__option">european</span>
        <span class="filter__option">french</span>
        <span class="filter__option">greek</span>
        <span class="filter__option">indian</span>
        <span class="filter__option">irish</span>
        <span class="filter__option">italian</span>
        <span class="filter__option">japanese</span>
        <span class="filter__option">jewish</span>
        <span class="filter__option">korean</span>
        <span class="filter__option">latin american</span>
        <span class="filter__option">mediterranean</span>
        <span class="filter__option">mexican</span>
        <span class="filter__option">middle eastern</span>
        <span class="filter__option">nordic</span>
        <span class="filter__option">southern</span>
        <span class="filter__option">spanish</span>
        <span class="filter__option">thai</span>
        <span class="filter__option">vietnamese</span>
    </div>    
    `;

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
            return;
        }

        if ($element.classList.contains('filter__option') &&
        $element.classList.contains('filter__option-active')) {
            $element.classList.remove('filter__option-active');
            console.log('Desactivamos');
            return;
        }

        if ($element.classList.contains('filter__option') &&
        !($element.classList.contains('filter__option-active'))){
            $element.classList.add('filter__option-active');
            console.log('Activamos');
        }
    })

    return $filter;
}