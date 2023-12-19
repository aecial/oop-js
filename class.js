class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
class Toyota extends Car {
    
    constructor(model) {
        super(Car);
        this.model = model;
    }
}
const myCar = new Car('Dodge', '2023')
const GR86 = new Toyota('GR86');
console.log(GR86.year);