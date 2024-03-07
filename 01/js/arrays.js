var array = new Array(10);
array[0] = 100;
array[1] = 200;
array[2] = 300;

console.log('Array length:', array.length);
console.log('Array values:' + array);

var array = [];
var array = [4, 6, 123, 1, 604, -4, 0, 123, 44];

console.log('Arrray:' + array);
console.log('Last item:' + array[array.length - 1]);

array[20] = 777;
console.log('Element 20: ' + array[20]);
console.log('Array length: ', array.length);

console.log('Original array: ', array);

array.push(777);//add last
console.log("Array: ", array);

array.pop();//delete last
console.log("Array: ", array);

array.shift();//delete first
console.log("Array: ", array);

array.unshift(555);//add first
console.log("Array: ", array);

console.log('Index of first 123:', array.indexOf(123));
console.log('Index of last 123:', array.lastIndexOf(123));

console.log('Found:', array.find((elem) => elem < 0));

array.sort();
console.log('sorted by default:', array);

array.sort((a, b) => a - b);
console.log('Sorted with custom func:', array);

array.splice(2, 3);
console.log('After remove:', array);

const copy = array.slice(1, array.length - 1);
console.log('Copied array:', copy);

const filtered = array.filter((el) => el % 2 == 0);
console.log('Filtered array', filtered);

console.log('Reversed:', array.reverse());

const colors = ['red', 'brown', 'yellow', 'blue'];

const str = colors.join(' - ');
console.log('Str after join: ', str);