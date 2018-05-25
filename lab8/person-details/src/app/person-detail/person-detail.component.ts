import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Person} from '../models/Person'

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;

  constructor() {
  }

  ngOnInit() {
  }
}
