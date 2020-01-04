import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.page.html',
  styleUrls: ['./clients-add.page.scss'],
})
export class ClientsAddPage implements OnInit {

  name: string = "";
  phone: string = "";
  email: string = "";

  constructor(
    private router: Router,
    private service: ClientsService
  ) {
    //CODE...
  }

  ngOnInit() {
    //CODE...
  }

  onClickAdd(){
    return new Promise(resolver => {
      let dados = {
        requisicao: 'add',
        name: this.name,
        phone: this.phone,
        email: this.email
      };
      this.service.post(dados)
        .then(data => {
          this.router.navigate(['/clients-list']);
          console.log('Success, Cadastrado com sucesso!');        
      })
    });
  }

}
