import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { DateAdapter, MatTable } from '@angular/material';
import { DataForm, FiltroForm, PeriodicElement } from '../chamada.model';
import { util } from '../util';
import { HttpClienteService } from '../http-cliente.service';





@Component({
  selector: 'app-form-gravacao',
  templateUrl: './form-gravacao.component.html',
  styleUrls: ['./form-gravacao.component.css']
  
})

export class FormGravacaoComponent implements OnInit {

  
  
  dataForm: DataForm = {
    dataInicio: new Date(), dataFinal: new Date(), horaInicial: "00:00", horaFinal: "23:59",
    tipo: "", numero: "", ramal: ""};
  selecteds: PeriodicElement[];
  onSelecteds(onNewSelected){
    this.selecteds = onNewSelected; 
  }

  constructor(private _adapter: DateAdapter<any>,private _http: HttpClienteService) { }

  ngOnInit() {
    /*console.log(this.dataForm);
    this.requisicao(this.formatarObjetoFiltro(this.dataForm));*/
  }
  onSubmit() {
    console.log(this.formatarObjetoFiltro(this.dataForm));
    this.PostRequisicao(this.formatarObjetoFiltro(this.dataForm));
  }

  PostRequisicao(filtro){
    this._http.PostChamadas(filtro);
  }
  getRequisicao(filtro){
    this._http.getChamadas(filtro)
  }

  click(){
    console.log(this.selecteds);
    this.getRequisicao(this.montarUrl(this.selecteds));
    
  }
  montarUrl(selectd: PeriodicElement[]): string{
    let url: string[] = new Array;
    selectd.forEach(element => {
      url.push(element.uniqueId);
    });
    return url.join("|");

  }
  formatarObjetoFiltro(dataForm: DataForm): FiltroForm{
    let filtroForm: FiltroForm = {
      DataInicio: util.formatadorData(dataForm.dataInicio).trim(),
      HoraInicio: dataForm.horaInicial.trim(),
      DataFim: util.formatadorData(dataForm.dataFinal).trim(),
      HoraFim: dataForm.horaFinal.trim(),
      Numero: dataForm.numero.trim(),
      Ramal: dataForm.ramal.trim(),
      Tipo: dataForm.tipo.trim(),

    }

    return filtroForm;    
  }
  

  
  
  
}

