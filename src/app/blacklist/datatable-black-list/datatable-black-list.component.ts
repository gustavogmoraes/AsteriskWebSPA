import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import { Blacklist } from 'src/app/chamada.model';
import { SelectionModel } from '@angular/cdk/collections';
import { HttpClienteService } from 'src/app/http-cliente.service';

const ELEMENT_DATA: Blacklist[] = [
  {id: 1,numero:'32104044',dataCadastro:'2019-08-18 06:24:00',observacao:"teste"},
  {id: 2,numero:'32104044',dataCadastro:'2019-08-18 06:24:00',observacao:"teste"},
  {id: 2,numero:'32104044',dataCadastro:'2019-08-18 06:24:00',observacao:"teste"},
  {id: 3,numero:'32104044',dataCadastro:'2019-08-18 06:24:00',observacao:"teste"}
      
];


@Component({
  selector: 'app-datatable-black-list',
  templateUrl: './datatable-black-list.component.html',
  styleUrls: ['./datatable-black-list.component.css']
})
export class DatatableBlackListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) dataTable: MatTable<Blacklist[]>;
  
  //private ELEMENT_DATA: Blacklist[];
  
  
  displayedColumns: string[] = ['select', 'id', 'numero', 'observacao', 'data','alterar','deletar'];
  dataSource = new MatTableDataSource<Blacklist>(ELEMENT_DATA);
  selection = new SelectionModel<Blacklist>(true, []);
  


  private _filtro;
  
  @Output() onNewSelected: EventEmitter<Blacklist[]> = new EventEmitter<Blacklist[]>();
 
  constructor(private _http: HttpClienteService,public dialog: MatDialog) { }

  ngOnInit() { 
      /*this._http.onNewBlackList.subscribe((n)=>{
     this.ELEMENT_DATA = n,     
      console.log(this.ELEMENT_DATA);
      this.dataSource = new MatTableDataSource<Blacklist>(this.ELEMENT_DATA);
      this.selection = new SelectionModel<Blacklist>(true, []);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },()=>{

    },
    ()=>{
      console.log("Completed");
      
    }
    ); 
    */
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

  checkboxLabel(row?: Blacklist): string {
    
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


  montarURl(periodicElement: Blacklist ): string{
    return null //periodicElement.uniqueId;

  }


}
