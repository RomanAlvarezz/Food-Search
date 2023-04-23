export function Search() {
    const $search = document.createElement('form');
    $search.classList.add('search');

    $search.innerHTML = `
    <button class="search__btn" type="submit">
        <img class="search__btn-img" src="./app/assets/icon-search-1.svg" alt="search icon">
    </button>
    <input class="search__input" name="search" placeholder="Search..." type="text">
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

document.addEventListener('submit', e => {
    if (e.target.matches('.search')) {
        e.preventDefault();
        const query = e.target.search.value.trim();

        const filterObj = JSON.parse(localStorage.getItem('filter')) || {};
        let filterProps = false;
        let categoryUrl = '';
        let url = '';

        if(!(Object.keys(filterObj).length === 0)){
           let categories = [];
           for (const category in filterObj) {
                if(filterObj[category].length != 0){
                    filterProps = true;
                    let arrContent = filterObj[category].join();
                    categories.push(`${category}=${arrContent}`); 
                }
            }
            categoryUrl = categories.join('&')
        }
        
        if(query || filterProps) {
            url = `#/filter?${query ? `query=${query}&` : ''}${filterProps ? categoryUrl: ''}`;
            location.hash = url.trim();
        }
    }
})