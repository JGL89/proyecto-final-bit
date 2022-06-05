import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


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

@NgModule({
  declarations: [
    AppComponent,
    CrearAdopcionComponent,
    ListarAdopcionesComponent,
    HomeComponent,
    PrivateComponent,
    RegisterComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'private', component: PrivateComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'register', component: CrearAdopcionComponent },
      { path: 'register', component: ListarAdopcionesComponent },
    ]),
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
