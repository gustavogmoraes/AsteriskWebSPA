import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';


interface DataForm {
  dataInicio: Date;
  dataFinal: Date;
  horaInicial: string;
  horaFinal: string;
  tipo: string;
  numero: string;
  ramal: string;
}


@Component({
  selector: 'app-form-gravacao',
  templateUrl: './form-gravacao.component.html',
  styleUrls: ['./form-gravacao.component.css']
  
})

export class FormGravacaoComponent implements OnInit {
  

  dataForm: DataForm = {
    dataInicio: new Date(), dataFinal: new Date(), horaInicial: "", horaFinal: "",
    tipo: "", numero: "", ramal: ""};

  

  constructor(private _adapter: DateAdapter<any>) { }

  ngOnInit() {
  }
  onSubmit() {
    
    console.log(this.formatadarData(this.dataForm.dataInicio));
  }
  formatadarData(data: Date){
    let datainicioFormatada = "" +data.getDay() + "/" +
    data.getMonth() + "/" +
    data.getFullYear(); 
    return datainicioFormatada;
  }



}
