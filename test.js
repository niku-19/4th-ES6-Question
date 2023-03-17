// // // // // const mother = {name : "rina" , age : 23};

// // // // // const changeAge = ({age}) => ({...mother , age : age - 5});

// // // // // console.log(changeAge(mother));

// // // // const color = ['red','green','blue','pink','yellow'];

// // // // const addColor = arr => ([...color , 'black','white']);

// // // // console.log(addColor(color));

// // // const birthaday = (person) => ({...person , age : person.age + 1});

// // // console.log(birthaday({
// // //   name : "nikhil",
// // //   age : 23
// // // }))

// // const numOfArray = [1,2,3,4,5,6,7];

// // const squareFunc = arr => arr.map((items) => items * items);
// // console.log(squareFunc(numOfArray))

// const strArr = [{name : 'nikhil'},{name : 'ranjan'},{name : 'shilpi'}];

// const giveName = strArr => strArr.map(eachName => eachName.name)
// console.log(giveName(strArr))

const numbers = [1,34,53,2,3,44,66,7]

const findNumber = numbers => numbers.find(eachNumber => eachNumber === 70);

console.log(findNumber(numbers));