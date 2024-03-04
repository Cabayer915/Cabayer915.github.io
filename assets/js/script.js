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

const gavetasHeaders = document.querySelectorAll(".gaveta-header");

gavetasHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const gavetaItem = header.parentElement;
    const hasActiveClass = gavetaItem.classList.contains("active");

    if (hasActiveClass) {
      gavetaItem.classList.remove("active");
    } else {
      gavetaItem.classList.add("active");
    }
  });
});