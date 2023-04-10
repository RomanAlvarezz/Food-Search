export function Footer() {
    const $footer = document.createElement('footer');
    $footer.classList.add('footer');

    $footer.innerHTML = `
    <div class="footer__icon__container">
        <a href="https://github.com/RomanAlvarezz" target="_blank" class="footer__link">
            <i class="fa-brands fa-square-github footer__icon"></i>
        </a>
        <a href="mailto:alvarezroman150@gmai.com" target="_blank" class="footer__link">
            <i class="fa-solid fa-square-envelope footer__icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/romannalvarez/" target="_blank" class="footer__link">
            <i class="fa-brands fa-linkedin footer__icon"></i> 
        </a>
    </div>
    <h5 class="footer__title">Design & Built by <a href="https://romanalvarez.netlify.app/" target="_blank">Román Alvarez</a></h5>
    `;

    return $footer;
}