import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form = new FormGroup ({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  ngOnInit() {
    // tslint:disable-next-line:no-console
    this.form.controls.username.valueChanges.subscribe(_res => console.log(this.form.controls.username.touched));
  }


  get username() {
    return this.form.get('username');
  }
  
  get email() {
    return this.form.get('email');
  }

  get message() {
    return this.form.get('message');
  }
}
