import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { CrearAdopcionComponent } from './components/crear-adopcion/crear-adopcion.component';
import { ListarAdopcionesComponent } from './components/listar-adopciones/listar-adopciones.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CrearAdopcionComponent,
    ListarAdopcionesComponent,
    HomeComponent,
    PrivateComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'listar-adopciones', component: ListarAdopcionesComponent },
      { path: 'crear-adopcion', component: CrearAdopcionComponent },
      { path: 'home', component: HomeComponent },
      {path: 'private', component: PrivateComponent,canActivate: [AuthGuard],},
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  FormsModule,  
],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
