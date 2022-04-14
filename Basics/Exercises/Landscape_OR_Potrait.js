function isLandscape(width, height){

    return (width > height);
}

let width = 50;
let height = 60;

let isLand = isLandscape(width, height);

console.log("its landscape: ", isLand)