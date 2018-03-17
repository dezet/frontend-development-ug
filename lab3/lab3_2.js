/**
 * Można by rzec, że to metoda fabryczna (wzorzec projektowy).
 * Bierzemy obiekt i za pomoca funkcji create dodajemy do jego klasy bazowej oczekiwane metody/pola.
 * @param proto
 * @returns {F}
 */
function create (proto) {
  function F () {}

  F.prototype = proto
  F.prototype.sayHello = function(){
    return "hello world"
  }
  return new F()
}

var base = {
  x: 5,
  y: 7,
  getX: function () {
    return this.x
  },
  getY: function () {
    return this.y
  }
}

var child = create(base)

console.log(child.getX())



