// let text:string;
// text = 'Hello World'
// let text2:string;
// text2 = 'Hello 2'
// console.log(text)
// console.log(text2)
//Lab 1
let str1 = "abcd";
console.log(str1.length); // 1
console.log(str1.charAt(1)); // 2
console.log(str1[1]); // 3
console.log(str1.charAt(100)); // 4
console.log(str1[100]);
let strA = `Hello`;
let strB = `World`;
console.log(strA + " " + strB); //5
//Lab 2
let strEx = `microsoft excel`;
console.log(strEx.toUpperCase()); // 1
let strEx2 = `GOOGLE AND APPLE`;
console.log(strEx.toLowerCase()); // 2
let strEx3 = `hello world`;
let strEx4 = strEx3[0].toUpperCase() + strEx3.substring(1, 6) + strEx3[6].toUpperCase() + strEx3.substring(7, 11);
console.log(strEx4); // 3
//Lab 3
let strL3 = `Hello world`; // 1
console.log(strL3.startsWith(`Hello`) + " // " + strL3.startsWith(`World`));
console.log(strL3.endsWith(`Hello`) + " // " + strL3.endsWith(`world`));
console.log(`Computer`.slice(3, 6));
console.log(`Death Race`.slice(0, 5));
console.log(`Republican`.slice(2, 8));
//# sourceMappingURL=app.js.map