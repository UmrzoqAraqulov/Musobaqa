let icon = document.getElementById("icon");
let headerImg = document.getElementById("headerImg");

icon.onclick = function () {
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        icon.className = "fa-solid fa-sun"
        headerImg.src = "image/imageHomePage/header_dark.png"
    }
    else{
        icon.className = "fa-solid fa-moon"
        headerImg.src = "image/imageHomePage/header_light.png"
    }
}