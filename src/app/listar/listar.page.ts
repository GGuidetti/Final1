import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {RelatoComponent } from '../relato/relato.page';
import { map } from 'rxjs/operators'

@Component({
  selector: 'listar-page',
  templateUrl: 'listar.page.html'
})
export class ContatoListaPage implements OnInit {
  listaContatos: Observable<any[]>;
  constructor(private fire: AngularFireDatabase) {
    this.listaContatos = this.fire.list('relato').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      }) ))
    );

  }

  ngOnInit() {

  }

excluir (chave) {
  this.fire.list('relato').remove(chave);
  alert("excluído");
}

}
