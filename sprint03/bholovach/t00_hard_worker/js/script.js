let name, age, salary;
class HardWorker {
    constructor(Name, Age, Salary) {
        this.name = Name;
        this.age = Age;
        this.salary = Salary;
    }
    get name() {
        return this._age;
      }
}

toObject() 
console.log(`${this.Name}, ${this.Age}, ${this.Salary}`);




worker= new HardWorker;

worker.name= 'Bruce';
console.log(worker.name);
// Bruce
worker.age = 50;
worker.salary= 1500;
console.log(worker.toObject());
// Object { name: "Bruce", age: 50, salary: 1500 }
worker.name= 'Linda';
worker.age = 140;
console.log(worker.toObject());
// Object { name: "Linda", age: 50, salary: 1500 }