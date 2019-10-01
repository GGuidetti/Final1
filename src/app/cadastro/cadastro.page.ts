import { Component, OnInit } from '@angular/core';
import { Banco } from '../entidade/banco';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroComponent implements OnInit {

  cadastro: Banco = new Banco();
  constructor(private banco: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { }


  ngOnInit() {
  }

  salvar() {
    this.banco.list('cadastro').push(this.cadastro);

    this.afAuth.auth.createUserWithEmailAndPassword(this.cadastro.email, this.cadastro.senha);
    this.router.navigate(['calculo']);

  }
}
