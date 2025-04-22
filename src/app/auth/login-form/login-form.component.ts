import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Connexion avec :', this.loginForm.value);

      const { email, password } = this.loginForm.value;

      if (email === 'kassi@aloya.com' && password === 'admin123') {
        this.loginForm.reset();
        this.router.navigate(['/']);
        /*this.notifierService.notify({
          message: 'Connexion réussie !',
          type: 'success'
        });
        */
        // redirection ici
      } else {

      }
    }
  }
}
