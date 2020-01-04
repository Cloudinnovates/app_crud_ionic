/*
  CTRL + . => para imnportar automaticamente
*/

/*
  Instalando dependencias...
    
    $ ionic cordova plugin add cordova-plugin-advanced-http
    $ npm install @ionic-native/http
    $ npm install rxjs@6 rxjs-compat@6 --save
*/

import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  //serve: string = "";
  serve: string = "http://192.168.15.11:80/api_crud_laravel/public/api/categories";

  constructor(
    private httpClient: HttpClient
  ) {
    //CODE...
  }

  postCategory(data: any){
    return new Promise((resolve, reject) => {
      let url = this.serve;
      this.httpClient.post(url, data)
        .subscribe((result: any) => {
          resolve(result.json());
      },
      (error) => {
        reject(error.json());
      });
    });
  }    

}
