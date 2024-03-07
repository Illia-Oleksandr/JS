// // while -цикл з передумовою
// let a = 1;

// while (a < 10) {
//     console.log(`[${a}] - One more iteration...`);
//     ++a;
// }

// console.warn('Finish');

// //for
// for (let i = 1; i < 10; i++) {
//     console.log(`[${i}] - One more iteration...`);
// }

// while (+prompt('Enter your number') > 0) {
//     console.log('Great!');
// }
// //do while -цикл з післяумовою
// let number;
// do {
//     number = +prompt('Enter your number');
// } while (number < 0);

//for in

let array = [4, 6, 2, 6, -8, 0, 85, 120, 3];

for (const k in array) {
    console.log(`Key: ${k}`);
}

//for of
console.log('Array values:');
for (const elem of array) {
    console.log(`Element: ${elem}`);
}

let prices = [];
let value = Math.floor((Math.random() * 100));
for (let i = 0; i < 10; i++) {
    prices.push(value);
}

for (const e of prices) {
    console.log(`Price: ${e}$`);
}