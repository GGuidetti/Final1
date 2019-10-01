import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Banco } from '../entidade/banco';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cadastro: Banco = new Banco();
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.cadastro.email, this.cadastro.senha).then(
      () => { this.router.navigate(['calculo']); }
    ).catch((erro) => alert('erro'));
  }


  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  redefinir() {
    alert('verifique seu email');
    this.afAuth.auth.sendPasswordResetEmail(this.cadastro.email).then(
      () => alert('verifique seu email')); { this.router.navigate([]); }





  }
}
