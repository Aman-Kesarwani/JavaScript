
function countTruthy(array, length){
    let counter = 0;

    for(let item of array){
        if(item) counter++;
    }
    return counter;
}

const array = [0, null, undefined, '', 2, 4, NaN];

const count = countTruthy(array, array.length);

console.log(count);