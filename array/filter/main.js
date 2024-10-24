const ages = [ 12, 21, 17, 30, 15 ];
const adults = ages.filter( (age) => {
  return age >= 18
});
console.log(adults);

const users = [
  { firtsName: 'Weslley', secondName: 'Felipe', age: '20', },
  { firtsName: 'Dev', secondName: 'Junior', age: '21', },
  { firtsName: 'Dev', secondName: 'Pleno', age: '22', },
];

const adultNamedWeslley = users.filter((user) => {
return user.age >= 18 && user.firtsName == 'Weslley';
});
console.log(adultNamedWeslley);

const isAdult = user => user.age >= 18;
const adultos = users.filter(isAdult);
console.log(adultos);