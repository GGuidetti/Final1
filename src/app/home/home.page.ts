import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Usuario } from '../entidade/usuário';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
usuario: Usuario = new Usuario();
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  logar(){
  this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
  () => { this.router.navigate(['calculo']); }
).catch( (erro) => alert('erro') );
  }


  logout() {
this.afAuth.auth.signOut();
this.router.navigate(['/']);
}

  redefinir() {
    alert('verifique seu email') ;
this.afAuth.auth.sendPasswordResetEmail(this.usuario.email).then(
() => alert('verifique seu email') ); { this.router.navigate([]); }





}
}
