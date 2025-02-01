"use strict"

//Q1
function cashRatio (cash , liabilities) {
    return (cash/liabilities);
}

//Q2
function netIncome(revenues , expenses) {
    return (revenues - expenses);
}

//Q3
function totalAssets (liabilities , equity) {
    return (liabilities + equity);
}

//Q4
function netIncome(profit , sales){
    return (profit*sales);
}

//Q5
function avarage (num1 , num2 , num3) {
    return (num1 + num2 + num3)/3;
}

//Q6
function discount(price , discountPercent) {
    return price - ((discountPercent * price) / 100);
}

//Q7
function ageLimit(age) {
    return age > 18 && age < 30;
}

//Q8
function exponential(num , power) {
    return Math.pow(num , power);
}

//Q9 
function reminder(num1 , num2){
    return num1 % num2;
}

//Q10
function orangeString() {
    let str = "Welcome to Orange";
    console.log(str.toUpperCase());
    console.log(str.substring(8, 10).toUpperCase());
    console.log("Hello from " + str.substring(11 , ));
    console.log(str.toLowerCase());
    console.log(str.length);
    console.log('Welcome to "Orange"');
    console.log(str + " Jordan");

}

//Q11
function replaceLetter(str) {
    let firstLetter = str[0];
    return str.replace(/firstLetter/g , '*');
}

//Q12
function orahgeArray() {
    let array = ["Coding", "Academy", "By", "Orange"];
    console.log(array);
    console.log(array.slice(0 , 2));
    array.push("By" , "Orange");
    console.log(array);
    console.log(array.toString().replace(/,/g , " "));
    
    
}

orahgeArray();