const inputEl = document.querySelector("#font-size-control");

const fontSizeTextEl = document.querySelector("#text");

inputEl.addEventListener("input", onInputSizeChange);

function onInputSizeChange(event) {
  fontSizeTextEl.style.fontSize = `${event.currentTarget.value}px`;
}
