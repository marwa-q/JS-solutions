"use strict"

//Q1
let age = 27
if(age>18)
    console.log("You are an adult");
    
//Q2
let num = 4;
if(num % 2 == 0)
    console.log("The number is even");
    
//Q3
let char = "a";
if(/^[a-zA-Z]$/.test(char))
    console.log("It's a letter");
    
//Q4
let list = [1, 2, 3]
if(Array.isArray(list))
    console.log("It's an array");
    
//Q5
let x = 5;
if(x>0)
    console.log("x is a positive number");
    
//Q9
let z = 9;
if (z%3 == 0)
    console.log("z is a multiple of 3");
    
//Q10
let password = "mypassword123";
if(password.length >= 8)
    console.log("Your password is strong");
    
//Q11
let age2 = 30;
if(age2 >=18 && age2 <= 65)
    console.log("You are of working age");
    
//Q12
let color = "red"
if(color === "red" || color === "green" || color === "blue")
    console.log("color is a primary color");
    
//Q13
function isValidNumber(element){
    if (isNaN(element))
        console.log(element , "is not a valid number");
    else
    console.log(element , "is a number");

}
isValidNumber(15);