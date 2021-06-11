let items = [
{nom:1},{nom:2},{nom:3},{nom:4},{nom:5},{nom:6},{nom:7},{nom:8},{nom:9},{nom:'Clear'},{nom:0},{nom:'='}
];

let items2 = [{nom:'+'},{nom:'-'},{nom:'*'},{nom:'/'}];

let container = document.createElement('div');
document.body.appendChild(container)
container.classList.add('calculator')

let calculatrice = document.createElement('div');
container.appendChild(calculatrice);
calculatrice.classList.add('myDiv1')

let operator = document.createElement('div');
container.appendChild(operator)
operator.classList.add('myDiv2')



let button;

items.forEach((item)=> {
    button = document.createElement("button");
    button.textContent = item.nom;
    button.classList.add('btn');
    calculatrice.appendChild(button);
});

items2.forEach((item) => {
    let button = document.createElement("button");
    button.textContent = item.nom;
    button.classList.add('btn2');
    operator.appendChild(button)
});