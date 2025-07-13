import { Component } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
  template: `
    <h1>🌟 Ejercicios Angular PWA</h1>

<div class="integrantes">
  <h3>👥 Integrantes - GRUPO 3</h3>
  <ul>
    <li>Cangalaya Carrasco Henry Miguel</li>
    <li>Guzmán Vargas Jhessel</li>
    <li>Yanqui Rivera Maria de los Angeles</li>
    <li>Sebastian Castillo Jerson</li>
  </ul>
</div>

<nav>
  <a routerLink="/colores" routerLinkActive="active">🎨 Colores</a>
  <a routerLink="/contador" routerLinkActive="active">🔢 Contador</a>
</nav>

<router-outlet></router-outlet>
  `,
  styles: [
    `
    h1 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #2c3e50;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    nav a {
      text-decoration: none;
      color: #333;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 6px;
      transition: background-color 0.3s, color 0.3s;
    }

    nav a:hover {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    nav a.active {
      background-color: #1976d2;
      color: white;
      font-weight: bold;
    }

  .integrantes {
    text-align: center;
    margin-bottom: 2rem;
  }

  .integrantes h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }

  .integrantes ul {
    list-style: none;
    padding: 0;
  }

.integrantes li {
  margin: 0.3rem 0;
  font-weight: 500;
}

    @media (max-width: 600px) {
      nav {
        flex-direction: column;
        align-items: center;
      }

      nav a {
        width: 80%;
        text-align: center;
      }
    }
  `,
  ],
})
export class AppComponent {}
