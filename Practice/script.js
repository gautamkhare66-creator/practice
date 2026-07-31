function getData(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data received: " + n);
            resolve(n);
        },5000);
    });
}

(async function (){
    let n=1;
    console.log("Processing data: " + n);
    await getData(n);
    console.log("Data processed: " + n);
    await getData(n+1);
    console.log("Data processed: " + (n+1));
    await getData(n+2);
    console.log("Data processed: " + (n+2));
})();



