const btn = document.querySelectorAll("input[type='button']");
const textField = document.querySelector(".textField");
btn.forEach((button) => button.addEventListener("click", getTheValue));

function getTheValue() {
  let value = this.value;

  if (value !== "AC" && value !== "ß" && value !== "=") {
    textField.value = textField.value + value;
  }

  if (value == "=") {
    try {
      textField.value = math.evaluate(textField.value);
    } catch (error) {
      textField.value = "Error";
    }
  }

  if (value == "AC") {
    textField.value = "";
  }

  if (value == "ß") {
    let length = textField.value;
    textField.value = length.slice(0, -1);
  }
}