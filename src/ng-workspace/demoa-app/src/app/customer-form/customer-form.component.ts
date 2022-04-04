import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  customerModel:any;

  constructor() {
    //data-model

    console.log("customer form is loaded");
   }

  ngOnInit(): void {
    this.customerModel = {
      firstName: 'Venkatesh',
      lastName: 'Waran',
      email: 'steve.Jobs@goodplace.com',
      Aadhar: 123456
    }
  }
  saveCustomer(customerFormGroup:any) {
    if(customerFormGroup.valid) {
      console.log(customerFormGroup.value);
    }
  }

}
