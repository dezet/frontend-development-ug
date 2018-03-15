/**
 THIS posiada 4 konteksty wykonania:
 1) Funkcja (zwykły kontekst)
 2) Konstruktor !!!
 3) Metoda
 4) Metoda apply
 */

/**
 1) Funkcja (zwykły kontekst)
 */

function z () {
  console.log(this)
  console.log(this.imie) //undefined
}

var imie = 'Ziuto'
z() // imie = undefined

//imie = 'Ziuto'
z() // imie = Ziuto, bo imie jest globalne

/**
 * 2) Konstruktor
 */

function z2 () {
  console.log(this.name)
}

function Person (name) {
  this.name = name
}

var ziutek = new Person('Ziutosław I Ziutkowaty')
var heniu  = Person('Heniutek II Heniowaty')

console.log(ziutek) //Person { name: 'Ziutosław I Ziutkowaty' }
console.log(heniu) //undefined

/**
 * 3) Metoda
 */


var person2 = {
  imie: 'Nieznane',
  sayHello: function () {
    console.log('Hello ' + this.imie)
  }
}

person2.sayHello()
person2.imie = 'yolo'
person2.sayHello()

/**
 4) Apply / bardzo podobne do call (w callu przekazujemy argument przecinkiem zamiast przekazac caly obiekt)
 **/

function sayKwaKwa () {

  return 'Jestem kaczka bo mówię ' + this.kwakwa
}

var kaczka = {
  kwakwa: 'kwa kwa'
}

var pies = {
  hauhau: 'hau hau'
}

console.log(sayKwaKwa.apply(kaczka))

console.log(sayKwaKwa.apply(pies))