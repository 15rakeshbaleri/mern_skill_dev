const array = [3, 6, 8, 2, 1, 9];

const array1 = array.map((n) => n * n * n); //map
console.log(array1);

const array3 = array1.filter((f) => f % 2 == 0); //filter
console.log(array3);

//reducer
const cart = [
  { name: "laptop", price: 5000 },
  { name: "pendrive", price: 500 },
  { name: "charger", price: 1000 },
];
//function with two args accum and item

const value = cart.reduce((accumulator, item) => accumulator + item.price, 0);
console.log(value);
