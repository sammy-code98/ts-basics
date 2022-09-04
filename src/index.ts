// type of number
let id: number = 5;

console.log("ID is :", id);

// type of string

let userName: string = "sammy";
console.log(userName);

// type of boolean

let isAuth: boolean = true;

// type of any

let x: any = "helloe boy";

// set x to another data type and no error shows

x = true;

// array of numbers

let numArr: number[] = [1, 2, 3, 4, 5];

console.log(numArr.push(3));

let myArr: any[] = [1, "true", true];

// tuple  => with tuple you define the data types in the array

let person: [number, string, boolean] = [2, "samm", false];

// tuple array
let employeData: [string, number][];

employeData = [
  ["sam", 23],
  ["nze", 22],
];

// Union => use when you want a variable to be able to hold more than one type

let userId: string | number = 22;

// enum => enumerated types => define a set of named constants

enum Dir {
  Up,
  Down,
  Left,
  Right,
}

console.log(Dir.Up);

// objects

const user: { id: number; name: string } = {
  id: 1,
  name: "sammy",
};

// or

type Dum = {
  id: number;
  name: string;
};
const dum: Dum = {
  id: 3,
  name: "sam",
};

// Type Assertion
let cid: any = "fed";
// let customer = <number>cid

let customer = cid as number;
customer = 3;

// functions

function addNum(x: number, y: number): number {
  return x + y;
}

// void type
function log(msg : number |  string) :void{
    console.log(msg);
    
}
