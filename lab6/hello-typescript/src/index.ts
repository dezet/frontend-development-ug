interface Person {
    name: string;
    yob: number;

}

function sayHello(person: Person) {
    console.log('Hello ' + person.name);
    console.log('hello ' + person.anotherName)
}

let ziutek: Person = {name: "Ziutixon", anotherName: "Kleopatrus"}

sayHello(ziutek);


class Student {
    constructor(public name: string, public yob: number) {
        this.name = name;
        this.yob = yob;
    }

}


let zenek = new Student("Zenek", 2006);
console.log(zenek.name);

sayHello(ziutek);
sayHello(zenek);


let studentList: Student[] = [ziutek, zenek];
let myTuple: [string, number] = ["yolo", 2020]

enum Color {Red, Green, Blue}




