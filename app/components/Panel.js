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

    return $panel;
}

//Por defecto va a cargar el filtro;
setTimeout(()=>{
    const $panelContent = d.querySelector('.panel__content');
    $panelContent.appendChild(Filter()); 
}, 100)

d.addEventListener('click', e => {
    const $option = e.target;

    if ($option.matches('.panel__option') ||  $option.matches('.panel__option *')){

        switch ($option.dataset.paneloption) {
            case 'filter':
                $panelContent.innerHTML = '';
                $panelContent.appendChild(Filter()); 
                break;
            case 'fridge':
                $panelContent.innerHTML = '';
                $panelContent.appendChild(Fridge()); 
                break;
            case 'saved':
                d.querySelector('.saved__modal').style.transform = 'translateX(0)';
                break;
            case 'reset':
            console.log('este es el reseteo, falta codear su funcinalidad');
                break;
        }
    }
})
