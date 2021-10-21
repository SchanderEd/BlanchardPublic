document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll(".catlog__tab-btn").forEach(item => {
        item.addEventListener("click", function() {
            item.classList.toggle("catlog__tab-btn--active")
            item.blur();
        })
        
    })
    
})