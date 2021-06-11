import { items, items2 } from "./class.js";

let container = document.createElement('div');
document.body.appendChild(container)
container.classList.add('calculator')

let calculatrice = document.createElement('div');
container.appendChild(calculatrice);
calculatrice.classList.add('myDiv1')

let operator = document.createElement('div');
container.appendChild(operator)
operator.classList.add('myDiv2')

let containerResult = document.createElement('div');
document.body.appendChild(containerResult)
containerResult.classList.add('containerResult')

let divResult = document.createElement('input');
containerResult.appendChild(divResult)
divResult.classList.add('divResult');

items.forEach(item => {
    let button = document.createElement("button");
    button.textContent = item.nom;
    button.classList.add('btn');
    calculatrice.appendChild(button);
    button.addEventListener('click',()=>{
        if (button.innerHTML == 1) {
            divResult.value += 1;
        }if (button.innerHTML == 2) {
            divResult.value += 2;
        }if (button.innerHTML == 3) {
            divResult.value += 3;
        }if (button.innerHTML == 4) {
            divResult.value += 4;
        }if (button.innerHTML == 5) {
            divResult.value += 5;
        }if (button.innerHTML == 6) {
            divResult.value += 6;
        }if (button.innerHTML == 7) {
            divResult.value += 7;
        }if (button.innerHTML == 8) {
            divResult.value += 8;
        }if (button.innerHTML == 9) {
            divResult.value += 9;
        }if (button.innerHTML == 0) {
            divResult.value += 0
        }if (button.innerHTML == "Clear" ){
            divResult.value = '';
        }if (button.innerHTML == "="){
            divResult.value = Math.round(parseInt(eval(divResult.value)));
        }
    })
});
items2.forEach(item => {
    let button = document.createElement("button");
    button.textContent = item.nom;
    button.classList.add('btn2');
    operator.appendChild(button)
    button.addEventListener('click',()=>{
        if (button.innerHTML ==  '+') {
            divResult.value += '+'
        }if (button.innerHTML == '-') {
            divResult.value += '-'
        }if (button.innerHTML == '*') {
            divResult.value += '*'
        }if (button.innerHTML == '/') {
            divResult.value += '/'
        }
    })
});