class Shape{
    constructor(width,height){
        this.height = height;
        this.width = width;
    }

    area(){}
}

class Rectangle extends Shape{
    constructor(width,height){
        super(width,height);
    }

    area(){
        return (this.width) * (this.height);
    }
}
                
class Triangle extends Shape{
    constructor(height,sides){
        super(0,height);
        this.sides = sides
    }

    area(){
        return (0.5 * (this.height) * (this.sides));
    }
}

let rectangle = new Rectangle(30,40);
let triangle = new Triangle(30,40);

console.log(rectangle.area());
console.log(triangle.area());