let burger = document.querySelector('.header__hamburger');
let menu = document.querySelector('.module__container');
let remove = document.querySelector('.module__hamburger');
let moduleLanguageBtn = document.querySelector('.module-language-btn');
let moduleList = document.querySelector('.module__list');

burger.addEventListener('click', function() {
    menu.classList.toggle('open');
});
remove.addEventListener('click', function() {
    menu.classList.remove('open');
});

moduleLanguageBtn.addEventListener('click', () => {
    moduleList.classList.toggle('module__active');
});