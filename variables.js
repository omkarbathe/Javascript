

// variable is container that hold values
//global scoped variable
var a = 10;

//block scoped variabale
let b = 20;

//This is constant variable we cannot redeclare again later
const name = "omkar";


// primitive datatype use stack memory
// non-primitive datatype use heap memory

// primitive datatype gives the copy of variable
let x=10
let y=x;
console.log(y);
y=12
// the y variable hold the copy of x if we change the value of y it does not change value of x
console.log(x)




// but the object is non-primitive datatype

let userOne ={
    name:"omkar ",
    email :"omkarbathe555@gmail.com"
}
console.log(userOne);

let userTwo = userOne

// this line will change in both object because it refers same object
userTwo.email = "omkarbathe12@gmail.com"

console.log(userOne);

