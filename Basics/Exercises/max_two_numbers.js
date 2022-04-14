function getMaxTwoNumbers(num1, num2){

    if(num1 > num2) return num1;
    return num2;
}

function getMaxTwoNumbers1(num1, num2){

    return (num1 > num2)? num1:num2;
}

let num1 = 12;
let num2 = 10;

console.log("The two number supplied are: ", num1," " ,num2)
let maxNumber = getMaxTwoNumbers1(num1, num2 )

console.log("The Max number is: ", maxNumber);