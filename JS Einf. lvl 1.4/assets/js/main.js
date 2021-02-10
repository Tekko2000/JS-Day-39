let A = 'Sam is going to coding school';

console.log(A.slice(0, 3));
console.log(A.slice(4, 6));
console.log(A.slice(1, 29));
console.log(A.slice(4, 29));
console.log(A.slice(23, 29));
console.log(A.slice(0, 3));

let myVar = A;

document.write(A.slice(0, 3) + "<br>");
document.write(A.slice(4, 6) + "<br>");
document.write(A.slice(1, 15) + (A.slice(22, 29)) + "<br>");
document.write(A.slice(4, 15) + (A.slice(22, 29)) + "<br>");
document.write(A.slice(23, 29) + "<br>");
document.write(A.slice(0, 3) + (A.slice(3, 6)) + (A.slice(22, 29)) + "<br>");
