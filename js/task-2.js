const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const makeIngredientsList = (option) => {
  return option.map((elenent) => {
    const item = document.createElement("li");
    item.textContent = elenent;
    return item;
  });
};
const elements = makeIngredientsList(ingredients);

const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.append(...elements);
