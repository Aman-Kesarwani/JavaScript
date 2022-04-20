// Factory Function
function createCircle(radius){

    return{
        radius,
        draw: function(){

            console.log('draw');

        }
    };
}

const cirlce = createCircle(1);


// Constructor Function 

function Circle(radius){

    this.radius = radius;
    this.draw = function(){

        console.log('draw');
    }
}

const another = new Circle(1);


let x = {};

const Circle1  = new Function('radius', `
this.radius = radius,
this.draw = function() {

    console.log('draw');
}
`);

Circle.call({}, 1);
Circle.apply({}, [1,2,3]);

const circle = new Circle1(2);