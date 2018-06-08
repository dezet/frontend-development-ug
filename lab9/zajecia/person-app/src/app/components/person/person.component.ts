import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../service/personService";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../model/person"
import {ValidationErrors} from "@angular/forms/src/directives/validators";
import {AbstractControl} from "@angular/forms/src/model";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personForm: FormGroup;
  person: Person;
  persons: Person[] = [];

  constructor(private fb: FormBuilder, private personService: PersonService) {

  }

  ngOnInit() {
    this.personService.getPerson().subscribe(person => {
      console.log(person);
      this.persons.push(person)
    });
    this.personForm = this.fb.group({
      'name': this.fb.control('nazwa', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        this.myImieValidator
      ])),
      'birthDate': this.fb.control('data urodzenia', Validators.compose([Validators.required])),
      'email': this.fb.control('email', Validators.compose([Validators.required, Validators.email]))
    });
    this.personForm.controls['name'].valueChanges.subscribe(newName => console.log(newName));
  }


  myImieValidator(control: AbstractControl) {
    if (control.value.match(/^Bol/i)) {
      return {
        bolekValue: true
      }
    }
  }

  mySubmit(value) {
    console.log(this.personForm.value);
    this.personService.addPerson(new Person(this.personForm.controls['name'].value, this.personForm.controls['birthDate'].value, this.personForm.controls['email'].value))

  }
}
