
//********************* Easy level ************************//


//Question 1: Given a and b, your function should return the value of ab


// const power = (a,b) => Math.pow(a, b);
// console.log(`The power is ${power(2, 3)}`);



//Question 2: Given length of a regular hexagon, your function should return area of the hexagon.

// let areaOfHexagon = (a) => (3 * Math.sqrt(3) * (a * a)) / 2;   
// console.log(`The are of Hexagon is: ${(areaOfHexagon(10)).toFixed(2)}`);



//Question 3: Given a sentence, your functions should return the number of words in the sentence.
//const countWords = sentence => sentence.match(/(\w+)/g).length;
//console.log(`There are ${countWords("We are neoGrammers")} words in this sentence.`);



//Question 4: Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// const findMin = (a,b) => a<b ? a : b;
// console.log(`Minimum number is: ${findMin(3,5)}`);

//By using Rest Operator

// const myArray = [3, 5, 9, 2, 3];
// const minValue = Math.min(...myArray);
// console.log(`Minimum number is: ${minValue}`);

//By using function

// const myArray = (a,b,c,d) => {
//     let maxValue = Math.max(a,b,c,d);
//     return maxValue;
// }
// console.log(myArray(2,5,7,4));



//Question 5: Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// const findMax = (a,b) => a>b ? a : b;
// console.log(`Minimum number is: ${findMax(3,5)}`);

//By using Rest Operator

// const myArray = [3, 5, 9, 2, 3];
// const maxValue = Math.max(...myArray);
// console.log(`Maximum number is: ${maxValue}`);


//Using arrow function
// const myArray = (a,b,c,d) => {
//     let minValue = Math.min(a,b,c,d);
//     return minValue;
// }
// console.log(myArray(2,5,7,4));



//Question 6: Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:


// const typeOfTriangle = (a,b,c) => {
//     let check;
//     const sum = a + b + c;
//     if(a!=0 && b!=0 && c!=0) {
//         check = (sum === 180 && a === b && b === c && a === c) ? console.log(`The triangle is equilateral triangle.`) : 
//         (sum === 180 && a !=b && b != c && a != c) ? console.log(`The triangle is isoceles triangle.`) :
//         (sum === 180) ? console.log(`The triangle is scalene triangle.`) : console.log("Not a Triangle at all!")
         
//     }
//     else {
//         console.log("Not a Triangle at all!");
//     }
//     return check;
// }
// typeOfTriangle(30,60,90);




//*****************  Medium level **********************//



//Question 1: Given an array, your function should return the length of the array.

// const arrayLength = (a,b,c,d) => arrayLength.length;
// console.log(`The length of new array is: ${arrayLength(1,2,3,4)}`);



//Question 2: Given an array and an item, your function should return the index at which the item is present.

//  //let arrValue = [2,5,1,7,3];
// const indexArray = (arrValue, target) => {
//     // let index = 0;
//     //let curr = indexArray[0];
//     for(let i=0; i<arrValue.length; i++) {
//         if(arrValue[i] === target) {
//             return i;
//         }
//     }

// }

//console.log(indexArray([2,5,1,7,3], 5));

//Question 2: Given an array and two numbers, your function should replace all entries of first number in an array with the second number.



