class aShape {
  constructor (x, y, delta) {
    this.x     = x
    this.y     = y
    this.delta = delta
  }

  move () {
    this.x += this.delta
    this.y += this.delta
  }
}