// try {
//     console.log(a);
// } catch(e) {
//     console.log(e);
// }
// console.log('---------');
// console.log('---------');
// console.log('---------');

function getSqrt(x) {
    if (x < 0) throw new Error('Tham soo phai lon hon 0');
    return Math.sqrt(x);
}

try {
    console.log(getSqrt(-100));
} catch (e) {
    console.log(e.toString());
}
console.log(123);
