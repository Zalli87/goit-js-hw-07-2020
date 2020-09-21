const counterValue = 0;

const increment = (counterValue, step) => {
  return (counterValue += 1);
};

console.log(counterValue);
const decrement = (counterValue, step) => {
  return (counterValue -= step);
};

// const valueEl = document.querySelector("#value");

// const incrementEl = document.querySelector(
//   "#counter button[data-action=increment]"
// );
// incrementEl.addEventListener("click", () => {
//   valueEl.textContent = increment(counterValue, 1);
//   console.log(valueEl.textContent);
// });

// const decrementEl = document.querySelector(
//   "#counter button[data-action=decrement]"
// );
// decrementEl.addEventListener("click", () => {
//   valueEl.textContent = decrement(counterValue, 1);
// });

// console.log(valueEl);
// console.log(incrementEl);
// console.log(decrementEl);
// const result = increment(counterValue);
// console.log(result);
