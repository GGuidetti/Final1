import { Component, OnInit } from '@angular/core';
import { Banco } from '../entidade/banco';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Usuario } from '../entidade/usuário';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  providers:[AngularFireAuth]
})
export class CadastroComponent implements OnInit {
usuario:Usuario= new Usuario();
cadastro: Banco = new Banco();
  constructor(private banco: AngularFireDatabase, private angularfireauth: AngularFireAuth, private router :  Router) { }

  ngOnInit() {
  }
  salvar(){
    this.banco.list('cadastro').push(this.cadastro);
    
    this.cadastro = new Banco();

  }
  }
