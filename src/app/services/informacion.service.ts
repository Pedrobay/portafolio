import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {
info:any = {};
cargada:boolean = false;
cargada_sobre_nosotros = false;
  constructor( public http:Http ) {
    this.http.get("assets/data/info.pagina.json").subscribe(data => {

      //this.cargada = true;
    //  this.info = data.json();
    //  console.log(this.info);
    });
  }

}
///////////////////SIN HACER!!!////////////
