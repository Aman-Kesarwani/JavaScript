function isPrime(number, limit){
    for(let factor = 2; factor < number; factor++ ){
        if (number % factor ===0){
            return false;
        }
    }
    return isPrime;
}

function showPrimes(limit){
    for(let number=2; number<=limit; number++){
        if(isPrime(number, limit)){
            console.log(number)
        }
    }
}

showPrimes(20);

