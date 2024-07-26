let btnl =Document.querySelector('#clickbtn');
let showclicks = document.querySelector ('#showdata!')
let counter = 0

function printClick(){
    counter++;
    console.log("likes")
    showclicks.innerHTML = "Number of clicks" + counter;
}

btn1.addEventListener('click', printClick);