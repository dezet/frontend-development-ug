

var obj = {
  asd: 'asd'
}

var arr      = [1, 2, 'trzy']
var emptyarr = []
// console.log(typeof arr)
// console.log(typeof emptyarr)
// console.log(typeof arr[2])

/**
 * korzystanie z new - obiekt, deklaracja wprost - typ prosty
 */
console.log(typeof new Object()) // !! object
console.log(typeof new Array()) // !! object
console.log(typeof new Number(2)) // !! object
console.log(typeof 2) // number
console.log(typeof new Boolean()) // !! object
console.log(typeof 'true') //string
console.log(typeof 'undefined') //string
console.log(typeof undefined) // undefined
console.log(typeof null) // object
console.log(typeof NaN) // !! number
var loger = function (term) {
  console.log(term)
}

var add = function (a, b) {
  return a + b
}

console.log(add(2, 3, 5))

function multiply (a, b) {
  return a * b
}

var map = function (what, fn) {
  for (var i = 0; i < what.length; i++) {
    fn(what[i])
  }
}

function multiply2 (a, b) {
  return 100000
}

console.log(typeof(add))
console.log(typeof(multiply))

var highOrderFunction = function (a, b) {
  return a() + b
}

console.log(highOrderFunction(multiply2, 5))

var counter = function () {
  var i = 0
  return function () {
    return i++
  }
}

var c = counter()

// ZUPELNIE INNE WYNIKI!!!!
console.log(counter()()) //currying?:)
console.log(counter()())

console.log(c())
console.log(c())
console.log(c())

var counter2 = function () {
  var i = 0
  return function () {
    return i++
  }
}()

console.log(counter2())
console.log(counter2())
console.log(counter2())

var counter3 = function () {
  var i  = 0
  var fn = function () {
    return i += 1
  }
  return function () {
    return fn()
  }
}

var c3 = counter3()

console.log(c3())
console.log(c3())
console.log(c3())



