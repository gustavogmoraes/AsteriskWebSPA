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
  export interface FiltroForm {
    dateinicio: string;
    dateFinal: string;
    horaInicio: string;
    horaFinal: string;
    tipos: tiposDeChamadas;
    numero: string;
    ramal: string;
    
   
  
  }