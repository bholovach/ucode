let beginRange = prompt('Write numbers', '1');
let endRange = prompt('Write numbers', '100');
function checkDivision(beginRange, endRange) {
    for (i = beginRange; i <= endRange; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
            console.log(i + ' is even, a multiple of 3, a multiple of 10');
        }
        else if (i % 2 === 0 && i % 3 === 0) {
            console.log(i + ' is even, a multiple of 3');
        }
        else if (i % 2 === 0 && i % 10 === 0) {
            console.log(i + ' is even, a multiple of 10');
        }
        else if (i % 10 === 0 && i % 3 === 0) {
            console.log(i + ' is a multiple of 3, a multiple of 10');
        }
        else if (i % 2 === 0) {
            console.log(i + ' even');
        }

        else if (i % 3 === 0) {
            console.log(i + ' is a multiple of 3');
        }

        else if (i % 10 === 0) {
            console.log(i + ' is a multiple of 10');
        }
        else { console.log(i + '-'); 
        }
    }
}checkDivision(beginRange, endRange)