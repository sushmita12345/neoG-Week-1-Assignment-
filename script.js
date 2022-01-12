
//********************************************************* Easy level ************************************************************//


//Question 1: Given a and b, your function should return the value of ab


// const power = (a,b) => Math.pow(a, b);
// console.log(`The power is ${power(2, 3)}`);

//********************************************************************************************************************************//

//Question 2: Given length of a regular hexagon, your function should return area of the hexagon.

// let areaOfHexagon = (a) => (3 * Math.sqrt(3) * (a * a)) / 2;   
// console.log(`The are of Hexagon is: ${(areaOfHexagon(10)).toFixed(2)}`);

//********************************************************************************************************************************//


//Question 3: Given a sentence, your functions should return the number of words in the sentence.
//const countWords = sentence => sentence.match(/(\w+)/g).length;
//console.log(`There are ${countWords("We are neoGrammers")} words in this sentence.`);

//********************************************************************************************************************************//


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

//********************************************************************************************************************************//


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

//********************************************************************************************************************************//


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




//*****************************************************  Medium level ***********************************************************//



//Question 1: Given an array, your function should return the length of the array.

// const arrayLength = (a,b,c,d) => arrayLength.length;
// console.log(`The length of new array is: ${arrayLength(1,2,3,4)}`);

//********************************************************************************************************************************//


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

//********************************************************************************************************************************//


//Question 3: Given an array and two numbers, your function should replace 
//all entries of first number in an array with the second number.



// const replaceArray = (arrValue, target, change) => {
    
//     for(let i=0; i<arrValue.length; i++) {
//         if (arrValue[i] === target) {

//             arrValue.splice(arrValue.indexOf(target), 1, change);
//         }                               
//     }
//     return arrValue;
// }

// console.log(replaceArray([1,5,3,5,6,8], 5, 10));

//********************************************************************************************************************************//


// Question 4: Given two arrays, your function should return single merged
// array.

// const mergeArray = (arr1, arr2) => {
//     return arr1.concat(arr2);

// }
// console.log(mergeArray([1,3,5], [2,4,6]));


//********************************************************************************************************************************//


//Question 5: Given a string and an index, your function should return the
// character present at that index in the string.

// const findCharIndex = (text, ele) => {
//     let indexValue = text.charAt(ele);
//     return indexValue;
// }
// console.log(findCharIndex(("neoGrammer"), 5));

//********************************************************************************************************************************//



//Question 6:Given two dates, your function should return which one comes before the other.

// const minDate = (d1, d2) => {
//     const a1 = new Date(d1)
//     const a2 = new Date(d2);
//     a1 > a2 ? console.log(d1) : console.log(d2);

// }
// (minDate("2021/05/02", "2021/01/24"))


// ******************************************************** Adavanced Level **************************************************** //

// Question 1: Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.


// const encodeString = (text, num) => {
//     text = text.toLowerCase();

//     let result = '';
//     let charcode = 0;

//     for(let i of text) {
//         charcode = (i.charCodeAt()) + num <= 122 ? i.charCodeAt() + num : i.charCodeAt() + num - 26;
//         // console.log(i);
//         result += String.fromCharCode(charcode);
//         // console.log(result);
//     }
//     return result;
// }
// console.log(encodeString("abcz", 2))

//********************************************************************************************************************************//


//Question 2: Given a sentence, return a sentence with first letter of all words as capital.


// const toSentenceCase = (text) => {
//     return text
//     .toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }

// console.log(toSentenceCase("we are neoGrammers"));

//Question 3: Given an array of numbers, your function should return an array in the ascending order.

//********************************************************************************************************************************//


// const sortArray = (input) => {
//     return input.sort((a,b) => a-b);
    
//     // return input.sort((a,b) => a-b);
//     // return input.sort();
    
// }
// console.log(sortArray([100,83,32,9,45,61]));


//********************************************************************************************************************************//


//Question 4: Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.

// const reverseCharacterOfWord = (text) => {
//     return text.split('').reverse().join("");

// }

// console.log(reverseCharacterOfWord("we are neoGrammers"));


//******************************************** ES6+ assignment question from Rohit's notion ***************************************//

// Question 1:

// let aloo = 1;
// if (aloo == 1) {
//    let a = 2;
//    console.log(a);
// }
// console.log(aloo);

//********************************************************************************************************************************//


// const multiply = (x,y) => x*y;
// console.log(`The multiple is: ${multiply(2,3)}`);

//********************************************************************************************************************************//


// const customer = {
//     name1: "Bhaalo"
// };
// const card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
// };

//********************************************************************************************************************************//


// const {name1} = customer;
// const {amount, product, unitprice} = card;

// console.log(`Hello ${name1} wants to buy ${amount} ${product} for price of ${unitprice} per price`);

//********************************************************************************************************************************//


// let [CEO, , Mentor] = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
 
// console.log(CEO);
// console.log(Mentor);

//********************************************************************************************************************************//


// let arr = ["MA", "TA", "PA", "CA"];

// let [firstName, surname] = arr;
// console.log(firstName);
// console.log(surname);

//********************************************************************************************************************************//


// const Aaloo = "Tasty";
// const Bhaloo = "Cute";
// const Obj = {
//   Aaloo,
//   Bhaloo
// };

//********************************************************************************************************************************//


// const a = 5;
// const b = 10;
// console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

//********************************************************************************************************************************//


// const arithmeticsObj = {
//     sum: sum = (num1, num2) => num1 + num2,
//     multiply: multiply = (num1, num2) => num1 * num2
// };


//********************************************************************************************************************************//


// let avengers = {
//     operation: "Assemble",
//     members: [

//         {
//             ironMan: "Tony Stark"
//         },
//         {
//             captainAmerica: "Steve Rogers"
//         },
//         {
//             blackWidow: "Natasha Romanoff"
//         }
//     ]
// };
// let [operation,members] = [avengers.operation,avengers.members];


//********************************************************************************************************************************//


// Question 2: ES6 => ES5

// function packIt(ele) {
//     console.log(ele);
// }

// packIt([1,2,3,4,5])


//********************************************************************************************************************************//


//Question 3: Guess the output

// const hello = () => "Hello"
// const welcome = () => "Welcome"
// const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
// console.log(Hello, Welcome)
 
//O/p => Namaste Welcome

//Here Hello takes the value Namaste bcz it is defined
//in the left side & there is no value for Welcome in left side
//so it takes the value from welcome function


//********************************************************************************************************************************//


// const obj = {
//     aloo : 1,
//     bhallo : 2
// }

// const {c : aloo = [2,3,4].push(5), aloo} = obj 

// console.log(aloo)

//O/p => SyntaxError: Identifier 'aloo' is already 
//been declared

//Here if we change the one value of aloo with other
//name then error will be removed