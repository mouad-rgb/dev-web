const info = document.getElementById("info");
const menu = document.getElementById("menu");
const pub = document.getElementById("pub");

function adapter() {
  const largeur = window.innerWidth;
  info.textContent = `Largeur : ${largeur}px`;

  if (largeur < 600) {
    menu.classList.add("mobile");
    pub.style.display = "none";
  } else {
    menu.classList.remove("mobile");
    pub.style.display = "block";
  }
}

window.addEventListener("resize", adapter);
adapter();
