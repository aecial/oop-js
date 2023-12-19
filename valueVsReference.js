// Value Type
// const x = 10;
// Reference Type
const x = {value: 10};

function increment(num) {
    num.value++;
}
increment(x);
console.log(x);

// Primitives are copied by value, Objects are copied by their reference