import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  UserArray: Array<Object> = [];
 
  constructor(private formBuilder: FormBuilder){}

  registrationForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  })
 
  OnPressEnter(event){ 
    this.UserArray.push({"id":this.UserArray.length+1,
    "name":this.registrationForm.get('name').value,
    "email":this.registrationForm.get('email').value, 
    "phone": this.registrationForm.get('phone').value}); 
  }

  onUpdate(data){
    this.registrationForm.controls.name.setValue(data.name);
    this.registrationForm.controls.email.setValue(data.email);
    this.registrationForm.controls.phone.setValue(data.phone);
  }

  saveUpdate(data)
  {
    let index = this.UserArray.indexOf(data);
    data.name = this.registrationForm.get('name').value;
    data.email = this.registrationForm.get('email').value;
    data.phone = this.registrationForm.get('phone').value;
    this.UserArray[index] = data;
  }
 
  onDelete(data){
    const index: number = this.UserArray.indexOf(data);
    if(index != -1){
      this.UserArray.splice(index,1);
    }
  }
  ngOnInit(): void {
  }
  


}
