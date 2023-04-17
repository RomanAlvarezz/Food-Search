import { Header } from './components/Header.js';
import { Panel } from './components/Panel.js';
import { Main } from './components/Main.js';
import { Saved } from './components/Saved.js';
import { Diets } from './components/Diets.js';
import { Footer } from './components/Footer.js';
import { Router } from './components/Router.js';

export function App() {
    const $root = document.getElementById('root');

    $root.innerHTML = '';
    $root.appendChild(Header());
    $root.appendChild(Panel());
    $root.appendChild(Main());
    $root.appendChild(Saved());
    $root.appendChild(Diets());
    $root.appendChild(Footer());

    Router();
}