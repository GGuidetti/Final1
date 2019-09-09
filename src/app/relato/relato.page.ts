import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';


import { Observable } from 'rxjs';

import { map } from 'rxjs/operators'
import { BankComponent } from '../bank/bank.page';
import { Router, NavigationExtras } from '@angular/router';
import * as _ from 'lodash';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-relato',
  templateUrl: './relato.page.html',
  styleUrls: ['./relato.page.scss'],
})
export class RelatoComponent implements OnInit {


  listaContatos: Observable<any[]>;
  listaFiltro: any[];
  filtro = {}; //regras ativas do filtro
  relato: any;
  valor: string;
  constructor(private banco: AngularFireDatabase, private rota: Router, private modal: ModalController) {
    this.listaContatos = this.banco.list('relato').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  ngOnInit() {
  }

  enviar() {
    this.rota.navigate(['salvar']);
    if (this.relato.key == null) {

      this.banco.list('relato').push(this.relato);
      this.relato = new BankComponent();

      this.rota.navigate(['listar']);
    } else {

      this.banco.object('relato/' + this.relato.key).update(this.relato);
      this.modal.dismiss();
      this.rota.navigate(['listar']);
    }

  }
}
