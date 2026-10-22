const answer = document.getElementById("email");
const bon = document.getElementById("resultat");
const num = `0123456789`;
const lettre = `qwertyuiopasdfghjklzxcvbnm`;

function BonEmail() {
  bon.textContent = ``;
  const email = answer.value.trim().toLowerCase();
  if (email.includes(`@`)) {
    const index = email.indexOf(`@`);
    const Lindex = email.lastIndexOf(`@`);
    if (index !== Lindex) {
      alert(`un seul @`);
      return;
    }
    const avant = email.slice(0, index);
    const apres = email.slice(index + 1);
    if (![...num].some((d) => avant.includes(d))) {
      alert("Au moins un chiffre avant @");
    } else if (![...lettre].some((d) => avant.includes(d))) {
      alert("Au moins une lettre avant @");
    } else if (!apres.includes(`.`)) {
      alert("dois avoir `.` apres @");
    } else {
      bon.textContent = `Bon email`;
      bon.style.color = `green`;
    }
  } else {
    alert("dois contenir @");
  }
}
