const boxesContainerLink = document.querySelector("#boxes")
const controlsInputLink = document.querySelector('#controlsInput')
const createBtn = document.querySelector('button[data-action="create"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
     .toString(16)
     .padStart(6, 0)}`;
 }


function boxMaker (amount) {
  let baseSize = 30;
  let boxes = '';
  for (let i = 1; i <= amount; i++){
    let box = document.createElement('div');
    box.style.height = `${baseSize}px`
    box.style.width = `${baseSize}px`
    box.style.backgroundColor = `${getRandomHexColor()}`
    boxes+=box.outerHTML;
    baseSize+=10
  }
  return boxes;
}


createBtn.addEventListener('click',(e) => {
  const amount = controlsInputLink.value;
  if (amount > 100 || amount <1) {
    alert('Available amount from 1 to 100');
    controlsInputLink.value='';
    return
  }
  controlsInputLink.value='';
  boxesContainerLink.innerHTML=boxMaker (amount);
})

destroyBtn.addEventListener('click', () => {
  boxesContainerLink.innerHTML = '<div id="boxes"></div>'
})