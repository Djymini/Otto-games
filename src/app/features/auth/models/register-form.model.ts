import { FormControl } from "@angular/forms";

export type RegisterFormModel = {
  username: FormControl<string>;
  email: FormControl<string>;
  privacyPolicy: FormControl<boolean>;
  password: FormControl<string>;
  password_confirmation: FormControl<string>;
};
