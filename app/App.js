import { Header } from './components/Header.js';
import { Panel } from './components/Panel.js';
import { Main } from './components/Main.js';
import { Saved } from './components/Saved.js';
import { Diets } from './components/Diets.js';
import { Footer } from './components/Footer.js';

export function App() {
    const $root = document.getElementById('root');

    $root.innerHTML = '';
    $root.appendChild(Header());
    $root.appendChild(Panel());
    $root.appendChild(Main());
    $root.insertAdjacentElement('afterend', Saved());
    $root.insertAdjacentElement('afterend', Diets());
    $root.insertAdjacentElement('afterend', Footer());
}