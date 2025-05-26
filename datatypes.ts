// ==============================
// BASIC TYPES
// ==============================

// number
let age: number = 25;
let price = 99.99; // inferred as number

// string
let firstName: string = "Orkhan";
let greeting = `Hello, ${firstName}`;

// boolean
let isOnline: boolean = true;
let isLoading = false; // inferred as boolean

// any (not recommended)
let randomValue: any = 42;
randomValue = "Now I'm a string";
randomValue = true;

console.log(age, price, firstName, greeting, isOnline, randomValue);

// ==============================
// ARRAYS & TUPLES
// ==============================

//arrays
let scores: number[] = [90, 85, 100];
let names: string[] = ["Orkhan", "Bob"];

// tuple (fixed-length array with specific types)
let user: [string, number] = ["Orkhan", 30];

console.log(scores, names, user);

// ==============================
// OBJECT
// ==============================

// object with defined structure
let person: { name: string; age: number } = {
  name: "Jane",
  age: 28,
};

// inferred object
let city = {
  name: "Los Angeles",
  population: 4000000,
};

console.log(person, city);

// ==============================
// ENUM
// ==============================

// enum: a set of named constants
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let move: Direction = Direction.Left;
console.log("Direction:", move); // 2

// ==============================
// null & undefined
// ==============================

let emptyValue: null = null;
let notAssigned: undefined = undefined;

console.log(emptyValue, notAssigned);

// ==============================
// never
// ==============================

// function that never returns (throws error)
function throwError(): never {
  throw new Error("Something went wrong!");
}