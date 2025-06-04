let operation = prompt('Enter Operation');
let num1 = prompt('Enter First Operand');
let num2 = prompt('Enter Second Operand');

let n1 = parseInt(num1);
let n2 = parseInt(num2);

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

calculator(n1,n2,operation);
