
function checkSpeed(speed)
{
    const kmPerPoint = 5;
    const speedLimit = 70;
    if(speed <speedLimit + kmPerPoint){
        console.log("OK");
        return;
    }

    const pointToConsider = speed - speedLimit;

    const calculatePoints = Math.floor(pointToConsider/kmPerPoint);

        if(calculatePoints >= 12){
            console.log("Supsended");
        }
        else{
            console.log("Point : ", calculatePoints);
        }
}

checkSpeed(86);

