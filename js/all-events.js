document.addEventListener('DOMContentLoaded', function () {
    const allBtns = document.querySelector('.events__btn')

    allBtns.addEventListener('click', function(allEvents){
        document.querySelectorAll('.events__item-second').forEach(function (allEvents) {
            allEvents.classList.remove('hidden')
        });
    allBtns.classList.add('hidden')
    })

});

