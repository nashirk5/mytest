import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
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
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      zipCode: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
      email: ['', Validators.required],
      drivingLocation: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode2: ['', Validators.required],
    });

  }

  onPhoneChages(){
    var value = this.myForm.controls['phone'].value;
    
    if (value.length <= 10) {
      var country, city, number, result;

      country = value.slice(0, 3);
      city = value.slice(3, 6);
      number = value.slice(6, 10);

      result = `(${country}) ${city} - ${number}`;

      console.log(result);      

      // if (result) {
      //   this.myForm.controls['phone'].setValue(result);
      // }
    }   
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.result = this.myForm.value;

    if(this.myForm.valid){
      alert('Form has been submited')
    } else {
      alert('Please fill the form correctly')
    }
  }

}
