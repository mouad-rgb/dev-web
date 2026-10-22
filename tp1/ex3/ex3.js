const list = [5, 6, 9, 1, 7, 3, 5];

function trier(liste) {
  return [...liste].sort((a, b) => a - b);
}

console.log(trier(list));
