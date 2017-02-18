

function add (a, b) {
  return a + b;
}

console.log(add(1,3));

// ES6 Spread Operator
var toAdd = [9,5];
console.log(add(...toAdd));

var groupA = ['Stuart','Stephen'];

var groupB = ['Troy', 'John'];

var finalArray = [...groupA, ...groupB];
console.log(finalArray);

var person = ['Andrew',25];
var person2 = ['Jen', 29];

function greeting (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greeting(...person);
greeting(...person2);

var names = ['Mike', 'Ben'];

var final = ['Andrew', ...names];

final.forEach(function (name) { 
  console.log('Hi '+ name);
});