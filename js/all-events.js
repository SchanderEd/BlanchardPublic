document.addEventListener('DOMContentLoaded', function() {
    const eventsItem = document.querySelectorAll('events__item')
    const eventsBtn = document.querySelector('.events__btn')


    eventsBtn.addEventListener('click', () => {
        eventsItem.classList.add('events__item--active')
        eventsBtn.classList.add('hidden')
    })
})