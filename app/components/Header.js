import { Logo } from './Logo.js';
import { Search } from './Search.js';

export function Header() {
    const $header = document.createElement('header');

    $header.appendChild(Logo());
    $header.appendChild(Search());

    return $header;
}