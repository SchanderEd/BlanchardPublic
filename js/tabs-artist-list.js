document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__tab-btn').forEach(function(tabsCatalog) {
        tabsCatalog.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path
  
        document.querySelectorAll('.catalog__bottom').forEach(function(tabContent) {
          tabContent.classList.remove('catalog__bottom--active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog__bottom--active')
      })
    })
  })
  