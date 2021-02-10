let txt = "Sam is going to coding school."

// SAM IS GOING TO SCHOOL

let res = txt.replace("coding", " ")
let res1 = res.toUpperCase()

console.log(res1)

document.write(res1 + "<br>")

// sam is going to school

let res2 = res1.toLowerCase()

console.log(res2)

document.write(res2 + "<br>")

// SAM is going to SCHOOL

let res3 = res1.replace("IS", "is")
let res4 = res3.replace("GOING", "going")
let res5 = res4.replace("TO", "to")

console.log(res5)

document.write(res5 + "<br>")

// sam IS GOING TO school

let res6 = res2.replace("is", "IS")
let res7 = res6.replace("going", "GOING")
let res8 = res7.replace("to", "TO")

console.log(res8)

document.write(res8 + "<br>")

// Sam Is Going To School

let res9 = res2.charAt(0).toUpperCase() + res2.slice(1)

function capitalize(res10) {
    return res10.charAt(0).toUpperCase() + res10.slice(1);
}
let res10 = res9.split(' ').map(capitalize).join(' ')

console.log(res10)

document.write(res10)
































// let myVar21 = "sam".toLowerCase() + " " + "i".toUpperCase() + "s".toLowerCase() + " " + "going".toLowerCase() + " " + "t".toUpperCase() + "o".toLocaleLowerCase() + " " + "s".toUpperCase() + "chool".toLowerCase()
// document.write(myVar21 + "<br>")