import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FiltroForm, PeriodicElement } from './chamada.model';



@Injectable({
  providedIn: 'root'
})
export class HttpClienteService {
  onNewChamadas: EventEmitter<PeriodicElement[]> = new EventEmitter<PeriodicElement[]>();


  readonly url: string = 'https://localhost:5001/api/Ligacoes/ConsulteLigacoes';
  constructor(private http: HttpClient) { }


  private requesicaoPostChamadas(filtroForm: FiltroForm): Observable<PeriodicElement[]>{
    return this.http.post<PeriodicElement[]>(`${this.url}`,filtroForm)    
  }
  private requisicaoGetChamadasParaPlay(id: string): Observable<any>{
    return this.http.get(`https://localhost:5001/api/Ligacoes/TransmitaGravacao/${id}`)
  }
 
  PostChamadas(filtro){
    this.requesicaoPostChamadas(filtro).subscribe(
      (n)=>{       
        this.onNewChamadas.emit(n)
        //this.onNewChamadas.complete()
      }     
      );
  }
  getChamadas(filtro){
    window.location.href = `https://localhost:5001/api/Ligacoes/BaixeGravacoes/${filtro}`; 
  }
  getChamadasParaPlay(filtro){
    return `https://localhost:5001/api/Ligacoes/TransmitaGravacao/${filtro}`
  }

}

  /*getChamadas(): Observable<FiltroForm[]>{
    return this.http.get<FiltroForm[]>(`${this.url}chamadas`)
  }*/
