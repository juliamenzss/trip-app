import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria/categoria';
import { CategoriaService } from '../../categorias/service/categoria.service';
import { LugarService } from '../service/lugar.service';
import { catchError, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss',
})
export class LugarComponent {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private lugaresService: LugarService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => (this.categorias = listaCategorias),
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched();
    if (this.camposForm.valid) {
      this.lugaresService
        .salvar(this.camposForm.value)
        .pipe(
          take(1),
          tap(() => {
            this.camposForm.reset();
          }),
          catchError((erro) => {
            console.error('Erro ao salvar:', erro);
            return of(null);
          })
        )
        .subscribe();
    }
  }
  isCampoInvalido(nomeCampo: string) : boolean{
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo.touched && campo?.errors?.['required'];
  }
}
