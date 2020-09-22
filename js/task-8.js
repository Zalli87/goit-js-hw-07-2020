const inputNumberEl = document.querySelector("#controls > input");
console.log(inputNumberEl.value);
const createBtnEL = document.querySelector(
  "#controls > button[data-action=render]"
);
createBtnEL.addEventListener("click", onCreateBtnClick);

function onCreateBtnClick(event) {
  createBoxes(inputNumberEl.value);
}

function createBoxes(amount) {
  const arrayEl = Array.from({ length: inputNumberEl.value });
  arrayEl.map((box) => {
    const item = document.createElement("div");
    item.style.backgroundColor =
      "#" + (Math.random() + "000000").substring(2, 8);
    item.style.width = "30px";
    item.style.height = "30px";
    return boxContainerEl.append(item);
  });
}

console.log(createBtnEL);

const destroyBtnEl = document.querySelector(
  "#controls > button[data-action=destroy]"
);
console.log(destroyBtnEl);

const boxContainerEl = document.querySelector("#boxes");
console.log(boxContainerEl);
