import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Adopcion } from 'src/app/models/adopcion';
import { AdopcionService } from 'src/app/services/adopcion.service';

@Component({
  selector: 'app-listar-adopciones',
  templateUrl: './listar-adopciones.component.html',
  styleUrls: ['./listar-adopciones.component.css']
})
export class ListarAdopcionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
