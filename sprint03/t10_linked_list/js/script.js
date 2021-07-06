class LinkedList {
    constructor(data) {
        this.data = data;
    }
    add(value) {
        return this.data.push(value);
    }
    remove(value) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === value) {
                this.data.splice(i, 1);
            }
        }
    }
    contains(value) {
        return this.data.includes(value);
    }
    *[Symbol.iterator](value) {
        for (value of this.data) {
            yield value;
        }
    }
    clear() {
        return this.data = [];
    }
    count() {
        return this.data.length;
    }
    log() {
        console.log(this.data.join(', '));
    }
}


function createLinkedList(data) {
    return new LinkedList(data);
}







const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while (ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for (const n of ll) {
    sum += n;
}
console.log(sum);
// "25"
ll.clear();
ll.log();
    // ""