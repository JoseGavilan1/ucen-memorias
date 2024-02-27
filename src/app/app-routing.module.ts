import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CareerViewComponent } from './buttons_view/buttons_view.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta por defecto que carga el componente de login al iniciar la página
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HeaderComponent},
  { path: 'inicio',component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path:'memorias', component: CareerViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
