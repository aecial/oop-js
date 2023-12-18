// const employee = {
//     name: "Teddy Pascual",
//     age: 23,
//     speak: function() {
//         console.log("Hello my name is " + this.name);
//     }
// }
function createEmployee(name) {
    return {
        name,
        speak: function() {
            console.log("Hello my name is " + name);
        }
    }
}

// Constructor Function
function Employee(name) {
    this.name = name;
    this.speak = function() {
        console.log("Hello my name is " + name);
    }
}
const emp1 = new Employee("Teddy");
emp1.speak();