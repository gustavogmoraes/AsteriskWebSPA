import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

export interface PeriodicElement {
  position: number;
  numero: number;
  date: string;
  duracao: string;
  ramal: string;
  tipo: string;

}
export enum tiposDeChamadas{
  todas,
  entrada,
  saida
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 2, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 3, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 4, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 5, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 6, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 7, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 8, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 9, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 10, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 11, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 12, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 13, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 14, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 15, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 16, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 17, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 18, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 19, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 20, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 30, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 31, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 32, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 33, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 34, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 35, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 36, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 37, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 38, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 39, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 40, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 41, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 42, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 43, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 44, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},  
  {position: 45, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 46, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
  {position: 47, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 48, numero: 6232104044, date:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: tiposDeChamadas[tiposDeChamadas.saida]},
  {position: 49, numero: 6232105510, date:'2019-08-17 03:24:00', duracao:'03:15',ramal:'1800',tipo: tiposDeChamadas[tiposDeChamadas.entrada]},
        
];

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
displayedColumns: string[] = ['select', 'position', 'numero', 'date', 'duracao','ramal','tipo'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  private _filtro = "";

  @Input() 
  set filtro(filtro: string) {
    this.applyFilter(filtro);
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
