const inputNumberEl = document.querySelector("#controls > input");

const createBtnEL = document.querySelector('[data-action="render"]');
createBtnEL.addEventListener("click", onCreateBtnClick);

const destroyBtnEl = document.querySelector('[data-action="destroy"]');
destroyBtnEl.addEventListener("click", onDestroyBtnClick);

const boxContainerEl = document.querySelector("#boxes");

function MakeRandomColor() {
  const randomColor = (min, max) =>
    Math.round(Math.random() * (max - min) + min);

  const red = randomColor(0, 255);
  const green = randomColor(0, 255);
  const blue = randomColor(0, 255);

  return `rgb(${red},${green},${blue})`;
}

function onCreateBtnClick() {
  boxContainerEl.innerHTML = "";

  const items = [];

  for (let i = 1; i <= inputNumberEl.value; i += 1) {
    const divItem = document.createElement("div");
    console.log(items);
    divItem.style.backgroundColor = MakeRandomColor();
    divItem.style.width = i * 10 + 20 + "px";
    divItem.style.height = i * 10 + 20 + "px";

    items.push(divItem);
  }

  boxContainerEl.append(...items);
}

function onDestroyBtnClick() {
  boxContainerEl.innerHTML = "";
}
