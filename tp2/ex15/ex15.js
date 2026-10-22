const bouton = document.getElementById("theme");

if (localStorage.getItem("theme") === "sombre") {
  document.body.classList.add("sombre");
}

bouton.addEventListener("click", () => {
  document.body.classList.toggle("sombre");

  const estSombre = document.body.classList.contains("sombre");
  localStorage.setItem("theme", estSombre ? "sombre" : "clair");
});
