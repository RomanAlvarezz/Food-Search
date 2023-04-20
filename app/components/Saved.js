const d = document;

export function Saved() {
    const $saved = d.createElement('section');
    $saved.classList.add('saved__modal');

    $saved.innerHTML = `
    <aside class="saved">
        <img class="saved__btn-close" src="./app/assets/icon-close.svg" alt="close icon">
        <h2 class="saved__title">saved recipes</h2>
        <a class="saved__card" href="#/recipe?id=789456">
            <img class="saved__card__image" src="https://fastly.picsum.photos/id/212/200/200.jpg?hmac=U4JUx4PJyTuKdZEPAk2Cw01YZM8rOypF8fTTO39POko" alt="card image">
            <h3 class="saved__card__title">Pasta with Garlic, Scallions, Cauliflower</h3>
            <img class="saved__card__delete" data-id="789456" src="./app/assets/icon-trash.svg">
        </a>
        <a class="saved__card" href="#/recipe?id=789456">
            <img class="saved__card__image" src="https://fastly.picsum.photos/id/212/200/200.jpg?hmac=U4JUx4PJyTuKdZEPAk2Cw01YZM8rOypF8fTTO39POko" alt="card image">
            <h3 class="saved__card__title">Pasta with Garlic, Scallions, Cauliflower</h3>
            <img class="saved__card__delete" data-id="789456" src="./app/assets/icon-trash.svg">
        </a>
        <a class="saved__card" href="#/recipe?id=789456">
            <img class="saved__card__image" src="https://fastly.picsum.photos/id/212/200/200.jpg?hmac=U4JUx4PJyTuKdZEPAk2Cw01YZM8rOypF8fTTO39POko" alt="card image">
            <h3 class="saved__card__title">Pasta with Garlic, Scallions, Cauliflower</h3>
            <img class="saved__card__delete" data-id="789456" src="./app/assets/icon-trash.svg">
            </a>
        <a class="saved__card" href="#/recipe?id=789456">
            <img class="saved__card__image" src="https://fastly.picsum.photos/id/212/200/200.jpg?hmac=U4JUx4PJyTuKdZEPAk2Cw01YZM8rOypF8fTTO39POko" alt="card image">
            <h3 class="saved__card__title">Pasta with Garlic, Scallions, Cauliflower</h3>
            <img class="saved__card__delete" data-id="789456" src="./app/assets/icon-trash.svg">
        </a>
        <a class="saved__card" href="#/recipe?id=789456">
            <img class="saved__card__image" src="https://fastly.picsum.photos/id/212/200/200.jpg?hmac=U4JUx4PJyTuKdZEPAk2Cw01YZM8rOypF8fTTO39POko" alt="card image">
            <h3 class="saved__card__title">Pasta with Garlic, Scallions, Cauliflower</h3>
            <img class="saved__card__delete" data-id="789456" src="./app/assets/icon-trash.svg">
        </a>
        <a class="saved__card" href="#/recipe?id=789456">
            <img class="saved__card__image" src="https://fastly.picsum.photos/id/212/200/200.jpg?hmac=U4JUx4PJyTuKdZEPAk2Cw01YZM8rOypF8fTTO39POko" alt="card image">
            <h3 class="saved__card__title">Pasta with Garlic, Scallions, Cauliflower</h3>
            <img class="saved__card__delete" data-id="789456" src="./app/assets/icon-trash.svg">
        </a>
    </aside>
    `;

    return $saved;
}

d.addEventListener('click', e => {
    if (e.target.matches('.saved__btn-close')) {
        d.querySelector('.saved__modal').style.transform ='translateX(100%)'
    }
})