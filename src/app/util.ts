export class util{
    static formatadorData(data: Date){
        let datainicioFormatada = "" +data.getDate() + "/" +
        (data.getMonth() +1 ) + "/" +
        data.getFullYear(); 
        return datainicioFormatada;
      }
  } 