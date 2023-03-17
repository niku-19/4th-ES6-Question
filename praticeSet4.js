//1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array.
// Avoid using in-built methods.
// let array = [4, 78, 8, 3, 6, 0, 12, 34];
// using built in method;

// const sortedArr = array.sort((a, b) => b - a);
// console.log(`The maximum element in the array is ${sortedArr[0]}`);

//using without built in method

// const getMaxElement = arr => {
//   let maxElement = 0;
//  for(let i = 0; i < arr.length ; i++) {
//   if(maxElement < arr[i]){
//     maxElement = arr[i];
//   }
//  }
//  return maxElement;
// }

// console.log(getMaxElement(array));

// 2.Write an ES6 function that takes an array of numbers and
// returns the average of all the numbers.
// Avoid using in-built methods.

// const calculateAverage = arr => {
//   let sum = 0;
//   for(let i = 0; i < arr.length ; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// }
// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3

// 3. write an ES6 function that takes an array of numbers
//    and converts even numbers to odd numbers by adding 1 to that number.

// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const convertEvenToOdd = arr => {
//   for(let i = 0; i < arr.length ; i++) {
//     if(arr[i] % 2 === 0) {
//       arr[i] += 1;
//     }
//   }
//   return arr;
// }
// console.log(convertEvenToOdd(numArr));
// // [1, 3, 3, 5, 5, 7, 7, 9, 9]

// 4. write an ES6 function that takes an array of words and
// returns an array with all its elements whose length is greater than 5.
// var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
// const filterWords = arr => {
//   let lengthGrt5 = [];
//   let counter = 0;
//   for(let i = 0; i < arr.length ; i++) {
//     if(arr[i].length > 5){
//       lengthGrt5[counter] = arr[i];
//       counter++
//     }
//   }
//   return lengthGrt5;
// }
// console.log(filterWords(words)) // ["repeat", "community"]

// 5.Write an ES6 function that takes an array of strings
// and returns a new array with each string capitalized.

// const capitalizeWords = (arr) => {
//   let capStringArr = [];
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     capStringArr[counter] = arr[i].toUpperCase();
//     counter++;
//   }
//   return capStringArr;
// };

// console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]));
// ["EAT", "SLEEP", "CODE", "REPEAT"]

// 6.Write an ES6 function that takes an array of objects
// and a property name and returns a new array with only
// the values of that property. Avoid using in-built methods.

// const getValues = (arr, propsName) => {
//   let propsArray = [];
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     propsArray[counter] = arr[i][propsName];
//     counter++;
//   }
//   return propsArray;
// };
// console.log(
//   getValues(
//     [
//       { name: "John", age: 21 },
//       { name: "Mary", age: 22 },
//       { name: "Peter", age: 23 },
//     ],
//     "name"
//   )
// ); // ["John", "Mary", "Peter"]

// 7.Write an ES6 function that takes the users' details and
// returns the data with team ID. Avoid using in-built methods.

// const userData = { firstName: "John", lastName: "Dee" };
// const podAndTeamAllocation = (userData) => ({
//   ...userData,
//   teamId: Math.floor(Math.random() * 999999 + 1),
// });

//another method

// const podAndTeamAllocation = (userData) => {
//   userData.teamId =  Math.floor(Math.random() * 999999 + 1);
//   return userData;
// };

// console.log(podAndTeamAllocation(userData));
// {firstName: 'John', lastName: 'Dee', teamId: 667543}

// 8.Write an ES6 function which checks if a student already has a team.
// If team is not given then add them to team “A” and return the object
// else do nothing and return the same object. Avoid using in-built methods.

// const checkForTeam = (userData) => {
//   if (!userData.team) {
//     userData.team = "A";
//   }

//   return userData;
// };

// console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// {firstName: 'Penn', lastName: 'Ma', team: A}

// console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: "B"}))
// {firstName: 'John', lastName: 'Dee', team: B}

// console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))
// {firstName: 'Priya', lastName: 'Raj', team: A}

// 9. Destructure the following code to get the desired outputs.
// Avoid using in-built methods.

// const book = {
//   title: "JavaScript: The Definitive Guide",
//   authors: [
//     { name: "David Flanagan", age: 49 },
//     { name: "Yukihiro Matsumoto", age: 57 },
//   ],
//   publisher: { name: "O'Reilly Media", location: "CA" },
// };

// const {
//   title,
//   authors: [{ name: author1 }, { name: author2 }],
//   publisher: { name: publisherName },
// } = book;

// console.log(title); // JavaScript: The Definitive Guide
// console.log(author1); // David Flanagan
// console.log(author2); // Yukihiro Matsumoto
// console.log(publisherName); // O'Reilly Media

// 10. Write an ES6 function that takes an array of objects and
// returns the sum of all ages.

// var array = [
//   {
//     name: "Jay",
//     age: 60,
//   },
//   {
//     name: "Gloria",
//     age: 36,
//   },
//   {
//     name: "Manny",
//     age: 16,
//   },
//   {
//     name: "Joe",
//     age: 9,
//   },
// ];

// const sumOfAges = arr => {
//   let sumOfAges = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumOfAges += arr[i].age
//   }
//   return sumOfAges;
// }

// console.log(sumOfAges(array)); // 121

// const num = [1, 2, [3, 4, 5]];

// // function sumArray(arr) {
// //
// // }

// const sumOfArrEle = (arr) =>
//   arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e);

// console.log(sumOfArrEle(num));
