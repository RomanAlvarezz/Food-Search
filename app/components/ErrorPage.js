export function ErrorPage() {
    const $errorPage = document.createElement('div');
    $errorPage.classList.add('error');

    $errorPage.innerHTML = `
    <img class="error__image" src="./app/assets/errorPage.jpg" alt="error page">
    <h1 class="error__title">Oops, Something went wrong!</h1>
    <a class="error__link" href="#/">Take me home</a>
    `;

    return $errorPage;
}