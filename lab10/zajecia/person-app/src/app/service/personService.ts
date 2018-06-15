import {Injectable} from '@angular/core';
import {PERSONS} from '../model/mock-person'
import {Person} from "../model/person";
import {Observable} from "rxjs/Observable";
import {from} from "rxjs/observable/from";
import {of} from "rxjs/observable/of";

@Injectable()
export class PersonService {

  PERSONS: Person[];

  constructor() {
    this.PERSONS = PERSONS;
  }

  getPerson(): Observable<Person> {
    return of(this.PERSONS[0]);
  }

  getPersons(): Observable<Person> {
    return from(this.PERSONS)
  }

  addPerson(person: Person) {
    this.PERSONS.push(person);
  }

}
