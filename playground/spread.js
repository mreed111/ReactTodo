function add (a, b) {
  return (a + b);
}

console.log(add(3,1));

var toAdd = [9,5];
console.log(add(...toAdd));

var groupA = ['Mike', 'John'];
var groupB = ['Craig', 'Fernando'];

var final = [3, ...groupA];

console.log(final);


var person = ['Mike', 59];
var personTwo = ['Kevin', 18];

function sayHi (name, age) {
  console.log('Hi '+name+', you are '+age);
}

sayHi(...person);
sayHi(...personTwo);

var people =[...groupA, ...groupB];

people.forEach(function (name) {
  console.log('Hi '+name);
});
