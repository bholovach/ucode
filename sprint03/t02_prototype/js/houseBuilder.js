const houseBlueprint = {
    address: 0,
    date: 0,
    description: 0,
    owner: 0,
    size: 0,
    _averageBuildSpeed: 0.5,
    getDaysToBuild: function() {
        return (size / _averageBuildSpeed);
    }
}

function houseBuilder(address, description, owner, size, roomCount, _averageBuildSpeed, getDaysToBuild) {
    this.address = address;
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;
    this.date = new Date ();
    this._averageBuildSpeed=0.5;
    this.getDaysToBuild= function() {
        return (this.size / this._averageBuildSpeed);
    }
}
houseBuilder.prototype = houseBlueprint;




const house = new houseBuilder('88 Crescent Avenue',
    'Spacious town house with wood flooring, 2-car garage, and a back patio.',
    'J. Smith',
    110,
    5);

console.log(house.address);
// '88 Crescent Avenue'

console.log(house.description);
// 'Spacious town house with wood flooring, 2-car garage, and a back patio.'

console.log(house.size);
// 110

console.log(house.date.toDateString());
// [the current date], for example: 'Tue Aug 11 2020'

console.log(house.owner);
// J. Smith

console.log(house._averageBuildSpeed);
// 0.5

console.log(house.getDaysToBuild());
// 220

console.log(house.roomCount);
// 5*/