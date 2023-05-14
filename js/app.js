let icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        icon.className = "fa-solid fa-sun"
    }
    else{
        icon.className = "fa-solid fa-moon"
    }
}