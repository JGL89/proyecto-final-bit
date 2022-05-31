import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//components
import { AppComponent } from './app.component';
import { CrearAdopcionComponent } from './components/crear-adopcion/crear-adopcion.component';
import { ListarAdopcionesComponent } from './components/listar-adopciones/listar-adopciones.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearAdopcionComponent,
    ListarAdopcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
