function showNumbers(limit){

    let i=0;
    while (i<= limit){

        if(i % 2 === 0)
            console.log(i, "Even");

        else
            console.log(i, "Odd");

        i++;
    }
  
}

showNumbers(10);