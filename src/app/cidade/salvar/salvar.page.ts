import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Estado } from '../../estado';
import { Cidade } from '../entidade/cidade';


@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {
//objeto para vincular aos campos do formulário
cidade : Cidade = new Cidade();
//lista de estado para inserir no combobox
listaEstado: Observable<Estado[]>;



constructor(private fire: AngularFireDatabase, private rota: Router) {
//AngularFireDatabase é a classe que possui os métodos para manipular os dados do banco
//Router é a classe que possui o método para determinar a navegação do aplicativo
this.listaEstado = this.fire.list<Estado>('marca').snapshotChanges().pipe(
map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() }))));
}

salvar(){
this.fire.list('tamanho').push(this.cidade);
this.cidade = new Cidade();
this.rota.navigate(['listar-cidade']);
}



  ngOnInit() {

  }

}
