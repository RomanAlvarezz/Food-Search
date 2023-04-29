import { Slider } from './Slider.js';
import { Cards } from './Cards.js';
import { Post } from './Post.js';
import { ErrorPage } from './ErrorPage.js';
import { ajax } from '../helpers/ajax.js';
import api from '../helpers/api.js';


export async function Router() {
    const d = document,
    w = window,
    $main = d.getElementById('main');

    let { hash } = location;

    $main.innerHTML = '';

    if(!hash || hash == '#/') {
        //CARGA EL HOME
        const checkRandom = localStorage.getItem('vegan');
        if (checkRandom) {
            $main.appendChild(Slider('our vegetarian picks', JSON.parse(checkRandom)));
        } else {
            await ajax({
                url: `${api.baseURL}/random?apiKey=${api.apikey}&number=10&tags=vegan`,
                cbSuccess: (data) => {
                    $main.appendChild(Slider('our vegetarian picks', data.recipes));
                    localStorage.setItem('vegan', JSON.stringify(data.recipes)); 
                }
            });    
        }

        const checkDessert = localStorage.getItem('random');
        if (checkDessert) {
            $main.appendChild(Cards('trending', JSON.parse(checkDessert)));
        } else {
            await ajax({
                url: `${api.baseURL}/random?apiKey=${api.apikey}&number=20`,
                cbSuccess: (data) => {
                    $main.appendChild(Cards('trending', data.recipes));
                    localStorage.setItem('random', JSON.stringify(data.recipes)); 
                }
            });    
        }
    } else if (hash.includes('recipe?id=')){
        let start = hash.indexOf('=') + 1;
        const id = hash.slice(start);
        $main.innerHTML = '<div id="loader"></div>';

        await ajax({
            url: `${api.baseURL}/${id}/information?apiKey=${api.apiKey}&includeNutrition=true`,
            cbSuccess: (data) => {
            $main.appendChild(Post(data));
            d.getElementById('loader').remove();
            }
        });    
        
        // const data = JSON.parse(localStorage.getItem('post'));
        // $main.appendChild(Post(data));
        // d.getElementById('loader').remove();

    } else if (hash.includes('fridge?ingredients=')) {
        let start = hash.indexOf('=') + 1;
        const ingredients = hash.slice(start);
        $main.innerHTML = '<div id="loader"></div>';

        await ajax({
            url: `${api.baseURL}/findByIngredients?ingredients=${ingredients}&number=44&apiKey=${api.apiKey}`,
            cbSuccess: (data) => {
            $main.appendChild(Cards(`Results for: "${ingredients}"`, data));
            d.getElementById('loader').remove();
            }
        });  
    } else if (hash.includes('filter?')) {
       const queryExists = hash.includes('query=');
       console.log(queryExists); 
       let start = hash.indexOf('?') + 1;
       const filterParameters = hash.slice(start);
       const filterUrl = filterParameters.replaceAll('%20',' ');
       $main.innerHTML = '<div id="loader"></div>';

       await ajax({
        url: `${api.baseURL}/complexSearch?${filterUrl}&apiKey=${api.apiKey}&number=52`,
        cbSuccess: (data) => {
            d.getElementById('loader').remove();
            console.log(data);
            if(data.totalResults > 0) {
                $main.appendChild(Cards(` `, data.results));
                if(queryExists) {
                    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
                    //recentSearches.push(d.querySelector('.search__input').value);
                    const query = d.querySelector('.search__input').value;
                    if(!(recentSearches.includes(query))) recentSearches.push(query);

                    localStorage.setItem('recentSearches',JSON.stringify(recentSearches));
                }
            } else {
                $main.innerHTML = `<h2 class="section__title">There aren't recipes for that combination, try other</h2>`;
            }
        }
       })

    } else {
        console.log("Alto error 404 amigo'");
        $main.innerHTML = '';
        $main.appendChild(ErrorPage());
    }
}
