import { Component, OnInit } from '@angular/core';
interface Filiais {
  
  nome?:string
  sigla?:string
  
}

@Component({
  selector: 'app-cadastro-funcionarios',
  templateUrl: './cadastro-funcionarios.component.html',
  styleUrls: ['./cadastro-funcionarios.component.scss']
})

 
export class CadastroFuncionariosComponent implements OnInit {
  minDate: Date;

  sexo: any = [];

  selectStatus:any =[]

  maxDate: Date;

  value1:string

  date1!: Date;

  date2!: Date;

  date3!: Date;

  valueIconLeft: any;

  valueIconLeft0: any;

  valueIconLeft1: any;

  valueIconLeft2: any;

  valueIconLeft3: any;

  valueIconLeft4: any;

  displayModal: boolean;

  tableData: Filiais[] = [];

  cols: any[] = [];

  invalidDates: Array<Date>

 
  
  
  items: any = [];

  constructor() {
    this.sexo.push({name:'Selecione o sexo', value: 0});
    this.sexo.push({name:'MASCULINO', value: 1});
    this.sexo.push({name:'FEMININO', value: 2});

    this.selectStatus = [{label:' Ativo',value:'ativo'},{label:'Inativo',value:'inativo'}]


    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Pesquisa de Funcionários'},
      {label: 'Pesquisar Funcionários', routerLink: '/funcionarios'},
      {label: 'Cadastro de Funcionários', routerLink: 'funcionarios/cadastro'},
    ];

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'nome', header: 'nome' },
      { field: 'sigla', header: 'sigla' },
      { field: 'status', header: 'status' },
  ];

  this.tableData = 
  [{nome:'Matriz',sigla:'MSG'},]


  }

  showModalDialog() {
    this.displayModal = true;
}

 
}


