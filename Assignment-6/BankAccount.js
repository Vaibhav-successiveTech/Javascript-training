class bankAccount{
    #owner
    #balance = 0;
    constructor(name){
        this.#owner = name
    }

    deposite(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        if(this.#balance-amount < 0){
            console.log('Not enough Balance');
        }else{
            this.#balance -= amount;
        }
    }

    displayAmount(){
        console.log(this.#balance);
    }
}

let Acc1 = new bankAccount('Vaibhav');
Acc1.displayAmount();
Acc1.deposite(1000);
Acc1.withdraw(100);
Acc1.displayAmount();