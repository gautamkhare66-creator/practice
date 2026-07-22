class phone{
    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    displayInfo(){
        console.log("Brand: "+this.brand);
        console.log("Model: "+this.model);
        console.log("Price: "+this.price);
    }

    call(){
        console.log("Calling....");
    }

    sms(){
        console.log("Sending SMS....");
    }

    ringing(){
        console.log("Ringing....");
    }
};

class smartphone extends phone{
    constructor(brand, model, price){
        super(brand, model, price);
    }

    camera(){
        console.log("Opening camera....");
    }

    internet(){
        console.log("Connecting to internet....");
    }

    app(){
        console.log("Opening app....");
    }

    videoCall(){
        console.log("Starting video call....");
    }

    multimedia(){
        console.log("Playing multimedia....");
    }
}

let nokia = new phone("Nokia", "nokia 1", 5000);
let galaxyS26 = new smartphone("Samsung", "Galaxy S26", 90000);

console.log("Phone Information:");

console.log("Normal Phone:");
nokia.displayInfo();

console.log("------------------------------");
console.log("Smartphone Information:");
galaxyS26.displayInfo();
galaxyS26.call();
galaxyS26.sms();
galaxyS26.ringing();
galaxyS26.camera();
galaxyS26.internet();
galaxyS26.app();
galaxyS26.videoCall();
galaxyS26.multimedia();


console.log("Error Handling-----");

try{
    let a=prompt("Enter your name: ");
    console.log("Hello "+b);
}catch(error){
    console.log("Error:"+error.message);
}finally{
    console.log("Execution completed.");
    console.log("Chapter completed.");
}


