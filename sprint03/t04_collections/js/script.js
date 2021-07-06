let guestList = new WeakSet();
let Peter = {};
let Mark = {};
let James = {};
let Marta = {};
let John = {};

guestList.add(Peter);
guestList.add(Mark);
guestList.add(James);
guestList.add(Marta);
guestList.add(John);


console.log('Is this person in the list ? '+guestList.has(Peter));
console.log('Is this person in the list ? '+guestList.has(Mark));
console.log('Is this person in the list ? '+guestList.has(James));
console.log('Is this person in the list ? '+guestList.has(Marta));
guestList.delete(Marta)
console.log('Is this person in the list ? '+guestList.has(Marta));
console.log('Is this person in the list ? '+guestList.has(John));
console.log(guestList);
console.log(guestList.size);





let menu = new Map();
menu.set('borsh', 9.99);
menu.set('spagetti', 5.99);
menu.set('pelmeni', 4.99);
menu.set('vareniki', 6.99);
menu.set('kompot', 3.99);

console.log(menu);
console.log('Is this dish in the list ? '+menu.has('borsh'))
console.log('Is this dish in the list ? '+menu.has('pelmeni'))
console.log(menu.size);
menu.forEach((value, index, array) => {
    console.log( index, value)
})
for (let value of menu.values()){
    console.log(value)
}


let bankVault = new WeakMap();
let depositBox = {
    depositBox1: { code: 1 },
    depositBox2: { code: 2 },
    depositBox3: { code: 3 },
    depositBox4: { code: 4 },
    depositBox5: { code: 5 }
}

bankVault.set(depositBox.depositBox1, 'mather');
bankVault.set(depositBox.depositBox2, 'father');
bankVault.set(depositBox.depositBox3, 'brother');
bankVault.set(depositBox.depositBox4, 'kid');
bankVault.set(depositBox.depositBox5, 'sister');

console.log('Deposit for depositBox №:' + depositBox.depositBox1.code + ' = ' + bankVault.get(depositBox.depositBox1));
console.log('size: ' + bankVault.size);


let coinCollection = new Set();
coinCollection.add('1 rub');
coinCollection.add('1 dolar');
coinCollection.add('1 dinar');
coinCollection.add('1 yen');
coinCollection.add('1 mark');

console.log(coinCollection);
console.log(coinCollection.size);
for (let value of coinCollection.values()) {
    console.log(value)
}