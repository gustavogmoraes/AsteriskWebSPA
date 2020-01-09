import { Component, OnInit } from '@angular/core';
import { Blacklist } from '../chamada.model';
import { util } from '../util';
import { empty } from 'rxjs';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {
  dataForm: Blacklist = {
    id: null, numero:'',observacao:'',dataCadastro: null};
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    this.dataForm.dataCadastro = util.formatadorDataHora(new Date())
    console.log(this.dataForm);
  }
}
