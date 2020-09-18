const categories = document.querySelector("#categories");
const item = document.querySelectorAll(".item");

const categoriesList = categories.children.length;
const categoryFist = item[0].firstElementChild.textContent;
const categoryFistItems = item[0].lastElementChild.children.length;

const categorySecond = item[1].firstElementChild.textContent;
const categorySecondItems = item[1].lastElementChild.children.length;

const categoryThird = item[2].firstElementChild.textContent;
const categoryThirdItems = item[2].lastElementChild.children.length;

console.log(`В списке ${categoriesList} категории`);

console.log(`Катерогия: ${categoryFist}`);
console.log(`Количество элементов: ${categoryFistItems}`);

console.log(`Катерогия: ${categorySecond}`);
console.log(`Количество элементов: ${categorySecondItems}`);

console.log(`Катерогия: ${categoryThird}`);
console.log(`Количество элементов: ${categoryThirdItems}`);
