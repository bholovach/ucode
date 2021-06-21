function* generator() {
    let index = 1;
    for (i = 0; i < Infinity; i++) {
        let steps = +prompt(`Previous result: ${index} Enter a new number: `);
        if (isNaN(steps)) {
            alert('Invalid number!');
            yield;
        } else {
            index += steps;
            if (index > 10000) {
                index = 1;
                yield;
            }
            yield index;
        }
    }
}

let gen = generator();
for (let i = 1; i <= Infinity; i++) {
    gen.next();
}