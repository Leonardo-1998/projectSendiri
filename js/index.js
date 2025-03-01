// menerima input angka lalu menunjukannya
function input(input) {
    // console.log(input)
    tempStr += input
    currentNumber = Number(tempStr)
    console.log(currentNumber)
    document.getElementById("currentNumber").innerHTML = currentNumber
    if (calculation.length !== 0) {
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]} `
    }
}

function operator(operator) {
    // console.log(operator)
    // console.log(tempStr)
    // console.log(currentNumber)
    if (operator === "percentage") {
        operator = "%"
        // belakang
    } else if (operator === "fraction") {
        operator === "<sup>1</sup>⁄"
        // depan
    } if (operator === "square") {
        operator = "<sup>2</sup>";
        // belakang
    } else if (operator === "squareroot") {
        operator = "√"
        // depan
    } else if (operator === "divide") {
        operator = "÷";
        // belakang
    } else if (operator === "times") {
        operator = "X";
        // belakang
    } else if (operator === "minus") {
        operator = "-"
        // belakang
    } else if (operator === "plus") {
        operator = "+"
        // belakang
    }

    if (tempStr.length !== 0) {
        calculation.push(Number(tempStr))
        tempStr = ""
        calculation.push(operator)
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]}`
    } else {
        calculation.pop()
        calculation.push(operator)
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]}`
    }
    // return press
}

function deleteAll() {
    console.log("deleteAll")
    // return clear
}

function negative() {
    console.log("negative")
    if (tempStr === "0") {
        tempStr = "0"
    } else if (tempStr[0] !== "-") {
        tempStr = "-" + tempStr
        currentNumber = Number(tempStr)
        document.getElementById("currentNumber").innerHTML = currentNumber
    } else {
        tempStr = tempStr.slice(1)
        // console.log(tempStr)
        currentNumber = Number(tempStr)
        document.getElementById("currentNumber").innerHTML = currentNumber
    }
    // return a
}

function deleteOne() {
    // console.log("deleteOne")
    tempStr = tempStr.slice(0, tempStr.length - 1)
    // console.log(tempStr[tempStr.length-1])
    if (tempStr[tempStr.length - 1] === ".") {
        // console.log("a")
        tempStr = tempStr.slice(0, tempStr.length - 1)
    }
    // console.log(tempStr)
    currentNumber = Number(tempStr)
    document.getElementById("currentNumber").innerHTML = currentNumber
}

function decimal() {
    if (tempStr.indexOf(".") === -1) {
        console.log("decimal")
        tempStr += "."
        console.log(tempStr)
    }
    // currentNumber = Number(tempStr)
    // document.getElementById("currentNumber").innerHTML = currentNumber
}

function equal() {
    if (calculation.length > 1) {
        console.log("equal")
        let result
        if (tempStr.length !== 0) {
            currentNumerical = Number(tempStr)
        }
        if (calculation[1] === "+") {
            result = calculation[0] + currentNumerical;
            tempStr = "";
        } else if (calculation[1] === "-") {
            result = calculation[0] - currentNumerical;
            tempStr = "";
        } else if (calculation[1] === "X") {
            result = calculation[0] * currentNumerical;
            tempStr = "";
        } else if (calculation[1] === "÷") {
            result = calculation[0] / currentNumerical;
            tempStr = "";
        }
        document.getElementById("currentNumber").innerHTML = result
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]} ${currentNumerical} =`
        calculation[0] = result
    } else if (tempStr) {
        document.getElementById("currentNumber").innerHTML = Number(tempStr)
        document.getElementById("currentOperation").innerHTML = `${Number(tempStr)}`
    }
}

let currentNumerical
let tempStr = ""
let calculation = []
let currentNumber = 0

document.getElementById("currentNumber").innerHTML = Number(currentNumber)
document.getElementById("currentOperation").innerHTML = currentNumber