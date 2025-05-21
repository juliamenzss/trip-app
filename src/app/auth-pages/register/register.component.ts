import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface RegisterForm{
  name: FormControl,
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
registerForm: FormGroup<RegisterForm>;

  constructor(private router: Router){
    this.registerForm= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  handleNavigateHome() {
    this.router.navigate(['']);
  }

}
