let binaryNumber;
let result = 0;

function convertNumber() {
  binaryNumber = document.querySelector('input#inputBinary').value

  if (binaryNumber == "") {
    alert(`Please, enter a valid binary number`)
  } else {
    validateBinary()
    convertBinary()
  }
}

function validateBinary() {
  for (c = 0; c < binaryNumber.length; c++) {
    let character = binaryNumber[c]
    if (character == "0" || character == "1") {
    } else {
      alert(`Number entered: ${binaryNumber}\nPlease, enter a valid binary number`)
      break
    }
  }
}

function convertBinary() {
  for (c = (binaryNumber.length - 1); c >= 0; c--) {
    let character = Number(binaryNumber[c])
    result += character * (2 ** (binaryNumber.length - 1 - c))
  }
  document.querySelector('input#resultBox').value = result
  result = 0
}