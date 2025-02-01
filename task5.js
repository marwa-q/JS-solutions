"use strict" 

let obj = {name: "Adam" , age: 25 , gender:"male"};


//Q1
console.log(Object.keys(obj));

//Q2
console.log(Object.values(obj));

//Q3
console.log(Object.entries(obj));

//Q4
let obj2 = {city: "Amman"};
console.log(Object.assign(obj , obj2)
);

//Q5
Object.freeze(obj);

//Q6
Object.seal(obj2);