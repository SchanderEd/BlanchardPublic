window.addEventListener('DOMContentLoaded', function () {

  // Открытие бургера

  document.querySelector('#burgerBtn').addEventListener('click', function () {
    document.querySelector('#burgerMenu').classList.add('active-burger')
    document.querySelector('#burgerBtn').classList.add('burger__btn--disabled')
    document.querySelector('#xBurger').classList.add('burger__btn--enabled')
    document.querySelector('#burgerBtn').classList.remove('burger__btn--enabled')
  })

  // Закрытие бургера

  document.querySelector('#xBurger').addEventListener('click', function () {
    document.querySelector('#burgerMenu').classList.remove('active-burger')
    document.querySelector('#burgerBtn').classList.add('burger__btn--enabled')
    document.querySelector('#xBurger').classList.remove('burger__btn--enabled')
  })

})
