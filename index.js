//hlobal variables
let color = "black";
let click = false;

//make the container
function createDiv(size){
    

    let container1 = document.querySelector(".container12");
    container1.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container1.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div1 = document.createElement("div");
        div1.addEventListener("mouseover",colorDiv);
        container1.insertAdjacentElement("beforeend", div1);
    };
    
};

//getsize of the board
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

//random color function
 const randomColor = () => {
	
	const random = (min, max) => Math.random() * (max - min) + min

	const h = Math.floor(random(0, 360))
	const s = Math.floor(random(50, 100))
	const l = Math.floor(random(50, 100))

	return `hsl(${ h }, ${ s }%, ${ l }%)`
  
}


//coloring function
function colorDiv(){
    //working only if its clicking
    if(click){
        if(color === "random"){
            this.style.backgroundColor = randomColor();
            console.log("button2")
        }
        else{
            this.style.backgroundColor = "black";
            console.log("button1")
        }
    
    }
}



document.addEventListener('DOMContentLoaded',()=>{
    //createDiv(16); 

    //clicking on button or not 
    document.querySelector('body').addEventListener("click", (e)=>{
        if(e.target.tagName != "BUTTON"){
            click = !click;

        }
    });
//select button
    let select_button = document.getElementById("pop-up");
    select_button.addEventListener("click",()=>{
        let size2 = getSize();
        console.log(size2);
        createDiv(size2);  

        
  //black button  
        const button1 = document.querySelector('.button1');
        console.log(button1)
        button1.addEventListener('click',function setColor(){
            color = "black";
            console.log("clicked")
        })
//random color button
        const button2 = document.querySelector('.button2');
        console.log(button2)
        button2.addEventListener('click',function setColor(){
            color = "random";
            console.log("clicked random")
        })
//reset button
        const button3 = document.querySelector('.button3');
        console.log(button3)
        button3.addEventListener('click',function reset(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div)=> div.style.backgroundColor = "white")
})
});
});

