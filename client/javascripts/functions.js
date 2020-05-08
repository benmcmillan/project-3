// jshint esversion: 6
//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1
}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

let bitBatBotOrNot = (n) => {
  //your code goes here
  let result = "";
  if (n % 3 == 0) {
    result = `${result}Bit`;
  }
  if (n % 5 == 0) {
    result = `${result}Bat`;
  }
  if (n % 7 == 0) {
    result = `${result}Bot`;
  }
  if (n%3 != 0 && n%5 != 0 && n%7 != 0) {
    result = `${result}Not`;
  }
return result;
};


let bitBatBotOrNotLabel = (n) => {
  //your code goes here
  let result = `${n}: ${bitBatBotOrNot(n)}`;
  return result;
};

let findAllbitBatBotOrNots1 = (arr) => {
  //your code goes here
  //use map method
  return arr.map(bitBatBotOrNotLabel);
};

let findAllbitBatBotOrNots2 = (arr) => {
  //your code goes here
  //use for statement
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(bitBatBotOrNotLabel(arr[i]));
  }
  return result;
};

let findAllbitBatBotOrNots3 = (arr) => {
  //your code goes here
  //use forOf statement
  let result = [];
  for (var i of arr) {
    result.push(bitBatBotOrNotLabel(i));
  }
  return result;
};

let findAllbitBatBotOrNots4 = (arr) => {
  //your code goes here
  //use forEach method
  let result = [];
  arr.forEach((item, i) => {
    result.push(bitBatBotOrNotLabel(i));
  });
  return result;
};

let findAllbitBatBotOrNotsXC = (arr) => {
  //your code goes here
  //use forIn method
  let result = [];
  for (const i in arr) {
    result.push(bitBatBotOrNotLabel(i));
  }
  return result;
};

//test the functions

findAllbitBatBotOrNots1(arrOf1To100);

findAllbitBatBotOrNots2(arrOf1To100);

findAllbitBatBotOrNots3(arrOf1To100);

findAllbitBatBotOrNots4(arrOf1To100);

findAllbitBatBotOrNotsXC(arrOf1To100);
