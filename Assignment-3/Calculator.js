const readline = require('node:readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let operation , num1 ,num2;

rl.question('Enter Operation ',(str)=>{
    operation = str;
    rl.question('Enter first Operand ',(str2)=>{
        num1 = Number(str2);
        rl.question('Enter second Operand ',(str3)=>{
            num2 = Number(str3);
            calculator(num1,num2,operation);
            rl.close();
        });
    });
});

let calculator = (a,b,operation) => {

    switch (operation){
        case 'add':
            console.log(a+b);
            break;
        case 'subtract':
            console.log(a-b); 
            break;  
        case 'multiply':
            console.log(a*b);
            break;
        case 'divide':
            console.log(a/b);
            break;
        case 'mod':
            console.log(a%b);  
            break;
        default:
            console.log('Enter valid Operation and values');   
    }

}
