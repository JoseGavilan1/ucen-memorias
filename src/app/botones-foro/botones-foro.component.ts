import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-botones-foro',
  templateUrl: './botones-foro.component.html',
  styleUrl: './botones-foro.component.scss'
})
export class BotonesForoComponent {
  constructor(private router: Router) {}

  irAMemorias() {
    this.router.navigate(['/subir-archivo'])
     // Navegar al HeaderComponent
  }
}
