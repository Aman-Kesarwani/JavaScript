let x = 10;
let y = 20;


console.log(x+y);

console.log(x-y);

console.log(x*y);

console.log(x /y);

console.log(x % y);

console.log(x**y);

console.log(++x);

console.log(x++);

console.log(++x);

console.log(--x);

console.log(x--);

console.log(x);

let z = 10;

y = y+2;

console.log(y);

x = x*3;

x*= 3;

console.log(x);

let b = 10;

console.log(b<12);
console.log(b<=12);

console.log(b>=12);


console.log(b != 10);

//strict equality
console.log(1==='1');

//equality
console.log('1'==1);
console.log(1=='1');
console.log(true==0);
console.log(true==1);

console.log(1==true);
console.log(1==false);


let points = 110;
let type = points > 100 ?'gold': 'silver';

console.log(type);

console.log(false && false);

console.log(true && true);

let highIncome = true;
let goodCreditScore = true;

let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

let highIncome1 = false;
let goodCreditScore1 = false;

let eligibleForLoan1 = highIncome1 || goodCreditScore1;

console.log(eligibleForLoan1);

let applicationRefused = !eligibleForLoan1;

console.log(applicationRefused);

let userCOlor = '';
let defColor = 'blue';
let currColor = userCOlor || defColor;

console.log(currColor);


//bitwise operators

// 1 = 00000001
// 2 = 00000010

console.log( 1 | 2); //bitwise OR

console.log( 1 & 2); //bitwise and

// Read, Write, Execute

const readPermission = 4;    // 00000100
const writePermission = 2;   // 00000010
const executePermission = 1; // 00000001

let myPermission =0;

myPermission =  readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & writePermission) ? 'yes' : 'no';

console.log(message);

let u  = 2+ 3 *4;

console.log(u);

u  = (2+ 3) *4;


console.log(u);


let r = 'red';

let bl = 'blue';

let temp = bl;

bl = r;
r = temp;

console.log(bl);
console.log(r);

