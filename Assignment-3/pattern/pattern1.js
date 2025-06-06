function printPattern1(n){
    let lineCnt = 1;
    let str = '';
    let numCnt = 0;
    for(let i=1;i<=n;i++){
        str+=i.toString();
        str+=' ';
        numCnt += 1; 
        if(numCnt == lineCnt){
            console.log(str);
            str = '';
            lineCnt+=1;
            numCnt=0;
        }
    }
}

printPattern1(10);