const inputEl = document.querySelector("#validation-input");

// inputEl.addEventListener('input' onInputValue);

// function onInputValue(evetn) {

// }

inputEl.addEventListener("blur", onInputValid);

function onInputValid(event) {
  if (event.currentTarget.value.length > 6) {
    inputEl.classList.add("#validation-input.valid");
  }
  console.log(event.currentTarget.value);
}
