import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // cityslicka
  registerForm: FormGroup
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.registerForm = this.formBuilder.group({
      'email': [''],
      'password': ['']
    })
  }

  
  ngOnInit() {
  }

  registerUser() {
    this.authService.register(this.registerForm.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/login'])
    })
  }
}
