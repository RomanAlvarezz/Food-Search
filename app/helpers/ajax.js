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
        if(err.status == 400) {
            document.querySelector('#main').innerHTML = '';
            document.querySelector('#main').appendChild(ErrorPage());
            return; 
        }
        let msg = err.statusText || 'There has been an error processing your request';
        document.querySelector('#main').innerHTML = `
        <div class="error">
            <p>Error ${err.status}: ${msg}</p>
        </div>
        `;
        console.warn(err); 
    }
} 