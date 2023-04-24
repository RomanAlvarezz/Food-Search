const d = document;

export function Saved() {
    const $saved = d.createElement('section');
    $saved.classList.add('saved__modal');

    $saved.innerHTML = `
    <aside class="saved">
        <img class="saved__btn-close" src="./app/assets/icon-close.svg" alt="close icon">
        <h2 class="saved__title">saved recipes</h2>
        <div class="saved__card__container">

        </div>
    </aside>
    `;

    return $saved;
}

setTimeout(renderCards, 0);

function renderCards() {
    const savedCardsList = JSON.parse(localStorage.getItem('saved')) || {};
    let $savedCardsList = '';
    const $savedContainer = d.querySelector('.saved__card__container');
    $savedContainer.innerHTML = '';


    if (!(Object.keys(savedCardsList).length === 0)) {
        for (const cardId in savedCardsList) {
            $savedCardsList += `
            <a class="saved__card" href="#/recipe?id=${cardId}">
                <img class="saved__card__image" src="${savedCardsList[cardId].image}" alt="card image">
                <h3 class="saved__card__title">${savedCardsList[cardId].title}</h3>
                <img class="saved__card__delete" data-id="${cardId}" src="./app/assets/icon-trash.svg">
            </a>
            `;
        }
        $savedContainer.innerHTML = $savedCardsList;
    } else {
        $savedContainer.innerHTML = `<h3 class="saved__empty">This section is empty</h3>`;
    }
}

d.addEventListener('click', e => {
    if (e.target.matches('.saved__btn-close')) {
        d.querySelector('.saved__modal').style.transform ='translateX(100%)'
        return;
    }

    if(e.target.matches('.post__btn-save')) {
        const $btnPost = e.target;
        const savedCardsObj = JSON.parse(localStorage.getItem('saved')) || {};
        
        if ($btnPost.classList.contains('post__btn-save-active')) {
            $btnPost.classList.remove('post__btn-save-active');
            
            delete savedCardsObj[$btnPost.dataset.id];
        } else {
            $btnPost.classList.add('post__btn-save-active');

            savedCardsObj[$btnPost.dataset.id] = {
                title: $btnPost.dataset.title,
                image: $btnPost.dataset.image
            }
        }

        localStorage.setItem('saved', JSON.stringify(savedCardsObj));
        renderCards();

        return;
    }

    if (e.target.matches('.saved__card__delete')) {
        
        e.target.parentElement.href = 'javascript:void(0)';
        const savedCardsObj = JSON.parse(localStorage.getItem('saved')) || {};
        delete savedCardsObj[e.target.dataset.id];
        localStorage.setItem('saved', JSON.stringify(savedCardsObj));

        const $btnSave = d.querySelector('.post__btn-save');
        if ($btnSave) {
            $btnSave.classList.remove('post__btn-save-active');
        }

        renderCards();
        return;
    }
})