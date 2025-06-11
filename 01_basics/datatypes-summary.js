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
console.log(typeof heros);//Object(Array)
console.log(typeof myFunction)//fuction
console.log(typeof id)//symbol

//++++++++++++++++++++++++++++++++(STACK,Heap memory )++++++++++++++++++++++++++++++++++++

//1.Stack (Primitive Data)
// It give you a copy of data that is stored into a variable 

let myYoutube = "MohammadShahanawaz"

let anotherName = myYoutube

anotherName = "ArbazKhan"
console.log(myYoutube);
console.log(anotherName);

//2.Heap (Non-Primitive Data)
//It dose not give copy of data it gives you a reference of data so,it means if we target the same data 
//by two variable then we chage data in any variable the data will change for both variale bcz it share a original reference of a data.

let userOne = {
    email:"shahanawaz@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "Arbaz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




