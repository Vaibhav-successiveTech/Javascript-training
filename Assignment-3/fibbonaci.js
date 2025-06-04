function printFibbonaci(){
    let n = 20;
    let a = 0,b=1;
for(let i=0;i<20;i++){
    console.log(a);
    let temp = b;
    b+=a;
    a=temp;
 }
}

printFibbonaci();