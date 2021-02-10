let txt = 'Sam is back from coding school';

// Sam 
let res1 = txt.substring(0, 3)

console.log(res1)

document.write(res1 + "<br>")

// is
let res2 = txt.substring(4, 6)

console.log(res2)

document.write(res2 + "<br>")

// school

let res3 = txt.substring(24, 30)

console.log(res3)

document.write(res3 + "<br>")

// Sam is school

let res4 = txt.substring(0, 4) + txt.substring(4, 7) + txt.substring(24, 31)

console.log(res4)

document.write(res4 + "<br>")