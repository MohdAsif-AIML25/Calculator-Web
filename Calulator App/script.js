let inputField = document.getElementById("calc-display");
let buttons = document.querySelectorAll(".button");
let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value === "AC") {
      expression = "";
    } else if (value === "=") {
      try {
        expression = eval(expression);
      } catch {
        expression = "Error";
      }
    } else if (value === "X") {
      expression += "*";  // Multiplication
    } else if (value === "/") {
      expression += "/";  // Division
    } else if (value === "Del") {  
        expression = expression.slice(0, -1);
    } else {
      expression += value;
    }

    inputField.value = expression;
  });
});

/* Handle Enter and Backspace Keys */
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    try {
      expression = eval(expression);
    } catch {
      expression = "Error";
    }
    inputField.value = expression;
  } else if (event.key === "Backspace") {
    expression = expression.slice(0, -1);
    inputField.value = expression;
  }
});
