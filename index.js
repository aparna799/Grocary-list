let bgContainerElement = document.createElement('div');
bgContainerElement.classList.add('bg-container');
document.body.appendChild(bgContainerElement);

let headingElement =document.createElement('h1');
headingElement.classList.add('heading');
headingElement.textContent="Grocery List";
bgContainerElement.appendChild(headingElement);

let unlistContainer = document.createElement('ul');
unlistContainer.classList.add('list-container');
bgContainerElement.appendChild(unlistContainer);

let array=["Milk","Peanut Butter","Choco CHips","Tomato Sauce","Cup Cakes","Noodles"];
for(let item of array){
    let listElement = document.createElement('li');
    listElement.textContent = item;
    unlistContainer.appendChild(listElement);
}

let inputElement = document.createElement('input');
inputElement.id = "mycheck";
inputElement.type ="checkbox";
bgContainerElement.appendChild(unlistContainer);

let labelElement = document.createElement('label');
labelElement.classList.add('delivery-text');
labelElement.setAttribute("for","mycheck");
inputElement.appendChild(labelElement);

let buttonElement = document.createElement('button');
buttonElement.textContent="Proceed to Pay";
buttonElement.classList.add('btn','btn-primary');
bgContainerElement.appendChild(buttonElement);