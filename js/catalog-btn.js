document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll(".catalog__tab-btn").forEach(item => {
        item.addEventListener("click", function() {
            item.classList.toggle("catalog__tab-btn--active")
            item.blur();
        })
        
    })
    
})