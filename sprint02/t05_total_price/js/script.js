function total(addCount, addPrice, currentTotal) {
if (addCount + addPrice)
if (currentTotal) {
    return (addCount * addPrice + currentTotal);
} else {
    return (addCount * addPrice);
}
let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(sum);
}