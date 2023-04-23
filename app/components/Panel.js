import { Filter } from './Filter.js'
import { Fridge } from './Fridge.js'

const d = document;

export function Panel() {
    const $panel = d.createElement('section');
    $panel.classList.add('panel');

    $panel.innerHTML = `
    <div class="panel__options">                  
        <div class="panel__option" data-paneloption="saved">
            <img class="panel__icon" data-paneloption="saved" src="./app/assets/icon-bookmark.svg" alt="panel icon">
            <h2 class="panel__section-name" data-paneloption="saved">Saved</h2>
        </div>
        <div class="panel__options__group">
            <div class="panel__option" data-paneloption="filter">
                <img class="panel__icon" data-paneloption="filter" src="./app/assets/icon-filter.svg" alt="panel icon">
                <h2 class="panel__section-name" data-paneloption="filter">Filter</h2>
            </div>
            <div class="panel__option" data-paneloption="reset">
                <img class="panel__icon" data-paneloption="reset" src="./app/assets/icon-reset.svg" alt="panel icon">
                <h2 class="panel__section-name" data-paneloption="reset">Reset</h2>
            </div>
            <div class="panel__option" data-paneloption="fridge">
                <img class="panel__icon" data-paneloption="fridge" src="./app/assets/icon-fridge.svg" alt="panel icon">
                <h2 class="panel__section-name" data-paneloption="fridge">Fridge</h2>
            </div>
        </div>
    </div>  
    <div class="panel__content">
    </div>
    `;

    setTimeout(()=>{
        const panelContent = localStorage.getItem('panelContent') || 'fridge';
        const $panelContent = d.querySelector('.panel__content');

        if (panelContent == 'fridge') {
            $panelContent.appendChild(Fridge());
        } else {
            $panelContent.appendChild(Filter()); 
        }
    }, 5);

    return $panel;
}


d.addEventListener('click', e => {
    const $panelContent = d.querySelector('.panel__content');
    const $option = e.target;

    if ($option.matches('.panel__option') ||  $option.matches('.panel__option *')){

        switch ($option.dataset.paneloption) {
            case 'filter':
                localStorage.setItem('panelContent', 'filter');
                $panelContent.innerHTML = '';
                $panelContent.appendChild(Filter()); 
                break;
            case 'fridge':
                localStorage.setItem('panelContent', 'fridge')
                $panelContent.innerHTML = '';
                $panelContent.appendChild(Fridge()); 
                break;
            case 'saved':
                d.querySelector('.saved__modal').style.transform = 'translateX(0)';
                break;
            case 'reset':
                if($panelContent.firstElementChild.className == 'filter') {
                    const $activeOptions = d.querySelectorAll('.filter__option-active');
                    $activeOptions.forEach(op => op.classList.remove('filter__option-active'));

                    const filterObj = JSON.parse(localStorage.getItem('filter')) || {};
                    if(!(Object.keys(filterObj).length === 0)) {
                        for (const category in filterObj) {
                            filterObj[category] = []
                        }
                    }
                    localStorage.setItem('filter', JSON.stringify(filterObj));
                    return;
                } 
                if ($panelContent.firstElementChild.className == 'fridge') {
                    const $ingredients = d.querySelectorAll('.fridge__ingredient');
                    $ingredients.forEach($ingredient => $ingredient.remove());

                    let fridgeArr = JSON.parse(localStorage.getItem('fridge')) || [];
                    if (fridgeArr.length > 0) fridgeArr = [];
                    localStorage.setItem('fridge', JSON.stringify(fridgeArr));
                    return;
                }

                break;
        }
    }
})
