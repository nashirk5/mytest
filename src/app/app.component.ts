import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  myForm: FormGroup;
  result: Array<any> = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      zipCode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      drivingLocation: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode2: ['', Validators.required],
    });

  }

  onSubmit() {
    console.log(this.myForm.value);
    this.result = this.myForm.value;
  }

}
