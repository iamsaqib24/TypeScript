// let num1: number = 24;
// let num2;

// function sum(num1, num2: number) {
//   return num1 + num2;
// }
// sum(num1, 6);

// Another function

// function getTotal(numbers: number[]) {
//   return numbers.reduce((acc, item) => {
//     return acc + item;
//   }, 0);
// }
// console.log(getTotal([3, 5, 2]));

// Objects in ts,

// const user = {
//   firstName: "Mohammad",
//   lastName: "Saqib",
//   age: 30,
// };
// console.log(user);

// Type alias,

type User = {
  name: string;
  age: number;
  model?: string; // optional
};

const user: User = {
  name: "MacBook",
  age: 2,
};

// function return type, by default it is void.
function login(userData: User): User {
  return userData;
}

console.log(
  login({
    name: "Saqqu",
    age: 26,
  })
);

// union
type ID = number | string;
const userID: ID = "123";
