console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector("#container").children 


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

box1.onclick=()=>{
    console.log("box1 clicked");
}

box2.onclick=()=>{
    console.log("box2 clicked");
}

box3.onclick=()=>{
    console.log("box3 clicked");
}

box4.onclick=()=>{
    console.log("box4 clicked");
}

box5.onclick=()=>{
    console.log("box5 clicked");
}

box1.onmouseover=()=>{
    console.log("You are in box1");
}

box2.onmouseover=()=>{
    console.log("You are in box2");
}

box3.onmouseover=()=>{
    console.log("You are in box3");
}

box4.onmouseover=()=>{
    console.log("You are in box4");
}

box5.onmouseover=()=>{
    console.log("You are in box5");
}

