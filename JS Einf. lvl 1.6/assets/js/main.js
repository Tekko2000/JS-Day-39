let txt = "Sam is working at coding school";

// Sam

let res = txt.substr(0, 3)

console.log(res)

document.write(res + "<br>")

// is

let res2 = txt.substr(4, 2)

console.log(res2)

document.write(res2 + "<br>")

// at school

let res3 = txt.substr(15, 2) + txt.substr(24, 7)

console.log(res3)

document.write(res3 + "<br>")

// Sam works at school

let res4 = txt.substr(0, 4) + txt.substr(7, 10) + txt.substr(24, 7)

console.log(res4)

document.write(res4 + "<br>")