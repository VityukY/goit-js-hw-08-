function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
 }

const bodyLink = document.querySelector('body');
const changeBtnLink = document.querySelector('.change-color');
const colorSpanLink = document.querySelector('.color');

changeBtnLink.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyLink.style.backgroundColor = newColor;
  changeBtnLink.style.backgroundColor = newColor;
  colorSpanLink.textContent = newColor;
});
