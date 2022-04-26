document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.search-btn-mobile').addEventListener('click', function() {
        document.querySelector('.header__search-mobile').classList.add('header__search-mobile--active')
        document.querySelector('.header__search-close').classList.add('header__search-close--active')
        document.querySelector('.search-btn-mobile').classList.add('search-btn-mobile--active')
        document.querySelector('.burger__btn').classList.remove('visible')
        document.querySelector('.logo').classList.remove('visible')
        document.querySelector('.header__search-input-mobile').classList.add('search-active')
    })

    document.querySelector('.header__search-close').addEventListener('click', function() {
        document.querySelector('.header__search-mobile').classList.remove('header__search-mobile--active')
        document.querySelector('.header__search-close').classList.remove('header__search-close--active')
        document.querySelector('.search-btn-mobile').classList.remove('search-btn-mobile--active')
        document.querySelector('.header__search-input-mobile').classList.remove('search-active')
        document.querySelector('.burger__btn').classList.add('visible')
        document.querySelector('.logo').classList.add('visible')
        
    })
})