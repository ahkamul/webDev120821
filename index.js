// Class 056: Comparing Two Objects in JS

// var obj1 = {
//     a : 10,
//     b : 20
// }

// var obj2 = {
//     a : 10,
//     b : 20
// }

// //console.log (obj1 === obj2)

// if (obj1.a === obj2.a  && obj1.b === obj2.b){
//     console.log(true)
// } else {
//     console.log(false)
// }

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))


// Class 057: Iterate object properties in JS

// var obj = {
//     x : 40,
//     y : 60,
//     z : 75
// }

// //console.log('x' in obj)
// //console.log('p' in obj)

// for (var i in obj){
//     //console.log(i)
//     console.log(i + ' : ' + obj[i])
// }


// Class 058: Object Method in JS

var obj = {
    x : 40,
    y : 60,
    z : 75
}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

var obj2 = obj
obj2.x = 70
obj2.y = 100

// console.log(obj)
// console.log(obj2)

var obj2 = Object.assign({}, obj)
obj2.x = 100

console.log(obj)
console.log(obj2)