const d = document;

export function Search() {
    const $search = d.createElement('form');
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
        <div class="search-recents__container">
            
        </div>
        
    </div>
    `;

    return $search;
}

d.addEventListener('submit', e => {
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

d.addEventListener('click', e => {
    if (e.target.matches('.search__input')) {
        const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
        if (recentSearches.length > 0) {
            d.querySelector('.search-recents').style.display = 'initial';
            let html = '';
            recentSearches.forEach(query => html += `
            <div class="search-recents__option">
            <p class="search-recents__text">${query}</p>
            <i data-query="${query}" class="fa-solid fa-xmark search-recents__close"></i>
            </div>`);
            d.querySelector('.search-recents__container').innerHTML = html;
        }

    } else if (e.target.matches('.search-recents__option')) {
        d.querySelector('.search__input').value = e.target.innerText;

    } else if (e.target.matches('.search-recents__close')) {
        const recentSearches = JSON.parse(localStorage.getItem('recentSearches'));
        const index = recentSearches.indexOf(e.target.dataset.query);
        recentSearches.splice(index, 1);
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
        e.target.parentElement.remove();
        if(recentSearches.length == 0) d.querySelector('.search-recents').style.display = 'none';

    } else {
        d.querySelector('.search-recents').style.display = 'none';
    }
});