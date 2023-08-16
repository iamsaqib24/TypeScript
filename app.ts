// tsc "ts-file-name"

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

// type User = {
//   name: string;
//   age: number;
//   model?: string; // optional
// };

// const user: User = {
//   name: "MacBook",
//   age: 2,
// };

// // function return type, by default it is void.
// function login(userData: User): User {
//   return userData;
// }

// console.log(
//   login({
//     name: "Saqqu",
//     age: 26,
//   })
// );

// Unions,

// type ID = number | string;

// function printID(id: ID) {
//   // Narrowing,
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }
// printID("hello");

// Interfaces,

// interface Transaction {
//   payerAcountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const trasaction1: Transaction = {
//   payerAcountNumber: 12345,
//   payeeAccountNumber: 9876,
// };

// const bankAccount: BankAccount = {
//   accountNumber: 1234,
//   accountHolder: "John",
//   balance: 5000,
//   isActive: true,
//   transactions: [trasaction1],
// };

// Using Extend,

// interface Book {
//   name: string;
//   price: number;
// }

// interface Ebook extends Book {
//   //   name: string;
//   //   price: number;
//   fileSize: number;
//   format: string;
// }

// interface AudioBook extends Ebook {
//   //   name: string;
//   //   price: number;
//   //   fileSize: number;
//   //   format: string;
//   duration: number;
// }

// const book: AudioBook = {
//   name: "Atomic Habits",
//   price: 350,
//   fileSize: 300,
//   format: "pdf",
//   duration: 4,
// };

// Interface merging,

// interface Book {
//   name: string;
//   price: number;
// }

// interface Book {
//   fileSize: number;
// }

// const book: Book = {
//   name: "Eat that frog",
//   price: 250,
//   fileSize: 40,
// };

// Difference between types and interface,

// type Book = {
//   name: string;
// };
// type Book = {
//   price: number;
// };
