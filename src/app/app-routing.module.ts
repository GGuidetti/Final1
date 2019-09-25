import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.page';
import { EntrarComponent } from './entrar/entrar.page';
import { CalculoComponent } from './calculo/calculo.page';
import { ResultadoComponent } from './resultado/resultado.page';
import { RelatoComponent } from './relato/relato.page';
import { BankComponent } from './bank/bank.page';
import { Bank2Component } from './bank2/bank2.page';
import {ContatoListaPage } from './listar/listar.page';
import {ContatoLista2Page } from './listar2/listar2.page';
import { Banco } from './entidade/banco';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'cadastro', component: CadastroComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'calculo', component: CalculoComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: 'relato', component: RelatoComponent },

  { path: 'bank', component: BankComponent },
  { path: 'listar', component:  ContatoListaPage },
   { path: 'bank2', component: Bank2Component },
{ path: 'listar2', component:  ContatoLista2Page },  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'salvar', loadChildren: './cidade/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar', loadChildren: './cidade/listar/listar.module#ListarPageModule' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
