// 4 Rounding
// 4.1
let num = 100;
console.log("100 : 0o" + num.toString(8));
num = 111;
console.log("111 : 0o" + num.toString(8));
num = 55;
console.log("55 : 0o" + num.toString(8));
num = 21;
console.log("21 : 0o" + num.toString(8));
num = 99;
console.log("99 : 0o" + num.toString(8));
// 4.2
num = 100;
console.log("100 : 0x" + num.toString(16));
num = 111;
console.log("111 : 0x" + num.toString(16));
num = 55;
console.log("55 : 0x" + num.toString(16));
num = 21;
console.log("21 : 0x" + num.toString(16));
num = 99;
console.log("99 : 0x" + num.toString(16));
// 4.3
console.log(Math.round(12.423));
console.log(Math.round(31313.135));
console.log(Math.round(42.809));
// 5
function rand(min, max) {
    return (Math.random() * (max - min)) + min;
}
console.log(rand(5, 8));
// 6
let A = false, B = true, C = false;
console.log(A || (B && C));
console.log(B || (A || C));
console.log(B && (A || C));
// 7
console.log(typeof (false));
console.log(typeof ("ABD"));
console.log(typeof (113113));
console.log(typeof (null));
console.log(typeof (""));
//console.log(typeof (13qed)) // Compile Error
// Lab Object
let student = {
    name: "J",
    age: 20,
    gender: "M",
    isLearning: false,
    friends: { name: "a", age: 21 }
};
let student2 = {};
for (let key in student) {
    student2[key] = student[key];
}
student2["gender"] = null;
for (let key in student2) {
    console.log(key + " : " + student2[key]);
}
console.log("-----------------------------------------------------");
student["isActive"] = true;
for (let key in student) {
    console.log(key + " : " + student[key]);
}
console.log("-----------------------------------------------------");
delete student["isActive"];
for (let key in student) {
    console.log(key + " : " + student[key]);
}
// Lab Array
let arr = ["Apple", "Cat", "Zoo", "Bird", "Dog"];
let input = arr.filter(i => i.length == 5);
console.log(input.sort()); // Array 1
let numArr = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
let newArr = numArr.filter(i => i.toString().substring(0, 1) == "1");
console.log(newArr); // Array 2
let allfruits = ["Apple", "Mango", "Cat", "Banana"];
allfruits.splice(2, 1, "Orange");
console.log(allfruits); // Array 3
let newMap = arr.map(i => i.toUpperCase());
console.log(newMap); // Array 4(map)
console.log(newArr); // Array 5(filter)
let testFind = [{ id: 1, value: "hi" }, { id: 2, value: "dude" }, { id: 3, value: "fine" }];
let finder = testFind.find(i => i.id > 1);
console.log(finder); // Array 6(find)
arr.forEach((v, i) => console.log(`At index : ${i} has value : ${v}`)); // Array 7(forEach)
//# sourceMappingURL=app.js.map