const d = document;

export function Diets() {
    const $diets = d.createElement('section');
    $diets.classList.add('diets__modal');

    $diets.innerHTML = `
    <aside class="diets">
        <img class="diets__btn-close" src="./app/assets/icon-close.svg" alt="close icon">
        <h2 class="diets__title">diets info</h2>
        <article class="diets__card">
            <h3 class="diets__card__title">Gluten Free</h3>
            <p class="diets__card__info">The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Gluten Free</h3>
            <p class="diets__card__info">The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Gluten Free</h3>
            <p class="diets__card__info">The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Gluten Free</h3>
            <p class="diets__card__info">The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p>
        </article>
    </aside>
    `;

    d.addEventListener('click', e => {
        if (e.target.matches('.diets__btn-close')) {
            d.querySelector('.diets__modal').style.transform = 'translateX(-100%)';
        }
    })

    return $diets;
}