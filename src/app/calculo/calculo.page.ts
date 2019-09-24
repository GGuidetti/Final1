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
      alert ('BR:33    USA:5 (f)   EURO:35    AU:3.5    JAP:21');
    }

b(){
      alert ('BR:34    USA:6 (f)    EURO:36    AU:4.5    JAP:22');
    }

c(){
      alert ('BR:35    USA:6 1/2 (f)    EURO:37    AU:5    JAP:22.5');
    }

d(){
      alert ('BR:36    USA:7 1/2 (f)   EURO:38    AU:6    JAP:23.5');
    }

e(){
      alert ('BR:37   USA:8 1/2 (f)   EURO:39    AU:7    JAP:24.5');
    }

f(){
      alert ('BR:38    USA:9 (f)   EURO:40    AU:7.5    JAP:25');
    }

g(){
      alert ('BR:39    USA:9 1/2 (f)  ou  8 (m)  EURO:41    AU:8    JAP:25.5');
    }

h(){
      alert ('BR:40    USA:10 (f) ou 8 1/2 (m)    EURO:42    AU:8.5    JAP:26');
    }

i(){
      alert ('BR:41    USA:10 1/2 (f) ou 9 (m)   EURO:43    AU:9    JAP:27');
    }

j(){
      alert ('BR:42    USA:10 1/2 (m)    EURO:44    AU:10.5    JAP:28');
    }

k(){
      alert ('BR:43    USA:11 1/2 (m)    EURO:45    AU:11.5    JAP:29');
    }

l(){
      alert ('BR:44    USA:12 (m)   EURO:46    AU:12    JAP:29.5');
    }

m(){
      alert ('BR:45    USA:13 (m)   EURO: 47    ');
    }

n(){
      alert ('BR:46    USA:14 (m)    EURO:48    ');
    }

o(){
      alert ('BR:47    EURO:49    AU:3.5');
    }





}
