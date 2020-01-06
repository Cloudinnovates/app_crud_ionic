import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.page.html',
  styleUrls: ['./home-view.page.scss'],
})
export class HomeViewPage implements OnInit {

  //Atributos
  dataLogin: any;
  userLogged: string;

  //Construtor da nossa classe principal
  constructor(
    private router:Router,
    private service: ClientsService,
    private nativeStorage: NativeStorage,
    public toastController: ToastController     
  ) {
    //Para importar altomaticamente basta selecionar uma dependência ex.: "ToastController" pressionar "CTRL + ."
  }

  ionViewWillEnter(){
    this.nativeStorage.getItem('session_storage').then((res)=>{
      this.dataLogin = res;
      this.userLogged = this.dataLogin.userLogged;
      console.log(res);
    });
  }

  //Primeiro método a ser inicializado
  ngOnInit() {
    //CODE...
  }

  //Deslogar o usuário do sistema
  async onClickLogout(){
    this.nativeStorage.clear();
    this.router.navigate(['/login-view']);
    const toast = await this.toastController.create({
      message: 'Logout with success!',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
