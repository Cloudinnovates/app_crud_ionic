/*
  CTRL + . => para imnportar automaticamente
*/

import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  //Endereço URL da API
  serverApi: string = "http://192.168.15.11/api_crud_php/";  

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
    let url = this.serverApi + urlApi;
    return this.httpClient.post(url, JSON.stringify(dados), httpOptions).map(res => res);
  } 

}
