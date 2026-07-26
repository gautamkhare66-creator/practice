function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Jack");

setTimeout(() => {
    greet("Gautam");
}, 5000);

greet("Lucifer");


