var Calculate = (function () {
  var firstResult = "";
  var lastResult = "";

  function Input(operator) {
    firstResult += "";
    if (input == "=") {
      firstResult = resultBox.innerHTML;
      screen = resultBox.innerHTML;
      click = true;
    }
    input = operator.getAttribute("value");

    if (firstResult.indexOf(".") > -1 && input == ".") return;

    if (isNaN(input) && previousInput == "") return;

    if ((input == "+" && previousInput == "+") || (input == "-" && previousInput == "-") || (input == "*" && previousInput == "*") || (input == "/" && previousInput == "/")) {
      return
    }

    if ((input == "*" || input == "/" || input == "-" || input == "+") && (previousInput == "*" || previousInput == "/" || previousInput == "-" || previousInput == "+")) {
      firstResult = firstResult.slice(0, -1);
      screen = screen.slice(0, -2);
    }


    if (isNaN(input) && input != ".") {

      click = false;

      switch (input) {
        case "*":
          screen += " × ";
          break;
        case "=":
          historyscreen = screen;
          screen = "";
          break;
        case "/":
          screen += " ÷ ";
          break;
        case "√":

          if (lastResult == "") {
            screen = "√(" + screen + ")"
            firstResult = Math.pow(firstResult, 1 / 2)
          }
          else {
            screen = screen.slice(0, -lastResult.length) + "√(" + lastResult + ")";
            firstResult = firstResult.replace(lastResult, Math.pow(lastResult, 1 / 2))
          }
          break;


        case "x2":
          if (lastResult == "") {
            screen = "sqr(" + screen + ")"
            firstResult = Math.pow(firstResult, 2)
          }
          else {
            screen = screen.slice(0, -lastResult.length) + "sqr(" + lastResult + ")";
            firstResult = firstResult.replace(lastResult, Math.pow(lastResult, 2))
          }
          break;
        case "x3":
          if (lastResult == "") {
            screen = "cube(" + screen + ")";
            firstResult = Math.pow(firstResult, 3);
          }
          else {
            screen = screen.slice(0, -lastResult.length) + "cube(" + lastResult + ")";
            firstResult = firstResult.replace(lastResult, Math.pow(lastResult, 3));
          }
          break;
        case "1/x":
          if (lastResult == "") {
            screen = "1/(" + screen + ")";
            firstResult = 1 / firstResult;
          }
          else {
            screen = screen.slice(0, -lastResult.length) + "1/(" + lastResult + ")";
            firstResult = firstResult.replace(lastResult, 1 / lastResult);
          }
          break;
        case "±":
          if (lastResult == "") {
            screen = "negate(" + screen + ")"
            firstResult = -1 * firstResult
          }
          else {
            screen = screen.slice(0, -lastResult.length) + "negate(" + lastResult + ")";
            firstResult = firstResult.replace(lastResult, -1 * lastResult);
          }
          break;
        default:
          screen += " " + input + " ";
      }

      firstResult = eval(firstResult);
      display(firstResult);
      if (input != "√" && input != "x2" && input != "x3" && input != "1/x" && input != "±" && input != "=")
        firstResult += input;
      lastResult = '';
    }

    else {

      if (click) {
        firstResult = "";
        screen = "";
        click = false;
      }
      screen += input;
      if (isNaN(firstResult)) {
        lastResult += input;
        firstResult += input;
        display(lastResult);
      }
      else {
        firstResult += input;
        display(firstResult)
      }


    }

    if (input == "=") {
      app.newHistory();
    }
    previousInput = input;
  }


  function clear(type) {

    switch (type) {
      case "All":
        firstResult = "";
        lastResult = "";
        screen = "";
        display(0);
        break;

      case "CE":
        if (isNaN(firstResult)) {
          firstResult = firstResult.slice(0, -lastResult.length);
          screen = screen.slice(0, -lastResult.length)

        }
        display(0);
        lastResult = "";
        break;

      case "backSpace":
        if (lastResult != "" || !isNaN(firstResult)) {
          firstResult = firstResult.slice(0, -1);
          screen = screen.slice(0, -1);
          display(firstResult)
          if (isNaN(firstResult)) {
            lastResult = lastResult.slice(0, -1)
            display(lastResult);
          }
        }

        break;
    }
    click = false;

  }

  function display(lastRes) {
    if (lastRes == "")
      lastRes = "0";
    resultBox.innerHTML = lastRes;
    screenBox.innerHTML = screen;
    historyResult = lastRes;

  }

  return {
    Input: Input,
    clear: clear,
    display: display
  }
})();

