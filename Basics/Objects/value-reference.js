let x = 10;
let y = x;

x = 20;

let z  = {value: 10};
let t = z;

z.value = 50;


let number = 90;

function increase(number){

    number++;
}

increase(number);
console.log(number);

let number_1 = {value : 100};

function increase1(number){

    ++number.value;
}

increase1(number_1);

console.log(number_1);