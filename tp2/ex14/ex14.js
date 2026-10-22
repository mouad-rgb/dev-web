const items = document.querySelectorAll(".item");
const zones = document.querySelectorAll(".zone");

items.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", item.id);
  });
});

zones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.classList.add("survol");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("survol");
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("survol");
    const id = e.dataTransfer.getData("text/plain");
    zone.append(document.getElementById(id));
  });
});
