let numberGenerator = () => {
   let prev = -1;
   return () => {
        let a = Math.ceil(Math.random() * 10);
        if(a==prev){
            return a+1;
        }
        prev = a;
        return a;
    }
}

let func = numberGenerator();

for(let i=0;i<5;i++){
    console.log(func());
}
