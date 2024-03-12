const headerLanguageBtn = document.querySelector('.header-language-btn');
const headerList = document.querySelector('.header__list');

headerLanguageBtn.addEventListener('click', () => {
    headerList.classList.toggle('header__active');
});




