class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
            `${this.getFloorHeight()}`].join('\n');
    }
}

class Tower extends Building {
    constructor(floors, material, address, arcCapacity, height) {
        super(floors, material, address);
        this.hasElevator = true;
        this.arcCapacity = arcCapacity;
        this.height = height;
    }

    getFloorHeight() {
        return [
            `Elevator: ${this.hasElevator}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.height / this.floors}`].join('\n');
    }

    set hasElevator(hasElevator) {
        return this._hasElevator = '+';
    }
    get hasElevator() {
        return this._hasElevator;
    }
}


const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());