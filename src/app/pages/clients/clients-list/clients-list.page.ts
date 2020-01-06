import { Component, OnInit } from '@angular/core';

//Hell
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.page.html',
  styleUrls: ['./clients-list.page.scss'],
})
export class ClientsListPage implements OnInit {

  //Endereço URL da API
  //urlApi: string = "clients";
  urlApi: string = "clients/clients.php";
  
  //Atributos
  name: string;
  clients: any;
  scroolStart: number = 0;
  scroolLimit: number = 5;

  //Construtor da classe principal
  constructor(
    private router: Router,
    private service: ClientsService,
    private navController: NavController,
    private toastController: ToastController,
    private actRoute: ActivatedRoute
  ) {
    //CODE...
  }

  //Primeiro método a ser carregado toda vez que eu entrar na página
  ionViewWillEnter() {
    this.name = "";
    this.clients = [];
    this.scroolStart = 0;

    this.getAll();
  }  

  //Primeiro método a ser carregado toda vez que eu criar essa página
  ngOnInit() {
    //CODE...
  }  

  //Refresh na página de lista de registros
  onClickRefresh(event) {    
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 500);
  }

  //Recupera todos os registros
  onClickInfiniteScroll(event) {  
    this.scroolStart += this.scroolLimit;
    setTimeout(() => {
      this.getAll().then(() => { 
        event.target.complete();
       });     
    }, 500);      
  }

  //Redirecionando para a página de Cadastrar
  redirectPageClientAdd(){
    this.router.navigate(['/clients-add']);
  }

  //Método para atualizar
  onClickPut(id, name, phone, email, updated_at){
    this.router.navigate(['/clients-add/' + id + '/' + name + '/' + phone + '/' + email + '/' + updated_at]);
  }

  //Método para vizualizar os dados registrados no formulário de edição
  onClickShow(id, name, phone, email, created_at, updated_at){
    this.router.navigate(['/clients-details/' + id + '/' + name + '/' + phone + '/' + email  + '/' + created_at  + '/' + updated_at]);
  }

  //Recupera todos os registros
  getAll(){
    return new Promise(resolve => {
      let dados = {
        method: 'get',
        scroolLimit: this.scroolLimit,
        scroolStart: this.scroolStart
      };
      
      this.service.post(dados, this.urlApi).subscribe(data => {
        for(let client of data['result']){
          this.clients.push(client);
        }
        resolve(true);
      });
    });
  }

  //Procura por um registro expecífico, tipo "getById"
  onClickSearch(){
    return new Promise(resolve => {
      let dados = {
        method : 'search',
        name: this.name
      };

      this.service.post(dados, this.urlApi).subscribe(data => {
        this.clients = [];
        for(let client of data['result']){
          this.clients.push(client);
        }
        resolve(true);
      });

    });
  }

  //Método para cadastrar
  onClickDelete(id){
    return new Promise(resolve => {
      let dados = {
        method : 'delete',
        id : id
      };

      this.service.post(dados, this.urlApi).subscribe(data => {
        if(data){
          this.ionViewWillEnter();           
          this.msgDeleteSuccess();         
          console.log('Success, Cadastrado com sucesso!');     
        }else{
          this.ionViewWillEnter();     
          this.msgDeleteError();
          console.log('Error, Não foi possível cadastrar!');
        }        

      });      
        
    });
  }  

  //Mensagem de sucesso ao cadastrar
  async msgDeleteSuccess() {
    const toast = await this.toastController.create({
      message: 'Excluído com sucesso!',
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  ////Mensagem de erro ao cadastrar
  async msgDeleteError() {
    const toast = await this.toastController.create({
      message: 'Error, Não foi possível excluir!',
      duration: 2000,
      position: 'bottom',
      color: 'danger'
    });
    toast.present();
  }

}
