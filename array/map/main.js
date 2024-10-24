//uso básico.
const numbers = [ 1, 2, 3, 4, 5 ];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

//exemplo avançado
const users = [
  { firtsName: 'Weslley', secondName: 'Felipe', age: '20', },
  { firtsName: 'Dev', secondName: 'Junior', age: '21', },
  { firtsName: 'Dev', secondName: 'Pleno', age: '22', },
];
const fullNameList = users.map( (n) => {
  return `${n.firtsName} ${n.secondName} with ${n.age}`
});
console.log(fullNameList); 

//uso com funções externas, forma modular
const formatFullName = ({ firtsName, secondName, age }) => `${firtsName} ${secondName} with ${age}`;
const fullName = users.map(formatFullName);
console.log(fullName);