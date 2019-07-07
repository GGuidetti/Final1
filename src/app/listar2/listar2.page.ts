import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {CadastroComponent } from '../cadastro/cadastro.page';
import { map } from 'rxjs/operators'

@Component({
  selector: 'listar2-page',
  templateUrl: 'listar2.page.html'
})
export class ContatoLista2Page implements OnInit {
  listaContatos: Observable<any[]>;
  constructor(private fire: AngularFireDatabase) {
    this.listaContatos = this.fire.list('cadastro').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      }) ))
    );

  }

  ngOnInit() {
  }



}
