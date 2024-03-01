import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificacionViewComponent } from './notificacion-view/notificacion-view.component';
import { ForoComponent } from './foro/foro.component';
import { CareerViewComponent } from './career-view/career-view.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    CareerViewComponent,
    LoginComponent,
    InicioComponent,
    DashboardComponent,
    NotificacionViewComponent,
    ForoComponent,
    TablaUsuariosComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
