export function Search() {
    const $search = document.createElement('form');
    $search.classList.add('search');

    $search.innerHTML = `
    <button class="search__btn" type="submit">
        <img class="search__btn-img" src="./app/assets/icon-search-1.svg" alt="search icon">
    </button>
    <input class="search__input" placeholder="Search..." type="text">
    <div class="search-recents">
        <h2 class="search-recents__title">
            Recent Searches
        </h2>
        <p class="search-recents__option"
        data-recent="pizza">
            Pizza
        </p>
        <p class="search-recents__option"
        data-recent="pizza">
            Pizza
        </p>
        <p class="search-recents__option"
        data-recent="pizza">
            Pizza
        </p>
    </div>
    `;

    return $search;
}