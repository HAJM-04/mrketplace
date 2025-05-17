import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
// Firebase imports for Authentication
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Authentication Validation
    this.authService.login(this.email, this.password)
    .then(() => {
      localStorage.setItem('user', JSON.stringify({ email: this.email }));
      this.router.navigate(['/products']);
    })
    .catch(error => {
        this.errorMessage = 'Wrong credentials or account not founded.';
    });
    // Validación básica (solo para demostrar)
    if (this.email && this.password) {
      localStorage.setItem('user', JSON.stringify({ email: this.email }));
      this.router.navigate(['/products']);
    } else {
      this.errorMessage = 'Por favor, ingresa tu correo y contraseña.';
    }
  }
}
