const inputLink = document.querySelector("#name-input");
let outputLink = document.querySelector("#name-output");

inputLink.addEventListener("input", event => {
   let text = event.target.value.trim();
   outputLink.textContent = text || 'Anonymous'
 });