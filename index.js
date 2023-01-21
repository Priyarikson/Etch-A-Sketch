

document.addEventListener('DOMContentLoaded',()=>{
    
    let select0 = document.getElementById("pop-up");
    select0.addEventListener("click",()=>{
        let size2 = getSize();
        console.log(size2);
        
    

    const button1 = document.getElementById('button1');
    button1.addEventListener('click', ()=>{
        console.log("clicked");
        createDiv(size2,"black");
    
});
    const button2 = document.getElementById('button2');
    button2.addEventListener('click', ()=>{
        console.log("clicked");
        createDiv(size2,"random");
    
});
    const button3 = document.getElementById('button3');
    button3.addEventListener('click', ()=>{
        
        console.log("clicked");
});

  
    
});
});



function createDiv(size,color){
    let container1 = document.querySelector(".container12");
    container1.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container1.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div1 = document.createElement("div");
        div1.addEventListener("mouseover",()=>{
            
            if(color === "random"){
                div1.style.backgroundColor = randomColor();
            }
            else{
                div1.style.backgroundColor = "black";
            }
        });
        container1.insertAdjacentElement("beforeend", div1);
    };
    
};


function getSize(){
    let input0 = prompt("Enter desired size?");
    let message = document.querySelector(".message1");
    if(input0 === ""){
        message.innerHTML = "please provide a number";
    }
    else if(input0 < 0 || input0 > 100){
        message.innerHTML = "provide a number between 1 and 100";
    }
    else{
        message.innerHTML = "now you play";
        return input0;
    }
};
 const randomColor = () => {
	
	const random = (min, max) => Math.random() * (max - min) + min

	const h = Math.floor(random(0, 360))
	const s = Math.floor(random(50, 100))
	const l = Math.floor(random(50, 100))

	return `hsl(${ h }, ${ s }%, ${ l }%)`
  
}


    



