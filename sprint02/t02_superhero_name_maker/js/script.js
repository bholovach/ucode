let animal = prompt('What animal is the superhero most similar to?', 'Spider');
let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.', 'male');
let age = prompt('How old is the superhero?', '18');

const nameRegex = /^[A-Za-z]{0,20}$/;
const ageRegex = /^[1-9]{1,5}$/;

if (ageRegex.test(age) === true && nameRegex.test(animal) === true && age >= 18 && gender === 'male') {
    alert('The superhero name is: '+ animal + '-man!');
}
else if (ageRegex.test(age) === true && nameRegex.test(animal) === true && age < 18 && gender === 'male') {
    alert('The superhero name is: '+ animal + '-boy!');
}
else if (ageRegex.test(age) === true && nameRegex.test(animal) === true && age >= 18 && gender === 'female') {
    alert('The superhero name is: '+ animal + '-woman!');
}
else if (ageRegex.test(age) === true && nameRegex.test(animal) === true && age < 18 && gender === 'female') {
    alert('The superhero name is: '+ animal + '-girl!');
}
else if (ageRegex.test(age) === true && nameRegex.test(animal) === true && age < 18 && gender === '') {
    alert('The superhero name is: '+ animal + '-kid!');
}
else if (ageRegex.test(age) === true && nameRegex.test(animal) === true && age >= 18 && gender === '') {
    alert('The superhero name is: '+ animal + '-hero!');
}
else {
    alert('Error, please try again');
}