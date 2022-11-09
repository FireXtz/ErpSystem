import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-carteiras-contratos',
  templateUrl: './carteiras-contratos.component.html'
})
export class CarteirasContratosComponent implements OnInit {
 register:any = [];

 impress:any = [];

 fonte:any = [];

 ordem:any = [];

 dependentes:any = [];

 listaDependentes = [{id:1,nome:'',impressao:'',ativos:''}]

  constructor() {

    this.register.push({name:'Sim', value: 0});
    this.register.push({name:'Não', value: 1});

    this.impress.push({name:'Sim', value: 0});
    this.impress.push({name:'Não', value: 1});

    this.fonte.push({name:'Normal', value: 0});
    this.fonte.push({name:'Pequena', value: 1});
    this.fonte.push({name:'Grande', value: 2});

    this.ordem.push({name:'Nome', value: 0});
    this.ordem.push({name:'Contrato', value: 1});

    this.dependentes.push({name:'Vivos', value: 0});
    this.dependentes.push({name:'Falecidos', value: 1});
    this.dependentes.push({name:'Todos', value: 2});

   }

  ngOnInit(): void {
  }

}
