document.addEventListener('DOMContentLoaded', function () {
    const allBtns = document.querySelector('.events__btn')

    allBtns.addEventListener('click', function(allEvents){
        document.querySelectorAll('.events__item').forEach(function (allEvents) {
            allEvents.classList.remove('hidden')
        });
    allBtns.classList.add('hidden')
    })

    document.querySelector(`[data-target="${path}"]`).classList.add('events__item--active');
});

