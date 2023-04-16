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
    <a class="card" href="#${recipe.id}">
        <img class="card__img" src="${recipe.image}" alt="card image">
        <h3 class="card__title">${recipe.title}</h3>
    </a>
    `);

    $cardsContainer.innerHTML = $cards;

    /*$cardsContainer.innerHTML = `
        <a class="card" href="#/20">
            <img class="card__img" src="https://picsum.photos/id/20/300" alt="card image">
            <h3 class="card__title">Partlitc pasta with olive oil</h3>
        </a>
        <a class="card" href="#/21">
            <img class="card__img" src="https://picsum.photos/id/21/300" alt="card image">
            <h3 class="card__title">Partlitc pasta with olive oil</h3>
        </a>
        <a class="card" href="#/22">
            <img class="card__img" src="https://picsum.photos/id/22/300" alt="card image">
            <h3 class="card__title">Partlitc pasta with olive oil</h3>
        </a>
        <a class="card" href="#/23">
            <img class="card__img" src="https://picsum.photos/id/23/300" alt="card image">
            <h3 class="card__title">Partlitc pasta with olive oil</h3>
        </a>
        <a class="card" href="#/24">
            <img class="card__img" src="https://picsum.photos/id/24/300" alt="card image">
            <h3 class="card__title">Partlitc pasta with olive oil</h3>
        </a>
        <a class="card" href="#/25">
            <img class="card__img" src="https://picsum.photos/id/25/300" alt="card image">
            <h3 class="card__title">Partlitc pasta with olive oil</h3>
        </a>
    `;*/

    $section.appendChild($title);
    $section.appendChild($cardsContainer);

    return $section;
}