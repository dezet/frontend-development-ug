"use strict";
function sayHello(person) {
    console.log('Hello ' + person.name);
    console.log('hello ' + person.anotherName);
}
let ziutek = { name: "Ziutixon", anotherName: "Kleopatrus" };
sayHello(ziutek);
class Student {
    constructor(name, yob) {
        this.name = name;
        this.yob = yob;
        this.name = name;
        this.yob = yob;
    }
}
let zenek = new Student("Zenek", 2006);
console.log(zenek.name);
sayHello(ziutek);
sayHello(zenek);
let studentList = [ziutek, zenek];
let myTuple = ["yolo", 2020];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
