class HardWorker {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
       }
       get age() {
           return this._age;
       }
    set age(value) {
   if(value > 100 && 1 <= value) {
   return;
    }
    this._age = value;
   }
   get salary() {
       return this._salary;
   }
    set salary(value) {
   if(value > 10000 && 100 <= value) {
   return;
   }
   this._salary = value;
   }
   toObject() {
   console.log(`${this.name}, ${this.age}, ${this.salary}`)
   }
  }
 export {
     HardWorker
 }