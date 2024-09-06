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

const menuLinksDesktop = document.querySelectorAll(".menu-texto");

menuLinksDesktop.forEach(
    item =>{
        item.addEventListener("click", () => {
            menuLinksDesktop.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        })
    }
)

const menuLinksMobile = document.querySelectorAll(".menu-nav-item");

menuLinksMobile.forEach(
    item =>{
        item.addEventListener("click", () => {
            menuLinksMobile.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        })
    }
)

document.querySelectorAll('img').forEach(function (img) {
  if (img.hasAttribute('data-tippy-content') && img.getAttribute('data-tippy-content').trim() !== '') {
    tippy(img, {
      trigger: 'click',
      theme: 'light',
      placement: 'bottom',
    });
  }
});