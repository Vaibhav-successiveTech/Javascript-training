
function oddEvenOneIteration(){
    let flag = 1;
    let n = 20;
for(let i=-n ;i<=n ;i++){
    if(flag){
        if(Math.abs(i)%2==0)console.log(Math.abs(i));
    }else{
        if(Math.abs(i)%2==1)console.log(Math.abs(i));
    }

    if(i==0)flag = 0;
 }
}

oddEvenOneIteration();
