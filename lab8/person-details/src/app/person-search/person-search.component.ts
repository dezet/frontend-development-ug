import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Person} from "../models/Person";

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  @Input() persons: Person[];
  @Output() filteredPersons = new EventEmitter<Person[]>();
  searchControl: FormControl;

  constructor() {
    this.searchControl = new FormControl();
    this.searchControl.valueChanges.subscribe(
      searchTerm => this.informParent(this.persons.filter(p => p.name.includes(searchTerm)))
    )
  }

  informParent(persons: Person[]) {
    this.filteredPersons.emit(persons);
  }

  ngOnInit() {
  }
}
