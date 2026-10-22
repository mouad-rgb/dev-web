const t1 = document.getElementById("nom");
const t2 = document.getElementById("email");
const b = document.getElementById("btn");
b.addEventListener("click", () => {
  if (t1.value == "" || t2.value == "") {
    document.getElementById("message").innerText =
      "veuillez saisir le nom et prenon";
  } else {
    document.getElementById("message").innerText = "";
  }
});
