function myDisplay () { //hàm call phần tử trong mảng
    let firstArg = arguments[0];
    let secondArg =arguments[1];
    let thirdArg =arguments[2];
    let fourArg =arguments[3];
    let fifthArg =arguments[4];
    document.write("1st is: " +firstArg +"<br>");
    document.write("2nd is: " +secondArg +"<br>");
    document.write("3th is: " +thirdArg +"<br>");
    document.write("4th is: " +fourArg +"<br>");
    document.write("5th is: " +fifthArg +"<br>");
}
myDisplay("Hello","The world","A beast","evolved");

function isTotal (a,b) {
    return a + b;
}

let theNums1 = 10;
let theNums2 = 5;

let result =isTotal(theNums1,theNums2);
document.write("Result of isTotal function :" + + result);


function processConfirm(answer) {
    let result1 ="";
    if (answer) {
        result1 = "Excellent!!";
    } else {
        result1 = "Oop its fine..Maybe later";
    }
    return result1;
}

let confirmAnswer = confirm("Shall we go again??");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);


function faraTocelci (farah) {
    let result2 = (farah -32) / 1.8;
    return result2;
}

function calculate () {
    let nums_in = +document.getElementById("nums_in").value;
    let result3 = faraTocelci(nums_in);
    console.log("result3");
    document.getElementById("result_cel").innerHTML = result3;
}

function minArr (arr) {
    let min = arr[0];
    for(let i = 0; i<arr.length; i++) {
        if(arr[i]<min) {
            min = arr[i];
        }
    }
    return min;
}

function maxArr (arr) {
    let max = arr[arr.length-1];
    for(let i = arr.length -1; i>=0; i--) {
        if(arr[i]>max) {
            max = arr[i];
        }
    }
    return max;
}

function feetTometers (number) {
    let result = 0.305 * number;
    return result;
}

function metersTofeet (number) {
    let result = 3.279 * number;
    return result;
}

