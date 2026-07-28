function number(num,nextNum){
    setTimeout(() => {
        console.log(num);
        if(nextNum!=null){
            nextNum();
        }
    }, 5000);
}

number(1,()=>{
    number(2,()=>{
        number(3,()=>{
            number(4,()=>{
                number(5,null);
            });
        });
    });
});

