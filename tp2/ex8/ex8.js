const button = document.getElementById("block");

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "red";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "rgb(84, 195, 247)";
});
