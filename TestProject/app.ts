//Lab 1
let str1:string = "abcd" 
console.log(str1.length)        // 1.1
console.log(str1.charAt(1))     // 1.2
console.log(str1[1])            // 1.3
console.log(str1.charAt(100))   // 1.4
console.log(str1[100])
let strA : string = `Hello`
let strB : string = `World`
console.log(strA + " " + strB)  // 1.5

//Lab 2
let strEx:string = `microsoft excel`
console.log(strEx.toUpperCase())      // 2.1
let strEx2:string = `GOOGLE AND APPLE`
console.log(strEx.toLowerCase())      // 2.2
let strEx3:string = `hello world`
let strEx4:string = strEx3[0].toUpperCase() + strEx3.substring(1,6) + strEx3[6].toUpperCase() + strEx3.substring(7,11)
console.log(strEx4)                   // 2.3

//Lab 3
let strL3:string = `Hello world`      // 3.1
console.log(strL3.startsWith(`Hello`) + " // " + strL3.startsWith(`World`))
console.log(strL3.endsWith(`Hello`) + " // " + strL3.endsWith(`world`))
// 3.2
console.log(`Computer`.slice(3,6))    // a
console.log(`Death Race`.slice(0,5))  // b
console.log(`Republican`.slice(2,8))  // c
