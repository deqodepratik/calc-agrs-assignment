const [nodePath, filePath, operation, numberOne, numberTwo] = process.argv;

// converting the args to float as they are string
const number1 = parseFloat(numberOne);
const number2 = parseFloat(numberTwo);

let result;
switch (operation) {
  case "add":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;

  case "sub":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;

  case "mul":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;

  case "divide":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operation");
    break;
}

// console.log(process.argv);
