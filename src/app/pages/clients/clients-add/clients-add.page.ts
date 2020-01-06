import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.page.html',
  styleUrls: ['./clients-add.page.scss'],
})
export class ClientsAddPage implements OnInit {
  
  //Endereço URL da API
  //urlApi: string = "clients";
  urlApi: string = "clients/clients.php";

  //Atributos
  id: number;
  name: string = "";
  phone: string = "";
  email: string = "";
  created_at: string = "";
  updated_at: string = "";

  //Construtor da classe prncipal
  constructor(
    private router: Router,
    private service: ClientsService,
    private navController: NavController,
    private toastController: ToastController,
    private actRoute: ActivatedRoute
  ) {
    //CODE...
  }

  //Primeiro método a ser iniciado
  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {
      this.id = data.id;
      this.name = data.name;
      this.phone = data.phone;
      this.email = data.email;
      this.created_at = data.created_at;
      this.updated_at = data.updated_at;
      console.log(data);
    });
  }

  //Método para cadastrar
  onClickPost(){
    return new Promise(resolve => {
      let dados = {
        method: 'post',
        name: this.name,
        phone: this.phone,
        email: this.email,
        created_at: this.created_at
      };
      
      this.service.post(dados, this.urlApi).subscribe(data => {
        if(data){
          this.router.navigate(['/clients-list']);        
          this.msgPostSuccess();         
          console.log('Success, Cadastrado com sucesso!');     
        }else{
          this.navController.pop();
          this.msgPostError();
          console.log('Error, Não foi possível cadastrar!');
        }        

      });      
        
    });
  }

  //Método pra atualizar
  onClickPut(){
    return new Promise(resolve => {
      let dados = {
        method : 'put',
        id: this.id,
        name: this.name,
        phone: this.phone,
        email: this.email,
        updated_at: this.updated_at
      };
      this.service.post(dados, this.urlApi)
      .subscribe(data => { 
        if(data){
          this.router.navigate(['/clients-list']);        
          this.msgPutSuccess();         
          console.log('Success, Atualizado com sucesso!');     
        }else{
          this.navController.pop();
          this.msgPutError();
          console.log('Error, Não foi possível atualizar!');
        }          
      });          
    });
  }

  //Redirecionando para a página de lista
  redirectPageClientList(){
    this.router.navigate(['/clients-list']);
  }  

  //Mensagem de sucesso ao cadastrar
  async msgPostSuccess() {
    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso!',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  ////Mensagem de erro ao cadastrar
  async msgPostError() {
    const toast = await this.toastController.create({
      message: 'Error, Não foi possível cadastrar!',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    toast.present();
  }

  //Mensagem de sucesso ao atualizar
  async msgPutSuccess() {
    const toast = await this.toastController.create({
      message: 'Atualizado com sucesso!',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  ////Mensagem de erro ao atualizar
  async msgPutError() {
    const toast = await this.toastController.create({
      message: 'Error, Não foi possível atualizar!',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    toast.present();
  }

}
