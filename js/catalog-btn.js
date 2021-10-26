document.addEventListener("DOMContentLoaded", function () {

    const list = document.querySelectorAll('.catalog__tab-btn')
    list.forEach(item => {
        item.addEventListener('click', (e) => {
            list.forEach(el => { el.classList.remove('catalog__tab-btn--active'); });
            item.classList.add('catalog__tab-btn--active')
            item.blur();

        })
    })

    const artist = document.querySelectorAll('.catalog__accordion-btn-artist')
    artist.forEach(artistItem => {
        artistItem.addEventListener('click', (e) => {
            artist.forEach(el => { el.classList.remove('catalog__accordeon-btn--active'); });
            artistItem.classList.add('catalog__accordeon-btn--active')
            artistItem.blur();
        })
    })

})