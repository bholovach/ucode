const SteveRogers = {
    name: 'Steve',
    surname: 'Rogers',
    age: 101,
    city: 'New York'
}

function copyObj(SteveRogers) {
    copy = Object.assign({}, SteveRogers);
} copyObj(SteveRogers)

console.log(SteveRogers);

console.log(copy);


SteveRogers.name = 'John';

console.log(SteveRogers);

console.log(copy);


copy.age = 69;

console.log(SteveRogers);

console.log(copy);