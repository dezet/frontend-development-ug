'use strict';

[1, 2, 3].map(function (val) {
  console.log(val);
});

var dd = [1, 2, 3, 4, 5, 6, 7].filter(function (item) {
  return item % 2 === 0;
});
console.log(dd);

/**
 * W tym przykkladzie musimy uzywac self = this, gdyż ES5
 * @type {{numbers: number[], scale: number, move(): void}}
 */
var aShape = {
  numbers: [1, 2, 3, 4, 5],
  scale: 2,
  move: function move() {
    console.log('aShape numbers: ');
    console.log(this.numbers);
    var self = this; //!!!
    this.numbers = this.numbers.map(function (elem) {
      return elem * self.scale;
    });
    console.log('aShape numbers 2: ');
    console.log(this.numbers);
  }
};
aShape.move();

aShape.numbers.forEach(function (elem) {
  console.log(elem);
});

var bShape = {
  numbers: [1, 2, 3, 4, 5],
  scale: 2,
  move: function move() {
    var _this = this;

    console.log('bShape numbers: ');
    console.log(this.numbers);
    this.numbers = this.numbers.map(function (elem) {
      return elem * _this.scale;
    });
    console.log('bShape numbers 2: ');
    console.log(this.numbers);
  }
};