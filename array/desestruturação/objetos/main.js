/*
const person = { name: 'weslley', age: 21 };
const { name, age } = person;

const { name: firstName, age: years } = person;

const pessoa = { nome: 'weslley' };
const { nome, idade = 25 } = pessoa;

const usuario = { primeiroNome: 'weslley', endereco: { cidade: 'paiçandu', zip: 10001 } };
const { endereco: { cidade, zip } } =  usuario;

function geet({ name, age }) {
  console.log(`hello ${name}, you are ${age} years old `);
};

const pessoa02 = { userName: 'John', age: 30, city: 'New York' };
const { userName, ...others } = pessoa02;

const key = 'age';
const person = { name: 'Weslley', age: 21 };
const { [key]: userAge } = person;

const person = {
  getName() {
    return 'weslley';
  },

  age: 30
};

const { getName, age } = person;


const people = [
  { name: 'weslley', age: 20 },
  { name: 'dev', age: 21},
];

const [ { name: nome }, { age: idade } ] = people;

const data = {
  title: 'Enginer',
  team: [
    { name: 'Weslley', role: 'Developer' },
    { name: 'Lucas', role: 'Designer' },
  ]
};
const { title: cargo, team: [{ name: firstName }] } = data;

function getCordenadas() {
  return [ 23.456, 54.321 ];
};
const [ latitude, longitude ] = getCordenadas();


const users = [
  { name: 'weslley', age: 20 },
  { name: 'dev', age: 21 },
];

for (const { name, age } of users) {
  console.log(`bom dia! ${name} ${age}`)
};

const person = { name: 'weslley', age: 21 };
const { age } = person;
const category = age > 18 ? 'adulto' : jovem;
*/
