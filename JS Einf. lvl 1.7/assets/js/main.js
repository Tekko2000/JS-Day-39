let txt = "Sam is good at coding school";

// Sam is bad at school

let res = txt.replace("good", "bad")
let res1 = res.replace("coding", " ")

console.log(res1)

document.write(res1 + "<br>")

// Tom is good at school

let res2 = res1.replace("Sam", "Tom")
let res3 = res2.replace("bad", "good")

console.log(res3)

document.write(res3 + "<br>")

// Sam is good at tennis

let res4 = res3.replace("Tom", "Sam")
let res5 = res4.replace("school", "tennis")

console.log(res5)

document.write(res5 + "<br>")

