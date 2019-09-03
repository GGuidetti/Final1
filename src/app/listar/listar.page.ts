import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {RelatoComponent } from '../relato/relato.page';
import { map } from 'rxjs/operators'
import { BankComponent } from '../bank/bank.page';
import { Router, NavigationExtras } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'listar-page',
  templateUrl: 'listar.page.html'
})
export class ContatoListaPage implements OnInit {
  listaContatos: Observable<any[]>;
  listaFiltro: any[];
  filtro = {}; //regras ativas do filtro
  relato: any;
  valor: string;

  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaContatos = this.fire.list('relato').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }

  ngOnInit() {
    this.listaContatos.subscribe(tenis => {
        this.relato = tenis;
        this.listaFiltro = _.filter(this.relato, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['modelo'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.relato, _.conforms(this.filtro));
  }
excluir (chave) {
  this.fire.list('relato').remove(chave);
  alert("excluído");
}

}
