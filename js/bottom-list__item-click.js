document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.bottom-list__btn').forEach(function (bottomBtn) {
        bottomBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.submenu').forEach(function (bottomBtnContent) {
                bottomBtnContent.classList.remove('submenu--active')
                document.querySelector(`[data-target="${path}"]`).classList.add('submenu--active')
            })

        })

    })
})