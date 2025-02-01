"use strict"
console.log(findIndex(
    [91 , 54, 29 ,74] , 54
));

//Q1
function findSmallest(array) {
    let temp = array[0];
    for(let i in array) {
        if(array[i] < temp){
            temp = array[i];
        }
    }
    return temp;
}

//Q2
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}

//Q3
function factorial(num){
    if (num > 0 && num <=1)
        return 1;
    return num * factorial(num-1);
}

//Q4
function oddOrEven(num) {
    if(num % 2 == 0)
        return "Even";
    return "Odd";
}

//Q5
function addUp(num){
    if (num > 0 && num <=1)
        return 1;
    return num + addUp(num-1);
}

//Q6
function minMaxLengthAvarage(array) {
    let min = array[0];
    for(let i in array) {
        if(array[i] < min)
            min = array[i];
    }

    let max = array[0];
    for(let i in array) {
        if(array[i] > max)
            max = array[i];
    }
    let length = array.length;
    let sum = 0;
    for(let ele in array){
        sum += ele;
    }
    let avarage = sum/length;

    let result = [min , max , length , avarage];

    return result;
}

//Q7
function countWords(str) {
    return str.split(" ").length;
}

//Q8
function multiplyByLength(array) {
    let len = array.length;
    for(let i in array){
        array[i] *= len;
    }
    return array;
}

//Q9
function checkEnding(str1 , str2){
    return str1.substring(str1.length-2 ,) == str2.substring(0 , 2);
}

//Q10
function doubleChar(str){
    let result = "";
    for(let char in str){
        result += str[char] + str[char];
    }
    return result;
}

//Q11

function findIndex(array , ele) {
    return array.indexOf(ele);
}