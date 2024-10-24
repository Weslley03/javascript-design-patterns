/*
Use o método filter para encontrar todos os produtos disponíveis em estoque (com stock > 0). x
Use map para criar uma lista apenas com os nomes dos produtos da categoria "Electronics".
Use reduce para calcular o valor total do estoque para a categoria "Fashion" (multiplique price pelo stock de cada produto).
Use find para localizar o primeiro produto que custa mais de $1000.
*/

{
  const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, stock: 30 },
    { id: 2, name: 'Headphones', category: 'Electronics', price: 150, stock: 120 },
    { id: 3, name: 'Shoes', category: 'Fashion', price: 80, stock: 50 },
    { id: 4, name: 'Watch', category: 'Fashion', price: 200, stock: 80 },
    { id: 5, name: 'Camera', category: 'Electronics', price: 400, stock: 0 },
    { id: 6, name: 'T-shirt', category: 'Fashion', price: 20, stock: 200 },
  ];
  
  const prodAvailable = products.filter(prod => prod.stock > 0);
  
  const electronicsProd = products
  .filter(prod => prod.category === 'Electronics')
  .map((prod => `${prod.name}`));
  console.log(electronicsProd);
  
  const fashionProd = products
    .filter(prod => prod.category == 'Fashion');
  const totalValue = fashionProd.reduce((acc, prod) => {
    return acc + (prod.price * prod.stock);
  }, 0);
  console.log(totalValue);
  
  const prodWithMore1000Value = products.find(prod => prod.price > 1000);
  console.log(prodWithMore1000Value);
}

/*
Use map para calcular a média de cada estudante (dica: use o reduce dentro do map para calcular a média de notas).
Use filter para encontrar todos os estudantes que têm uma média de 85 ou mais.
Use reduce para encontrar a média geral de todos os estudantes.
Use find para localizar o primeiro estudante que tenha pelo menos uma nota abaixo de 70.
*/

{
  
  const students = [
    { name: 'John', grades: [90, 70, 80, 100] },
    { name: 'Jane', grades: [85, 90, 92, 88] },
    { name: 'Bob', grades: [70, 75, 60, 68] },
    { name: 'Alice', grades: [100, 100, 95, 98] },
  ];
  const studentsMedia = students.map((stud) => {
    const media = stud.grades.reduce((acc, value) => acc + value, 0) / stud.grades.length;

    return { student: stud.name, media: media.toFixed(2) };
  });
  console.log(studentsMedia);


  const mediaBoa = studentsMedia.filter(stud => stud.media >= 85);
  console.log(mediaBoa);


  const mediaGeral = studentsMedia.reduce((acc, value) => acc + parseFloat(value.media), 0) / studentsMedia.length;
  console.log(mediaGeral.toFixed(2));


  const burro = studentsMedia.find(stud => stud.media < 70);
  console.log(burro);
  
}

