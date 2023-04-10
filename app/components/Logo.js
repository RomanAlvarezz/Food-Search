export function Logo(){
    const $search = document.createElement('a');
    $search.href = '#/';
    $search.classList.add('logo');

    $search.innerHTML = `
    <p class="logo__title">linguini's kitchen</p>
    <p class="logo__subtitle-container">
        <span class="logo__subtitle">the best recipes</span>
        <img class="logo__baguette" src="./app/assets/icon-bread.svg" alt="bread icon">
    </p>
    `;

    return $search;
}