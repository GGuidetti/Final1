import {Component} from '@angular/core';
@Component({

    selector: 'calculo-page',
    templateUrl: 'calculo.page.html'
})


export class CalculoComponent{
    altura: number =0;
    base: number =0;
    resultado: string;

    calcular() : void{
      var area = Number(this.base)*Number(this.altura)/2;
      this.resultado='a area é:'+area;


    }
    a(){
      alert ('BR: 33    USA:5    EURO 35    AU:3.5');
    }
    b(){
      alert ('BR: 34    USA:6    EURO 36    AU:4.5');
    }
    c(){
      alert ('BR: 35    USA:6.5    EURO 37    AU:5');
    }
    d(){
      alert ('BR: 36    USA:7.5    EURO 38    AU:6');
    }
    e(){
      alert ('BR: 37    USA:8.5    EURO 39    AU:7');
    }
    f(){
      alert ('BR: 38    USA:9    EURO 40    AU:7.5');
    }
    g(){
      alert ('BR: 39    USA:9.5    EURO 41    AU:8');
    }
    h(){
      alert ('BR: 40    USA:10    EURO 42    AU:8.5');
    }
    i(){
      alert ('BR: 41    USA:10.5    EURO 43    AU:9');
    }
    j(){
      alert ('BR: 42    USA:12    EURO 44    AU:10.5');
    }
    k(){
      alert ('BR: 43    USA:13    EURO 45    AU:11');
    }
    l(){
      alert ('BR: 44    USA:14    EURO 46    AU:11.5');
    }



}
