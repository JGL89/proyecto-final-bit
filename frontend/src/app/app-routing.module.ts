import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAdopcionComponent } from './components/crear-adopcion/crear-adopcion.component';
import { HomeComponent } from './components/home/home.component';


import { ListarAdopcionesComponent } from './components/listar-adopciones/listar-adopciones.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PrivateComponent } from './components/private/private.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: ListarAdopcionesComponent },
  { path: 'crear-adopcion', component: CrearAdopcionComponent},
  { path: 'editar-adopcion/:id', component: CrearAdopcionComponent},
  { path: 'home', component: HomeComponent },
  {path: 'private', component: PrivateComponent,canActivate: [AuthGuard],},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
