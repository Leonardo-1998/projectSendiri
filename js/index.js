// menerima input angka lalu menunjukannya
function input(input) {
    // console.log(input)
    tempStr += input
    let currentNumber = Number(tempStr)
    console.log(currentNumber)
    document.getElementById("currentNumber").innerHTML = currentNumber

    if (calculation.length === 2) {
        // Jika ada Operator
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]} `
        // Menunjukan angka sebelum dan operation yang sekarang
    } else if (calculation.length === 1) {
        document.getElementById("currentOperation").innerHTML = ``
    }
}

function directOperation(operator) {
    if (!tempStr) {
        // Jika tempStr kosong setelah result
        tempStr = String(calculation[0])
    }
    if (operator === "square") {
        operator = "<sup>2</sup>";
        // belakang

        let currentNumber = Number(tempStr)
        let square2 = currentNumber * currentNumber
        console.log(square2)

        // Menunjukan operasi
        document.getElementById("currentOperation").innerHTML = `${currentNumber}${operator} =`

        // Menunjukan hasil
        document.getElementById("currentNumber").innerHTML = `${square2}`
        calculation[0] = square2
        tempStr = ""
    } else if (operator === "squareroot") {
        operator = "√"
        // depan

        let currentNumber = Number(tempStr)
        let squareroot = Math.sqrt(currentNumber)
        // console.log(squareroot)

        // Menunjukan operasi
        document.getElementById("currentOperation").innerHTML = `${operator}${currentNumber} =`

        // Menunjukan hasil
        document.getElementById("currentNumber").innerHTML = `${squareroot}`
        calculation[0] = squareroot
        tempStr = ""
    } else if (operator === "percentage"){
        if(calculation.length === 0){
            tempStr = String(Number(tempStr)/100) 
        } else  
        if(calculation.length === 2){
            let persen = calculation[0] * Number(tempStr) / 100
            tempStr = String(persen)
        }
        equal()
    }
}

function operator(operator) {
    console.log(operator)
    // console.log(tempStr)
    // console.log(currentNumber)

    // Jenis Operasi
    if (operator === "divide") {
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

    if (calculation[1] !== undefined) {
        // Mengecek apakah ada operasi sebelumnya
        calculation.pop()
        calculation.push(operator)
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]}`
    } else if (calculation[0] !== undefined) {
        // Mengecek apakah ada angka sebelum operasi
        calculation.push(operator)
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]}`
    } else if (tempStr.length !== 0) {
        // Mengecek apakah belum ada angka
        calculation.push(Number(tempStr))
        tempStr = ""
        calculation.push(operator)
        document.getElementById("currentOperation").innerHTML = `${calculation[0]} ${calculation[1]}`
    }
    // return press
}

function fraction(){
    console.log("fraction")
    let currentNumber
    let fraction 
    // console.log(tempStr,calculation[0])
    if(!tempStr){
        console.log("none")
    } 
    if(tempStr){
        console.log(2)
        currentNumber = Number(tempStr)
        fraction = 1/currentNumber
    } else if(calculation[0] !== undefined){
        console.log(1)
        fraction = 1/calculation[0]
        tempStr = String(fraction)
    }

    document.getElementById("currentNumber").innerHTML = `${fraction}`
    tempStr = String(fraction)
}

function deleteAll() {
    console.log("deleteAll")
    // return clear

    // reset semua
    result = 0
    currentNumerical
    tempStr = ""
    calculation = []
    currentNumber = 0
    document.getElementById("currentOperation").innerHTML = 0
    document.getElementById("currentNumber").innerHTML = 0
}

function negative() {
    console.log("negative")
    if (calculation.length === 1) {
        // Mengubah hasil directOperation menjadi negatif/positif
        tempStr = String(calculation[0])
        tempStr = "-" + tempStr
        calculation.pop()
        document.getElementById("currentOperation").innerHTML = ""
        // document.getElementById("currentOperation").innerHTML = ""
    } else if (tempStr === "") {
        tempStr = ""
    } else if (tempStr[0] !== "-") {
        tempStr = "-" + tempStr
    } else {
        tempStr = tempStr.slice(1)
        // console.log(tempStr)
    }
    let currentNumber = Number(tempStr)
    document.getElementById("currentNumber").innerHTML = currentNumber
    // return a
}

function deleteOne() {
    // console.log("deleteOne")
    if (calculation[1] === undefined) {
        // do nothing
    }
    //  else if (){

    // }
    tempStr = tempStr.slice(0, tempStr.length - 1)
    // console.log(tempStr[tempStr.length-1])
    if (
        tempStr[tempStr.length - 1] === "." ||
        tempStr[tempStr.length - 1] === "-"
     ) {
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
    if (!tempStr) {
        tempStr = ""
        console.log("a")
    } else
        if (calculation.length > 1) {
            console.log("equal")
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
            calculation[0] = Number(tempStr);
            document.getElementById("currentNumber").innerHTML = Number(tempStr)
            document.getElementById("currentOperation").innerHTML = `${Number(tempStr)} =`
            tempStr = ""
        }
}

let result
let currentNumerical
let tempStr = "" // Yang ditampilkan utama
let calculation = [] // Menyimpan data operasi di atas

// Display Utama
document.getElementById("currentNumber").innerHTML = 0

// Display Operation
document.getElementById("currentOperation").innerHTML = 0