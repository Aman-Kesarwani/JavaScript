

function fizzBuzz(input){

    if(typeof input !== 'number'){
        return NaN;
    }

    let calulatedString ='';

    if(input % 3 === 0 && input %5 ===0)
    {
        return 'FizzBuzz';
    }

    else if(input % 3 === 0)
    {
        return 'Fizz';
    }

    if(input %5 ===0)
    {
        return 'Buzz';
    }
    
    return input;
}


const output = fizzBuzz('number');
console.log(output);

