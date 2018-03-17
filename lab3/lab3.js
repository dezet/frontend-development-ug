function Shape (x, y) {
  this.x = x
  this.y = y
}

Shape.prototype = {
  getX: function () {
    return this.x
  },
  getY: function () {
    return this.y
  }
}

var aShape = new Shape(10, 20)

console.log(aShape.getX())
console.log(aShape.getY())

function Circle (x, y, r) {
  Shape.call(this, x, y)
  this.r = r
}

/**
 * bez tego nie bedzie mialo metod getX,getY
 * @type {Shape}
 */
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.area        = function () {
  return this.r * this.r

}
var aCircle                  = new Circle(30, 20, 10)

console.log(aCircle)
console.log(aCircle.getX())
console.log(aCircle.area())
console.log(aCircle.getY())
