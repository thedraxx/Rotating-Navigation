export {};
const open = document.getElementById('open') as HTMLInputElement;;
const close = document.getElementById('close') as HTMLInputElement;;
const container = document.querySelector('.container');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
});


close.addEventListener('click', () => {
    container.classList.remove('show-nav');
});