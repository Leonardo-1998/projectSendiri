// menerima input angka lalu menunjukannya
function input(input) {
    // console.log(input)
    tempStr += input
    currentNumber = Number(tempStr)
    // console.log(currentNumber)
    document.getElementById("currentNumber").innerHTML = currentNumber
}

function operator(operator) {
    console.log(operator)
    console.log(tempStr)
    console.log(currentNumber)
    calculation.push(Number(tempStr))
    // return press
}

function deleteAll() {
    console.log("deleteAll")
    // return clear
}

function negative() {
    console.log("negative")
    if (tempStr[0] !== "-") {
        tempStr = "-" + tempStr
        currentNumber = Number(tempStr)
        document.getElementById("currentNumber").innerHTML = currentNumber
    } else {
        tempStr = tempStr.slice(1)
        console.log(tempStr)
        currentNumber = Number(tempStr)
        document.getElementById("currentNumber").innerHTML = currentNumber
    }
    // return a
}

function deleteOne() {
    // console.log("deleteOne")
    tempStr = tempStr.slice(0, tempStr.length - 1)
    // console.log(tempStr[tempStr.length-1])
    if(tempStr[tempStr.length-1] === "."){
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
    console.log("equal")
}

let tempStr = ""
let calculation = []
let currentNumber = 0

document.getElementById("currentNumber").innerHTML = BigInt(currentNumber)
document.getElementById("currentOperation").innerHTML = currentNumber