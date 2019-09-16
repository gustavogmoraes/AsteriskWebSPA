import { Component, OnInit,Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatTable, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { PeriodicElement, FiltroForm } from 'src/app/chamada.model';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { HttpClienteService } from 'src/app/http-cliente.service';

import { DashComponent } from 'src/app/dash/dash.component';
import { PlayerComponent } from '../player/player.component';





/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: '1', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '2', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '3', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '4', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '5', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '6', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '7', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '8', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '9', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},
  {position: '10', numero: '6232104044', dataHora:'2019-08-18 06:24:00', duracao:'00:30',ramal:'1820',tipo: "",uniqueId:''},

      
];*/
 
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) dataTable: MatTable<PeriodicElement[]>;
  
  private ELEMENT_DATA: PeriodicElement[];
  
  
  displayedColumns: string[] = ['select', 'position', 'numero', 'date', 'duracao','ramal','tipo','audio'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  


  private _filtro;
  
  @Output() onNewSelected: EventEmitter<PeriodicElement[]> = new EventEmitter<PeriodicElement[]>();
 

  constructor(private _http: HttpClienteService,public dialog: MatDialog) { }

  ngOnInit() { 
    this._http.onNewChamadas.subscribe((n)=>{
     this.ELEMENT_DATA = n,     
      console.log(this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
      this.selection = new SelectionModel<PeriodicElement>(true, []);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },()=>{

    },
    ()=>{
      console.log("Completed");
      
    }
    ); 
    
  }
  emitSelected(){
    this.onNewSelected.emit(this.selection.selected);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    //this.isAllSelected() ?
        this.selection.clear(); //:
        //this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: PeriodicElement): string {
    
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  montarURl(periodicElement: PeriodicElement ): string{
    return periodicElement.uniqueId;

  }
  
  openDialog(elemented): void {
    const dialogRef = this.dialog.open(PlayerComponent, {
      width: '400px',
      
      data: this.montarURl(elemented)
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  
  
}
