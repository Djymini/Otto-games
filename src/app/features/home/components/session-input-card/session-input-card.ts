import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionInputModel } from '../../models/session-input.model';


@Component({
  selector: 'app-session-input-card',
  imports: [ReactiveFormsModule],
  templateUrl: './session-input-card.html',
  styleUrl: './session-input-card.scss',
})
export class SessionInputCard {
  private formBuilder = inject(NonNullableFormBuilder);

  sessionInputForm: FormGroup<SessionInputModel> = this.formBuilder.group({
    code: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(/^[0-9]{6}$/),
    ]),
  });

  onSubmit() {
    const sessionCode: string = this.sessionInputForm.getRawValue().code;
    console.log("Rejondre la partie avec la session suivante : " + sessionCode)
  }
}
