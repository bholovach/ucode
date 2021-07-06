class HardWorker {
    constructor(name) {
        this.name = name;
    }
    set age(age) {
        if (1 <= age && age < 100) {
            this._age = age;
        }
    }
    get age() {
        return this._age;
    }

    set salary(salary) {
        if (100 <= salary && salary < 10000) {
            this._salary = salary;
        }
    }
    get salary() {
        return this._salary;
    }
    toObject() {
        return{name: this.name, age: this.age, salary: this.salary}

    }
}




worker = new HardWorker;

worker.name = 'Bruce';
console.log(worker.name);

worker.age = 50;
worker.salary = 1500;
console.log(worker.toObject());

worker.name = 'Linda';
worker.age = 140;
console.log(worker.toObject());