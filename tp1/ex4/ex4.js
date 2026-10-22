function val(id) {
  return Number(document.getElementById(id).value);
}
const button = document.getElementById(`somme`);

button.addEventListener(`click`, () => {
  let total = 0;

  for (let i = 1; i <= 3; i++) {
    total += val(`h` + i) * 3600 + val(`m` + i) * 60 + val(`s` + i);
  }
  document.getElementById(`jours`).value = Math.floor(total / 86400);
  document.getElementById(`heures`).value = Math.floor((total % 86400) / 3600);
  document.getElementById(`minutes`).value = Math.floor((total % 3600) / 60);
  document.getElementById(`secondes`).value = total % 60;
});
