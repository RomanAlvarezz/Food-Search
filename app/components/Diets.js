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
            <p class="diets__card__info">Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated)</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Ketogenic</h3>
            <p class="diets__card__info">The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Vegetarian</h3>
            <p class="diets__card__info">No ingredients may contain meat or meat by-products, such as bones or gelatin</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Lacto-Vegetarian</h3>
            <p class="diets__card__info">All ingredients must be vegetarian and none of the ingredients can be or contain egg</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Ovo-Vegetarian</h3>
            <p class="diets__card__info">All ingredients must be vegetarian and none of the ingredients can be or contain dairy</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Vegan</h3>
            <p class="diets__card__info">No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Pescetarian</h3>
            <p class="diets__card__info">Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Paleo</h3>
            <p class="diets__card__info">Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Primal</h3>
            <p class="diets__card__info">Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Low FODMAP</h3>
            <p class="diets__card__info">FODMAP stands for "fermentable oligo-, di-, mono-saccharides and polyols". Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, wheat, and dairy products)</p>
        </article>
        <article class="diets__card">
            <h3 class="diets__card__title">Whole30</h3>
            <p class="diets__card__info">Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites</p>
        </article>
    </aside>
    `;

    d.addEventListener('click', e => {
        if (e.target.matches('.diets__btn-close') || e.target.matches('.diets__modal')) {
            d.querySelector('.diets__modal').style.transform = 'translateX(-100%)';
        }
    })

    return $diets;
}