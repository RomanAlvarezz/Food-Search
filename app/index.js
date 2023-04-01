const $root = document.querySelector('.root'),
$btnMobile = document.querySelector('.btn-mobile'),
$btnDesktop = document.querySelector('.btn-desktop');

document.addEventListener('click', e => {
    if (e.target.matches('.btn-mobile')) {
        e.target.classList.add('btn-selected');
        $btnDesktop.classList.remove('btn-selected');
        $root.style.maxWidth = '320px';
    }
    if (e.target.matches('.btn-desktop')) {
        e.target.classList.add('btn-selected');
        $btnMobile.classList.remove('btn-selected');
        $root.style.maxWidth = '950px';
    }
})