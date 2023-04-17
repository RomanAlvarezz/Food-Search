const d = document;

export function Post(postInfo) {
    const $section = d.createElement('section');
    $section.classList.add('post');

    const $title = d.createElement('h1');
    $title.classList.add('post__title');
    $title.textContent = postInfo.title;

    const $tagContainer = d.createElement('div');
    $tagContainer.classList.add('post__tag-container');
    let tags = '';
    postInfo.dishTypes.forEach(dish => tags += `<span class="post__tag">${dish}</span>`);
    $tagContainer.innerHTML = tags;

    const $image = d.createElement('img');
    $image.classList.add('post__image');
    $image.src = postInfo.image;

    const $text = d.createElement('p');
    $text.classList.add('post__text');
    $text.innerHTML = postInfo.summary;

    const $postCard = d.createElement('article');
    $postCard.classList.add('post__card');

    const $postIngredients = d.createElement('div');
    $postIngredients.classList.add('post__ingredients')
    let $ingredients = '';
    postInfo.extendedIngredients.forEach(ingredient => $ingredients += `<li>${ingredient.name}</li>`);
    $postIngredients.innerHTML = `
    <h2 class="post__ingredients__title">Ingredients</h2>
    <ul class="post__ingredients__list">
        ${$ingredients}
    </ul>
    `;

    const $postInstructions = d.createElement('div');
    $postInstructions.classList.add('post__instructions');
    let $instructions = '';
    postInfo.analyzedInstructions[0].steps.forEach(instruction => $instructions += `
    <div class="post__instructions__step">
        <span class="post__instructions__number">${instruction.number}</span><p class="post__instructions__text">${instruction.step}</p>
    </div>
    `);

    $postInstructions.innerHTML = `
    <h2 class="post__instructions__title">Instructions</h2>
    ${$instructions}
    `;

    $postCard.appendChild($postIngredients);
    $postCard.appendChild($postInstructions);

    $section.appendChild($title);
    $section.appendChild($tagContainer);
    $section.appendChild($image);
    $section.appendChild($text);
    $section.appendChild($postCard);

    /*$section.innerHTML = `
    <h1 class="post__title">${postInfo.title}</h1>
    <div class="post__tag-container">
        <span class="post__tag">main course</span>
        <span class="post__tag">lunch</span>
        <span class="post__tag">main dish</span>
        <span class="post__tag">dinner</span>
    </div>
    <img class="post__image" src="${postInfo.image}" alt="post image">
    <p class="post__text">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\>Cauliflower Gratin with Garlic Breadcrumbs</a>, <href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.</p>
    <article class="post__card">
        <div class="post__ingredients">
            <h2 class="post__ingredients__title">Ingredients</h2>
            <ul class="post__ingredients__list">
                <li>apple</li>
                <li>juice</li>
                <li>egg</li>
            </ul>
        </div>
        <div class="post__instructions">
            <h2 class="post__instructions__title">Instructions</h2>
            <div class="post__instructions__step">
                <span class="post__instructions__number">1</span><p class="post__instructions__text">Preheat the oven to 200 degrees F.</p>
            </div>
            <div class="post__instructions__step">
                <span class="post__instructions__number">2</span><p class="post__instructions__text">Whisk together the flour, pecans, granulated sugar, light brown sugar, baking powder, baking soda, and salt in a medium bowl.</p>
            </div>
            <div class="post__instructions__step">
                <span class="post__instructions__number">3</span><p class="post__instructions__text">Whisk together the eggs, buttermilk, butter and vanilla extract and vanilla bean in a small bowl.</p>
            </div>
            <div class="post__instructions__step">
                <span class="post__instructions__number">4</span><p class="post__instructions__text">Add the egg mixture to the dry mixture and gently mix to combine. Do not overmix.</p>
            </div>
        </div>
    </article>
    `;*/

    return $section;
}