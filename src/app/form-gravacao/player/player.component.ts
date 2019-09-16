import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PeriodicElement } from 'src/app/chamada.model';
import { HttpClienteService } from 'src/app/http-cliente.service';
import { BaseAudioPlayerFunctions } from 'ngx-audio-player/lib/component/base/base-audio-player-components';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(
    private _http: HttpClienteService,
    public dialogRef: MatDialogRef<PlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    
  ) { }
  urlPlay: string = '';
  audioTitle: string = 'Teste';
  private  player =  document.getElementsByTagName('audio');

  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = false;

  ngOnInit() {
    this.urlPlay = this._http.getChamadasParaPlay(this.data);
    this.player[0].autoplay = true;
    
    //this.controle.playBtnHandler();
    
  }
 

}
