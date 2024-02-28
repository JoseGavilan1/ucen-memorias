import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isDashboardVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {


  }

  irADashboard() {
    this.router.navigate(['/dashboard']) // Navegar al HeaderComponent
  }

  irAMemorias() {
    this.router.navigate(['/memorias'])
     // Navegar al HeaderComponent
  }

  irAForo() {
    this.router.navigate(['/foro'])
     // Navegar al HeaderComponent
  }

  irAProyectos() {
    this.router.navigate(['/proyectos'])
     // Navegar al HeaderComponent
  }
}

