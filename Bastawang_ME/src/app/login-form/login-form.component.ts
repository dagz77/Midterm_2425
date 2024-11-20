import { Component } from '@angular/core';
import {FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})

export class LoginFormComponent {
  user = {
    name: '',
    email: ''
  };

  onSubmit(form: NgForm){
    if (form.valid){
      console.log('Form Submitted: ', this.user);
      //alert('Form Submitted: ' + JSON.stringify(this.user));
    }else{
      console.log('Form is Invalid');
    }
  }
}
