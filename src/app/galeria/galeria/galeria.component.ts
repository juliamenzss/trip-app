import { Component } from '@angular/core';
import { LugarService } from '../../lugares/service/lugar.service';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria/categoria';
import { CategoriaService } from '../../categorias/service/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  lugares: Lugar[] = [];
  categorias: Categoria[] = [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: CategoriaService,
  ){
  }

  ngOnInit(){
    this.categoriaService.obterTodas().subscribe(categoriaResposta => this.categorias = categoriaResposta)
    this.lugarService.obterTodas().subscribe(lugaresResposta => this.lugares = lugaresResposta)
  }

  getTotalEstrelas(lugar: Lugar) : string{
  return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 -(lugar.avaliacao || 0));
  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro).subscribe(resultado => this.lugares = resultado);
  }
}
