import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { RegisterFormModel } from '../../models/register-form.model';
import { confirmPasswordValidator } from '../../validators/confirm-password.validator';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-register-form',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  protected formBuilder = inject(NonNullableFormBuilder);

  registerForm: FormGroup<RegisterFormModel> = this.formBuilder.group(
    {
      username: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      privacyPolicy: this.formBuilder.control(false),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/),
      ]),
      password_confirmation: this.formBuilder.control('', [
        Validators.required,
        confirmPasswordValidator,
      ]),
    },
    { validators: confirmPasswordValidator }
  );

  onSubmit() {
    console.log(this.registerForm);
  }
}
