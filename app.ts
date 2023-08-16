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

// function getFirstThree(x: string | number[]) {
//   return x.slice(0, 3);
// }

// // console.log(getFirstThree("hello"));
// console.log(getFirstThree([0, 1, 2, 3, 4, 5]));

// Generics,

// function logNumber(arg: number[]) {
//   console.log(arg);
//   return arg;
// }

// function logAnything(arg: any) {
//   console.log(arg);
//   return arg;
// }

// function logAnything<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }
// logAnything([3, "4"]);
// logAnything([3, 4]);

// interface HasAge {
//   age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => (b.age = a.age))[0];
// }

// const people = [{ age: 30 }, { age: 50 }, { age: 40 }];

// interface Player {
//   name: string;
//   age: number;
// }

// const players: Player[] = [
//   { name: "john", age: 50 },
//   { name: "wick", age: 30 },
//   { name: "Tim", age: 40 },
// ];

// Assertion - not a good way
// const person = getOldest(players) as Player;

// Uisng Generics
// const person = getOldest(players);

interface IPost {
  title: string;
  id: number;
  description: string;
}

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`https://example.com${path}`);
  return response.json();
};

const fetchData = async <T>(path: string): Promise<T> => {
  const response = await fetch(`https://example.com${path}`);
  return response.json();
};

(async () => {
  const posts = await fetchData<IPost[]>("/posts");
  posts[0].id;
  posts[0].title;
})();
