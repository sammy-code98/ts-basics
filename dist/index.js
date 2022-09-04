"use strict";
// type of number
let id = 5;
console.log("ID is :", id);
// type of string
let userName = "sammy";
console.log(userName);
// type of boolean
let isAuth = true;
// type of any
let x = "helloe boy";
// set x to another data type and no error shows
x = true;
// array of numbers
let numArr = [1, 2, 3, 4, 5];
console.log(numArr.push(3));
let myArr = [1, "true", true];
// tuple  => with tuple you define the data types in the array
let person = [2, "samm", false];
// tuple array
let employeData;
employeData = [
    ["sam", 23],
    ["nze", 22],
];
// Union => use when you want a variable to be able to hold more than one type
let userId = 22;
// enum => enumerated types => define a set of named constants
var Dir;
(function (Dir) {
    Dir[Dir["Up"] = 0] = "Up";
    Dir[Dir["Down"] = 1] = "Down";
    Dir[Dir["Left"] = 2] = "Left";
    Dir[Dir["Right"] = 3] = "Right";
})(Dir || (Dir = {}));
console.log(Dir.Up);
// objects
const user = {
    id: 1,
    name: "sammy",
};
const dum = {
    id: 3,
    name: "sam",
};
// Type Assertion
let cid = "fed";
// let customer = <number>cid
let customer = cid;
customer = 3;
// functions
function addNum(x, y) {
    return x + y;
}
// void type
function log(msg) {
    console.log(msg);
}
