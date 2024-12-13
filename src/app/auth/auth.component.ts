import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true; 
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  switchMode() {
    this.isLoginMode = !this.isLoginMode; 
    this.errorMessage = ''; 
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      return;
    }

    if (this.isLoginMode) {
   
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {
          console.log('Connexion réussie', response);
          this.router.navigate(['/home']); 
        },
        error: (err) => {
          console.error('Erreur de connexion', err);
          this.errorMessage = 'Identifiants invalides.';
        },
      });
    } else {
    
      this.authService.signup(this.email, this.password).subscribe({
        next: (response) => {
          console.log('Inscription réussie', response);
          this.router.navigate(['/home']); 
        },
        error: (err) => {
          console.error('Erreur d\'inscription', err);
          this.errorMessage = 'Erreur lors de l\'inscription.';
        },
      });
    }
  }
}
