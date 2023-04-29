import { ErrorPage } from "../components/ErrorPage.js";

export async function ajax(props) {
    let { url, cbSuccess } = props;

    try {
        const response = await fetch(url);
        console.log(response)
        if(!response.ok) throw { 
            status:response.status,
            statusText:response.statusText
        }
        const data = await response.json();

        cbSuccess(data);

    } catch (err) {
        if(err.status == 404) {
            document.querySelector('#main').innerHTML = '';
            document.querySelector('#main').appendChild(ErrorPage());
            return; 
        }
        if(err.status == 401) {
            document.querySelector('#main').innerHTML = `
            <p class="error__title">Error ${err.status}: You need an Api Key to use this Application</p>
        `;
            return; 
        }
        let msg = err.statusText || 'There has been an error processing your request';
        document.querySelector('#main').innerHTML = `
            <p class="error_title">Error ${err.status}: ${msg}</p>
        `;
        console.warn(err); 
    }
} 