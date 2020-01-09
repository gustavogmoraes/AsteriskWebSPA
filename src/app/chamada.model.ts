export interface PeriodicElement {
    position: string;
    numero: string;
    dataHora: string;
    duracao: string;
    ramal: string;
    tipo: string;
    uniqueId: string; 
  }
 
  export interface FiltroForm {
    Numero: string;
    Ramal: string;
    DataInicio: string;
    HoraInicio: string;
    HoraFim: string;
    DataFim: string;
    Tipo: string;    
  }

  export interface DataForm {
    dataInicio: Date;
    dataFinal: Date;
    horaInicial: string;
    horaFinal: string;
    tipo: string;
    numero: string;
    ramal: string;
  }
  export interface Blacklist{
    id: number;
    numero: string;
    observacao: string;
    dataCadastro: string;
  }



