const icon = document.getElementById("icon_theme");
const rootHTML = document.documentElement;

function changeTheme(){
    const temaAtual = rootHTML.getAttribute("data-theme");

    if (temaAtual === "dark") rootHTML.setAttribute("data-theme", "light")
    else rootHTML.setAttribute("data-theme", "dark")

icon.classList.toggle("bi-moon-stars");
icon.classList.toggle("bi-sun");

}

icon.addEventListener("click", changeTheme);