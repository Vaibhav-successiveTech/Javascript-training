const generateRandomNumber = () => {
    return Math.round(Math.random() * 100);
}

const twice = (paramFunction) => {
    let num = paramFunction();
    return (num*2);
}

console.log(twice(generateRandomNumber));