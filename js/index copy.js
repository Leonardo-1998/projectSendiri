// menerima input angka lalu menunjukannya
// Masih harus dibetulkan
function input(input) {
    // console.log(input)
    tempStr += input
    currentNumber = Number(tempStr)
    console.log(currentNumber)
    document.getElementById("currentNumber").innerHTML = currentNumber

    // Jika ada Operator
    if (calculation.length === 2) {
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]} `
    } else if (calculation.length === 1) {
        document.getElementById("currentOperation").innerHTML = `${calculation[0]}`
    }
}

function directOperation(operator) {
    if (operator === "square") {
        operator = "<sup>2</sup>";
        // belakang
        let square2 = Number(tempStr) * Number(tempStr)
        console.log(square2)
        document.getElementById("currentOperation").innerHTML = `${Number(tempStr)}${operator} =`
        document.getElementById("currentNumber").innerHTML = `${square2}`
        calculation[0] = square2
        tempStr = ""
    } else if (operator === "squareroot") {
        operator = "√"
        // depan
    }
}

function operator(operator) {
    console.log(operator)
    // console.log(tempStr)
    // console.log(currentNumber)
    if (operator === "percentage") {
        operator = "%"
        // belakang
    } else if (operator === "fraction") {
        operator === "<sup>1</sup>⁄"
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
    } else if (calculation[1] !== undefined) {
        calculation.pop()
        calculation.push(operator)
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]}`
    }
    // return press
}

function deleteAll() {
    console.log("deleteAll")
    // return clear

    // reset semua
    result
    currentNumerical
    tempStr = ""
    calculation = []
    currentNumber = 0
    document.getElementById("currentOperation").innerHTML = 0
    document.getElementById("currentNumber").innerHTML = 0
}

function negative() {
    console.log("negative")
    if (calculation.length > 1) {

    }
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

// INI MASIH HARUS DI BETULKAN
function deleteOne() {
    // console.log("deleteOne")
    if (calculation[1] === undefined) {
        // do nothing
    }
    //  else if (){

    // }
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


// Masih perlu dibetulkan
//         V
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
        document.getElementById("currentOperation").innerHTML = `${Number(tempStr)} =`
        tempStr = ""
    }
}

let result
let currentNumerical
let tempStr = ""
let calculation = []
let currentNumber = 0

// Display Utama
document.getElementById("currentNumber").innerHTML = Number(currentNumber)

// Display Operation
document.getElementById("currentOperation").innerHTML = currentNumber