import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, ingresa tu correo y contraseña.';
      return;
    }

    this.authService.login(this.email, this.password)
      .then(() => {
        localStorage.setItem('user', JSON.stringify({ email: this.email }));
        this.router.navigate(['/products']);
      })
      .catch(error => {
        this.errorMessage = 'Credenciales incorrectas o cuenta no encontrada.';
        console.error(error);
      });
  }
}
