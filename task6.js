"use strict"

//Q1
let q1 = 1;
while(q1 <= 10) {
    console.log(q1);
    q1++;
}


//Q2
let array1 = [2,5,7,1,,9];
for(let i in array1){
    console.log(array1[i]);
}

//Q3
for(let i = 0; i<=10; i++){
    if(i%2==0)
        console.log(i);
}

//Q4
let sum = 0;
for(let i= 1; i<=10; i++){
    sum+=i;
}
console.log(sum);

//Q5
let max = array1[0];
for(let i in array1) {
    if(array1[i] > max)
        max = array1[i];
    }
console.log(max);

//Q6
let length = array1.length;
let sum2 = 0;
for(let ele in array1){
    sum2 += ele;
    }
let avarage = sum/length;
console.log(avarage);

//Q7
let fact = 5;
for(let i = fact-1; i>0; i--){
    fact *= i;
    }
console.log(fact);

//Q8
console.log("------Fib------");

let a = 0, b = 1;
let n = 7;
for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
    }

//Q9
console.log("------Prime------");

let limit = 20;
for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
    }
    if (isPrime) {
        console.log(num);
        }
    }

  
//Q10
console.log("------2D array------");

let array2d = [[1,2,3] , [4,5,6]];
for(let i = 0; i<array2d.length; i++){
    for(let j =0; j<array2d[1].length; j++){
        console.log(array2d[i][j]);
    }
}

//Q11
console.log("------Reverse array------");

let array2 = [1, 2, 3, 4, 5, 6];
for(let i = array2.length-1; i>=0; i--){
    console.log(array2[i]);
}

//Q12
console.log("------Step array------");
let step = 2;
for(let i= 0; i<array2.length; i+=step){
    console.log(array2[i]);
    
}

//Q13
console.log("------Frequency array------");
let target = 1;
let array3 = [1, 2, 1, 3, 2, 1];
let f = 0;
for(let i in array3){
    if(array3[i] == target)
        f++;
}
console.log(f);

//Q14
const heros = [ {name: 'Iron Man', power: 'Tech'}, {name: 'Spider-Man', power: 'Spider abilities'}, {name: 'Thor', power: 'Godly powers'}, {name: 'Hulk', power: 'Super strength'} ]

const newHerosArray = heros.map((hero, index) => {
    return {
      id: index,
      hero: hero.name,
      power: hero.power
    };
  });
console.log(newHerosArray);

//Q15
const arrayNames = ["jajasash" , "uaurtgcg" , "dedyec" , "yuyu"];
const filtered = arrayNames.filter((ele) => ele.length > 7);
console.log(filtered);

//Q16
const array4 = [1,2,3,4,5,6,7,8,9,10];
const sum3 = array4.reduce((acc, num) => {
    if (num % 5 == 0) {
      acc += num * num;
    }
    return acc;
  });
console.log(sum3);
