import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  categories: string[] = ['Categoría 1', 'Categoría 2', 'Categoría 3', 'Categoría 4', 'Categoría 5', 'Categoría 6', 'Categoría 7'];

  constructor(private router: Router) { }

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
}

