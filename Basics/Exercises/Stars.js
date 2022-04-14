
function showStars(rows){


    for(let i=1; i<=rows; i++){
        let str ="";

        for(j=0; j<i; j++){

            str = str+ "*";
        }
        console.log(str);
   }
}

showStars(1);