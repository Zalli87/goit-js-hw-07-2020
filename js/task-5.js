const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length > 0) {
    nameEl.textContent = event.currentTarget.value;
  } else {
    nameEl.textContent = "незнакомец";
  }
}
