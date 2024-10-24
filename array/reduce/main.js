const numbers = [ 1, 2, 3, 4 ];
const sum = numbers.reduce((acumulate, current) => acumulate + current, 0 );
console.log(sum);

const names = ['John', 'John', 'Jane', 'John', 'Emily', 'Jane'];
const nameCount = names.reduce( (acc, name) => {
  acc[name] = (acc[name] || 0) + 1;
  return acc; 
}, {});
console.log(nameCount);

const users = [
  { firtsName: 'Weslley', secondName: 'Felipe', age: 20, },
  { firtsName: 'Dev', secondName: 'Junior', age: 21, },
  { firtsName: 'Dev', secondName: 'Pleno', age: 22, },
  { firtsName: 'Dev', secondName: 'Sênior', age: 23, },
];

const totalAge = users.reduce((total, user) => {
  return total + user.age;
}, 0); 

const groupByAge =  users.reduce((acc, user) => {
  acc[user.age] = acc[user.age] ? [...acc[user.age], user] : [user];
  return acc; 
}, {});
console.log(totalAge);
console.log(groupByAge)