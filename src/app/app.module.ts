import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BankComponent } from './bank/bank.page';
import { Bank2Component } from './bank2/bank2.page';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroComponent } from './cadastro/cadastro.page';
import { EntrarComponent } from './entrar/entrar.page';
import { CalculoComponent } from './calculo/calculo.page';
import { ResultadoComponent } from './resultado/resultado.page';
import { RelatoComponent } from './relato/relato.page';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import {ContatoListaPage } from './listar/listar.page';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {ContatoLista2Page } from './listar2/listar2.page';
import { AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  declarations: [AppComponent,ContatoListaPage,ContatoLista2Page, BankComponent, Bank2Component, CadastroComponent, EntrarComponent, CalculoComponent, ResultadoComponent, RelatoComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, AngularFireModule.initializeApp({ apiKey: "AIzaSyAQZlj89YAiHri2tPZBNuZ2knVr4WVEB_w",
    authDomain: "medepe-9e19a.firebaseapp.com",
    databaseURL: "https://medepe-9e19a.firebaseio.com",
    projectId: "medepe-9e19a",
    storageBucket: "medepe-9e19a.appspot.com",
    messagingSenderId: "368839412561",
    appId: "1:368839412561:web:1871e4a6aeed9130"

}), AngularFireDatabaseModule ],
  providers: [
    StatusBar,
    SplashScreen, AngularFireAuth,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
