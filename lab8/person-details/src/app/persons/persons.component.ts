import {Component, OnInit} from '@angular/core';
import {Person} from '../models/Person'

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  persons: Person[];
  filteredPersons: Person[];
  selectedPerson: Person;

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  onFilteredPersons(persons: Person[]) {
    this.filteredPersons = persons;
  }

  constructor() {
    this.persons = this.filteredPersons = [
      {id: 1, name: 'Bolek'},
      {id: 2, name: 'Lolek'},
      {id: 3, name: 'Wacek'},
      {id: 4, name: 'Jacek'},
      {id: 5, name: 'Stasiek'},
    ];
  }

  ngOnInit() {
  }

}
