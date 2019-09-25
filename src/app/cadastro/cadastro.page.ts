import { Component, OnInit } from '@angular/core';
import { Banco } from '../entidade/banco';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroComponent implements OnInit {

cadastro: Banco = new Banco();
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {
  }
salvar(){
  this.banco.list('cadastro').push(this.cadastro);

  this.cadastro = new Banco();

}
}
