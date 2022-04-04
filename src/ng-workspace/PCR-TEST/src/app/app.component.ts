import { Component , OnInit} from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PCR-TEST';
  store:any=[];
  input: any;
  headers=["First Name","Aadhar Number","Date of Birth","Gender","City","Date Of Test","Time Of Test","Lab Name",
  "Report Number","Result"];
  searchvalue:any=[];
 ngOnInit(): void {}
  fg = new FormGroup({
  fname:new FormControl('',[Validators.required]),
  aadhar:new FormControl('',[Validators.required]),
  dob:new FormControl('',[Validators.required]),
  gender:new FormControl('',[Validators.required]),
  city:new FormControl('',[Validators.required]),
  date:new FormControl(),
  time:new FormControl(),
  lab:new FormControl('',[Validators.required]),
  report:new FormControl('',[Validators.required]),
  result:new FormControl('',[Validators.required])
})
 onSubmit(){
   console.warn(this.fg.value);
 }
 
  add(){
      console.log(this.store.push(this.fg.value));
      console.log(this.store);
      this.fg.reset();
      (<HTMLDivElement>document.getElementById("msg")).style.display="none";
  }
  search(){
    console.log((<HTMLDivElement>document.getElementById("find")).innerHTML);
    if((<HTMLDivElement>document.getElementById("find")).innerText==""){
      (<HTMLDivElement>document.getElementById("msg")).innerText="Sorry!! No records found in our database☹";
    }
    this.input=(<HTMLInputElement>document.getElementById("find")).value;
    this.store.forEach((element:any) => {
      if(element.aadhar==this.input){
        this.searchvalue.push(element);
      }
    });
    (<HTMLInputElement>document.getElementById("find")).value="";
  }  
  removefield(){
    this.searchvalue=[];
  }
}