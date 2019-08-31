import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { FormGravacaoComponent } from '../form-gravacao/form-gravacao.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public pieChartLabels1 = ['Orig ATD', 'Orig Não ATD','Receb Atd','Receb Não Atd'];
  public pieChartData1 = [120, 150,50,20];
  public pieChartType1 = 'doughnut';

  public pieChartLabels2 = ['Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  public pieChartData2 = [
    {
      label: "Recebidas",
      backgroundColor: "#3e95cd",
      data: [133,221,783,2478]
    }, {
      label: "Originadas",
      backgroundColor: "#8e5ea2",
      data: [408,547,675,734]
    }
  ];
  public pieChartType2 = 'horizontalBar';
  public options2 = {
    responsive: true,
    

  }

  onChartClick(event) {
    console.log(event);
  }
  ngOnInit() {
  }

}
