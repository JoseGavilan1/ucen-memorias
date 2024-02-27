import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irALogin() {
    this.router.navigate(['/login']) // Navegar al HeaderComponent
  }

  mostrarBandeja: boolean = false;

  mostrarBandejaNotificaciones() {
    this.mostrarBandeja = !this.mostrarBandeja; // Alternar la visualización de la bandeja de notificaciones
  }
  }

