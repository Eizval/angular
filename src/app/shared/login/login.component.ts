import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface LoginForm {
  username: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup<LoginForm>;

  constructor(public loginService: LoginService, formBuilder: FormBuilder) { 
    this.loginForm = formBuilder.group<LoginForm>({
      username: new FormControl('', { nonNullable: true}),
      password: new FormControl('', { nonNullable: true})
    });
  }

  ngOnInit() {

  }

  public save(): void {
    console.log(this.loginForm.value);
    const canLogin = this.canLogin(
      this.loginForm.controls.username.value, 
      this.loginForm.controls.password.value);
    
      if(canLogin){
        this.loginService.setIsLoggedIn(true);
      }
    
  }


  private canLogin(username: string, password: string): boolean {
    if(username === "guest" && password === "guest"){
      return true
    } else {
      return false
    }

  }


}
