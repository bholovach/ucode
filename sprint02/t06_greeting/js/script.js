let firstName = prompt('Please write your first name', 'John');
let secondName = prompt('Please write your second name', 'Snow');
function test(firstName, secondName) {
    if (isNaN(firstName) === true && isNaN(secondName) === true) {
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        secondName = secondName.charAt(0).toUpperCase() + secondName.slice(1);
        alert('Hello ' + firstName + ' ' + secondName);
    }
    else {
        alert('Wrong input!');
        console.log('Wrong input!');
    } test
} test(firstName, secondName)