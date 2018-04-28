interface Person {
    name: string;
    yob: number;
}
declare function sayHello(person: Person): void;
declare let ziutek: Person;
declare class Student {
    name: string;
    yob: number;
    constructor(name: string, yob: number);
}
declare let zenek: Student;
declare let studentList: Student[];
declare let myTuple: [string, number];
declare enum Color {
    Red = 0,
    Green = 1,
    Blue = 2,
}
