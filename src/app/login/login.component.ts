import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // cityslicka
  loginForm: FormGroup;
  error: string;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      'password': ['', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  sendForm() {
    this.authService.login(this.loginForm.value).subscribe(res => {
      localStorage.setItem('token', res['token']);
      this.router.navigate(['/resources'])
    }, err => {
      this.error = err['error']['error'];
      console.log(this.error)
    })
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('email')

  }

}
