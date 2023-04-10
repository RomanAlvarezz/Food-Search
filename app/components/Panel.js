const d = document;

export function Panel() {
    const $panel = d.createElement('section');
    $panel.classList.add('panel');

    $panel.innerHTML = `
    <div class="panel__options">                  
        <div class="panel__option">
            <img class="panel__icon" src="./app/assets/icon-bookmark.svg" alt="panel icon">
            <h2 class="panel__section-name">Saved</h2>
        </div>
        <div class="panel__options__group">
            <div class="panel__option">
                <img class="panel__icon" src="./app/assets/icon-filter.svg" alt="panel icon">
                <h2 class="panel__section-name">Filter</h2>
            </div>
            <div class="panel__option">
                <img class="panel__icon" src="./app/assets/icon-reset.svg" alt="panel icon">
                <h2 class="panel__section-name">Reset</h2>
            </div>
            <div class="panel__option">
                <img class="panel__icon" src="./app/assets/icon-fridge.svg" alt="panel icon">
                <h2 class="panel__section-name">Fridge</h2>
            </div>
        </div>
    </div>  
    <div class="panel__content">
    </div>
    `;

    return $panel;
}