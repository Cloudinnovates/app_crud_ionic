/*
  CTRL + . => para imnportar automaticamente
*/

/*
  Instalando dependencias...
    
    $ ionic cordova plugin add cordova-plugin-advanced-http
    $ npm install @ionic-native/http
    $ npm install rxjs@6 rxjs-compat@6 --save
    $ npm install rxjs-compat
*/

import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  //Endereço URL da API
  //server: string = "";
  //server: string = "http://192.168.15.11:80/api_crud_laravel/public/api/clients";
  //server: string = "http://192.168.15.11/api_crud_php/clients/clients.php";

  //server: string = "http://192.168.15.11:80/api_crud_laravel/public/api/";
  server: string = "http://192.168.15.11/api_crud_php/";  

  //Construtor da classe principal
  constructor(
    private httpClient: HttpClient
  ) {
    //CODE...
  }

  post(dados: any, urlApi: string){
    const httpOptions = {headers: new HttpHeaders({
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    })};
    let url = this.server + urlApi;
    return this.httpClient.post(url, JSON.stringify(dados), httpOptions).map(res => res);
  } 

}
