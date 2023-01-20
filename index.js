document.addEventListener('DOMContentLoaded',()=>{
    createDiv(16);
    console.log('hi');
});

function createDiv(size){
    let container = document.querySelector(".div-container");
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size*size;

    for(let i=0; i<numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        container.insertAdjacentElement("beforeend", div);
    }
}