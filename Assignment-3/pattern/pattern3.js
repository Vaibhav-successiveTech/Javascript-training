function printPattern3(n){
    let cnt = -n;
    while(cnt <= n){
        let str = '';
        for(let i=1;i<=5;i++){
            str += i.toString() + " ";
            if(i==Math.abs(cnt)){
                console.log(str);
                str = '';
                cnt+=1;
                if(cnt==0)cnt+=1;
                break;
            }
        }
    }
}

printPattern3(5);