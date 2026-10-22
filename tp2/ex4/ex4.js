const display = document.getElementById("answer");

function appendToDIsplay(input) {
  display.value += input;
}

function answer() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function Clear() {
  display.value = "";
}
