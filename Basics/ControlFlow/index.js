// hour

// if hour is between 6am and 12 pm - Good Morning
// if hour is between 12 pm and 6pm : Good After noon
// Otherwise : Good Evening !

let hour = 19;

if (hour >= 6 && hour <12){
    console.log('Good Morning');
}
else if (hour>= 12 && hour <18){
    console.log('Good Afternoon');
}
else
    console.log('Good Evening');


let role = 'Guest';

switch (role){

    case 'Guest':
        console.log("Guest User");
        break;

    case 'Moderator':
        console.log("Moderator User");
        break;

    default:
        console.log("Unknown User");

}

if(role === 'Guest'){

    console.log("Guest User");

}

else if(role === 'Moderator'){

    console.log("Moderator User")
}
else console.log('Unknown User');


for (let i = 0; i<5; i++){

    if(i%2 !==0)
    console.log('Hello World', i);

}


for (let i = 5; i>0; i--){
    console.log('Hello World', i);

}

let i = 0;

while (i <= 5) {

    if(i % 2 !== 0) console.log(i);
    i++;
}

// do-whilessss

let j = 7;

do {
    if(j % 2 !== 0) console.log(j);
    j++;

}while(j<=5)

let k =0;

while (k<5){

    console.log(k);
    k++;
}

// for-in

const person = {
name: 'Aman',
age: 30
};

for(let key in person){
    console.log(key, person[key]);

}

a= [person];
for(let b of a){
    console.log(a);
    
}

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

// for-of

for (let color of colors)
    console.log(color);


let m = 0;

while (m <= 10){

    if(m==5){
        break;
    }

    if(m %2 == 0){

        m++;
        continue;


    }
    console.log(m);
    m++;
}