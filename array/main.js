/* 
imagine que você precisa pegar uma lista de pedidos, 
filtrar apenas os que foram entregues, 
cacular o valor total de cada pedido e depois encontrar o mais caro. 
*/

const orders = [
  { id: 1, delivered: true, items: [{ price: 50 }, { price: 30 }] },
  { id: 2, delivered: false, items: [{ price: 20 }] },
  { id: 3, delivered: true, items: [{ price: 80 }, { price: 20 }] },
];

const deliveredOrders = orders
  .filter(order => order.delivered)
  .map(order => ({
    ...order,
    total: order.items.reduce((sum, item) => sum + item.price, 0)
  })); 

  const mostExpensiveOrder = deliveredOrders.reduce((prev, curr) =>
    prev.total > curr.total ? prev : curr
  );

console.log(mostExpensiveOrder);
