import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ForoComponent } from './foro/foro.component';
import { CareerViewComponent } from './career-view/career-view.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { BotonesForoComponent } from './botones-foro/botones-foro.component';
import { UploadFilesComponent } from './upload-files/upload-files.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta por defecto que carga el componente de login al iniciar la página
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HeaderComponent},
  { path: 'inicio',component: InicioComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path:'memorias', component:  CareerViewComponent},
  { path: 'foro', component: ForoComponent},
  { path: 'usuarios', component: TablaUsuariosComponent},
  { path: 'subir-archivo', component: UploadFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
