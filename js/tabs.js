document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__accordion-btn-artist').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.about-artist-content').forEach(function(tabContent) {
        tabContent.classList.remove('about-artist-content--active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('about-artist-content--active')
    })
    
  })
})
