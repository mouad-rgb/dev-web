const barre = document.getElementById("barre");
const bouton = document.getElementById("demarrer");

bouton.addEventListener("click", () => {
  let progres = 0;
  bouton.disabled = true;

  const timer = setInterval(() => {
    progres++;
    barre.style.width = progres + "%";
    barre.textContent = progres + "%";

    if (progres >= 100) {
      clearInterval(timer);
      bouton.disabled = false;
    }
  }, 30);
});
