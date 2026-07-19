let btn = document.getElementById("btn");
let body = document.querySelector("body");

const toggle = () => {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
    } else {
        body.style.backgroundColor = "black";
    }
}

btn.addEventListener("click", toggle);

