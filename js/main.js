let toggle = document.getElementById("toggle");
let sidebar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");

toggle.addEventListener("click", function() {
    sidebar.classList.toggle("open");
    if (sidebar.classList.contains("open")){
        overlay.style.left = "0";
    } else {
        overlay.style.left = "-100%";
    }
});


