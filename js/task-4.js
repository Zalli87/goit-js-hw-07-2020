let counterValue = 0;

const increment = (value, step) => {
  counterValue = value += step;
  return counterValue;
};

const decrement = (value, step) => {
  counterValue = value -= step;
  return counterValue;
};

const valueEl = document.querySelector("#value");

const incrementEl = document.querySelector(
  "#counter button[data-action=increment]"
);
incrementEl.addEventListener("click", () => {
  valueEl.textContent = increment(counterValue, 1);
});

const decrementEl = document.querySelector(
  "#counter button[data-action=decrement]"
);
decrementEl.addEventListener("click", () => {
  valueEl.textContent = decrement(counterValue, 1);
});
