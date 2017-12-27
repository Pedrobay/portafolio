import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  productos_filtrado: any[] = [];
  cargando: boolean = true;

  constructor(private http: Http) {
    this.cargar_productos();
  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://paginaweb-86f5a.firebaseio.com/productos/${cod}.json`);
  }
  public cargar_productos() {
    this.cargando = true;
    let promesa = new Promise ( (resolve, reject ) =>{
      this.http.get('https://paginaweb-86f5a.firebaseio.com/productos_idx.json')
        .subscribe(res => {
          //  console.log(res.json());
          //  setTimeout(()=>{
          this.cargando = false;
          this.productos = res.json();
          resolve();
          //  },1500);

        });

    } ); return promesa;

  }

  public buscar_producto( termino:string ){
    this.productos.forEach(prod =>{
      //  console.log( prod );

        if(this.productos.length == 0) {
          this.cargar_productos( ).then(()=>{

          });
        }
    })

  }
}
