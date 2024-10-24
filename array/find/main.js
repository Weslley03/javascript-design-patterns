const users = [
  { id: 1, name: 'Alice', age: 22 },
  { id: 3, name: 'Bob', age: 28 },
  { id: 2, name: 'Carol', age: 18 }
];
const firstAdult = users.find((user) => user.age >= 18);
console.log(firstAdult);

const findById = (users, id) => users.find(user => user.id == id);
const user = findById(users, 3);
console.log(user);
