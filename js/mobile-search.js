document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.search-btn-mobile').addEventListener('click', function() {
        document.querySelector('.header__search-input-mobile').classList.toggle('search-active')
    })
})