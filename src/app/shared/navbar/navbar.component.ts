import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service'; // Ajusta si cambia la ruta

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  menuOpen = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Se suscribe a los cambios de sesión
    this.authService.getCurrentUser().subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  logout(): void {
    this.authService.logout(); // delega el manejo a AuthService
    this.menuOpen = false;     // opcional: cerrar menú al salir
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
