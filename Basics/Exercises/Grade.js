function calculateGrade(marks){

    let size =0;
    let sum =0;
    for(number of marks){
        size = size+1;
        sum = sum + number;

    }

    let average = sum/size;

    if(average < 60)
        console.log('F');

    else if(average < 70)
        console.log('D');
        
    else if(average < 80)
        console.log('C');

    else if(average < 90)
        console.log('B');

    else 
        console.log('A');
}

const marks = [50, 60, 50];

calculateGrade(marks);