import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})

export class SigninComponent implements OnInit {
  signinForm: FormGroup;

  constructor(private userService: AuthService,
              private router : Router){}

  onSubmit() {
    const user = new User(
      this.signinForm.value.email,
      this.signinForm.value.password
    )
    this.userService.signin(user)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.router.navigateByUrl('/');
        },
        error => console.log(error)
      )
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }
}
