import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { adopcion } from 'src/app/models/adopcion';

@Component({
  selector: 'app-crear-adopcion',
  templateUrl: './crear-adopcion.component.html',
  styleUrls: ['./crear-adopcion.component.css']
})
export class CrearAdopcionComponent implements OnInit {
adopcionForm: FormGroup;
titulo = 'Crear adopcion';
  id: string | null;
constructor(private fb: FormBuilder
  private router: Router,
  private toastr: ToastrService,
  private _productoService: ProductoService,
  private aRouter: ActivatedRoute) { 
    this.adopcionForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      genero: ['', Validators.required],  
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  crearAdopcion(){
    const adopcion: adopcion = {
      nombre: this.adopcionForm.get('nombre')?.value,
      especie: this.adopcionForm.get('especie')?.value,
      genero: this.adopcionForm.get('genero')?.value,
  }

  console.log(adopcion);
  this.toastr.success('La adopción fue registrada con exito!', 'Adopción Registrada!');
  this.router.navigate(['/']);
}
