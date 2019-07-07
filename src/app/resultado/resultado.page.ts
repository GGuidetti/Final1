import {Component} from '@angular/core';
import { Bank2Component } from '../bank2/bank2.page';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({

    selector: 'resultado-page',
    templateUrl: 'resultado.page.html'
})


export class ResultadoComponent{
    altura: number =0;
    base: number =0;
    resultado: string;

    calcular() : void{
      var area = Number(this.base)*Number(this.altura)/2;
      this.resultado='a area é:'+area;


    }
    cadastro: Bank2Component = new Bank2Component();
      constructor(private banco: AngularFireDatabase) { }

      ngOnInit() {
      }
    listar2(){
      this.banco.list('cadastro').push(this.cadastro);
      this.cadastro = new Bank2Component();

}
}
