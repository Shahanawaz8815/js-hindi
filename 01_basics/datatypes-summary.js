//Primitive DataTypes

//we have 7 types of primitive data types

// String, Number, Boolean, Undefined, Null, Symbol,
//  BigInt.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
 let userEmail;

 const id = Symbol('123');
 const anotherId = Symbol('123');

// console.log(id === anotherId);// false

const bigNumber = 376537625375345n;
// console.log(typeof bigNumber) //typeof Bigint


//non-primitive datatypes(Reference type)

//Array, Objects, Functions

const heros = ["ironman", "naagraj", "doga"];

let myObj= {
    name: "shahanawaz",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction)//fuction
console.log(typeof id)//symbol