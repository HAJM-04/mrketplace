import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  surname = '';
  email = '';
  password = '';
  passwordConfirmation = '';

  register() {
    if (this.password !== this.passwordConfirmation) {
      alert('Passwords do not match!');
      return;
    }

    // Aquí puedes guardar en localStorage o hacer una petición a backend
    console.log('Registering:', {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
    });

    alert('Successfully registered!');
  }
}
