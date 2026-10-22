const list = document.getElementById("list");
const tach = document.getElementById("tache");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (tach.value.trim() === "") {
    return;
  }
  const newTache = document.createElement("li");
  newTache.textContent = tach.value + " ";

  const effacer = document.createElement("button");
  effacer.textContent = "Effacer";

  effacer.addEventListener("click", () => {
    newTache.remove();
  });
  newTache.append(effacer);
  list.append(newTache);
  tach.value = "";
});
