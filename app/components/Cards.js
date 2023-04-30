const d = document;

export function Cards(title, recipes) {
    const $section = d.createElement('section');
    $section.classList.add('section');

    const $title = d.createElement('h2');
    $title.classList.add('section__title');
    $title.textContent = title;

    const $cardsContainer = d.createElement('div');
    $cardsContainer.classList.add('card__container');

    let $cards = '';
    recipes.forEach(recipe => $cards += `
    <a class="card" href="#/recipe?id=${recipe.id}">
        <img class="card__img" src="${recipe.image || './app/assets/unknown-Image.webp'}" alt="card image">
        <h3 class="card__title">${recipe.title}</h3>
    </a>
    `);

    $cardsContainer.innerHTML = $cards;

    $section.appendChild($title);
    $section.appendChild($cardsContainer);

    return $section;
}