function printPattern2(n){
    let lineCnt = 1;
    let numCnt = 0;
    let num = 1;
    let str = '';
    while(lineCnt <n){
        str += num.toString() + " ";
        numCnt+=1;
        if(numCnt == lineCnt){
            numCnt=0;
            lineCnt+=1;
            console.log(str);
            str = '';
            num+=1;
        }
    }
}

printPattern2(5);