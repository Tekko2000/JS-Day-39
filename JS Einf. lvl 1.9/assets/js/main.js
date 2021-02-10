let txt1 = "Sam is going to coding school";
let txt2 = "Tom";
let txt3 = "programming bike";
let txt4 = "and";

// Sam is going to school and to the movie theater

let res = txt1.replace("coding", " ")
let res1 = res

console.log(res)

document.write(res + " " + txt4 + " " + "to the movie theater" + "<br>")

// Sam is going to movie theater

let res2 = res.replace("school", "movie")

console.log(res2)

document.write(res2 + " " + "theater" + "<br>")

// Tom and Sam are going to school

let res3 = res.replace("is", "are")

document.write(txt2 + " " + txt4 + " " + res3 + "<br>")

// Tom and Sam are going to gym and to the movie theater

let res4 = res3.replace("school", "gym")

document.write(txt2 + " " + txt4 + " " + res4 + " " + txt4 + " to the movie theater" + "<br>")

// Tom is going to school and to the movie theater

let res5 = res.replace("Sam", "Tom")

document.write(res5 + " " + txt4 + " to the movie theater" + "<br>")