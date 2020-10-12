let fourth = document.getElementById("fourth");

let counter = 0;

function showCounter(){
    fourth.innerText = counter;
    counter++;
}

let button = document.getElementById("button");
button.addEventListener("contextmenu", ev => { fourth.innerText = "Content";})