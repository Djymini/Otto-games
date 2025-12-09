import { Component } from '@angular/core';
import { LoginForm } from "../components/login-form/login-form";

@Component({
  selector: 'app-login.page',
  imports: [LoginForm],
  template: `
    <app-login-form></app-login-form>
  `,
  styles: ``,
})
export default class LoginPage {

}
