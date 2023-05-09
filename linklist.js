// console.log("hello");

// function Person(firstName, age) {
//   this.firstName = firstName;
//   this.age = age;
// }

// const sandeep = new Person("sandeep", 21);

// const akash = new Person("akash", 23);
// console.log(sandeep);
// console.log(akash);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.age);
// };

// sandeep.calcAge();

// akash.calcAge();

class Person {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }
}

const sandeep = new Person("sandeep", 21);

Person.prototype.nameLog = function () {
  console.log(this.firstName);
};
console.log(sandeep);

sandeep.nameLog();
