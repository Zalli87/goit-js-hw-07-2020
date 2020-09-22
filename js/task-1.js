const categories = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");

console.log(`В списке ${categories.children.length} категории`);

itemEl.forEach((item) =>
  console.log(`Катерогия: ${item.firstElementChild.textContent}
Количество элементов: ${item.lastElementChild.children.length}`)
);
