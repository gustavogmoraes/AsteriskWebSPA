export class util{
    static formatadorData(data: Date){
        let datainicioFormatada = "" +data.getDate() + "/" +
        (data.getMonth() +1 ) + "/" +
        data.getFullYear(); 
        return datainicioFormatada;
      }
    static formatadorDataHora(data: Date){
        let datainicioFormatada = "" +data.getDate() + "/" +
        (data.getMonth() +1 ) + "/" +
        util.pad(data.getFullYear()) + " " +
        util.pad(data.getHours()) + ":" +
        util.pad(data.getMinutes()) + ":" +
        util.pad(data.getSeconds())
        return datainicioFormatada;
    }
    static pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }
    

  } 